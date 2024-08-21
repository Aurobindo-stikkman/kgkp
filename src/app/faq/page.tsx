import Image from "next/image";
import FaqContainer from "./FaqContainer";
import chalkStroke from "./_sections/Chalk Stroke.png"

const FAQ = () => {
  return (
    <div>
      <section className="pt-6 pb-8 lg:pt-14 lg:pb-[62px]">
        <div className="relative text-[20px] font-[700] leading-[24px] text-[#1A2434] w-[278px] mx-auto lg:text-[32px] lg:leading-[38.4px] lg:w-fit ">
          <span className="z-10 relative">Frequently Asked Questions</span>
          <Image
            src={chalkStroke}
            alt="Chalk Icon"
            className="absolute w-[196.52px] h-[52.25px] left-[68%] top-[15%] translate-x-[-50%] z-0 lg:w-[397.11px] lg:h-[93.76px] lg:top-0"
          />
        </div>
      </section>

      <FaqContainer />
    </div>
  );
};

export default FAQ;
