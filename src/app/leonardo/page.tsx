import PortfolioHeader from "@/components/portfolio-header";
import Intro from "@/components/leo/intro-leo";
import SectionDivider from "@/components/section-divider";
import Projects from "@/components/leo/projects-leo";

export default function Page() {
  return (
    <>
      <PortfolioHeader />
      <main className="flex flex-col items-center px-4">
        <Intro />
        <SectionDivider />
        <Projects />
      </main>
    </>
  );
}
