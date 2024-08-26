import Image from "next/image";
import arrowMark from "./Arrow mark.svg";
import bg from "./BG.png";
import bg2 from "./BG2 1.png";
import boyReading from "./Boy reading.svg";
import girlPlaying from "./girl playing.png";
import group5 from "./Group 5.svg";
import arrowRight from "./icon-arrow-right.svg";
import vector60 from "./Vector 60.png";
import vector65 from "./Vector 65.svg";
import vector68 from "./Vector 68.svg";
import vector71 from "./Vector 71.svg";
import yogaGirl from "./Yoga girl.png";
import chalkStroke from "../Chalk Stroke.png";

const HeroSection = () => {
  return (
    <section className="bg-[#EF816C] flex flex-col h-[716px] rounded-br-[40px] rounded-bl-[40px] overflow-hidden md:flex-row md:h-[450px] lg:h-[651px] lg:rounded-bl-[100px] lg:srounded-br-[100px] ">
      <section className="basis-[247px] pt-6 px-3 md:flex-grow md:flex-shrink md:basis-1/2 md:pl-8 md:pt-12 md:pr-0 lg:pl-[80px] lg:pt-[167px]">
        <div className="relative text-[28px] font-[700] leading-[36.4px] text-[#4D1435] text-center md:text-left lg:w-[668px] lg:h-[114px] lg:font-[700] lg:text-[38px] lg:leading-[56.62px]">
          <span className="z-10 relative">
            Unlock your Child’s Intelligence with Kaushalya Genius Kid Program
          </span>
          <Image
            src={chalkStroke}
            alt="Chalk Icon"
            className="absolute w-[235.08px] h-[60.94px] left-[33%] top-[15%] translate-x-[-50%] z-0 lg:w-[397.11px] lg:h-[93.76px] lg:left-[unset] lg:right-[-22%]"
          />
        </div>
        <div className="text-[14px] font-[400] leading-[25.2px] text-[#4D1435] text-center pt-4 px-[6px] md:text-left md:p-0 md:mt-7 lg:w-[572px] lg:h-[64px] lg:mt-[21px] lg:text-[20px] lg:leading-[32.4px]">
          Headstart your kid’s development right from the time of conception
          till the age of 15 years and beyond
        </div>

        <section className="hidden w-[254px] h-[51px] absolute bottom-[66px] rounded-[50px] bg-[#4D1435] md:flex gap-[14px] px-4 py-[28px] items-center justify-center translate-x-[-50%] left-1/2 md:static md:translate-x-0 md:mt-10 cursor-pointer mt-[42px] lg:w-[385px] lg:h-[77px] lg:px-[80px] lg:py-[24px]">
          <div className="text-[16px] font-[700] leading-[19.2px] text-white w-[248px] h-[29px] lg:text-[18px] lg:leading-[28.8px]">
            Explore Our Courses
          </div>
          <Image
            src={arrowRight}
            alt="Arrow right mark"
            className="w-[16px] h-[16px] lg:w-[24px] lg:h-[24px]"
          />
        </section>
      </section>

      <section className="w-full h-[369.34px] flex-grow flex-shrink relative md:flex-shrink md:basis-1/2 lg:h-[651px]">
        <section className="w-[236.97px] h-[218.92px] absolute top-[27.99px] left-0 sm:left-1/2 sm:-translate-x-1/2 md:translate-x-0 md:left-[15%] lg:w-[524.98px] lg:h-[485px] lg:top-0">
          <div className="w-full h-full relative md:left-[-10px] lg:top-0 lg:left-[-30px]">
            <Image
              src={bg}
              alt="first circle"
              className="w-[225.41px] h-[196.29px] absolute top-[5.46px] left-0 lg:top-[28.85px] lg:left-[-90.83px] lg:h-[434.86px] lg:w-[499.38px]"
            />
            <Image
              src={boyReading}
              alt="Boy Reading book"
              className="h-[110.51px] w-[141.56px] absolute top-[29.55px] left-[34.58px] lg:w-[313.61px] lg:h-[258.12px] lg:top-[76px] lg:left-0 z-30"
            />
            <Image
              src={arrowMark}
              alt="Arrow mark"
              className="w-[53.22px] h-[53.22px] absolute top-[35.69px] left-[-2.8px] lg:w-[130px] lg:h-auto lg:top-[100px] lg:left-[-120px]"
            />
            <Image
              src={vector60}
              alt="Vector 60"
              className="w-[138.64px] h-[72.98px] absolute top-[121.02px] left-[33.85px] z-10 lg:h-[161.68px] lg:w-[307.15px] lg:top-[277px] lg:left-0"
            />
            <Image
              src={vector60}
              alt="arrow"
              className="h-[72.98px] w-[138.64px] absolute top-[29.42px] left-[97.13px] z-10 lg:h-[161.68px] lg:w-[307.15px] lg:top-[69px] lg:left-[105px]"
            />
            <Image
              src={group5}
              alt="Kite img"
              className="w-[54.84px] h-[67.03px] absolute top-[-14px] left-[221.43px] lg:w-[121.5px] lg:h-[148.5px] lg:top-[-30px] lg:left-[375px] "
            />
            <Image
              src={vector71}
              alt="Vector 71"
              className="h-[27.69px] w-[23.02px] absolute top-16 right-12 z-0 lg:top-[150px] lg:right-[195px] lg:h-[61.34px] lg:w-[61.73px] "
            />
          </div>
        </section>

        <section className="w-1/2 min-w-[360px] h-[240.24px] absolute top-[129.09px] left-[74.93px] sm:left-[70%] sm:-translate-x-1/2 md:translate-x-0 md:left-[45%] lg:w-[576px] lg:h-[532.24px] lg:top-[224px] lg:left-[166px]">
          <div className="w-full h-full relative">
            <Image
              src={bg2}
              alt="Second circle"
              className="h-[215.55px] w-[217.67px] absolute top-0 lg:h-[460.93px] lg:w-[482.23px] lg:top-[50.26px] "
            />
            <Image
              src={yogaGirl}
              alt="Yoga Girl"
              className="h-[148.5px] w-[157.98px] absolute top-[31.23px] left-0 z-40 lg:top-[100px] lg:h-[329px] lg:w-[350px] "
            />
            <Image
              src={girlPlaying}
              alt="Girl playing"
              className="h-[175.66px] w-[240.55px] absolute top-[-60.23px] left-[67.45px] z-40 lg:w-[575px] lg:h-[440px] lg:top-[-135px] lg:left-36"
            />
            <Image
              src={vector65}
              alt="Vector 65"
              className="h-[33.65px] absolute -top-3 left-[118px] z-0 lg:top-0 lg:left-[48%] lg:h-[74.55px] lg:w-[26.82px] "
            />
            <Image
              src={vector68}
              alt="Vetor 68"
              className="h-[12.64px] w-[23.02px] absolute top-[47%] left-3 z-0 lg:top-[250px] lg:left-[30px] lg:h-[89.55px] lg:w-[51.82px] "
            />
          </div>
        </section>

        {/* Button for smaller screen */}
        <section className="w-[254px] h-[51px] absolute bottom-[66px] rounded-[50px] bg-[#4D1435] flex gap-[14px] px-4 py-[28px] items-center justify-center translate-x-[-50%] left-1/2 md:hidden">
          <div className="text-[16px] font-[700] leading-[19.2px] text-white ">
            Explore Our Courses
          </div>
          <Image
            src={arrowRight}
            alt="Arrow right mark"
            className="w-[16px] h-[16px]"
          />
        </section>
      </section>
    </section>
  );
};

export default HeroSection;
