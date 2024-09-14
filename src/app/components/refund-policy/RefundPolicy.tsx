import React from "react";

interface Props {
  toggleRefund: () => void;
}

const RefundPolicy: React.FC<Props> = ({ toggleRefund }) => {
  return (
    <div className="px-6 py-11 text-[14px] font-[400] leading-[19.6px] text-[#1A2434] lg:py-[95px] lg:px-40 lg:text-[18px] lg:leading-[21.6px] ">
      <section className="relative flex gap-1 items-center lg:justify-center">
        <svg
          onClick={toggleRefund}
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
          Refund and Cancellation Policy
        </div>

        <svg
          onClick={toggleRefund}
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

      <section className="mt-7 grid gap-3 lg:gap-6 lg:mt-11">
        <span className="font-[700] ">Refund Policy:</span>
        <section className="">
          Thank you for shopping at {" "}
          <span className="font-bold ">www.rueducation.in</span>
        </section>
        <ul className="list-disc list-inside grid gap-2 ">
          <li>Non-tangible irrevocable goods ("Digital products")</li>
          <li>
            We do not issue refunds for non-tangible irrevocable goods ("digital
            products") once the order is confirmed and the product is sent.
          </li>
          <li>
            We recommend contacting us for assistance if you experience any
            issues receiving or downloading our products. 
          </li>
        </ul>
        <span className="font-[700] ">Cancellation Policy:</span>
        <ul className="list-disc list-inside grid gap-2 ">
          <li>
            If customer is willing to cancel the subscription then they have to
            write us on support@rueducation.in
          </li>
          <li>The above process will take 24-48hrs for cancellation.</li>
        </ul>
        <section>
          Contact us for any issues: If you have any questions about our Returns
          and Refunds Policy, please contact us at: 
          <span className="text-[#0051FF] ">support@rueducation.in</span>
        </section>
      </section>
    </div>
  );
};

export default RefundPolicy;
