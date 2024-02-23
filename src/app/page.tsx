import Custom from "./components/custom/Custom";
import Fitur from "./components/fitur/Fitur";
import Grafik from "./components/grafik/Grafik";
import Headline from "./components/headline/Headline";
import Hero from "./components/home/Hero";
import Info from "./components/info/Info";
import Media from "./components/media/Media";
import Pricing from "./components/pricing/Pricing";
import Testi from "./components/testi/Testi";

export default function Home() {
  return (
    <div className="min-h-screen mx-auto">
      <div className="relative overflow-hidden">
        <section>
          <Hero />
        </section>

        <section className="pb-10 px-4">
          <Info />
        </section>

        <div className="absolute -z-10 bottom-0 overflow-hidden -left-60 lg:left-4 ">
          <img src="/hiasan/bola.png" alt="hiasan" />
        </div>
      </div>

      <div className="relative overflow-hidden">
        <section className="py-10 px-4">
          <Fitur />
        </section>

        <div className="absolute -z-10 top-60 overflow-hidden -right-60 md:top-32 lg:right-4 lg:top-0">
          <img src="/hiasan/bola.png" alt="hiasan" />
        </div>

        <div className="absolute -z-10 bottom-60 overflow-hidden -left-60 md:bottom-32 block lg:hidden">
          <img src="/hiasan/bola.png" alt="hiasan" />
        </div>
      </div>

      <div className="relative overflow-hidden">
        <section className="py-10">
          <Media />
        </section>

        <section className="py-10 px-4">
          <Grafik />
        </section>

        <section className="pb-72">
          <Headline />
        </section>

        <div className="absolute top-96 md:top-32 md:-right-60 lg:-right-40 overflow-hidden -z-10">
          <img src="/hiasan/kiri.png" alt="hiasan" className=" rotate-180" />
        </div>

        <div className="absolute bottom-[684px] md:bottom-52 md:-left-60 lg:-left-40 overflow-hidden -z-10">
          <img src="/hiasan/kiri.png" alt="hiasan" />
        </div>
      </div>

      <div className="relative overflow-hidden">
        <section className="py-10">
          <Custom />
        </section>

        <div className="absolute -z-10 top-80 overflow-hidden -right-60 md:top-[464px] lg:right-4 lg:top-0">
          <img src="/hiasan/bola.png" alt="hiasan" />
        </div>
      </div>

      <section className="py-10">
        <Testi />
      </section>

      <div className="relative overflow-hidden">
        <section className="py-10">
          <Pricing />
        </section>

        <div className="absolute -bottom-32 md:-top-32 md:-left-60 lg:-left-40 overflow-hidden -z-10">
          <img src="/hiasan/kiri.png" alt="hiasan" />
        </div>
      </div>
    </div>
  );
}
