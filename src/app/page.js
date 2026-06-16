import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Manifesto from "../components/Manifesto";
import AtelierGrid from "../components/AtelierGrid";
import Materials from "../components/Materials";
import FounderStory from "../components/FounderStory";
import WaitlistFooter from "../components/WaitlistFooter";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Manifesto />
      <AtelierGrid />
      <Materials />
      <FounderStory />
      <WaitlistFooter />
    </main>
  );
}
