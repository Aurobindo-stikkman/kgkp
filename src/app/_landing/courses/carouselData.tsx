"use client";

export interface ICard {
  title: string;
  categoryType: string;
  category: string;
  bg: string;
  planName: string;
  phase: number;
  img: string;
}

export interface ICarouselData {
  [key: string]: { bg: string };
}

export const allCards: ICard[] = [
  {
    title: "Course 1",
    categoryType: "Beej Sanskar",
    category: "Pre & Pregnancy",
    bg: "#CFE9E4",
    planName: "Pre - Pregnancy Program",
    phase: 1,
    img: "/Rectangle 5760.png",
  },
  {
    title: "Course 1",
    categoryType: "Infant",
    category: "0 - 6 years",
    bg: "#F3E0A3",
    planName: "Birth to 1month",
    phase: 1,
    img: "/Rectangle 5759.png",
  },
  {
    title: "Course 1",
    categoryType: "Primary Schooler",
    category: "6 - 15 years",
    bg: "#D1CCF3",
    planName: "8 years to 10 years",
    phase: 1,
    img: "/Rectangle 5760 (9).png",
  },
  {
    title: "Course 1",
    categoryType: "Preschooler",
    category: "0 - 6 years",
    bg: "#F3E0A3",
    planName: "3 years to 6 years",
    phase: 1,
    img: "/Rectangle 5760 (7).png",
  },
  {
    title: "Course 1",
    categoryType: "Primary Schooler",
    category: "6 - 15 years",
    bg: "#D1CCF3",
    planName: "12 years to 15 years",
    phase: 1,
    img: "/Rectangle 5760 (11).png",
  },
  {
    title: "3rd Month",
    categoryType: "Garbh Sanskar",
    category: "Pre & Pregnancy",
    bg: "#CFE9E4",
    planName: "Pregnancy Program",
    phase: 1,
    img: "/Rectangle 5760 (1).png",
  },
  {
    title: "4th Month",
    categoryType: "Garbh Sanskar",
    category: "Pre & Pregnancy",
    bg: "#CFE9E4",
    planName: "Pregnancy Program",
    phase: 1,
    img: "/Rectangle 5760 (1).png",
  },
  {
    title: "5th Month",
    categoryType: "Garbh Sanskar",
    category: "Pre & Pregnancy",
    bg: "#CFE9E4",
    planName: "Pregnancy Program",
    phase: 1,
    img: "/Rectangle 5760 (1).png",
  },
  {
    title: "6th Month",
    categoryType: "Garbh Sanskar",
    category: "Pre & Pregnancy",
    bg: "#CFE9E4",
    planName: "Pregnancy Program",
    phase: 1,
    img: "/Rectangle 5760 (1).png",
  },
  {
    title: "7th Month",
    categoryType: "Garbh Sanskar",
    category: "Pre & Pregnancy",
    bg: "#CFE9E4",
    planName: "Pregnancy Program",
    phase: 1,
    img: "/Rectangle 5760 (1).png",
  },
  {
    title: "Course 1",
    categoryType: "Infant",
    category: "0 - 6 years",
    bg: "#F3E0A3",
    planName: "1 to 1.25 months",
    phase: 1,
    img: "/Rectangle 5759.png",
  },
  {
    title: "Course 1",
    categoryType: "Infant",
    category: "0 - 6 years",
    bg: "#F3E0A3",
    planName: "2.5 to 7 months",
    phase: 1,
    img: "/Rectangle 5760 (3).png",
  },
  {
    title: "Course 1",
    categoryType: "Infant",
    category: "0 - 6 years",
    bg: "#F3E0A3",
    planName: "7 to 12 months",
    phase: 1,
    img: "/Rectangle 5760 (4).png",
  },
  {
    title: "Course 1",
    categoryType: "Infant",
    category: "0 - 6 years",
    bg: "#F3E0A3",
    planName: "12 months to 18 months",
    phase: 1,
    img: "/Rectangle 5760 (5).png",
  },
  {
    title: "Course 1",
    categoryType: "Infant",
    category: "0 - 6 years",
    bg: "#F3E0A3",
    planName: "1.5 years to 3 years",
    phase: 1,
    img: "/Rectangle 5760 (6).png",
  },
  {
    title: "Course 1",
    categoryType: "Primary Schooler",
    category: "6 - 15 years",
    bg: "#D1CCF3",
    planName: "10 years to 12 years",
    phase: 1,
    img: "/Rectangle 5760 (10).png",
  },
];

export const carouselData: ICarouselData = {
  All: { bg: "#EF816C45" },
  "Pre & Pregnancy": { bg: "#CFE9E4" },
  "0 - 6 years": { bg: "#F3E0A3" },
  "6 - 15 years": { bg: "#D1CCF3" },
};
