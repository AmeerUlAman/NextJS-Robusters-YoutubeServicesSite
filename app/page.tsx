import Image from "next/image";
import Intro from "./intro/intro";
import Intro2 from "./demo/intro2";
import Intro3 from "./demo2/intro3";
import Intro4 from "./demo4/intro4";
import Intro5 from "./demo5/intro5"

export default function Home() {
  return (
<div>
  
<Intro/>
<Intro2/>
<Intro3/>
<Intro4/>
<Intro5/>
</div>
  );
}
