import { Fragment } from "react";
import Image, { StaticImageData } from "next/image";
import Modal from "../components/Modal";

import { Course } from "./interface";

import nextIcon from "./assets/icon-chevron-right.svg";
import closeIcon from "./assets/Close.svg";

interface Props {
  isModalOpen: boolean;
  closeModal: () => void;
  openModal: (number: number, image: StaticImageData) => void;
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
  return (
    <Modal isOpen={isModalOpen} onClose={closeModal}>
      {/* Heading */}
      <section className="sticky top-0 flex gap-3 py-3 pl-4 bg-white shadow-sm">
        <Image
          src={closeIcon}
          onClick={closeModal}
          alt="Close Icon"
          className="w-4 h-4"
        />
        <div className="text-[16px] font-[700] leading-[19.2px] text-[#1A2434] ">
          {content.heading}
        </div>
      </section>
      <section className="px-4">
        <section className="flex justify-center ">
          <Image
            src={image}
            alt="Icon"
            className="h-[181.5px] w-[132px] mt-3 "
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
                      <div className="flex gap-3 items-center" key={e.point}>
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
                      <div className="flex gap-3 items-center" key={e.point}>
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

      <footer className="relative h-[91px] border-t">
        <section className="flex py-6 px-4 gap-[23px] items-center justify-between ">
          <section
            onClick={() => openModal(pageNumber - 1, content.icon)}
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
          <section className="bg-[#4D1435] rounded-[40px] h-[43px] w-[130px] py-3 pl-[35.5px] flex gap-[10px] items-center order-3 ">
            <section
              onClick={() => openModal(pageNumber + 1, content.icon)}
              className="text-[16px] font-[600] leading-[19.36px] text-white "
            >
              Next
            </section>
            <Image src={nextIcon} alt="Next Icon" className="w-4 h-4" />
          </section>
        </section>
      </footer>
    </Modal>
  );
};

export default ModalView;
