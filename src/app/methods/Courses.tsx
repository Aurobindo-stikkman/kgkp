"use client";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";

import vector83 from "./assets/Vector 83.png";
import vector84 from "./assets/Vector 84.png";
import vector85 from "./assets/Vector 85.png";
import vector86 from "./assets/Vector 86.png";
import arrowIcon from "./assets/icon-arrow-right.svg";

import course1 from "./assets/course-1.png";
import course2 from "./assets/course-2.png";
import course3 from "./assets/course-3.png";
import course4 from "./assets/course-4.png";
import course5 from "./assets/course-5.png";
import footSteps1 from "./assets/footStep1.png";
import footSteps2 from "./assets/footStep2.png";
import footSteps3 from "./assets/footSteps3.png";
import footSteps4 from "./assets/footSteps4.png";

import longfootSteps1 from "./assets/longfootStep1.png";
import longfootSteps2 from "./assets/longfootStep2.png";
import longfootSteps3 from "./assets/longfootStep3.png";
import longfootSteps4 from "./assets/longfootStep4.png";
import singleStep from "./assets/singleStep.png";

import ModalView from "./ModalView";

import { Course } from "./interface";

const arr: Course[] = [
  {
    heading: "Pre-pregnancy (Beej Sanskar)",
    description:
      "3 monthly courses to prepare your body, mind and spirit to receive the highest quality of soul during conception.",
    programOverview: [
      {
        point:
          "Focus on the relationship between the would-be parents based on the 5 step matrix of Kamasutra (Sex, Love, Friendliness, Compassion, & Devotion).",
      },
    ],
    benefits: [
      {
        point:
          "Receive the highest quality of soul in the womb of the mother at the time of conception.",
      },
    ],
    Commitment: [],
    Note: [],
    icon: course1,
  },
  {
    heading: "Pregnancy (Garbh Sanskar)",
    description:
      "7 monthly courses to provide the ideal environment for foundational programming of the foetus at the cellular level in body, mind and spirit.",
    programOverview: [
      {
        point:
          "Optimal daily routine to create ideal environment for the growing foetus",
      },
      {
        point: "Subconscious mind programming of the growing foetus",
      },
      {
        point: "Mental Well-Being and Stress Management for pregnant mother",
      },
      {
        point: "Preparing for Childbirth",
      },
    ],
    benefits: [
      {
        point: "Ensures optimal health for mother and baby",
      },
      {
        point: "Reduces pregnancy-related stress",
      },
      {
        point: "Prepares parents for childbirth and early parenting",
      },
    ],
    Commitment: [],
    Note: [],
    icon: course2,
  },
  {
    heading: "Birth to 6 Years (Phase 1 to 7)",
    description:
      "Monthly courses to raise the IQ of your child dramatically and sow the seeds of EQ & SQ",
    programOverview: [
      {
        point: "Customised activities based on Ridge Analysis report",
      },
      {
        point: "Milestone Acceleration and Assessment",
      },
      {
        point: "Reading program",
      },
      {
        point: "Math program",
      },
      {
        point: "Encyclopaedic Knowledge Program",
      },
      {
        point: "Focus on EQ & SQ from age 3 to 6 year",
      },
    ],
    benefits: [
      {
        point: "Every child will be able to:",
        sub: [
          {
            point: "Read several small books and a newspaper",
          },
          {
            point: "Perform elementary math typical of standard 3 or 4",
          },
          {
            point: "Identify flags of 185+ countries",
          },
          {
            point: "Have encyclopedic knowledge like that of a 17 year old",
          },
        ],
      },
      {
        point: "Parents will be able to:",
        sub: [
          {
            point:
              "Know your child’s talent profile and personality, & plan activities accordingly",
          },
        ],
      },
    ],
    Commitment: [
      {
        point: "72 Courses from birth to 6 years (1 Course per month)",
      },
      {
        point: "30-45 minutes everyday",
      },
      {
        point: "Guidance for parents to do activities with Child",
      },
      {
        point: "Screen time for child: Less than 10 minutes everyday",
      },
    ],
    Note: [
      {
        point: "Screen time for child: Less than 10 minutes everyday",
      },
      {
        point: "Guidance for parents to do activities with Child",
      },
    ],
    icon: course3,
  },
  {
    heading: "6 to 15 Years (Phase 8 to 11)",
    description: "Courses designed to maximise IQ, EQ, and SQ",
    programOverview: [
      {
        point:
          "Customised Activity Plan based on Ridge Analysis and Multiple Intelligence Matrix",
        sub: [
          {
            point: "Guidance for higher studies & career choices",
          },
          {
            point: "Encyclopaedic Knowledge Program",
          },
        ],
      },
      {
        point: "Pre-recorded Sessions to enhance EQ & SQ",
        sub: [
          {
            point:
              "Sessions on culture, spirituality, patriotism, health, communication, ethics, gender sensitisation, handling relationships, ashtanga yoga, emotional intelligence, handling failure, time management, prioritisation, creativity, innovation, goal setting, generation gap, interpersonal skills & much more.",
          },
          {
            point: "Storytelling with life lessons",
          },
          {
            point: "Values Internalization Activities",
          },
          {
            point: "Personality Developmen",
          },
          {
            point: "Lean Life Management",
          },
          {
            point: "Public Speaking",
          },
        ],
      },
    ],
    benefits: [
      {
        point: "Intellectually Intelligent",
      },
      {
        point: "Emotionally Stable",
      },
      {
        point: "Spiritually Grounded",
      },
    ],
    Commitment: [
      {
        point: "108 monthly Courses from 7 years to 15 years",
      },
      {
        point: "5 minutes every day & 30 to 40 minutes twice a week",
      },
      {
        point: "Child to do courses with parental accompaniment",
      },
    ],
    Note: [],
    icon: course4,
  },
];

const Courses = () => {
  const [content, setContent] = useState<number | null>(null);
  const [image, setImage] = useState<StaticImageData | null>(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = (number: number, image?: StaticImageData) => {
    setContent(number);
    if (image) setImage(image);
    else setImage(arr[number - 1].icon);
    setModalOpen(true);
  };

  const closeModal = () => {
    setContent(null);
    setImage(null);
    setModalOpen(false);
  };

  return (
    <section className="mt-9 mb-[52px] lg:mt-[143px] ">
      <section className="mx-[65px] text-[28px] font-[700] leading-[36.4px] text-[#1A2434] text-center lg:text-[42px] lg:leading-[50.4px] ">
        The KGKP Path to Genius
      </section>

      <section className="hidden mt-6 w-[513px] text-[18px] font-[500] leading-[21.6px] text-center mx-auto text-[#1A2434] lg:block ">
        At birth your child is ready for KGK Program. In a few years, a genius
        will be ready for the world.
      </section>

      <section className="mx-4 mt-11 grid xl:mt-20 ">
        {/* First section */}
        <section className="flex flex-col gap-8 items-center xl:flex-row xl:justify-center xl:gap-[65px] xl:relative">
          <section className="h-[330px] w-fit self-center xl:order-2 xl:basis-[55%]">
            <Image
              src={course1}
              alt="course 1"
              className="h-full w-full xl:w-[240px]"
            />
          </section>
          <section className="w-[330px] xl:order-1 xl:basis-[45%] xl:flex xl:justify-end">
            <div className="h-full w-full relative bg-[#edf7f5] shadow-md rounded-[20px] xl:w-[330px] ">
              <section className="relative">
                <Image
                  src={vector83}
                  alt="Vector 83"
                  className="w-full object-cover h-[70px] z-0 rounded-tl-[20px] rounded-tr-[20px] "
                />
                <div className="text-[16px] font-[600] leading-[19.2px] absolute top-6 left-4 text-white">
                  Pre-pregnancy (Beej Sanskar)
                </div>
              </section>
              <section className="px-5 pt-7 pb-5">
                <div className="text-[14px] font-[500] leading-[16.8px] text-[#1A2434] ">
                  3 Courses to prepare your body, mind and spirit to receive the
                  highest quality of soul during conception.
                </div>
                <section className="mt-4 flex gap-[10px] justify-end items-center">
                  <div
                    onClick={() => openModal(1, course1)}
                    className="text-[14px] font-[600] leading-[16.94px] text-[#1A2434]"
                  >
                    Learn More
                  </div>
                  <Image
                    src={arrowIcon}
                    alt="Arrow Icon right"
                    className="w-4 h-4 "
                  />
                </section>
              </section>
              <Image
                src={footSteps1}
                alt="Foot Steps"
                className="absolute bottom-[-78%] left-[40px] z-10 xl:hidden "
              />
              <Image
                src={longfootSteps1}
                alt="Long Foot Step1"
                className="hidden xl:block xl:absolute xl:w-[351.13px] xl:h-[479.18px] top-[30%] right-[-200%] "
              />
            </div>
          </section>
        </section>

        {/* second section */}
        <section className="flex flex-col gap-8 items-center mt-[126px] xl:flex-row xl:justify-center xl:gap-[65px] xl:relative">
          <section className="h-[330px] w-fit self-center xl:basis-[45%] xl:flex xl:justify-end">
            <Image
              src={course2}
              alt="course 2"
              className="h-full w-full xl:w-[240px]"
            />
          </section>
          <section className="w-[330px] xl:basis-[55%]">
            <div className="h-full w-full relative bg-[#F6E2D799] shadow-md rounded-[20px] xl:w-[330px]">
              <section className="relative">
                <Image
                  src={vector84}
                  alt="Vector 84"
                  className="w-full object-cover h-[70px] z-0 rounded-tl-[20px] rounded-tr-[20px]"
                />
                <div className="text-[16px] font-[600] leading-[19.2px] absolute top-6 left-4 text-white">
                  Pre-pregnancy (Beej Sanskar)
                </div>
              </section>
              <section className="px-5 pt-7 pb-5">
                <div className="text-[14px] font-[500] leading-[16.8px] text-[#1A2434] ">
                  3 Courses to prepare your body, mind and spirit to receive the
                  highest quality of soul during conception.
                </div>
                <section className="mt-4 flex gap-[10px] justify-end items-center">
                  <div
                    onClick={() => openModal(2, course2)}
                    className="text-[14px] font-[600] leading-[16.94px] text-[#1A2434]"
                  >
                    Learn More
                  </div>
                  <Image
                    src={arrowIcon}
                    alt="Arrow Icon right"
                    className="w-4 h-4 "
                  />
                </section>
              </section>
              <Image
                src={footSteps2}
                alt="Foot Steps 2"
                className="absolute bottom-[-78%] left-[35px] xl:hidden"
              />
              <Image
                src={longfootSteps2}
                alt="Long Foot Steps 2"
                className="hidden xl:block xl:absolute xl:w-[351.13px] xl:h-[479.18px] top-[40%] left-[-175%] "
              />
            </div>
          </section>
        </section>

        {/* third section */}
        <section className="flex flex-col gap-8 items-center mt-[126px] xl:flex-row xl:justify-center xl:gap-[65px] xl:relative">
          <section className="h-[330px] w-fit self-center xl:order-2 xl:basis-[55%]">
            <Image
              src={course3}
              alt="course 3"
              className="h-full w-full xl:w-[385px]"
            />
          </section>
          <section className="w-[330px] xl:order-1 xl:basis-[45%] xl:flex xl:justify-end">
            <div className="h-full w-full relative bg-[#F3E0A399] shadow-md rounded-[20px] xl:w-[330px] ">
              <section className="relative">
                <Image
                  src={vector85}
                  alt="Vector 85"
                  className="w-full object-cover h-[70px] z-0 rounded-tl-[20px] rounded-tr-[20px]"
                />
                <div className="text-[16px] font-[600] leading-[19.2px] absolute top-6 left-4 text-white">
                  Pre-pregnancy (Beej Sanskar)
                </div>
              </section>
              <section className="px-5 pt-7 pb-5">
                <div className="text-[14px] font-[500] leading-[16.8px] text-[#1A2434] ">
                  3 Courses to prepare your body, mind and spirit to receive the
                  highest quality of soul during conception.
                </div>
                <section className="mt-4 flex gap-[10px] justify-end items-center">
                  <div
                    onClick={() => openModal(3, course3)}
                    className="text-[14px] font-[600] leading-[16.94px] text-[#1A2434]"
                  >
                    Learn More
                  </div>
                  <Image
                    src={arrowIcon}
                    alt="Arrow Icon right"
                    className="w-4 h-4 "
                  />
                </section>
              </section>
              <Image
                src={footSteps3}
                alt="Foot steps 3"
                className="absolute bottom-[-150px] left-[35px] xl:hidden"
              />
              <Image
                src={longfootSteps3}
                alt="Long Foot Step1"
                className="hidden xl:block xl:absolute xl:w-[286.13px] xl:h-[514.08px] top-[30%] right-[-230%] "
              />
            </div>
          </section>
        </section>

        {/* fourth section */}
        <section className="flex flex-col gap-8 items-center mt-[126px] xl:flex-row xl:justify-center xl:gap-[65px]">
          <section className="h-[330px] w-fit self-center xl:basis-1/2 xl:flex xl:justify-end">
            <Image
              src={course4}
              alt="course 4"
              className="h-full w-full xl:w-[385px]"
            />
          </section>
          <section className="w-[330px] xl:basis-1/2">
            <div className="shadow-md rounded-[20px] bg-[#D1CCF366] relative w-[330px] ">
              <section className="relative">
                <Image
                  src={vector86}
                  alt="Vector 86"
                  className="w-full object-cover h-[70px] z-0 rounded-tl-[20px] rounded-tr-[20px]"
                />
                <div className="text-[16px] font-[600] leading-[19.2px] absolute top-6 left-4 text-white">
                  Pre-pregnancy (Beej Sanskar)
                </div>
              </section>
              <section className="px-5 pt-7 pb-5">
                <div className="text-[14px] font-[500] leading-[16.8px] text-[#1A2434] ">
                  3 Courses to prepare your body, mind and spirit to receive the
                  highest quality of soul during conception.
                </div>
                <section className="mt-4 flex gap-[10px] justify-end items-center">
                  <div
                    onClick={() => openModal(4, course4)}
                    className="text-[14px] font-[600] leading-[16.94px] text-[#1A2434]"
                  >
                    Learn More
                  </div>
                  <Image
                    src={arrowIcon}
                    alt="Arrow Icon right"
                    className="w-4 h-4 "
                  />
                </section>
              </section>
              <Image
                src={footSteps4}
                alt="Foot steps 4"
                className="absolute bottom-[-150px] left-[35px] xl:hidden"
              />
              <Image
                src={longfootSteps4}
                alt="Long Foot Steps 4"
                className="hidden xl:block xl:absolute xl:w-[286.13px] xl:h-[514.18px] top-[40%] left-[-215%] "
              />
            </div>
          </section>
        </section>

        <section className="h-[330px] mt-[126px] self-center justify-self-center relative ">
          <Image
            src={course5}
            alt="course 1"
            className="h-full w-full xl:w-[385px] "
          />
          <Image src={singleStep} alt="Single foot step" className="hidden xl:block absolute top-[49%] left-[-57%] " />
          <Image src={singleStep} alt="Single foot step" className="hidden xl:block absolute top-[55%] left-[-30%] " />
        </section>

        <section className="mt-8 text-[28px] font-[700] leading-[36.4px] text-center text-[#4D1435] mx-auto xl:text-[32px] xl:font-[800] xl:leading-[44.8px] ">
          The KGKP Guarantee:
        </section>

        <section className="text-[28px] mt-4 font-[700] leading-[39.2px] text-[#4D1435] text-center mx-[50px] xl:text-[32px] xl:font-[800] xl:leading-[44.8px] xl:mt-[6px]">
          A Genius Ready for the World!
        </section>

        <section className="mt-6 mx-6 text-[14px] font-[500] leading-[19.6px] text-[#1A2434] text-center md:mt-9 md:w-[428px] md:mx-auto">
          When courses are sincerely completed from the pre-pregnancy stage or
          early childhood till the child is 15 years of age.
        </section>

        <section className="mt-4 mx-6 text-[14px] font-[500] leading-[19.6px] text-[#1A2434] text-center md:font-[700] md:w-[320px] md:mx-auto">
          Note: Joining the KGKP at a later stage or not completing all courses
          as directed may result in proportionately reduced benefits
        </section>
      </section>

      {/* Modal */}
      {content && image && (
        <ModalView
          openModal={openModal}
          closeModal={closeModal}
          isModalOpen={isModalOpen}
          content={arr[content - 1]}
          pageNumber={content}
          image={image}
        />
      )}
    </section>
  );
};

export default Courses;
