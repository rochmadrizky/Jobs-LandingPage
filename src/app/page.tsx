import Custom from "./components/custom/Custom";
import Fitur from "./components/fitur/Fitur";
import Grafik from "./components/grafik/Grafik";
import Headline from "./components/headline/Headline";
import Hero from "./components/home/Hero";
import Info from "./components/info/Info";
import Media from "./components/media/Media";
import Navbar from "./components/navigasi/Navbar";

export default function Home() {
  return (
    <div className="">
      {/* kemarin selasa */}
      <Navbar />

      {/* done */}
      <div className="">
        <Hero />
      </div>
      {/*  */}

      {/* done */}
      <div className="">
        <Info />
      </div>
      {/*  */}

      {/* done */}
      <div className="">
        <Fitur />
      </div>
      {/*  */}

      {/* done */}
      <div className="">
        <Media />
      </div>
      {/*  */}

      {/* hari ini rabu*/}

      {/* done */}
      <div className="">
        <Grafik />
      </div>
      {/* done */}

      {/* belum done */}
      <div className="pb-60">
        <Headline />
      </div>
      {/*  */}

      {/* done */}
      <div className="">
        <Custom />
      </div>
      {/*  */}
    </div>
  );
}
