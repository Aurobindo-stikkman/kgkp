import Image from "next/image";

import balloonImage from "./assets/balloon.svg";
import singleStar from "./assets/Star.svg";
import rainbow from "./assets/rainbow.svg";
import stars from "./assets/stars.svg";
import aboutusImage from "./assets/d516390aa1590bb56cf66890ca812ca9.jpg";
import universityBackground from "./assets/university-background.svg";
import boyLearning from "./assets/boy-learning.svg";
import bookLibrary from "./assets/book-library.svg";
import AboutFounder from "./AboutFounder";
import offeringImage from "./assets/hand-shake.svg";
import partner from "./assets/partner.svg";

import VisionSection from "./VisionSection";
import TitleSection from "./TitleSection";
import CallbackContainer from "../components/RequestCallback/CallbackContainer";
import Link from "next/link";
import ProgramsTitle from "./ProgramsTitle";

const About = () => {
  return (
    <div>
      <section className="pt-6 pb-[52px] bg-[#FAEFB6] rounded-bl-[40px] rounded-br-[40px] px-4 sm:px-16 lg:px-[50px] lg:py-24 lg:rounded-br-[100px] lg:rounded-bl-[100px] xl:px-[100px] overflow-hidden">
        <TitleSection />

        <section className="mt-6 text-[16px] font-[500] leading-[22.4px] text-[#460C04] text-center w-[328px] mx-auto lg:mt-8 lg:text-[24px] lg:leading-[33.6px] lg:w-[546px]">
          Have you unlocked your child's full potential? Let's nurture their
          genius together at KGKP!
        </section>

        <section className="h-[157px] w-[327px] mx-auto mt-8 md:h-[300px] md:w-[600px] lg:mt-[52px] lg:h-[481px] xl:w-[1037.69px] xl:relative">
          <Image
            src={aboutusImage}
            alt="About Us Image"
            className="h-full w-full object-cover rounded-[22.43px] relative z-10"
          />

          <Image
            src={balloonImage}
            alt="Balloon Image"
            className="hidden xl:block w-[350px] h-auto absolute top-[-7.5rem] left-[-17rem]"
          />
          <Image
            src={singleStar}
            alt="Single Star"
            className="hidden xl:block w-16 h-[85px] absolute top-[139px] -left-12"
          />
          <Image
            src={rainbow}
            alt="Rainbow Image"
            className="hidden xl:block w-[287px] h-auto absolute bottom-[98px] right-[-125px]"
          />
          <Image
            src={stars}
            alt="Two Stars"
            className="hidden xl:block w-[198px] h-auto absolute bottom-[-30px] right-[-175px]"
          />
        </section>

        <section className="w-[328px] text-[14px] font-[400] leading-[19.6px] text-center mx-auto mt-8 text-[#460C04] md:w-[700px] lg:mt-[71px] lg:w-[922px] lg:text-[20px] lg:leading-[28px] xl:text-justify">
          At KGKP, we are dedicated to creating "A Complete Home Schooling
          Program" where we nurture brilliant geniuses. Our mission is to offer
          meticulously aligned activities that foster the complete
          braindevelopment of your child. From infancy and playgroup stages to
          the age of 15 and beyond, we focus on accelerating the overall
          intelligence, emotional, and spiritual quotients of every child.
        </section>

        <section className="flex flex-col gap-8 items-center lg:flex-row lg:mt-[38px] lg:justify-center xl:gap-[114px]">
          {/* Card - 1 */}
          <section className="w-[303px]">
            <Image
              src={universityBackground}
              alt="University Backgroun"
              className="mx-auto w-[244px] h-[244px] "
            />

            <section className="text-[18px] font-[600] leading-[24.12px] text-[#460C04] text-center mx-auto mt-[15px]">
              Comprehensive Curriculum
            </section>
            <section className="mt-2 text-[14px] font-[400] leading-[19.6px] text-center mx-auto text-[#460C04] lg:mt-6 lg:w-[303px]">
              We integrate academic excellence with the intellectual, emotional
              and spiritual growth of your child ensuring holistic development.
            </section>
          </section>

          {/* Card - 2 */}
          <section className="w-[303px]">
            <Image
              src={bookLibrary}
              alt="University Backgroun"
              className="mx-auto w-[244px] h-[244px] "
            />

            <section className="text-[18px] font-[600] leading-[24.12px] text-[#460C04] text-center mx-auto mt-[15px]">
              Expert-Designed Content
            </section>
            <section className="mt-2 text-[14px] font-[400] leading-[19.6px] text-center mx-auto text-[#460C04] lg:mt-6 lg:w-[303px]">
              All courses are created by experienced educators & child
              development specialists to guarantee the highest quality of
              learning.
            </section>
          </section>

          {/* Card - 3 */}
          <section className="w-[301px]">
            <Image
              src={boyLearning}
              alt="University Backgroun"
              className="mx-auto w-[171px] h-[171px] lg:h-[215px] lg:w-[215px]"
            />

            <section className="text-[18px] font-[600] leading-[24.12px] text-[#460C04] text-center mx-auto mt-[43px]">
              Cutting Edge Technologies
            </section>
            <section className="mt-2 text-[14px] font-[400] leading-[19.6px] text-center mx-auto text-[#460C04] lg:mt-6 lg:w-[303px]">
              Program uses Ridge Analysis, Milestones Acceleration, Reading,
              Math, & Encyclopedic Knowledge program, Multiple Intelligences.
            </section>
          </section>
        </section>
      </section>

      <VisionSection />

      <div className="pb-[52px] xl:pb-20 ">
        <CallbackContainer />
      </div>

      <AboutFounder />

      <section className="py-[52px] px-[15px] lg:py-[90px] xl:py-[124px] ">
        <section className="flex flex-wrap gap-2 justify-center lg:gap-[53px] ">
          <section className="w-[87px] h-[88px] p-4 bg-[#FAEFB63D] rounded-[24px] grid gap-1 items-center justify-center lg:h-[154px] lg:w-[243.2px] lg:px-10 lg:py-6 ">
            <section className="text-[18px] font-[600] leading-[21.6px] text-[#1A2434] text-center lg:text-[48px] lg:leading-[57.6px]">
              4k<span className="text-[#D05A55] ">+</span>
            </section>

            <section className="text-[10px] font-[400] leading-[18px] text-[#1A2434] text-center lg:text-[18px] lg:leading-[32.4px] opacity-[70%]">
              Workshops
            </section>
          </section>

          <section className="w-[115px] h-[106px] p-4 bg-[#FAEFB63D] rounded-[24px] grid gap-1 items-center justify-center lg:h-[154px] lg:w-[243.2px] lg:px-10 lg:py-6 ">
            <section className="text-[18px] font-[600] leading-[21.6px] text-[#1A2434] text-center lg:text-[48px] lg:leading-[57.6px]">
              5<span className="text-[#D05A55] ">k+</span>
            </section>

            <section className="text-[10px] font-[400] leading-[18px] text-[#1A2434] text-center lg:text-[18px] lg:leading-[32.4px] opacity-[70%]">
              Keynote Addresses
            </section>
          </section>

          <section className="w-[111px] h-[88px] p-4 bg-[#FAEFB63D] rounded-[24px] grid gap-1 items-center justify-center lg:h-[154px] lg:w-[243.2px] lg:px-10 lg:py-6 xl:order-4">
            <section className="text-[18px] font-[600] leading-[21.6px] text-[#1A2434] text-center lg:text-[48px] lg:leading-[57.6px]">
              30<span className="text-[#D05A55] ">k+</span>
            </section>

            <section className="text-[10px] font-[400] leading-[18px] text-[#1A2434] text-center lg:text-[18px] lg:leading-[32.4px] opacity-[70%]">
              HRD experience
            </section>
          </section>

          <section className="w-[255px] h-[106px] py-4 px-5 bg-[#FAEFB63D] rounded-[24px] grid gap-1 items-center justify-center lg:h-[218px] lg:w-[393px] xl:order-3">
            <section className="text-[18px] font-[600] leading-[21.6px] text-[#1A2434] text-center lg:text-[48px] lg:leading-[57.6px]">
              500<span className="text-[#D05A55] ">k+</span>
            </section>

            <section className="text-[10px] font-[400] leading-[18px] text-[#1A2434] text-center lg:text-[18px] lg:leading-[32.4px] opacity-[70%] lg:w-[313px]">
              Trained Corporate Executives, Parents & Faculty Members of
              Training Houses
            </section>
          </section>
        </section>

        <ProgramsTitle />

        <section className="flex flex-col gap-6 mt-8 items-center md:flex-row md:justify-center lg:mt-[82px] mx-auto max-w-[1440px] xl:gap-[128px] 2xl:justify-center">
          {/* Card - 1 */}
          <Link
            href="/b2b-offerings"
            className="w-[328px] h-[132px] bg-[#4D1435] rounded-[20px] relative px-6 py-8 xl:pt-20 xl:w-[575px] xl:h-[566px] xl:pb-14 xl:px-14 group xl:cursor-pointer xl:hover:scale-105 transition-all delay-100"
          >
            <section className="flex gap-4 justify-around xl:flex-col ">
              <section className="basis-[100px] xl:w-[338px] xl:h-[230px] grid self-center">
                <Image
                  src={offeringImage}
                  alt="Offering Image"
                  className="w-full h-full"
                />
              </section>

              <section className="p-[6px] grid gap-[6px] xl:mt-10 ">
                <div className="text-[16px] font-[600] leading-[19.2px] text-[#F6E2D8] mx-auto text-center xl:text-[32px] xl:w-[219px] xl:font-[700] xl:leading-[38.4px]">
                  B2B Offerings
                </div>
                <div className="w-[130px] text-[12px] font-[400] leading-[14.4px] text-[#F6E2D8] mx-auto text-center xl:mt-6 xl:w-[415px] xl:h-[58px] xl:text-[24px] xl:font-[500] xl:leading-[28.8px]">
                  For schools, day care centres & corporates
                </div>
              </section>
            </section>

            <section className="w-6 h-6 bg-[#7C4E6354] rounded-full absolute right-6 top-4 xl:w-16 xl:h-16 group-hover:bg-[#F6E2D8] transition-colors">
              <svg
                className="w-full h-full text-[#F6E2D8] group-hover:text-[#4D1435] transition-colors"
                viewBox="0 0 23 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="icon-arrow-right">
                  <path
                    id="Shape"
                    fill="currentColor"
                    d="M7.3455 8.39841C7.3455 8.03022 7.64398 7.73174 8.01217 7.73174L14.6118 7.73174C14.98 7.73174 15.2785 8.03022 15.2785 8.39841V14.9981C15.2785 15.3663 14.98 15.6647 14.6118 15.6647C14.2436 15.6647 13.9452 15.3663 13.9452 14.9981V10.0079L8.48358 15.4695C8.22323 15.7298 7.80112 15.7298 7.54077 15.4695C7.28042 15.2091 7.28042 14.787 7.54077 14.5267L13.0024 9.06508H8.01217C7.64398 9.06508 7.34551 8.7666 7.3455 8.39841Z"
                  />
                </g>
              </svg>
            </section>
          </Link>

          {/* Card - 2 */}
          <Link
            href="/affiliate"
            className="w-[328px] h-[132px] bg-[#4D1435] rounded-[20px] relative px-6 py-5 xl:pt-20 xl:w-[575px] xl:h-[566px] xl:pb-14 xl:px-14 group xl:cursor-pointer xl:hover:scale-105 transition-all delay-100"
          >
            <section className="flex gap-4 justify-around xl:flex-col">
              <section className="basis-[100px] xl:w-[340px] xl:h-[230px] grid justify-center mx-auto">
                <Image
                  src={partner}
                  alt="Offering Image"
                  className="w-full h-full xl:w-[260px]"
                />
              </section>
              <section className="p-[6px] grid gap-[6px] xl:mt-10">
                <div className="w-[130px] h-[38px] text-[16px] font-[600] leading-[19.2px] text-[#F6E2D8] mx-auto text-center xl:w-[317px] xl:text-[32px] xl:font-[700] xl:leading-[38.4px]">
                  Affiliate Partnership
                </div>
                <div className="w-[129px] text-[12px] font-[400] leading-[14.4px] text-[#F6E2D8] mx-auto text-center xl:mt-6 xl:text-[24px] xl:font-[500] xl:w-[415px] xl:h-[58px] xl:leading-[28.8px]">
                  With Teachers, Gynacologists, & Paediatricians
                </div>
              </section>
            </section>

            <section className="w-6 h-6 bg-[#7C4E6354] rounded-full absolute right-6 top-4 xl:w-16 xl:h-16 group-hover:bg-[#F6E2D8] transition-colors">
              <svg
                className="w-full h-full text-[#F6E2D8] group-hover:text-[#4D1435] transition-colors"
                viewBox="0 0 23 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="icon-arrow-right">
                  <path
                    id="Shape"
                    fill="currentColor"
                    d="M7.3455 8.39841C7.3455 8.03022 7.64398 7.73174 8.01217 7.73174L14.6118 7.73174C14.98 7.73174 15.2785 8.03022 15.2785 8.39841V14.9981C15.2785 15.3663 14.98 15.6647 14.6118 15.6647C14.2436 15.6647 13.9452 15.3663 13.9452 14.9981V10.0079L8.48358 15.4695C8.22323 15.7298 7.80112 15.7298 7.54077 15.4695C7.28042 15.2091 7.28042 14.787 7.54077 14.5267L13.0024 9.06508H8.01217C7.64398 9.06508 7.34551 8.7666 7.3455 8.39841Z"
                  />
                </g>
              </svg>
            </section>
          </Link>
        </section>
      </section>
    </div>
  );
};

export default About;
