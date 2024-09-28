// import Image from "next/image";
import Mobilenav from "@/app/(dashboard)/_components/Mobilenav";
import Link from "next/link";


const NavbarPage = () => {
  return ( 
 <header className="h-[80px] p-5 content-center text-white sticky top-0 bg-[#003B65]">
  <nav className="flex items-center content-center justify-between">
    <div className="">
        {/* <Image src={}></Image> */}
        <h1 className="text-2xl">Danglobal Petroleum</h1>
    </div>
    <div className="hidden sm:flex items-center content-center gap-6 uppercase mr-14 ">
      <Link  href={'/'}>
         <h1 className="">Home</h1>
      </Link>
      <Link href={'/about'}>
         <h1>About</h1>
      </Link>
      <Link href={'/services'}>
         <h1>Sevices</h1>
      </Link>
      <Link href={'/career'}>
         <h1>Careers</h1>
      </Link>
    </div>
    <Mobilenav/>
   </nav>
 </header>
);
}
 
export default NavbarPage;