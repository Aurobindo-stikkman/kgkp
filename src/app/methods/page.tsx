import Image from "next/image";

import methodImage from "./assets/pic web.svg";
import rightIcon from "./assets/icon-arrow-right-white.svg";
import strengthIcon from "./assets/motivation 1.svg";
import brainIcon from "./assets/brain 1.svg";
import growthIcon from "./assets/idea 1.svg";

import card1 from "./assets/card-1.png";
import card2 from "./assets/card-2.png";
import card3 from "./assets/card3.png";
import milestoneImg from "./assets/2x1 1.png";
import inteligenceImg from "./assets/Screenshot 2024-06-28 at 11.37.34 AM 3.png";
import analysisImage from "./assets/DMIT 1.png";
import Courses from "./Courses";

const Methods = () => {
  return (
    <div>
      {/* Method section */}
      <section className="bg-[#F6E2D7] pt-6 pb-[52px] rounded-bl-[40px] rounded-br-[40px] ">
        <section className="mx-auto text-[28px] font-[700] leading-[36.4px] text-[#4D1435] text-center w-max">
          The KGKP Method
        </section>

        <section className="flex flex-col">
          <Image
            src={methodImage}
            alt="Method Landing image"
            className="h-[273px] w-[485.33px] relative left-[-60px]"
          />

          <section>
            <section className="flex flex-col gap-[6px] w-[274px] mx-auto ">
              <section className="text-[16px] font-[600] leading-[21.44px] text-center text-[#4D1435]">
                From Potential to Prodigy:
              </section>
              <section className="text-[16px] font-[400] leading-[21.44px] text-center text-[#4D1435] w-[274px]">
                A Proven Programme for Raising a{" "}
                <span className="text-[16px] font-[600] leading-[21.44px] text-center text-[#4D1435]">
                  World-Ready Genius
                </span>
              </section>
            </section>

            <section className="mt-8 text-[14px] font-[400] leading-[22.4px] text-[#4D1435] mx-4">
              The Kaushalya Genius Kid Program (KGKP) uses a scientifically
              designed approach to enhance your child's IQ, EQ, and SQ,
              unlocking his/her full potential.
            </section>

            <section className="mt-4 text-[14px] font-[400] leading-[22.4px] text-[#4D1435] mx-4 ">
              The program includes a curriculum which is developed using cutting
              edge technologies like Ridge Analysis, Brain Development Profile,
              Milestones Acceleration, Theory of Multiple Intelligences and so
              on to boost your child’s intellectual abilities. The program also
              enhances emotional and spiritual quotients through guided
              parenting practices, storytelling, and regular sessions on various
              relevant topics.
              <div className="mt-6">
                KGKP’s holistic and time-tested method ensures comprehensive
                personality development, fostering academic excellence,
                emotional intelligence, and a balanced, peaceful lifestyle.
              </div>
            </section>

            <section className="mt-[52px] mx-7 text-[#4D1435] text-[28px] font-[700] leading-[36.4px] text-center ">
              Learn How we Actualize the Genius of your Child
            </section>

            <section className="flex flex-col mt-8 gap-8">
              <section className="grid mx-[29px] gap-8 ">
                <section className="bg-[#FF9E22] w-[211px] h-[177px] mx-[45px] "></section>
                <section className="grid gap-3 ">
                  <div className="text-[18px] font-[600] leading-[21.6px] text-[#4D1435] ">
                    IQ | Intelligence quotient
                  </div>
                  <div className="text-[14px] font-[400] leading-[19.6px] text-[#4D1435] ">
                    Our program boosts IQ through ridge analysis and brain
                    development profile to build a strong foundation in the
                    first six years. This high IQ leads to academic excellence
                    and helps children actualize their innate talents.
                  </div>
                </section>
              </section>
              <section className="grid mx-[29px] gap-8 ">
                <section className="bg-[#FF9E22] w-[211px] h-[177px] mx-[45px] "></section>
                <section className="grid gap-3 ">
                  <div className="text-[18px] font-[600] leading-[21.6px] text-[#4D1435] ">
                    EQ | Emotional quotient
                  </div>
                  <div className="text-[14px] font-[400] leading-[19.6px] text-[#4D1435] ">
                    We build your child’s EQ by sowing seeds of emotional
                    intelligence from ages 0-6 and enhancing it through weekly
                    expert-led sessions and practical assignments from ages
                    6-15, covering vital life skills and emotional development.
                  </div>
                </section>
              </section>
              <section className="grid mx-[29px] gap-8 ">
                <section className="bg-[#FF9E22] w-[211px] h-[177px] mx-[45px] "></section>
                <section className="grid gap-3 ">
                  <div className="text-[18px] font-[600] leading-[21.6px] text-[#4D1435] ">
                    SQ | Spiritual quotient
                  </div>
                  <div className="text-[14px] font-[400] leading-[19.6px] text-[#4D1435] ">
                    Our weekly sessions of SQ enhance values and mindfulness,
                    creating spiritual grounding, fostering an all round
                    personality and inner peace in your child, and promoting
                    positive parenting.
                  </div>
                </section>
              </section>
            </section>
          </section>
        </section>
      </section>

      {/* courses secton */}
      <Courses />

      {/* <section className="mt-9 mb-[52px]">
        <section className="mx-[65px] text-[28px] font-[700] leading-[36.4px] text-[#1A2434] text-center ">
          The KGKP Path to Genius
        </section>

        <section className="mx-4 mt-11 grid ">
          <section className="flex flex-col gap-8 relative ">
            <Image
              src={course1}
              alt="course 1"
              className="h-[330px] self-center "
            />
            <div className="shadow-md rounded-[20px] bg-[#edf7f5] overflow-hidden ">
              <section className="relative">
                <Image
                  src={vector83}
                  alt="Vector 83"
                  className="w-full object-cover h-[70px] z-0 "
                />
                <div className="text-[16px] font-[600] leading-[19.2px] absolute top-6 left-4 text-white">
                  Pre-pregnancy (Beej Sanskar)
                </div>
              </section>
              <section className="px-5 pt-7 pb-5">
                <div className="text-[14px] font-[500] leading-[16.8px] text-[#1A2434] ">
                  3 Courses to prepare your body, mind and spirit to receive the
                  highest quality of soul during conception.
                </div>
                <section className="mt-4 flex gap-[10px] justify-end items-center">
                  <div className="text-[14px] font-[600] leading-[16.94px] text-[#1A2434]">
                    Learn More
                  </div>
                  <Image
                    src={arrowIcon}
                    alt="Arrow Icon right"
                    className="w-4 h-4 "
                  />
                </section>
              </section>
            </div>

            <Image
              src={footSteps1}
              alt="Foot Steps"
              className="absolute bottom-[-28%] left-[40px] z-10 "
            />
          </section>

          <section className="flex flex-col gap-8 relative mt-[126px] ">
            <Image
              src={course2}
              alt="course 1"
              className="h-[330px] self-center "
            />
            <div className="shadow-md rounded-[20px] bg-[#F6E2D799] overflow-hidden ">
              <section className="relative">
                <Image
                  src={vector84}
                  alt="Vector 84"
                  className="w-full object-cover h-[70px] z-0 "
                />
                <div className="text-[16px] font-[600] leading-[19.2px] absolute top-6 left-4 text-white">
                  Pre-pregnancy (Beej Sanskar)
                </div>
              </section>
              <section className="px-5 pt-7 pb-5">
                <div className="text-[14px] font-[500] leading-[16.8px] text-[#1A2434] ">
                  3 Courses to prepare your body, mind and spirit to receive the
                  highest quality of soul during conception.
                </div>
                <section className="mt-4 flex gap-[10px] justify-end items-center">
                  <div className="text-[14px] font-[600] leading-[16.94px] text-[#1A2434]">
                    Learn More
                  </div>
                  <Image
                    src={arrowIcon}
                    alt="Arrow Icon right"
                    className="w-4 h-4 "
                  />
                </section>
              </section>
            </div>
            <Image
              src={footSteps2}
              alt="Foot Steps 2"
              className="absolute bottom-[-28%] left-[35px]"
            />
          </section>

          <section className="flex flex-col gap-8 relative mt-[126px] ">
            <Image
              src={course1}
              alt="course 1"
              className="h-[330px] self-center "
            />
            <div className="shadow-md rounded-[20px] bg-[#F3E0A399] overflow-hidden ">
              <section className="relative">
                <Image
                  src={vector85}
                  alt="Vector 85"
                  className="w-full object-cover h-[70px] z-0 "
                />
                <div className="text-[16px] font-[600] leading-[19.2px] absolute top-6 left-4 text-white">
                  Pre-pregnancy (Beej Sanskar)
                </div>
              </section>
              <section className="px-5 pt-7 pb-5">
                <div className="text-[14px] font-[500] leading-[16.8px] text-[#1A2434] ">
                  3 Courses to prepare your body, mind and spirit to receive the
                  highest quality of soul during conception.
                </div>
                <section className="mt-4 flex gap-[10px] justify-end items-center">
                  <div className="text-[14px] font-[600] leading-[16.94px] text-[#1A2434]">
                    Learn More
                  </div>
                  <Image
                    src={arrowIcon}
                    alt="Arrow Icon right"
                    className="w-4 h-4 "
                  />
                </section>
              </section>
            </div>
            <Image
              src={footSteps3}
              alt="Foot steps 3"
              className="absolute bottom-[-150px] left-[35px]"
            />
          </section>

          <section className="flex flex-col gap-8 relative mt-[126px] ">
            <Image
              src={course2}
              alt="course 1"
              className="h-[330px] self-center "
            />
            <div className="shadow-md rounded-[20px] bg-[#D1CCF366] overflow-hidden ">
              <section className="relative">
                <Image
                  src={vector86}
                  alt="Vector 86"
                  className="w-full object-cover h-[70px] z-0 "
                />
                <div className="text-[16px] font-[600] leading-[19.2px] absolute top-6 left-4 text-white">
                  Pre-pregnancy (Beej Sanskar)
                </div>
              </section>
              <section className="px-5 pt-7 pb-5">
                <div className="text-[14px] font-[500] leading-[16.8px] text-[#1A2434] ">
                  3 Courses to prepare your body, mind and spirit to receive the
                  highest quality of soul during conception.
                </div>
                <section className="mt-4 flex gap-[10px] justify-end items-center">
                  <div className="text-[14px] font-[600] leading-[16.94px] text-[#1A2434]">
                    Learn More
                  </div>
                  <Image
                    src={arrowIcon}
                    alt="Arrow Icon right"
                    className="w-4 h-4 "
                  />
                </section>
              </section>
            </div>
            <Image
              src={footSteps4}
              alt="Foot steps 4"
              className="absolute bottom-[-150px] left-[35px]"
            />
          </section>

          <Image
            src={course2}
            alt="course 1"
            className="h-[330px] mt-[126px] self-center justify-self-center "
          />

          <section className="mt-8 text-[28px] font-[700] leading-[36.4px] text-center text-[#4D1435] mx-auto">
            The KGKP Guarantee:
          </section>

          <section className="text-[28px] mt-4 font-[700] leading-[39.2px] text-[#4D1435] text-center mx-[50px] ">
            A Genius Ready for the World!
          </section>

          <section className="mt-6 mx-6 text-[14px] font-[500] leading-[19.6px] text-[#1A2434] text-center ">
            When courses are sincerely completed from the pre-pregnancy stage or
            early childhood till the child is 15 years of age.
          </section>

          <section className="mt-4 mx-6 text-[14px] font-[500] leading-[19.6px] text-[#1A2434] text-center ">
            Note: Joining the KGKP at a later stage or not completing all
            courses as directed may result in proportionately reduced benefits
          </section>
        </section>
      </section> */}

      <section className="bg-[#FAEFB6] py-[52px] ">
        <section className="text-[#460C04] text-[20px] font-[700] leading-[26px] text-center mx-auto w-[311px] ">
          Ready to Begin Your Child's Journey to Becoming a Genius Ready for the
          World?
        </section>

        <section className="mt-11 w-[254px] bg-[#4D1435] rounded-[50px] px-7 py-4 mx-auto flex gap-[14px] justify-center">
          <section className="text-white text-[16px] font-[700] leading-[19.2px] ">
            Explore Our Courses
          </section>
          <Image src={rightIcon} alt="Arrow Icon mark" className="w-4 h-4" />
        </section>
      </section>

      {/* Cards section */}
      <section className="my-[52px] px-3">
        <section className="text-[20px] font-[700] leading-[26px] text-[#1A2434] text-center mx-auto">
          Academic Excellence
        </section>

        <section className="mt-8 text-[14px] font-[500] leading-[19.6px] text-center text-[#1A2434] mx-auto ">
          In any school across the world, about 10% children are academically
          brilliant. The rest are average or thereabouts.
        </section>

        <section className="mt-4 text-[14px] font-[400] leading-[19.6px] text-center text-[#1A2434] mx-auto ">
          The only difference between these two groups is that the brilliant
          children:1) Read better, 2) Do Math better, 3) Have more encyclopedic
          knowledge. KGKP bridges this gap for every child in the first 6 years.
        </section>

        <section className="mt-6 flex flex-col gap-6 ">
          {/* Card-1 */}
          <section className="grid gap-6 rounded-[40px] border pb-6 overflow-hidden">
            <Image src={card1} alt="Card - 1" className="basis-1/2 w-full" />
            <div className="basis-1/2 px-4 grid gap-3 ">
              <div className="text-[16px] font-[600] leading-[19.2px] text-[#1A2434] text-center ">
                Reading Program
              </div>
              <div className="text-[12px] font-[400] leading-[19.2px] text-[#1A2434] text-center ">
                We use short videos daily to teach children to recognize and
                pronounce words, phrases, and sentences, gradually enabling them
                to read and comprehend a newspaper by age six. This fosters a
                love for reading and also empowers children to access and
                understand knowledge from books, libraries and the internet.
              </div>
            </div>
          </section>

          {/* Card-2 */}
          <section className="grid gap-6 rounded-[40px] border pb-6 overflow-hidden">
            <Image src={card2} alt="Card - 2" className="basis-1/2 w-full" />
            <div className="basis-1/2 px-4 grid gap-3 ">
              <div className="text-[16px] font-[600] leading-[19.2px] text-[#1A2434] text-center ">
                Math Program
              </div>
              <div className="text-[12px] font-[400] leading-[19.2px] text-[#1A2434] text-center ">
                Our math program employs short videos that use dot cards to
                teach quantity recognition, addition, subtraction,
                multiplication, division, equations and mixed equations in the
                first 12 months and further continues with advanced math and
                arithmetic. This nurtures high math ability and consequently,
                quick decision-making capabilities.
              </div>
            </div>
          </section>

          {/* Card-3 */}
          <section className="grid gap-6 rounded-[40px] border pb-6 overflow-hidden">
            <Image src={card3} alt="Card - 3" className="basis-1/2 w-full" />
            <div className="basis-1/2 px-4 grid gap-3 ">
              <div className="text-[16px] font-[600] leading-[19.2px] text-[#1A2434] text-center ">
                Math Program
              </div>
              <div className="text-[12px] font-[400] leading-[19.2px] text-[#1A2434] text-center ">
                Our math program employs short videos that use dot cards to
                teach quantity recognition, addition, subtraction,
                multiplication, division, equations and mixed equations in the
                first 12 months and further continues with advanced math and
                arithmetic. This nurtures high math ability and consequently,
                quick decision-making capabilities.
              </div>
            </div>
          </section>
        </section>
      </section>

      {/* Milestone section */}
      <section className="rounded-[40px] bg-[#F6E2D7] py-[52px] px-4 ">
        <section className="text-[28px] font-[700] leading-[36.4px] text-center text-[#460C04] mx-auto w-[197px] ">
          Milestones Acceleration
        </section>

        <Image
          src={milestoneImg}
          alt="2x1 1"
          className="h-[164px] rounded-[20px] mt-8 "
        />

        <section className="mt-8 text-[14px] font-[400] leading-[22.4px] text-[#460C04] ">
          Milestones Acceleration is a structured approach that enhances your
          child's brain development during the first six crucial years. In these
          first six years, there are 7 stages of brain development and in each
          stage, there are 6 milestones to be developed that affect the IQ of
          your child. Meaning, there are a total of 42 developmental milestones
          that are critical for boosting your child's IQ and overall cognitive
          abilities. The faster your child achieves these milestones, the higher
          will be the IQ of your child for the rest of his/her life.
          <div className="mt-6 text-[14px] font-[400] leading-[22.4px] text-[#460C04]">
            Our structured program focuses on accelerating these developmental
            milestones by guiding parents to do specific activities with the
            child and assess their development. The early and accelerated
            achievement of milestones creates very high levels of IQ in your
            child.
          </div>
        </section>

        <section className="mt-[52px] text-[28px] font-[700] leading-[36.4px] text-[#460C04] text-center mx-auto w-[191px] ">
          Multiple Intelligence
        </section>

        <Image
          src={inteligenceImg}
          alt="Inteligence Image"
          className="pt-8 rounded-[32.63px] "
        />

        <section className="mt-8 text-[14px] font-[400] leading-[22.4px] text-[#460C04] ">
          The concept of multiple intelligences is a theory proposed by Howard
          Gardner, a psychologist and a professor of education to propose that
          human brain is capable of different types of intelligences. These
          multiple intelligences include logical, linguistic, spatial,
          kinesthetic, interpersonal, intrapersonal, musical and naturalistic
          intelligences. Every child at the moment of birth has the potential
          intelligence to become a genius in onr or more of these intelligences.
          <div className="mt-6 text-[14px] font-[400] leading-[22.4px] text-[#460C04]">
            These intelligences are functions of different lobes in the brain
            and our Ridge Analysis report mentions critical information about
            the intelligence profile of the child. This information is used in
            our age appropriate activity plan for the child and parents are also
            counselled to practise some activities at home or through other
            available resources.
          </div>
        </section>
      </section>

      {/* Analysis section */}
      <section className="py-[52px] px-4 ">
        <section className="text-[28px] font-[700] leading-[36.4px] text-[#1A2434] mx-auto w-[203px] ">
          Ridge Analysis
        </section>
        <Image
          src={analysisImage}
          alt="Analysis image"
          className="h-[318px] rounded-[20px] mt-8 "
        />

        <section className="mt-8 text-[14px] font-[400] leading-[19.6px] text-[#1A2434] ">
          Ridge Analysis is a scientific method that helps to understand the
          inborn intelligences and learning styles by analysing fingerprints.
          The report gives clear information about:
        </section>

        <section className="mt-8 grid gap-6 ">
          <section className="flex gap-6">
            <Image
              src={strengthIcon}
              alt="Strength Icon"
              className="w-[42px] h-[42px]"
            />
            <div className="text-[16px] font-[600] leading-[19.2px] text-[#1A2434] text-center ">
              Strengths & weaknesses
            </div>
          </section>
          <section className="flex gap-6">
            <Image
              src={brainIcon}
              alt="Strength Icon"
              className="w-[42px] h-[42px]"
            />
            <div className="text-[16px] font-[600] leading-[19.2px] text-[#1A2434] text-center ">
              Growth rate of every brain lobe
            </div>
          </section>
          <section className="flex gap-6">
            <Image
              src={growthIcon}
              alt="Strength Icon"
              className="w-[42px] h-[42px]"
            />
            <div className="text-[16px] font-[600] leading-[19.2px] text-[#1A2434] text-center ">
              Learning style of the child
            </div>
          </section>
        </section>

        <section className="mt-8 text-[14px] font-[400] leading-[19.6px] text-[#1A2434] ">
          Ridge Analysis report can be generated after a child is 1 year old to
          identify the exact talent profile of the child. This report is then
          used to identify where the highest potential genius of the child lies
          and create a unique activity plan that parents can use to help their
          child actualise their potential genius.
        </section>
      </section>
    </div>
  );
};

export default Methods;
