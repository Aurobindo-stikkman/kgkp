import Image from "next/image";
import ListingFAQ from "@/app/components/ListingFAQ";

import backButton from "./icon-arrow-right.svg";
import magnifyingGlass from "./magnifying-glass 1 (1).svg";
import clearText from "./icon-x-circle.svg";

interface Props {
  value: string;
  data: { q: string; ans: string | JSX.Element }[];
  handleSearch: (value: string) => void;
  handleModal: () => void;
  clearSearch: () => void;
}

const MobileSearch: React.FC<Props> = ({
  value,
  data,
  handleSearch,
  handleModal,
  clearSearch,
}) => {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 z-[9999] bg-white">
      <section className="flex gap04 items-center px-4 py-[14px]">
        <Image
          src={backButton}
          alt="Back button"
          className="w-4 h-4"
          onClick={() => {
            handleModal();
            clearSearch();
          }}
        />
        <section className="mx-auto w-[90%] rounded-[40px] border bg-white relative overflow-hidden">
          <input
            type="text"
            name="search"
            value={value}
            onChange={(e) => handleSearch(e.target.value)}
            autoComplete="off"
            placeholder="Type a search word here...  "
            className="w-full h-full py-4 placeholder:text-[14px] placeholder:font-[400] placeholder:leading-[16.8px] placeholder:text-[#4D1435] border-none focus:outline-none focus:ring-0 "
            style={{ paddingLeft: value ? "40px" : "12px" }}
          />
          {value && (
            <Image
              src={magnifyingGlass}
              alt="Search Icon"
              className="w-4 h-4 absolute left-4 top-[18px]"
            />
          )}
          {value && (
            <Image
              src={clearText}
              onClick={clearSearch}
              alt="Clear search text Icon"
              className="w-4 h-4 absolute right-4 top-[18px]"
            />
          )}
        </section>
      </section>

      {value.length < 3 ? (
        <section className="mt-16 w-[80%] mx-auto grid gap-3">
          <Image
            src={magnifyingGlass}
            alt="Search Icon"
            className="w-8 h-8 justify-self-center"
          />
          <div className="text-[14px] font-[400] leading-[16.8px] text-center text-[#7D7F81]">
            Make sure your search includes at least 3 letters and no number or
            special characters
          </div>
        </section>
      ) : data.length > 0 ? (
        <section className="flex-grow w-[90%] my-8 mx-auto">
          <ListingFAQ data={data} />
        </section>
      ) : (
        <section className="mt-[46px] grid gap-4 items-center mx-auto w-[240px]">
          <div className="text-[16px] font-[600] leading-[19.2px] text-center text-[#1A2434]">
            We couldn’t find anything related to “{value}”
          </div>
          <div className="text-[14px] font-[400] leading-[16.8px] text-center text-[#1A2434]">
            Please check the spelling or try another word
          </div>
        </section>
      )}
    </div>
  );
};

export default MobileSearch;
