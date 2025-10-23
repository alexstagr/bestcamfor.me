//components
import Content from "../components/Content";

// sections
import HeroSection from "./sections/HeroSection";
import FaqsSection from "./sections/FaqsSection";

export default function Home() {
  return (
    <>
      <Content>
        <HeroSection />
      </Content>

      <Content>
        <FaqsSection />
      </Content>
    </>
  );
}
