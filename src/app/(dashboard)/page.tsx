import Link from "next/link";
import Slider from "@/app/(dashboard)/_components/slider/Slider";
import GalleryPage from "./_components/gallery/Gallery";
import Intro from "./_components/Intro";
import BackgroundImg from "./_components/backgroundimg/BackgroundImg";


export default function Home() {
  return (
    <main>
      <Slider/>
      <Intro/>
      <GalleryPage/>
      <BackgroundImg/>
    </main>
  );
}
