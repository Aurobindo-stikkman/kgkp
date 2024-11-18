import Image from "next/image";

import HeroSection from "./HeroSection";

import strengthIcon from "./assets/motivation 1.svg";
import brainIcon from "./assets/brain 1.svg";
import growthIcon from "./assets/idea 1.svg";
import analysisImage from "./assets/DMIT 1.png";
import Courses from "./Courses";
import whiteRock from "./assets/white-rock.svg";
import TitleSection from "./TitleSection";
import TreeSection from "./TreeSection/TreeSection";
import CallbackContainer from "../components/RequestCallback/CallbackContainer";
import GeniusTitle from "./GeniusSection/GeniusTitle";
import ChildJourney from "./ChildsJourney/ChildJourney";
import AcademicsSection from "./AcademicsSection/AcademicsSection";
import MileStone from "./MileStoneSection/MileStone";
import RidgeAnalysis from "./RidgeAnalysis/RidgeAnalysis";

const Methods = () => {
  return (
    <div className="relative overflow-x-hidden">
      {/* Method section */}
      <section className="bg-[#F6E2D7] pt-6 pb-[52px] rounded-bl-[40px] rounded-br-[40px] lg:pt-[106px] lg:pb-[124px] lg:rounded-br-[100px] lg:rounded-bl-[100px] xl:px-20 ">
        {/* Title Section */}
        <TitleSection />

        {/* Hero Section */}
        <HeroSection />

        <GeniusTitle />
      </section>

      <TreeSection />

      <div className="xl:px-20 ">
        <CallbackContainer />
      </div>

      {/* courses secton */}
      <Courses />

      {/* Child Journey */}
      <ChildJourney />

      {/* Cards section */}
      <AcademicsSection />

      {/* Milestone section */}
      <MileStone />

      {/* Analysis section */}
      <RidgeAnalysis />

      <Image
        src={whiteRock}
        alt="White Rock"
        className="hidden xl:block absolute right-[-460px] bottom-[445px] w-[630px] h-[630px]"
      />
    </div>
  );
};

export default Methods;
