"use client";
import Image, { StaticImageData } from "next/image";
import { useState, useEffect, useRef } from "react";

import useInView from "../components/useInView";
import ModalView from "./ModalView";

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

import longfootSteps1 from "./assets/long-foot-1.png";
import longfootSteps2 from "./assets/long-foot-2.png";
import longfootSteps3 from "./assets/long-foot-3.png";
import longfootSteps4 from "./assets/long-foot-4.png";
import singleStep from "./assets/single-step.png";

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
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoaded2, setIsLoaded2] = useState(false);
  const [isLoaded3, setIsLoaded3] = useState(false);
  const [isLoaded4, setIsLoaded4] = useState(false);

  const sectionRef = useRef(null);
  const sectionRef2 = useRef(null);
  const sectionRef3 = useRef(null);
  const sectionRef4 = useRef(null);

  const isInView = useInView(sectionRef);
  const isInView2 = useInView(sectionRef2);
  const isInView3 = useInView(sectionRef3);
  const isInView4 = useInView(sectionRef4);

  useEffect(() => {
    if (isInView) setIsLoaded(true);
    if (isInView2) setIsLoaded2(true);
    if (isInView3) setIsLoaded3(true);
    if (isInView4) setIsLoaded4(true);
  }, [isInView, isInView2, isInView3, isInView4]);

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
      <section className="relative w-[229px] h-[72px] mx-auto text-[28px] font-[700] leading-[36.4px] text-[#1A2434] text-center lg:text-[42px] lg:w-[524px] lg:leading-[50.4px]">
        <span className="z-10 relative">The KGKP Path to Genius</span>
        <svg
          className="absolute w-[120.08px] h-auto left-[54%] top-[61px] translate-x-[-50%] z-0 lg:top-[10px] lg:w-[350.11px] lg:h-[83.76px] lg:left-[69%]"
          viewBox="0 0 345 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            fill="#FFB31F"
            stroke="transparent"
            strokeWidth="3"
            strokeLinecap="butt"
            d="M337.13 14.89C336.3 15.53 326.72 14.27 325.18 13.31C323.41 12.21 318.84 11.39 317.8 11.98C317.03 12.42 316.66 12.27 316.74 11.56C316.86 10.44 313.9 9.87001 312.76 10.8C312.42 11.08 311.03 10.8 309.67 10.17C307.85 9.33001 306.83 9.44001 305.76 10.61C304.74 11.72 304.15 11.81 303.77 10.91C302.96 8.98001 299.01 7.81001 297.23 8.97001C296.32 9.57001 295.71 9.56001 295.78 8.96001C295.94 7.53001 279.53 4.64001 265.83 3.69001C264.38 3.59001 260.72 3.16001 257.69 2.74001C248.78 1.50001 246.18 1.69001 246.57 3.55001C246.86 4.95001 246.64 4.89001 244.94 3.08001C243.86 1.93001 242.78 1.15001 242.54 1.34001C242.3 1.54001 239.36 1.37001 236.01 0.980012C232.66 0.590012 228.99 0.700012 227.86 1.23001C226.5 1.87001 225.66 1.80001 225.37 1.04001C225.07 0.250013 224.56 0.140012 223.75 0.670012C223.1 1.10001 221.75 1.07001 220.74 0.610013C219.54 0.0600126 218.85 0.270013 218.75 1.20001C218.6 2.59001 216.72 2.63001 212.68 1.33001C210.95 0.770012 210.73 1.02001 211.05 3.13001C211.41 5.49001 211.37 5.50001 209.93 3.49001C208.87 2.00001 208.14 1.64001 207.39 2.25001C206.65 2.86001 206.21 2.76001 205.89 1.90001C205.57 1.07001 204.55 1.00001 202.59 1.68001C200.89 2.27001 198.79 2.21001 197.35 1.54001C195.56 0.710013 194.9 0.800012 194.78 1.90001C194.67 2.87001 193.8 3.17001 192.25 2.77001C190.02 2.20001 188.58 2.21001 178.75 2.83001C176.54 2.97001 173.75 3.02001 172.54 2.94001C169.38 2.73001 167.18 3.34001 167.06 4.45001C167 4.98001 165.92 4.91001 164.64 4.30001C162.1 3.08001 156.36 2.81001 145.49 3.39001C132.38 4.10001 128.58 4.53001 123.98 5.82001C121.47 6.53001 119.13 6.97001 118.78 6.80001C118.43 6.63001 118.1 6.94001 118.04 7.48001C117.98 8.02001 117.17 8.30001 116.24 8.09001C115.31 7.88001 111.96 8.48001 108.79 9.41001C105.62 10.34 98.19 11.67 92.27 12.35C75.84 14.25 60.05 16.75 59.43 17.54C59.12 17.93 57.77 18.31 56.42 18.38C54.33 18.49 53.91 19.02 53.59 21.96C53.38 23.85 52.81 25.31 52.33 25.2C51.82 25.09 51.8 24.01 52.27 22.64C53.06 20.37 52.99 20.29 50.5 20.79C49.07 21.08 47.26 21.76 46.47 22.31C45.68 22.86 43.41 23.51 41.44 23.76C39.47 24.01 36.04 24.89 33.82 25.72C31.6 26.55 28.66 27.08 27.27 26.89C25.89 26.7 24.72 26.89 24.67 27.3C24.62 27.71 24.03 27.66 23.35 27.19C22.56 26.64 22.05 26.92 21.94 27.96C21.84 28.86 21.28 29.39 20.7 29.15C19.52 28.66 16.75 29.05 14.63 30.01C13.86 30.36 12.62 30.8 11.87 30.99C11.12 31.18 8.27003 32.6 5.54003 34.16C0.930031 36.79 -0.619969 38.87 0.900031 40.41C2.07003 41.59 7.57003 39.18 8.60003 37.03C9.16003 35.86 9.81003 34.94 10.05 34.99C10.28 35.04 10.18 35.7 9.81003 36.46C8.92003 38.31 10.07 38.42 13.38 36.8C14.89 36.06 16.42 35.75 16.78 36.11C17.13 36.47 17.47 36.34 17.53 35.83C17.59 35.32 20.73 34.78 24.52 34.64C28.31 34.5 31.86 34.11 32.42 33.79C32.98 33.46 34.77 33.4 36.42 33.65C38.06 33.9 39.92 33.81 40.55 33.45C41.18 33.09 42.5 33.28 43.49 33.89C44.64 34.59 45.61 34.56 46.17 33.81C46.88 32.86 47.35 32.94 48.64 34.24C50 35.61 50.53 35.59 52.22 34.09C53.92 32.59 54.18 32.58 54.02 34.02C53.87 35.36 54.33 35.68 56.28 35.57C57.63 35.5 58.96 35.18 59.23 34.87C60.45 33.51 62.89 33.75 62.73 35.21C62.63 36.08 63.01 36.52 63.62 36.25C64.2 35.99 65.98 35.98 67.57 36.22C69.16 36.46 71.09 36.26 71.84 35.76C72.92 35.05 73.28 35.15 73.52 36.23C73.7 37.06 73.93 36.88 74.1 35.78C74.3 34.45 74.83 34.2 76.04 34.85C77.09 35.42 77.54 35.32 77.26 34.57C76.97 33.82 77.45 33.74 78.58 34.35C79.84 35.03 80.56 34.8 81.08 33.54C81.48 32.56 82.17 32.13 82.61 32.57C83.04 33.01 84.04 32.67 84.81 31.81C86.12 30.37 86.21 30.38 86.06 31.99C85.97 32.95 86.28 33.81 86.76 33.92C87.23 34.03 87.61 33.77 87.6 33.35C87.59 32.93 87.72 31.73 87.9 30.69C88.21 28.81 88.23 28.82 89.27 31C89.93 32.37 90.39 32.72 90.5 31.91C90.61 31.1 91.25 30.97 92.21 31.56C93.1 32.1 94.28 31.97 95.01 31.24C95.7 30.55 96.83 30.1 97.51 30.26C98.22 30.42 98.55 30 98.27 29.27C97.93 28.37 98.46 28.36 100.1 29.23C102.02 30.24 102.36 30.16 102.06 28.74C101.79 27.43 102.06 27.25 103.24 27.96C104.12 28.5 105.31 28.36 106.03 27.64C106.72 26.95 108.02 26.54 108.91 26.74C109.8 26.94 110.58 26.66 110.64 26.11C110.7 25.57 111.55 25.3 112.53 25.52C113.54 25.75 114.12 25.42 113.87 24.77C113.58 24.02 114.19 24.02 115.59 24.76C116.86 25.43 117.8 25.48 117.86 24.89C117.92 24.34 118.93 24.22 120.1 24.64C121.27 25.05 122.27 24.99 122.33 24.5C122.38 24.01 122.91 23.81 123.49 24.06C124.56 24.52 127.83 23.9 132.6 22.34C134.03 21.87 135.74 21.61 136.4 21.76C137.06 21.91 138.35 20.83 139.27 19.36C140.27 17.76 141.62 16.85 142.64 17.08C143.58 17.29 144.39 17.06 144.44 16.57C144.59 15.25 150.17 14.53 150.94 15.73C152 17.4 156.11 16.91 156.78 15.04C157.29 13.62 158.2 13.5 161.83 14.39C164.26 14.99 167.33 15.24 168.64 14.96C171.18 14.42 183.75 14.86 186.56 15.6C187.49 15.84 188.78 15.68 189.45 15.25C190.11 14.81 191.13 14.76 191.72 15.13C192.3 15.5 194.1 15.49 195.71 15.1C197.32 14.71 200.18 14.74 202.07 15.17C204.63 15.74 205.9 15.46 207.08 14.06C208.63 12.2 208.67 12.21 209.69 14.39C210.59 16.3 211 16.49 212.68 15.74C213.76 15.27 215 15.24 215.43 15.68C215.87 16.12 216.85 16.08 217.61 15.58C218.37 15.08 219.51 15.04 220.15 15.48C220.87 15.98 221.61 15.51 222.08 14.25C222.84 12.25 222.87 12.25 223.92 14.42C224.85 16.35 225.01 16.41 225.17 14.95C225.35 13.34 226.7 13.14 229.9 14.24C230.72 14.52 231.44 14.28 231.51 13.7C231.57 13.12 232.57 12.86 233.73 13.12C234.89 13.38 236.16 13.16 236.55 12.63C237.07 11.93 237.4 12.02 237.75 12.93C238.02 13.62 238.89 14.06 239.69 13.89C241.45 13.53 241.07 10.93 238.83 7.95001C237.96 6.80001 237.64 5.94001 238.11 6.05001C239.34 6.33001 242.47 10.63 242.33 11.86C242.26 12.49 243.52 12.99 245.51 13.13C247.32 13.26 250.45 13.77 252.46 14.26C254.47 14.76 256.17 14.73 256.23 14.2C256.29 13.67 258.86 13.8 261.95 14.49C265.03 15.18 267.95 15.57 268.42 15.36C268.89 15.15 271.18 15.17 273.51 15.41C280.86 16.17 282.77 16.16 283.77 15.34C284.36 14.86 285.47 15.05 286.61 15.84C287.64 16.55 288.75 16.91 289.09 16.63C289.43 16.36 291.55 16.39 293.82 16.71C303.91 18.12 313.52 18.81 314.52 18.19C315.12 17.82 316.37 17.89 317.29 18.35C320.87 20.13 338.05 24.15 341.1 23.92C343.81 23.71 344.37 23.24 344.69 20.87C345.02 18.47 344.78 18.07 343.06 18.06C341.94 18.06 340.52 17.22 339.85 16.17C338.46 13.98 338.31 13.92 337.09 14.87L337.13 14.89ZM233.06 7.92001C233 8.46001 232.54 8.82001 232.04 8.70001C231.54 8.59001 231.41 8.10001 231.77 7.63001C232.12 7.15001 232.58 6.80001 232.79 6.85001C233 6.90001 233.12 7.38001 233.06 7.92001ZM235.01 11.12C234.02 11.93 233.46 10.25 234.33 9.08001C234.99 8.19001 235.19 8.24001 235.37 9.31001C235.49 10.04 235.33 10.86 235.01 11.12ZM195.15 6.53001C195.09 7.07001 194.63 7.43001 194.13 7.31001C193.63 7.20001 193.5 6.71001 193.86 6.24001C194.21 5.76001 194.67 5.41001 194.88 5.46001C195.09 5.51001 195.21 5.99001 195.15 6.53001ZM139.19 16.3C139.13 16.84 138.67 17.2 138.17 17.08C137.67 16.97 137.54 16.48 137.9 16.01C138.25 15.53 138.71 15.18 138.92 15.23C139.13 15.28 139.25 15.76 139.19 16.3ZM137.89 20.06C137.83 20.6 137.39 20.96 136.92 20.86C136.45 20.75 136.11 20.22 136.17 19.68C136.23 19.14 136.67 18.78 137.14 18.88C137.61 18.99 137.95 19.52 137.89 20.06ZM128.01 21.34C127.89 22.38 126.19 22.45 125.8 21.43C125.56 20.81 125.98 20.44 126.72 20.61C127.46 20.78 128.04 21.11 128.02 21.35L128.01 21.34ZM63.7 26.6C63.56 27.89 62.44 28.51 61.67 27.74C60.85 26.91 61.81 25.34 62.98 25.6C63.43 25.7 63.75 26.15 63.7 26.61V26.6ZM78.69 31.13C78.34 31.61 78.72 32.15 79.54 32.33C81.69 32.81 80.68 33.21 77.36 33.19C74.06 33.17 73.69 31.85 76.73 30.91C79.39 30.09 79.46 30.1 78.7 31.13H78.69ZM54.39 30.76C54.33 31.3 54.11 31.71 53.9 31.66C53.69 31.61 53.33 31.08 53.09 30.47C52.85 29.86 53.08 29.45 53.58 29.57C54.08 29.68 54.45 30.22 54.39 30.76Z"
          />
        </svg>
      </section>

      <section
        ref={sectionRef}
        className="hidden mt-6 w-[513px] text-[18px] font-[500] leading-[21.6px] text-center mx-auto text-[#1A2434] lg:block "
      >
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
              className={`h-full w-full xl:w-[240px] transform transition-transform duration-500 ease-in-out ${
                isLoaded ? "scale-100" : "scale-75"
              }`}
            />
          </section>
          <section className="w-[330px] xl:order-1 xl:basis-[45%] xl:flex xl:justify-end">
            <div
              onClick={() => openModal(1, course1)}
              className="h-full w-full relative bg-[#edf7f5] shadow-md rounded-[20px] cursor-pointer xl:w-[330px] xl:after:absolute xl:after:top-[48%] xl:after:-right-1 xl:after:translate-x-1/2 xl:after:rounded-full xl:after:w-1 xl:after:h-1 xl:after:p-[2px] xl:after:border-[3px] xl:after:border-[#edf7f5] xl:after:shadow-md xl:before:absolute xl:before:top-1/2 xl:before:-right-14 xl:before:w-12 xl:before:h-[2px] xl:before:bg-[#edf7f5] "
            >
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
                <div className="text-[14px] font-[500] leading-[16.8px] text-[#1A2434] lg:leading-[19.6px] ">
                  3 Courses to prepare your body, mind and spirit to receive the
                  highest quality of soul during conception.
                </div>
                <section className="mt-4 flex gap-[10px] justify-end items-center">
                  <div className="text-[14px] font-[600] leading-[16.94px] text-[#1A2434] ">
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
                className="pointer-events-none absolute w-[259px] bottom-[-78%] left-[40px] z-10 xl:hidden "
              />
              <Image
                src={longfootSteps1}
                alt="Long Foot Step1"
                className="pointer-events-none hidden xl:block xl:absolute xl:w-[351.13px] xl:h-[479.18px] top-[30%] right-[-200%] "
              />
            </div>
          </section>
        </section>

        {/* second section */}
        <section
          ref={sectionRef2}
          className="flex flex-col gap-8 items-center mt-[126px] xl:flex-row xl:justify-center xl:gap-[65px] xl:relative"
        >
          <section className="h-[330px] w-fit self-center xl:basis-[45%] xl:flex xl:justify-end">
            <Image
              src={course2}
              alt="course 2"
              className={`h-full w-full xl:w-[240px] transform transition-transform duration-500 ease-in-out ${
                isLoaded2 ? "scale-100" : "scale-75"
              }`}
            />
          </section>
          <section className="w-[330px] xl:basis-[55%]">
            <div
              onClick={() => openModal(2, course2)}
              className="cursor-pointer h-full w-full relative bg-[#F6E2D799] shadow-md rounded-[20px] xl:w-[330px] xl:after:absolute xl:after:top-[48%] xl:after:-left-4 xl:after:translate-x-1/2 xl:after:rounded-full xl:after:w-1 xl:after:h-1 xl:after:p-[2px] xl:after:border-[3px] xl:after:border-[#F6E2D799] xl:after:shadow-md xl:before:absolute xl:before:top-1/2 xl:before:-left-14 xl:before:w-12 xl:before:h-[2px] xl:before:bg-[#F6E2D799]"
            >
              <section className="relative">
                <Image
                  src={vector84}
                  alt="Vector 84"
                  className="w-full object-cover h-[70px] z-0 rounded-tl-[20px] rounded-tr-[20px]"
                />
                <div className="text-[16px] font-[600] leading-[19.2px] absolute top-6 left-4 text-white">
                  Pregnancy (Garbh Sanskar)
                </div>
              </section>
              <section className="px-5 pt-7 pb-5">
                <div className="text-[14px] font-[500] leading-[16.8px] text-[#1A2434] lg:leading-[19.6px] ">
                  7 monthly courses to provide the ideal environment for
                  foundational programming of the foetus at the cellular level
                  in body, mind and spirit.
                </div>
                <section className="mt-4 flex gap-[10px] justify-end items-center">
                  <div className="text-[14px] font-[600] leading-[16.94px] text-[#1A2434] ">
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
                className="pointer-events-none absolute w-[259px] bottom-[-78%] left-[35px] xl:hidden"
              />
              <Image
                src={longfootSteps2}
                alt="Long Foot Steps 2"
                className="pointer-events-none hidden xl:block xl:absolute xl:w-[351.13px] xl:h-[479.18px] top-[40%] left-[-175%] "
              />
            </div>
          </section>
        </section>

        {/* third section */}
        <section
          ref={sectionRef3}
          className="flex flex-col gap-8 items-center mt-[126px] xl:flex-row xl:justify-center xl:gap-9 xl:relative"
        >
          <section className="h-[330px] w-fit self-center xl:order-2 xl:basis-[55%]">
            <Image
              src={course3}
              alt="course 3"
              className={`h-full w-full xl:w-[385px] transform transition-transform duration-500 ease-in-out ${
                isLoaded3 ? "scale-100" : "scale-75"
              }`}
            />
          </section>
          <section className="w-[330px] xl:order-1 xl:basis-[45%] xl:flex xl:justify-end">
            <div
              onClick={() => openModal(3, course3)}
              className="cursor-pointer h-full w-full relative bg-[#F3E0A399] shadow-md rounded-[20px] xl:w-[330px] xl:after:absolute xl:after:top-[48%] xl:after:-right-1 xl:after:translate-x-1/2 xl:after:rounded-full xl:after:w-1 xl:after:h-1 xl:after:p-[2px] xl:after:border-[3px] xl:after:border-[#F3E0A399] xl:after:shadow-md xl:before:absolute xl:before:top-1/2 xl:before:-right-14 xl:before:w-12 xl:before:h-[2px] xl:before:bg-[#F3E0A399]"
            >
              <section className="relative">
                <Image
                  src={vector85}
                  alt="Vector 85"
                  className="w-full object-cover h-[70px] z-0 rounded-tl-[20px] rounded-tr-[20px]"
                />
                <div className="text-[16px] font-[600] leading-[19.2px] absolute top-6 left-4 text-white">
                  Birth to 6 Years
                </div>
              </section>
              <section className="px-5 pt-7 pb-5">
                <div className="text-[14px] font-[500] leading-[16.8px] text-[#1A2434] lg:leading-[19.6px] ">
                  Monthly courses to raise the IQ of your child dramatically and
                  sow the seeds of EQ & SQ.
                </div>
                <section className="mt-4 flex gap-[10px] justify-end items-center">
                  <div className="text-[14px] font-[600] leading-[16.94px] text-[#1A2434] ">
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
                className="pointer-events-none absolute w-[287px] bottom-[-150px] left-[35px] xl:hidden"
              />
              <Image
                src={longfootSteps3}
                alt="Long Foot Step1"
                className="pointer-events-none hidden xl:block xl:absolute xl:w-[286.13px] xl:h-[514.08px] top-[30%] right-[-230%] "
              />
            </div>
          </section>
        </section>

        {/* fourth section */}
        <section
          ref={sectionRef4}
          className="flex flex-col gap-8 items-center mt-[126px] xl:flex-row xl:justify-center xl:gap-9"
        >
          <section className="h-[330px] w-fit self-center xl:basis-1/2 xl:flex xl:justify-end">
            <Image
              src={course4}
              alt="course 4"
              className={`h-full w-full xl:w-[385px] transform transition-transform duration-500 ease-in-out ${
                isLoaded4 ? "scale-100" : "scale-75"
              }`}
            />
          </section>
          <section className="w-[330px] xl:basis-1/2">
            <div
              onClick={() => openModal(4, course4)}
              className="cursor-pointer shadow-md rounded-[20px] bg-[#D1CCF366] relative w-[330px] xl:after:absolute xl:after:top-[48%] xl:after:-left-4 xl:after:translate-x-1/2 xl:after:rounded-full xl:after:w-1 xl:after:h-1 xl:after:p-[2px] xl:after:border-[3px] xl:after:border-[#D1CCF366] xl:after:shadow-md xl:before:absolute xl:before:top-1/2 xl:before:-left-14 xl:before:w-12 xl:before:h-[2px] xl:before:bg-[#D1CCF366]"
            >
              <section className="relative">
                <Image
                  src={vector86}
                  alt="Vector 86"
                  className="w-full object-cover h-[70px] z-0 rounded-tl-[20px] rounded-tr-[20px]"
                />
                <div className="text-[16px] font-[600] leading-[19.2px] absolute top-6 left-4 text-white">
                  6 to 15 Years
                </div>
              </section>
              <section className="px-5 pt-7 pb-5">
                <div className="text-[14px] font-[500] leading-[16.8px] text-[#1A2434] lg:leading-[19.6px] ">
                  Courses designed to maximise IQ, EQ, and SQ.
                </div>
                <section className="mt-4 flex gap-[10px] justify-end items-center">
                  <div className="text-[14px] font-[600] leading-[16.94px] text-[#1A2434] ">
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
                className="pointer-events-none absolute w-[287px] bottom-[-150px] left-[35px] xl:hidden"
              />
              <Image
                src={longfootSteps4}
                alt="Long Foot Steps 4"
                className="pointer-events-none hidden xl:block xl:absolute xl:w-[286.13px] xl:h-[514.18px] top-[40%] left-[-215%] "
              />
            </div>
          </section>
        </section>

        <section className="h-[330px] mt-[126px] self-center justify-self-center relative ">
          <Image
            src={course5}
            alt="course 5"
            className="h-full w-full xl:w-[385px] "
          />
          <Image
            src={singleStep}
            alt="Single foot step"
            className="w-[71px] h-[87px] hidden xl:block absolute top-[49%] left-[-57%] "
          />
          <Image
            src={singleStep}
            alt="Single foot step"
            className="w-[71px] h-[87px] hidden xl:block absolute top-[55%] left-[-30%] "
          />
        </section>

        <section className="w-[295px] h-9 mt-8 text-[28px] font-[700] leading-[36.4px] text-center text-[#4D1435] mx-auto xl:w-[405px] xl:h-[45px] xl:text-[32px] xl:font-[800] xl:leading-[44.8px] ">
          The KGKP Guarantee:
        </section>

        <section className="w-[259px] h-[78px] text-[28px] relative mt-4 font-[700] leading-[39.2px] text-[#4D1435] text-center xl:w-[474px] mx-auto xl:text-[32px] xl:font-[800] xl:leading-[44.8px] xl:mt-[6px]">
          <span className="z-10 relative">A Genius Ready for the World!</span>
          <svg
            className="absolute w-[106.08px] h-[40.94px] left-[27%] top-[16%] translate-x-[-50%] z-0 lg:top-1 lg:w-[160px] lg:h-[72px] lg:left-[16%]"
            viewBox="0 0 345 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              fill="#FFB31F"
              stroke="transparent"
              strokeWidth="3"
              strokeLinecap="butt"
              d="M337.13 14.89C336.3 15.53 326.72 14.27 325.18 13.31C323.41 12.21 318.84 11.39 317.8 11.98C317.03 12.42 316.66 12.27 316.74 11.56C316.86 10.44 313.9 9.87001 312.76 10.8C312.42 11.08 311.03 10.8 309.67 10.17C307.85 9.33001 306.83 9.44001 305.76 10.61C304.74 11.72 304.15 11.81 303.77 10.91C302.96 8.98001 299.01 7.81001 297.23 8.97001C296.32 9.57001 295.71 9.56001 295.78 8.96001C295.94 7.53001 279.53 4.64001 265.83 3.69001C264.38 3.59001 260.72 3.16001 257.69 2.74001C248.78 1.50001 246.18 1.69001 246.57 3.55001C246.86 4.95001 246.64 4.89001 244.94 3.08001C243.86 1.93001 242.78 1.15001 242.54 1.34001C242.3 1.54001 239.36 1.37001 236.01 0.980012C232.66 0.590012 228.99 0.700012 227.86 1.23001C226.5 1.87001 225.66 1.80001 225.37 1.04001C225.07 0.250013 224.56 0.140012 223.75 0.670012C223.1 1.10001 221.75 1.07001 220.74 0.610013C219.54 0.0600126 218.85 0.270013 218.75 1.20001C218.6 2.59001 216.72 2.63001 212.68 1.33001C210.95 0.770012 210.73 1.02001 211.05 3.13001C211.41 5.49001 211.37 5.50001 209.93 3.49001C208.87 2.00001 208.14 1.64001 207.39 2.25001C206.65 2.86001 206.21 2.76001 205.89 1.90001C205.57 1.07001 204.55 1.00001 202.59 1.68001C200.89 2.27001 198.79 2.21001 197.35 1.54001C195.56 0.710013 194.9 0.800012 194.78 1.90001C194.67 2.87001 193.8 3.17001 192.25 2.77001C190.02 2.20001 188.58 2.21001 178.75 2.83001C176.54 2.97001 173.75 3.02001 172.54 2.94001C169.38 2.73001 167.18 3.34001 167.06 4.45001C167 4.98001 165.92 4.91001 164.64 4.30001C162.1 3.08001 156.36 2.81001 145.49 3.39001C132.38 4.10001 128.58 4.53001 123.98 5.82001C121.47 6.53001 119.13 6.97001 118.78 6.80001C118.43 6.63001 118.1 6.94001 118.04 7.48001C117.98 8.02001 117.17 8.30001 116.24 8.09001C115.31 7.88001 111.96 8.48001 108.79 9.41001C105.62 10.34 98.19 11.67 92.27 12.35C75.84 14.25 60.05 16.75 59.43 17.54C59.12 17.93 57.77 18.31 56.42 18.38C54.33 18.49 53.91 19.02 53.59 21.96C53.38 23.85 52.81 25.31 52.33 25.2C51.82 25.09 51.8 24.01 52.27 22.64C53.06 20.37 52.99 20.29 50.5 20.79C49.07 21.08 47.26 21.76 46.47 22.31C45.68 22.86 43.41 23.51 41.44 23.76C39.47 24.01 36.04 24.89 33.82 25.72C31.6 26.55 28.66 27.08 27.27 26.89C25.89 26.7 24.72 26.89 24.67 27.3C24.62 27.71 24.03 27.66 23.35 27.19C22.56 26.64 22.05 26.92 21.94 27.96C21.84 28.86 21.28 29.39 20.7 29.15C19.52 28.66 16.75 29.05 14.63 30.01C13.86 30.36 12.62 30.8 11.87 30.99C11.12 31.18 8.27003 32.6 5.54003 34.16C0.930031 36.79 -0.619969 38.87 0.900031 40.41C2.07003 41.59 7.57003 39.18 8.60003 37.03C9.16003 35.86 9.81003 34.94 10.05 34.99C10.28 35.04 10.18 35.7 9.81003 36.46C8.92003 38.31 10.07 38.42 13.38 36.8C14.89 36.06 16.42 35.75 16.78 36.11C17.13 36.47 17.47 36.34 17.53 35.83C17.59 35.32 20.73 34.78 24.52 34.64C28.31 34.5 31.86 34.11 32.42 33.79C32.98 33.46 34.77 33.4 36.42 33.65C38.06 33.9 39.92 33.81 40.55 33.45C41.18 33.09 42.5 33.28 43.49 33.89C44.64 34.59 45.61 34.56 46.17 33.81C46.88 32.86 47.35 32.94 48.64 34.24C50 35.61 50.53 35.59 52.22 34.09C53.92 32.59 54.18 32.58 54.02 34.02C53.87 35.36 54.33 35.68 56.28 35.57C57.63 35.5 58.96 35.18 59.23 34.87C60.45 33.51 62.89 33.75 62.73 35.21C62.63 36.08 63.01 36.52 63.62 36.25C64.2 35.99 65.98 35.98 67.57 36.22C69.16 36.46 71.09 36.26 71.84 35.76C72.92 35.05 73.28 35.15 73.52 36.23C73.7 37.06 73.93 36.88 74.1 35.78C74.3 34.45 74.83 34.2 76.04 34.85C77.09 35.42 77.54 35.32 77.26 34.57C76.97 33.82 77.45 33.74 78.58 34.35C79.84 35.03 80.56 34.8 81.08 33.54C81.48 32.56 82.17 32.13 82.61 32.57C83.04 33.01 84.04 32.67 84.81 31.81C86.12 30.37 86.21 30.38 86.06 31.99C85.97 32.95 86.28 33.81 86.76 33.92C87.23 34.03 87.61 33.77 87.6 33.35C87.59 32.93 87.72 31.73 87.9 30.69C88.21 28.81 88.23 28.82 89.27 31C89.93 32.37 90.39 32.72 90.5 31.91C90.61 31.1 91.25 30.97 92.21 31.56C93.1 32.1 94.28 31.97 95.01 31.24C95.7 30.55 96.83 30.1 97.51 30.26C98.22 30.42 98.55 30 98.27 29.27C97.93 28.37 98.46 28.36 100.1 29.23C102.02 30.24 102.36 30.16 102.06 28.74C101.79 27.43 102.06 27.25 103.24 27.96C104.12 28.5 105.31 28.36 106.03 27.64C106.72 26.95 108.02 26.54 108.91 26.74C109.8 26.94 110.58 26.66 110.64 26.11C110.7 25.57 111.55 25.3 112.53 25.52C113.54 25.75 114.12 25.42 113.87 24.77C113.58 24.02 114.19 24.02 115.59 24.76C116.86 25.43 117.8 25.48 117.86 24.89C117.92 24.34 118.93 24.22 120.1 24.64C121.27 25.05 122.27 24.99 122.33 24.5C122.38 24.01 122.91 23.81 123.49 24.06C124.56 24.52 127.83 23.9 132.6 22.34C134.03 21.87 135.74 21.61 136.4 21.76C137.06 21.91 138.35 20.83 139.27 19.36C140.27 17.76 141.62 16.85 142.64 17.08C143.58 17.29 144.39 17.06 144.44 16.57C144.59 15.25 150.17 14.53 150.94 15.73C152 17.4 156.11 16.91 156.78 15.04C157.29 13.62 158.2 13.5 161.83 14.39C164.26 14.99 167.33 15.24 168.64 14.96C171.18 14.42 183.75 14.86 186.56 15.6C187.49 15.84 188.78 15.68 189.45 15.25C190.11 14.81 191.13 14.76 191.72 15.13C192.3 15.5 194.1 15.49 195.71 15.1C197.32 14.71 200.18 14.74 202.07 15.17C204.63 15.74 205.9 15.46 207.08 14.06C208.63 12.2 208.67 12.21 209.69 14.39C210.59 16.3 211 16.49 212.68 15.74C213.76 15.27 215 15.24 215.43 15.68C215.87 16.12 216.85 16.08 217.61 15.58C218.37 15.08 219.51 15.04 220.15 15.48C220.87 15.98 221.61 15.51 222.08 14.25C222.84 12.25 222.87 12.25 223.92 14.42C224.85 16.35 225.01 16.41 225.17 14.95C225.35 13.34 226.7 13.14 229.9 14.24C230.72 14.52 231.44 14.28 231.51 13.7C231.57 13.12 232.57 12.86 233.73 13.12C234.89 13.38 236.16 13.16 236.55 12.63C237.07 11.93 237.4 12.02 237.75 12.93C238.02 13.62 238.89 14.06 239.69 13.89C241.45 13.53 241.07 10.93 238.83 7.95001C237.96 6.80001 237.64 5.94001 238.11 6.05001C239.34 6.33001 242.47 10.63 242.33 11.86C242.26 12.49 243.52 12.99 245.51 13.13C247.32 13.26 250.45 13.77 252.46 14.26C254.47 14.76 256.17 14.73 256.23 14.2C256.29 13.67 258.86 13.8 261.95 14.49C265.03 15.18 267.95 15.57 268.42 15.36C268.89 15.15 271.18 15.17 273.51 15.41C280.86 16.17 282.77 16.16 283.77 15.34C284.36 14.86 285.47 15.05 286.61 15.84C287.64 16.55 288.75 16.91 289.09 16.63C289.43 16.36 291.55 16.39 293.82 16.71C303.91 18.12 313.52 18.81 314.52 18.19C315.12 17.82 316.37 17.89 317.29 18.35C320.87 20.13 338.05 24.15 341.1 23.92C343.81 23.71 344.37 23.24 344.69 20.87C345.02 18.47 344.78 18.07 343.06 18.06C341.94 18.06 340.52 17.22 339.85 16.17C338.46 13.98 338.31 13.92 337.09 14.87L337.13 14.89ZM233.06 7.92001C233 8.46001 232.54 8.82001 232.04 8.70001C231.54 8.59001 231.41 8.10001 231.77 7.63001C232.12 7.15001 232.58 6.80001 232.79 6.85001C233 6.90001 233.12 7.38001 233.06 7.92001ZM235.01 11.12C234.02 11.93 233.46 10.25 234.33 9.08001C234.99 8.19001 235.19 8.24001 235.37 9.31001C235.49 10.04 235.33 10.86 235.01 11.12ZM195.15 6.53001C195.09 7.07001 194.63 7.43001 194.13 7.31001C193.63 7.20001 193.5 6.71001 193.86 6.24001C194.21 5.76001 194.67 5.41001 194.88 5.46001C195.09 5.51001 195.21 5.99001 195.15 6.53001ZM139.19 16.3C139.13 16.84 138.67 17.2 138.17 17.08C137.67 16.97 137.54 16.48 137.9 16.01C138.25 15.53 138.71 15.18 138.92 15.23C139.13 15.28 139.25 15.76 139.19 16.3ZM137.89 20.06C137.83 20.6 137.39 20.96 136.92 20.86C136.45 20.75 136.11 20.22 136.17 19.68C136.23 19.14 136.67 18.78 137.14 18.88C137.61 18.99 137.95 19.52 137.89 20.06ZM128.01 21.34C127.89 22.38 126.19 22.45 125.8 21.43C125.56 20.81 125.98 20.44 126.72 20.61C127.46 20.78 128.04 21.11 128.02 21.35L128.01 21.34ZM63.7 26.6C63.56 27.89 62.44 28.51 61.67 27.74C60.85 26.91 61.81 25.34 62.98 25.6C63.43 25.7 63.75 26.15 63.7 26.61V26.6ZM78.69 31.13C78.34 31.61 78.72 32.15 79.54 32.33C81.69 32.81 80.68 33.21 77.36 33.19C74.06 33.17 73.69 31.85 76.73 30.91C79.39 30.09 79.46 30.1 78.7 31.13H78.69ZM54.39 30.76C54.33 31.3 54.11 31.71 53.9 31.66C53.69 31.61 53.33 31.08 53.09 30.47C52.85 29.86 53.08 29.45 53.58 29.57C54.08 29.68 54.45 30.22 54.39 30.76Z"
            />
          </svg>
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
