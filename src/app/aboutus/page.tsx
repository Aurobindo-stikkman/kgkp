import Image from "next/image";

import aboutusImage from "./assets/d516390aa1590bb56cf66890ca812ca9.jpg";
import universityBackground from "./assets/flat-university-background 1.png";
import boyLearning from "./assets/boy-learning.png";
import bookLibrary from "./assets/book-library.png";
import targetFrame from "./assets/target frame.png";
import improving from "./assets/improving.png";
import AboutFounder from "./AboutFounder";
import offeringImage from "./assets/Frame 1984077590.png";
import partner from "./assets/partner.png";
import arrowIcon from "./assets/icon-arrow-right.svg";

const About = () => {
  return (
    <div>
      <section className="pt-6 pb-[52px] bg-[#FAEFB6] rounded-bl-[40px] rounded-br-[40px] px-4">
        <section className="text-[28px] font-[700] leading-[36.4px] text-center text-[#4D1435] mx-auto ">
          About Us
        </section>

        <section className="mt-6 text-[16px] font-[500] leading-[22.4px] text-[#460C04] text-center w-[328px] mx-auto ">
          Have you unlocked your child's full potential? Let's nurture their
          genius together at KGKP!
        </section>

        <section className="h-[157px] mx-auto mt-8 ">
          <Image
            src={aboutusImage}
            alt="About Us Image"
            className="h-full w-full rounded-[22.43px]"
          />
        </section>

        <section className="text-[14px] font-[400] leading-[19.6px] text-center mt-8 text-[#460C04] ">
          At KGKP, we are dedicated to creating "A Complete Home Schooling
          Program" where we nurture brilliant geniuses. Our mission is to offer
          meticulously aligned activities that foster the complete
          braindevelopment of your child. From infancy and playgroup stages to
          the age of 15 and beyond, we focus on accelerating the overall
          intelligence, emotional, and spiritual quotients of every child.
        </section>

        <section className="flex flex-col gap-8">
          {/* Card - 1 */}
          <section className="px-[13px]">
            <Image
              src={universityBackground}
              alt="University Backgroun"
              className="mx-auto w-[244px] h-[244px] "
            />

            <section className="text-[18px] font-[600] leading-[24.12px] text-[#460C04] text-center mx-auto">
              Comprehensive Curriculum
            </section>
            <section className="mt-2 text-[14px] font-[400] leading-[19.6px] text-center mx-auto text-[#460C04]">
              We integrate academic excellence with the intellectual, emotional
              and spiritual growth of your child ensuring holistic development.
            </section>
          </section>

          {/* Card - 2 */}
          <section className="px-[13px]">
            <Image
              src={bookLibrary}
              alt="University Backgroun"
              className="mx-auto w-[244px] h-[244px] "
            />

            <section className="text-[18px] font-[600] leading-[24.12px] text-[#460C04] text-center mx-auto">
              Comprehensive Curriculum
            </section>
            <section className="mt-2 text-[14px] font-[400] leading-[19.6px] text-center mx-auto text-[#460C04] ">
              We integrate academic excellence with the intellectual, emotional
              and spiritual growth of your child ensuring holistic development.
            </section>
          </section>

          {/* Card - 3 */}
          <section className="px-[13px]">
            <Image
              src={boyLearning}
              alt="University Backgroun"
              className="mx-auto w-[244px] h-[244px] "
            />

            <section className="text-[18px] font-[600] leading-[24.12px] text-[#460C04] text-center mx-auto">
              Comprehensive Curriculum
            </section>
            <section className="mt-2 text-[14px] font-[400] leading-[19.6px] text-center mx-auto text-[#460C04] ">
              We integrate academic excellence with the intellectual, emotional
              and spiritual growth of your child ensuring holistic development.
            </section>
          </section>
        </section>
      </section>

      <section className="py-[52px] px-10">
        <section className="text-[28px] font-[700] leading-[36.4px] text-center mx-auto text-[#1A2434] ">
          Our Vision &Mission
        </section>

        <section className="flex flex-col gap-[52px]">
          <section className="p-2 ">
            <Image
              src={targetFrame}
              alt="Target Frame"
              className="h-194.71px w-full "
            />

            <div className="mt-[52px] text-[20px] font-[600] leading-[26.8px] text-center text-[#1A2434] ">
              Vision
            </div>
            <div className="text-[16px] font-[500] leading-[21.44px] mt-2 text-[#1A2434] text-center mx-auto ">
              To contribute towards creating an enlightened society
            </div>
          </section>

          <section className="p-2 ">
            <Image
              src={improving}
              alt="Target Frame"
              className="h-194.71px w-full "
            />

            <div className="mt-[52px] text-[20px] font-[600] leading-[26.8px] text-center text-[#1A2434] ">
              Mission
            </div>
            <div className="text-[16px] font-[500] leading-[21.44px] mt-2 text-[#1A2434] text-center mx-auto ">
              To become a world class educational institution.
            </div>
          </section>
        </section>
      </section>

      <AboutFounder />

      <section className="py-[52px] px-[15px] ">
        <section className="flex flex-wrap gap-2 justify-center">
          <section className="w-[87px] h-[88px] p-4 bg-[#FAEFB63D] grid gap-1 items-center justify-center">
            <section className="text-[18px] font-[600] leading-[21.6px] text-[#1A2434] text-center">
              4K<span className="text-[#D05A55] ">+</span>
            </section>

            <section className="text-[10px] font-[400] leading-[18px] text-[#1A2434] text-center">
              Workshops
            </section>
          </section>

          <section className="w-[115px] h-[106px] p-4 bg-[#FAEFB63D] grid gap-1 items-center justify-center">
            <section className="text-[18px] font-[600] leading-[21.6px] text-[#1A2434] text-center">
              5K<span className="text-[#D05A55] ">+</span>
            </section>

            <section className="text-[10px] font-[400] leading-[18px] text-[#1A2434] text-center">
              Keynote Addresses
            </section>
          </section>

          <section className="w-[111px] h-[88px] p-4 bg-[#FAEFB63D] grid gap-1 items-center justify-center">
            <section className="text-[18px] font-[600] leading-[21.6px] text-[#1A2434] text-center">
              30K<span className="text-[#D05A55] ">+</span>
            </section>

            <section className="text-[10px] font-[400] leading-[18px] text-[#1A2434] text-center">
              HRD experience
            </section>
          </section>

          <section className="w-[255px] h-[106px] py-4 px-5 bg-[#FAEFB63D] grid gap-1 items-center justify-center">
            <section className="text-[18px] font-[600] leading-[21.6px] text-[#1A2434] text-center">
              500K<span className="text-[#D05A55] ">+</span>
            </section>

            <section className="text-[10px] font-[400] leading-[18px] text-[#1A2434] text-center">
              Trained Corporate Executives, Parents & Faculty Members of
              Training Houses
            </section>
          </section>
        </section>

        <section className="mt-[52px] text-[28px] font-[700] leading-[36.4px] text-[#1A2434] text-center mx-auto ">
          Other Programs
        </section>

        <section className="flex flex-col gap-6 ">
          <section className="bg-[#4D1435] rounded-[20px] relative px-6 py-8">
            <section className="flex gap-4 h-[68px] w-[247px] ">
              <section className="basis-[100px]">
                <Image
                  src={offeringImage}
                  alt="Offering Image"
                  className="w-full h-full"
                />
              </section>
              <section className="p-[6px] grid gap-[6px] ">
                <div className="text-[16px] font-[600] leading-[19.2px] text-[#F6E2D8] mx-auto text-center">
                  B2B Offerings
                </div>
                <div className="text-[12px] font-[400] leading-[14.4px] text-[#F6E2D8] mx-auto text-center">
                  For schools, day care centres & corporates
                </div>
              </section>
            </section>

            <section className="bg-[#7C4E6354] rounded-full absolute right-6 top-4 ">
              <Image
                src={arrowIcon}
                alt="Arrow Icon"
                className="h-full w-full"
              />
            </section>
          </section>

          <section className="bg-[#4D1435] rounded-[20px] relative px-6 py-5">
            <section className="flex gap-4 h-[92.28px] w-[247px] ">
              <section className="basis-[100px]">
                <Image
                  src={partner}
                  alt="Offering Image"
                  className="w-full h-full"
                />
              </section>
              <section className="p-[6px] grid gap-[6px] ">
                <div className="text-[16px] font-[600] leading-[19.2px] text-[#F6E2D8] mx-auto text-center">
                  Affiliate Partnership
                </div>
                <div className="text-[12px] font-[400] leading-[14.4px] text-[#F6E2D8] mx-auto text-center">
                  With Teachers, Gynacologists, & Paediatricians
                </div>
              </section>
            </section>

            <section className="bg-[#7C4E6354] rounded-full absolute right-6 top-4 ">
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
