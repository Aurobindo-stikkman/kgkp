import Image from "next/image";
import logo from "./assets/kgk_logo Open File 2.svg";
import facebookLogo from "./assets/Facebook.svg";
import instagramLogo from "./assets/Instagram.svg";
import youtubeLogo from "./assets/Youtube.svg";
import copyrightImage from "./assets/copyright 1.svg";
import Link from "next/link";

const Footer = () => {
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
                <Link href="/courses">Courses</Link>
              </section>
              <section className="text-[12px] font-[400] leading-[21.6px] text-[#4D1435] lg:text-[20px] lg:leading-[28px] cursor-pointer">
                <Link href="/aboutus">About us</Link>
              </section>
              <section className="text-[12px] font-[400] leading-[21.6px] text-[#4D1435] lg:text-[20px] lg:leading-[28px] cursor-pointer">
                <Link href="/blog">Blog</Link>
              </section>
              <section className="text-[12px] font-[400] leading-[21.6px] text-[#4D1435] lg:text-[20px] lg:leading-[28px] cursor-pointer">
                <Link href="/contact">Contact us</Link>
              </section>
            </section>
          </section>

          {/* Second */}
          <section className="w-[92px] grid gap-6 lg:w-[138px]">
            <section className="text-[17.5px] font-[600] leading-[25.2px] text-[#4D1435] lg:text-[27px] lg:leading-[37.8px]">
              <Link href="/resourses">Resourses</Link>
            </section>
            <section className="grid gap-2 ">
              <section className="text-[12px] font-[400] leading-[21.6px] text-[#4D1435] lg:text-[20px] lg:leading-[28px] cursor-pointer">
                <Link href="/faq">FAQ</Link>
              </section>
              <section className="text-[12px] font-[400] leading-[21.6px] text-[#4D1435] lg:text-[20px] lg:leading-[28px] cursor-pointer">
                <Link href="/refund-policy">Refund Policy</Link>
              </section>
              <section className="text-[12px] font-[400] leading-[21.6px] text-[#4D1435] lg:text-[20px] lg:leading-[28px] cursor-pointer">
                <Link href="/privacy-policy">Privacy Policy</Link>
              </section>
              <section className="text-[12px] font-[400] leading-[21.6px] text-[#4D1435] lg:text-[20px] lg:leading-[28px] cursor-pointer">
                <Link href="/terms">Terms & Use</Link>
              </section>
            </section>
          </section>

          {/* Third */}
          <section className="w-[152px] grid gap-6 lg:w-[230px]">
            <section className="text-[17.5px] font-[600] leading-[25.2px] text-[#4D1435] lg:text-[27px] lg:leading-[37.8px]">
              Channel Partners
            </section>
            <section className="grid gap-2 ">
              <section className="text-[12px] font-[400] leading-[21.6px] text-[#4D1435] lg:text-[20px] lg:leading-[28px] cursor-pointer">
                <Link href="/affiliate">Affiliate Programs</Link>
              </section>
              <section className="text-[12px] font-[400] leading-[21.6px] text-[#4D1435] lg:text-[20px] lg:leading-[28px] cursor-pointer">
                <Link href="/b2b">B2B Offerings</Link>
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
                  alt="Facebook Logo"
                  className="w-8 h-8 lg:w-12 lg:h-12 cursor-pointer"
                />
              </a>
              <a
                href="https://www.youtube.com/@kaushalyaglobal529"
                target="_blank"
              >
                <Image
                  src={youtubeLogo}
                  alt="Facebook Logo"
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
