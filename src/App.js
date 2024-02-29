import React, { useEffect, useState, useMemo, lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";
import LazyLoad from "react-lazyload";
import videoBG from "./assets/backgrounds/circuit_-_27725 (Original).mp4";
import Aos from "aos";

// Lazy-loaded components
const LazyTimeline = lazy(() => import("./components/Timeline"));
const LazyEvents = lazy(() => import("./components/Events"));
const LazySponsors = lazy(() => import("./components/Sponsors"));
const LazyAbout = lazy(() => import("./components/About"));
const LazyLeads = lazy(() => import("./components/Leads"));

function App() {
  const [counts, setCounts] = useState({
    day: 0,
    hour: 0,
    minute: 0,
    second: 0,
  });

  useEffect(() => {
    Aos.init({
      once: true,
      startEvent: "DOMContentLoaded",
    });
  }, []);

  useEffect(() => {
    // const deadline = new Date("Sep 12, 2023 11:00:00").getTime();
    // const interval = setInterval(() => {
    //   const now = new Date().getTime();
    //   const t = deadline - now;
    //   if (t < 0) {
    //     clearInterval(interval);
    //     setCounts({ day: 0, hour: 0, minute: 0, second: 0 });
    //   } else {
    //     setCounts((prevCounts) => ({
    //       day: Math.floor(t / (1000 * 60 * 60 * 24)),
    //       hour: Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    //       minute: Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)),
    //       second: Math.floor((t % (1000 * 60)) / 1000),
    //     }));
    //   }
    // }, 1000);
  }, []);

  // Memoize the Navbar component
  const MemoizedNavbar = useMemo(() => <Navbar />, []);

  return (
    <div>
      <ScrollToTop />
      {MemoizedNavbar}
      <div className="homeBg relative flex flex-col items-center justify-center py-5 px-3 h-screen w-screen">
        <LazyLoad height={200} offset={100}>
          <video
            src={videoBG}
            autoPlay
            loop
            muted
            playsInline
            className="back-vid"
          ></video>
        </LazyLoad>
        <div className="container">
          <div className="row">
            <div className="text-center headBox">
              <h3 className="animate-charcter text-center bomber-escort">
                CSI DMCE
              </h3>
              {/* <h3 className="animate-charcter text-center bomber-escort">
                2.0
              </h3> */}
            </div>
          </div>
        </div>
        <div className="absolute text-glow bomber-escort bottom-20 flex justify-center items-center text-lg sm:text-2xl md:text-3xl lg:text-4xl gap-2">
          {/* <span>{counts.day}D</span>
          <span>:</span>
          <span>{counts.hour}H</span>
          <span>:</span>
          <span>{counts.minute}M</span>
          <span>:</span>
          <span>{counts.second}S</span> */}
          <span style={{ textAlign: "center" }}>
            "I solemnly swear I am up to no good"
          </span>
        </div>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        {/* <LazyTimeline /> */}
        <LazyAbout />
        <LazyEvents />
        {/* <LazySponsors /> */}
        <LazyLeads />
      </Suspense>
      <div className="flex flex-col items-center justify-center mt-10 py-5 px-3">
        <div className="mb-10 astro-space text-xl sm:text-3xl md:text-4xl text-glow text-center after:block after:mt-3 after:border-b-2 after:border-slate-700 after:w-[23rem] sm:after:w-[29rem] md:after:w-[35rem]">
          Stay connected to us
        </div>
        <div className="social flex gap-6 md:gap-14 justify-center items-center my-4 flex-wrap">
          <a
            href="https://twitter.com/dmce_csi_?t=dMktJKdkhiSltrcf11sYaA&s=08"
            target="_blank"
            rel="noreferrer"
          >
            <LazyLoad height={50} offset={100}>
              <img
                className="h-10 sm:h-12 hover:scale-110"
                src={require("./assets/twitter.png")}
                alt="Twitter"
              />
            </LazyLoad>
          </a>
          <a
            href="https://www.instagram.com/csidmce/"
            target="_blank"
            rel="noreferrer"
          >
            <LazyLoad height={50} offset={100}>
              <img
                className="h-10 sm:h-12 hover:scale-110"
                src={require("./assets/instagram.png")}
                alt="Instagram"
              />
            </LazyLoad>
          </a>
          <a
            href="https://www.linkedin.com/in/csicattdmce"
            target="_blank"
            rel="noreferrer"
          >
            <LazyLoad height={50} offset={100}>
              <img
                className="h-10 sm:h-12 hover:scale-110"
                src={require("./assets/linkedin.png")}
                alt="LinkedIn"
              />
            </LazyLoad>
          </a>
          <a
            href="https://youtube.com/channel/UCGF7OHVqV0jn6e9e6FHPuAg"
            target="_blank"
            rel="noreferrer"
          >
            <LazyLoad height={50} offset={100}>
              <img
                className="h-10 sm:h-12 hover:scale-110"
                src={require("./assets/youtube.png")}
                alt="YouTube"
              />
            </LazyLoad>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
