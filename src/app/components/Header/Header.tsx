"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import shopping from "./icon-shopping-cart.svg";
import hamburgMenu from "./icon-menu.svg";
import arrowRight from "./icon-arrow-right.svg";
import closeIcon from "./Close.svg";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const pathname = usePathname();

  const isActive = (path: any) =>
    pathname === path
      ? "text-[#FF6347] underline underline-offset-4"
      : "text-[#4D1435]";

  const toggleMenu = () => setToggle(!toggle);

  return (
    <header className="h-[80px] w-full bg-white sticky top-0 z-[999] lg:h-[102px]">
      <div className="w-full h-full flex justify-between px-[15px] items-center relative">
        <section className="w-[79px] h-[50.55px]">Logo</section>

        <section className="flex gap-6 items-center lg:gap-[38px] lg:h-[43px]">
          <section className="w-[24px] h-[24px] text-[#4D1435] lg:hidden">
            <Image src={shopping} alt="shopping icon" objectFit="contain" />
          </section>

          {/* Mobile version: Hamburg menu toggle */}
          <section
            onClick={toggleMenu}
            className="w-8 h-8 rounded-full bg-[#F69B8A] grid items-center justify-center cursor-pointer lg:hidden"
          >
            <Image src={hamburgMenu} alt="Hamburg menu" />
          </section>

          {/* Navigation: Conditional rendering based on toggle for mobile and always visible for desktop */}
          <nav
            className={`lg:flex ${
              toggle ? "flex" : "hidden"
            } w-[90%] pt-[32px] pb-[24px] rounded-[40px] bg-white absolute top-[86px] left-1/2 translate-x-[-50%] grid items-center lg:static lg:translate-x-0 lg:block lg:w-[368px] h-[19px]lg:place-content-center`}
          >
            <ul className="flex flex-col gap-6 items-center justify-center relative lg:flex-row lg:gap-[40px]">
              <Link
                href="/"
                onClick={() => setToggle(false)}
                className={isActive("/")}
              >
                Home
              </Link>
              <Link
                href="/kgkp"
                onClick={() => setToggle(false)}
                className={isActive("/kgkp")}
              >
                KGKP Method
              </Link>
              <Link
                href="/courses"
                onClick={() => setToggle(false)}
                className={isActive("/courses")}
              >
                Courses
              </Link>
              <Link
                href="/faq"
                onClick={() => setToggle(false)}
                className={isActive("/faq")}
              >
                FAQ
              </Link>

              <div className="w-full border-[1px] lg:hidden"></div>
              <section className="w-[131px] h-[51px] rounded-[50px] px-[16px] py-[28px] flex gap-[14px] bg-[#4D1435] items-center justify-center cursor-pointer lg:hidden">
                <div className="w-[45px] h-[19px] text-[16px] leading-[19.2px] font-[700] text-[#FFFFFF] ">
                  Login
                </div>
                <div className="w-4 h-4 ">
                  <Image src={arrowRight} alt="arrow-right" />
                </div>
              </section>
              <section
                onClick={toggleMenu}
                className="w-6 h-6 absolute right-[37px] top-[-16px] cursor-pointer lg:hidden"
              >
                <Image src={closeIcon} alt="close icon" />
              </section>
            </ul>
          </nav>

          {/* Desktop specific elements */}
          <section className="hidden lg:block w-[24px] h-[24px] text-[#4D1435]">
            <Image src={shopping} alt="shopping icon" objectFit="contain" />
          </section>
          <section className="hidden lg:flex w-[131px] h-[51px] rounded-[50px] px-[16px] py-[28px] gap-[14px] bg-[#4D1435] items-center justify-center cursor-pointer">
            <div className="w-[45px] h-[19px] text-[16px] leading-[19.2px] font-[700] text-[#FFFFFF]">
              Login
            </div>
            <div className="w-4 h-4">
              <Image src={arrowRight} alt="arrow-right" />
            </div>
          </section>
        </section>
      </div>
    </header>
  );
};

export default Header;
