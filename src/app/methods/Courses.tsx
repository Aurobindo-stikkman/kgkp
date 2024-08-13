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
import footSteps1 from "./assets/footStep1.png";
import footSteps2 from "./assets/footStep2.png";
import footSteps3 from "./assets/footSteps3.png";
import footSteps4 from "./assets/footSteps4.png";
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

  const openModal = (number: number, image: StaticImageData) => {
    setContent(number);
    setImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setContent(null);
    setImage(null);
    setModalOpen(false);
  };

  return (
    <section className="mt-9 mb-[52px]">
      <section className="mx-[65px] text-[28px] font-[700] leading-[36.4px] text-[#1A2434] text-center ">
        The KGKP Path to Genius
      </section>

      <section className="mx-4 mt-11 grid ">
        {/* First section */}
        <section className="flex flex-col gap-8 relative ">
          <Image
            src={course1}
            alt="course 1"
            className="h-[330px] self-center "
          />
          <div className="shadow-md rounded-[20px] bg-[#edf7f5] overflow-hidden ">
            <section className="relative">
              <Image
                src={vector83}
                alt="Vector 83"
                className="w-full object-cover h-[70px] z-0 "
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
          </div>

          <Image
            src={footSteps1}
            alt="Foot Steps"
            className="absolute bottom-[-28%] left-[40px] z-10 "
          />
        </section>

        {/* second section */}
        <section className="flex flex-col gap-8 relative mt-[126px] ">
          <Image
            src={course2}
            alt="course 1"
            className="h-[330px] self-center "
          />
          <div className="shadow-md rounded-[20px] bg-[#F6E2D799] overflow-hidden ">
            <section className="relative">
              <Image
                src={vector84}
                alt="Vector 84"
                className="w-full object-cover h-[70px] z-0 "
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
          </div>
          <Image
            src={footSteps2}
            alt="Foot Steps 2"
            className="absolute bottom-[-28%] left-[35px]"
          />
        </section>

        {/* thried section */}
        <section className="flex flex-col gap-8 relative mt-[126px] ">
          <Image
            src={course3}
            alt="course 3"
            className="h-[330px] self-center "
          />
          <div className="shadow-md rounded-[20px] bg-[#F3E0A399] overflow-hidden ">
            <section className="relative">
              <Image
                src={vector85}
                alt="Vector 85"
                className="w-full object-cover h-[70px] z-0 "
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
                  onClick={() => openModal(3, course1)}
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
          </div>
          <Image
            src={footSteps3}
            alt="Foot steps 3"
            className="absolute bottom-[-150px] left-[35px]"
          />
        </section>

        {/* fourth section */}
        <section className="flex flex-col gap-8 relative mt-[126px] ">
          <Image
            src={course4}
            alt="course 4"
            className="h-[330px] self-center "
          />
          <div className="shadow-md rounded-[20px] bg-[#D1CCF366] overflow-hidden ">
            <section className="relative">
              <Image
                src={vector86}
                alt="Vector 86"
                className="w-full object-cover h-[70px] z-0 "
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
                  onClick={() => openModal(4, course2)}
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
          </div>
          <Image
            src={footSteps4}
            alt="Foot steps 4"
            className="absolute bottom-[-150px] left-[35px]"
          />
        </section>

        <Image
          src={course2}
          alt="course 1"
          className="h-[330px] mt-[126px] self-center justify-self-center "
        />

        <section className="mt-8 text-[28px] font-[700] leading-[36.4px] text-center text-[#4D1435] mx-auto">
          The KGKP Guarantee:
        </section>

        <section className="text-[28px] mt-4 font-[700] leading-[39.2px] text-[#4D1435] text-center mx-[50px] ">
          A Genius Ready for the World!
        </section>

        <section className="mt-6 mx-6 text-[14px] font-[500] leading-[19.6px] text-[#1A2434] text-center ">
          When courses are sincerely completed from the pre-pregnancy stage or
          early childhood till the child is 15 years of age.
        </section>

        <section className="mt-4 mx-6 text-[14px] font-[500] leading-[19.6px] text-[#1A2434] text-center ">
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
