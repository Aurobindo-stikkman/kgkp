import Image from "next/image";

import aboutusImage from "./assets/d516390aa1590bb56cf66890ca812ca9.jpg";
import universityBackground from "./assets/flat-university-background 1.png";
import boyLearning from "./assets/boy-learning.png";
import bookLibrary from "./assets/book-library.png";
import targetFrame from "./assets/target frame.png";
import improving from "./assets/improving.png";
import AboutFounder from "./AboutFounder";
import offeringImage from "./assets/handShake.png";
import partner from "./assets/partner.png";
import arrowIcon from "./assets/icon-arrow-right.svg";
import chalkStroke from "./assets/Chalk Stroke.png";

const About = () => {
  return (
    <div>
      <section className="pt-6 pb-[52px] bg-[#FAEFB6] rounded-bl-[40px] rounded-br-[40px] px-4 sm:px-16 lg:px-[50px] lg:py-24 lg:rounded-br-[100px] lg:rounded-bl-[100px] xl:px-[100px]">
        <section className="relative text-[28px] font-[700] leading-[36.4px] text-center text-[#4D1435] mx-auto lg:text-[42px] lg:leading-[50.4px]">
          <span className="z-10 relative">About Us</span>
          <Image
            src={chalkStroke}
            alt="Chalk Icon"
            className="absolute w-[241px] h-[56.9px] bottom-[-25px] left-1/2 translate-x-[-50%] z-0 "
          />
        </section>

        <section className="mt-6 text-[16px] font-[500] leading-[22.4px] text-[#460C04] text-center w-[328px] mx-auto lg:mt-8 lg:text-[24px] lg:leading-[33.6px] lg:w-[546px]">
          Have you unlocked your child's full potential? Let's nurture their
          genius together at KGKP!
        </section>

        <section className="h-[157px] mx-auto mt-8 sm:h-[230px] md:h-[300px] lg:mt-[52px] lg:h-[481px] xl:w-[1037.69px] ">
          <Image
            src={aboutusImage}
            alt="About Us Image"
            className="h-full w-full rounded-[22.43px]"
          />
        </section>

        <section className="text-[14px] font-[400] leading-[19.6px] text-center mx-auto mt-8 text-[#460C04] lg:mt-[71px] lg:w-[922px] lg:text-[20px] lg:leading-[28px]">
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
            <section className="mt-2 text-[14px] font-[400] leading-[19.6px] text-center mx-auto text-[#460C04] lg:w-[303px]">
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
              Comprehensive Curriculum
            </section>
            <section className="mt-2 text-[14px] font-[400] leading-[19.6px] text-center mx-auto text-[#460C04] lg:w-[303px]">
              We integrate academic excellence with the intellectual, emotional
              and spiritual growth of your child ensuring holistic development.
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
              Comprehensive Curriculum
            </section>
            <section className="mt-2 text-[14px] font-[400] leading-[19.6px] text-center mx-auto text-[#460C04] lg:w-[303px]">
              We integrate academic excellence with the intellectual, emotional
              and spiritual growth of your child ensuring holistic development.
            </section>
          </section>
        </section>
      </section>

      <section className="py-[52px] px-10 lg:py-[155px] lg:px-[124px]">
        <section className="relative text-[28px] font-[700] leading-[36.4px] text-center mx-auto text-[#1A2434] lg:text-[42px] lg:leading-[50.4px]">
          <span className="relative z-10">Our Vision & Mission</span>
          <Image
            src={chalkStroke}
            alt="Chalk Icon"
            className="absolute w-[235.08px] h-[60.94px] left-1/2 top-[15%] translate-x-[-50%] z-0 lg:w-[397.11px] lg:h-[93.76px]"
          />
        </section>

        <section className="flex flex-col gap-[52px] justify-center mt-[52px] sm:flex-row sm:mt-10 lg:mt-[117px] lg:justify-between lg:gap-[112px] lg:max-w-[1130px] lg:mx-auto">
          <section className="flex flex-col lg:items-center lg:w-[509px] ">
            <Image
              src={targetFrame}
              alt="Target Frame"
              className="h-194.71px w-full lg:w-[357.17px] lg:h-[267.22px] "
            />

            <div className="mt-[52px] text-[20px] font-[600] leading-[26.8px] text-center text-[#1A2434] lg:text-[32px] lg:leading-[42.88px]">
              Vision
            </div>
            <div className="text-[16px] font-[500] leading-[21.44px] mt-2 text-[#1A2434] text-center mx-auto lg:text-[24px] lg:leading-[32.16px] lg:px-6">
              To contribute towards creating an enlightened society
            </div>
          </section>

          <section className="flex flex-col lg:items-center lg:w-[509px] ">
            <Image
              src={improving}
              alt="Target Frame"
              className="h-194.71px w-full lg:w-[308.1px] lg:h-[270px] "
            />

            <div className="mt-[52px] text-[20px] font-[600] leading-[26.8px] text-center text-[#1A2434] lg:text-[32px] lg:leading-[42.88px]">
              Mission
            </div>
            <div className="text-[16px] font-[500] leading-[21.44px] mt-2 text-[#1A2434] text-center mx-auto lg:text-[24px] lg:leading-[32.16px] lg:px-6">
              To become a world class educational institution.
            </div>
          </section>
        </section>
      </section>

      <AboutFounder />

      <section className="py-[52px] px-[15px] lg:py-[90px] xl:py-[124px] ">
        <section className="flex flex-wrap gap-2 justify-center lg:gap-[53px] ">
          <section className="w-[87px] h-[88px] p-4 bg-[#FAEFB63D] rounded-[24px] grid gap-1 items-center justify-center lg:h-[154px] lg:w-[243.2px] lg:px-10 lg:py-6 ">
            <section className="text-[18px] font-[600] leading-[21.6px] text-[#1A2434] text-center lg:text-[48px] lg:leading-[57.6px]">
              4k<span className="text-[#D05A55] ">+</span>
            </section>

            <section className="text-[10px] font-[400] leading-[18px] text-[#1A2434] text-center lg:text-[18px] lg:leading-[32.4px]">
              Workshops
            </section>
          </section>

          <section className="w-[115px] h-[106px] p-4 bg-[#FAEFB63D] rounded-[24px] grid gap-1 items-center justify-center lg:h-[154px] lg:w-[243.2px] lg:px-10 lg:py-6 ">
            <section className="text-[18px] font-[600] leading-[21.6px] text-[#1A2434] text-center lg:text-[48px] lg:leading-[57.6px]">
              5<span className="text-[#D05A55] ">k+</span>
            </section>

            <section className="text-[10px] font-[400] leading-[18px] text-[#1A2434] text-center lg:text-[18px] lg:leading-[32.4px]">
              Keynote Addresses
            </section>
          </section>

          <section className="w-[111px] h-[88px] p-4 bg-[#FAEFB63D] rounded-[24px] grid gap-1 items-center justify-center lg:h-[154px] lg:w-[243.2px] lg:px-10 lg:py-6 xl:order-4">
            <section className="text-[18px] font-[600] leading-[21.6px] text-[#1A2434] text-center lg:text-[48px] lg:leading-[57.6px]">
              30<span className="text-[#D05A55] ">k+</span>
            </section>

            <section className="text-[10px] font-[400] leading-[18px] text-[#1A2434] text-center lg:text-[18px] lg:leading-[32.4px]">
              HRD experience
            </section>
          </section>

          <section className="w-[255px] h-[106px] py-4 px-5 bg-[#FAEFB63D] rounded-[24px] grid gap-1 items-center justify-center lg:h-[218px] lg:w-[393px] xl:order-3">
            <section className="text-[18px] font-[600] leading-[21.6px] text-[#1A2434] text-center lg:text-[48px] lg:leading-[57.6px]">
              500<span className="text-[#D05A55] ">k+</span>
            </section>

            <section className="text-[10px] font-[400] leading-[18px] text-[#1A2434] text-center lg:text-[18px] lg:leading-[32.4px] lg:w-[313px]">
              Trained Corporate Executives, Parents & Faculty Members of
              Training Houses
            </section>
          </section>
        </section>

        <section className="mt-[52px] text-[28px] relative font-[700] leading-[36.4px] text-[#1A2434] text-center mx-auto lg:mt-[124px] lg:text-[42px] lg:leading-[50.4px]">
          <span className="relative z-10">Other Programs</span>
          <Image
            src={chalkStroke}
            alt="Chalk Icon"
            className="absolute w-[235.08px] h-[60.94px] left-1/2 top-[15%] translate-x-[-50%] z-0 lg:w-[397.11px] lg:h-[93.76px]"
          />
        </section>

        <section className="flex flex-col gap-6 mt-8 sm:flex-row md:justify-center xl:gap-[128px] xl:mt-[82px] ">
          <section className="bg-[#4D1435] rounded-[20px] relative px-6 py-8 lg:pt-20 lg:pb-14 lg:px-14">
            <section className="flex gap-4 justify-around lg:flex-col ">
              <section className="basis-[100px] lg:w-[338px] lg:h-[230px] grid self-center">
                <Image
                  src={offeringImage}
                  alt="Offering Image"
                  className="w-full h-full"
                />
              </section>

              <section className="p-[6px] grid gap-[6px] lg:mt-10 ">
                <div className="text-[16px] font-[600] leading-[19.2px] text-[#F6E2D8] mx-auto text-center lg:text-[32px] lg:font-[700] lg:leading-[38.4px]">
                  B2B Offerings
                </div>
                <div className="text-[12px] font-[400] leading-[14.4px] text-[#F6E2D8] mx-auto text-center lg:mt-6 lg:text-[24px] lg:font-[500] lg:leading-[28.8px] xl:w-[418px]">
                  For schools, day care centres & corporates
                </div>
              </section>
            </section>

            <section className="bg-[#7C4E6354] rounded-full absolute right-6 top-4 lg:w-16 lg:h-16 ">
              <Image
                src={arrowIcon}
                alt="Arrow Icon"
                className="h-full w-full"
              />
            </section>
          </section>

          <section className="bg-[#4D1435] rounded-[20px] relative px-6 py-8 lg:pt-20 lg:pb-14 lg:px-14">
            <section className="flex gap-4 justify-around lg:flex-col">
              <section className="basis-[100px] lg:w-[340px] lg:h-[230px] grid justify-center mx-auto">
                <Image
                  src={partner}
                  alt="Offering Image"
                  className="w-full h-full lg:w-[260px]"
                />
              </section>
              <section className="p-[6px] grid gap-[6px] lg:mt-10">
                <div className="text-[16px] font-[600] leading-[19.2px] text-[#F6E2D8] mx-auto text-center lg:text-[32px] lg:font-[700] lg:leading-[38.4px]">
                  Affiliate Partnership
                </div>
                <div className="text-[12px] font-[400] leading-[14.4px] text-[#F6E2D8] mx-auto text-center lg:mt-6 lg:text-[24px] lg:font-[500] lg:leading-[28.8px] xl:w-[418px]">
                  With Teachers, Gynacologists, & Paediatricians
                </div>
              </section>
            </section>

            <section className="bg-[#7C4E6354] rounded-full absolute right-6 top-4 lg:w-16 lg:h-16">
              <Image
                src={arrowIcon}
                alt="Arrow Icon"
                className="h-full w-full"
              />
            </section>
          </section>
        </section>
      </section>
    </div>
  );
};

export default About;
