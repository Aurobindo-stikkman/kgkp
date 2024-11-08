import { Fragment, useState, useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import Modal from "../components/Modal";

import { Course } from "./interface";

import nextIcon from "./assets/icon-chevron-right.svg";
import closeIcon from "./assets/Close.svg";
import doneIcon from "./assets/check 1.svg";

interface Props {
  isModalOpen: boolean;
  closeModal: () => void;
  openModal: (number: number, image?: StaticImageData) => void;
  content: Course;
  image: StaticImageData;
  pageNumber: number;
}

const ModalView: React.FC<Props> = ({
  isModalOpen,
  closeModal,
  content,
  pageNumber,
  openModal,
  image,
}) => {
  const [hasShadow, setHasShadow] = useState(false);
  const modalContentRef = useRef<any>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (modalContentRef.current && modalContentRef.current.scrollTop > 0) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }
    };

    const modalElement = modalContentRef.current;
    if (modalElement) {
      modalElement.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (modalElement)
        modalElement.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Modal isOpen={isModalOpen} onClose={closeModal}>
      <div ref={modalContentRef} className="w-full h-full overflow-auto methods-container">
        {/* Heading */}
        <section
          className={`sticky top-0 flex gap-3 py-3 pl-4 bg-white lg:px-[60px] lg:min-h-[90px] lg:justify-between items-end overflow-auto ${
            hasShadow ? "shadow-sm lg:shadow-md" : "shadow-none"
          }`}
        >
          <Image
            src={closeIcon}
            onClick={closeModal}
            alt="Close Icon"
            className="w-4 h-4 lg:w-10 lg:h-10 lg:order-2 cursor-pointer"
          />
          <div className="text-[16px] font-[700] leading-[19.2px] text-[#1A2434] lg:text-[32px] lg:leading-[38.4px] lg:order-1 ">
            {content.heading}
          </div>
        </section>

        {/* Mobile screen body */}
        <section className="flex-grow lg:hidden">
          <section className="px-4 lg:px-[60px]">
            <section className="flex justify-center ">
              <Image
                src={image}
                alt="Icon"
                className="h-[181.5px] w-auto mt-3 "
              />
            </section>

            <section className="mt-6  text-[14px] font-[400] leading-[19.6px] text-[#3C4553] ">
              {content.description}
            </section>

            <section className="mt-6  text-[18px] font-[700] leading-[21.6px] text-[#1A2434] ">
              Program Overview
            </section>

            {content.programOverview.map((ele) => {
              if (ele.sub && ele.sub.length > 0) {
                return (
                  <section className="my-6 grid gap-4" key={ele.point}>
                    <div className="flex gap-3 items-center">
                      <div className="basis-2 flex-shrink-0 h-2 bg-[#75C0B1] rounded-full"></div>
                      <div className="text-[14px] font-[400] leading-[19.6px] text-[#3C4553]">
                        {ele.point}
                      </div>
                    </div>

                    <div className="pl-4 mt-2 grid gap-2">
                      {ele.sub.map((e) => {
                        return (
                          <div
                            className="flex gap-3 items-center"
                            key={e.point}
                          >
                            <div className="basis-2 flex-shrink-0 h-2 rounded-full border border-[#75C0B1] bg-white"></div>
                            <div className="text-[12px] font-[400] leading-[16.8px] text-[#3C4553]">
                              {e.point}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </section>
                );
              } else if (content.programOverview.length > 1) {
                return (
                  <section className="my-6 grid gap-4" key={ele.point}>
                    <section className="flex gap-3 items-start">
                      <div className="w-2 h-2 bg-[#75C0B1] rounded-full mt-1"></div>
                      <div className="text-[14px] font-[400] leading-[19.6px] text-[#3C4553]">
                        {ele.point}
                      </div>
                    </section>
                  </section>
                );
              } else if (content.programOverview.length === 1) {
                return (
                  <Fragment key={ele.point}>
                    <div className="my-6 text-[14px] font-[400] leading-[19.6px] text-[#3C4553]">
                      {ele.point}
                    </div>
                  </Fragment>
                );
              }
            })}

            <section className="text-[18px] font-[700] leading-[21.6px] text-[#1A2434] ">
              Benefits
            </section>

            {content.benefits.map((ele) => {
              if (ele.sub && ele.sub.length > 0) {
                return (
                  <section className="my-6 grid gap-4" key={ele.point}>
                    <div className="flex gap-3 items-center">
                      <div className="basis-2 flex-shrink-0 h-2 bg-[#75C0B1] rounded-full"></div>
                      <div className="text-[14px] font-[400] leading-[19.6px] text-[#3C4553]">
                        {ele.point}
                      </div>
                    </div>

                    <div className="pl-4 mt-2 grid gap-2">
                      {ele.sub.map((e) => {
                        return (
                          <div
                            className="flex gap-3 items-center"
                            key={e.point}
                          >
                            <div className="basis-2 flex-shrink-0 h-2 rounded-full border border-[#75C0B1] bg-white"></div>
                            <div className="text-[12px] font-[400] leading-[16.8px] text-[#3C4553]">
                              {e.point}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </section>
                );
              } else if (content.benefits.length > 1) {
                return (
                  <section className="my-6 grid gap-4" key={ele.point}>
                    <section className="flex gap-3 items-start">
                      <div className="w-2 h-2 bg-[#75C0B1] rounded-full mt-1"></div>
                      <div className="text-[14px] font-[400] leading-[19.6px] text-[#3C4553]">
                        {ele.point}
                      </div>
                    </section>
                  </section>
                );
              } else if (content.benefits.length === 1) {
                return (
                  <Fragment key={ele.point}>
                    <div className="my-6 text-[14px] font-[400] leading-[19.6px] text-[#3C4553]">
                      {ele.point}
                    </div>
                  </Fragment>
                );
              }
            })}
          </section>

          {content.Commitment?.length ? (
            <section className="rounded-[40px] bg-[#ECF6F4] py-8 px-4 grid gap-0 mx-0 my-8 ">
              <section>
                <section className="text-[18px] font-[700] leading-[21.6px] text-[#1A2434] ">
                  Commitment
                </section>
                {content.Commitment.map((ele) => {
                  return (
                    <section className="my-6 grid gap-4" key={ele.point}>
                      <section className="flex gap-3 items-start">
                        <div className="w-2 h-2 bg-[#75C0B1] rounded-full mt-1"></div>
                        <div className="text-[14px] font-[400] leading-[19.6px] text-[#1A2434]">
                          {ele.point}
                        </div>
                      </section>
                    </section>
                  );
                })}
              </section>
              {content.Note?.length ? (
                <section>
                  <section className="text-[18px] font-[700] leading-[21.6px] text-[#1A2434] ">
                    Note
                  </section>
                  {content.Note.map((ele) => {
                    return (
                      <section className="my-6 grid gap-4" key={ele.point}>
                        <section className="flex gap-3 items-start">
                          <div className="w-2 h-2 bg-[#75C0B1] rounded-full mt-1"></div>
                          <div className="text-[14px] font-[400] leading-[19.6px] text-[#1A2434]">
                            {ele.point}
                          </div>
                        </section>
                      </section>
                    );
                  })}
                </section>
              ) : null}
            </section>
          ) : null}
        </section>

        {/* Bigger screen body */}
        <section
          className={`hidden lg:flex lg:mt-6 px-[60px] mb-6 ${
            pageNumber > 2 ? "items-start" : "items-center"
          }`}
        >
          <section className="basis-[400px] grid gap-[52px] 2xl:basis-[472px]">
            {/* Description */}
            <section className="w-[472px] text-[16px] font-[400] leading-[22.4px] text-[#3C4553]">
              {content.description}
            </section>

            {/* Program overview */}
            <section className="grid gap-6">
              <section className="text-[24px] font-[700] leading-[28.8px] text-[#1A2434]">
                Program Overview
              </section>

              <section className="grid gap-4 w-[433px]">
                {content.programOverview.map((ele) => {
                  if (ele.sub && ele.sub.length > 0) {
                    return (
                      <section className="grid gap-2" key={ele.point}>
                        <div className="flex gap-3 items-center">
                          <div className="basis-2 flex-shrink-0 h-2 bg-[#75C0B1] rounded-full"></div>
                          <div className="text-[16px] font-[400] leading-[22.4px] text-[#3C4553]">
                            {ele.point}
                          </div>
                        </div>

                        <div className="pl-5 mt-2 grid gap-2">
                          {ele.sub.map((e) => {
                            return (
                              <div
                                className="flex gap-3 items-center"
                                key={e.point}
                              >
                                <div className="basis-2 flex-shrink-0 h-2 rounded-full border border-[#75C0B1] bg-white"></div>
                                <div className="text-[14px] font-[400] leading-[19.6px] text-[#3C4553]">
                                  {e.point}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </section>
                    );
                  } else if (content.programOverview.length > 1) {
                    return (
                      <Fragment key={ele.point}>
                        <section className="flex gap-3 items-start">
                          <div className="w-2 h-2 bg-[#75C0B1] rounded-full mt-1"></div>
                          <div className="text-[16px] font-[400] leading-[22.4px] text-[#3C4553]">
                            {ele.point}
                          </div>
                        </section>
                      </Fragment>
                    );
                  } else if (content.programOverview.length === 1) {
                    return (
                      <Fragment key={ele.point}>
                        <div className="text-[16px] font-[400] leading-[22.4px] text-[#3C4553]">
                          {ele.point}
                        </div>
                      </Fragment>
                    );
                  }
                })}
              </section>
            </section>

            {/* Benefits */}
            <section className="grid gap-6 w-[433px]">
              <section className="text-[24px] font-[700] leading-[28.8px] text-[#1A2434]">
                Benefits
              </section>

              <section className="grid gap-4">
                {content.benefits.map((ele) => {
                  if (ele.sub && ele.sub.length > 0) {
                    return (
                      <section className="grid gap-2" key={ele.point}>
                        <div className="flex gap-3 items-center">
                          <div className="basis-2 flex-shrink-0 h-2 bg-[#75C0B1] rounded-full"></div>
                          <div className="text-[16px] font-[400] leading-[22.4px] text-[#3C4553]">
                            {ele.point}
                          </div>
                        </div>

                        <div className="pl-5 mt-2 grid gap-2">
                          {ele.sub.map((e) => {
                            return (
                              <div
                                className="flex gap-3 items-center"
                                key={e.point}
                              >
                                <div className="basis-2 flex-shrink-0 h-2 rounded-full border border-[#75C0B1] bg-white"></div>
                                <div className="text-[14px] font-[400] leading-[19.6px] text-[#3C4553]">
                                  {e.point}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </section>
                    );
                  } else if (content.benefits.length > 1) {
                    return (
                      <Fragment key={ele.point}>
                        <section className="flex gap-3 items-start">
                          <div className="w-2 h-2 bg-[#75C0B1] rounded-full mt-1"></div>
                          <div className="text-[16px] font-[400] leading-[22.4px] text-[#3C4553]">
                            {ele.point}
                          </div>
                        </section>
                      </Fragment>
                    );
                  } else if (content.benefits.length === 1) {
                    return (
                      <Fragment key={ele.point}>
                        <div className="text-[16px] font-[400] leading-[22.4px] text-[#3C4553]">
                          {ele.point}
                        </div>
                      </Fragment>
                    );
                  }
                })}
              </section>
            </section>
          </section>

          <section className="flex-grow grid place-items-center">
            <Image
              src={image}
              alt={`Image ${pageNumber}`}
              className="w-[240px]"
            />

            {content.Commitment?.length ? (
              <section className="mt-[19px] w-[235px] bg-[#ECF6F4] rounded-[40px] p-6">
                <section className="text-[16px] font-[700] leading-[19.2px] text-[#1A2434]">
                  Commitment
                </section>
                <section className="mt-6 grid gap-4">
                  {content.Commitment.map((ele) => {
                    return (
                      <Fragment key={ele.point}>
                        <section className="flex gap-3 items-center">
                          <div className="basis-2 flex-shrink-0 h-2 bg-[#75C0B1] rounded-full"></div>
                          <div className="text-[12px] font-[400] leading-[16.8px] text-[#1A2434]">
                            {ele.point}
                          </div>
                        </section>
                      </Fragment>
                    );
                  })}
                </section>
              </section>
            ) : null}

            {content.Note?.length ? (
              <section className="mt-[19px] w-[228px] bg-[#ECF6F4] rounded-[40px] p-6">
                <section className="text-[18px] font-[700] leading-[21.6px] text-[#1A2434] ">
                  Note
                </section>
                <section className="mt-6 grid gap-4">
                  {content.Note.map((ele) => {
                    return (
                      <Fragment key={ele.point}>
                        <section className="flex gap-3 items-center">
                          <div className="basis-2 flex-shrink-0 h-2 bg-[#75C0B1] rounded-full"></div>
                          <div className="text-[12px] font-[400] leading-[16.8px] text-[#1A2434]">
                            {ele.point}
                          </div>
                        </section>
                      </Fragment>
                    );
                  })}
                </section>
              </section>
            ) : null}
          </section>
        </section>

        <footer className="relative bottom-0 h-[91px] border-t lg:border-0 lg:px-[60px]">
          {/* Mobile Footer */}
          <section className="flex py-6 px-4 gap-[23px] items-center justify-between lg:hidden">
            <section
              onClick={() => openModal(pageNumber - 1)}
              className={`bg-[#4D1435] rounded-[40px] h-[43px] w-[130px] py-3 pl-[15px] flex gap-[10px] items-center order-1 cursor-pointer ${
                pageNumber === 1 ? "bg-white" : ""
              } ${pageNumber === 1 ? "pointer-events-none" : ""} `}
            >
              <Image
                src={nextIcon}
                alt="Next Icon"
                className="w-4 h-4 rotate-180"
              />
              <section className="text-[16px] font-[600] leading-[19.36px] text-white ">
                Previous
              </section>
            </section>
            <section className="text-[#6C6C6C] text-[14px] font-[500] leading-[19.6px] order-2">
              {pageNumber}/4
            </section>
            {pageNumber === 4 ? (
              <section
                onClick={closeModal}
                className="bg-[#4D1435] rounded-[40px] h-[43px] w-[130px] py-3 pl-[35.5px] flex gap-[10px] items-center order-3 cursor-pointer"
              >
                <section className="text-[16px] font-[600] leading-[19.36px] text-white">
                  Done
                </section>
                <Image src={doneIcon} alt="Next Icon" className="w-4 h-4" />
              </section>
            ) : (
              <section
                onClick={() => openModal(pageNumber + 1)}
                className="bg-[#4D1435] rounded-[40px] h-[43px] w-[130px] py-3 pl-[35.5px] flex gap-[10px] items-center order-3 cursor-pointer"
              >
                <section className="text-[16px] font-[600] leading-[19.36px] text-white">
                  Next
                </section>
                <Image src={nextIcon} alt="Next Icon" className="w-4 h-4" />
              </section>
            )}
          </section>

          {/* Desktop Footer */}
          <section className="hidden lg:flex py-6 px-4 gap-[23px] items-center justify-between lg:pb-14">
            <section>{pageNumber} / 4</section>

            <section className="flex gap-4">
              <section
                onClick={() => openModal(pageNumber - 1)}
                className={`bg-[#4D1435] rounded-[40px] h-[43px] w-[130px] py-3 pl-[15px] flex gap-[10px] items-center order-1 cursor-pointer ${
                  pageNumber === 1 ? "bg-white" : ""
                } ${pageNumber === 1 ? "pointer-events-none" : ""} `}
              >
                <Image
                  src={nextIcon}
                  alt="Next Icon"
                  className="w-4 h-4 rotate-180"
                />
                <section className="text-[16px] font-[600] leading-[19.36px] text-white ">
                  Previous
                </section>
              </section>

              {pageNumber === 4 ? (
                <section
                  onClick={closeModal}
                  className="bg-[#4D1435] rounded-[40px] h-[43px] w-[130px] py-3 pl-[35.5px] flex gap-[10px] items-center order-3 cursor-pointer"
                >
                  <section className="text-[16px] font-[600] leading-[19.36px] text-white">
                    Done
                  </section>
                  <Image src={doneIcon} alt="Next Icon" className="w-4 h-4" />
                </section>
              ) : (
                <section
                  onClick={() => openModal(pageNumber + 1)}
                  className="bg-[#4D1435] rounded-[40px] h-[43px] w-[130px] py-3 pl-[35.5px] flex gap-[10px] items-center order-3 cursor-pointer"
                >
                  <section className="text-[16px] font-[600] leading-[19.36px] text-white">
                    Next
                  </section>
                  <Image src={nextIcon} alt="Next Icon" className="w-4 h-4" />
                </section>
              )}
            </section>
          </section>
        </footer>
      </div>
    </Modal>
  );
};

export default ModalView;
