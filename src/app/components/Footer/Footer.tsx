"use client";
import Image from "next/image";
import { useState } from "react";

import logo from "./assets/KGK logo SVG (2).svg";
import facebookLogo from "./assets/Facebook.svg";
import instagramLogo from "./assets/Instagram.svg";
import youtubeLogo from "./assets/Youtube.svg";
import copyrightImage from "./assets/copyright 1.svg";
import Link from "next/link";
import TermsOfUse from "../terms-of-use/TermsOfUse";
import RefundPolicy from "../refund-policy/RefundPolicy";
import PrivacyPolicy from "../privacy-policy/PrivacyPolicy";
import CallbackForm from "../RequestCallback/CallbackForm";

const Footer = () => {
  const [isPrivacyVisible, setPrivacyVisible] = useState(false);
  const [isRefuncVisible, setIsRefuncVisible] = useState(false);
  const [isTermsOfUse, setIsTermsOfUse] = useState(false);

  const toggleRefund = () => setIsRefuncVisible(!isRefuncVisible);
  const toggleTermsOfUse = () => setIsTermsOfUse(!isTermsOfUse);
  const togglePrivacy = () => setPrivacyVisible(!isPrivacyVisible);

  return (
    <div className="bg-[#EF816C] ">
      <div className="max-w-[1440px] mx-auto w-full h-full pt-[52px] pb-6 px-8 xl:px-20 xl:pt-20 relative ">
        <div className="flex gap-6 justify-between flex-wrap sm:items-start lg:gap-3 2xl:gap-20">
          <section className="flex-grow basis-full grid grid-cols-2 justify-between items-center md:flex md:basis-auto md:flex-grow-0 md:w-full md:items-start lg:w-[233px] lg:grow xl:grow-0 xl:w-[419px] ">
            <Image
              src={logo}
              alt="Company logo"
              className="w-[79px] h-[50.55px] lg:hidden "
            />

            <div className="relative right-[-5px] flex justify-end gap-2 md:hidden">
              <a href="https://www.facebook.com/KGeniusKidProg" target="_blank">
                <Image
                  src={facebookLogo}
                  alt="Facebook Logo"
                  className="w-8 h-8 cursor-pointer"
                />
              </a>
              <a
                href="https://www.instagram.com/kgeniuskidprog/"
                target="_blank"
              >
                <Image
                  src={instagramLogo}
                  alt="Facebook Logo"
                  className="w-8 h-8 cursor-pointer"
                />
              </a>
              <a
                href="https://www.youtube.com/@kaushalyaglobal529"
                target="_blank"
              >
                <Image
                  src={youtubeLogo}
                  alt="Facebook Logo"
                  className="w-8 h-8 cursor-pointer"
                />
              </a>
            </div>

            <section className="mt-6 col-span-2 px-4 py-6 rounded-[20px] bg-white md:mt-0 md:w-[450px] xl:w-full ">
              <CallbackForm isFooter={true} />
            </section>
          </section>

          <section className="flex flex-wrap gap-6 items-start w-full justify-between lg:gap-2 lg:w-auto xl:gap-0 xl:grow xl:justify-between max-w-[780px] 2xl:gap-[35px] ">
            {/* First */}
            <section className="w-24 grid gap-4 md:gap-6 lg:w-[143px]">
              <section className="text-[17.5px] font-[600] leading-[25.2px] text-[#4D1435] lg:text-[27px] lg:leading-[37.8px]">
                Quick links
              </section>
              <section className="grid gap-2 ">
                <section className="text-[12px] font-[400] leading-[21.6px] text-[#4D1435] lg:text-[20px] lg:leading-[28px] cursor-pointer">
                  Courses
                </section>
                <section className="text-[12px] font-[400] leading-[21.6px] text-[#4D1435] lg:text-[20px] lg:leading-[28px] cursor-pointer">
                  <Link href="/aboutus">About us</Link>
                </section>
                <section className="text-[12px] font-[400] leading-[21.6px] text-[#4D1435] lg:text-[20px] lg:leading-[28px] cursor-pointer">
                  Blog
                </section>
                <section className="text-[12px] font-[400] leading-[21.6px] text-[#4D1435] lg:text-[20px] lg:leading-[28px] cursor-pointer">
                  <Link href="/contact">Contact us</Link>
                </section>
              </section>
            </section>

            {/* Second */}
            <section className="w-[92px] grid gap-4 md:gap-6 lg:w-[138px]">
              <section className="text-[17.5px] font-[600] leading-[25.2px] text-[#4D1435] lg:text-[27px] lg:leading-[37.8px]">
                Resourses
              </section>
              <section className="grid gap-2 ">
                <section className="text-[12px] font-[400] leading-[21.6px] text-[#4D1435] lg:text-[20px] lg:leading-[28px]">
                  <Link className="cursor-pointer" href="/faq">
                    FAQ
                  </Link>
                </section>
                {isRefuncVisible ? (
                  <div className="fixed inset-0 bg-white z-[9999] overflow-auto">
                    <RefundPolicy toggleRefund={toggleRefund} />
                  </div>
                ) : (
                  <section
                    className="text-[12px] font-[400] leading-[21.6px] text-[#4D1435] lg:text-[20px] lg:leading-[28px] cursor-pointer"
                    onClick={toggleRefund}
                  >
                    Refund Policy
                  </section>
                )}
                {isPrivacyVisible ? (
                  <div className="fixed inset-0 bg-white z-[9999] overflow-auto">
                    <PrivacyPolicy togglePrivacy={togglePrivacy} />
                  </div>
                ) : (
                  <section
                    className="text-[12px] font-[400] leading-[21.6px] text-[#4D1435] lg:text-[20px] lg:leading-[28px] cursor-pointer"
                    onClick={togglePrivacy}
                  >
                    Privacy Policy
                  </section>
                )}
                {isTermsOfUse ? (
                  <div className="fixed inset-0 bg-white z-[9999] overflow-auto">
                    <TermsOfUse toggleTerms={toggleTermsOfUse} />
                  </div>
                ) : (
                  <section
                    className="text-[12px] font-[400] leading-[21.6px] text-[#4D1435] lg:text-[20px] lg:leading-[28px] cursor-pointer"
                    onClick={toggleTermsOfUse}
                  >
                    Terms & Use
                  </section>
                )}
              </section>
            </section>

            {/* Third */}
            <section className="w-[152px] grid gap-4 md:gap-6 lg:w-[228px]">
              <section className="text-[17.5px] font-[600] leading-[25.2px] text-[#4D1435] lg:text-[27px] lg:leading-[37.8px]">
                Channel Partners
              </section>
              <section className="grid gap-2 ">
                <section className="text-[12px] font-[400] leading-[21.6px] text-[#4D1435] lg:text-[20px] lg:leading-[28px] cursor-pointer">
                  <Link className="cursor-pointer" href="/affiliate">
                    Affiliate Programs
                  </Link>
                </section>
                <section className="text-[12px] font-[400] leading-[21.6px] text-[#4D1435] lg:text-[20px] lg:leading-[28px] cursor-pointer">
                  <Link className="cursor-pointer" href="/b2b-offerings">
                    B2B Offerings
                  </Link>
                </section>
              </section>
            </section>

            {/* Fourth */}
            <section className="hidden w-[152px] md:grid gap-6 lg:w-[166px]">
              <section className="text-[17.5px] font-[600] leading-[25.2px] text-[#4D1435] lg:text-[27px] lg:leading-[37.8px]">
                Social Media
              </section>
              <div className="flex relative -left-2.5 lg:-left-3.5 ">
                <a
                  href="https://www.facebook.com/KGeniusKidProg"
                  target="_blank"
                >
                  <Image
                    src={facebookLogo}
                    alt="Facebook Logo"
                    className="w-8 h-8 lg:w-12 lg:h-12 cursor-pointer"
                  />
                </a>
                <a
                  href="https://www.instagram.com/kgeniuskidprog/"
                  target="_blank"
                >
                  <Image
                    src={instagramLogo}
                    alt="Instagram Logo"
                    className="w-8 h-8 lg:w-12 lg:h-12 cursor-pointer"
                  />
                </a>
                <a
                  href="https://www.youtube.com/@kaushalyaglobal529"
                  target="_blank"
                >
                  <Image
                    src={youtubeLogo}
                    alt="Youtube Logo"
                    className="w-8 h-8 lg:w-12 lg:h-12 cursor-pointer"
                  />
                </a>
              </div>
            </section>
          </section>
        </div>
        <div className="flex gap-[6px] items-center mt-6 lg:mt-7 place-self-center ">
          <Image
            src={copyrightImage}
            alt="Copy Right Image"
            className="w-3 h-3 lg:w-4 lg:h-4"
          />
          <div className="text-[10px] font-[400] leading-[18px] text-[#4D1435] lg:text-[14px] lg:leading-[25.2px]">
            RU Education Pvt. Ltd. 2024
          </div>
        </div>

        <Image
          src={logo}
          alt="Company logo"
          className="hidden lg:block w-[118px] h-[72.86px] absolute bottom-6 right-8 xl:right-20 "
        />
      </div>
    </div>
  );
};

export default Footer;
