"use client";
import Image from "next/image";
import { useState } from "react";

import logo from "./assets/kgk_logo Open File 2.svg";
import facebookLogo from "./assets/Facebook.svg";
import instagramLogo from "./assets/Instagram.svg";
import youtubeLogo from "./assets/Youtube.svg";
import copyrightImage from "./assets/copyright 1.svg";
import Link from "next/link";
import TermsOfUse from "../terms-of-use/TermsOfUse";
import RefundPolicy from "../refund-policy/RefundPolicy";
import PrivacyPolicy from "../privacy-policy/PrivacyPolicy";

const Footer = () => {
  const [isPrivacyVisible, setPrivacyVisible] = useState(false);
  const [isRefuncVisible, setIsRefuncVisible] = useState(false);
  const [isTermsOfUse, setIsTermsOfUse] = useState(false);

  const toggleRefund = () => setIsRefuncVisible(!isRefuncVisible);
  const toggleTermsOfUse = () => setIsTermsOfUse(!isTermsOfUse);
  const togglePrivacy = () => setPrivacyVisible(!isPrivacyVisible);

  return (
    <div className="bg-[#EF816C] pt-[52px] pb-6 px-8 xl:px-20 xl:pt-20">
      <div className="flex gap-6 justify-between flex-wrap sm:items-start">
        <section className="flex-grow basis-full flex justify-between items-center sm:basis-auto sm:flex-grow-0 ">
          <Image
            src={logo}
            alt="Company logo"
            className="w-[79px] h-[50.55px] lg:w-32 lg:h-20"
          />
          <div className="flex gap-2 sm:hidden">
            <a href="https://www.facebook.com/KGeniusKidProg" target="_blank">
              <Image
                src={facebookLogo}
                alt="Facebook Logo"
                className="w-8 h-8 cursor-pointer"
              />
            </a>
            <a href="https://www.instagram.com/kgeniuskidprog/" target="_blank">
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
        </section>

        <section className="flex flex-wrap gap-6 items-start justify-between">
          {/* First */}
          <section className="w-24 grid gap-6 lg:w-[145px]">
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
          <section className="w-[92px] grid gap-6 lg:w-[138px]">
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
          <section className="w-[152px] grid gap-6 lg:w-[230px]">
            <section className="text-[17.5px] font-[600] leading-[25.2px] text-[#4D1435] lg:text-[27px] lg:leading-[37.8px]">
              Channel Partners
            </section>
            <section className="grid gap-2 ">
              <section className="text-[12px] font-[400] leading-[21.6px] text-[#4D1435] lg:text-[20px] lg:leading-[28px] cursor-pointer">
                Affiliate Programs
              </section>
              <section className="text-[12px] font-[400] leading-[21.6px] text-[#4D1435] lg:text-[20px] lg:leading-[28px] cursor-pointer">
                B2B Offerings
              </section>
            </section>
          </section>

          {/* Fourth */}
          <section className="hidden w-[152px] sm:grid gap-6 lg:w-[166px]">
            <section className="text-[17.5px] font-[600] leading-[25.2px] text-[#4D1435] lg:text-[27px] lg:leading-[37.8px]">
              Social Media
            </section>
            <div className="flex gap-2">
              <a href="https://www.facebook.com/KGeniusKidProg" target="_blank">
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
      <div className="flex gap-[6px] items-center mt-6 lg:mt-[52px]">
        <Image
          src={copyrightImage}
          alt="Copy Right Image"
          className="w-3 h-3 lg:w-4 lg:h-4"
        />
        <div className="text-[10px] font-[400] leading-[18px] text-[#4D1435] lg:text-[14px] lg:leading-[25.2px]">
          RU Education Pvt. Ltd. 2024
        </div>
      </div>
    </div>
  );
};

export default Footer;
