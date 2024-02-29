import React from "react";
import leads from "../json/Leads.json";
const Leads = () => {


  return (
    <div
      id="leads"
      className="flex flex-col items-center justify-center mt-10 py-5"
      data-aos = "fade-up"
    >
      <div className="title">CSI-DMCE LEADS</div>
      <div
        className="flex flex-col items-center justify-center w-full px-3"
        style={{
          background: `url(${require("../assets/backgrounds/bg.webp")})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "none",
        }}
      >
        <div className="my-3 max-w-7xl flex flex-wrap gap-4 justify-center items-center px-3">
          {leads.map((lead, index) => {
            return (
              <div
                className="flex flex-col items-center justify-end p-2 h-full sm:box-content"
                key={index}
              >
                <img
                  className={`h-32 ${
                    index === 0 || index === 1 ? "w-32" : "w-32"
                  } sm:h-48 sm:w-48 object-contain`}
                  src={require(`../assets/leads/${lead.image}.png`)}
                  alt="lead name"
                />
                <div className="text-lg sm:text-xl font-semibold sm:box-content sm-max:w-32 text-center">
                  {lead.name}
                </div>
                <div className="text-sm sm:text-base sm:box-content sm-max:w-32 text-center">{lead.position}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Leads;
