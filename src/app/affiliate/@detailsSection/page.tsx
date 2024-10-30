import Image from "next/image";

import card1 from "./assets/card-1.png";
import card2 from "./assets/card-2.png";
import card3 from "./assets/card-3.png";
import vector1 from "./assets/vector-1.svg";

const Page = () => {
  return (
    <div className="py-[52px] rounded-[40px] bg-[#F6E2D7] xl:py-[124px] xl:rounded-[100px] ">
      <div className="w-[360px] mx-auto lg:w-auto ">
        <div className="w-[277px] h-[58px] mx-auto text-[20px] font-[700] leading-[28.6px] text-[#4D1435] text-center xl:w-[526px] xl:h-[92px] xl:text-[38px] xl:leading-[45.99px] ">
          Your Profession is Noble.{" "}
          <span className="block">It can also Earn You Millions!</span>
        </div>

        <div className="mt-6 w-[196px] mx-auto text-[16px] font-[400] leading-[19.36px] text-[#4D1435] text-center xl:mt-6 xl:text-lg xl:leading-[45.99px] xl:w-auto ">
          Guide Parents, Empower Children – Earn Millions!
        </div>

        <section className="mt-8 flex flex-col gap-[52px] w-[300px] mx-auto lg:flex-row lg:w-auto lg:gap-0 lg:justify-around lg:px-4 xl:justify-center xl:gap-20 xl:mt-[87.5px] ">
          {/* Card - 1 */}
          <section className="lg:basis-1/3 xl:w-[269px] xl:basis-auto ">
            <section className="h-[151px] w-[137px] mx-auto relative ">
              <Image
                src={card1}
                alt="Card - 1"
                className="w-full h-full object-cover z-10 relative "
              />

              <Image
                src={vector1}
                alt="Vector 1 "
                className="absolute inset-0 "
              />
            </section>

            <div className="mt-2 w-[145px] mx-auto text-[16px] font-[600] leading-[19.2px] text-[#4D1435] text-center xl:text-2xl xl:leading-[28.8px] xl:w-auto ">
              Empower Parents & Build Trust
            </div>

            <div className="mt-2 w-[276px] mx-auto text-center text-[14px] font-[400] leading-[19.6px] text-[#4D1435] xl:text-lg xl:leading-[25.2px] xl:px-0 ">
              Guide parents towards creating a genius child and strengthen your
              professional credibility, fostering long-term loyalty with
              clients.
            </div>
          </section>

          {/* Card - 2 */}
          <section className="lg:basis-1/3 xl:w-[300px] xl:basis-auto ">
            <section className="w-[137.92px] h-[151.65px] mx-auto relative ">
              <Image
                src={card2}
                alt="Card - 2"
                className="w-full h-full object-cover z-10 relative "
              />

              <Image
                src={vector1}
                alt="Vector 2"
                className="absolute inset-0 "
              />
            </section>

            <div className="mt-2 mx-auto text-[16px] font-[600] leading-[19.2px] text-center text-[#4D1435] xl:text-2xl xl:leading-[28.8px] xl:w-auto ">
              Earn up to ₹90,000 for every Successful Referral
            </div>

            <div className="w-[300px] mx-auto mt-2 px-4 text-[14px] font-[400] leading-[19.6px] text-[#4D1435] text-center xl:text-lg xl:leading-[25.2px] xl:px-0 ">
              If you empower a parent of a new born child to enroll in the KGK
              Program and sustain this referral till the child is age 15 years,
              you can earn ₹500 per month totaling to ₹90,000 per referral.
            </div>
          </section>

          {/* Card - 3 */}
          <section className="lg:basis-1/3 xl:w-[300px] xl:basis-auto ">
            <section className="w-[137.92px] h-[151.65px] mx-auto relative ">
              <Image
                src={card3}
                alt="Card - 3"
                className="w-full h-full object-cover z-10 relative "
              />

              <Image
                src={vector1}
                alt="Vector 2"
                className="absolute inset-0 "
              />
            </section>

            <div className="mt-2 mx-auto px-16 text-[16px] font-[600] leading-[19.2px] text-center text-[#4D1435] xl:text-2xl xl:leading-[28.8px] xl:w-auto xl:px-0 xl:text-balance ">
              Create an Income of ₹10 Lakhs per Month
            </div>

            <div className="w-[300px] mx-auto mt-2 px-4 text-[14px] font-[400] leading-[19.6px] text-[#4D1435] text-center xl:text-lg xl:leading-[25.2px] xl:px-0 ">
              With 34 successful referrals every month sustained over a period
              of 5 years, you can build up your monthly income to a staggering
              ₹10,00,000 per month.
            </div>
          </section>
        </section>
      </div>
    </div>
  );
};

export default Page;
