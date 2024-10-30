import Image from "next/image";

import affiliateImage from "./assets/Affiliate Img.png";

const Page = () => {
  return (
    <div className="bg-[#FAEFB6] rounded-b-[40px] xl:rounded-b-[100px] ">
      <div className="flex flex-col pb-4 md:flex-row md:pt-8 md:items-center md:mx-10 xl:px-20 xl:mx-auto xl:pt-[69px] xl:pb-6 max-w-[1440px] ">
        <section className="w-[360px] mx-auto pt-8 md:mx-0 md:pt-0 md:basis-1/2 xl:basis-auto xl:w-[650px] ">
          <div className="text-[28px] font-[700] leading-[36.4px] text-[#F12F40] text-center xl:text-left xl:text-[38px] xl:leading-[56.6px] ">
            Monetise Your Parent Connect!
          </div>

          <div className="text-[28px] font-[700] leading-[36.4px] text-[#4D1435] text-center xl:text-left xl:text-[38px] xl:leading-[56.6px] ">
            Affiliate with KGKP & Create an{" "}
            <span className="xl:block">Income of ₹10 Lakhs per Month</span>
          </div>

          <button className="hidden custom-black-button mt-[38px] mx-auto w-[247px] h-[51px] rounded-[50px] bg-[#4D1435] items-center justify-center gap-3.5 px-7 py-4 md:flex xl:mt-[83px] xl:mx-0 xl:w-[390px] xl:h-[77px] xl:px-[60px] xl:py-6 ">
            <span className="text-[16px] font-[700] leading-[19.2px] text-white custom-button-icon xl:text-2xl xl:leading-[29.05px] ">
              Become An Affiliate
            </span>

            <svg
              className="w-4 h-4 custom-button-icon xl:w-6 xl:h-6"
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
        </section>

        <section className="w-[331px] mx-auto mt-[50px] md:mt-0 md:basis-1/2 xl:basis-auto xl:w-[652px] xl:h-[563px] ">
          <Image
            src={affiliateImage}
            alt="Affiliate Image"
            className="w-[331px] h-[291px] object-cover md:mx-auto xl:h-full xl:w-full "
          />

          <button className="custom-black-button mt-[38px] mx-auto w-[247px] h-[51px] rounded-[50px] bg-[#4D1435] flex items-center justify-center gap-3.5 px-7 py-4 md:hidden ">
            <span className="text-[16px] font-[700] leading-[19.2px] text-white custom-button-icon">
              Become An Affiliate
            </span>
            <svg
              className="w-4 h-4 custom-button-icon"
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

          <svg
            className="mt-6 mx-auto animate-bounce md:hidden"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="left-arrow 1">
              <g id="Group">
                <g id="Group_2">
                  <path
                    id="Vector"
                    d="M12.0051 14.3118L3.02634 5.33351C2.77971 5.08629 2.44995 4.95029 2.09834 4.95029C1.74654 4.95029 1.41698 5.08629 1.16995 5.33351L0.38361 6.12024C0.136195 6.36707 0 6.69702 0 7.04863C0 7.40024 0.136195 7.7298 0.38361 7.97682L11.0736 18.667C11.3214 18.915 11.6525 19.0508 12.0045 19.0498C12.358 19.0508 12.6888 18.9152 12.9368 18.667L23.6164 7.98678C23.8638 7.73975 24 7.41019 24 7.05839C24 6.70678 23.8638 6.37721 23.6164 6.13L22.83 5.34346C22.3182 4.83165 21.4851 4.83165 20.9735 5.34346L12.0051 14.3118Z"
                    fill="#EF816C"
                  />
                </g>
              </g>
            </g>
          </svg>
        </section>
      </div>
    </div>
  );
};

export default Page;
