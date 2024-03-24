import { useState, useEffect, useCallback } from "react";
import { smallHero, heroVideo } from "../../utils/videos";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


const HeroSection = () => {
    gsap.registerPlugin(useGSAP)


  const [videoSrc, setVideoSrc] = useState(heroVideo);

  useGSAP(() => {
    gsap.to("#hero", { opacity: 1, delay: 2 });
    gsap.to('#btnDiv', { opacity: 1, y: -50, delay: 2 })
  }, []);

  const handleWindowResize = useCallback(() => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHero);
    } else {
      setVideoSrc(heroVideo);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <section className="min-h-screen pt-[5rem] py-[2rem] flex items-center flex-col justify-between">
      <div id="hero" className="hero-title mt-6">
        iPhone 15 Pro
      </div>
      <div>
        <video
          src={videoSrc}
          className="pointer-events-none"
          autoPlay
          loop
          muted
        />
      </div>
      <div id='btnDiv' className="flex flex-col items-center gap-4 opacity-0 translate-y-20">
        <button type="button" className="btn">
          Buy Now
        </button>
        <p>From $199/Month to $999</p>
      </div>
    </section>
  );
};

export default HeroSection;
