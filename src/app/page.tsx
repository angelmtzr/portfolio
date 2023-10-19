import HomeHeader from "@/components/home-header";
import PresentationImage from "@/components/presentation-image";
import { leoInfo, angelInfo } from "@/data";

export default function Home() {
  return (
    <>
      <HomeHeader />
      <main className="flex flex-col sm:flex-row items-center justify-center gap-20 mb-28 px-4">
        <PresentationImage
          href="/leonardo"
          name={leoInfo.name}
          profession={leoInfo.profession}
          imageUrl={leoInfo.imageUrl}
        />
        <PresentationImage
          href="/angel"
          name={angelInfo.name}
          profession={angelInfo.profession}
          imageUrl={angelInfo.imageUrl}
        />
      </main>
    </>
  );
}
