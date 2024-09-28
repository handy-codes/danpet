import Link from "next/link";

export default function Home() {
  return (
    <main>
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
