import PortfolioHeader from "@/components/portfolio-header";
import Intro from "@/components/intro-angel";
import SectionDivider from "@/components/section-divider";
import Projects from "@/components/projects-angel";

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
