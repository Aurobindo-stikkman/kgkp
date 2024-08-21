"use client";

import Image from "next/image";
import magnifyingGlass from "./magnifying-glass 1.svg";
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
        <section className="absolute right-0 top-0 bottom-0 w-[64px] bg-[#4D1435] cursor-pointer flex justify-center items-center">
          <Image
            src={magnifyingGlass}
            alt="Search Icon"
            className="w-6 h-6 md:w-20 lg:w-[88px]"
          />
        </section>

        {value && (
          <Image
            src={clearText}
            onClick={clearSearch}
            alt="Clear Text"
            className="absolute right-20 top-1/2 translate-y-[-50%] w-6 cursor-pointer"
          />
        )}
      </section>
    </div>
  );
};

export default SearchHeader;
