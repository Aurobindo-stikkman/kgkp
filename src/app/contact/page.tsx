"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import rightArrow from "./assets/icon-arrow-right.svg";
import whatsappImage from "./assets/whatsapp.svg";
import customerCare from "./assets/customer-care.png";
import deleteIcon from "./assets/delete.svg";
import checkedIcon from "./assets/checked.svg";
import warningIcon from "./assets/warning 2.svg";
import fileSuccess from "./assets/file-success.svg";
import fileFail from "./assets/file-fail.svg";

const Contact = () => {
  const [formValue, setFormValue] = useState({
    email: "",
    description: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const [fileSize, setFileSize] = useState<number>(0);
  const [fileError, setFileError] = useState<string | null>(null);

  // .........Files
  const MAX_SIZE_MB = 5; // Maximum size in MB
  const SUPPORTED_FORMATS = ["pdf", "jpeg", "jpg", "png"];

  useEffect(() => {
    if (file) {
      setFileSize(file.size);
    } else {
      setFileSize(0);
    }
  }, [file]);

  const handleFileUpload = (event: any) => {
    const selectedFile = event.target.files[0]; // Get the first file
    if (!selectedFile) return; // Exit if no file is selected

    // Check file size
    if (selectedFile.size > MAX_SIZE_MB * 1024 * 1024) {
      setFileError("File too large. Max size allowed is 5 MB");
      setFile(selectedFile);
      return;
    }

    // Check file type
    const fileExtension = selectedFile.name.split(".").pop()?.toLowerCase();
    if (!SUPPORTED_FORMATS.includes(fileExtension || "")) {
      setFileError(
        `Unsupported format. Please select supported format: ${SUPPORTED_FORMATS.join(
          ", "
        )}`
      );
      setFile(selectedFile);
      return;
    }

    // If all checks pass, set the file and clear any errors
    setFile(selectedFile);
    setFileError(null);
  };

  const displayFileSize = (size: number) => {
    if (size < 1024 * 1024) {
      return (size / 1024).toFixed(1) + " KB";
    }
    return (size / 1024 / 1024).toFixed(1) + " MB";
  };

  const handleRemove = () => {
    setFile(null);
    setFileError(null);
    setFileSize(0);
  };

  const calculateUsedPercentage = () => {
    return (fileSize / (5 * 1024 * 1024)) * 100;
  };
  // .........Files

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = e.target.value;
    setFormValue({ ...formValue, [e.target.name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formValue);
  };

  return (
    <div className="pt-6 pb-14">
      <section className="mx-auto text-[20px] font-[700] text-center leading-[24px] text-[#1A2434] lg:text-[32px] lg:leading-[38.4px]">
        Contact Us
      </section>

      <section className="flex flex-col mt-8 lg:justify-between lg:mt-[62px] lg:px-20 lg:gap-4 xl:flex-row 2xl:gap-[101px]">
        <section className="lg:flex-grow lg:flex-shrink-0 lg:basis-1/2 xl:basis-[698px]">
          <section className="text-[18px] font-[600] leading-[21.6px] text-[#1A2434] text-center lg:text-left lg:w-full lg:text-[24px] lg:leading-[28.8px]">
            General Queries
          </section>

          <form
            onSubmit={handleSubmit}
            className="px-4 flex flex-col lg:border lg:rounded-[40px] lg:mt-6 lg:px-8 lg:py-10 lg:w-full"
          >
            <input
              type="text"
              value={formValue.email}
              onChange={handleChange}
              name="email"
              placeholder="Email id"
              autoComplete="off"
              className="border-b-2 border-[#1A243433] py-2 outline-none placeholder:leading-[16.8px] placeholder:text-[14px] placeholder:font-[500] placeholder:text-[#1A2434A8] "
            />
            <textarea
              value={formValue.description}
              onChange={handleChange}
              name="description"
              placeholder="Describe your issue"
              className="border-b-2 border-[#1A243433] mt-6 h-24 p-2 outline-none placeholder:leading-[16.8px] placeholder:text-[14px] placeholder:font-[500] placeholder:text-[#1A2434A8] "
            />

            <section className="mt-6 text-[16px] font-[500] leading-[19.2px] text-[#1A2434A8] sm:mx-auto lg:mx-0 ">
              Attach a file{" "}
              <span className="text-[12px] leading-[14.4px] ">(Optional)</span>
            </section>
            <section className="mt-1 text-[12px] font-[500] leading-[14.4px] text-[#1A2434A8] sm:mx-auto lg:mx-0 ">
              (Supported format pdf, jpeg, jpg, png)
            </section>

            {fileError ? (
              <div className="mt-4 lg:mt-7">
                <div className="flex w-full justify-between">
                  <div className="flex gap-2 lg:gap-3">
                    <Image
                      src={fileFail}
                      alt="File Failed"
                      className="w-4 h-4 lg:w-6 lg:h-6"
                    />
                    <div className="text-[14px] font-[500] leading-[16.8px] text-[#D61D25] lg:text-[16px] lg:leading-[19.2px] lg:font-[600]">
                      {file?.name}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Image
                      src={warningIcon}
                      alt="Warning Icon"
                      className="w-4 h-4 lg:w-6 lg:h-6"
                    />
                    <Image
                      src={deleteIcon}
                      onClick={handleRemove}
                      alt="Delete Icon"
                      className="w-4 h-4 lg:w-6 lg:h-6 cursor-pointer"
                    />
                  </div>
                </div>

                <div className="mt-[10px] text-[12px] font-[400] leading-[14.4px] text-[#D61D25] lg:text-[14px] lg:leading-[16.8px]">
                  {fileError}
                </div>
              </div>
            ) : (
              file && (
                <div className="mt-4 w-full h-full flex flex-col lg:mt-7">
                  <div className="w-full flex justify-between">
                    <div className="flex gap-2">
                      <Image
                        src={fileSuccess}
                        alt="File Success"
                        className="w-4 h-4 lg:w-6 lg:h-6"
                      />
                      <p className="text-[#1A2434] text-[14px] leading-[16.8px] font-[500] truncate w-full lg:text-[16px] lg:leading-[19.2px] lg:font-[600]">
                        {file.name}
                      </p>
                    </div>
                    <div className="flex gap-4">
                      <Image
                        src={checkedIcon}
                        alt="Checked Icon"
                        className="w-4 h-4 lg:w-6 lg:h-6"
                      />
                      <Image
                        src={deleteIcon}
                        onClick={handleRemove}
                        alt="Delete Icon"
                        className="w-4 h-4 cursor-pointer lg:w-6 lg:h-6"
                      />
                    </div>
                  </div>
                  <div className="w-full bg-[#E5E7EB] h-1 mt-[18px]">
                    <div
                      className="bg-[#4D1435] h-full"
                      style={{ width: `${calculateUsedPercentage()}%` }}
                    ></div>
                  </div>
                  <p className="text-[#1A2434] text-[12px] text-end mt-2">
                    {displayFileSize(fileSize)} / 5 MB
                  </p>
                </div>
              )
            )}

            <div className="relative mt-6 w-[328px] h-20 rounded-[20px] border bg-[#F3F4F6] flex items-center justify-center text-center sm:self-center lg:h-[102px] lg:w-full lg:mt-8">
              <input
                type="file"
                className="absolute opacity-0 w-full h-full cursor-pointer"
                onChange={handleFileUpload}
              />

              <p className="text-[#1A2434A8] text-[14px] font-[500] lg:hidden">
                Choose a file <br />
                <span className="text-[12px]">Size limit: 5 MB</span>
              </p>
              <p className="hidden lg:block text-[16px] font-[500] leading-[19.2px] text-[#1A2434A8]">
                Choose a file or drag & drop here <br />
                <span className="text-[12px]">Size limit: 5 MB</span>
              </p>
            </div>

            <section className="px-6 py-4 mt-8 flex gap-[14px] items-center bg-[#4D1435] w-[144px] mx-auto rounded-[50px] cursor-pointer lg:mt-[101px] lg:w-[283px] lg:py-6 lg:px-20 ">
              <section className="text-[16px] font-[700] leading-[19.2px] text-white lg:text-[24px] lg:font-[600] lg:leading-[28.8px] ">
                Submit
              </section>
              <Image
                src={rightArrow}
                alt="Right Arrow Icon"
                className="w-4 h-4 lg:w-6 lg:h-6"
              />
            </section>
          </form>
        </section>

        <section className="mt-[52px] grid justify-items-center lg:mt-0 lg:flex-grow lg:flex-shrink-0 lg:basis-1/2 lg:pt-[42px] xl:basis-[481px]">
          <Image
            src={customerCare}
            alt="Customer Care Image"
            className="w-[158.11px] h-[107px] lg:w-[416px] lg:h-[284px] "
          />

          <section className="mt-8 text-[14px] font-[400] leading-[16.8px] text-center w-[282px] text-[#1A2434] mx-auto lg:mt-20 lg:text-[24px] lg:leading-[28.8px] lg:w-auto lg:text-left ">
            Get in touch with your questions about KGK Program or its courses
          </section>

          <section className="mt-6 w-[179px] text-[16px] font-[400] leading-[19.2px] text-[#1A2434] text-center lg:text-[24px] lg:leading-[28.8px] lg:w-auto lg:mt-6">
            Chat on WhatsApp with{" "}
            <span className="font-[600]">+91-9394360040</span>
          </section>

          <section className="mt-4 bg-[#60D669] h-[51px] w-[165px] px-7 py-4 rounded-[50px] lg:mt-[52px] lg:w-[315px] lg:h-[77px] lg:px-20 lg:py-6">
            <Link
              href="https://wa.me/+919394360040"
              className="flex gap-[14px] justify-center items-center w-full h-full "
            >
              <section className="text-[16px] font-[700] leading-[19.2px] text-white lg:text-[24px] lg:font-[600] lg:leading-[28.8px]">
                Chat Now
              </section>
              <Image
                src={whatsappImage}
                alt="Whats App Image"
                className="w-4 h-4 lg:w-6 lg:h-6"
              />
            </Link>
          </section>
        </section>
      </section>
    </div>
  );
};

export default Contact;
