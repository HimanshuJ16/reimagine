import { FloatingNav } from "@/components/ui/floating-navbar";
import { Spotlight } from "@/components/ui/Spotlight";
import Image from "next/image";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import Spline from '@splinetool/react-spline/next';
import Navbar from "@/components/Navbar";
import ShootingStars from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

export default function Home() {
  return (
    <>
      <div className="h-full w-full md:items-center md:justify-center bg-black relative overflow-hidden">
      <ShootingStars />
      <StarsBackground />
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="grey"
      />
      <Spline
        scene="https://prod.spline.design/Lh3wg27iLmNLiYM0/scene.splinecode" 
      />
      </div>    
    </>
  );
}
