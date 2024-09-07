import CompanyLogoSection from "./section/CompanyLogoSection";
import HeroSection from "./section/HeroSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <HeroSection />
      <CompanyLogoSection />
    </div>
  );
}
