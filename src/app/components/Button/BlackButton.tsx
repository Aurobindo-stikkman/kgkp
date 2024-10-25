import React from "react";

interface Props {
  text: string;
  type?: "button" | "submit" | "reset" | undefined;
  customClassName?: string;
  styles?: React.CSSProperties;
  onClick?: () => void;
}

const BlackButton: React.FC<Props> = ({
  text,
  styles,
  onClick,
  type,
  customClassName,
}) => {
  return (
    <button
      onClick={onClick}
      type={type ? type : "button"}
      className={` ${customClassName} custom-black-button w-[247px] h-[51px] flex items-center justify-center gap-3.5 px-7 py-4 rounded-[50px] bg-[#4D1435]`}
      style={styles}
    >
      <span className="custom-button-icon text-[16px] font-[700] leading-[19.2px] text-white ">
        {text}
      </span>

      <svg
        className="custom-button-icon w-4 h-4"
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
  );
};

export default BlackButton;
