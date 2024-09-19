"use client";

import Image from "next/image";
import clearText from "./icon-x-circle.svg";

interface Props {
  value: string;
  handleSearch: (value: string) => void;
  isMobile: boolean;
  handleModal: () => void;
  clearSearch: () => void;
}

const SearchHeader: React.FC<Props> = ({
  value,
  handleSearch,
  isMobile,
  handleModal,
  clearSearch,
}) => {
  const handleClick = () => {
    if (isMobile) {
      handleModal();
    }
  };

  return (
    <div
      className="bg-[#EF816C] pt-8 pb-[39px] lg:py-[52px]"
      onClick={handleClick}
    >
      <section className="w-fit mx-auto text-[20px] font-[700] leading-[24px] text-[#4D1435] md:text-[28px] md:leading-[33.6px]">
        How can we help?
      </section>

      <section className="mx-auto mt-8 w-[90%] rounded-[40px] bg-white relative overflow-hidden md:w-[703px] md:h-[64px]">
        <input
          type="text"
          name="search"
          value={value}
          onChange={(e) => handleSearch(e.target.value)}
          autoComplete="off"
          placeholder="Type a search word here...  "
          className="w-full h-full py-4 pl-4 placeholder:text-[14px] placeholder:font-[400] placeholder:leading-[16.8px] placeholder:text-[#4D1435] border-none focus:outline-none focus:ring-0 md:py-[23px] md:pl-8 md:placeholder:text-[16px] md:placeholder:leading-[19.2px]"
        />
        <section className="absolute right-0 top-0 bottom-0 w-[64px] bg-[#4D1435] cursor-pointer flex justify-center items-center rounded-[40px] lg:w-[88px]">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="magnifying-glass 1">
              <g id="_x32_-Magnifying_Glass">
                <path
                  id="Vector"
                  d="M20.1425 18.73L16.8994 15.4869C17.8822 14.2002 18.4213 12.6395 18.4215 10.9927C18.4215 9.00806 17.6486 7.14209 16.245 5.73877C14.8417 4.33545 12.976 3.5625 10.9911 3.5625C9.00647 3.5625 7.1405 4.33545 5.73718 5.73877C2.84021 8.63599 2.84021 13.3499 5.73718 16.2466C7.1405 17.6501 9.00647 18.4231 10.9911 18.4231C12.6379 18.4229 14.1986 17.8838 15.4853 16.9009L18.7284 20.144C18.9235 20.3394 19.1796 20.437 19.4354 20.437C19.6913 20.437 19.9474 20.3394 20.1425 20.144C20.5331 19.7537 20.5331 19.1204 20.1425 18.73ZM7.15125 14.8325C5.03406 12.7153 5.0343 9.27026 7.15125 7.15283C8.17688 6.12744 9.54065 5.5625 10.9911 5.5625C12.4418 5.5625 13.8053 6.12744 14.8309 7.15283C15.8566 8.17847 16.4215 9.54224 16.4215 10.9927C16.4215 12.4434 15.8566 13.8069 14.8309 14.8325C13.8053 15.8582 12.4418 16.4231 10.9911 16.4231C9.54065 16.4231 8.17688 15.8582 7.15125 14.8325Z"
                  fill="white"
                />
              </g>
            </g>
          </svg>
        </section>

        {value && (
          <svg
            className="absolute right-28 top-1/2 translate-y-[-50%] w-6 cursor-pointer"
            onClick={clearSearch}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="icon-x-circle" clip-path="url(#clip0_1730_4194)">
              <g id="Shape">
                <path
                  d="M10.4708 5.52843C10.7311 5.78878 10.7311 6.21089 10.4708 6.47124L8.94216 7.99984L10.4708 9.52843C10.7311 9.78878 10.7311 10.2109 10.4708 10.4712C10.2104 10.7316 9.78829 10.7316 9.52794 10.4712L7.99935 8.94265L6.47075 10.4712C6.2104 10.7316 5.78829 10.7316 5.52794 10.4712C5.26759 10.2109 5.26759 9.78878 5.52794 9.52843L7.05654 7.99984L5.52794 6.47124C5.26759 6.21089 5.26759 5.78878 5.52794 5.52843C5.78829 5.26808 6.2104 5.26808 6.47075 5.52843L7.99935 7.05703L9.52794 5.52843C9.78829 5.26808 10.2104 5.26808 10.4708 5.52843Z"
                  fill="#1A2434"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.666016 7.99984C0.666016 3.94975 3.94926 0.666504 7.99935 0.666504C12.0494 0.666504 15.3327 3.94975 15.3327 7.99984C15.3327 12.0499 12.0494 15.3332 7.99935 15.3332C3.94926 15.3332 0.666016 12.0499 0.666016 7.99984ZM7.99935 1.99984C4.68564 1.99984 1.99935 4.68613 1.99935 7.99984C1.99935 11.3135 4.68564 13.9998 7.99935 13.9998C11.3131 13.9998 13.9993 11.3135 13.9993 7.99984C13.9993 4.68613 11.3131 1.99984 7.99935 1.99984Z"
                  fill="#1A2434"
                />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_1730_4194">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
        )}
      </section>
    </div>
  );
};

export default SearchHeader;
