import Image from "next/image";

import bulb from "./assets/science/bulb.png";
import equation from "./assets/science/equation.png";
import science from "./assets/science/science.png";
import chalkStroke from "../Chalk Stroke.png";
import rocketIcon from "./assets/science/rocket.png";
import vector9 from "./assets/science/Vector 9.png";
import vector10 from "./assets/science/Vector 10.png";
import vectorSVG10 from "./assets/science/Vector 10.svg";
import vector11 from "./assets/science/Vector 11.svg";
import vector12 from "./assets/science/Vector 12.png";
import vector13 from "./assets/science/Vector 13.png";

import "./science.css";

const Science = () => {
  return (
    <div className="relative bg-[#F6E2D7] rounded-[40px] py-[52px] mt-[52px] lg:py-[124px] lg:rounded-[100px]">
      <Image
        src={rocketIcon}
        alt="Rocket Image"
        className="hidden xl:block absolute left-0 top-0 w-[339px] h-[339px] z-0"
      />
      <section className="text-[20px] font-[700] relative leading-[28.6px] text-[#460C04] w-[178px] h-[29px] mx-auto lg:text-[32px] lg:leading-[38.4px] lg:w-[285px]">
        <span className="z-10 relative">The KGKP Method</span>
        <Image
          src={chalkStroke}
          alt="Chalk Icon"
          className="absolute w-[235.08px] h-[60.94px] -top-1 right-0 z-0 lg:w-[250.4px] lg:h-[93.76px]"
        />
      </section>

      <section className="flex flex-col gap-6 mt-6 px-4 items-center md:flex-row md:align-start lg:mt-[80px] lg:px-[40px] lg:justify-center xl:px-[80px] xl:gap-[106px] ">
        {/* Card 1 */}
        <section className="h-[420px] w-[328px] rounded-[40px] bg-white flex flex-col lg:h-[459px] lg:w-[356px] xl:relative ">
          <Image
            src={bulb}
            alt="Bulb idea"
            className="h-[276px] rounded-tr-[40px] rounded-tl-[40px] w-full"
          />
          <div className="flex-grow px-4 py-6 text-[#4D1435] rounded-bl-[40px] rounded-br-[40px] bg-white z-10 text-center text-[14px] font-[500] leading-[25.2px] lg:text-[16px] lg:leading-[28.8px] lg:relative">
            Integration of cutting edge technologies such as milestone
            acceleration, brain development profile and multiple intelligences
            to create a truly genius child
            <div
              style={{
                background: "linear-gradient(to bottom right, white, #4D1435)",
                animation: `scaleUp 0.5s ease-out forwards`,
              }}
              className="hidden absolute top-[-35px] left-[-35px] h-[70px] w-[70px] rounded-full z-10 lg:flex justify-center items-center "
            >
              <div className="h-[85%] w-[85%] bg-white text-black rounded-full flex justify-center items-center ">
                <div className="w-[17px] h-[50px] font-[400] text-[42px] leading-[50.4px] font-[PoetsenOne] ">
                  1
                </div>
              </div>
            </div>
          </div>
          <Image
            src={vector9}
            alt="Vector 9"
            className="hidden xl:block absolute -bottom-8 -right-1/2 z-0"
          />
          <Image
            src={vectorSVG10}
            alt="Vector 9"
            className="hidden xl:block absolute -bottom-4 -right-1/2 z-0"
          />
        </section>

        {/* Card 2 */}
        <section className="h-[420px] w-[328px] rounded-[40px] bg-white flex z-10 flex-col lg:h-[459px] lg:w-[356px] lg:relative">
          <Image
            src={equation}
            alt="Equation"
            className="h-[276px] rounded-tr-[40px] rounded-tl-[40px] z-10 w-full"
          />
          <div className="flex-grow px-4 py-6 text-[#4D1435] text-center text-[14px] font-[500] leading-[25.2px] lg:text-[16px] lg:leading-[28.8px] lg:relative">
            Nurture a complete genius with high IQ, EQ & SQ through an
            intellectually stimulating environment, emotional awareness,
            spiritual values & positive parenting
            <div
              style={{
                background: "linear-gradient(to bottom right, white, #4D1435)",
                animation: `scaleUp 0.5s ease-out forwards`,
              }}
              className="hidden absolute top-[-35px] left-[-35px] h-[70px] w-[70px] rounded-full z-10 lg:flex justify-center items-center "
            >
              <div className="h-[85%] w-[85%] bg-white text-black rounded-full flex justify-center items-center ">
                <div className="w-[17px] h-[50px] font-[400] text-[42px] leading-[50.4px] font-[PoetsenOne] ">
                  2
                </div>
              </div>
            </div>
          </div>

          <Image
            src={vector10}
            alt="Vector 10"
            className="hidden xl:block absolute -top-8 -right-[40%]"
          />
          <Image
            src={vector11}
            alt="Vector 11"
            className="hidden xl:block absolute -top-4 -right-[40%]"
          />
        </section>

        {/* Card 3 */}
        <section className="h-[420px] w-[328px] rounded-[40px] bg-white flex z-10 flex-col lg:h-[459px] lg:w-[356px] ">
          <Image
            src={science}
            alt="Science"
            className="h-[276px] rounded-tr-[40px] rounded-tl-[40px] w-full"
          />
          <div className="flex-grow px-4 py-6 text-[#4D1435] text-center text-[14px] font-[500] leading-[25.2px] lg:text-[16px] lg:leading-[28.8px] lg:relative">
            Personalized activity plan based on your child’s talent profile,
            brain development & learning style found through the scientific
            method of ridge analysis
            <div
              style={{
                background: "linear-gradient(to bottom right, white, #4D1435)",
                animation: `scaleUp 0.5s ease-out forwards`,
              }}
              className="hidden absolute top-[-35px] left-[-35px] h-[70px] w-[70px] rounded-full z-10 lg:flex justify-center items-center "
            >
              <div className="h-[85%] w-[85%] bg-white text-black rounded-full flex justify-center items-center ">
                <div className="w-[17px] h-[50px] font-[400] text-[42px] leading-[50.4px] font-[PoetsenOne] ">
                  3
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section className="mt-[52px] w-[275px] text-[16.14px] font-[700] leading-[19.37px] text-center mx-auto text-[#460C04] lg:w-[459px] lg:text-[28px] lg:leading-[33.6px] lg:mt-[126px] lg:text-left lg:mr-[125px] ">
        Why Invest in Your Baby’s Brain Development Right Away?
      </section>

      <section className="flex flex-col md:flex-row md:items-center xl:pl-[160px] xl:pr-[125px] xl:gap-[130px]">
        {/* Video section */}
        <section className="mt-6 mx-4 relative rounded-[40px] h-[209px] bg-[#1A24348C] md:basis-1/2 lg:w-[546px] lg:h-[365px] xl:basis-[546px]">
          <div className="relative h-full w-full z-10">
            <iframe
              className="w-full h-full rounded-[24.56px]"
              src="https://www.youtube.com/embed/i6HkeRyHEmE?autoplay=0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <Image
            src={vector12}
            alt="Vector 12"
            className="hidden xl:block w-[448px] h-[500px] absolute z-0 top-[-50px] left-[82px]"
          />
          <Image
            src={vector13}
            alt="Vector 13"
            className="hidden xl:block w-[389px] h-[500px] absolute z-0 top-[-60px] left-6"
          />
        </section>

        {/* Button */}
        <section className="cursor-pointer group hover:bg-[#F6E2D7] hover:border-2 hover:border-[#4D1435] mt-6 w-[178px] h-[51px] rounded-[50px] px-7 py-4 mx-auto flex items-center justify-center gap-[14px] bg-[#4D1435] md:hidden">
          <div className="text-[16px] font-[700] leading-[19.2px] text-white group-hover:text-[#4D1435]">
            Learn more
          </div>
          <svg
            className="w-4 h-4 lg:w-6 lg:h-6"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="icon-arrow-right">
              <path
                id="Shape"
                d="M8.02843 3.36177C8.28878 3.10142 8.71089 3.10142 8.97124 3.36177L13.6379 8.02843C13.8983 8.28878 13.8983 8.71089 13.6379 8.97124L8.97124 13.6379C8.71089 13.8983 8.28878 13.8983 8.02843 13.6379C7.76808 13.3776 7.76808 12.9554 8.02843 12.6951L11.557 9.1665H3.83317C3.46498 9.1665 3.1665 8.86803 3.1665 8.49984C3.1665 8.13165 3.46498 7.83317 3.83317 7.83317H11.557L8.02843 4.30457C7.76808 4.04423 7.76808 3.62212 8.02843 3.36177Z"
                className="fill-current text-white group-hover:text-[#4D1435]"
              />
            </g>
          </svg>
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

      <section className="custom-black-button hidden mt-6 w-[178px] h-[51px] rounded-[50px] px-7 py-4 justify-evenly items-center mx-auto md:flex gap-[14px] bg-[#4D1435] lg:w-[375px] lg:h-[77px] lg:px-[80px] lg:py-[24px] cursor-pointer lg:mt-[152px]">
        <div className="text-[16px] font-[700] leading-[19.2px] text-white lg:text-[24px] lg:leading-[28.8px] custom-button-icon">
          Learn more
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
              className="fill-current text-white"
            />
          </g>
        </svg>
      </section>
    </div>
  );
};

export default Science;
