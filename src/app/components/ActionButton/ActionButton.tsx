"use client";
import { useState, useEffect } from "react";

const ActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBiggerScreeen, setIsBiggerScreeen] = useState(false);

  useEffect(() => {
    function resize() {
      setIsBiggerScreeen(window.innerWidth > 1024);
    }
    resize();

    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);

  const handleClick = () => {
    if (isBiggerScreeen) {
      setIsOpen(!isOpen);
    } else {
      window.location.href = "tel:+9134839493784";
    }
  };

  return (
    <div
      className={`fixed right-0 bottom-44 h-12 border border-r-0 border-[#0000001F] bg-white rounded-tl-[40px] rounded-bl-[40px] cursor-pointer z-[9999] lg:h-[60px] lg:bottom-56 transition-all duration-300 ease-in-out ${
        isOpen ? "w-[211px] lg:w-[267px] " : "w-14 lg:w-[132px]"
      }`}
      onClick={handleClick}
    >
      <a
        className={`w-full h-full px-4 py-2 pr-[13px] flex lg:gap-[16px] items-center text-nowrap`}
      >
        <svg
          className="w-8 h-8 lg:basis-11 lg:shrink-0 lg:h-11"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="phone-call 2">
            <g id="Phone_Call_4_">
              <g id="Group">
                <g id="Group_2">
                  <path
                    id="Vector"
                    d="M26.8346 26.2324C26.7513 25.3901 26.2999 24.6375 25.5959 24.1679L20.8233 20.9864C19.7091 20.2439 18.2195 20.3941 17.2738 21.338L15.7485 22.8761C15.4015 22.9969 13.7966 22.3167 11.7303 20.2494C9.66302 18.1813 8.99196 16.5901 9.07983 16.2733L10.6445 14.7087C11.5893 13.7639 11.7376 12.2706 10.996 11.1592L7.81458 6.38656C7.3449 5.6825 6.59233 5.23119 5.75008 5.14788C4.90596 5.06363 4.08383 5.36025 3.48596 5.95813L1.12571 8.31838C-2.10885 11.5529 2.10352 18.6611 7.71202 24.2705C11.5249 28.0834 19.8688 34.6567 23.6641 30.8568L26.0244 28.4966C26.6222 27.8996 26.9179 27.0738 26.8346 26.2324Z"
                    fill="url(#paint0_linear_3276_37293)"
                  />
                </g>
              </g>
              <g id="Group_3">
                <g id="Group_4">
                  <path
                    id="Vector_2"
                    d="M17.9375 0C17.4193 0 17 0.419312 17 0.9375C17 1.45569 17.4193 1.875 17.9375 1.875C24.6575 1.875 30.125 7.3425 30.125 14.0625C30.125 14.5807 30.5443 15 31.0625 15C31.5807 15 32 14.5807 32 14.0625C32 6.308 25.692 0 17.9375 0ZM17.9375 3.75C17.4193 3.75 17 4.16931 17 4.6875C17 5.20569 17.4193 5.625 17.9375 5.625C22.5902 5.625 26.375 9.40981 26.375 14.0625C26.375 14.5807 26.7943 15 27.3125 15C27.8307 15 28.25 14.5807 28.25 14.0625C28.25 8.37619 23.6238 3.75 17.9375 3.75ZM17.9375 7.5C17.4193 7.5 17 7.91931 17 8.4375C17 8.95569 17.4193 9.375 17.9375 9.375C20.5221 9.375 22.625 11.4779 22.625 14.0625C22.625 14.5807 23.0443 15 23.5625 15C24.0807 15 24.5 14.5807 24.5 14.0625C24.5 10.4443 21.5557 7.5 17.9375 7.5ZM17.9375 11.25C17.4193 11.25 17 11.6693 17 12.1875C17 12.7057 17.4193 13.125 17.9375 13.125C18.4548 13.125 18.875 13.5452 18.875 14.0625C18.875 14.5807 19.2943 15 19.8125 15C20.3307 15 20.75 14.5807 20.75 14.0625C20.75 12.5116 19.4884 11.25 17.9375 11.25Z"
                    fill="url(#paint1_linear_3276_37293)"
                  />
                </g>
              </g>
            </g>
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_3276_37293"
              x1="13.4242"
              y1="31.9999"
              x2="13.4242"
              y2="5.13369"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#5558FF" />
              <stop offset="1" stop-color="#00C0FF" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_3276_37293"
              x1="24.5"
              y1="15"
              x2="24.5"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ADDCFF" />
              <stop offset="0.5028" stop-color="#EAF6FF" />
              <stop offset="1" stop-color="#EAF6FF" />
            </linearGradient>
          </defs>
        </svg>

        <span
          className={`hidden w-[135px] h-[19px] lg:flex gap-1 text-xs font-semibold leading-[14.52px] text-[#1A2434] lg:text-base lg:leading-[19.36px] lg:font-medium lg:w-full `}
        >
          Call{" "}
          <span className={`${isOpen ? "block" : "hidden"}`}>
            +91 34839493784
          </span>
        </span>
      </a>
    </div>
  );
};

export default ActionButton;
