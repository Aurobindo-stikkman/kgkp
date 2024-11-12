"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

import useInView from "@/app/components/useInView";

import bulb from "./assets/science/bulb.png";
import equation from "./assets/science/equation.png";
import science from "./assets/science/science.png";
import rocketIcon from "./assets/science/rocket.svg";
import vector9 from "./assets/science/Vector 9.png";
import vector10 from "./assets/science/Vector 10.png";
import vectorSVG10 from "./assets/science/Vector 10.svg";
import vector11 from "./assets/science/Vector 11.svg";
import vector12 from "./assets/science/Vector 12.png";
import vector13 from "./assets/science/Vector 13.png";

import "./science.css";

const Science = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef);

  useEffect(() => {
    if (isInView) {
      const clipRect = document.getElementById("clipRect");
      if (clipRect) {
        clipRect.classList.add("revealed");
      }
    }
  }, [isInView]);

  return (
    <div className="relative bg-[#F6E2D7] rounded-[40px] py-[52px] lg:py-[124px] lg:rounded-[100px]">
      <section className="text-[20px] font-[700] relative leading-[28.6px] text-[#460C04] w-[178px] h-[29px] mx-auto lg:text-[32px] lg:leading-[38.4px] lg:w-[285px]">
        <span className="z-10 relative w-[178px] h-[29px] block lg:w-[285px] lg:h-[35px] ">
          The KGKP Method
        </span>
        <svg
          className="absolute w-[166.08px] h-[38.94px] top-2 -right-3 z-0 lg:top-[21px] lg:-right-1 lg:w-[289.4px] lg:h-[35px]"
          viewBox="0 0 306 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M299.039 15.7003C298.293 16.249 289.853 14.9417 288.511 14.0622C286.969 13.0544 282.948 12.2373 282.017 12.7376C281.327 13.1108 281.003 12.9708 281.088 12.345C281.217 11.3577 278.613 10.7941 277.587 11.5929C277.281 11.8334 276.058 11.5578 274.869 10.9736C273.278 10.1945 272.374 10.271 271.405 11.2833C270.481 12.2435 269.958 12.3111 269.64 11.5081C268.964 9.78622 265.497 8.67239 263.901 9.66141C263.084 10.1732 262.545 10.152 262.619 9.62322C262.79 8.36282 248.347 5.47688 236.26 4.36011C234.981 4.24239 231.756 3.78833 229.087 3.35587C221.238 2.07978 218.937 2.19505 219.244 3.84656C219.472 5.08955 219.279 5.03208 217.813 3.39824C216.882 2.36017 215.943 1.64905 215.727 1.81209C215.511 1.98396 212.917 1.77423 209.964 1.3618C207.012 0.949362 203.767 0.972282 202.758 1.41775C201.543 1.95577 200.802 1.87691 200.561 1.19946C200.312 0.495291 199.863 0.387764 199.137 0.839711C198.554 1.20653 197.362 1.1527 196.478 0.725768C195.429 0.215463 194.815 0.387067 194.708 1.20685C194.547 2.43211 192.885 2.4294 189.341 1.19886C187.824 0.668996 187.625 0.885459 187.865 2.75647C188.135 4.8492 188.099 4.85723 186.868 3.05192C185.961 1.7138 185.323 1.38091 184.648 1.90476C183.982 2.42882 183.595 2.33155 183.33 1.56512C183.064 0.8252 182.164 0.742698 180.418 1.30392C178.904 1.79087 177.05 1.69535 175.791 1.07414C174.226 0.304472 173.641 0.370642 173.512 1.34024C173.396 2.19517 172.621 2.44266 171.259 2.05782C169.3 1.509 168.027 1.48869 159.328 1.83759C157.373 1.91657 154.906 1.90428 153.839 1.8091C151.051 1.55957 149.094 2.05408 148.966 3.03251C148.902 3.49964 147.949 3.41592 146.83 2.85098C144.61 1.7215 139.544 1.36673 129.926 1.65924C118.327 2.02128 114.961 2.32434 110.87 3.37116C108.637 3.94776 106.561 4.28921 106.255 4.1319C105.949 3.97459 105.651 4.24185 105.587 4.71781C105.523 5.19378 104.802 5.42481 103.984 5.22041C103.167 5.01602 100.194 5.47841 97.3741 6.23606C94.5541 6.9937 87.9615 8.01858 82.7165 8.49965C68.1594 9.84605 54.1558 11.7356 53.5919 12.4212C53.3101 12.7595 52.1095 13.068 50.9151 13.1025C49.066 13.1574 48.6841 13.6173 48.3419 16.2087C48.118 17.8746 47.5848 19.1532 47.1629 19.0463C46.7144 18.9388 46.7186 17.984 47.1617 16.7829C47.9057 14.793 47.8455 14.7209 45.635 15.1123C44.3655 15.3396 42.7523 15.9039 42.0431 16.3739C41.3339 16.8439 39.3148 17.3724 37.5689 17.5534C35.823 17.7345 32.7743 18.4427 30.7957 19.1312C28.8172 19.8197 26.2085 20.2285 24.984 20.0325C23.7684 19.8366 22.7307 19.9809 22.6782 20.3421C22.6257 20.7034 22.1054 20.6473 21.514 20.2182C20.8271 19.7162 20.3707 19.9533 20.2525 20.8701C20.1459 21.6634 19.6403 22.1204 19.1326 21.8966C18.0998 21.4397 15.6442 21.7283 13.7514 22.5337C13.0639 22.8274 11.9592 23.1911 11.2926 23.3438C10.6261 23.4965 8.07887 24.6936 5.63489 26.0169C1.50797 28.2476 0.0961872 30.0542 1.40819 31.4459C2.41819 32.5123 7.32712 30.494 8.28081 28.6149C8.79934 27.5924 9.39235 26.7926 9.60341 26.8416C9.80564 26.8904 9.70392 27.4716 9.36158 28.1357C8.53767 29.7525 9.55166 29.873 12.5094 28.5084C13.8587 27.8851 15.217 27.6421 15.5278 27.9675C15.8298 28.2927 16.1329 28.1847 16.1962 27.7353C16.2596 27.2858 19.0452 26.8722 22.3971 26.8252C25.749 26.7782 28.8939 26.5054 29.3953 26.234C29.8968 25.9537 31.4798 25.9369 32.9327 26.1912C34.3769 26.4454 36.0223 26.4035 36.5863 26.0981C37.1503 25.7927 38.3129 25.9873 39.1754 26.5464C40.1774 27.1883 41.0352 27.1814 41.5452 26.53C42.1919 25.7049 42.6056 25.7851 43.7192 26.9599C44.8932 28.1981 45.362 28.1911 46.8857 26.8999C48.4183 25.6088 48.6483 25.6052 48.4777 26.8744C48.3181 28.0555 48.7181 28.3476 50.4434 28.2899C51.6378 28.2553 52.8196 27.9995 53.0644 27.731C54.17 26.5539 56.3213 26.8154 56.1504 28.1023C56.0444 28.8691 56.3713 29.2656 56.9158 29.0393C57.4336 28.8213 59.0067 28.8485 60.4068 29.0928C61.807 29.337 63.5165 29.1993 64.1894 28.7727C65.1581 28.1672 65.4742 28.2628 65.6644 29.222C65.8067 29.9591 66.0136 29.8047 66.1861 28.8361C66.3897 27.6649 66.8631 27.4547 67.9192 28.0536C68.8355 28.5785 69.2352 28.4993 69.0029 27.8308C68.7619 27.1622 69.1876 27.1012 70.1738 27.6632C71.2735 28.2895 71.9144 28.1009 72.3994 26.998C72.7727 26.1401 73.3911 25.7741 73.771 26.1718C74.1421 26.5693 75.0326 26.2891 75.7305 25.5447C76.9172 24.2988 76.9965 24.3094 76.8314 25.7291C76.7324 26.5756 76.989 27.3418 77.4109 27.4487C77.824 27.5555 78.1651 27.3334 78.1647 26.9621C78.1644 26.5907 78.3036 25.533 78.4837 24.6176C78.7956 22.9626 78.8131 22.9718 79.688 24.9193C80.2435 26.1432 80.6429 26.4618 80.7565 25.7483C80.8701 25.0347 81.4383 24.9328 82.2746 25.4736C83.0502 25.9688 84.0955 25.8778 84.7554 25.2475C85.3791 24.6518 86.3867 24.277 86.9844 24.4321C87.6085 24.5879 87.9086 24.2234 87.676 23.5727C87.3938 22.7705 87.8623 22.7724 89.2939 23.5744C90.9701 24.5057 91.2722 24.4419 91.0358 23.1811C90.8237 22.018 91.066 21.8644 92.0943 22.5157C92.861 23.0107 93.9154 22.911 94.5662 22.2894C95.1899 21.6936 96.347 21.3576 97.1294 21.5524C97.9118 21.7471 98.6067 21.5155 98.6709 21.0307C98.7348 20.5547 99.4914 20.3333 100.353 20.5476C101.241 20.7713 101.76 20.4914 101.552 19.912C101.311 19.2433 101.85 19.2557 103.072 19.9379C104.181 20.5557 105.011 20.6189 105.076 20.0988C105.14 19.614 106.035 19.5284 107.06 19.9232C108.086 20.3092 108.971 20.2764 109.033 19.8446C109.088 19.4126 109.56 19.2466 110.067 19.4793C111.004 19.9074 113.906 19.4257 118.152 18.1438C119.426 17.7574 120.942 17.5622 121.522 17.7081C122.102 17.8541 123.264 16.9258 124.107 15.6454C125.023 14.2518 126.234 13.475 127.131 13.6989C127.957 13.9035 128.678 13.7167 128.732 13.2847C128.891 12.1213 133.836 11.598 134.493 12.674C135.396 14.1711 139.037 13.8213 139.667 12.1824C140.147 10.938 140.953 10.8503 144.143 11.7103C146.278 12.2897 148.986 12.5727 150.149 12.3518C152.404 11.926 163.503 12.5693 165.971 13.2801C166.788 13.511 167.931 13.3957 168.532 13.0293C169.124 12.6538 170.027 12.6303 170.541 12.9692C171.046 13.3079 172.636 13.3355 174.067 13.0234C175.498 12.7114 178.024 12.7958 179.686 13.214C181.936 13.7695 183.064 13.5478 184.135 12.3346C185.543 10.7223 185.578 10.732 186.435 12.679C187.192 14.385 187.55 14.5612 189.05 13.9325C190.014 13.539 191.11 13.5376 191.481 13.9351C191.861 14.3328 192.728 14.3173 193.41 13.8909C194.091 13.4644 195.099 13.4521 195.656 13.8539C196.282 14.3103 196.946 13.91 197.386 12.8061C198.098 11.0541 198.125 11.0547 199.009 12.9935C199.792 14.7178 199.932 14.7741 200.103 13.4872C200.294 12.0681 201.491 11.9187 204.297 12.9555C205.016 13.2195 205.657 13.022 205.73 12.5109C205.795 11.9996 206.684 11.7901 207.704 12.0433C208.724 12.2966 209.85 12.1279 210.206 11.6674C210.679 11.0594 210.969 11.1456 211.26 11.9568C211.485 12.572 212.245 12.9784 212.955 12.8444C214.518 12.5619 214.234 10.2567 212.315 7.57801C211.57 6.54419 211.304 5.77776 211.718 5.88448C212.799 6.1568 215.478 10.0199 215.329 11.104C215.254 11.6593 216.358 12.1266 218.113 12.2906C219.71 12.4421 222.466 12.9561 224.232 13.4298C225.998 13.9123 227.501 13.9202 227.565 13.4531C227.628 12.986 229.897 13.1529 232.613 13.8251C235.321 14.4972 237.893 14.9009 238.313 14.7249C238.733 14.5488 240.756 14.6129 242.81 14.8721C249.289 15.6924 250.977 15.7223 251.878 15.0179C252.409 14.6057 253.386 14.7961 254.377 15.5172C255.273 16.1655 256.246 16.5061 256.553 16.2655C256.858 16.0338 258.731 16.1032 260.731 16.4319C269.618 17.8821 278.096 18.6864 278.993 18.1587C279.53 17.8439 280.633 17.9311 281.437 18.3562C284.565 20.0016 299.664 23.9016 302.364 23.7601C304.763 23.6294 305.268 23.2254 305.598 21.1376C305.939 19.0235 305.735 18.6652 304.215 18.6215C303.225 18.5989 301.987 17.8279 301.417 16.8864C300.233 14.9231 300.101 14.867 299.004 15.6818L299.039 15.7003ZM207.217 7.43471C207.153 7.91068 206.739 8.21949 206.3 8.10333C205.86 7.996 205.755 7.56038 206.083 7.15234C206.402 6.73527 206.816 6.43529 207 6.48373C207.185 6.53216 207.281 6.95875 207.217 7.43471ZM208.876 10.3019C207.984 10.9976 207.523 9.50175 208.316 8.48547C208.917 7.71237 209.093 7.7606 209.23 8.70976C209.322 9.35727 209.164 10.0786 208.876 10.3019ZM173.746 5.4391C173.682 5.91506 173.268 6.22387 172.828 6.10771C172.389 6.00038 172.284 5.56476 172.612 5.15672C172.931 4.73965 173.344 4.43968 173.529 4.48811C173.713 4.53654 173.81 4.96313 173.746 5.4391ZM124.098 12.9398C124.034 13.4158 123.62 13.7246 123.181 13.6084C122.741 13.5011 122.636 13.0655 122.964 12.6574C123.283 12.2404 123.697 11.9404 123.881 11.9888C124.066 12.0373 124.162 12.4639 124.098 12.9398ZM122.873 16.2361C122.809 16.712 122.413 17.0213 122 16.9234C121.587 16.8167 121.297 16.3414 121.361 15.8655C121.425 15.3895 121.821 15.0803 122.234 15.1782C122.647 15.2849 122.937 15.7601 122.873 16.2361ZM114.117 17.1672C113.99 18.0838 112.486 18.1112 112.162 17.202C111.962 16.6493 112.341 16.3308 112.992 16.496C113.642 16.6612 114.148 16.9646 114.125 17.1762L114.117 17.1672ZM57.1818 20.5136C57.032 21.6507 56.0297 22.1759 55.3649 21.4799C54.6571 20.7298 55.5372 19.3619 56.5658 19.6153C56.9614 19.7128 57.2351 20.1169 57.1816 20.5224L57.1818 20.5136ZM70.3362 24.82C70.0172 25.2371 70.3421 25.7219 71.063 25.8976C72.9532 26.3653 72.0526 26.6983 69.1192 26.6134C66.2036 26.5289 65.9033 25.355 68.6087 24.5859C70.9758 23.9151 71.0375 23.9254 70.345 24.8202L70.3362 24.82ZM48.8707 24.0012C48.8067 24.4771 48.604 24.835 48.4195 24.7866C48.2349 24.7381 47.9275 24.2625 47.7278 23.7186C47.5281 23.1747 47.7396 22.8171 48.179 22.9332C48.6186 23.0405 48.9346 23.5252 48.8707 24.0012Z"
            fill="#FFB31F"
          />
        </svg>
      </section>

      <section
        ref={sectionRef}
        className="relative flex flex-col gap-6 mt-6 px-4 items-center lg:flex-row lg:align-start lg:mt-[80px] lg:px-[40px] lg:justify-center xl:px-[80px] xl:justify-between max-w-[1440px] xl:mx-auto "
      >
        {/* Card 1 */}
        <section className="h-[420px] w-[328px] rounded-[40px] bg-white flex flex-col lg:h-auto lg:w-[356px] xl:relative ">
          <Image
            src={bulb}
            alt="Bulb idea"
            className="h-[276px] rounded-tr-[40px] rounded-tl-[40px] w-full z-10 object-cover"
          />
          <div className="h-full w-full z-10 rounded-bl-[40px] rounded-br-[40px] bg-white">
            <div className="w-[296px] h-auto mx-auto flex flex-grow py-6 text-[#4D1435] text-balance z-10 text-center text-[14px] font-[500] leading-[25.2px] lg:text-[16px] lg:leading-[28.8px] lg:relative lg:px-6 lg:max-w-[307px] lg:h-max lg:mx-auto ">
              <span className="opacity-[70%]">
                Integration of cutting edge technologies such as milestone
                acceleration, brain development profile and multiple
                intelligences to create a truly genius child
              </span>
              <div
                style={{
                  background:
                    "linear-gradient(to right, white, #d8ced4, #4D1435)",
                }}
                className={`hidden absolute top-[-35px] left-[-60px] h-[70px] w-[70px] rounded-full z-10 xl:flex justify-center items-center ${
                  isInView ? "scaleUp" : ""
                } `}
              >
                <div className="h-[87%] w-[87%] bg-white text-[#4D1435] rounded-full flex justify-center items-center ">
                  <div className="w-[17px] h-[50px] font-[400] text-[42px] leading-[50.4px] poetsen-one-regular ">
                    1
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Image
            src={vector9}
            alt="Vector 9"
            className="hidden xl:block absolute -bottom-8 -right-1/2 z-0"
          />
          <Image
            src={vectorSVG10}
            alt="Vector 9"
            className="hidden xl:block absolute -bottom-4 -right-1/2 z-0"
          />
          <Image
            src={rocketIcon}
            alt="Rocket Image"
            className="hidden xl:block absolute left-[-100px] top-[-236px] w-[339px] h-[333px] z-0"
          />
        </section>

        {/* Card 2 */}
        <section className="h-[448px] w-[328px] rounded-[40px] bg-white flex z-10 flex-col lg:h-auto lg:w-[356px] lg:relative">
          <Image
            src={equation}
            alt="Equation"
            className="h-[276px] rounded-tr-[40px] rounded-tl-[40px] z-10 w-full object-cover"
          />
          <div className="w-[296px] h-auto mx-auto flex flex-grow px-4 py-6 text-[#4D1435] text-center text-[14px] font-[500] leading-[25.2px] lg:text-[16px] lg:px-0 lg:leading-[28.8px] lg:max-w-[309px] lg:h-auto lg:mx-auto lg:relative">
            <span className="opacity-[70%]">
              Nurture a complete genius with high IQ, EQ & SQ through an
              intellectually stimulating environment, emotional awareness,
              spiritual values & positive parenting
            </span>
            <div
              style={{
                background:
                  "linear-gradient(to right, white, #d8ced4, #4D1435)",
              }}
              className={`hidden absolute top-[-35px] left-[-60px] h-[70px] w-[70px] rounded-full z-10 xl:flex justify-center items-center ${
                isInView ? "scaleUp" : ""
              }`}
            >
              <div className="h-[87%] w-[87%] bg-white text-[#4D1435] rounded-full flex justify-center items-center ">
                <div className="w-[25px] h-[50px] font-[400] text-[42px] leading-[50.4px] poetsen-one-regular ">
                  2
                </div>
              </div>
            </div>
          </div>

          <Image
            src={vector10}
            alt="Vector 10"
            className="hidden xl:block absolute top-[-33px] -right-[38%]"
          />
          <Image
            src={vector11}
            alt="Vector 11"
            className="hidden xl:block absolute top-[-18px] -right-[38%]"
          />
        </section>

        {/* Card 3 */}
        <section className="h-[420px] w-[328px] rounded-[40px] bg-white flex z-10 flex-col lg:h-auto lg:w-[356px] ">
          <Image
            src={science}
            alt="Science"
            className="h-[276px] rounded-tr-[40px] rounded-tl-[40px] w-full object-cover"
          />
          <div className="w-[296px] h-auto mx-auto flex flex-grow py-6 text-[#4D1435] text-center text-[14px] font-[500] leading-[25.2px] lg:text-[16px] lg:leading-[28.8px] lg:max-w-[309px] lg:h-max lg:mx-auto lg:relative">
            <span className="opacity-[70%]">
              Personalized activity plan based on your child’s talent profile,
              brain development & learning style found through the scientific
              method of ridge analysis
            </span>
            <div
              style={{
                background:
                  "linear-gradient(to right, white, #d8ced4, #4D1435)",
              }}
              className={`hidden absolute top-[-35px] left-[-60px] h-[70px] w-[70px] rounded-full z-10 xl:flex justify-center items-center ${
                isInView ? "scaleUp" : ""
              }`}
            >
              <div className="h-[87%] w-[87%] bg-white text-[#4D1435] rounded-full flex justify-center items-center ">
                <div className="w-6 h-[50px] font-[400] text-[42px] leading-[50.4px] poetsen-one-regular ">
                  3
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section className="mt-[52px] w-[275px] text-[16.14px] font-[700] leading-[19.37px] text-center mx-auto text-[#460C04] lg:hidden">
        Why Invest in Your Baby’s Brain Development Right Away?
      </section>

      <section className="mx-4 flex flex-col md:flex-row md:items-center md:justify-center md:gap-4 xl:max-w-[1440px] xl:mx-auto xl:gap-[151px]">
        {/* Video section */}
        <section className="mt-6 relative rounded-[40px] w-[328px] mx-auto h-[209px] bg-[#1A24348C] md:basis-1/2 md:h-[250px] lg:m-0 lg:basis-[546px] lg:h-[365px] lg:top-[100px] ">
          <div className="relative h-full w-full z-10">
            <iframe
              className="w-full h-full rounded-[24.56px]"
              src="https://www.youtube.com/embed/4jpD-OWHjz4?si=62HUXvS69d6aY944"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <Image
            src={vector12}
            alt="Vector 12"
            className="hidden xl:block w-[440px] h-[492px] absolute z-0 top-[-63px] left-[126px]"
          />
          <Image
            src={vector13}
            alt="Vector 13"
            className="hidden xl:block w-[410px] h-[535px] absolute z-0 top-[-94px] left-10"
          />
        </section>

        {/* Button */}
        <button className="custom-black-button w-[180px] h-[51px] block mt-6 rounded-[50px] mx-auto bg-[#4D1435] md:hidden">
          <Link
            className="w-full h-full flex items-center justify-center gap-[14px] px-7 py-4"
            href="/methods"
          >
            <div className="custom-button-icon text-[15px] font-[700] leading-[19.2px] text-white group-hover:text-[#4D1435]">
              Learn More
            </div>
            <svg
              className="w-4 h-4 lg:w-6 lg:h-6 custom-button-icon"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="icon-arrow-right">
                <path
                  id="Shape"
                  d="M8.02843 3.36177C8.28878 3.10142 8.71089 3.10142 8.97124 3.36177L13.6379 8.02843C13.8983 8.28878 13.8983 8.71089 13.6379 8.97124L8.97124 13.6379C8.71089 13.8983 8.28878 13.8983 8.02843 13.6379C7.76808 13.3776 7.76808 12.9554 8.02843 12.6951L11.557 9.1665H3.83317C3.46498 9.1665 3.1665 8.86803 3.1665 8.49984C3.1665 8.13165 3.46498 7.83317 3.83317 7.83317H11.557L8.02843 4.30457C7.76808 4.04423 7.76808 3.62212 8.02843 3.36177Z"
                  className="fill-current text-white group-hover:text-[#4D1435]"
                />
              </g>
            </svg>
          </Link>
        </button>

        <section>
          <section className="hidden lg:block text-[#460C04] text-[28px] font-[700] leading-[33.6px] w-[459px] h-[68px] mt-[126px] ">
            Why Invest in Your Baby’s Brain Development Right Away?
          </section>
          {/* Bullet points */}
          <section className="mt-[57px] flex gap-[37px] h-[571px] md:basis-1/2">
            <section className="relative top-[-4px] grid gap-6 basis-[30px]">
              <section className="w-7 h-7 border-4 shadow-md border-white rounded-full bg-[#A696F7] relative after:absolute after:top-[177%] after:w-[1px] after:left-1/2 after:transform after:-translate-x-1/2 after:bg-[#4D143526] after:h-[35px] "></section>
              <section className="w-7 h-7 border-4 shadow-md border-white rounded-full bg-[#F2B095] relative after:absolute after:top-[177%] after:w-[1px] after:left-1/2 after:transform after:-translate-x-1/2 after:bg-[#4D143526] after:h-[35px] "></section>
              <section className="w-7 h-7 border-4 shadow-md border-white rounded-full bg-[#A696F7] relative after:absolute after:top-[177%] after:w-[1px] after:left-1/2 after:transform after:-translate-x-1/2 after:bg-[#4D143526] after:h-[35px] "></section>
              <section className="w-7 h-7 border-4 shadow-md border-white rounded-full bg-[#F2B095] relative after:absolute after:top-[177%] after:w-[1px] after:left-1/2 after:transform after:-translate-x-1/2 after:bg-[#4D143526] after:h-[35px] "></section>
              <section className="w-7 h-7 border-4 shadow-md border-white rounded-full bg-[#A696F7] relative after:absolute after:top-[177%] after:w-[1px] after:left-1/2 after:transform after:-translate-x-1/2 after:bg-[#4D143526] after:h-[35px] "></section>
              <section className="w-7 h-7 border-4 shadow-md border-white rounded-full bg-[#F2B095] relative after:absolute after:top-[177%] after:w-[1px] after:left-1/2 after:transform after:-translate-x-1/2 after:bg-[#4D143526] after:h-[35px] "></section>
              <section className="w-7 h-7 border-4 shadow-md border-white rounded-full bg-[#A696F7] relative"></section>
            </section>
            <section className="grid gap-6 flex-grow xl:flex-grow-0 xl:w-[261px]">
              <section className="h-[61px] grid gap-2 ">
                <div className="text-[16px] font-[600] leading-[19.2px] text-[#460C04] ">
                  Boosts Cognitive Abilities
                </div>
                <div className="text-[14px] font-[400] leading-[16.8px] text-[#460C04]">
                  Leading to superior problem-solving and analytical skills.
                </div>
              </section>
              <section className="h-[61px] grid gap-2 ">
                <div className="text-[16px] font-[600] leading-[19.2px] text-[#460C04] ">
                  Emotional Resilience 
                </div>
                <div className="text-[14px] font-[400] leading-[16.8px] text-[#460C04]">
                  Helping your child manage emotions, foster empathy and social
                  skills.
                </div>
              </section>
              <section className="h-[61px] grid gap-2 ">
                <div className="text-[16px] font-[600] leading-[19.2px] text-[#460C04] ">
                  Spiritual Grounding
                </div>
                <div className="text-[14px] font-[400] leading-[16.8px] text-[#460C04]">
                  Leading to superior problem-solving and analytical skills.
                </div>
              </section>
              <section className="h-[61px] grid gap-2 ">
                <div className="text-[16px] font-[600] leading-[19.2px] text-[#460C04] ">
                  Enhanced Reading Skills
                </div>
                <div className="text-[14px] font-[400] leading-[16.8px] text-[#460C04]">
                  Making your child an early and proficient reader.
                </div>
              </section>
              <section className="h-[61px] grid gap-2 ">
                <div className="text-[16px] font-[600] leading-[19.2px] text-[#460C04] ">
                  Superior Mathematical Skills
                </div>
                <div className="text-[14px] font-[400] leading-[16.8px] text-[#460C04]">
                  Enabling your child to excel in numeracy.
                </div>
              </section>
              <section className="h-[61px] grid gap-2 ">
                <div className="text-[16px] font-[600] leading-[19.2px] text-[#460C04] ">
                  Encyclopaedic Knowledge
                </div>
                <div className="text-[14px] font-[400] leading-[16.8px] text-[#460C04]">
                  Making your child well-versed in various subjects.
                </div>
              </section>
              <section className="h-[61px] grid gap-2 ">
                <div className="text-[16px] font-[600] leading-[19.2px] text-[#460C04] ">
                  Holistic Development
                </div>
                <div className="text-[14px] font-[400] leading-[16.8px] text-[#460C04]">
                  Ensuring a well-rounded development and a happy, healthy,
                  child.
                </div>
              </section>
            </section>
          </section>
        </section>
      </section>

      <button className="custom-black-button hidden w-[178px] h-[51px] mt-6 rounded-[50px] mx-auto md:block bg-[#4D1435] lg:w-[385px] lg:h-[77px] lg:mt-[152px]">
        <Link
          className="custom-button-icon w-full h-full px-7 py-4 justify-center items-center rounded-[50px] flex gap-[14px] lg:px-[60px] lg:py-[24px] cursor-pointer"
          href="/methods"
        >
          <div className="text-[16px] font-[700] leading-[19.2px] text-white lg:text-[24px] lg:leading-[28.8px] custom-button-icon">
            Learn More
          </div>
          <svg
            className="w-4 h-4 lg:w-6 lg:h-6 custom-button-icon"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="icon-arrow-right">
              <path
                id="Shape"
                d="M8.02843 3.36177C8.28878 3.10142 8.71089 3.10142 8.97124 3.36177L13.6379 8.02843C13.8983 8.28878 13.8983 8.71089 13.6379 8.97124L8.97124 13.6379C8.71089 13.8983 8.28878 13.8983 8.02843 13.6379C7.76808 13.3776 7.76808 12.9554 8.02843 12.6951L11.557 9.1665H3.83317C3.46498 9.1665 3.1665 8.86803 3.1665 8.49984C3.1665 8.13165 3.46498 7.83317 3.83317 7.83317H11.557L8.02843 4.30457C7.76808 4.04423 7.76808 3.62212 8.02843 3.36177Z"
                className="fill-current text-white"
              />
            </g>
          </svg>
        </Link>
      </button>
    </div>
  );
};

export default Science;
