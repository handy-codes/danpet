import Link from "next/link";
import Slider from "@/app/(dashboard)/_components/slider/Slider";


export default function Home() {
  return (
    <main>
      <Slider/>
      <h1>hello world</h1>
      <Link href={'/about'}>
        <div className="">this is link to about page</div>
      </Link>
      <Link href={'/services'}>
        <div className=""><h1>link to Services page</h1></div>
        </Link>
      <Link href={'/career'}>
        <div className=""><h1>link to careerpage</h1></div>
        </Link>
    </main>
  );
}
