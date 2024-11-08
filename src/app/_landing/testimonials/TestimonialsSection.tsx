"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

import useInView from "@/app/components/useInView";

import fullScreen from "./assets/full-screen.png";
import vector4 from "./assets/Vector 4.svg";
import group from "./assets/Group.svg";
import image1 from "./assets/image1.png";
import image2 from "./assets/image2.png";

import "./style.css";

const TestimonialsSection = () => {
  const [isScrollable, setIsScrollable] = useState(false);
  const [isScrolledToEnd, setIsScrolledToEnd] = useState(false);
  const [arrowPosition, setArrowPosition] = useState(0);
  const scrollContainerRef = useRef<any>(null);

  const [videoPlay, setVideoPlay] = useState(false);
  const videoPlayer = useRef<HTMLVideoElement>(null);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(0.3);
  const [timeRemaining, setTimeRemaining] = useState("00:00");
  const [isFullScreen, setIsFullScreen] = useState(false);
  const sectionOneRef = useRef(null);
  const sectionTwoRef = useRef(null);

  const isInViewOne = useInView(sectionOneRef);
  const isInViewTwo = useInView(sectionTwoRef);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const checkScrollable = () => {
      if (scrollContainer.scrollWidth > scrollContainer.clientWidth) {
        setIsScrollable(true);
      } else {
        setIsScrollable(false);
      }
    };

    const handleScroll = () => {
      const maxScrollLeft =
        scrollContainer.scrollWidth - scrollContainer.clientWidth;
      if (
        scrollContainer.scrollLeft + scrollContainer.clientWidth >=
        scrollContainer.scrollWidth - 1
      ) {
        setIsScrolledToEnd(true);
      } else {
        setIsScrolledToEnd(false);
      }

      setArrowPosition(scrollContainer.scrollLeft);
    };

    checkScrollable();
    scrollContainer.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkScrollable);

    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkScrollable);
    };
  }, []);

  useEffect(() => {
    const updateRemainingTime = () => {
      if (videoPlayer.current) {
        const timeLeft =
          videoPlayer.current.duration - videoPlayer.current.currentTime;
        const minutes = Math.floor(timeLeft / 60);
        const seconds = Math.floor(timeLeft % 60);
        setTimeRemaining(
          `${minutes < 10 ? "0" : ""}${minutes}:${
            seconds < 10 ? "0" : ""
          }${seconds}`
        );
      }
    };

    if (videoPlayer.current) {
      videoPlayer.current.addEventListener("timeupdate", updateRemainingTime);
    }

    return () => {
      if (videoPlayer.current) {
        videoPlayer.current.removeEventListener(
          "timeupdate",
          updateRemainingTime
        );
      }
    };
  }, []);

  useEffect(() => {
    if (videoPlayer.current) {
      if (videoPlay) {
        videoPlayer.current.play().catch((error) => {
          console.error("Error playing video:", error);
        });
      } else {
        videoPlayer.current.pause();
      }
    }
  }, [videoPlay]);

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (videoPlayer.current) {
      const value = Number(event.target.value);
      setVolume(value);
      videoPlayer.current.volume = value;
    }
  };

  const handleFullScreen = () => {
    if (videoPlayer.current) {
      if (!isFullScreen) {
        if (videoPlayer.current.requestFullscreen) {
          videoPlayer.current.requestFullscreen();
        }
      } else {
        if (document.fullscreenElement) {
          document.exitFullscreen().catch((err) => {
            console.log("Error exiting fullscreen", err);
          });
        }
      }
      setIsFullScreen(!isFullScreen);
    }
  };

  const handleSeek = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (videoPlayer.current) {
      const newTime =
        (Number(event.target.value) / 100) * videoPlayer.current.duration;
      videoPlayer.current.currentTime = newTime;
      setProgress(Number(event.target.value));
    }
  };

  const updateProgress = () => {
    if (videoPlayer.current) {
      const progressValue =
        (videoPlayer.current.currentTime / videoPlayer.current.duration) * 100;
      setProgress(progressValue);

      const timeLeft =
        videoPlayer.current.duration - videoPlayer.current.currentTime;
      const minutes = Math.floor(timeLeft / 60);
      const seconds = Math.floor(timeLeft % 60);
      setTimeRemaining(
        `${minutes < 10 ? "0" : ""}${minutes}:${
          seconds < 10 ? "0" : ""
        }${seconds}`
      );
    }
  };

  return (
    <section className="h-[412px] relative pt-[52px] bg-[#75C0B1] lg:h-[667px] lg:pt-[124px] ">
      <section className="pl-[47px] pr-[66px] text-center text-[#1A2434] relative text-[20px] font-[700] leading-[28.6px] lg:text-[32px] lg:font-[700] lg:leading-[38.4px] lg:w-[645px] lg:p-0 lg:mx-auto">
        <span className="z-10 relative w-[247px] mx-auto block lg:w-auto max-w-[627px] ">
          Real Experiences: Parents Testimonials and Child Outcomes
        </span>
        <svg
          className="absolute w-[178.08px] h-[33px] left-[48%] -bottom-4 translate-x-[-50%] z-0 lg:bottom-[-20px] lg:left-[54%] lg:w-[293.11px] lg:h-[35px]"
          viewBox="0 0 176 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M171.882 10.333C171.45 10.6731 166.621 9.79816 165.865 9.24276C164.994 8.59699 162.696 8.06137 162.156 8.37599C161.76 8.60956 161.569 8.51645 161.627 8.11976C161.714 7.49781 160.218 7.13126 159.629 7.62731C159.451 7.77178 158.746 7.59544 158.081 7.22653C157.172 6.73028 156.653 6.7762 156.091 7.40258C155.553 7.99744 155.249 8.04037 155.074 7.5275C154.703 6.44715 152.725 5.72905 151.797 6.34221C151.322 6.65917 151.021 6.63752 151.065 6.31578C151.169 5.52201 142.928 3.62938 136.005 2.85129C135.275 2.77105 133.432 2.46741 131.901 2.17503C127.416 1.3341 126.099 1.38355 126.256 2.41307C126.379 3.19348 126.262 3.15692 125.437 2.12483C124.911 1.46996 124.377 1.0196 124.255 1.12296C124.133 1.22632 122.651 1.08658 120.958 0.809907C119.265 0.533233 117.411 0.530967 116.83 0.800982C116.129 1.1313 115.699 1.08347 115.575 0.647876C115.44 0.211897 115.184 0.137989 114.764 0.413833C114.422 0.638581 113.745 0.59257 113.237 0.326356C112.645 0.00321531 112.286 0.0980248 112.214 0.612727C112.11 1.38497 111.162 1.3723 109.133 0.576919C108.272 0.233298 108.148 0.368948 108.268 1.54799C108.404 2.85698 108.382 2.86696 107.69 1.72114C107.182 0.872919 106.823 0.665964 106.434 0.986028C106.045 1.30609 105.832 1.2445 105.677 0.764692C105.532 0.306798 105.017 0.24509 104.013 0.586055C103.14 0.877867 102.076 0.807101 101.357 0.414716C100.47 -0.0807582 100.134 -0.0389892 100.048 0.561432C99.9744 1.09766 99.5273 1.24318 98.7493 0.999539C97.6304 0.646591 96.8985 0.620163 91.9134 0.78504C90.7912 0.819965 89.3801 0.801343 88.7681 0.736137C87.1794 0.56022 86.0475 0.864231 85.9608 1.47542C85.918 1.76486 85.3703 1.71275 84.7369 1.345C83.4698 0.620268 80.5798 0.365035 75.0573 0.488953C68.4023 0.636644 66.4671 0.803873 64.1161 1.44108C62.832 1.7827 61.6391 1.98751 61.4704 1.88442C61.3017 1.78133 61.1232 1.94733 61.0801 2.24754C61.0369 2.54775 60.6224 2.68367 60.1531 2.54817C59.6838 2.41267 57.9819 2.68532 56.3595 3.14406C54.7371 3.6028 50.9435 4.19868 47.9376 4.46736C39.5794 5.22176 31.5432 6.3111 31.2043 6.74075C31.0351 6.95019 30.3492 7.14097 29.6592 7.14839C28.6021 7.17488 28.3763 7.45772 28.1562 9.07717C28.0108 10.1173 27.6911 10.9141 27.4562 10.8517C27.2002 10.7778 27.2108 10.1855 27.4752 9.4298C27.9189 8.18485 27.8882 8.14063 26.6188 8.37501C25.8918 8.51042 24.9633 8.85411 24.5434 9.14072C24.1343 9.42772 22.9694 9.75209 21.9633 9.85587C20.9573 9.95965 19.2069 10.3814 18.0708 10.8038C16.9347 11.2263 15.428 11.4628 14.7323 11.3299C14.0366 11.197 13.4407 11.2833 13.411 11.5086C13.3813 11.7338 13.0807 11.7014 12.746 11.4199C12.3586 11.1041 12.0949 11.2455 12.0201 11.8248C11.9484 12.318 11.6576 12.6092 11.3721 12.4588C10.779 12.168 9.37202 12.3327 8.27663 12.8212C7.88215 13.001 7.23856 13.2149 6.85795 13.3089C6.47735 13.4029 5.00667 14.1366 3.5871 14.9475C1.19896 16.3162 0.371649 17.4396 1.11591 18.3179C1.6842 18.9958 4.52012 17.7618 5.0799 16.5857C5.38307 15.95 5.735 15.4562 5.85263 15.482C5.96986 15.5185 5.90283 15.8826 5.70508 16.285C5.21609 17.2912 5.79499 17.3767 7.50634 16.544C8.28532 16.1626 9.0665 16.0183 9.24248 16.2187C9.41847 16.419 9.59302 16.3607 9.62465 16.0816C9.66704 15.8029 11.2709 15.5591 13.1895 15.5529C15.1081 15.5467 16.9134 15.3964 17.2106 15.2239C17.4971 15.051 18.4131 15.0518 19.2369 15.2216C20.0606 15.3915 21.0097 15.3718 21.3293 15.1786C21.6488 14.9854 22.323 15.1175 22.8057 15.4798C23.3729 15.8883 23.8684 15.8954 24.1634 15.4857C24.5377 14.9711 24.7837 15.0231 25.4034 15.7676C26.0647 16.5567 26.3346 16.5449 27.2256 15.7472C28.1166 14.9495 28.2461 14.9434 28.142 15.7371C28.0399 16.4771 28.2704 16.6579 29.2518 16.6394C29.9315 16.6208 30.6158 16.4731 30.762 16.3059C31.4027 15.5747 32.6354 15.7593 32.5309 16.5638C32.4596 17.0462 32.6448 17.29 32.9624 17.1506C33.2581 17.0212 34.1626 17.0431 34.9652 17.2014C35.7674 17.3704 36.7404 17.287 37.138 17.0212C37.7009 16.6535 37.8819 16.7139 37.9789 17.3102C38.0591 17.7765 38.1706 17.6728 38.2785 17.0731C38.4022 16.3339 38.6759 16.2145 39.2766 16.5918C39.8035 16.9234 40.0315 16.8778 39.8956 16.4633C39.76 16.0381 40.0092 16.004 40.5672 16.369C41.1886 16.7687 41.5592 16.6527 41.8536 15.9628C42.0775 15.432 42.4309 15.1969 42.648 15.4526C42.8543 15.7079 43.3672 15.5325 43.7825 15.0733C44.4786 14.3009 44.5213 14.3132 44.4141 15.1931C44.352 15.7189 44.496 16.2091 44.7308 16.2715C44.9657 16.3338 45.1645 16.2009 45.1726 15.9749C45.1812 15.7381 45.2695 15.0838 45.3766 14.5057C45.5753 13.4783 45.5753 13.4783 46.0592 14.7028C46.3653 15.4791 46.5955 15.6706 46.6652 15.2312C46.7353 14.7811 47.061 14.7174 47.544 15.069C47.9852 15.3867 48.5907 15.3331 48.971 14.9481C49.3402 14.5734 49.9085 14.3568 50.2609 14.445C50.6238 14.5443 50.7938 14.3133 50.6682 13.91C50.5139 13.4087 50.7834 13.4076 51.5947 13.9219C52.5432 14.5166 52.717 14.4798 52.5946 13.6886C52.4807 12.9624 52.6246 12.8598 53.2022 13.2794C53.6434 13.5971 54.2381 13.5432 54.6188 13.1474C54.988 12.7727 55.6523 12.5811 56.0897 12.7047C56.5379 12.8287 56.9416 12.6924 56.974 12.3918C57.0172 12.0916 57.4532 11.9564 57.9436 12.1035C58.4556 12.2513 58.7528 12.0788 58.6369 11.7082C58.5117 11.2941 58.8135 11.2942 59.5087 11.7396C60.1413 12.1289 60.6137 12.1783 60.6577 11.8566C60.7008 11.5564 61.2091 11.51 61.7929 11.7575C62.3767 12.0049 62.8838 11.9908 62.9258 11.7229C62.9678 11.455 63.2304 11.3459 63.5159 11.4963C64.0448 11.7741 65.7148 11.4895 68.168 10.7051C68.8985 10.4728 69.7758 10.3536 70.1064 10.4518C70.4369 10.5499 71.1152 9.9709 71.6072 9.18035C72.145 8.31602 72.8521 7.83501 73.3641 7.98283C73.8334 8.11832 74.2471 8.00393 74.2891 7.73601C74.3908 7.00682 77.236 6.71078 77.5994 7.39211C78.1042 8.3372 80.1912 8.14312 80.5733 7.1115C80.86 6.3351 81.3252 6.28723 83.1375 6.83765C84.3525 7.21562 85.9081 7.4119 86.5705 7.27416C87.873 7.01942 94.2253 7.49667 95.6313 7.95698C96.1002 8.10324 96.7599 8.04084 97.1021 7.81609C97.4443 7.59134 97.9621 7.57771 98.2561 7.7931C98.5394 8.0081 99.4543 8.04113 100.28 7.8554C101.106 7.66967 102.547 7.74327 103.497 8.00389C104.777 8.36267 105.429 8.2353 106.059 7.4821C106.882 6.48794 106.904 6.48872 107.377 7.71288C107.791 8.78402 108.002 8.89943 108.868 8.51035C109.426 8.27185 110.051 8.27287 110.268 8.52859C110.485 8.78431 110.981 8.78066 111.368 8.51441C111.765 8.24855 112.337 8.24762 112.661 8.50723C113.017 8.8003 113.393 8.55519 113.665 7.8645C114.093 6.76986 114.104 6.77025 114.587 7.9948C115.023 9.07748 115.097 9.11249 115.212 8.30834C115.33 7.41808 116.023 7.33532 117.616 8.00713C118.029 8.18374 118.4 8.05703 118.444 7.73529C118.488 7.41356 118.999 7.2919 119.586 7.4532C120.173 7.6145 120.813 7.51903 121.028 7.2358C121.3 6.85764 121.47 6.90692 121.624 7.42978C121.75 7.82232 122.183 8.07505 122.584 8.00332C123.485 7.83107 123.343 6.39254 122.261 4.70454C121.843 4.05356 121.699 3.57414 121.933 3.6365C122.552 3.80973 124.049 6.24559 123.96 6.92135C123.915 7.26461 124.54 7.56739 125.549 7.67927C126.461 7.78765 128.033 8.12463 129.046 8.43064C130.059 8.73664 130.92 8.75697 130.952 8.46714C130.995 8.17769 132.295 8.2893 133.842 8.73313C135.389 9.16621 136.855 9.44548 137.096 9.33564C137.337 9.22579 138.499 9.27853 139.668 9.46081C143.377 10.0151 144.346 10.0393 144.868 9.60547C145.179 9.34727 145.735 9.47511 146.301 9.92664C146.803 10.3435 147.366 10.5579 147.533 10.413C147.711 10.2685 148.786 10.3289 149.921 10.5424C155.005 11.5127 159.857 12.0651 160.375 11.7389C160.684 11.5453 161.318 11.6005 161.771 11.8755C163.555 12.9315 172.171 15.4628 173.715 15.3892C175.086 15.3201 175.386 15.0723 175.595 13.7758C175.804 12.4577 175.694 12.2274 174.822 12.1959C174.262 12.1757 173.547 11.6864 173.234 11.0932C172.568 9.862 172.505 9.81661 171.861 10.3215L171.882 10.333ZM119.334 4.5773C119.291 4.87751 119.047 5.0627 118.802 4.98918C118.546 4.91527 118.502 4.64424 118.684 4.39214C118.876 4.12966 119.109 3.94408 119.216 3.98025C119.323 4.00567 119.378 4.27709 119.334 4.5773ZM120.261 6.37826C119.739 6.81206 119.493 5.86553 119.957 5.23566C120.309 4.75259 120.405 4.78838 120.48 5.38386C120.53 5.79521 120.428 6.2334 120.261 6.37826ZM100.171 3.10938C100.128 3.40959 99.8842 3.59478 99.639 3.52126C99.383 3.44735 99.3389 3.17632 99.5204 2.92422C99.7131 2.66174 99.9462 2.47616 100.053 2.51234C100.16 2.53775 100.214 2.80917 100.171 3.10938ZM71.6467 7.48972C71.6035 7.78993 71.3598 7.97512 71.1145 7.9016C70.8585 7.82769 70.8144 7.55666 70.996 7.30456C71.1887 7.04208 71.4217 6.8565 71.5282 6.89267C71.635 6.91809 71.6899 7.18951 71.6467 7.48972ZM70.9151 9.54335C70.872 9.84356 70.6497 10.0295 70.4041 9.96678C70.1692 9.90441 70.0079 9.59681 70.0511 9.2966C70.0942 8.99639 70.3165 8.81042 70.5621 8.87318C70.797 8.93555 70.9583 9.24314 70.9151 9.54335ZM65.8845 10.073C65.8097 10.6523 64.9367 10.6531 64.7635 10.0757C64.6576 9.72695 64.8695 9.52983 65.2427 9.6403C65.6159 9.75078 65.8999 9.94425 65.8845 10.073ZM33.2197 11.8143C33.1187 12.5219 32.5466 12.8462 32.1639 12.4012C31.7608 11.9233 32.2874 11.0693 32.874 11.2414C33.0981 11.3033 33.2506 11.5567 33.2197 11.8143ZM40.7174 14.5961C40.5247 14.8586 40.708 15.1562 41.1239 15.279C42.2013 15.5874 41.6876 15.7844 39.9981 15.7126C38.3298 15.6523 38.1629 14.9027 39.7207 14.4416C41.0824 14.0381 41.1255 14.0397 40.7174 14.5961ZM28.4222 13.9474C28.379 14.2476 28.2632 14.4698 28.1567 14.4336C28.0499 14.4082 27.8778 14.1002 27.7714 13.7623C27.6651 13.4243 27.7917 13.2026 28.0369 13.2761C28.2929 13.35 28.4654 13.6472 28.4222 13.9474Z"
            fill="#F6D94A"
          />
        </svg>
      </section>

      <section
        ref={scrollContainerRef}
        className="mt-8 px-4 flex overflow-x-scroll gap-3 relative lg:mt-[57px] lg:justify-around lg:h-[352px] lg:items-center lg:overflow-hidden xl:gap-[112px] xl:justify-center xl:pl-[67px]"
      >
        {/* Video section */}
        <section
          className="w-[296px] h-[189px] flex-grow-0 flex-shrink-0 rounded-[12px] relative lg:rotate-[-6.52deg] lg:order-2 lg:w-[335.35px] lg:h-[214.28px] lg:top-5"
          data-volume-level="high"
        >
          <section
            className={`absolute left-0 right-0 bottom-0 z-50 opacity-0 transition-opacity duration-150 ease-in-out hover:opacity-100 ${
              videoPlay ? "opacity-0" : "opacity-100"
            }`}
          >
            <div className="flex flex-col gap-1 bg-[#F6DA51] p-2 pr-2.5 rounded-b-[12px]">
              <div className="text-[10px] font-semibold opacity-[70%] tracking-[0.4px] leading-[12px] text-[#1A2434]">
                2 years old recognising words after 30 days of KGKP
              </div>

              <div className="mt-[10px] pr-1 flex items-center gap-5 ">
                <div
                  onClick={() => setVideoPlay(!videoPlay)}
                  className="cursor-pointer text-sm"
                >
                  {videoPlay ? (
                    <span className="w-[14.11px] h-[14.11px] lg:w-4 lg:h-4">
                      &#9616;&#9616;
                    </span>
                  ) : (
                    <>
                      <svg
                        className="w-[14.11px] h-[14.11px] lg:w-4 lg:h-4"
                        width="11"
                        height="12"
                        viewBox="0 0 11 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          id="Polygon 2"
                          d="M9.29339 3.50849C10.7055 4.12191 10.924 6.03397 9.68673 6.95019L4.11889 11.0732C2.88159 11.9894 1.11644 11.2226 0.941617 9.69299L0.154919 2.80959C-0.0199022 1.27995 1.52672 0.134672 2.93884 0.748093L9.29339 3.50849Z"
                          fill="#1A2434"
                        />
                      </svg>
                    </>
                  )}
                </div>

                <div className="flex-grow text-[10px] opacity-[70%] font-[500] leading-[14px]">
                  {timeRemaining}
                </div>

                <div className="relative volume-control group flex items-center">
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={handleVolumeChange}
                    className="sound-range bg-[#1A243426] mr-2 rounded-full appearance-none"
                    style={{
                      background: `linear-gradient(to right, rgb(64 63 59) ${
                        volume * 100
                      }%, #1A243426 ${volume * 100}%)`,
                    }}
                  />

                  <svg
                    className="w-4 h-4 cursor-pointer hover:scale-125"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="icon-volume-2" clip-path="url(#clip0_991_40175)">
                      <g id="Shape">
                        <path
                          d="M13.6713 3.2531C13.3831 3.02395 12.9637 3.07182 12.7346 3.36001C12.5054 3.64821 12.5533 4.0676 12.8415 4.29674C14.0868 5.28691 14.8879 6.73114 15.0685 8.31183C15.2492 9.89253 14.7946 11.4803 13.8048 12.7259C13.5758 13.0141 13.6238 13.4335 13.912 13.6626C14.2003 13.8916 14.6197 13.8436 14.8487 13.5554C16.0585 12.033 16.614 10.0924 16.3932 8.16043C16.1724 6.22847 15.1933 4.4633 13.6713 3.2531Z"
                          fill="#1A2434"
                        />
                        <path
                          d="M11.6004 5.85843C11.3122 5.62929 10.8928 5.67715 10.6637 5.96535C10.4345 6.25354 10.4824 6.67293 10.7706 6.90208C11.3241 7.34215 11.6801 7.98403 11.7604 8.68656C11.8407 9.38909 11.6387 10.0947 11.1988 10.6484C10.9697 10.9366 11.0177 11.356 11.306 11.585C11.5942 11.8141 12.0136 11.7661 12.2426 11.4779C12.9025 10.6474 13.2055 9.58896 13.0851 8.53516C12.9647 7.48136 12.4306 6.51854 11.6004 5.85843Z"
                          fill="#1A2434"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M8.57882 4.35649C8.54972 4.10188 8.37725 3.88649 8.13516 3.80242C7.89307 3.71835 7.62422 3.78049 7.44358 3.96227L4.59945 6.82431L2.18237 7.10056C1.81656 7.14237 1.55391 7.4728 1.59571 7.83861L2.04991 11.8127C2.09172 12.1786 2.42216 12.4412 2.78797 12.3994L5.20505 12.1232L8.6216 14.2697C8.8386 14.406 9.11454 14.4059 9.33142 14.2694C9.54829 14.1328 9.66772 13.8841 9.63862 13.6295L8.57882 4.35649ZM5.38037 7.93004L7.41161 5.886L8.1564 12.4027L5.71635 10.8697C5.58816 10.7892 5.43639 10.7547 5.28599 10.7719L3.29892 10.999L2.99612 8.34957L4.98319 8.12247C5.13359 8.10528 5.27366 8.03741 5.38037 7.93004Z"
                          fill="#1A2434"
                        />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_991_40175">
                        <rect
                          width="16"
                          height="16"
                          fill="white"
                          transform="translate(0.251953 1.95312) rotate(-6.52)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>

                <Image
                  src={fullScreen}
                  alt="Full Screen Icon"
                  className="cursor-pointer text-sm hover:scale-125"
                  onClick={handleFullScreen}
                />
              </div>

              <input
                type="range"
                min="0"
                max="100"
                step="0.1"
                value={progress}
                onChange={handleSeek}
                className="w-full h-1 bg-[#1A243426] rounded-full appearance-none cursor-pointer mt-[10px]"
                style={{
                  background: `linear-gradient(to right, rgb(64 63 59) ${progress}%, #1A243426 ${progress}%)`,
                }}
              />
            </div>
          </section>

          <video
            ref={videoPlayer}
            className="w-full h-full rounded-[12px] object-cover"
            src="/KGKP - 2yo reading (1).mp4"
            onTimeUpdate={updateProgress}
          ></video>

          <section className="hidden lg:block absolute -bottom-5 -right-5 z-10 rotate-[0.92deg] rounded-br-3xl border-b-4 border-r-4 h-[104px] w-[166px] border-[#F6D94A]"></section>
        </section>

        <section
          ref={sectionOneRef}
          className={`w-[296px] lg:relative py-4 px-4 grid gap-4 bg-slate-50 flex-grow-0 flex-shrink-0 rounded-[12px] lg:rotate-[9.88deg] lg:order-1 xl:p-8 xl:w-[335.35px] ${
            isInViewOne ? "animate-slide-in-left" : ""
          }`}
        >
          <section className="flex gap-4 items-center">
            <Image src={image1} alt="Image 1" className="w-[74px] h-[74px] " />
            <section className="grid gap-1 opacity-[70%] ">
              <div className="text-[16.55px] font-[700] leading-[19.86px] text-[#1A2434] ">
                Sahana
              </div>
              <div className="text-[13.24px] font-[500] leading-[15.89px] text-[#1A2434] ">
                Mother of 4 years old
              </div>
            </section>
          </section>

          <section className="text-[13.24px] font-[400] opacity-[70%] tracking-[0.4px] leading-[18.53px] text-[#1A2434] ">
            I find it very good. When I see other kids, I can make out the
            difference in her. Her reading is much better.
          </section>

          <section className="hidden lg:block absolute -bottom-5 -left-5 z-10 rotate-[0.92deg] rounded-bl-3xl border-b-4 border-l-4 h-[104px] w-[166px] border-[#F6D94A]"></section>
        </section>

        <section
          ref={sectionTwoRef}
          className={`w-[296px] lg:relative py-4 px-4 grid gap-4 bg-slate-50 flex-grow-0 flex-shrink-0 rounded-[12px] lg:rotate-[4.92deg] lg:order-3 xl:p-8 xl:w-[335.35px] ${
            isInViewTwo ? "animate-slide-in-right" : ""
          }`}
        >
          <section className="flex gap-4 items-center">
            <Image src={image2} alt="Image 2" className="w-[74px] h-[74px] " />
            <section className="grid gap-1 opacity-[70%] ">
              <div className="text-[16.55px] font-[700] leading-[19.86px] text-[#1A2434] ">
                Archana
              </div>
              <div className="text-[13.24px] font-[500] leading-[15.89px] text-[#1A2434] ">
                Mother of 7 years old
              </div>
            </section>
          </section>

          <section className="text-[13.24px] font-[400] opacity-[70%] tracking-[0.4px] leading-[18.53px] text-[#1A2434] ">
            She came to know so many country names and their capitals. She also
            asks me inquisitive questions.
          </section>

          <section className="hidden lg:block absolute -top-5 -right-5 z-10 rotate-[0.92deg] rounded-tr-3xl border-t-4 border-r-4 h-[104px] w-[166px] border-[#F6D94A]"></section>

          <Image
            src={vector4}
            alt="Vector 4 "
            className="hidden lg:block absolute bottom-[-73px] right-[-5.25rem]"
          />
        </section>

        <svg
          className="hidden lg:block absolute top-1/2 -translate-y-1/2"
          width="616"
          height="80"
          viewBox="0 0 616 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.00146 58.4995L11.371 65.3783C36.0154 81.7266 67.7272 82.9399 93.5487 68.5224V68.5224C105.32 61.95 118.577 58.4995 132.059 58.4995L144.5 58.4995M472.5 10L513.101 6.4694C523.903 5.53014 534.624 9.00791 542.817 16.1088V16.1088C557.188 28.5631 578.332 29.2025 593.429 17.6392L614.5 1.5"
            stroke="#F6D94A"
            strokeWidth="2"
            strokeDasharray="8 8"
          />
        </svg>

        {isScrollable && !isScrolledToEnd && (
          <div
            className="shadow-md h-7 w-7 flex justify-center items-center absolute top-1/2 transform -translate-y-1/2 bg-white rounded-full lg:hidden"
            style={{ right: `calc(${-arrowPosition}px + 10%)` }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="icon-chevron-right">
                <path
                  id="Shape"
                  d="M6.47157 3.52851C6.21122 3.26816 5.78911 3.26816 5.52876 3.52851C5.26841 3.78886 5.26841 4.21097 5.52876 4.47132L9.05735 7.99992L5.52876 11.5285C5.26841 11.7889 5.26841 12.211 5.52876 12.4713C5.78911 12.7317 6.21122 12.7317 6.47157 12.4713L10.4716 8.47132C10.7319 8.21097 10.7319 7.78886 10.4716 7.52851L6.47157 3.52851Z"
                  fill="#460C04"
                />
              </g>
            </svg>
          </div>
        )}
      </section>

      <Image
        src={group}
        alt="Group Sticker "
        className="hidden lg:block absolute top-9 left-10"
      />
    </section>
  );
};

export default TestimonialsSection;
