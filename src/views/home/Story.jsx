import {
  highlightFirst,
  highlightFourth,
  highlightThird,
} from "../../utils/videos";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Story = () => {
  useGSAP(() => {
    gsap.to("#sectionTitle", {
      scrollTrigger: "#sectionTitle",
      opacity: 1,
      y: 20,
      delay: 2,
    });
    gsap.to("#btnDiv", { opacity: 1, y: -50, delay: 2 });
  }, []);

  return (
    <div className="bg-zinc view-padding py-8">
      {/* ---videos--- */}
      <div className="space-y-2 mx-auto w-full md:w-3/4 my-6">
        <h1
          className="text-[3rem] font-bold text-gray-100 mb-[4rem] opacity-0"
          id="sectionTitle"
        >
          Explore Full Story
        </h1>
        <h2 className="text-[3rem] font-bold leading-none">
          iPhone.
          <br />
          Forged in Titanium
        </h2>
        <div>
          <video
            src={highlightFirst}
            className="pointer-events-none h-[60vh] w-full object-cover"
            autoPlay
            loop
            muted
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <video
            src={highlightFourth}
            className="pointer-events-none h-full object-cover"
            autoPlay
            loop
            muted
          />
          <video
            src={highlightThird}
            className="pointer-events-none h-full object-cover"
            autoPlay
            loop
            muted
          />
        </div>
      </div>
    </div>
  );
};

export default Story;
