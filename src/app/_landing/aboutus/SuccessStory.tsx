"use client";
import Image from "next/image";
import trophy from "./assets/success-story/trophy.png";
import vector12 from "./assets/success-story/Vector 12.png";
import vector13 from "./assets/success-story/Vector 13.png";
import chalkStroke from "../Chalk Stroke.png";
import styles from "./styles.module.css";

const SuccessStory = () => {
  return (
    <section className="bg-[#4D1435] pt-[62px] relative lg:overflow-x-hidden lg:pt-[120px] xl:pt-[160px]">
      <div className={`${styles["custom-shape-divider-bottom-1724765798"]}`}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C150,100 350,0 600,0 C850,0 1050,100 1200,0 L1200,120 L0,120 Z"
            className="shape-fill"
            fill="white"
          ></path>
        </svg>
      </div>

      {/* Title section */}
      <section className="flex flex-col gap-[6px] lg:flex-row lg:w-[650px] lg:mx-auto justify-center xl:w-[681px]">
        <div className="text-[20px] font-[700] leading-[24px] text-[#F6E2D8] mx-auto h-6 lg:mx-0 lg:text-[24px] lg:leading-[30.4px] xl:text-[32px] xl:leading-[38.4px]">
          Success Stories:
        </div>
        <div className="text-[20px] font-[700] leading-[24px] text-[#F6E2D8] relative mx-auto h-6 lg:mx-0 lg:text-[24px] lg:leading-[30.4px] xl:text-[32px] xl:leading-[38.4px]">
          <span className="z-10 relative">Hear from our First Genius</span>
          <Image
            src={chalkStroke}
            alt="Chalk Icon"
            className="absolute w-[235.08px] h-[60.94px] -top-1 right-0 z-0 lg:w-[330.4px] lg:h-[93.76px]"
          />
        </div>
      </section>

      {/* Video section */}
      <section className="flex flex-col items-center md:flex-row md:p-4 lg:px-[100px] lg:gap-8 xl:mt-[160px] xl:pl-[157px] xl:pr-[120px] xl:mr-auto xl:gap-[128px] ">
        <section className="w-[90%] h-[207.52px] rounded-[24.56px] mt-8 mx-auto border md:basis-1/2 lg:w-[520px] lg:basis-auto lg:h-[300px] xl:w-[520px] xl:flex-shrink-0 xl:basis-[520px] xl:h-[329px] xl:rounded-[40px]">
          <div className="relative h-full w-full z-10">
            <iframe
              className="w-full h-full rounded-[24.56px]"
              src="https://www.youtube.com/embed/oG2ZkOA8o1k?autoplay=0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <Image
            src={vector12}
            alt="Vector 12"
            className="hidden xl:block w-[376.66px] h-[411.91px] absolute z-0 top-[21rem] left-36"
          />
          <Image
            src={vector13}
            alt="Vector 13"
            className="hidden xl:block w-[376.66px] h-[411.91px] absolute z-0 top-[21rem] left-56"
          />
        </section>

        <section className="italic text-[17px] font-[500] leading-[21.8px] text-[#F6E2D8] text-center w-[328px] mx-4 relative mt-[54px] font-inter md:basis-1/2 lg:text-left xl:w-[508px] xl:h-[120px] xl:text-[20px] xl:leading-[24.4px] ">
          14 years ago, I was exactly where you are today. This simple program,
          the reading cards, the dot cards and my parents continuous efforts
          have upped my game. Until today, I've read about 7,000 books on
          various subjects...
          <section className="mt-4 mx-auto text-[#F6E2D8] text-[12px] font-[600] leading-[14.4px] w-[147px] lg:text-[16px] lg:leading-[17.7px] lg:w-auto text-left xl:text-[18px] xl:leading-[21.6px] ">
            17 years old, Mitra Malani
          </section>
          <section className="w-[41px] h-[128px] text-[107px] font-[400] font-[Athelas] leading-[128.4px] text-[#7C4E63] absolute top-[-60px] left-0 lg:w-[48px] lg:h-[140px] xl:top-[-40px] xl:left-[-65px] ">
            “
          </section>
        </section>
      </section>

      <section className="mt-8 mx-auto text-white text-[14px] font-[500] leading-[16.8px] w-[231px] text-center md:text-[20px] md:leading-[28.9px] md:w-[600px] lg:mt-20 lg:text-[24px] lg:leading-[28.8px] ">
        Ready to give your child the gift of a brighter future?
      </section>

      <section className="cursor-pointer custom-white-button mt-4 w-[219px] h-[51px] px-7 py-4 rounded-[50px] bg-[#F6E2D8] flex gap-[14px] justify-center items-center mx-auto lg:mt-[70px] xl:mt-6 xl:w-[385px] xl:h-[77px] xl:px-[80px] xl:py-6 ">
        <section className="text-[16px] font-[700] leading-[19.2px] text-[#460C04] xl:text-[24px] xl:leading-[28.8px] custom-button-icon">
          View all courses
        </section>
        <svg
          className="w-4 h-4 lg:w-6 lg:h-6 custom-button-icon"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="icon-arrow-right">
            <path
              id="Shape"
              d="M8.02843 3.36177C8.28878 3.10142 8.71089 3.10142 8.97124 3.36177L13.6379 8.02843C13.8983 8.28878 13.8983 8.71089 13.6379 8.97124L8.97124 13.6379C8.71089 13.8983 8.28878 13.8983 8.02843 13.6379C7.76808 13.3776 7.76808 12.9554 8.02843 12.6951L11.557 9.1665H3.83317C3.46498 9.1665 3.1665 8.86803 3.1665 8.49984C3.1665 8.13165 3.46498 7.83317 3.83317 7.83317H11.557L8.02843 4.30457C7.76808 4.04423 7.76808 3.62212 8.02843 3.36177Z"
              className="fill-current text-[#4D1435]"
            />
          </g>
        </svg>
      </section>

      <Image
        src={trophy}
        alt="Trophy image"
        className="hidden lg:block absolute -right-3 -top-6 h-[283.56px] w-[197px] "
      />
    </section>
  );
};

export default SuccessStory;
