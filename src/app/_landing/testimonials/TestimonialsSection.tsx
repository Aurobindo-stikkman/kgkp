"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

import speaker from "./assets/icon-volume-2.svg";
import chalkStroke from "../Chalk Stroke.png";
import fullScreen from "./assets/full-screen.png";
import pauseButton from "./assets/Polygon 2.svg";
import vector8 from "./assets/Vector 8.svg";

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
    <section className="h-[412px] pt-[52px] bg-[#75C0B1] lg:h-[667px] lg:pt-[124px] ">
      <section className="pl-[47px] pr-[66px] text-center text-[#1A2434] relative text-[20px] font-[700] leading-[28.6px] md:text-[32px] md:font-[700] md:leading-[38.4px] md:w-[645px] md:p-0 md:mx-auto">
        <span className="z-10 relative">
          Real Experiences: Parents Testimonials and Child Outcomes
        </span>
        <Image
          src={chalkStroke}
          alt="Chalk Icon"
          className="absolute w-[235.08px] h-[60.94px] left-1/2 -bottom-7 translate-x-[-50%] z-0 lg:-bottom-11 lg:w-[397.11px] lg:h-[93.76px]"
        />
      </section>

      <section
        ref={scrollContainerRef}
        className="mt-8 px-4 flex overflow-x-scroll overflow-y-hidden gap-3 relative lg:mt-[57px] lg:justify-around lg:h-[352px] lg:items-center lg:overflow-x-hidden xl:gap-[112px] xl:justify-center xl:pl-[67px] xl:pr-[74px] 2xl:justify-around "
      >
        {/* Video section */}
        <section
          className="w-[296px] h-[189px] flex-grow-0 flex-shrink-0 rounded-[12px] relative lg:rotate-[-6.52deg] lg:order-2 xl:w-[335.35px] xl:h-[214.28px] 2xl:w-[400px] 2xl:h-[250px]"
          data-volume-level="high"
        >
          <section
            className={`absolute left-0 right-0 bottom-0 z-50 opacity-0 transition-opacity duration-150 ease-in-out hover:opacity-100 ${
              videoPlay ? "opacity-0" : "opacity-100"
            }`}
          >
            <div className="flex flex-col gap-1 bg-amber-400 p-2 rounded-b-[12px]">
              <div className="text-[10px] font-semibold leading-[12px] text-[#1A2434]">
                2 years old recognising words after 30 days of KGKP
              </div>

              <div className="mt-[10px] flex items-center gap-5 ">
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
                      <Image
                        src={pauseButton}
                        alt="Pause"
                        className="w-[14.11px] h-[14.11px] lg:w-4 lg:h-4"
                      />
                    </>
                  )}
                </div>

                <div className="flex-grow text-[10px] font-[500] leading-[14px]">
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
                      background: `linear-gradient(to right, rgb(151 147 132) ${
                        volume * 100
                      }%, #1A243426 ${volume * 100}%)`,
                    }}
                  />

                  <Image
                    src={speaker}
                    alt="Sound Button"
                    className="w-4 h-4 cursor-pointer hover:scale-125"
                  />
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
                  background: `linear-gradient(to right, rgb(151 147 132) ${progress}%, #1A243426 ${progress}%)`,
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

          <Image
            src={vector8}
            alt="Vector 8"
            className="absolute -bottom-5 -right-5"
          />
        </section>

        <section className="w-[296px] h-[189px] bg-slate-50 flex-grow-0 flex-shrink-0 rounded-[12px] lg:rotate-[9.88deg] lg:order-1 xl:h-[196.08px] xl:w-[335.35px] 2xl:w-[400px] 2xl:h-[250px]"></section>

        <section className="w-[296px] h-[189px] bg-slate-50 flex-grow-0 flex-shrink-0 rounded-[12px] lg:rotate-[4.92deg] lg:order-3 xl:w-[335.35px] xl:h-[198.21px] 2xl:w-[400px] 2xl:h-[250px]"></section>

        {isScrollable && !isScrolledToEnd && (
          <div
            className="absolute top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2"
            style={{ right: `calc(${-arrowPosition}px + 5%)` }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        )}
      </section>
    </section>
  );
};

export default TestimonialsSection;
