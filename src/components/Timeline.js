import React from "react";
import "./TimeLine.css";

const Timeline = () => {
  return (
    <div
      id="timeline"
      className="time__Line flex flex-col items-center justify-center mt-20 py-5"
    >
      <div className="title">Timeline</div>
      <div
        className="timeline_outer flex flex-col justify-center px-3 w-full overflow-hidden"
        style={{
          background: `url(${require("../assets/backgrounds/timelinebg.webp")})`,
          backgroundColor: "black",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <section className="timeline">
          <ul>
            <li data-aos="fade-left" data-aos-delay="100">
              <div className="content">
                <div className="timeline-content-info">
                  <span className="timeline-content-info-title">
                    Naval Odyssey
                  </span>
                  <span className="timeline-content-info-date">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://forms.gle/LDhu4qzZDwzX5gMp7"
                    >
                      <i className="fa-solid fa-link"></i>
                    </a>
                  </span>
                </div>
              </div>
            </li>
            <li data-aos="fade-right" data-aos-delay="200">
              <div className="content">
                <div className="timeline-content-info">
                  <span className="timeline-content-info-title">
                    Deadlock - A Sawscape
                  </span>
                  <span className="timeline-content-info-date">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://forms.gle/tRKfSWdfj1VQuuC78"
                    >
                      <i className="fa-solid fa-link"></i>
                    </a>
                  </span>
                </div>
              </div>
            </li>
            <li data-aos="fade-left" data-aos-delay="300">
              <div className="content">
                <div className="timeline-content-info">
                  <span className="timeline-content-info-title">
                    Hogwarts Havoc
                  </span>
                  <span className="timeline-content-info-date">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://forms.gle/vXWM7MCV4G9wuNMr9"
                    >
                      <i className="fa-solid fa-link"></i>
                    </a>
                  </span>
                </div>
              </div>
            </li>
            <li data-aos="fade-right" data-aos-delay="400">
              <div className="content">
                <div className="timeline-content-info">
                  <span className="timeline-content-info-title">
                    Circuit Mind
                  </span>
                  <span className="timeline-content-info-date">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://forms.gle/w8xrEkvuYeQ8PK4X7"
                    >
                      <i className="fa-solid fa-link"></i>
                    </a>
                  </span>
                </div>
              </div>
            </li>
            <li data-aos="fade-left" data-aos-delay="500">
              <div className="content">
                <div className="timeline-content-info">
                  <span className="timeline-content-info-title">
                    Descrypt Saga Showdown
                  </span>
                  <span className="timeline-content-info-date">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://forms.gle/7DJA1BkTJuagT7JY6"
                    >
                      <i className="fa-solid fa-link"></i>
                    </a>
                  </span>
                </div>
              </div>
            </li>
            <li data-aos="fade-right" data-aos-delay="600">
              <div className="content">
                <div className="timeline-content-info">
                  <span className="timeline-content-info-title">
                    Code Fusion
                  </span>
                  <span className="timeline-content-info-date">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://forms.gle/pi1uEbPdaiKY4Ynp7"
                    >
                      <i className="fa-solid fa-link"></i>
                    </a>
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Timeline;
