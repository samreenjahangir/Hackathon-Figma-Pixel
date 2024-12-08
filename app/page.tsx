
import BEST from "@/components/BESTAIR";
import Featured from "@/components/FEATURED";
import GearUp from "@/components/GEARUP";
import Nav from "@/components/HEADER";
import Hero from "@/components/HERO";
import Image from "next/image";

export default function Home() {
  return (
  <main>
    <Nav/>
    <Hero/>
    <BEST/>
    <Featured/>
    <GearUp/>
  </main>
  )
}
