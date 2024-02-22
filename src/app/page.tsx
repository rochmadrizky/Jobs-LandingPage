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
    <div className="max-w-7xl mx-auto">
      <section>
        <Hero />
      </section>

      <section className="pb-10">
        <Info />
      </section>

      <section className="py-10">
        <Fitur />
      </section>

      <section className="py-10">
        <Media />
      </section>

      <section className="py-10">
        <Grafik />
      </section>

      <section className="pb-72">
        <Headline />
      </section>

      <section className="py-10">
        <Custom />
      </section>

      <section className="py-10">
        <Testi />
      </section>

      <section className="py-10">
        <Pricing />
      </section>
    </div>
  );
}
