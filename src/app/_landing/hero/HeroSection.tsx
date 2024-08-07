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

const HeroSection = () => {
  return (
    <>
      {/* <section className="lg:h-[651px] rounded-bl-[100px] rounded-br-[100px] bg-[#EF816C] flex flex-col lg:flex-row overflow-hidden">
        <section className="h-[651px] w-full lg:w-1/2 pl-[80px] pt-[167px]">
          <div className="w-[668px] h-[114px] font-[700] text-[38px] leading-[56.62px] text-[#4D1435] ">
            Unlock your Child’s Intelligence with Kaushalya Genius Kid Program
          </div>
          <div className="w-[572px] h-[64px] mt-[21px] font-[400] text-[20px] leading-[32.4px] text-[#4D1435] ">
            Headstart your kid’s development right from the time of conception
            till the age of 15 years and beyond
          </div>
          <div className="mt-[42px] w-[385px] h-[77px] px-[80px] py-[24px] rounded-[50px] flex gap-[14px] bg-[#4D1435] cursor-pointer">
            <div className="w-[248px] h-[29px] font-[600] text-[18px] leading-[28.8px] text-white ">
              Explore Our Courses
            </div>
            <Image
              src={arrowRight}
              alt="right-arrow"
              className="w-[24px] h-[24px]"
            />
          </div>
        </section>

        <section className="h-[651px] w-full lg:w-1/2 relative">
          <div className="w-[524.98px] h-[485px] absolute top-0 left-0">
            <section className="relative h-full w-full">
              <div className="absolute top-0 left-0 h-[434.86px] w-[499.38px] overflow-hidden">
                <Image src={bg} alt="First circle" className="z-10" />
              </div>
              <Image
                src={vector71}
                alt="First circle arrow"
                className="absolute h-[61.34px] w-[33.73px] left-[72%] top-[29%]"
              />
              <Image
                src={boyReading}
                alt="boy reading"
                className="w-[313.61px] h-[258.12px] absolute top-[50px] left-[112px] z-10"
              />
              <Image
                src={arrowMark}
                alt="Arrow Mark"
                className="absolute top-[79px] left-[-45px] "
              />
              <Image
                src={vector60}
                alt="arrow"
                className="h-[161.68px] w-[307.15px] absolute z-0 top-[277px] left-[75px] "
              />
              <Image
                src={vector60}
                alt="arrow"
                className="h-[161.68px] w-[307.15px] absolute z-0 top-[94px] left-[275px] "
              />
              <Image
                src={group5}
                alt="Kite img"
                className="w-[170.5px] h-[200.5px] absolute top-[-40px] left-[531px] "
              />
            </section>
          </div>

          <section className="w-[576px] h-[532.24px] absolute top-[224px] left-[166px] ">
            <div className="w-full h-full relative ">
              <Image
                src={bg2}
                alt="BG-2"
                className="h-[460px] w-[482.23px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
              />
              <Image
                src={yogaGirl}
                alt="Yoga Girl"
                width={350}
                height={330}
                className="absolute left-[40px] top-[75px] z-10 "
              />
              <Image
                src={vector68}
                alt="Vector 68"
                width={51}
                height={28}
                className="absolute left-[4.5rem] top-[16rem] "
              />
              <Image
                src={girlPlaying}
                alt="Girl Playing"
                width={575}
                height={500}
                className="absolute left-[175px] top-[-113px] "
              />
              <Image
                src={vector65}
                alt="Rabbit ear icon"
                className="absolute left-[19rem] top-[-35px] "
              />
            </div>
          </section>
        </section>
      </section> */}

      <section className="bg-[#EF816C] flex flex-col h-[716px] rounded-br-[40px] rounded-bl-[40px] overflow-hidden md:flex-row md:h-[450px] lg:h-[651px] lg:rounded-bl-[100px] lg:srounded-br-[100px] ">
        <section className="basis-[247px] pt-6 px-3 md:flex-grow md:flex-shrink md:basis-1/2 md:pl-8 md:pt-12 md:pr-0 lg:pl-[80px] lg:pt-[167px]">
          <div className="text-[28px] font-[700] leading-[36.4px] text-[#4D1435] text-center md:text-left lg:w-[668px] lg:h-[114px] lg:font-[700] lg:text-[38px] lg:leading-[56.62px] ">
            Unlock your Child’s Intelligence with Kaushalya Genius Kid Program
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
          <section className="w-[236.97px] h-[218.92px] absolute top-[27.99px] left-0 md:left-[15%] lg:w-[524.98px] lg:h-[485px] lg:top-0">
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
            </div>
          </section>

          <section className="w-1/2 min-w-[360px] h-[240.24px] absolute top-[129.09px] left-[74.93px] md:left-[45%] lg:w-[576px] lg:h-[532.24px] lg:top-[224px] lg:left-[166px]">
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
                className="h-[175.66px] w-[240.55px] absolute top-[-60.23px] left-[67.45px] z-40 lg:w-[550px] lg:h-[440px] lg:top-[-135px] lg:left-36"
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
    </>
  );
};

export default HeroSection;
