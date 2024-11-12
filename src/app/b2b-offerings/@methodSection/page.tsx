import Image from "next/image";
import pic1 from "./assets/pic-1.png";
import pic2 from "./assets/pic-2.png";
import pic3 from "./assets/pic-3.png";

const MethodSection = () => {
  return (
    <div className="bg-[#F6E2D7] lg:rounded-[100px] ">
      <div className="py-[52px] mx-4 lg:py-[124px] ">
        <h1 className="relative w-[178px] mx-auto h-7 text-xl font-bold leading-7 text-[#460C04] text-center lg:w-[338px] lg:h-[53px] lg:text-[38px] lg:leading-[53.2px] ">
          <span className="relative z-10 ">The KGKP Method</span>
          <svg
            className="absolute bottom-[-19px] left-[-19px] w-[219px] h-10 "
            viewBox="0 0 210 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Chalk Stroke-05">
              <g id="Group">
                <path
                  id="Vector"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  fill="#FFB31F"
                  d="M196.645 22.1432C196.171 22.4818 190.864 21.5896 190.031 21.0315C189.072 20.3825 186.547 19.8387 185.955 20.1514C185.521 20.3836 185.311 20.2898 185.373 19.8933C185.466 19.2715 183.822 18.8996 183.177 19.3937C182.982 19.5375 182.207 19.3586 181.475 18.9873C180.475 18.4878 179.905 18.5319 179.29 19.1563C178.701 19.7494 178.368 19.7912 178.173 19.2777C177.762 18.1958 175.587 17.4706 174.57 18.0806C174.05 18.3959 173.719 18.3732 173.766 18.0516C173.878 17.258 164.819 15.3359 157.212 14.5331C156.41 14.4503 154.385 14.1401 152.703 13.8422C147.774 12.9853 146.328 13.03 146.504 14.0603C146.641 14.8412 146.512 14.8042 145.603 13.7691C145.023 13.1122 144.435 12.6599 144.301 12.7629C144.167 12.8658 142.539 12.7208 140.678 12.4381C138.818 12.1553 136.782 12.1465 136.145 12.4145C135.376 12.7424 134.904 12.693 134.766 12.2569C134.616 11.8204 134.334 11.7456 133.874 12.02C133.499 12.2435 132.755 12.1951 132.197 11.927C131.546 11.6018 131.151 11.6953 131.074 12.2098C130.963 12.9818 129.922 12.9658 127.69 12.1631C126.743 11.8163 126.608 11.9516 126.743 13.1312C126.897 14.4408 126.873 14.4507 126.109 13.3023C125.548 12.4522 125.153 12.2439 124.727 12.5626C124.301 12.8814 124.067 12.819 123.895 12.3386C123.734 11.8801 123.168 11.8166 122.067 12.154C121.109 12.4428 119.94 12.3682 119.149 11.9732C118.172 11.4745 117.804 11.5151 117.711 12.1153C117.633 12.6514 117.142 12.7953 116.287 12.5489C115.057 12.1919 114.253 12.1629 108.778 12.3101C107.546 12.341 105.996 12.3174 105.323 12.25C103.578 12.0684 102.336 12.3684 102.242 12.9794C102.196 13.2687 101.595 13.2147 100.898 12.8446C99.5034 12.1153 96.3284 11.8498 90.2632 11.9541C82.9543 12.0782 80.8294 12.2386 78.2495 12.8675C76.8404 13.2046 75.5309 13.4052 75.3452 13.3015C75.1595 13.1978 74.9641 13.3632 74.9178 13.6633C74.8714 13.9634 74.4167 14.0978 73.9008 13.9607C73.3848 13.8235 71.5165 14.0901 69.7362 14.5431C67.9559 14.9962 63.7913 15.5787 60.4908 15.8367C51.3134 16.5615 42.4908 17.6225 42.1201 18.051C41.935 18.2598 41.1824 18.4482 40.4245 18.4532C39.2635 18.4759 39.0166 18.758 38.7805 20.3769C38.6246 21.4167 38.2762 22.2124 38.0181 22.1492C37.7366 22.0744 37.7462 21.4819 38.0339 20.7271C38.5168 19.4836 38.4829 19.4393 37.0895 19.6692C36.2915 19.802 35.2729 20.1425 34.8127 20.4276C34.3644 20.7132 33.0861 21.0335 31.9815 21.1337C30.8769 21.2339 28.9558 21.6495 27.7095 22.068C26.4632 22.4864 24.8093 22.7177 24.0446 22.5823C23.28 22.4469 22.6258 22.5311 22.594 22.7562C22.5622 22.9814 22.2319 22.9479 21.8633 22.6652C21.4367 22.348 21.1475 22.4885 21.0674 23.0675C20.9904 23.5605 20.6722 23.8508 20.358 23.6994C19.7056 23.4064 18.1608 23.5661 16.9594 24.0508C16.5268 24.2292 15.8207 24.4408 15.403 24.5335C14.9853 24.6262 13.3726 25.3547 11.8163 26.1607C9.19818 27.5212 8.2935 28.6417 9.11407 29.5227C9.74065 30.2028 12.8511 28.9787 13.4617 27.8044C13.7924 27.1697 14.1772 26.6771 14.3065 26.7033C14.4354 26.7403 14.3631 27.1041 14.1473 27.5059C13.6138 28.5105 14.2499 28.5981 16.1266 27.7713C16.9808 27.3926 17.8383 27.2512 18.0323 27.4522C18.2263 27.6532 18.4178 27.5954 18.4516 27.3164C18.4972 27.0378 20.2579 26.7997 22.3651 26.8003C24.4724 26.8009 26.4547 26.657 26.7805 26.4855C27.0945 26.3136 28.1006 26.3176 29.006 26.4904C29.9113 26.6632 30.9537 26.647 31.304 26.4549C31.6542 26.2627 32.3952 26.3973 32.9266 26.7613C33.5511 27.1719 34.0954 27.1807 34.4179 26.7721C34.8271 26.2587 35.0975 26.3116 35.7809 27.0584C36.51 27.8499 36.8063 27.8391 37.7821 27.0444C38.7579 26.2498 38.9002 26.2442 38.7886 27.0377C38.6791 27.7773 38.9329 27.959 40.0108 27.944C40.7572 27.9278 41.5083 27.7825 41.6682 27.6158C42.3694 26.8867 43.724 27.0758 43.6121 27.88C43.5355 28.3622 43.7397 28.6067 44.0881 28.4684C44.4123 28.34 45.4059 28.3651 46.288 28.5263C47.1696 28.6982 48.238 28.6183 48.6738 28.3538C49.2907 27.9881 49.4898 28.0491 49.5985 28.6458C49.6882 29.1125 49.8103 29.0091 49.9266 28.4098C50.0599 27.671 50.3601 27.5525 51.0212 27.932C51.6011 28.2655 51.8513 28.2206 51.7006 27.8056C51.5502 27.3799 51.8237 27.3467 52.4379 27.7137C53.1219 28.1156 53.5285 28.001 53.8494 27.312C54.0934 26.782 54.4807 26.5481 54.7201 26.8046C54.9476 27.0607 55.5103 26.887 55.9648 26.4292C56.7266 25.6592 56.7735 25.6717 56.6589 26.5513C56.5926 27.077 56.7524 27.5677 57.0106 27.6309C57.2688 27.6942 57.4866 27.5619 57.4948 27.3359C57.5034 27.0991 57.598 26.4451 57.7136 25.8673C57.9282 24.8404 57.9282 24.8404 58.464 26.0668C58.803 26.8442 59.0565 27.0366 59.1315 26.5974C59.207 26.1475 59.5644 26.085 60.0962 26.4383C60.5819 26.7576 61.2467 26.7062 61.6631 26.3224C62.0673 25.949 62.6906 25.7344 63.0781 25.8239C63.4769 25.9245 63.6628 25.6941 63.5235 25.2903C63.3522 24.7883 63.6482 24.7883 64.5411 25.3055C65.585 25.9036 65.7757 25.8674 65.6385 25.0757C65.5109 24.349 65.6685 24.2469 66.3044 24.6686C66.7901 24.9879 67.4431 24.9361 67.8598 24.5416C68.264 24.1682 68.993 23.9789 69.4738 24.1041C69.9665 24.2296 70.4094 24.0947 70.444 23.7942C70.4903 23.4941 70.9687 23.3605 71.5079 23.5093C72.0707 23.659 72.3966 23.4875 72.2679 23.1164C72.129 22.7019 72.4604 22.7031 73.2256 23.151C73.9218 23.5426 74.4408 23.5937 74.488 23.272C74.5343 22.9719 75.0923 22.9274 75.7345 23.1769C76.3766 23.4265 76.9334 23.4142 76.9786 23.1464C77.0238 22.8786 77.3118 22.7705 77.626 22.9219C78.2079 23.2016 80.0411 22.9229 82.7328 22.1471C83.5343 21.9174 84.4974 21.8013 84.8608 21.9006C85.2242 22 85.9672 21.4233 86.5047 20.6344C87.0923 19.7718 87.8673 19.2933 88.4301 19.4429C88.9461 19.5801 89.4 19.4672 89.4452 19.1994C89.5544 18.4704 92.6783 18.1845 93.0798 18.8672C93.6376 19.8142 95.9292 19.6275 96.3452 18.5971C96.6573 17.8216 97.1681 17.7754 99.1605 18.3323C100.496 18.7146 102.206 18.9165 102.933 18.781C104.362 18.5309 111.341 19.0308 112.887 19.4961C113.402 19.6441 114.127 19.584 114.502 19.3604C114.877 19.1369 115.446 19.1251 115.769 19.3415C116.081 19.5576 117.086 19.5939 117.992 19.411C118.899 19.2282 120.482 19.3069 121.526 19.571C122.934 19.9343 123.649 19.8093 124.339 19.0582C125.239 18.0668 125.263 18.0677 125.786 19.2937C126.245 20.3664 126.478 20.4826 127.427 20.0966C128.039 19.86 128.726 19.8633 128.965 20.1198C129.204 20.3763 129.749 20.3744 130.173 20.1095C130.609 19.845 131.236 19.8461 131.594 20.1069C131.985 20.4013 132.397 20.1575 132.694 19.4677C133.16 18.3744 133.171 18.3748 133.707 19.6013C134.189 20.6856 134.271 20.7209 134.394 19.9171C134.521 19.0271 135.282 18.9468 137.033 19.6243C137.488 19.8024 137.895 19.677 137.943 19.3554C137.99 19.0338 138.55 18.9139 139.196 19.0773C139.841 19.2407 140.543 19.1475 140.778 18.865C141.076 18.4878 141.263 18.5377 141.434 19.0612C141.573 19.4542 142.05 19.7085 142.49 19.6382C143.479 19.4691 143.318 18.0299 142.124 16.3378C141.662 15.6853 141.502 15.2053 141.76 15.2685C142.44 15.4439 144.093 17.8854 143.997 18.561C143.949 18.9041 144.637 19.2091 145.745 19.3246C146.748 19.4362 148.476 19.7788 149.589 20.0885C150.703 20.3981 151.649 20.4215 151.683 20.1318C151.729 19.8424 153.157 19.9587 154.858 20.4081C156.558 20.8467 158.17 21.1312 158.434 21.0222C158.699 20.9132 159.975 20.9701 161.259 21.1565C165.335 21.724 166.399 21.7517 166.971 21.3197C167.312 21.0625 167.923 21.1924 168.546 21.6459C169.099 22.0647 169.718 22.2811 169.901 22.1368C170.096 21.9929 171.277 22.0571 172.524 22.2746C178.112 23.2631 183.443 23.8328 184.011 23.5084C184.349 23.3159 185.046 23.3734 185.545 23.65C187.507 24.7124 196.98 27.2746 198.676 27.2065C200.181 27.1423 200.51 26.8955 200.734 25.5996C200.959 24.2821 200.838 24.0513 199.88 24.0168C199.265 23.9946 198.478 23.5027 198.132 22.9082C197.395 21.6746 197.326 21.629 196.621 22.1316L196.645 22.1432ZM138.909 16.2002C138.863 16.5003 138.595 16.6846 138.326 16.6102C138.044 16.5354 137.995 16.2642 138.194 16.0127C138.404 15.7509 138.659 15.5661 138.777 15.6026C138.894 15.6284 138.955 15.9001 138.909 16.2002ZM139.933 18.0047C139.361 18.4367 139.087 17.4891 139.595 16.8608C139.98 16.3789 140.085 16.4151 140.17 17.0109C140.226 17.4225 140.116 17.8604 139.933 18.0047ZM117.856 14.664C117.81 14.9641 117.543 15.1485 117.273 15.0741C116.992 14.9992 116.942 14.728 117.141 14.4765C117.351 14.2147 117.607 14.0299 117.724 14.0665C117.841 14.0923 117.902 14.3639 117.856 14.664ZM86.5421 18.9436C86.4958 19.2437 86.2287 19.4281 85.9591 19.3537C85.6776 19.2789 85.6282 19.0076 85.8267 18.7562C86.0374 18.4943 86.2927 18.3095 86.4098 18.3461C86.5272 18.3719 86.5885 18.6435 86.5421 18.9436ZM85.7459 20.9949C85.6995 21.295 85.4561 21.4802 85.1861 21.4166C84.9279 21.3534 84.7496 21.0452 84.796 20.7451C84.8423 20.445 85.0858 20.2598 85.3558 20.3234C85.6139 20.3866 85.7922 20.6949 85.7459 20.9949ZM80.2224 21.5068C80.1423 22.0859 79.1835 22.0836 78.9913 21.5055C78.8736 21.1563 79.1057 20.96 79.516 21.0718C79.9263 21.1836 80.2389 21.3781 80.2224 21.5068ZM44.3518 23.1323C44.2433 23.8397 43.6161 24.1619 43.1942 23.7156C42.7498 23.2361 43.3251 22.3839 43.97 22.5581C44.2163 22.6209 44.3847 22.8748 44.3518 23.1323ZM52.5966 25.9412C52.3859 26.203 52.5882 26.5013 53.0454 26.6256C54.2299 26.9378 53.6664 27.133 51.8105 27.0552C49.9779 26.989 49.7919 26.2387 51.5013 25.7831C52.9955 25.3844 53.0428 25.3861 52.5966 25.9412ZM39.09 25.2487C39.0437 25.5488 38.9173 25.7706 38.8002 25.734C38.6827 25.7082 38.4926 25.3996 38.3746 25.0612C38.2566 24.7228 38.3948 24.5015 38.6644 24.5759C38.9459 24.6507 39.1364 24.9486 39.09 25.2487Z"
                />
              </g>
            </g>
          </svg>
        </h1>

        <p className="mt-5 w-[299px] mx-auto text-sm font-normal leading-[25.2px] text-[#460C04] text-center md:w-[490px] lg:mt-8 lg:w-[659px] lg:text-[18px] lg:leading-[25.2px] ">
          In any school across the world, about 10% children are academically
          brilliant. The rest are average or thereabouts. The only difference
          between these two groups is that
          <span className="font-bold "> the brilliant children -</span>
        </p>

        <section className="grid grid-rows-3 mt-6 gap-12 md:grid-rows-1 md:grid-cols-3 md:items-start md:justify-center md:w-fit md:mx-auto lg:mt-16 xl:w-[1091px] lg:place-items-center ">
          {/* card - 1 */}
          <section className="w-full flex flex-col items-center justify-center justify-items-center md:w-auto xl:w-[267px] ">
            <Image
              src={pic1}
              alt="Picture 1 "
              className="w-[194.64px] h-[195.45px] xl:w-[267px] xl:h-[268px] object-cover "
            />

            <div className="w-[199px] text-base font-bold leading-[22.4px] text-[#460C04] text-center xl:w-auto xl:text-xl ">
              Read Better
            </div>
          </section>

          {/* card - 2 */}
          <section className="w-full flex flex-col items-center justify-center justify-items-center md:w-auto xl:w-[356px] ">
            {/* w-[270.64px] h-[235.45px] */}
            <Image
              src={pic2}
              alt="Picture 2 "
              className="w-[194.64px] h-[195.45px] xl:w-[267px] xl:h-[268px] object-cover "
            />

            <div className="w-[241px] text-base font-bold leading-[22.4px] text-[#460C04] text-center xl:w-auto xl:text-xl ">
              Have more encyclopedic knowledge
            </div>
          </section>

          {/* card - 3 */}
          <section className="w-full flex flex-col items-center justify-center justify-items-center md:w-auto xl:w-[267px] ">
            <Image
              src={pic3}
              alt="Picture 3 "
              className="w-[194.64px] h-[195.45px] xl:w-[267px] xl:h-[268px] object-cover "
            />

            <div className="w-[146px] text-base font-bold leading-[22.4px] text-[#460C04] text-center xl:w-auto xl:text-xl ">
              Do math better
            </div>
          </section>
        </section>

        <p className="w-[328px] mt-6 mx-auto text-sm font-normal leading-[25.2px] text-center text-[#460C04] md:w-[490px] lg:mt-[59px] lg:w-[757px] lg:text-base lg:leading-[22.4px] ">
          The Kaushalya Genius Kid Program builds these three capabilities in
          the children at preschool level itself, thus significantly improving
          the academic profile of the school.
          <span className="mt-5 block">
            The KGKP encompasses a suite of cutting-edge technologies like Ridge
            Analysis, Brain Development Profile, Multiple Intelligences Theory
            and so on to increase a child’s IQ, EQ, & SQ. KGKP’s consultancy
            extends beyond academics by also focusing on value system that
            prepares children for life’s challenges. Our goal is to develop not
            just successful students, but strong, ethical, and resilient
            individuals.
          </span>
        </p>

        <button className="custom-black-button mt-6 w-[150px] h-[43px] rounded-[40px] bg-[#4D1435] block mx-auto lg:mt-[88px] lg:w-[390px] lg:h-[77px] ">
          <span className="w-full h-full flex gap-2.5 justify-center items-center py-3 px-[18px] lg:py-6 lg:px-[60px] ">
            <span className="custom-button-icon text-base font-semibold leading-[19.36px] text-white lg:text-2xl lg:leading-[28.8px] ">
              Know More
            </span>

            <svg
              className="w-4 h-4 lg:w-6 lg:h-6 custom-button-icon"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="icon-arrow-right">
                <path
                  id="Shape"
                  d="M7.5299 3.42646C7.79025 3.16611 8.21236 3.16611 8.47271 3.42646L13.1394 8.09313C13.3997 8.35348 13.3997 8.77559 13.1394 9.03594L8.47271 13.7026C8.21236 13.963 7.79025 13.963 7.5299 13.7026C7.26955 13.4423 7.26955 13.0201 7.5299 12.7598L11.0585 9.2312H3.33464C2.96645 9.2312 2.66797 8.93272 2.66797 8.56453C2.66797 8.19634 2.96645 7.89787 3.33464 7.89787H11.0585L7.5299 4.36927C7.26955 4.10892 7.26955 3.68681 7.5299 3.42646Z"
                  className="fill-current text-white"
                />
              </g>
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

export default MethodSection;
