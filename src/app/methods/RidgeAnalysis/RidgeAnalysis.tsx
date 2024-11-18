import Image from "next/image";
import RidgeTitle from "./RidgeTitle";

import strengthIcon from "../assets/motivation 1.svg";
import brainIcon from "../assets/brain 1.svg";
import growthIcon from "../assets/idea 1.svg";
import analysisImage from "../assets/DMIT 1.png";

const RidgeAnalysis = () => {
  return (
    <section className="py-[52px] px-4 items-center flex flex-col lg:flex-row lg:items-end lg:py-[124px] lg:justify-evenly xl:gap-24 max-w-[1440px] mx-auto xl:justify-center">
      <div className="lg:hidden">
        <RidgeTitle />
      </div>

      <Image
        src={analysisImage}
        alt="Analysis image"
        className="h-[318px] w-[326px] rounded-[20px] mt-8 mx-auto lg:mt-0 xl:w-[568px] xl:h-[553px] xl:mx-0"
      />

      <section className="max-w-[573px] lg:pb-[34px]">
        <div className="hidden lg:block w-fit">
          <RidgeTitle />
        </div>

        <section className="mt-8 w-[328px] mx-auto text-[14px] font-[400] leading-[19.6px] text-[#1A2434] lg:mt-[52px] lg:w-[573px] lg:h-[66px] xl:text-[16px] xl:leading-[22.4px] ">
          Ridge Analysis is a scientific method that helps to understand the
          inborn intelligences and learning styles by analysing fingerprints.
          The report gives clear information about:
        </section>

        <section className="w-[306px] mx-auto mt-8 grid gap-6 lg:w-[346px] lg:h-[204px] lg:mx-0 xl:mt-[52px]">
          <section className="flex gap-6 items-center ">
            <Image
              src={strengthIcon}
              alt="Strength Icon"
              className="w-[42px] h-[42px] xl:w-[52px] xl:h-[52px] "
            />
            <div className="text-[16px] font-[600] leading-[19.2px] text-[#1A2434] text-center xl:text-[18px] xl:leading-[21.6px]">
              Strengths & weaknesses
            </div>
          </section>

          <section className="flex gap-6 items-center ">
            <Image
              src={brainIcon}
              alt="Strength Icon"
              className="w-[42px] h-[42px] xl:w-[52px] xl:h-[52px] "
            />
            <div className="text-[16px] font-[600] leading-[19.2px] text-[#1A2434] text-center xl:text-[18px] xl:leading-[21.6px]">
              Growth rate of every brain lobe
            </div>
          </section>

          <section className="flex gap-6 items-center ">
            <Image
              src={growthIcon}
              alt="Strength Icon"
              className="w-[42px] h-[42px] xl:w-[52px] xl:h-[52px] "
            />
            <div className="text-[16px] font-[600] leading-[19.2px] text-[#1A2434] text-center xl:text-[18px] xl:leading-[21.6px]">
              Learning style of the child
            </div>
          </section>
        </section>

        <section className="w-[328px] mx-auto mt-8 text-[14px] font-[400] leading-[19.6px] text-[#1A2434] lg:w-[515px] lg:mx-0 xl:mt-[52px] xl:text-[16px] xl:leading-[22.4px]">
          Ridge Analysis report can be generated after a child is 1 year old to
          identify the exact talent profile of the child. This report is then
          used to identify where the highest potential genius of the child lies
          and create a unique activity plan that parents can use to help their
          child actualise their potential genius.
        </section>
      </section>
    </section>
  );
};

export default RidgeAnalysis;
