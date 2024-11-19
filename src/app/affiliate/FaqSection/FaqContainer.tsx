import ListingFAQ from "@/app/components/ListingFAQ";
import Link from "next/link";
import React from "react";
import Title from "./Title";

interface IData {
  q: string;
  ans: string | JSX.Element;
}

interface IFaq {
  [key: string]: IData[];
}

interface FaqContainerProps {
  toggleStateTrue: () => void;
}

const FaqContainer = ({ toggleStateTrue }: FaqContainerProps) => {
  const allFaqs: IFaq = {
    generalInfo: [
      {
        q: "What is the KGKP Affiliate Program?",
        ans: `KGKP is an online, scientific program for children between 0 and 15 years age. The benefit of the program is that it raises the IQ, EQ and SQ of children significantly. `,
      },
      {
        q: "Who can join the KGKP Affiliate Program?",
        ans: `The affiliate program is offered to teachers, paediatricians and gynaecologists who can understand this cutting edge technology driven program and can recommend it to the parents community in the area of their influence. The referral fee from this initiative can build a very attractive second source of income for the affiliates.`,
      },
      {
        q: "What is the process for signing up for the Affiliate Program?",
        ans: (
          <div>
            There are some simple steps.
            <ul className="ml-4">
              <li>
                a). Fill up the application form{" "}
                <span
                  className="cursor-pointer text-blue-700 underline "
                  onClick={toggleStateTrue}
                >
                  here
                </span>{" "}
                and give some basic information about your profession.
              </li>
              <li>
                b). Your application will be screened within 3 working days.
                Upon approval, details for payment of affiliate registration fee
                of Rs 5000/- shall be sent to you by by our support team.
              </li>
              <li>
                c). After registration, a unique referral code shall be given to
                you.
              </li>
              <li>
                d). A short online training will be given at a mutually
                convenient time. KGKP brochures and posters shall be given in
                adequate quantity for display and distribution.
              </li>
              <li>e). Recommend the KGK program to your network of parents.</li>
              <li>f). Track your income using the unique referral code.</li>
            </ul>
          </div>
        ),
      },
      {
        q: "How does the referral process work?",
        ans: (
          <>
            <div>
              RU education offers 4 types of online courses.
              <ul className="ml-4">
                <li>a). For couples who are planning a child.</li>
                <li>b). For pregnant women who are expecting a child.</li>
                <li>c). For children between 0 and 6 years age.</li>
                <li>d). For children between 6 and 15 years age.</li>
              </ul>
              <span className="block">
                For best results, parents should join the program before
                conception or during early pregnancy and continue the program
                daily until the child is 15 years of age.
              </span>
              <span className="block">
                Children joining the KGKP phases 1-7 ( birth to 6 years) have to
                be shown the program either on a tv screen or a laptop.
              </span>
              <span className="block">
                Children joining Phases 8-11 can be shown the program on a
                smartphone screen.
              </span>
            </div>
          </>
        ),
      },
      {
        q: "What kind of support does KGKP provide to affiliates?",
        ans: `The support team can be contacted on mobile, SMS or WhatsApp at +91 9394360040.`,
      },
      {
        q: "How are commissions calculated and paid out?",
        ans: `Depending on the type of Affiliate Program the channel partner has signed up for, the commissions will be calculated (₹500 per enrolment per month for Channel Partner 1 & ₹350 per enrolment per month for Channel Partner 2) and paid out by the 9th day of the next month.`,
      },
      {
        q: "How do I track my referrals and earnings?",
        ans: `There is absolutely no limit to your earnings in the affiliate program of KGKP. The more the referrals, the more are the earnings.`,
      },
      {
        q: "Is there a limit to how much I can earn?",
        ans: `You will be given a unique affiliate code. All your references use this code in their access password. You can use the same code to access the LMS and track the progress of every reference as well as your earnings.`,
      },
      {
        q: "Can I promote KGKP through social media?",
        ans: `Yes. You can promote the KGKP through social media or any other means. The only condition is that you should not distort the logo, the promise or the methodology of the KGKP in your communication.`,
      },
      {
        q: "What happens if a parent doesn't use my referral code?",
        ans: `Your unique referral code is the means by which the reference gets included in your lot  and is visible to you for tracking. If the referral code is wrong, different or not mentioned, the reference will not be included in your account and will be difficult to track and retrieve later.`,
      },
      {
        q: "Are there any fees to join the Affiliate Program?",
        ans: `There is an initial affiliate registration fees of Rs 5000/-. You get promotional materials free of cost, after the registration. There are no other charges before or after this.`,
      },
      {
        q: "How long does it take to start earning commissions?",
        ans: `Your earnings start the moment your reference makes the first payment in the KGKP. Settlement happens at the end of every calendar month within 7 working days.`,
      },
      {
        q: "Can I use KGKP branding and logos in my promotions?",
        ans: `Yes. You can display the KGKP posters, distribute the brochures and use the logo and brand in your promotions as long as you don’t distort the logo and make it clear that the brand is the property of ru education Pvt ltd.`,
      },
      {
        q: "What kind of training & material is provided to affiliates?",
        ans: `The KGKP training includes the  subjects of relationships, pregnancy program, child brain development processes, ridge analysis technology, multiple intelligence theory, KGKP curriculum, child psychology, parenting and other related aspects. The materials provided includes posters, brochures, soft copies of training content.`,
      },
      {
        q: "Can I be an affiliate if I’m located outside of India?",
        ans: `Yes. The KGKP and the affiliate program is available internationally.`,
      },
      {
        q: "What if I have questions or need help during the program?",
        ans: `A helpline is available between 11 am and 5 pm IST Monday to Friday on all working days. Details are given in answer to FAQ number 5.`,
      },
      {
        q: "How do I cancel my participation in the Affiliate Program?",
        ans: `You need to give a notice in writing if you wish to terminate your affiliate status. The status will be terminated at the end of the calendar month with full and final settlement.`,
      },
      {
        q: "Can I refer other professionals to join the Affiliate Program?",
        ans: `Yes. You can refer other professionals to affiliate with the KGKP. You will be eligible to get a one time reward of Rs 2500/- for every successful affiliate registration referred by you. This reward will be settled at the end of the calendar month.`,
      },
    ],
  };

  return (
    <div className="py-[52px] mx-4 lg:px-10 xl:px-20 xl:mx-auto xl:pt-[149px] xl:pb-[124px] ">
      <Title />

      <section className="relative grid gap-4 mt-8 xl:mt-[52px] ">
        <ListingFAQ data={allFaqs[Object.keys(allFaqs)[0]]} />
        <svg
          className="hidden lg:block absolute left-[-128px] top-[-206px] w-[240px] h-[248px] "
          viewBox="0 0 263 263"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_3870_5205)">
            <path
              d="M117.464 187.817C113.798 192.269 107.216 192.906 102.764 189.239L99.3442 186.423C91.3873 179.87 88.3964 168.998 91.9016 159.368C94.5378 152.125 91.9677 143.941 85.6501 139.468C78.7325 134.569 69.1379 135.534 63.3318 141.712C57.1864 148.244 57.1066 158.507 63.1392 165.071C63.6786 165.658 64.2675 166.215 64.8896 166.728C69.3415 170.394 69.9786 176.976 66.3116 181.428C62.645 185.88 56.0631 186.517 51.611 182.85C50.246 181.726 48.9505 180.5 47.7601 179.204C34.3629 164.625 34.5147 141.872 48.1109 127.409C61.0163 113.676 82.344 111.532 97.7211 122.422C111.697 132.32 117.375 150.45 111.528 166.513C111.044 167.841 111.484 169.363 112.622 170.301L116.041 173.117C120.494 176.783 121.131 183.365 117.464 187.817Z"
              fill="#FFD15B"
            />
            <path
              d="M141.451 207.572C137.784 212.024 131.202 212.661 126.75 208.994L126.683 208.939C122.232 205.273 121.594 198.691 125.261 194.239C128.928 189.787 135.51 189.15 139.962 192.817L140.029 192.871C144.481 196.538 145.117 203.12 141.451 207.572Z"
              fill="#FFD15B"
            />
            <path
              d="M53.6304 172.079C54.8193 173.376 56.1161 174.599 57.4811 175.723C60.6538 178.336 64.909 178.766 68.417 177.182C68.0631 178.694 67.3661 180.148 66.3118 181.428C62.6474 185.878 56.065 186.518 51.6117 182.85C50.2466 181.726 48.9533 180.499 47.764 179.202C34.3621 164.623 34.5176 141.869 48.1118 127.407C48.5989 126.889 49.0991 126.388 49.6118 125.905C40.5449 140.164 41.8634 159.272 53.6304 172.079Z"
              fill="#FFC344"
            />
            <path
              d="M97.7699 152.241C94.2655 161.87 97.2557 172.746 105.212 179.299L108.631 182.115C111.804 184.728 116.062 185.154 119.57 183.569C119.216 185.082 118.519 186.535 117.465 187.816C113.797 192.269 107.218 192.905 102.765 189.238L99.3464 186.422C91.3901 179.869 88.3965 168.997 91.9039 159.364C94.5381 152.12 91.9682 143.942 85.6508 139.469C79.7109 135.259 71.7955 135.376 66.005 139.412C66.7704 137.671 67.8387 136.037 69.203 134.586C75.0086 128.407 84.6023 127.441 91.5207 132.342C97.8378 136.815 100.405 144.997 97.7699 152.241Z"
              fill="#FFC344"
            />
            <path
              d="M143.556 203.324C143.202 204.837 142.505 206.29 141.451 207.571C137.784 212.024 131.204 212.66 126.751 208.993L126.683 208.936C122.233 205.272 121.593 198.689 125.26 194.236C126.315 192.956 127.608 191.993 129.025 191.356C128.146 195.106 129.38 199.204 132.549 201.814L132.617 201.87C135.79 204.483 140.049 204.908 143.556 203.324Z"
              fill="#FFC344"
            />
            <path
              d="M191.251 149.142C185.609 150.337 180.065 146.732 178.87 141.09L177.952 136.756C175.816 126.672 180.255 116.306 188.999 110.962C195.575 106.942 198.667 98.9404 196.516 91.5042C194.161 83.3615 186.057 78.135 177.666 79.3465C168.789 80.6226 162.329 88.5974 162.954 97.4909C163.01 98.2856 163.123 99.0888 163.29 99.8772C164.485 105.519 160.88 111.063 155.238 112.258C149.596 113.454 144.052 109.849 142.857 104.206C142.49 102.477 142.242 100.71 142.119 98.9546C140.732 79.2037 155.034 61.5077 174.682 58.6741C193.334 55.9816 211.346 67.6009 216.582 85.7015C221.339 102.153 214.476 119.869 199.892 128.784C198.685 129.521 198.08 130.985 198.386 132.427L199.304 136.761C200.499 142.403 196.893 147.946 191.251 149.142Z"
              fill="#6FD7A3"
            />
            <path
              d="M197.691 179.541C192.049 180.737 186.505 177.131 185.31 171.489L185.292 171.404C184.097 165.762 187.702 160.219 193.344 159.023C198.986 157.828 204.53 161.433 205.725 167.075L205.743 167.16C206.939 172.803 203.334 178.346 197.691 179.541Z"
              fill="#6FD7A3"
            />
            <path
              d="M151.15 97.0422C151.272 98.7974 151.523 100.562 151.889 102.292C152.741 106.314 155.801 109.302 159.531 110.25C158.311 111.212 156.86 111.915 155.238 112.258C149.599 113.453 144.053 109.85 142.857 104.206C142.49 102.476 142.244 100.71 142.123 98.9546C140.732 79.2005 155.038 61.5062 174.684 58.672C175.388 58.5707 176.091 58.4911 176.793 58.433C160.814 63.9299 149.933 79.6934 151.15 97.0422Z"
              fill="#3EC3A4"
            />
            <path
              d="M198.03 109.047C189.288 114.392 184.845 124.76 186.982 134.844L187.899 139.176C188.751 143.197 191.816 146.185 195.546 147.132C194.326 148.095 192.875 148.797 191.253 149.14C185.609 150.336 180.068 146.732 178.872 141.088L177.954 136.756C175.818 126.672 180.255 116.305 189.003 110.959C195.578 106.937 198.667 98.9406 196.516 91.5049C194.496 84.5105 188.233 79.668 181.19 79.2141C182.874 78.3297 184.728 77.7181 186.699 77.4337C195.091 76.221 203.194 81.4468 205.548 89.5914C207.7 97.0274 204.606 105.025 198.03 109.047Z"
              fill="#3EC3A4"
            />
            <path
              d="M201.986 177.532C200.766 178.494 199.315 179.196 197.693 179.54C192.049 180.736 186.508 177.132 185.312 171.488L185.294 171.401C184.099 165.763 187.702 160.216 193.346 159.021C194.968 158.677 196.579 158.73 198.084 159.115C195.06 161.5 193.47 165.473 194.321 169.489L194.339 169.576C195.191 173.597 198.256 176.584 201.986 177.532Z"
              fill="#3EC3A4"
            />
            <path
              d="M148.623 155.257C142.852 158.193 135.792 155.894 132.856 150.122L130.601 145.689C125.354 135.374 127.156 122.842 135.086 114.506C141.05 108.235 142.078 98.6594 137.584 91.2201C132.664 83.0741 122.357 79.7608 113.608 83.5128C104.353 87.4767 99.6639 98.0021 102.926 107.465C103.217 108.311 103.574 109.149 103.984 109.956C106.92 115.727 104.621 122.787 98.8493 125.723C93.0776 128.659 86.0184 126.36 83.0824 120.588C82.1824 118.819 81.3997 116.974 80.7559 115.107C73.5121 94.0903 83.8807 70.7432 104.364 61.9607C123.809 53.6206 146.721 60.987 157.658 79.0957C167.598 95.5546 165.304 116.761 152.078 130.667C150.984 131.818 150.753 133.581 151.503 135.057L153.758 139.49C156.694 145.262 154.395 152.321 148.623 155.257Z"
              fill="#F8AC19"
            />
            <path
              d="M164.441 186.353C158.67 189.289 151.61 186.99 148.674 181.218L148.63 181.132C145.694 175.36 147.993 168.301 153.765 165.365C159.537 162.429 166.596 164.728 169.532 170.5L169.576 170.586C172.512 176.358 170.213 183.417 164.441 186.353Z"
              fill="#F8AC19"
            />
            <path
              d="M89.9941 110.409C90.6356 112.277 91.421 114.118 92.3212 115.888C94.4136 120.001 98.5995 122.353 102.921 122.297C101.878 123.695 100.508 124.878 98.8483 125.722C93.08 128.657 86.0187 126.361 83.0819 120.588C82.1817 118.818 81.4014 116.975 80.7598 115.106C73.511 94.0875 83.8837 70.741 104.365 61.9586C105.099 61.6443 105.838 61.3536 106.583 61.0868C90.8523 71.691 83.6327 91.9484 89.9941 110.409Z"
              fill="#FFB31F"
            />
            <path
              d="M144.324 109.805C136.395 118.142 134.591 130.677 139.838 140.992L142.092 145.423C144.185 149.537 148.376 151.886 152.698 151.83C151.655 153.228 150.285 154.411 148.625 155.255C142.852 158.192 135.795 155.894 132.858 150.121L130.604 145.689C125.357 135.374 127.156 122.842 135.09 114.502C141.052 108.23 142.078 98.6599 137.584 91.2212C133.361 84.223 125.162 80.7911 117.391 82.3458C118.961 80.8968 120.794 79.695 122.849 78.814C131.597 75.0604 141.903 78.373 146.824 86.5213C151.317 93.9602 150.286 103.532 144.324 109.805Z"
              fill="#FFB31F"
            />
            <path
              d="M168.515 182.926C167.472 184.324 166.103 185.507 164.443 186.351C158.669 189.288 151.613 186.99 148.676 181.217L148.631 181.128C145.697 175.36 147.992 168.298 153.765 165.362C155.425 164.517 157.188 164.107 158.932 164.087C156.345 167.552 155.775 172.323 157.865 176.431L157.91 176.52C160.002 180.633 164.194 182.982 168.515 182.926Z"
              fill="#FFB31F"
            />
          </g>
          <defs>
            <clipPath id="clip0_3870_5205">
              <rect
                width="194.925"
                height="194.925"
                fill="white"
                transform="translate(0 88.3782) rotate(-26.9618)"
              />
            </clipPath>
          </defs>
        </svg>
      </section>

      <button className="custom-black-button mt-6 block mx-auto w-[189px] h-[51px] bg-[#4D1435] rounded-[50px] xl:mt-[60px] xl:w-[390px] xl:h-[77px]">
        <Link
          className="h-full w-full rounded-[50px] flex justify-center items-center gap-3.5 xl:px-[60px] xl:py-6 "
          href="/faq"
        >
          <span className="text-base font-bold leading-[19.2px] text-white custom-button-icon xl:text-2xl xl:leading-[28.8px] ">
            See All FAQs
          </span>

          <svg
            className="custom-button-icon w-4 h-4 xl:w-6 xl:h-6"
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
        </Link>
      </button>
    </div>
  );
};

export default FaqContainer;
