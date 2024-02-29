import React from "react";
import "../App.css";
import "aos/dist/aos.css";

import slide_image_1 from "../assets/events/image1.jpg";
import slide_image_2 from "../assets/events/image2.jpg";
import slide_image_3 from "../assets/events/image3.jpg";
import slide_image_4 from "../assets/events/image4.jpg";
import slide_image_5 from "../assets/events/image5.jpg";
import slide_image_6 from "../assets/events/image6.jpg";
import slide_image_7 from "../assets/events/image7.jpg";

const Events = () => {
  const LeftCarousel = () => {
    const Carousel = document.getElementById("carousel");
    Carousel.scrollLeft -= Carousel.offsetWidth - 20;
  };
  const RightCarousel = () => {
    const Carousel = document.getElementById("carousel");
    Carousel.scrollLeft += Carousel.offsetWidth - 20;
  };

  const slides = [
    slide_image_1,
    slide_image_2,
    slide_image_3,
    slide_image_4,
    slide_image_5,
    slide_image_6,
    slide_image_7,
  ];

  return (
    <div
      id="events"
      className=" events relative flex flex-col items-center justify-center mt-20 py-5 px-3 overflow-hidden"
      data-aos="fade-right"
    >
      <h2 className="title">Our Events</h2>
      <div className="relative mx-3 sm:mx-14">
        <div className="absolute left-0 z-10 flex justify-center items-center h-full ">
          <svg
            className="h-10 md:h-16 cursor-pointer hover:scale-125 bg-black/50 rounded-r-lg"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            onClick={LeftCarousel}
          >
            <path d="M15 19l-7-7 7-7"></path>
          </svg>
        </div>
        <div className="absolute right-0 z-10 flex justify-center items-center h-full">
          <svg
            className="h-10 md:h-16 cursor-pointer hover:scale-125 bg-black/50 rounded-l-lg"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            onClick={RightCarousel}
          >
            <path d="M9 5l7 7-7 7"></path>
          </svg>
        </div>
        <div
          id="carousel"
          className="relative flex flex-shrink-0 gap-4 sm:gap-8 justify-start items-center scroll-smooth overflow-y-hidden overflow-x-scroll no-scrollbar py-1.5 sm:py-2.5"
        >
          {slides.map((event, index) => {
            return (
              <img
                className="h-72 sm:h-96 hover:scale-105 duration-300 ease-in-out rounded-lg"
                key={index}
                src={event}
                alt="Event Images"
              />
            );
          })}
        </div>
      </div>
      <div className="left-swipe text-[0.75rem] sm:text-lg md:text-xl absolute -bottom-0 right-10 sm:right-20 lg:right-32 capitalize">
        swipe to view more {">>"}
      </div>
    </div>
  );
};

export default Events;
