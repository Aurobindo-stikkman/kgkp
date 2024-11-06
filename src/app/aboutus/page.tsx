import Image from "next/image";

import balloonImage from "./assets/balloon.svg";
import singleStar from "./assets/Star.svg";
import rainbow from "./assets/rainbow.svg";
import stars from "./assets/stars.svg";
import aboutusImage from "./assets/d516390aa1590bb56cf66890ca812ca9.jpg";
import universityBackground from "./assets/university-background.svg";
import boyLearning from "./assets/boy-learning.svg";
import bookLibrary from "./assets/book-library.svg";
import AboutFounder from "./AboutFounder";
import offeringImage from "./assets/hand-shake.svg";
import partner from "./assets/partner.svg";
import arrowIcon from "./assets/icon-arrow-right.svg";

import VisionSection from "./VisionSection";
import TitleSection from "./TitleSection";
import CallbackContainer from "../components/RequestCallback/CallbackContainer";

const About = () => {
  return (
    <div>
      <section className="pt-6 pb-[52px] bg-[#FAEFB6] rounded-bl-[40px] rounded-br-[40px] px-4 sm:px-16 lg:px-[50px] lg:py-24 lg:rounded-br-[100px] lg:rounded-bl-[100px] xl:px-[100px] overflow-hidden">
        <TitleSection />

        <section className="mt-6 text-[16px] font-[500] leading-[22.4px] text-[#460C04] text-center w-[328px] mx-auto lg:mt-8 lg:text-[24px] lg:leading-[33.6px] lg:w-[546px]">
          Have you unlocked your child's full potential? Let's nurture their
          genius together at KGKP!
        </section>

        <section className="h-[157px] w-[327px] mx-auto mt-8 md:h-[300px] md:w-[600px] lg:mt-[52px] lg:h-[481px] xl:w-[1037.69px] xl:relative">
          <Image
            src={aboutusImage}
            alt="About Us Image"
            className="h-full w-full rounded-[22.43px] relative z-10"
          />

          <Image
            src={balloonImage}
            alt="Balloon Image"
            className="hidden xl:block w-[350px] h-auto absolute top-[-7.5rem] left-[-17rem]"
          />
          <Image
            src={singleStar}
            alt="Single Star"
            className="hidden xl:block w-16 h-[85px] absolute top-[139px] -left-12"
          />
          <Image
            src={rainbow}
            alt="Rainbow Image"
            className="hidden xl:block w-[287px] h-auto absolute bottom-[98px] right-[-125px]"
          />
          <Image
            src={stars}
            alt="Two Stars"
            className="hidden xl:block w-[198px] h-auto absolute bottom-[-30px] right-[-175px]"
          />
        </section>

        <section className="w-[328px] text-[14px] font-[400] leading-[19.6px] text-center mx-auto mt-8 text-[#460C04] md:w-[700px] lg:mt-[71px] lg:w-[922px] lg:text-[20px] lg:leading-[28px] xl:text-justify">
          At KGKP, we are dedicated to creating "A Complete Home Schooling
          Program" where we nurture brilliant geniuses. Our mission is to offer
          meticulously aligned activities that foster the complete
          braindevelopment of your child. From infancy and playgroup stages to
          the age of 15 and beyond, we focus on accelerating the overall
          intelligence, emotional, and spiritual quotients of every child.
        </section>

        <section className="flex flex-col gap-8 items-center lg:flex-row lg:mt-[38px] lg:justify-center xl:gap-[114px]">
          {/* Card - 1 */}
          <section className="w-[303px]">
            <Image
              src={universityBackground}
              alt="University Backgroun"
              className="mx-auto w-[244px] h-[244px] "
            />

            <section className="text-[18px] font-[600] leading-[24.12px] text-[#460C04] text-center mx-auto mt-[15px]">
              Comprehensive Curriculum
            </section>
            <section className="mt-2 text-[14px] font-[400] leading-[19.6px] text-center mx-auto text-[#460C04] lg:mt-6 lg:w-[303px]">
              We integrate academic excellence with the intellectual, emotional
              and spiritual growth of your child ensuring holistic development.
            </section>
          </section>

          {/* Card - 2 */}
          <section className="w-[303px]">
            <Image
              src={bookLibrary}
              alt="University Backgroun"
              className="mx-auto w-[244px] h-[244px] "
            />

            <section className="text-[18px] font-[600] leading-[24.12px] text-[#460C04] text-center mx-auto mt-[15px]">
              Expert-Designed Content
            </section>
            <section className="mt-2 text-[14px] font-[400] leading-[19.6px] text-center mx-auto text-[#460C04] lg:mt-6 lg:w-[303px]">
              All courses are created by experienced educators & child
              development specialists to guarantee the highest quality of
              learning.
            </section>
          </section>

          {/* Card - 3 */}
          <section className="w-[301px]">
            <Image
              src={boyLearning}
              alt="University Backgroun"
              className="mx-auto w-[171px] h-[171px] lg:h-[215px] lg:w-[215px]"
            />

            <section className="text-[18px] font-[600] leading-[24.12px] text-[#460C04] text-center mx-auto mt-[43px]">
              Cutting Edge Technologies
            </section>
            <section className="mt-2 text-[14px] font-[400] leading-[19.6px] text-center mx-auto text-[#460C04] lg:mt-6 lg:w-[303px]">
              Program uses Ridge Analysis, Milestones Acceleration, Reading,
              Math, & Encyclopedic Knowledge program, Multiple Intelligences.
            </section>
          </section>
        </section>
      </section>

      <VisionSection />

      <div className="pb-[52px] xl:pb-20 ">
        <CallbackContainer />
      </div>

      <AboutFounder />

      <section className="py-[52px] px-[15px] lg:py-[90px] xl:py-[124px] ">
        <section className="flex flex-wrap gap-2 justify-center lg:gap-[53px] ">
          <section className="w-[87px] h-[88px] p-4 bg-[#FAEFB63D] rounded-[24px] grid gap-1 items-center justify-center lg:h-[154px] lg:w-[243.2px] lg:px-10 lg:py-6 ">
            <section className="text-[18px] font-[600] leading-[21.6px] text-[#1A2434] text-center lg:text-[48px] lg:leading-[57.6px]">
              4k<span className="text-[#D05A55] ">+</span>
            </section>

            <section className="text-[10px] font-[400] leading-[18px] text-[#1A2434] text-center lg:text-[18px] lg:leading-[32.4px]">
              Workshops
            </section>
          </section>

          <section className="w-[115px] h-[106px] p-4 bg-[#FAEFB63D] rounded-[24px] grid gap-1 items-center justify-center lg:h-[154px] lg:w-[243.2px] lg:px-10 lg:py-6 ">
            <section className="text-[18px] font-[600] leading-[21.6px] text-[#1A2434] text-center lg:text-[48px] lg:leading-[57.6px]">
              5<span className="text-[#D05A55] ">k+</span>
            </section>

            <section className="text-[10px] font-[400] leading-[18px] text-[#1A2434] text-center lg:text-[18px] lg:leading-[32.4px]">
              Keynote Addresses
            </section>
          </section>

          <section className="w-[111px] h-[88px] p-4 bg-[#FAEFB63D] rounded-[24px] grid gap-1 items-center justify-center lg:h-[154px] lg:w-[243.2px] lg:px-10 lg:py-6 xl:order-4">
            <section className="text-[18px] font-[600] leading-[21.6px] text-[#1A2434] text-center lg:text-[48px] lg:leading-[57.6px]">
              30<span className="text-[#D05A55] ">k+</span>
            </section>

            <section className="text-[10px] font-[400] leading-[18px] text-[#1A2434] text-center lg:text-[18px] lg:leading-[32.4px]">
              HRD experience
            </section>
          </section>

          <section className="w-[255px] h-[106px] py-4 px-5 bg-[#FAEFB63D] rounded-[24px] grid gap-1 items-center justify-center lg:h-[218px] lg:w-[393px] xl:order-3">
            <section className="text-[18px] font-[600] leading-[21.6px] text-[#1A2434] text-center lg:text-[48px] lg:leading-[57.6px]">
              500<span className="text-[#D05A55] ">k+</span>
            </section>

            <section className="text-[10px] font-[400] leading-[18px] text-[#1A2434] text-center lg:text-[18px] lg:leading-[32.4px] lg:w-[313px]">
              Trained Corporate Executives, Parents & Faculty Members of
              Training Houses
            </section>
          </section>
        </section>

        <section className="mt-[52px] text-[28px] relative font-[700] leading-[36.4px] text-[#1A2434] text-center mx-auto lg:mt-[124px] lg:text-[42px] lg:leading-[50.4px]">
          <span className="relative z-10">Other Programs</span>
          <svg
            className="absolute w-[235.08px] h-[60.94px] left-1/2 top-[15%] translate-x-[-50%] z-0 lg:w-[397.11px] lg:h-[93.76px]"
            viewBox="0 0 158 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              fill="#FFB31F"
              stroke="transparent"
              strokeWidth="3"
              strokeLinecap="butt"
              d="M144.373 14.9515C144.044 15.2412 140.186 14.675 139.567 14.2537C138.856 13.7665 137.013 13.3979 136.591 13.6612C136.288 13.8587 136.13 13.7929 136.17 13.4769C136.223 12.9765 135.024 12.7264 134.564 13.1345C134.419 13.253 133.866 13.1345 133.326 12.858C132.589 12.4894 132.18 12.5289 131.746 13.0555C131.338 13.5427 131.101 13.5822 130.943 13.1872C130.614 12.3314 129.02 11.8179 128.309 12.3314C127.941 12.5947 127.704 12.5947 127.73 12.3314C127.796 11.6994 121.186 10.4222 115.669 10.0009C115.09 9.96136 113.615 9.76386 112.391 9.57953C108.796 9.02653 107.756 9.1187 107.914 9.93503C108.033 10.5539 107.941 10.5275 107.256 9.72436C106.821 9.21086 106.387 8.86853 106.295 8.9607C106.203 9.05286 105.018 8.97386 103.661 8.8027C102.305 8.63153 100.831 8.6842 100.383 8.90803C99.843 9.18453 99.5007 9.1582 99.3822 8.82903C99.2637 8.4867 99.053 8.43403 98.737 8.65786C98.4737 8.8422 97.9338 8.82903 97.5257 8.63153C97.0385 8.39453 96.762 8.4867 96.7225 8.89486C96.6567 9.5137 95.9062 9.52686 94.2735 8.94753C93.5757 8.69736 93.4835 8.81586 93.6152 9.7507C93.76 10.7909 93.7468 10.804 93.1675 9.9087C92.7462 9.25036 92.4433 9.09236 92.1405 9.3557C91.8377 9.61903 91.6665 9.57953 91.5348 9.1977C91.4032 8.82903 90.995 8.8027 90.205 9.10553C89.5203 9.36886 88.6777 9.34253 88.0983 9.0397C87.3742 8.67103 87.1108 8.71053 87.0582 9.1977C87.0187 9.6322 86.6632 9.76386 86.0443 9.57953C85.149 9.32936 84.5697 9.32936 80.6065 9.60586C79.7243 9.6717 78.592 9.68486 78.1048 9.65853C76.8408 9.56636 75.9455 9.84286 75.8928 10.33C75.8665 10.567 75.432 10.5407 74.9185 10.2642C73.8915 9.72436 71.5873 9.60586 67.2028 9.8692C61.923 10.1852 60.3957 10.3695 58.5392 10.9489C57.5253 11.2649 56.5905 11.4624 56.4457 11.3834C56.3008 11.3044 56.1692 11.4492 56.1428 11.6862C56.1165 11.9232 55.7873 12.0549 55.4187 11.9627C55.05 11.8705 53.6938 12.1339 52.4167 12.542C51.1395 12.9502 48.1507 13.5427 45.7675 13.8455C39.1447 14.6882 32.7983 15.7942 32.5482 16.1497C32.4297 16.3209 31.8767 16.492 31.3368 16.5184C30.4942 16.571 30.323 16.808 30.1913 18.0984C30.1123 18.941 29.8753 19.5862 29.6778 19.5335C29.4672 19.4809 29.4672 19.0069 29.6515 18.4012C29.9675 17.4005 29.9412 17.361 28.9405 17.5849C28.3612 17.7165 27.637 18.0194 27.321 18.2564C27.005 18.4934 26.0965 18.783 25.2933 18.9015C24.5033 19.0069 23.1208 19.4019 22.2255 19.7705C21.3302 20.1392 20.1452 20.3762 19.5922 20.284C19.0392 20.205 18.5652 20.284 18.5388 20.4684C18.5257 20.6527 18.2887 20.6264 18.0122 20.4157C17.6962 20.1655 17.4855 20.2972 17.446 20.758C17.4065 21.153 17.1827 21.39 16.9457 21.2847C16.4717 21.0609 15.3525 21.2452 14.4967 21.6665C14.1807 21.8245 13.6803 22.022 13.3775 22.101C13.0747 22.18 11.9292 22.812 10.8363 23.5099C8.97984 24.6685 8.361 25.6034 8.96667 26.2749C9.44067 26.8015 11.6527 25.7219 12.0608 24.7739C12.2847 24.2472 12.548 23.8522 12.6402 23.8654C12.7323 23.8917 12.6928 24.1814 12.548 24.5105C12.1925 25.3269 12.6533 25.3795 13.9832 24.6685C14.5888 24.3394 15.2077 24.2077 15.3525 24.3657C15.4973 24.5237 15.629 24.471 15.6553 24.2472C15.6817 24.0234 16.9457 23.7864 18.473 23.7205C20.0003 23.6547 21.4355 23.4835 21.6593 23.3387C21.8832 23.1939 22.6073 23.1675 23.2657 23.2729C23.924 23.3782 24.6745 23.3387 24.9247 23.1807C25.1748 23.0227 25.7147 23.1017 26.1097 23.3782C26.5705 23.6942 26.9655 23.681 27.1893 23.3387C27.479 22.9174 27.6633 22.9569 28.19 23.5362C28.7298 24.1419 28.9537 24.1287 29.6383 23.4704C30.323 22.7989 30.4283 22.7989 30.3625 23.444C30.2967 24.0365 30.4942 24.1814 31.271 24.1287C31.8108 24.1024 32.3507 23.9575 32.456 23.8127C32.9432 23.207 33.9307 23.3124 33.8648 23.9707C33.8253 24.3525 33.9702 24.55 34.2203 24.4315C34.4573 24.313 35.1683 24.313 35.8135 24.4184C36.4587 24.5237 37.2355 24.4315 37.5383 24.2077C37.9728 23.8917 38.1177 23.9444 38.223 24.4184C38.302 24.787 38.3942 24.708 38.46 24.2209C38.539 23.6284 38.7497 23.523 39.2368 23.8127C39.6582 24.0629 39.8425 24.0234 39.724 23.6942C39.6055 23.365 39.803 23.3255 40.2507 23.602C40.7642 23.9049 41.0538 23.7995 41.2645 23.2465C41.4225 22.812 41.699 22.6145 41.8833 22.812C42.0545 23.0095 42.4627 22.8515 42.7655 22.4697C43.2922 21.8245 43.3317 21.8377 43.2658 22.5487C43.2263 22.97 43.358 23.3519 43.5423 23.4045C43.7398 23.4572 43.8847 23.3387 43.8847 23.1544C43.8847 22.97 43.9373 22.4434 44.0032 21.9694C44.1348 21.1399 44.1348 21.1399 44.5562 22.101C44.8195 22.7067 45.0038 22.8647 45.0565 22.5092C45.096 22.1537 45.3593 22.0879 45.7412 22.3512C46.0967 22.5882 46.5707 22.5355 46.8735 22.2064C47.15 21.9035 47.6108 21.706 47.8742 21.7719C48.1638 21.8377 48.2955 21.6534 48.177 21.3374C48.0322 20.9424 48.256 20.9292 48.9143 21.311C49.6912 21.7587 49.8228 21.7192 49.7043 21.0872C49.599 20.5079 49.7043 20.4289 50.1783 20.7449C50.5338 20.9819 51.0078 20.9292 51.2975 20.6C51.574 20.2972 52.1007 20.1129 52.4562 20.205C52.8117 20.2972 53.1277 20.1655 53.154 19.9285C53.1803 19.6915 53.5227 19.573 53.9177 19.6652C54.3258 19.7705 54.5628 19.6257 54.4575 19.336C54.339 19.0069 54.5892 19.0069 55.1553 19.336C55.6688 19.6257 56.0375 19.652 56.077 19.3887C56.1033 19.1385 56.5115 19.0859 56.9855 19.2702C57.4595 19.4545 57.8545 19.4282 57.8808 19.2044C57.9072 18.9805 58.1178 18.9015 58.3417 19.0069C58.7762 19.2044 60.0928 18.941 62.0152 18.2432C62.5945 18.0325 63.2792 17.914 63.5425 17.9799C63.8058 18.0457 64.3325 17.5717 64.7012 16.9134C65.1093 16.2024 65.6492 15.7942 66.0573 15.8995C66.4392 15.9917 66.7683 15.8995 66.7815 15.6757C66.8342 15.0964 69.0857 14.7672 69.4017 15.307C69.8362 16.0444 71.482 15.8337 71.7453 15.0042C71.956 14.3722 72.3247 14.3195 73.773 14.7145C74.7473 14.9779 75.985 15.0964 76.5117 14.9647C77.5387 14.7277 82.5947 14.9252 83.727 15.2412C84.0957 15.3465 84.6223 15.2807 84.8857 15.0832C85.149 14.8857 85.5572 14.8725 85.7942 15.0305C86.0312 15.2017 86.7553 15.1885 87.4005 15.0305C88.0457 14.8594 89.2043 14.8725 89.9548 15.0569C90.9818 15.307 91.4953 15.1885 91.9693 14.5565C92.6013 13.7402 92.6145 13.7402 93.0227 14.7014C93.3782 15.544 93.5493 15.6362 94.234 15.2939C94.6685 15.0832 95.1688 15.07 95.34 15.2675C95.5112 15.465 95.9062 15.4387 96.2222 15.228C96.525 15.0042 96.9858 14.991 97.2492 15.1885C97.5388 15.4124 97.8417 15.2017 98.026 14.6487C98.3288 13.7665 98.342 13.7665 98.7634 14.7277C99.1452 15.5835 99.1978 15.6099 99.2637 14.9647C99.3295 14.2537 99.8825 14.1615 101.173 14.6487C101.502 14.7804 101.792 14.6619 101.818 14.4117C101.844 14.1615 102.253 14.043 102.713 14.1484C103.174 14.2669 103.688 14.1615 103.846 13.9245C104.056 13.6217 104.188 13.648 104.333 14.0562C104.438 14.359 104.794 14.5565 105.11 14.4775C105.821 14.3195 105.663 13.1609 104.767 11.8442C104.412 11.3307 104.293 10.9489 104.478 11.0015C104.978 11.12 106.229 13.0292 106.176 13.5822C106.15 13.8587 106.65 14.0825 107.453 14.1484C108.178 14.201 109.442 14.4249 110.258 14.6487C111.074 14.8725 111.746 14.8594 111.772 14.6224C111.798 14.3854 112.825 14.438 114.076 14.754C115.314 15.0569 116.486 15.228 116.683 15.1359C116.868 15.0437 117.789 15.0569 118.737 15.1622C121.7 15.5045 122.463 15.4914 122.872 15.1359C123.109 14.9252 123.556 15.0042 124.017 15.3597C124.425 15.6757 124.873 15.8337 125.018 15.7152C125.149 15.5967 126.005 15.6099 126.927 15.7547C130.995 16.3867 134.853 16.6895 135.261 16.413C135.498 16.2419 135.999 16.2814 136.381 16.4789C137.829 17.2689 144.741 19.0464 145.966 18.9542C147.059 18.862 147.283 18.6514 147.414 17.598C147.546 16.5315 147.454 16.3604 146.756 16.3472C146.308 16.3472 145.729 15.9785 145.466 15.5177C144.899 14.5434 144.847 14.517 144.36 14.9384L144.373 14.9515ZM102.476 11.8574C102.45 12.0944 102.266 12.2524 102.068 12.1997C101.871 12.147 101.818 11.9364 101.963 11.7257C102.108 11.515 102.292 11.357 102.371 11.3834C102.45 11.4097 102.503 11.6204 102.476 11.8574ZM103.266 13.2794C102.871 13.6349 102.648 12.8975 102.99 12.3709C103.253 11.9759 103.332 12.0022 103.411 12.4762C103.464 12.8054 103.398 13.1609 103.266 13.2794ZM87.2162 11.2517C87.1898 11.4887 87.0055 11.6467 86.808 11.594C86.6105 11.5414 86.5578 11.3307 86.7027 11.12C86.8475 10.9094 87.0318 10.7514 87.1108 10.7777C87.1898 10.804 87.2425 11.0147 87.2162 11.2517ZM64.688 15.5835C64.6617 15.8205 64.4773 15.9785 64.2798 15.9259C64.0823 15.8732 64.0297 15.6625 64.1745 15.4519C64.3193 15.2412 64.5037 15.0832 64.5827 15.1095C64.6617 15.1359 64.7143 15.3465 64.688 15.5835ZM64.1613 17.2557C64.135 17.4927 63.9638 17.6507 63.7663 17.6112C63.5688 17.5585 63.4372 17.3347 63.4635 17.0845C63.4898 16.8475 63.661 16.6895 63.8585 16.729C64.056 16.7817 64.1877 17.0055 64.1613 17.2557ZM60.185 17.8219C60.1323 18.2827 59.4477 18.309 59.2897 17.8614C59.1975 17.5849 59.3555 17.4269 59.6583 17.4927C59.9612 17.5717 60.1982 17.7165 60.185 17.8219ZM34.2862 20.1524C34.2335 20.7185 33.7727 20.995 33.4698 20.6527C33.1407 20.284 33.5225 19.5862 33.9965 19.7047C34.1808 19.7442 34.3125 19.9549 34.2862 20.1524ZM40.3165 22.1669C40.1717 22.3775 40.3165 22.6145 40.6588 22.6935C41.5278 22.9042 41.1197 23.0885 39.7767 23.0754C38.4468 23.0754 38.302 22.4829 39.5265 22.0615C40.593 21.6929 40.6325 21.706 40.3165 22.1537V22.1669ZM30.5337 22.0089C30.5073 22.2459 30.4152 22.4302 30.3362 22.4039C30.2572 22.3775 30.1123 22.1405 30.007 21.8772C29.9017 21.6139 30.007 21.4295 30.2045 21.4822C30.402 21.5349 30.5468 21.7719 30.5337 22.0089Z"
            />
          </svg>
        </section>

        <section className="flex flex-col gap-6 mt-8 items-center md:flex-row md:justify-center lg:mt-[82px] mx-auto max-w-[1440px] xl:gap-[128px] 2xl:justify-center">
          {/* Card - 1 */}
          <section className="w-[328px] h-[132px] bg-[#4D1435] rounded-[20px] relative px-6 py-8 xl:pt-20 xl:w-[575px] xl:h-[566px] xl:pb-14 xl:px-14">
            <section className="flex gap-4 justify-around xl:flex-col ">
              <section className="basis-[100px] xl:w-[338px] xl:h-[230px] grid self-center">
                <Image
                  src={offeringImage}
                  alt="Offering Image"
                  className="w-full h-full"
                />
              </section>

              <section className="p-[6px] grid gap-[6px] xl:mt-10 ">
                <div className="text-[16px] font-[600] leading-[19.2px] text-[#F6E2D8] mx-auto text-center xl:text-[32px] xl:w-[219px] xl:font-[700] xl:leading-[38.4px]">
                  B2B Offerings
                </div>
                <div className="w-[130px] text-[12px] font-[400] leading-[14.4px] text-[#F6E2D8] mx-auto text-center xl:mt-6 xl:w-[415px] xl:h-[58px] xl:text-[24px] xl:font-[500] xl:leading-[28.8px]">
                  For schools, day care centres & corporates
                </div>
              </section>
            </section>

            <section className="bg-[#7C4E6354] rounded-full absolute right-6 top-4 xl:w-16 xl:h-16 ">
              <Image
                src={arrowIcon}
                alt="Arrow Icon"
                className="h-full w-full"
              />
            </section>
          </section>

          {/* Card - 2 */}
          <section className="w-[328px] h-[132px] bg-[#4D1435] rounded-[20px] relative px-6 py-5 xl:pt-20 xl:w-[575px] xl:h-[566px] xl:pb-14 xl:px-14">
            <section className="flex gap-4 justify-around xl:flex-col">
              <section className="basis-[100px] xl:w-[340px] xl:h-[230px] grid justify-center mx-auto">
                <Image
                  src={partner}
                  alt="Offering Image"
                  className="w-full h-full xl:w-[260px]"
                />
              </section>
              <section className="p-[6px] grid gap-[6px] xl:mt-10">
                <div className="w-[130px] h-[38px] text-[16px] font-[600] leading-[19.2px] text-[#F6E2D8] mx-auto text-center xl:w-[317px] xl:text-[32px] xl:font-[700] xl:leading-[38.4px]">
                  Affiliate Partnership
                </div>
                <div className="w-[129px] text-[12px] font-[400] leading-[14.4px] text-[#F6E2D8] mx-auto text-center xl:mt-6 xl:text-[24px] xl:font-[500] xl:w-[415px] xl:h-[58px] xl:leading-[28.8px]">
                  With Teachers, Gynacologists, & Paediatricians
                </div>
              </section>
            </section>

            <section className="bg-[#7C4E6354] rounded-full absolute right-6 top-4 xl:w-16 xl:h-16">
              <Image
                src={arrowIcon}
                alt="Arrow Icon"
                className="h-full w-full xl:w-[260px]"
              />
            </section>
          </section>
        </section>
      </section>
    </div>
  );
};

export default About;
