import Image from "next/image";

import card1 from "../assets/card-1.png";
import card2 from "../assets/card-2.png";
import card3 from "../assets/card-3.png";
import BlackButton from "@/app/components/Button/BlackButton";

const page = () => {
  return (
    <div className="my-[52px] ">
      <div className="w-[296px] mx-auto text-[20px] font-[700] leading-[28.6px] text-center text-[#1A2434] ">
        Who Can Become an Affiliate?
      </div>

      <section className="mt-8 flex flex-col gap-4">
        {/* Card - 1 */}
        <section
          className="w-[302px] mx-auto flex flex-col overflow-hidden rounded-[40px] border border-[#75C0B1] "
          style={{ background: "radial-gradient(#1AC9FF, #0090BC)" }}
        >
          <Image
            src={card1}
            alt="Card - 1"
            className="h-[256px] w-full shrink-0 object-cover "
          />

          <div className="grow bg-white pt-4 pb-5">
            <div className="w-[248px] mx-auto h-[101px] grid gap-2 text-center">
              <div className="text-[18px] font-[600] leading-[25.2px] text-[#1A2434] ">
                Teachers
              </div>

              <div className="text-[14px] font-[400] leading-[16.94px] text-[#1A2434] ">
                You’re at the heart of education and can guide parents towards
                resources that boost their child’s intelligence and your income.
              </div>
            </div>
          </div>
        </section>

        {/* Card - 2 */}
        <section
          className="w-[302px] mx-auto flex flex-col overflow-hidden rounded-[40px] border border-[#75C0B1] "
          style={{ background: "radial-gradient(#1AC9FF, #0090BC)" }}
        >
          <Image
            src={card2}
            alt="Card - 2"
            className="h-[256px] w-full shrink-0 object-cover "
          />

          <div className="grow bg-white pt-4 pb-5 ">
            <div className="w-[248px] h-[95px] mx-auto grid gap-2 text-center ">
              <div className="text-[18px] font-[600] leading-[25.2px] text-[#1A2434] ">
                Paediatricians
              </div>

              <div className="text-[14px] font-[400] leading-[16.94px] text-[#1A2434] ">
                Parents trust your advice on their child’s health. Extend that
                trust to their brain development and grow your income
                exponentially.
              </div>
            </div>
          </div>
        </section>

        {/* Card - 3 */}
        <section
          className="w-[302px] mx-auto flex flex-col overflow-hidden rounded-[40px] border border-[#75C0B1] "
          style={{ background: "radial-gradient(#1AC9FF, #0090BC)" }}
        >
          <Image
            src={card3}
            alt="Card - 3"
            className="h-[256px] w-full shrink-0 object-cover "
          />
          <div className="grow bg-white pt-4 pb-5 ">
            <div className="w-[248px] h-[95px] mx-auto grid gap-2 text-center ">
              <div className="text-[18px] font-[600] leading-[25.2px] text-[#1A2434] ">
                Gynaecologists
              </div>

              <div className="text-[14px] font-[400] leading-[16.94px] text-[#1A2434] ">
                You support mothers from the start. Help them take the next step
                in creating a genius child and grow your income for the next 15
                years.
              </div>
            </div>
          </div>
        </section>
      </section>

      <BlackButton
        text="Become An Affiliate"
        styles={{ margin: "24px auto 0 auto" }}
      />
    </div>
  );
};

export default page;
