//components
import Content from "../components/Content";

// sections
import HeroSection from "./sections/HeroSection";
import FaqsSection from "./sections/FaqsSection";

export default function Home() {
  return (
    <>
      <Content bg="bg-red-200">
        <HeroSection />
      </Content>

      <Content bg="bg-blue-200">
        <FaqsSection />
      </Content>
    </>
  );
}
