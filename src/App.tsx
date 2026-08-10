import { useReveal } from "./hooks/useReveal";
import Nav from "./sections/Nav";
import Hero from "./sections/Hero";
import Demo from "./sections/Demo";
import Operations from "./sections/Operations";
import Rewrites from "./sections/Rewrites";
import Speed from "./sections/Speed";
import Usage from "./sections/Usage";
import Skill from "./sections/Skill";
import Attestation from "./sections/Attestation";
import Guarantees from "./sections/Guarantees";
import Limits from "./sections/Limits";
import Footer from "./sections/Footer";

export default function App() {
  useReveal();

  return (
    <div style={{ fontFamily: "Heebo, sans-serif", color: "#1A1A1A", background: "#FAF8F3", overflowX: "clip" }}>
      <Nav />
      <Hero />
      <Demo />
      <Operations />
      <Rewrites />
      <Speed />
      <Usage />
      <Skill />
      <Attestation />
      <Guarantees />
      <Limits />
      <Footer />
    </div>
  );
}
