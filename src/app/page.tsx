import Fitur from "./components/fitur/Fitur";
import Hero from "./components/home/Hero";
import Info from "./components/info/Info";
import Media from "./components/media/Media";
import Navbar from "./components/navigasi/Navbar";

export default function Home() {
  return (
    <div className="">
      <Navbar />

      <div className="">
        <Hero />
      </div>

      <div className="">
        <Info />
      </div>

      <div className="">
        <Fitur />
      </div>

      <div className="">
        <Media />
      </div>
    </div>
  );
}
