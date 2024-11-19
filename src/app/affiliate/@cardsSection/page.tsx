import Image from "next/image";

import card1 from "../assets/card-1.png";
import card2 from "../assets/card-2.png";
import card3 from "../assets/card-3.png";
import AffiliateForm from "../EnrollSection/components/AffiliateForm";
import Title from "./Title";

const Page = () => {
  return (
    <div className="my-[52px] md:mx-10 lg:w-[1002px] lg:mx-auto xl:my-[124px] ">
      <Title />

      <span className="hidden xl:block mt-6 text-lg leading-[25.2px] font-normal text-center text-[#1A2434] ">
        We are looking for professionals who are trusted by parents
      </span>

      <section className="mt-8 flex flex-col gap-4 lg:flex-row lg:justify-center lg:gap-12 xl:mt-[89px] xl:h-[426px] ">
        {/* Card - 1 */}
        <section
          className="w-[302px] mx-auto flex flex-col overflow-hidden rounded-[40px] border border-[#75C0B1] lg:mx-0 "
          style={{ background: "radial-gradient(#1AC9FF, #0090BC)" }}
        >
          <Image
            src={card1}
            alt="Card - 1"
            className="h-[256px] w-full shrink-0 object-cover "
          />

          <div className="grow bg-white pt-4 pb-5">
            <div className="w-[248px] mx-auto h-[101px] grid gap-2 text-center xl:gap-[7.5px] xl:h-[130px] ">
              <div className="text-[18px] font-[600] leading-[25.2px] text-[#1A2434] xl:text-xl xl:leading-[28px] ">
                Teachers
              </div>

              <div className="text-[14px] font-[400] leading-[16.94px] text-[#1A2434] xl:text-base xl:leading-[19.36px] ">
                You’re at the heart of education and can guide parents towards
                resources that boost their child’s intelligence and your income.
              </div>
            </div>
          </div>
        </section>

        {/* Card - 2 */}
        <section
          className="w-[302px] mx-auto flex flex-col overflow-hidden rounded-[40px] border border-[#75C0B1] lg:mx-0 "
          style={{ background: "radial-gradient(#1AC9FF, #0090BC)" }}
        >
          <Image
            src={card2}
            alt="Card - 2"
            className="h-[256px] w-full shrink-0 object-cover "
          />

          <div className="grow bg-white pt-4 pb-5">
            <div className="w-[248px] h-[95px] mx-auto grid gap-2 text-center xl:gap-[7.5px] xl:h-[130px] ">
              <div className="text-[18px] font-[600] leading-[25.2px] text-[#1A2434] xl:text-xl xl:leading-[28px] ">
                Paediatricians
              </div>

              <div className="text-[14px] font-[400] leading-[16.94px] text-[#1A2434] xl:text-base xl:leading-[19.36px] ">
                Parents trust your advice on their child’s health. Extend that
                trust to their brain development and grow your income
                exponentially.
              </div>
            </div>
          </div>
        </section>

        {/* Card - 3 */}
        <section
          className="w-[302px] mx-auto flex flex-col overflow-hidden rounded-[40px] border border-[#75C0B1] lg:mx-0 "
          style={{ background: "radial-gradient(#1AC9FF, #0090BC)" }}
        >
          <Image
            src={card3}
            alt="Card - 3"
            className="h-[256px] w-full shrink-0 object-cover "
          />

          <div className="grow bg-white pt-4 pb-5 ">
            <div className="w-[248px] h-[95px] mx-auto grid gap-2 text-center xl:gap-[7.5px] xl:h-[130px] ">
              <div className="text-[18px] font-[600] leading-[25.2px] text-[#1A2434] xl:text-xl xl:leading-[28px] ">
                Gynaecologists
              </div>

              <div className="text-[14px] font-[400] leading-[16.94px] text-[#1A2434] xl:text-base xl:leading-[19.36px] ">
                You support mothers from the start. Help them take the next step
                in creating a genius child and grow your income for the next 15
                years.
              </div>
            </div>
          </div>
        </section>
      </section>

      <AffiliateForm>
        <button className="mt-6 mx-auto custom-black-button w-[247px] h-[51px] flex items-center justify-center gap-3.5 px-7 py-4 rounded-[50px] bg-[#4D1435] xl:mt-20 xl:w-[390px] xl:h-[77px] ">
          <span className="custom-button-icon text-[16px] font-[700] leading-[19.2px] text-white xl:text-2xl xl:leading-[29.05px] ">
            Become An Affiliate
          </span>
          <svg
            className="custom-button-icon w-4 h-4 xl:w-6 xl:h-6"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="icon-arrow-right">
              <path
                id="Shape"
                className="fill-current text-white"
                d="M7.5299 3.36177C7.79025 3.10142 8.21236 3.10142 8.47271 3.36177L13.1394 8.02843C13.3997 8.28878 13.3997 8.71089 13.1394 8.97124L8.47271 13.6379C8.21236 13.8983 7.79025 13.8983 7.5299 13.6379C7.26955 13.3776 7.26955 12.9554 7.5299 12.6951L11.0585 9.1665H3.33464C2.96645 9.1665 2.66797 8.86803 2.66797 8.49984C2.66797 8.13165 2.96645 7.83317 3.33464 7.83317H11.0585L7.5299 4.30457C7.26955 4.04423 7.26955 3.62212 7.5299 3.36177Z"
              />
            </g>
          </svg>
        </button>
      </AffiliateForm>
    </div>
  );
};

export default Page;
