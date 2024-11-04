"use client";
import Image from "next/image";
import { FormEvent, useState } from "react";

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

  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const toggleRefund = () => setIsRefuncVisible(!isRefuncVisible);
  const toggleTermsOfUse = () => setIsTermsOfUse(!isTermsOfUse);
  const togglePrivacy = () => setPrivacyVisible(!isPrivacyVisible);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="bg-[#EF816C] pt-[52px] pb-6 px-8 xl:px-20 xl:pt-20 relative">
      <div className="flex gap-6 justify-between flex-wrap sm:items-start">
        <section className="flex-grow basis-full grid grid-cols-2 justify-between items-center md:flex md:basis-auto md:flex-grow-0 md:w-full md:items-start lg:w-[233px] lg:grow xl:max-w-[368px] ">
          <Image
            src={logo}
            alt="Company logo"
            className="w-[79px] h-[50.55px] lg:hidden "
          />

          <div className="flex justify-end gap-2 md:hidden">
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

          <section className="mt-6 col-span-2 ">
            <form onSubmit={handleFormSubmit} className="w-full ">
              <input
                value={formData.email}
                onChange={handleFormChange}
                type="text"
                name="email"
                placeholder="Email Id"
                className="w-full bg-transparent h-[22px] text-base font-normal leading-[22.4px] text-[#4D1435] placeholder:text-base border-b border-b-white focus:outline-none placeholder:font-normal placeholder:leading-[22.4px] placeholder:text-[#4D1435] "
              />
              <input
                value={formData.message}
                onChange={handleFormChange}
                type="text"
                name="message"
                placeholder="Describe your issues"
                className="mt-6 w-full bg-transparent h-[22px] text-base font-normal leading-[22.4px] text-[#4D1435] placeholder:text-base border-b border-b-white focus:outline-none placeholder:font-normal placeholder:leading-[22.4px] placeholder:text-[#4D1435] "
              />

              <button
                type="submit"
                className="custom-black-button mt-6 mx-auto w-[135px] h-[43px] rounded-[40px] bg-[#4D1435] px-[18px] py-3 flex gap-2.5 justify-center items-center lg:mx-0 lg:ml-auto "
              >
                <span className="custom-button-icon text-base font-semibold leading-[19.36px] text-white ">
                  Submit
                </span>

                <svg
                  className="w-4 h-4 lg:w-6 lg:h-6 custom-button-icon"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="icon-arrow-right">
                    <path
                      id="Shape"
                      d="M8.02843 3.36177C8.28878 3.10142 8.71089 3.10142 8.97124 3.36177L13.6379 8.02843C13.8983 8.28878 13.8983 8.71089 13.6379 8.97124L8.97124 13.6379C8.71089 13.8983 8.28878 13.8983 8.02843 13.6379C7.76808 13.3776 7.76808 12.9554 8.02843 12.6951L11.557 9.1665H3.83317C3.46498 9.1665 3.1665 8.86803 3.1665 8.49984C3.1665 8.13165 3.46498 7.83317 3.83317 7.83317H11.557L8.02843 4.30457C7.76808 4.04423 7.76808 3.62212 8.02843 3.36177Z"
                      className="fill-current text-white"
                    />
                  </g>
                </svg>
              </button>
            </form>
          </section>
        </section>

        <section className="flex flex-wrap gap-6 items-start w-full justify-between lg:gap-2 lg:w-auto xl:gap-6 ">
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
                <Link className="cursor-pointer" href="/affiliate">
                  Affiliate Programs
                </Link>
              </section>
              <section className="text-[12px] font-[400] leading-[21.6px] text-[#4D1435] lg:text-[20px] lg:leading-[28px] cursor-pointer">
                B2B Offerings
              </section>
            </section>
          </section>

          {/* Fourth */}
          <section className="hidden w-[152px] md:grid gap-6 lg:w-[166px]">
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

      <Image
        src={logo}
        alt="Company logo"
        className="hidden lg:block w-[118px] h-[72.86px] absolute bottom-6 right-8 xl:right-20 "
      />
    </div>
  );
};

export default Footer;
