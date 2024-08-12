"use client";

import Image from "next/image";
import magnifyingGlass from "./magnifying-glass 1.svg";

interface Props {
  value: string;
  handleSearch: (value: string) => void;
  isMobile: boolean;
  handleModal: () => void;
}

const SearchHeader: React.FC<Props> = ({
  value,
  handleSearch,
  isMobile,
  handleModal,
}) => {
  const handleClick = () => {
    if (isMobile) {
      handleModal();
    }
  };

  return (
    <div className="bg-[#EF816C] pt-8 pb-[39px]" onClick={handleClick}>
      <section className="w-[177px] mx-auto text-[20px] font-[700] leading-[24px] text-[#4D1435] ">
        How can we help?
      </section>

      <section className="mx-auto mt-8 w-[90%] rounded-[40px] bg-white relative overflow-hidden">
        <input
          type="text"
          name="search"
          value={value}
          onChange={(e) => handleSearch(e.target.value)}
          autoComplete="off"
          placeholder="Type a search word here...  "
          className="w-full h-full py-4 pl-4 placeholder:text-[14px] placeholder:font-[400] placeholder:leading-[16.8px] placeholder:text-[#4D1435] border-none focus:outline-none focus:ring-0 "
        />
        <section className="absolute right-0 top-0 bottom-0 w-[64px] bg-[#4D1435] cursor-pointer flex justify-center items-center">
          <Image src={magnifyingGlass} alt="Search Icon" className="w-6 h-6" />
        </section>
      </section>
    </div>
  );
};

export default SearchHeader;
