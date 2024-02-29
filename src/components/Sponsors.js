import React from "react";
import Spons1 from "../assets/Sponsors/hotel vrushali_page-0001.webp";
import Spons2 from "../assets/Sponsors/the_peg_page.webp";
import Spons3 from "../assets/Sponsors/coding-ninjas.webp";
import Spons4 from "../assets/Sponsors/logos_page.webp";
import Spons5 from "../assets/Sponsors/imfs.jpeg";
import Spon6 from "../assets/Sponsors/sausify.png";
import Spon7 from "../assets/Sponsors/codedeed.jpg";
import Spon8 from "../assets/Sponsors/annapurna.jpg";

const Sponsors = () => {
  return (
    <div
      id="sponsors"
      className="relative flex flex-col items-center justify-center mt-20 py-5 px-3"
      data-aos="fade-up"
    >
      <h2 className="title">Sponsors</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-5xl items-center">
        <img className="h-auto max-w-full rounded-lg" src={Spons1} alt="" />
        <img className="h-auto max-w-full rounded-lg" src={Spons5} alt="" />
        <img className="h-auto max-w-full rounded-lg" src={Spons4} alt="" />
        <img className="h-auto max-w-full rounded-lg" src={Spon7} alt="" />
        <img className="h-auto max-w-full rounded-lg" src={Spons2} alt="" />
        <img className="h-auto max-w-full rounded-lg" src={Spons3} alt="" />
        <img className="h-auto max-w-full rounded-lg" src={Spon6} alt="" />
        <img className="h-auto max-w-full rounded-lg" src={Spon8} alt="" />
      </div>
    </div>
  );
};

export default Sponsors;
