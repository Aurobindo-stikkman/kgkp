import ListingFAQ from "@/app/components/ListingFAQ";
import Link from "next/link";
import React from "react";

interface IData {
  q: string;
  ans: string | JSX.Element;
}

interface IFaq {
  [key: string]: IData[];
}

const allFaqs: IFaq = {
  generalInfo: [
    {
      q: "What is the Kaushalya Genius Kid Program (KGKP)?",
      ans: `The Kaushalya Genius Kid Program (KGKP) is a unique online program designed to make every child a genius. "Kaushalya" means an expert or genius whose body, mind, and spirit are perfectly aligned. The programme is inspired by the Bhagavad Gita's teaching that says “ yogah karmasu kaushalam ” implies "yoga is excellence in action," KGKP helps children achieve excellence by aligning their body, mind, and spirit with their actions.`,
    },
    {
      q: "What age groups is the KGKP suitable for?",
      ans: (
        <>
          <div>
            The Kaushalya Genius Kid Program (KGKP) is suitable for various age
            groups, starting with parents and extending to children up to 15
            years old.
          </div>
          <div className="mt-5">
            The first two programs are designed for parents. Thereafter, The
            program is divided into two segments for children. The first segment
            is for infants, babies, toddlers, and preschoolers aged 0-6 years.
            The second segment is for primary, middle, and high schoolers aged
            6-15 years.
          </div>
        </>
      ),
    },
    {
      q: "How much time do I need to commit to the courses each day?",
      ans: (
        <div>
          The time commitment for the Kaushalya Genius Kid Program (KGKP) varies
          by programs:
          <ul className="list-disc list-inside pl-6">
            <li>
              <strong>Pre-Pregnancy and Pregnancy Program: </strong>
              About 2 hours each day.
            </li>
            <li>
              <strong>0-6 Years: </strong>
              <ul className="list-[circle] list-inside pl-6">
                <li>30-40 minutes per day for activities with your child.</li>
                <li>
                  About 10 minutes per day for the online reading, maths, and
                  encyclopaedic knowledge programs. This 10 minutes is divided
                  into several short sessions of about 20-60 seconds each.
                </li>
              </ul>
            </li>
            <li>
              <strong>6-15 Years: </strong>
              The sessions are pre-recorded and can be done at any time during
              the day or night, allowing for flexible scheduling.
            </li>
          </ul>
          This structure ensures that the program can fit into your daily
          routine effectively.
        </div>
      ),
    },
    {
      q: "How do I evaluate my child’s progress?",
      ans: `For children aged 0-6 years, you can evaluate your child's growth through problem-solving activities, with guidance provided at appropriate stages in the program.For children aged 6-15 years, progress is generally reflected in their behaviour and lifestyle. You also receive guidance on how to observe specific improvements over time.`,
    },
    {
      q: "Are there any parent-expert conferences or feedback sessions?",
      ans: `Yes, the experts conduct an annual review session for each child with their parents. This review assesses the implementation of the KGKP, evaluates the program's impact, and provides parents with advice on how to achieve improved results moving forward.`,
    },
    {
      q: "How do I enrol my child in the program?",
      ans: `To enrol your child in the program you have to select the first course of the current age of your child. After selecting the course, you have to make the payment and get enrolled. `,
    },
  ],
};

const Page = () => {
  return (
    <div className="py-[52px] mx-4 lg:px-10 xl:px-20 xl:mx-auto xl:pt-[149px] xl:pb-[124px] ">
      <div className="w-[278px] h-6 mx-auto text-xl font-bold leading-6 text-[#1A2434] text-center xl:w-auto xl:text-[32px] xl:leading-[38.4px] ">
        Frequently Asked Questions{" "}
        <span className="hidden xl:inline "> (FAQs)</span>
      </div>

      <section className="grid gap-4 mt-8 xl:mt-[52px] ">
        <ListingFAQ data={allFaqs[Object.keys(allFaqs)[0]]} />
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

export default Page;
