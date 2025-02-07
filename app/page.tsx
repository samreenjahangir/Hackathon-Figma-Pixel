

import DontMiss from "@/components/DONTMISS";
import Essential from "@/components/ESSENTIAL";
import Featured from "@/components/FEATURED";
import GearUp from "@/components/GEARUP";
import Hero from "@/components/HERO";
import Navigation from "@/components/Navigation";
import  SHOES  from "@/components/BEST"


export default function Home() {
  return (
  <main>
 
    <Hero/>
    <SHOES/>
    <Featured/>
    <GearUp/>
    <DontMiss/>
    <Essential/>
    <Navigation/>
  </main>
  )
}
