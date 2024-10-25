import Image from "next/image";

import card1 from "./assets/card-1.png";
import card2 from "./assets/card-2.png";
import card3 from "./assets/card-3.png";
import vector1 from "./assets/vector-1.svg";

const page = () => {
  return (
    <div className="py-[52px] rounded-[40px] bg-[#F6E2D7] ">
      <div className="w-[360px] mx-auto ">
        <div className="w-[277px] h-[58px] mx-auto text-[20px] font-[700] leading-[28.6px] text-[#4D1435] text-center ">
          Your Profession is Noble.{" "}
          <span className="block">It can also Earn You Millions!</span>
        </div>

        <div className="mt-6 w-[196px] mx-auto text-[16px] font-[400] leading-[19.36px] text-[#4D1435] text-center ">
          Guide Parents, Empower Children – Earn Millions!
        </div>

        <section className="mt-8 flex flex-col gap-[52px] w-[300px] mx-auto ">
          {/* Card - 1 */}
          <section className=" ">
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

            <div className="mt-2 w-[145px] mx-auto text-[16px] font-[600] leading-[19.2px] text-[#4D1435] text-center ">
              Empower Parents & Build Trust
            </div>

            <div className="mt-2 w-[276px] text-center text-[14px] font-[400] leading-[19.6px] text-[#4D1435] ">
              Guide parents towards creating a genius child and strengthen your
              professional credibility, fostering long-term loyalty with
              clients.
            </div>
          </section>

          {/* Card - 2 */}
          <section className=" ">
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

            <div className="mt-2 mx-auto text-[16px] font-[600] leading-[19.2px] text-center text-[#4D1435] ">
              Earn up to ₹90,000 for every Successful Referral
            </div>

            <div className="w-[300px] mx-auto mt-2 px-4 text-[14px] font-[400] leading-[19.6px] text-[#4D1435] text-center ">
              If you empower a parent of a new born child to enroll in the KGK
              Program and sustain this referral till the child is age 15 years,
              you can earn ₹500 per month totaling to ₹90,000 per referral.
            </div>
          </section>

          {/* Card - 3 */}
          <section className=" ">
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

            <div className="mt-2 mx-auto px-16 text-[16px] font-[600] leading-[19.2px] text-center text-[#4D1435] ">
              Create an Income of ₹10 Lakhs per Month
            </div>

            <div className="w-[300px] mx-auto mt-2 px-4 text-[14px] font-[400] leading-[19.6px] text-[#4D1435] text-center ">
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

export default page;
