import Image from "next/image";

import ListingFAQ from "@/app/components/ListingFAQ";
import arrowIcon from "../hero/icon-arrow-right.svg";
import chalkStroke from "../Chalk Stroke.png";
import questionMark from "./question-mark 1.svg";

interface IData {
  q: string;
  ans: string | JSX.Element;
}

interface IFaq {
  [key: string]: IData[];
}

const FaqSection = () => {
  const obj: IFaq = {
    generalInfo: [
      {
        q: "1.	What is the Kaushalya Genius Kid Program (KGKP)?",
        ans: `The Kaushalya Genius Kid Program (KGKP) is a unique online program designed to make every child a genius. "Kaushalya" means an expert or genius whose body, mind, and spirit are perfectly aligned. The programme is inspired by the Bhagavad Gita's teaching that says “ yogah karmasu kaushalam ” implies "yoga is excellence in action," KGKP helps children achieve excellence by aligning their body, mind, and spirit with their actions.`,
      },
      {
        q: "2.	What age groups is the KGKP suitable for?",
        ans: (
          <>
            <div>
              The Kaushalya Genius Kid Program (KGKP) is suitable for various
              age groups, starting with parents and extending to children up to
              15 years old.
            </div>
            <div className="mt-5">
              The first two programs are designed for parents. Thereafter, The
              program is divided into two segments for children. The first
              segment is for infants, babies, toddlers, and preschoolers aged
              0-6 years. The second segment is for primary, middle, and high
              schoolers aged 6-15 years.
            </div>
          </>
        ),
      },
      {
        q: "3.	How much time do I need to commit to the courses each day?",
        ans: (
          <div>
            The time commitment for the Kaushalya Genius Kid Program (KGKP)
            varies by programs:
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
        q: "4. How do I evaluate my child’s progress?",
        ans: `For children aged 0-6 years, you can evaluate your child's growth through problem-solving activities, with guidance provided at appropriate stages in the program.For children aged 6-15 years, progress is generally reflected in their behaviour and lifestyle. You also receive guidance on how to observe specific improvements over time.`,
      },
      {
        q: "5. Are there any parent-expert conferences or feedback sessions?",
        ans: `Yes, the experts conduct an annual review session for each child with their parents. This review assesses the implementation of the KGKP, evaluates the program's impact, and provides parents with advice on how to achieve improved results moving forward.`,
      },
      {
        q: "6. How do I enrol my child in the program?",
        ans: `To enrol your child in the program you have to select the first course of the current age of your child. After selecting the course, you have to make the payment and get enrolled. `,
      },
    ],
  };

  return (
    <>
      <div className="py-[52px] lg:py-[124px] lg:relative">
        <section className="text-[20px] font-[700] leading-[24px] mx-auto text-[#1A2434] text-center lg:text-[32px] lg:leading-[38.4px]">
          <span className="relative">
            <span className="z-10 relative">Frequently Asked Questions</span>
            <Image
              src={chalkStroke}
              alt="Chalk Icon"
              className="absolute w-[235.08px] h-[60.94px] -top-1 right-0 z-0 lg:w-[250.4px] lg:h-[93.76px]"
            />
          </span>
        </section>

        <section className="mt-8 px-4 h-auto mx-auto lg:mt-[52px] xl:w-[1280px]">
          <ListingFAQ data={obj[Object.keys(obj)[0]]} />
        </section>

        <section className="px-7 py-4 mt-6 rounded-[50px] bg-[#4D1435] mx-auto w-[189px] flex gap-[14px] justify-center lg:mt-[60px] lg:px-20 lg:py-6 lg:w-[345px]">
          <section className="text-white text-[16px] font-[700] leading-[19.2px] lg:text-[23px] lg:leading-[28.8px] ">
            See All FAQs
          </section>
          <Image
            src={arrowIcon}
            alt="Arrow Icon"
            className="w-4 h-4 lg:w-6 lg:h-6"
          />
        </section>

        <Image
          src={questionMark}
          alt="Question Mark"
          className="hidden lg:block absolute left-0 top-0"
        />
      </div>
    </>
  );
};

export default FaqSection;
