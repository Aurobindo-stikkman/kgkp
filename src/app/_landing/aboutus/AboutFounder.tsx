import Image from "next/image";
import rameshPartani from "./Ramesh partani.png";
import chalkStroke from "../Chalk Stroke.png";
import styles from "./aboutus.module.css";

const AboutFounder = () => {
  return (
    <div className="py-[42px] relative lg:pt-[120px] lg:pb-[128px] xl:pt-[173px]">
      <section className="text-[20px] font-[700] leading-[24px] text-[#F6E2D8] relative w-[213px] mx-auto sm:text-[32px] sm:leading-[38.4px] sm:w-[340px]">
        <span className="z-10 relative">Get to know About Us</span>
        <Image
          src={chalkStroke}
          alt="Chalk Icon"
          className="absolute w-[235.08px] h-[60.94px] top-1 right-0 z-0 lg:w-[250.4px] lg:-top-1 lg:h-[93.76px]"
        />
      </section>

      <section className="flex flex-col mt-14 lg:mt-28 xl:flex-row">
        <section
          style={{ borderRadius: "40% 60% 63% 37% / 26% 66% 34% 74%" }}
          className="mt-[56px] bg-[#A16E5738] h-[257px] w-[251.79px] p-6 overflow-hidden mx-auto xl:h-[520.24px] xl:w-[520.24px] xl:order-2 "
        >
          <Image
            src={rameshPartani}
            alt="Ramesh Partani"
            className="w-full h-full bg-[#c9795438] object-fill"
            style={{ borderRadius: "40% 60% 63% 37% / 26% 66% 34% 74% " }}
          />
        </section>

        <section className="mt-14 px-4 text-center lg:px-[80px] xl:w-[704px] xl:text-justify xl:order-1">
          <div className="text-[#F6E2D8] font-[700] text-[14px] leading-[19.6px] inline mr-1 sm:text-[18px] xl:text-[24px] xl:leading-[33.12px]  ">
            Kaushalya Genius Kid Program
          </div>{" "}
          <div className="text-[#F6E2D8] inline font-[400] text-[14px] leading-[19.6px] sm:text-[18px] xl:text-[24px] xl:leading-[33.12px] ">
            is a time-tested & highly effective brain development program
            created by an amalgamation of cutting edge scientific discoveries
            with rich heritage of age-old cultural and spiritual wisdom. It’s an
            online homeschooling program to enable every parent to make their
            child a genius, starting from conception till the child is 15 and
            beyond. This program was pioneered by Mr. Ramesh Partani in 2007.
          </div>
          <br />
          <br />
          <div className="text-[#F6E2D8] font-[700] text-[14px] leading-[19.6px] inline mr-1 sm:text-[18px] xl:text-[24px] xl:leading-[33.12px] ">
            Mr. Ramesh Partani
          </div>{" "}
          <div className="text-[#F6E2D8] inline font-[400] text-[14px] leading-[19.6px] sm:text-[18px] xl:text-[24px] xl:leading-[33.12px] ">
            is the chairman and director of Ru Education Pvt Ltd. He is an
            International Spiritual and Management Trainer, Coach, Counsellor
            and Consultant with over 3 decades of experience in Human Resource
            Development and Behavioural Science. He aims to offer an innate
            brilliant child to every parent on the planet.
          </div>
        </section>
      </section>

      <section className="hidden w-[385px] h-[77px] rounded-[50px] px-[80px] py-6 bg-[#F6E2D8] sm:flex gap-[14px] mx-auto mt-12 justify-center xl:mt-[140px] cursor-pointer custom-white-button">
        <div className="text-[24px] font-[700] leading-[28.8px] text-[#4D1435] custom-button-icon">
          Read More
        </div>
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
            fill="#4D1435"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default AboutFounder;
