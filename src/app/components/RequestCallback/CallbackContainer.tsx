import React from "react";
import CallbackForm from "./CallbackForm";

const CallbackContainer = () => {
  return (
    <div className="py-[52px] px-6 mx-auto w-[360px] rounded-[40px] bg-[#FAEFB6] flex justify-center items-center flex-col gap-11 md:flex-row md:w-auto md:mx-4 md:px-12 md:justify-between lg:w-[900px] lg:mx-auto xl:w-auto max-w-[1280px] xl:px-[52px] 2xl:pr-[70px] xl:py-20 xl:rounded-[100px] ">
      <section className="relative w-[311px] h-[52px] text-xl leading-[26px] font-bold text-center text-[#460C04] xl:w-[550px] xl:h-auto xl:text-[32px] xl:leading-[38.4px] xl:text-left ">
        <span className="relative z-10 ">
          Interested in the Kaushalya Genius Kid Program?
        </span>

        <svg
          className="absolute w-[235px] h-[39px] -bottom-5 right-8 xl:hidden"
          viewBox="0 0 235 39"
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
                d="M220.373 21.5436C219.842 21.8449 213.856 20.9975 212.914 20.4876C211.828 19.8948 208.978 19.3839 208.315 19.6611C207.827 19.8668 207.59 19.7806 207.656 19.4236C207.757 18.8639 205.901 18.5153 205.179 18.9553C204.961 19.0835 204.086 18.9159 203.258 18.5752C202.127 18.1167 201.486 18.1518 200.798 18.7098C200.139 19.2396 199.764 19.2746 199.541 18.8101C199.069 17.8315 196.612 17.16 195.472 17.7016C194.888 17.9816 194.516 17.9584 194.566 17.6689C194.685 16.9545 184.465 15.148 175.889 14.3624C174.985 14.2812 172.701 13.9851 170.803 13.7029C165.243 12.8902 163.615 12.9188 163.821 13.849C163.983 14.5541 163.837 14.5197 162.804 13.5791C162.145 12.9823 161.479 12.5698 161.329 12.6615C161.179 12.7532 159.344 12.6092 157.246 12.3392C155.148 12.0692 152.854 12.0447 152.138 12.2811C151.274 12.5704 150.742 12.522 150.583 12.1278C150.411 11.7331 150.093 11.6633 149.577 11.9069C149.156 12.1054 148.318 12.0557 147.686 11.8095C146.95 11.511 146.507 11.5921 146.424 12.0553C146.305 12.7503 145.132 12.7274 142.611 11.9856C141.542 11.6653 141.391 11.7861 141.552 12.8506C141.736 14.0325 141.709 14.0412 140.84 12.9997C140.201 12.2288 139.754 12.0379 139.277 12.3217C138.8 12.6056 138.535 12.5475 138.337 12.113C138.152 11.6984 137.514 11.6365 136.276 11.9317C135.2 12.1842 133.882 12.1075 132.988 11.745C131.884 11.2875 131.469 11.3211 131.369 11.8614C131.285 12.344 130.734 12.4697 129.768 12.2406C128.379 11.9088 127.473 11.8761 121.307 11.9642C119.919 11.9821 118.173 11.9482 117.415 11.882C115.447 11.7041 114.05 11.9644 113.95 12.5144C113.901 12.7749 113.222 12.7213 112.434 12.382C110.857 11.7132 107.278 11.448 100.446 11.4927C92.2136 11.5451 89.8211 11.6723 86.9198 12.2183C85.3351 12.5108 83.8615 12.6809 83.6515 12.5859C83.4415 12.4909 83.2227 12.6384 83.173 12.9086C83.1232 13.1787 82.612 13.2963 82.0297 13.1684C81.4473 13.0405 79.3447 13.2657 77.3428 13.6596C75.3409 14.0535 70.654 14.5447 66.938 14.7505C56.605 15.3292 46.6746 16.2139 46.2605 16.5971C46.0537 16.7839 45.2073 16.9476 44.3536 16.9459C43.0459 16.957 42.7699 17.2092 42.5172 18.6667C42.35 19.6028 41.964 20.3173 41.6727 20.2582C41.355 20.1885 41.361 19.6545 41.6789 18.9764C42.2129 17.8593 42.1743 17.819 40.6064 18.015C39.7085 18.1282 38.5638 18.4268 38.0477 18.6801C37.545 18.9339 36.1075 19.2123 34.8639 19.2936C33.6203 19.375 31.4596 19.734 30.0589 20.1011C28.6583 20.4682 26.7969 20.6632 25.9345 20.5349C25.072 20.4066 24.3357 20.4772 24.3017 20.6799C24.2677 20.8827 23.8954 20.8498 23.4778 20.5919C22.9946 20.3025 22.67 20.4268 22.5845 20.9481C22.5017 21.3919 22.1455 21.651 21.7904 21.5119C21.053 21.2425 19.314 21.3739 17.9646 21.8011C17.4787 21.9584 16.6849 22.1434 16.2151 22.2236C15.7453 22.3038 13.9344 22.9474 12.1878 23.6613C9.24941 24.8664 8.23936 25.8692 9.17094 26.6701C9.88234 27.2882 13.3764 26.2101 14.0548 25.1565C14.4222 24.587 14.8517 24.146 14.9975 24.1707C15.143 24.2051 15.0645 24.5325 14.8247 24.8929C14.2319 25.7942 14.9492 25.8783 17.0567 25.1483C18.0159 24.8139 18.9807 24.6933 19.2009 24.8761C19.4211 25.0589 19.6364 25.0083 19.6721 24.7571C19.7212 24.5064 21.7028 24.306 24.0767 24.3237C26.4507 24.3414 28.6826 24.2278 29.0483 24.0759C29.4006 23.9235 30.5341 23.9353 31.5555 24.0984C32.5768 24.2615 33.7509 24.2554 34.144 24.085C34.537 23.9147 35.3728 24.042 35.9745 24.3745C36.6813 24.7497 37.2945 24.7621 37.6546 24.3963C38.1114 23.9369 38.4164 23.9868 39.1923 24.6655C40.0201 25.385 40.3539 25.3776 41.4467 24.6692C42.5395 23.9608 42.6997 23.9569 42.5806 24.6713C42.4631 25.3372 42.7506 25.503 43.9648 25.4983C44.8055 25.4898 45.6505 25.3649 45.8293 25.216C46.6132 24.5644 48.1408 24.7458 48.0212 25.4699C47.9389 25.904 48.171 26.1261 48.5622 26.0042C48.9265 25.8911 50.046 25.9218 51.041 26.0743C52.0357 26.2365 53.2386 26.1731 53.7273 25.9382C54.4194 25.6135 54.6441 25.6702 54.7714 26.209C54.8763 26.6304 55.013 26.5382 55.1392 25.9989C55.2833 25.3339 55.6206 25.2296 56.3684 25.5771C57.0244 25.8824 57.3059 25.844 57.1327 25.4687C56.9599 25.0837 57.2677 25.0559 57.9626 25.3918C58.7364 25.7597 59.1936 25.6597 59.5494 25.0412C59.8201 24.5654 60.2544 24.3577 60.5262 24.5909C60.7846 24.8236 61.4171 24.6716 61.9254 24.2626C62.7774 23.5746 62.8303 23.5862 62.7083 24.3783C62.6379 24.8516 62.822 25.2953 63.1133 25.3544C63.4047 25.4135 63.649 25.2961 63.6564 25.0924C63.6641 24.879 63.7654 24.2902 63.8909 23.7702C64.1244 22.8463 64.1244 22.8463 64.7379 23.9562C65.1261 24.6598 65.4132 24.8353 65.4942 24.44C65.5755 24.035 65.9777 23.9816 66.5797 24.3044C67.1294 24.5962 67.878 24.5552 68.3439 24.2127C68.7962 23.8794 69.4967 23.691 69.9339 23.7748C70.3841 23.8687 70.5916 23.6625 70.4314 23.2974C70.2343 22.8435 70.5677 22.8458 71.5778 23.3194C72.7587 23.867 72.9733 23.8359 72.8123 23.1211C72.6626 22.465 72.8393 22.3742 73.5591 22.7596C74.1088 23.0514 74.8441 23.0099 75.3103 22.6577C75.7626 22.3244 76.5823 22.1597 77.1251 22.2765C77.6811 22.3937 78.179 22.2757 78.2154 22.005C78.2652 21.7349 78.803 21.6183 79.4117 21.7568C80.047 21.8963 80.4126 21.7444 80.2647 21.4089C80.1048 21.034 80.4782 21.0378 81.3438 21.4478C82.1313 21.8065 82.7165 21.8567 82.7669 21.5672C82.8167 21.297 83.445 21.2614 84.1704 21.4916C84.8958 21.7218 85.523 21.7153 85.5718 21.4742C85.6205 21.2332 85.9441 21.138 86.2993 21.2771C86.957 21.5339 89.0199 21.2976 92.046 20.6202C92.947 20.4196 94.0311 20.3228 94.4413 20.4153C94.8515 20.5078 95.6838 19.994 96.283 19.2872C96.9379 18.5144 97.807 18.0893 98.4423 18.2288C99.0246 18.3566 99.5351 18.2585 99.5838 18.0175C99.7009 17.3612 103.218 17.1289 103.676 17.7476C104.312 18.6058 106.892 18.4562 107.352 17.5307C107.697 16.8341 108.272 16.7966 110.522 17.3149C112.03 17.6704 113.957 17.8663 114.775 17.7501C116.383 17.5363 124.249 18.0437 125.994 18.4758C126.576 18.6133 127.392 18.5651 127.813 18.3666C128.233 18.1681 128.874 18.1621 129.24 18.3599C129.593 18.5571 130.726 18.598 131.745 18.4406C132.765 18.2832 134.55 18.367 135.728 18.6135C137.316 18.9526 138.121 18.8456 138.892 18.1742C139.898 17.2878 139.925 17.2888 140.525 18.3982C141.05 19.369 141.313 19.4756 142.379 19.1354C143.067 18.9271 143.841 18.9356 144.112 19.1688C144.384 19.402 144.998 19.4047 145.473 19.1694C145.962 18.9345 146.668 18.9406 147.073 19.1786C147.517 19.4471 147.979 19.2307 148.308 18.6113C148.824 17.6295 148.837 17.63 149.451 18.7399C150.002 19.7214 150.094 19.7539 150.227 19.0302C150.363 18.229 151.219 18.1628 153.197 18.7878C153.712 18.9521 154.169 18.8423 154.22 18.5528C154.27 18.2632 154.901 18.1598 155.629 18.3123C156.357 18.4649 157.147 18.3865 157.41 18.1338C157.742 17.7961 157.954 17.8426 158.15 18.3159C158.311 18.6714 158.849 18.9045 159.345 18.8447C160.458 18.7003 160.264 17.4016 158.906 15.8665C158.38 15.2745 158.196 14.8405 158.487 14.8996C159.255 15.0633 161.136 17.2777 161.034 17.8859C160.983 18.1948 161.76 18.4754 163.01 18.5885C164.14 18.6973 166.089 19.0202 167.346 19.3084C168.603 19.5966 169.669 19.6254 169.705 19.3645C169.755 19.104 171.365 19.2204 173.284 19.6394C175.203 20.0486 177.021 20.3182 177.318 20.2221C177.615 20.126 179.054 20.1876 180.501 20.3662C185.097 20.9109 186.297 20.9445 186.938 20.5597C187.32 20.3307 188.009 20.4527 188.714 20.8667C189.341 21.2487 190.041 21.4488 190.245 21.3202C190.463 21.1921 191.795 21.2596 193.202 21.4658C199.505 22.4024 205.514 22.9593 206.152 22.6715C206.531 22.5007 207.316 22.5582 207.881 22.8117C210.1 23.7853 220.793 26.1722 222.702 26.1246C224.398 26.079 224.766 25.8592 225.009 24.6927C225.251 23.5069 225.112 23.2979 224.033 23.2589C223.34 23.2339 222.449 22.7841 222.055 22.2454C221.215 21.1272 221.137 21.0856 220.347 21.533L220.373 21.5436ZM155.283 15.7163C155.233 15.9864 154.933 16.1504 154.629 16.0812C154.312 16.0114 154.254 15.7665 154.475 15.5414C154.71 15.3071 154.997 15.1426 155.129 15.1765C155.261 15.2007 155.332 15.4461 155.283 15.7163ZM156.451 17.3513C155.81 17.7361 155.494 16.8797 156.061 16.3174C156.491 15.8861 156.609 15.9196 156.71 16.4574C156.777 16.8289 156.656 17.2227 156.451 17.3513ZM131.553 14.1602C131.503 14.4303 131.204 14.5943 130.9 14.5251C130.582 14.4553 130.524 14.2104 130.746 13.9853C130.981 13.751 131.267 13.5865 131.399 13.6204C131.532 13.6446 131.603 13.89 131.553 14.1602ZM96.3113 17.7633C96.2615 18.0335 95.9621 18.1975 95.6578 18.1282C95.3401 18.0585 95.2823 17.8136 95.5038 17.5885C95.7391 17.3542 96.0252 17.1897 96.1574 17.2236C96.2899 17.2478 96.3611 17.4932 96.3113 17.7633ZM95.431 19.6061C95.3812 19.8762 95.1085 20.0412 94.8038 19.9816C94.5124 19.9225 94.3091 19.6432 94.3588 19.3731C94.4086 19.1029 94.6814 18.938 94.9861 18.9975C95.2774 19.0566 95.4808 19.3359 95.431 19.6061ZM89.2127 20.0225C89.1272 20.5439 88.047 20.5341 87.8257 20.0113C87.6904 19.6956 87.9502 19.5205 88.4133 19.6246C88.8765 19.7287 89.2302 19.9066 89.2127 20.0225ZM48.8159 21.196C48.6995 21.8328 47.9955 22.1182 47.5166 21.7124C47.012 21.2765 47.6533 20.513 48.3811 20.6752C48.6592 20.7338 48.8509 20.9642 48.8159 21.196ZM58.127 23.7952C57.8917 24.0295 58.1221 24.3001 58.6382 24.4158C59.975 24.7069 59.3418 24.8783 57.2505 24.7931C55.1854 24.7185 54.9698 24.0406 56.8918 23.6438C58.5719 23.2965 58.6252 23.2984 58.127 23.7952ZM42.9055 23.0611C42.8557 23.3312 42.7151 23.5301 42.583 23.4962C42.4504 23.472 42.2337 23.1922 42.0981 22.8862C41.9624 22.5802 42.1163 22.3818 42.4206 22.4511C42.7382 22.5208 42.9553 22.7909 42.9055 23.0611Z"
              />
            </g>
          </g>
        </svg>

        <svg
          width="335"
          height="80"
          className="hidden xl:block absolute -bottom-2 right-0 "
          viewBox="0 0 335 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            fill="#FFB31F"
            d="M309.041 32.1765C308.299 32.7508 299.72 31.6382 298.34 30.7812C296.754 29.7993 292.661 29.0725 291.731 29.6024C291.042 29.9976 290.711 29.8639 290.781 29.2281C290.887 28.2252 288.236 27.7197 287.217 28.5541C286.913 28.8053 285.668 28.5569 284.45 27.9951C282.819 27.246 281.906 27.3461 280.95 28.3953C280.038 29.3907 279.51 29.4722 279.169 28.6671C278.44 26.9405 274.902 25.8994 273.311 26.9408C272.497 27.4794 271.951 27.4715 272.012 26.9342C272.153 25.6537 257.457 23.0928 245.191 22.2644C243.892 22.1772 240.615 21.7982 237.902 21.427C229.923 20.3313 227.596 20.5056 227.948 22.1701C228.21 23.423 228.012 23.3697 226.488 21.752C225.519 20.7242 224.551 20.0276 224.336 20.1981C224.122 20.3775 221.489 20.2301 218.49 19.8863C215.49 19.5426 212.204 19.647 211.194 20.1233C209.977 20.6984 209.225 20.6371 208.964 19.9572C208.694 19.2504 208.237 19.1528 207.513 19.6286C206.932 20.0146 205.723 19.9899 204.818 19.5797C203.743 19.0892 203.126 19.2783 203.038 20.1111C202.906 21.3558 201.222 21.3946 197.604 20.2373C196.054 19.7387 195.857 19.9629 196.147 21.8514C196.473 23.9636 196.437 23.9726 195.145 22.1755C194.194 20.8432 193.54 20.5221 192.869 21.0694C192.208 21.6168 191.813 21.5279 191.526 20.7585C191.238 20.016 190.324 19.9549 188.571 20.5669C187.05 21.0978 185.17 21.0475 183.879 20.45C182.276 19.7098 181.685 19.7914 181.579 20.7764C181.482 21.645 180.704 21.915 179.316 21.5594C177.318 21.0527 176.029 21.064 167.23 21.6349C165.251 21.7638 162.754 21.813 161.67 21.7434C158.841 21.5604 156.872 22.1101 156.767 23.104C156.714 23.5786 155.747 23.5177 154.6 22.9737C152.324 21.8855 147.185 21.6531 137.454 22.1898C125.718 22.8466 122.317 23.2377 118.201 24.4C115.955 25.0397 113.861 25.4374 113.547 25.2857C113.233 25.1341 112.938 25.4122 112.886 25.8957C112.833 26.3793 112.108 26.6312 111.275 26.4447C110.442 26.2582 107.444 26.8008 104.607 27.6385C101.771 28.4762 95.1212 29.6789 89.8224 30.2972C75.1162 32.0247 60.984 34.2883 60.4302 34.9966C60.1533 35.3462 58.9453 35.6886 57.7368 35.7535C55.8659 35.8553 55.4907 36.3305 55.209 38.9631C55.024 40.6555 54.5161 41.9635 54.0862 41.8658C53.6294 41.7681 53.6097 40.8012 54.0283 39.574C54.7319 37.5404 54.6691 37.4689 52.4407 37.9206C51.161 38.1825 49.5416 38.7942 48.8352 39.2879C48.1289 39.7816 46.0977 40.3671 44.3344 40.5941C42.5711 40.8211 39.5018 41.6145 37.5156 42.3611C35.5295 43.1078 32.8983 43.587 31.6535 43.4192C30.4178 43.2513 29.3706 43.4233 29.3265 43.7904C29.2824 44.1575 28.7541 44.1137 28.1446 43.6941C27.4364 43.2029 26.9803 43.4544 26.8835 44.3857C26.7954 45.1916 26.2949 45.667 25.7753 45.453C24.7181 45.0163 22.2388 45.3699 20.3424 46.2328C19.6536 46.5473 18.5442 46.9433 17.873 47.1146C17.2019 47.2859 14.6527 48.5618 12.2111 49.9628C8.08819 52.3247 6.70388 54.1894 8.06716 55.5657C9.11653 56.6202 14.0366 54.4537 14.9553 52.5272C15.4547 51.4789 16.0352 50.6542 16.2501 50.6986C16.4561 50.743 16.3676 51.334 16.0376 52.015C15.2438 53.6727 16.2735 53.7693 19.2343 52.3136C20.5849 51.6487 21.9542 51.3687 22.2771 51.6904C22.591 52.0121 22.8952 51.8952 22.9481 51.4385C23.0009 50.9819 25.8112 50.4933 29.204 50.3619C32.5969 50.2304 35.7744 49.8756 36.2753 49.5882C36.7761 49.2918 38.3785 49.2352 39.8561 49.4564C41.3247 49.6776 42.9898 49.594 43.5532 49.2707C44.1167 48.9474 45.2987 49.1154 46.186 49.6599C47.2167 50.2847 48.0851 50.2563 48.5852 49.5839C49.2193 48.7323 49.6402 48.8031 50.7972 49.9649C52.017 51.1892 52.4914 51.1705 54.002 49.8248C55.5215 48.4792 55.7543 48.4698 55.6134 49.7593C55.4812 50.9592 55.8936 51.2449 57.6392 51.1433C58.8477 51.0785 60.0379 50.7898 60.2791 50.5119C61.3691 49.2923 63.554 49.5033 63.4131 50.8106C63.3249 51.5896 63.6658 51.9829 64.2115 51.7402C64.7304 51.5065 66.3239 51.4947 67.7478 51.707C69.1716 51.9193 70.8992 51.7372 71.5698 51.2883C72.5356 50.6509 72.858 50.7399 73.0746 51.7064C73.2371 52.4492 73.4427 52.2876 73.5931 51.3026C73.7701 50.1115 74.2441 49.8869 75.3285 50.4668C76.2694 50.9755 76.6721 50.8852 76.4202 50.2142C76.1594 49.5432 76.589 49.4708 77.6016 50.0151C78.7308 50.6219 79.375 50.4148 79.8385 49.2859C80.195 48.4079 80.8121 48.0218 81.2067 48.4151C81.5924 48.8083 82.4871 48.5023 83.175 47.7311C84.3455 46.4398 84.4261 46.4486 84.2944 47.8902C84.2154 48.7498 84.4943 49.5193 84.9242 49.617C85.3452 49.7147 85.6849 49.4813 85.6753 49.1053C85.6657 48.7293 85.7801 47.6548 85.9396 46.7234C86.2141 45.0398 86.232 45.0487 87.1666 46.9988C87.7597 48.2242 88.1721 48.5368 88.2693 47.8115C88.3664 47.0861 88.9392 46.9687 89.7996 47.4954C90.5973 47.9774 91.6535 47.8591 92.3058 47.2044C92.9225 46.5855 93.9334 46.1808 94.5424 46.323C95.1783 46.4651 95.4731 46.0885 95.2212 45.4354C94.9154 44.6302 95.3899 44.6204 96.8595 45.3967C98.58 46.2978 98.8843 46.2256 98.6134 44.9548C98.3696 43.7825 98.611 43.6209 99.6686 44.2546C100.457 44.7366 101.522 44.6094 102.166 43.9636C102.782 43.3448 103.946 42.9756 104.743 43.1533C105.54 43.3309 106.238 43.0789 106.291 42.5865C106.343 42.1029 107.104 41.8598 107.982 42.0552C108.886 42.2595 109.405 41.9631 109.18 41.3816C108.919 40.7106 109.465 40.7096 110.72 41.3699C111.858 41.9676 112.7 42.0109 112.752 41.4826C112.805 40.9901 113.709 40.881 114.757 41.2552C115.806 41.6203 116.701 41.565 116.754 41.1262C116.798 40.6875 117.272 40.5076 117.791 40.7304C118.75 41.1405 121.677 40.5802 125.945 39.1759C127.224 38.7528 128.754 38.5173 129.346 38.6505C129.937 38.7837 131.09 37.8148 131.911 36.4973C132.804 35.0632 134.011 34.2464 134.925 34.4506C135.766 34.6371 136.491 34.4299 136.535 33.9911C136.667 32.8091 141.662 32.1556 142.353 33.2286C143.305 34.722 146.983 34.2767 147.58 32.6015C148.035 31.3294 148.849 31.2205 152.1 32.0114C154.277 32.5447 157.026 32.7635 158.198 32.5107C160.471 32.0232 171.725 32.3969 174.242 33.0548C175.075 33.2682 176.23 33.1229 176.829 32.7368C177.419 32.3418 178.332 32.2954 178.861 32.6257C179.381 32.956 180.992 32.9442 182.433 32.5924C183.874 32.2407 186.434 32.2629 188.127 32.6449C190.42 33.151 191.556 32.8983 192.611 31.643C193.995 29.9753 194.031 29.9842 194.948 31.9343C195.757 33.6428 196.124 33.8122 197.627 33.1381C198.593 32.7155 199.703 32.6867 200.089 33.0799C200.483 33.4731 201.361 33.4357 202.04 32.9869C202.72 32.538 203.74 32.5004 204.314 32.8932C204.959 33.3397 205.621 32.9177 206.04 31.789C206.717 29.9972 206.744 29.9971 207.687 31.9382C208.523 33.6645 208.666 33.718 208.807 32.4107C208.966 30.969 210.174 30.7878 213.041 31.7674C213.775 32.0168 214.42 31.8007 214.481 31.2814C214.534 30.762 215.429 30.5276 216.468 30.7585C217.507 30.9894 218.643 30.7904 218.992 30.3153C219.456 29.6878 219.752 29.7678 220.067 30.5819C220.309 31.1992 221.089 31.5918 221.805 31.4383C223.38 31.1131 223.036 28.7861 221.025 26.1218C220.245 25.0936 219.957 24.3242 220.378 24.4219C221.479 24.6706 224.288 28.5152 224.165 29.6166C224.103 30.1808 225.232 30.6264 227.014 30.7485C228.635 30.862 231.438 31.3135 233.238 31.7489C235.038 32.1933 236.56 32.1637 236.613 31.6891C236.666 31.2146 238.967 31.3268 241.735 31.9395C244.493 32.5523 247.108 32.8968 247.528 32.708C247.949 32.5192 249.999 32.5334 252.085 32.7446C258.667 33.4131 260.377 33.4011 261.271 32.6654C261.798 32.2347 262.792 32.403 263.814 33.1084C264.737 33.7424 265.732 34.0629 266.035 33.8117C266.339 33.5694 268.237 33.5928 270.27 33.8757C279.306 35.1217 287.91 35.724 288.805 35.1673C289.341 34.8351 290.46 34.8957 291.285 35.3061C294.493 36.8939 309.88 40.4651 312.61 40.2543C315.036 40.0619 315.536 39.6403 315.819 37.518C316.111 35.3688 315.895 35.0111 314.355 35.0049C313.353 35.0067 312.08 34.257 311.478 33.318C310.23 31.3596 310.096 31.3062 309.005 32.1586L309.041 32.1765ZM215.86 26.1042C215.807 26.5878 215.396 26.9108 214.948 26.8042C214.5 26.7065 214.383 26.268 214.704 25.8467C215.017 25.4164 215.428 25.1023 215.616 25.1467C215.804 25.1911 215.913 25.6207 215.86 26.1042ZM217.611 28.9659C216.726 29.6927 216.222 28.1895 216.999 27.1407C217.588 26.3428 217.767 26.3873 217.93 27.3449C218.039 27.9983 217.897 28.7326 217.611 28.9659ZM181.918 24.9209C181.865 25.4045 181.454 25.7275 181.006 25.6209C180.558 25.5232 180.441 25.0847 180.763 24.6634C181.075 24.2331 181.486 23.919 181.674 23.9634C181.863 24.0078 181.971 24.4374 181.918 24.9209ZM131.835 33.7579C131.782 34.2414 131.371 34.5645 130.923 34.4578C130.475 34.3602 130.358 33.9217 130.679 33.5003C130.992 33.07 131.403 32.7559 131.591 32.8004C131.779 32.8448 131.887 33.2743 131.835 33.7579ZM130.677 37.1262C130.624 37.6097 130.231 37.9327 129.81 37.8439C129.389 37.7462 129.083 37.2723 129.136 36.7887C129.189 36.3052 129.583 35.9822 130.003 36.071C130.424 36.1687 130.73 36.6426 130.677 37.1262ZM121.834 38.288C121.728 39.2193 120.206 39.2847 119.855 38.3722C119.639 37.8175 120.015 37.4856 120.678 37.6366C121.34 37.7876 121.86 38.0821 121.843 38.297L121.834 38.288ZM64.2676 43.1008C64.1443 44.2559 63.1426 44.8128 62.452 44.1247C61.7166 43.3829 62.5735 41.9758 63.6214 42.2067C64.0244 42.2955 64.3116 42.6979 64.2676 43.1098L64.2676 43.1008ZM77.6949 47.1322C77.3824 47.5625 77.7234 48.0453 78.4578 48.2051C80.3834 48.6314 79.4799 48.9911 76.5075 48.9786C73.5531 48.966 73.2198 47.7848 75.9399 46.9384C78.3199 46.2 78.3826 46.2088 77.7039 47.1322L77.6949 47.1322ZM55.9394 46.8401C55.8865 47.3237 55.6902 47.6911 55.5021 47.6466C55.3141 47.6022 54.9909 47.1283 54.7751 46.5826C54.5592 46.0369 54.7645 45.6694 55.2123 45.7761C55.6601 45.8737 55.9922 46.3566 55.9394 46.8401Z"
          />
        </svg>
      </section>

      <section className="w-[296px] px-4 py-6 bg-white rounded-[20px] lg:w-[350px] xl:px-6 xl:h-[405px] xl:grow xl:rounded-[40px] ">
        <CallbackForm />
      </section>
    </div>
  );
};

export default CallbackContainer;
