"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import shopping from "./icon-shopping-cart.svg";
import hamburgMenu from "./icon-menu.svg";
import closeIcon from "./Close.svg";
import logo from "./kgk_logo Open File 2.svg";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: any) =>
    pathname === path
      ? "text-[#FF6347] underline underline-offset-4 font-[500] text-[16px] leading-[19.36px]"
      : "text-[#4D1435] font-[500] text-[16px] leading-[19.36px]";

  const toggleMenu = () => setToggle(!toggle);

  return (
    <header
      className={`h-[80px] w-full bg-white sticky top-0 z-[999] lg:h-[102px] ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="w-full h-full flex justify-between px-[15px] items-center relative lg:px-20">
        <section className="w-[79px] h-[50.55px] lg:h-[80.62px] lg:w-[126px] ">
          <Link href="/">
            <Image src={logo} alt="Company Logo" className="w-full h-full" />
          </Link>
        </section>

        <section className="flex gap-6 items-center lg:gap-[38px] lg:h-[43px]">
          <section className="w-[24px] h-[24px] text-[#4D1435] lg:hidden">
            <Image
              src={shopping}
              alt="shopping icon"
              className="object-contain"
            />
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
                href="/methods"
                onClick={() => setToggle(false)}
                className={isActive("/methods")}
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
              <section className="w-[131px] h-[51px] rounded-[50px] px-[16px] py-[28px] flex gap-[14px] bg-[#4D1435] items-center justify-center cursor-pointer custom-black-button lg:hidden">
                <div className="w-[45px] h-[19px] text-[16px] leading-[19.2px] font-[700] text-[#FFFFFF] custom-button-icon">
                  Login
                </div>
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
            <Image
              src={shopping}
              alt="shopping icon"
              className="object-contain"
            />
          </section>
          <section className="hidden lg:flex w-[131px] h-[51px] rounded-[50px] px-[16px] py-[28px] gap-[14px] bg-[#4D1435] items-center justify-center cursor-pointer custom-black-button">
            <div className="w-[45px] h-[19px] text-[16px] leading-[19.2px] font-[700] text-[#FFFFFF] custom-button-icon">
              Login
            </div>
            <svg
              className="w-4 h-4 custom-button-icon"
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
          </section>
        </section>
      </div>
    </header>
  );
};

export default Header;
