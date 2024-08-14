import Image from "next/image";

import methodImage from "./assets/pic web.svg";
import rightIcon from "./assets/icon-arrow-right-white.svg";
import strengthIcon from "./assets/motivation 1.svg";
import brainIcon from "./assets/brain 1.svg";
import growthIcon from "./assets/idea 1.svg";

import eqImage from "./assets/EQ.png";
import iqImage from "./assets/IQ.png";
import sqImage from "./assets/SQ.png";
import card1 from "./assets/card-1.png";
import card2 from "./assets/card-2.png";
import card3 from "./assets/card3.png";
import milestoneImg from "./assets/2x1 1.png";
import inteligenceImg from "./assets/Screenshot 2024-06-28 at 11.37.34 AM 3.png";
import analysisImage from "./assets/DMIT 1.png";
import Courses from "./Courses";

const Methods = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Method section */}
      <section className="bg-[#F6E2D7] pt-6 pb-[52px] rounded-bl-[40px] rounded-br-[40px] lg:pt-[124px] lg:pb-[124px] lg:rounded-br-[100px] lg:rounded-bl-[100px] ">
        <section className="mx-auto text-[28px] font-[700] leading-[36.4px] text-[#4D1435] text-center w-max lg:text-[42px] lg:leading-[50.4px] ">
          The KGKP Method
        </section>

        <section className="flex flex-col sm:justify-center lg:mt-[75px] lg:flex-row ">
          <Image
            src={methodImage}
            alt="Method Landing image"
            className="h-[273px] w-[485.33px] relative left-[-60px] sm:mx-auto xl:w-[760px] xl:left-[-140px] xl:basis-[45%] xl:flex-grow xl:flex-shrink xl:h-auto xl:overflow-hidden "
          />

          <section className="xl:basis-[55%] xl:flex-grow xl:flex-shrink">
            <section className="text-center text-[#4D1435] font-semibold text-[16px] leading-[21.44px] mx-auto w-[274px] lg:w-auto lg:text-left lg:mx-4 xl:w-[504px] xl:text-[20px] xl:leading-[26.8px] ">
              From Potential to Prodigy: <br className="lg:hidden " />
              <span className="font-normal">
                A Proven Programme for Raising a{" "}
              </span>
              <br className="lg:hidden " />
              World-Ready Genius
            </section>

            <section className="mt-8 text-[14px] font-[400] leading-[22.4px] text-[#4D1435] mx-4 xl:mt-6 xl:text-[16px] xl:leading-[25.6px] xl:inline-block ">
              The Kaushalya Genius Kid Program (KGKP) uses a scientifically
              designed approach to enhance your child's IQ, EQ, and SQ,
              unlocking his/her full potential.
              <br className="xl:hidden" />
              <br className="xl:hidden" />
              The program includes a curriculum which is developed using cutting
              edge technologies like Ridge Analysis, Brain Development Profile,
              Milestones Acceleration, Theory of Multiple Intelligences and so
              on to boost your child’s intellectual abilities. The program also
              enhances emotional and spiritual quotients through guided
              parenting practices, storytelling, and regular sessions on various
              relevant topics.
              <div className="mt-6 xl:text-[16px] xl:leading-[25.6px]">
                KGKP’s holistic and time-tested method ensures comprehensive
                personality development, fostering academic excellence,
                emotional intelligence, and a balanced, peaceful lifestyle.
              </div>
            </section>
          </section>
        </section>

        <section className="mt-[52px] mx-7 text-[#4D1435] text-[28px] font-[700] leading-[36.4px] text-center xl:mt-[120.73px] xl:w-[639px] xl:text-[42px] xl:leading-[50.4px] xl:mx-auto ">
          Learn How we Actualize the Genius of your Child
        </section>

        {/* Details */}
        <section className="flex flex-col mt-8 gap-8 lg:flex-row lg:mt-[103px] lg:gap-0 lg:px-[70px] xl:px-[150px] xl:mx-auto xl:justify-center ">
          <section className="flex flex-col mx-[29px] gap-8 lg:mx-0 lg:h-[600px] xl:h-[550px] ">
            <Image
              src={iqImage}
              alt="IQ Image"
              className="w-[211px] h-[177px] mx-auto lg:h-[300px] lg:w-full lg:order-2 "
            />
            <section className="grid gap-3 lg:order-1 lg:self-start xl:w-[380px] ">
              <div className="text-[18px] font-[600] leading-[21.6px] text-[#4D1435] lg:text-[24px] lg:leading-[28.8px] ">
                IQ | Intelligence quotient
              </div>
              <div className="text-[14px] font-[400] leading-[19.6px] text-[#4D1435] ">
                Our program boosts IQ through ridge analysis and brain
                development profile to build a strong foundation in the first
                six years. This high IQ leads to academic excellence and helps
                children actualize their innate talents.
              </div>
            </section>
          </section>
          <section className="flex flex-col mx-[29px] gap-8 lg:mx-0 lg:h-[600px] xl:h-[550px] lg:justify-end ">
            <Image
              src={eqImage}
              alt="IQ Image"
              className="w-[211px] h-[177px] mx-auto lg:h-[300px] lg:w-full lg:self-end "
            />
            <section className="grid gap-3 lg:self-end xl:w-[380px] ">
              <div className="text-[18px] font-[600] leading-[21.6px] text-[#4D1435] lg:text-[24px] lg:leading-[28.8px] ">
                EQ | Emotional quotient
              </div>
              <div className="text-[14px] font-[400] leading-[19.6px] text-[#4D1435] ">
                We build your child’s EQ by sowing seeds of emotional
                intelligence from ages 0-6 and enhancing it through weekly
                expert-led sessions and practical assignments from ages 6-15,
                covering vital life skills and emotional development.
              </div>
            </section>
          </section>
          <section className="flex flex-col mx-[29px] gap-8 lg:mx-0 lg:h-[600px] xl:h-[550px] ">
            <Image
              src={sqImage}
              alt="IQ Image"
              className="w-[211px] h-[177px] mx-auto lg:h-[300px] lg:w-full lg:order-2 "
            />
            <section className="grid gap-3 lg:order-1 lg:self-start xl:w-[380px] ">
              <div className="text-[18px] font-[600] leading-[21.6px] text-[#4D1435] lg:text-[24px] lg:leading-[28.8px] ">
                SQ | Spiritual quotient
              </div>
              <div className="text-[14px] font-[400] leading-[19.6px] text-[#4D1435] ">
                Our weekly sessions of SQ enhance values and mindfulness,
                creating spiritual grounding, fostering an all round personality
                and inner peace in your child, and promoting positive parenting.
              </div>
            </section>
          </section>
        </section>
      </section>

      {/* courses secton */}
      <Courses />

      <section className="bg-[#FAEFB6] py-[52px] flex flex-col lg:flex-row lg:items-center lg:px-[52px] lg:py-[86px] lg:justify-between xl:w-[1280px] xl:rounded-[100px] xl:mx-auto">
        <section className="text-[#460C04] text-[20px] font-[700] leading-[26px] text-center mx-auto w-[315px] lg:text-left lg:m-0 lg:text-[32px] lg:font-[600] lg:leading-[38.4px] lg:basis-[60%] ">
          Ready to Begin Your Child's Journey to Becoming a Genius{" "}
          <span className="lg:hidden">Ready for the World</span>?
        </section>

        <section className="mt-11 w-[254px] bg-[#4D1435] rounded-[50px] px-7 py-4 mx-auto flex gap-[14px] justify-center lg:m-0 lg:px-[80px] lg:py-6 lg:w-[385px] lg:h-[77px] lg:rounded-[50px]">
          <section className="text-white text-[16px] font-[700] leading-[19.2px] lg:text-[18px] lg:font-[600] lg:leading-[28.8px]">
            Explore Our Courses
          </section>
          <Image
            src={rightIcon}
            alt="Arrow Icon mark"
            className="w-4 h-4 lg:w-6 lg:h-6"
          />
        </section>
      </section>

      {/* Cards section */}
      <section className="my-[52px] px-3">
        <section className="text-[20px] font-[700] leading-[26px] text-[#1A2434] text-center mx-auto md:text-[30px] md:leading-[30.8px] ">
          Academic Excellence
        </section>

        <section className="mt-8 text-[14px] font-[500] leading-[19.6px] text-center text-[#1A2434] mx-auto md:text-[18px] md:leading-[25.2px] md:w-[551px] ">
          In any school across the world, about 10% children are academically
          brilliant. The rest are average or thereabouts.
        </section>

        <section className="mt-4 text-[14px] font-[400] leading-[19.6px] text-center text-[#1A2434] mx-auto lg:text-[18px] lg:leading-[25.2px] lg:w-[922px] ">
          The only difference between these two groups is that the brilliant
          children:1) Read better, 2) Do Math better, 3) Have more encyclopedic
          knowledge. KGKP bridges this gap for every child in the first 6 years.
        </section>

        <section className="mt-6 flex gap-6 flex-col items-center lg:flex-row lg:pt-20 lg:justify-between lg:mx-auto xl:mx-20 2xl:mx-auto 2xl:w-[1280px] ">
          {/* Card-1 */}
          <section className="w-[356px] grid gap-6 rounded-[40px] border pb-6 overflow-hidden">
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
          <section className="w-[356px] grid gap-6 rounded-[40px] border pb-6 overflow-hidden">
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
          <section className="w-[356px] grid gap-6 rounded-[40px] border pb-6 overflow-hidden">
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
      <section className="rounded-[40px] bg-[#F6E2D7] py-[52px] px-4 lg:rounded-[100px] lg:py-[124px] lg:px-[88px] ">
        <section className="text-[28px] font-[700] leading-[36.4px] text-center text-[#460C04] mx-auto w-[197px] lg:text-[42px] lg:font-[600] lg:leading-[50.4px] lg:w-fit ">
          Milestones Acceleration
        </section>

        <Image
          src={milestoneImg}
          alt="2x1 1"
          className="h-[164px] mx-auto rounded-[20px] mt-8 md:h-[400px] lg:h-[500px] xl:h-[634px] "
        />

        <section className="mt-8 text-[14px] font-[400] leading-[22.4px] text-[#460C04] md:w-[633px] md:mx-auto md:text-center lg:mt-[52px] ">
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

        <section className="mt-[52px] text-[28px] font-[700] leading-[36.4px] text-[#460C04] text-center mx-auto w-[191px] sm:w-fit lg:hidden">
          Multiple Intelligence
        </section>

        <section className="flex flex-col md:flex-row md:justify-center lg:mt-[124px]">
          <Image
            src={inteligenceImg}
            alt="Inteligence Image"
            className="pt-8 rounded-[32.63px] mx-auto md:w-[321.42px] md:h-[310px] md:order-2"
          />

          <section className="mt-8 text-[14px] font-[400] leading-[22.4px] text-[#460C04] md:order-1 lg:w-[633px]">
            <section className="hidden lg:block text-[42px] font-[600] leading-[50.4px] text-[#1A2434] ">
              Multiple Intelligence
            </section>
            The concept of multiple intelligences is a theory proposed by Howard
            Gardner, a psychologist and a professor of education to propose that
            human brain is capable of different types of intelligences. These
            multiple intelligences include logical, linguistic, spatial,
            kinesthetic, interpersonal, intrapersonal, musical and naturalistic
            intelligences. Every child at the moment of birth has the potential
            intelligence to become a genius in onr or more of these
            intelligences.
            <div className="mt-6 text-[14px] font-[400] leading-[22.4px] text-[#460C04]">
              These intelligences are functions of different lobes in the brain
              and our Ridge Analysis report mentions critical information about
              the intelligence profile of the child. This information is used in
              our age appropriate activity plan for the child and parents are
              also counselled to practise some activities at home or through
              other available resources.
            </div>
          </section>
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
