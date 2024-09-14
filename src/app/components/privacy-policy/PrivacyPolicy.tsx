import React from "react";

interface Props {
  togglePrivacy: () => void;
}

const PrivacyPolicy: React.FC<Props> = ({ togglePrivacy }) => {
  return (
    <div className="px-6 py-11 text-[14px] font-[400] leading-[19.6px] text-[#1A2434] lg:py-[95px] lg:px-40 lg:text-[18px] lg:leading-[21.6px] ">
      <section className="relative flex gap-1 items-center lg:justify-center">
        <svg
          onClick={togglePrivacy}
          className="w-4 h-4 lg:hidden"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Arrow back" clip-path="url(#clip0_1776_6962)">
            <path
              id="Vector"
              d="M13.3346 7.33317H5.2213L8.94797 3.6065L8.0013 2.6665L2.66797 7.99984L8.0013 13.3332L8.9413 12.3932L5.2213 8.6665H13.3346V7.33317Z"
              fill="#1A2434"
            />
          </g>
          <defs>
            <clipPath id="clip0_1776_6962">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>

        <div className="text-[20px] leading-[24px] font-[700] text-[#1A2434] lg:text-[42px] lg:leading-[50.4px] ">
          Privacy Policy
        </div>

        <svg
          onClick={togglePrivacy}
          className="hidden lg:block absolute top-0 right-0 w-10 h-10 cursor-pointer"
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
      </section>
    </div>
  );
};

export default PrivacyPolicy;
