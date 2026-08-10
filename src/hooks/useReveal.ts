import { useEffect } from "react";

/**
 * Scroll-reveal for elements marked [data-reveal] / [data-cascade].
 *
 * Ported from the live site's inline bootstrap script. Content is visible
 * by default (see the .js-reveal rules in styles.css) — only a browser
 * that runs this effect and supports IntersectionObserver ever hides
 * anything, so crawlers and text-only agents always see the fully
 * rendered page.
 */
export function useReveal() {
  useEffect(() => {
    const root = document.documentElement;
    if (!("IntersectionObserver" in window)) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    root.classList.add("js-reveal");

    const showAll = () => {
      root.classList.remove("js-reveal");
      document.querySelectorAll("[data-reveal]").forEach((n) => n.classList.add("is-in"));
    };
    const failsafe = setTimeout(showAll, 10000);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.04 },
    );

    const seen = "data-rev-seen";
    const scan = () => {
      document.querySelectorAll(`[data-reveal]:not([${seen}])`).forEach((n) => {
        n.setAttribute(seen, "");
        io.observe(n);
      });
    };
    scan();

    const mo = new MutationObserver(scan);
    mo.observe(root, { childList: true, subtree: true });

    return () => {
      clearTimeout(failsafe);
      io.disconnect();
      mo.disconnect();
      root.classList.remove("js-reveal");
      document.querySelectorAll(`[${seen}]`).forEach((n) => n.removeAttribute(seen));
    };
  }, []);
}
