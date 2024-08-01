import Image from "next/image"; 
import Hero from "./hero/hero";
import Vidtier from "./vidtiers/vidtier";
import Nav from "./nav/nav";
import Services from "./services/services";
import Pricing from "./pricing/pricing";
import Wwwu from "./wwwu/wwwu";
import Faq from "./faq/faq";

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
<Wwwu/>
<Pricing/>

<Faq/>
</div>
  );
}
