import Image from "next/image";

import bulb from "./assets/science/bulb.png";
import equation from "./assets/science/equation.png";
import science from "./assets/science/science.png";
import arrowIcon from "./assets/science/icon-arrow-right.svg";
import chalkStroke from "../Chalk Stroke.png";

const Science = () => {
  return (
    <div className="h-[2519px] bg-[#F6E2D7] rounded-[40px] pt-[52px] mt-[52px] md:pb-[52px] md:h-auto lg:pt-[124px] lg:rounded-[100px] lg:h-auto lg:pb-[124px] ">
      <section className="text-[20px] font-[700] relative leading-[28.6px] text-[#460C04] w-[178px] h-[29px] mx-auto lg:text-[32px] lg:leading-[38.4px] lg:w-[285px]">
        <span className="z-10 relative">The KGKP Method</span>
        <Image
          src={chalkStroke}
          alt="Chalk Icon"
          className="absolute w-[235.08px] h-[60.94px] -top-1 right-0 z-0 lg:w-[250.4px] lg:h-[93.76px]"
        />
      </section>

      <section className="flex flex-col gap-6 mt-6 px-4 items-center md:flex-row md:align-start lg:mt-[80px] lg:px-[40px] lg:justify-center xl:px-[80px] xl:gap-[106px] ">
        <section className="h-[420px] w-[328px] rounded-[40px] bg-white flex flex-col lg:h-[459px] lg:w-[356px] ">
          <Image
            src={bulb}
            alt="Bulb idea"
            className="h-[276px] rounded-tr-[40px] rounded-tl-[40px] w-full"
          />
          <div className="flex-grow px-4 py-6 opacity--[70%] text-[#4D1435] text-center text-[14px] font-[500] leading-[25.2px] lg:text-[16px] lg:leading-[28.8px]">
            Integration of cutting edge technologies such as milestone
            acceleration, brain development profile and multiple intelligences
            to create a truly genius child
          </div>
        </section>
        <section className="h-[420px] w-[328px] rounded-[40px] bg-white flex flex-col lg:h-[459px] lg:w-[356px] ">
          <Image
            src={equation}
            alt="Equation"
            className="h-[276px] rounded-tr-[40px] rounded-tl-[40px] w-full"
          />
          <div className="flex-grow px-4 py-6 opacity--[70%] text-[#4D1435] text-center text-[14px] font-[500] leading-[25.2px] lg:text-[16px] lg:leading-[28.8px]">
            Nurture a complete genius with high IQ, EQ & SQ through an
            intellectually stimulating environment, emotional awareness,
            spiritual values & positive parenting
          </div>
        </section>
        <section className="h-[420px] w-[328px] rounded-[40px] bg-white flex flex-col lg:h-[459px] lg:w-[356px] ">
          <Image
            src={science}
            alt="Science"
            className="h-[276px] rounded-tr-[40px] rounded-tl-[40px] w-full"
          />
          <div className="flex-grow px-4 py-6 opacity--[70%] text-[#4D1435] text-center text-[14px] font-[500] leading-[25.2px] lg:text-[16px] lg:leading-[28.8px]">
            Personalized activity plan based on your child’s talent profile,
            brain development & learning style found through the scientific
            method of ridge analysis
          </div>
        </section>
      </section>

      <section className="mt-[52px] w-[275px] text-[16.14px] font-[700] leading-[19.37px] text-center mx-auto text-[#460C04] lg:w-[459px] lg:text-[28px] lg:leading-[33.6px] lg:mt-[126px] lg:text-left lg:mr-[125px] ">
        Why Invest in Your Baby’s Brain Development Right Away?
      </section>

      <section className="flex flex-col md:flex-row md:items-center xl:pl-[160px] xl:pr-[125px] xl:gap-[130px]">
        {/* Video section */}
        <section className="mt-6 mx-4 rounded-[40px] h-[209px] bg-[#1A24348C] md:basis-1/2 lg:w-[546px] lg:h-[365px] xl:basis-[546px] "></section>

        {/* Button */}
        <section className="mt-6 w-[178px] h-[51px] rounded-[50px] px-7 py-4 mx-auto flex gap-[14px] bg-[#4D1435] md:hidden">
          <div className="text-[16px] font-[700] leading-[19.2px] text-white">
            Learn more
          </div>
          <Image src={arrowIcon} alt="Arrow Icon right" className="w-4 h-4" />
        </section>

        {/* Bullet points */}
        <section className="mt-[57px] flex gap-[37px] px-4 h-[571px] md:basis-1/2 2xl:justify-end">
          <section className="grid gap-6 basis-[30px]">
            <section className="w-7 h-7 border-2 border-white rounded-full bg-[#A696F7] relative after:absolute after:top-[150%] after:w-[2px] after:left-1/2 after:transform after:translate-x-1/2 after:bg-[#D3D3D3] after:h-[35px] "></section>
            <section className="w-7 h-7 border-2 border-white rounded-full bg-[#F2B095] relative after:absolute after:top-[150%] after:w-[2px] after:left-1/2 after:transform after:translate-x-1/2 after:bg-[#D3D3D3] after:h-[35px] "></section>
            <section className="w-7 h-7 border-2 border-white rounded-full bg-[#A696F7] relative after:absolute after:top-[150%] after:w-[2px] after:left-1/2 after:transform after:translate-x-1/2 after:bg-[#D3D3D3] after:h-[35px] "></section>
            <section className="w-7 h-7 border-2 border-white rounded-full bg-[#F2B095] relative after:absolute after:top-[150%] after:w-[2px] after:left-1/2 after:transform after:translate-x-1/2 after:bg-[#D3D3D3] after:h-[35px] "></section>
            <section className="w-7 h-7 border-2 border-white rounded-full bg-[#A696F7] relative after:absolute after:top-[150%] after:w-[2px] after:left-1/2 after:transform after:translate-x-1/2 after:bg-[#D3D3D3] after:h-[35px] "></section>
            <section className="w-7 h-7 border-2 border-white rounded-full bg-[#F2B095] relative after:absolute after:top-[150%] after:w-[2px] after:left-1/2 after:transform after:translate-x-1/2 after:bg-[#D3D3D3] after:h-[35px] "></section>
            <section className="w-7 h-7 border-2 border-white rounded-full bg-[#A696F7] relative"></section>
          </section>
          <section className="grid gap-6 flex-grow xl:flex-grow-0 xl:w-[261px]">
            <section className="h-[61px] grid gap-2 ">
              <div className="text-[16px] font-[600] leading-[19.2px] text-[#460C04] ">
                Boosts Cognitive Abilities
              </div>
              <div className="text-[14px] font-[400] leading-[16.8px] text-[#460C04]">
                Leading to superior problem-solving and analytical skills.
              </div>
            </section>
            <section className="h-[61px] grid gap-2 ">
              <div className="text-[16px] font-[600] leading-[19.2px] text-[#460C04] ">
                Emotional Resilience 
              </div>
              <div className="text-[14px] font-[400] leading-[16.8px] text-[#460C04]">
                Helping your child manage emotions, foster empathy and social
                skills.
              </div>
            </section>
            <section className="h-[61px] grid gap-2 ">
              <div className="text-[16px] font-[600] leading-[19.2px] text-[#460C04] ">
                Spiritual Grounding
              </div>
              <div className="text-[14px] font-[400] leading-[16.8px] text-[#460C04]">
                Leading to superior problem-solving and analytical skills.
              </div>
            </section>
            <section className="h-[61px] grid gap-2 ">
              <div className="text-[16px] font-[600] leading-[19.2px] text-[#460C04] ">
                Enhanced Reading Skills
              </div>
              <div className="text-[14px] font-[400] leading-[16.8px] text-[#460C04]">
                Making your child an early and proficient reader.
              </div>
            </section>
            <section className="h-[61px] grid gap-2 ">
              <div className="text-[16px] font-[600] leading-[19.2px] text-[#460C04] ">
                Superior Mathematical Skills
              </div>
              <div className="text-[14px] font-[400] leading-[16.8px] text-[#460C04]">
                Enabling your child to excel in numeracy.
              </div>
            </section>
            <section className="h-[61px] grid gap-2 ">
              <div className="text-[16px] font-[600] leading-[19.2px] text-[#460C04] ">
                Encyclopaedic Knowledge
              </div>
              <div className="text-[14px] font-[400] leading-[16.8px] text-[#460C04]">
                Making your child well-versed in various subjects.
              </div>
            </section>
            <section className="h-[61px] grid gap-2 ">
              <div className="text-[16px] font-[600] leading-[19.2px] text-[#460C04] ">
                Holistic Development
              </div>
              <div className="text-[14px] font-[400] leading-[16.8px] text-[#460C04]">
                Ensuring a well-rounded development and a happy, healthy, child.
              </div>
            </section>
          </section>
        </section>
      </section>

      <section className="hidden mt-6 w-[178px] h-[51px] rounded-[50px] px-7 py-4 mx-auto md:flex gap-[14px] bg-[#4D1435] lg:w-[375px] lg:h-[77px] lg:px-[80px] lg:py-[24px] cursor-pointer lg:mt-[152px]">
        <div className="text-[16px] font-[700] leading-[19.2px] text-white lg:text-[24px] lg:leading-[28.8px]">
          Learn more
        </div>
        <Image
          src={arrowIcon}
          alt="Arrow Icon right"
          className="w-4 h-4 lg:w-6 lg:h-6"
        />
      </section>
    </div>
  );
};

export default Science;
