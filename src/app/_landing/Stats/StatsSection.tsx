import Image from "next/image";
import playtime1 from "./playtime.svg";
import trophy from "./trophy.svg";
import virtualClass from "./virtual-class.svg";
import handPrint from "./hand-print.svg";

const StatsSection = () => {
  return (
    <section className="h-[120px] my-[52px] pl-4 pr-3 flex justify-between md:overflow-hidden md:gap-[133px] md:px-[85px] md:my-[107px] md:h-[310px] ">
      <section className="w-[68px] h-[106px] grid gap-4 md:w-[208px] md:h-[278px] ">
        <Image
          src={playtime1}
          alt="Child playing"
          className="w-8 h-8 items-center justify-self-center self-center md:w-[130px] md:h-[130px]"
        />
        <div className="grid gap-2">
          <div className="h-[22px] text-[18px] font-[400] leading-[21.6px] font-[PoetsenOne] text-center md:h-[58px] md:text-[48px] md:leading-[57.6px]">
            10K+
          </div>
          <div className="text-[10px] font-[400] leading-[14px] text-center tracking-[2%] text-[#1A2434] md:h-8 md:text-[18px] md:leading-[32.4px] opacity-[70%]">
            Children Benefited
          </div>
        </div>
      </section>
      <section className="w-[88px] h-[106px] grid gap-4 md:w-[245px] md:h-[278px] ">
        <Image
          src={trophy}
          alt="Trophy"
          className="w-8 h-8 justify-self-center self-center md:w-[130px] md:h-[130px]"
        />
        <div className="grid gap-2">
          <div className="h-[22px] text-[18px] font-[400] leading-[21.6px] font-[PoetsenOne] text-center md:h-[58px] md:text-[48px] md:leading-[57.6px]">
            17+
          </div>
          <div className="text-[10px] font-[400] leading-[14px] text-center tracking-[2%] text-[#1A2434] md:h-8 md:text-[18px] md:leading-[32.4px] opacity-[70%]">
            Years of KGK Program
          </div>
        </div>
      </section>
      <section className="w-[88px] h-[120px] grid gap-4 md:w-[204px] md:h-[310px] ">
        <Image
          src={virtualClass}
          alt="Virtual Class"
          className="w-8 h-8 justify-self-center self-center md:w-[130px] md:h-[130px]"
        />
        <div className="grid gap-2">
          <div className="h-[22px] text-[18px] font-[400] leading-[21.6px] font-[PoetsenOne] text-center md:h-[58px] md:text-[48px] md:leading-[57.6px]">
            200K+
          </div>
          <div className="text-[10px] font-[400] leading-[14px] text-center tracking-[2%] text-[#1A2434] md:h-8 md:text-[18px] md:leading-[32.4px] opacity-[70%]">
            Parents benefited from Parenting Workshops
          </div>
        </div>
      </section>
      <section className="w-[88px] h-[120px] grid gap-4 md:w-[214px] md:h-[310px] ">
        <Image
          src={handPrint}
          alt="Hand Print"
          className="w-8 h-8 justify-self-center self-center md:w-[130px] md:h-[130px]"
        />
        <div className="grid gap-2">
          <div className="h-[22px] text-[18px] font-[400] leading-[21.6px] font-[PoetsenOne] text-center md:h-[58px] md:text-[48px] md:leading-[57.6px]">
            30K+
          </div>
          <div className="text-[10px] font-[400] leading-[14px] text-center tracking-[2%] text-[#1A2434] md:h-8 md:text-[18px] md:leading-[32.4px] opacity-[70%]">
            Ridge Analysis Counsellings
          </div>
        </div>
      </section>
    </section>
  );
};

export default StatsSection;
