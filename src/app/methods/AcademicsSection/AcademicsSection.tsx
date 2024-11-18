import Image from "next/image";

import card1 from "../assets/card-1.svg";
import card2 from "../assets/card-2.svg";
import card3 from "../assets/card-3.svg";
import snakeFrame from "../assets/snake-frame.svg";
import Title from "./Title";

const AcademicsSection = () => {
  return (
    <section className="my-[52px] px-3 lg:mt-24 lg:mb-[124px] lg:relative">
      <Title />

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
        <section className="bg-white w-[335px] grid gap-6 rounded-[40px] border pb-6 overflow-hidden lg:w-[356px] lg:hover:transition-transform lg:hover:duration-500 lg:hover:scale-105 lg:h-[530px]">
          <section className="w-full bg-[#c3ca31] h-[272px] flex justify-center items-center">
            <Image src={card1} alt="Card - 1" className="w-3/4 h-auto" />
          </section>
          <div className="basis-1/2 grid gap-3 ">
            <div className="text-[16px] font-[600] leading-[19.2px] text-[#1A2434] text-center lg:text-[18px] lg:leading-[21.6px] ">
              Reading Program
            </div>
            <div className="text-[12px] w-[303px] mx-auto font-[400] leading-[19.2px] text-[#1A2434] text-center lg:text-sm lg:h-[176px] lg:leading-[22.4px] ">
              We use short videos daily to teach children to recognize and
              pronounce words, phrases, and sentences, gradually enabling them
              to read and comprehend a newspaper by age six. This fosters a love
              for reading and also empowers children to access and understand
              knowledge from books, libraries and the internet.
            </div>
          </div>
        </section>

        {/* Card-2 */}
        <section className="bg-white w-[335px] grid gap-6 rounded-[40px] border pb-6 overflow-hidden lg:w-[356px] lg:hover:transition-transform lg:hover:duration-500 lg:hover:scale-105 lg:h-[530px]">
          <section className="w-full bg-[#fcd0ad] h-[272px] flex items-center justify-center">
            <Image src={card2} alt="Card - 2" className="w-3/4 h-auto" />
          </section>
          <div className="basis-1/2 grid gap-3 ">
            <div className="text-[16px] font-[600] leading-[19.2px] text-[#1A2434] text-center lg:text-[18px] lg:leading-[21.6px] ">
              Math Program
            </div>
            <div className="text-[12px] w-[303px] mx-auto font-[400] leading-[19.2px] text-[#1A2434] text-center lg:text-sm lg:h-[176px] lg:leading-[22.4px] ">
              Our math program employs short videos that use dot cards to teach
              quantity recognition, addition, subtraction, multiplication,
              division, equations and mixed equations in the first 12 months and
              further continues with advanced math and arithmetic. This nurtures
              high math ability and consequently, quick decision-making
              capabilities.
            </div>
          </div>
        </section>

        {/* Card-3 */}
        <section className="bg-white w-[335px] rounded-[40px] border pb-6 overflow-hidden lg:w-[356px] lg:hover:transition-transform lg:hover:duration-500 lg:hover:scale-105 lg:h-[530px]">
          <section className="w-full bg-[#a7dbf2] h-[272px] flex items-center justify-center">
            <Image src={card3} alt="Card - 3" className="w-3/4 h-auto" />
          </section>
          <div className="mt-6 basis-1/2 grid gap-3">
            <div className="text-[16px] font-[600] leading-[19.2px] text-[#1A2434] text-center lg:text-[18px] lg:leading-[21.6px] ">
              Encyclopaedic Knowledge Program
            </div>
            <div className="text-[12px] w-[303px] mx-auto font-[400] leading-[19.2px] text-balance text-[#1A2434] text-center lg:text-sm lg:leading-[22.4px] ">
              Our Encyclopedic Knowledge Program equips children with abundance
              of knowledge in various streams like geography, history, culture,
              tradition, philosophy, sciences, etc. This ensures clarity of
              thought and a broad, modern worldview, fostering a multifaceted
              and highly capable personality
            </div>
          </div>
        </section>
      </section>
      <Image
        src={snakeFrame}
        alt="snakeFrame"
        className="hidden lg:block lg:absolute -z-10 min-w-[-webkit-fill-available] -left-16 -right-14 -top-11"
      />
    </section>
  );
};

export default AcademicsSection;
