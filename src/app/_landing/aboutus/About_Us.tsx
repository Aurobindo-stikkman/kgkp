import React from "react";
import SuccessStory from "./SuccessStory";
import Science from "./Science";
import AboutFounder from "./AboutFounder";

const About_Us = () => {
  return (
    <div className="h-[4146px] bg-[#4D1435] sm:h-auto sm:pb-[50px] lg:pb-[90px] xl:pb-[120px] ">
      <SuccessStory />
      <Science />
      <AboutFounder />
    </div>
  );
};

export default About_Us;
