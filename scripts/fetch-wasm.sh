#!/usr/bin/env bash
# Downloads the friction playground wrapper (loader.js + pkg/) from the
# engine's GitHub release tarball and stages it at the site root, where
# loader.js's own document-relative fetches (./pkg/package.json,
# ./packs/dms-index-en-v1.toml) expect to find it.
#
# The wrapper is consumed exactly as any third party would: never copied
# from the engine repo, never reimplemented — only ever unpacked from the
# published release asset.
set -euo pipefail

VERSION="${FRICTION_VERSION:-0.6.7}"
REPO="ngriaznov/friction"
ASSET="friction-playground-${VERSION}.tar.gz"
URL="https://github.com/${REPO}/releases/download/v${VERSION}/${ASSET}"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SITE_ROOT="$(cd "${SCRIPT_DIR}/.." && pwd)"
PUBLIC_DIR="${SITE_ROOT}/public"

echo "fetch-wasm: staging friction playground v${VERSION}"
echo "fetch-wasm: source ${URL}"

WORKDIR="$(mktemp -d)"
trap 'rm -rf "${WORKDIR}"' EXIT

ARCHIVE="${WORKDIR}/${ASSET}"

if ! curl -fsSL -o "${ARCHIVE}" "${URL}"; then
  echo "fetch-wasm: FAILED to download ${URL}" >&2
  echo "fetch-wasm: release v${VERSION} may not be published yet — check https://github.com/${REPO}/releases" >&2
  exit 1
fi

EXTRACT_DIR="${WORKDIR}/extracted"
mkdir -p "${EXTRACT_DIR}"
tar -xzf "${ARCHIVE}" -C "${EXTRACT_DIR}"

# The tarball may unpack its contents directly at the top level or inside a
# single wrapping directory (e.g. friction-playground-0.6.2/) — locate
# loader.js wherever it landed and treat its parent as the wrapper root.
LOADER_PATH="$(find "${EXTRACT_DIR}" -maxdepth 3 -name 'loader.js' -print -quit)"
if [ -z "${LOADER_PATH}" ]; then
  echo "fetch-wasm: FAILED — loader.js not found inside ${ASSET}" >&2
  exit 1
fi
WRAPPER_ROOT="$(dirname "${LOADER_PATH}")"

if [ ! -d "${WRAPPER_ROOT}/pkg" ]; then
  echo "fetch-wasm: FAILED — pkg/ not found alongside loader.js inside ${ASSET}" >&2
  exit 1
fi

mkdir -p "${PUBLIC_DIR}"
rm -rf "${PUBLIC_DIR}/pkg"

cp "${WRAPPER_ROOT}/loader.js" "${PUBLIC_DIR}/loader.js"
cp -R "${WRAPPER_ROOT}/pkg" "${PUBLIC_DIR}/pkg"

echo "fetch-wasm: staged public/loader.js"
echo "fetch-wasm: staged public/pkg/:"
find "${PUBLIC_DIR}/pkg" -maxdepth 1 -mindepth 1 -exec basename {} \; | sed 's/^/fetch-wasm:   /'
