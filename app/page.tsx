import Image from "next/image";
 import Intro3 from "./demo2/intro3";
import Hero from "./hero/hero";
import Vidtier from "./vidtiers/vidtier";
import Nav from "./nav/nav";
import Services from "./services/services";
import Pricing from "./pricing/pricing";

export default function Home() {
  return (
<div>
<Nav/>
  <center>
     <Image   width={1920}   height={1080}   quality={100} alt="LOGO"  src={'/logoorg.png'}  className='logo' />
</center>
 <Hero/>
 

<Vidtier/>
<Services/>
<Pricing/>
</div>
  );
}
