import Image from "next/image";

import milestoneImg from "../assets/2x1 1.png";
import inteligenceImg from "../assets/intelligence.png";
import Title from "./Title";
import MultipleIntelligenceTitle from "./MultipleIntelligenceTitle";

const MileStone = () => {
  return (
    <section className="rounded-[40px] bg-[#F6E2D7] py-[52px] px-4 lg:rounded-[100px] lg:py-[124px] lg:px-[88px] ">
      <Title />

      <Image
        src={milestoneImg}
        alt="2x1 1"
        className="h-[164px] w-[325px] mx-auto rounded-[20px] mt-8 lg:h-[300px] lg:w-[600px] xl:w-[1265px] xl:h-[634px] "
      />

      <section className="w-[328px] h-[418px] mx-auto mt-8 text-[14px] font-[400] leading-[22.4px] text-[#460C04] lg:text-[#1A2434] md:w-[633px] md:h-auto md:mx-auto md:text-center lg:mt-[52px] lg:w-[633px] lg:h-[219px] ">
        Milestones Acceleration is a structured approach that enhances your
        child's brain development during the first six crucial years. In these
        first six years, there are 7 stages of brain development and in each
        stage, there are 6 milestones to be developed that affect the IQ of your
        child. Meaning, there are a total of 42 developmental milestones that
        are critical for boosting your child's IQ and overall cognitive
        abilities. The faster your child achieves these milestones, the higher
        will be the IQ of your child for the rest of his/her life.
        <div className="mt-6 text-[14px] font-[400] leading-[22.4px] ">
          Our structured program focuses on accelerating these developmental
          milestones by guiding parents to do specific activities with the child
          and assess their development. The early and accelerated achievement of
          milestones creates very high levels of IQ in your child.
        </div>
      </section>

      <MultipleIntelligenceTitle />

      <section className="flex flex-col lg:flex-row lg:justify-between lg:mt-[124px] lg:mx-auto max-w-[1156px]">
        <Image
          src={inteligenceImg}
          alt="Inteligence Image"
          className="w-[321px] h-[350px] pt-8 rounded-[32.63px] mx-auto md:w-[321.42px] md:h-[310px] lg:order-2 lg:pt-0 lg:mx-0 xl:mx-0 "
        />

        <section className="w-[328px] mx-auto mt-8 text-[14px] font-[400] leading-[22.4px] text-[#460C04] lg:text-[#1A2434] lg:order-1 lg:h-[220px] lg:mx-0 lg:mt-0 lg:w-[633px]">
          <section className="hidden lg:block text-[42px] font-[600] mb-3.5 leading-[50.4px] text-[#460C04] lg:text-[#1A2434] ">
            Multiple Intelligence
          </section>
          The concept of multiple intelligences is a theory proposed by Howard
          Gardner, a psychologist and a professor of education to propose that
          human brain is capable of different types of intelligences. These
          multiple intelligences include logical, linguistic, spatial,
          kinesthetic, interpersonal, intrapersonal, musical and naturalistic
          intelligences. Every child at the moment of birth has the potential
          intelligence to become a genius in onr or more of these intelligences.
          <div className="mt-6 text-[14px] font-[400] leading-[22.4px] ">
            These intelligences are functions of different lobes in the brain
            and our Ridge Analysis report mentions critical information about
            the intelligence profile of the child. This information is used in
            our age appropriate activity plan for the child and parents are also
            counselled to practise some activities at home or through other
            available resources.
          </div>
        </section>
      </section>
    </section>
  );
};

export default MileStone;
