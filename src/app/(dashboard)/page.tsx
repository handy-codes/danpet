import Link from "next/link";
import Slider from "@/app/(dashboard)/_components/slider/Slider";
import GalleryPage from "./_components/gallery/Gallery";
import Intro from "./_components/Intro";


export default function Home() {
  return (
    <main>
      <Slider/>
      <Intro/>
      <GalleryPage/>
    </main>
  );
}
