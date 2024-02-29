import React from "react";

const About = () => {
  return (
    <div
      id="about"
      name="about"
      className="flex flex-col items-center justify-center mt-10 py-5 px-3"
      data-aos="fade-down"
    >
      <h2 className="title">CSI-DMCE</h2>
      <div className="mt-3 max-w-5xl flex flex-col justify-center items-center text-center">
        <div className="flex flex-col justify-center items-center mb-4 font-semibold">
          {/* <img
            className="h-28 sm:h-40 object-contain mb-3 rounded-xl"
            src={require("../assets/head/vaishali_maam.png")}
            alt="vaishali gaidhane"
          /> */}
          {/* <div className="text-lg sm:text-2xl">Prof - Vaishali Gaidhane</div>
          <div className="text-sm sm:text-lg">FACULTY CO-ORDINATOR</div>
          <div className="text-sm sm:text-lg">Year of Establishment : 2012</div> */}
        </div>
        <div className="sm:text-xl text-gray-300">
          <div className="mb-2 leading-loose">
            CSI DMCE - Student branch, establishment in the year 2012, conducts
            various workshops, seminars, technical competition and also
            Technical fest in association with Computer Association for
            Technological Trends (catt).
          </div>
          <div className="mb-2 leading-loose">
            The committee continuously works for fostering experience teamwork,
            networking etc. in our college. It is the Committee Responsible for
            organsing all the department level events like workshops, seminars,
            competitions, celebrations,etc.
          </div>
          <div className="leading-loose">
            CSI CATT ALSO CONTRIBUTES LARGELY IN ORGANISING EVENTS OF TECHNITUDE
            (TECHNICAL FESTIVAL OF DMCE ). ALL EFFORTS ARE VERY WELL ENCOURAGED
            BY Prof - Vaishali Gaidhane (FACULTY COORDINATOR) AND DR AMOL PANDE
            (HEAD OF DEPARTMENT).
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
