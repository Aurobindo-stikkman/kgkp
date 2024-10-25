"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import BlackButton from "@/app/components/Button/BlackButton";
import "./styles.css";

const engageType = [
  "In-person consultations",
  "Website/blog",
  "Community events",
  "Email",
  "WhatsApp",
  "Social media (Instagram, Facebook, etc.)",
  "Other",
];
const professions = ["Teacher", "Paediatrician", "Gynaecologist", "Other"];
const approxClients = ["0 - 1", "10 - 50", "100 - 200", "200 - 500", "500+"];

const AffiliateForm = () => {
  const router = useRouter();
  const [toggle, setToggle] = useState(false);
  const [fileSubmitted, setFileSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [preventReload, setPreventReload] = useState(false);

  // Handle browser refresh/close
  useEffect(() => {
    if (!preventReload) return;

    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [preventReload]);

  const handleToggle = () => setToggle(!toggle);

  const validationSchema = Yup.object({
    fullName: Yup.string().required("This is a required field").min(3),
    dob: Yup.date()
      .required("Date of Birth is a required field")
      .nullable()
      .min(new Date(1900, 0, 1), "Date of birth must be after January 1, 1900")
      .max(new Date(), "Date of birth cannot be in the future"),

    email: Yup.string().email().required(),
    phone: Yup.string().required(),
    location: Yup.string().required(),

    profession: Yup.string().required().oneOf(professions),

    education: Yup.string().required(),

    organizationName: Yup.string().required(),

    approxClients: Yup.string().required().oneOf(approxClients),

    engagedType: Yup.array()
      .of(Yup.string().oneOf(engageType))
      .min(1, "Select at least One")
      .required("This is a required field"),

    planToPromote: Yup.array()
      .of(Yup.string().oneOf(engageType))
      .min(1, "Select at least One")
      .required("This is a required field"),

    message: Yup.string(),
  });

  const initialValues = {
    fullName: "",
    dob: "",
    email: "",
    phone: "",
    location: "",
    profession: "",
    education: "",
    organizationName: "",
    approxClients: "",
    engagedType: [],
    planToPromote: [],
    message: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (value: any, { resetForm }) => {
      console.log("value submitted", value);
      setFileSubmitted(true);
      setPreventReload(false);
      resetForm();
    },
  });

  const handleEngageType = (value: string) => {
    const engagedTypes = [...formik.values.engagedType];

    if (engagedTypes.includes(value)) {
      const updatedTypes = engagedTypes.filter((ele: string) => ele !== value);
      formik.setFieldValue("engagedType", updatedTypes);
    } else {
      formik.setFieldValue("engagedType", [...engagedTypes, value]);
    }
  };

  const handlePromoteType = (value: string) => {
    const engagedTypes = [...formik.values.planToPromote];

    if (engagedTypes.includes(value)) {
      const updatedTypes = engagedTypes.filter((ele: string) => ele !== value);
      formik.setFieldValue("planToPromote", updatedTypes);
    } else {
      formik.setFieldValue("planToPromote", [...engagedTypes, value]);
    }
  };

  // ?...............................
  useEffect(() => {
    if (
      Object.values(formik.values).some(
        (val) => (val as string | []).length > 0
      )
    ) {
      setPreventReload(true);
    } else {
      setPreventReload(false);
    }
  }, [formik.values]);

  const confirmNavigation = () => {
    formik.resetForm();
    formik.setTouched({}, false);
    setShowModal(false);
    setPreventReload(false);
    setToggle(false);
  };

  const cancelNavigation = () => {
    setShowModal(false);
  };
  // ?...............................

  const handleBackButton = () => {
    if (preventReload) {
      setShowModal(true);
    } else {
      formik.setTouched({}, false);
      handleToggle();
      setShowModal(false);
      setFileSubmitted(false);
    }
  };

  return (
    <>
      {toggle ? (
        <div className="fixed inset-0 z-[99999] bg-white overflow-y-auto overflow-x-hidden ">
          {fileSubmitted ? (
            <section className="relative h-full w-full flex flex-col justify-center items-center lg:h-[488px] ">
              <svg
                className="absolute w-6 h-6 top-7 right-5 "
                onClick={handleBackButton}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Close" clip-path="url(#clip0_3355_4935)">
                  <path
                    id="Vector"
                    d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                    fill="#1A2434"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_3355_4935">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <svg
                width="129"
                height="129"
                className="animate-success-tick"
                viewBox="0 0 129 129"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="charm:circle-tick">
                  <g id="Group">
                    <path
                      id="Vector"
                      d="M114.889 70.5474C110.857 90.7037 95.6595 109.683 74.3342 113.924C63.9335 115.995 53.1444 114.732 43.5032 110.315C33.862 105.898 25.8602 98.5512 20.6371 89.3217C15.414 80.0921 13.2359 69.45 14.413 58.9106C15.59 48.3712 20.0622 38.4718 27.1927 30.6219C41.8181 14.5131 66.5136 10.0787 86.6698 18.1412"
                      stroke="#75C0B1"
                      strokeWidth="12.9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{
                        strokeDasharray: 300,
                        strokeDashoffset: 300,
                      }}
                    />
                    {/* Check Path */}
                    <path
                      id="Vector_2"
                      d="M46.3594 62.4854L66.5156 82.6416L114.891 30.2354"
                      stroke="#75C0B1"
                      strokeWidth="12.9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{
                        strokeDasharray: 100,
                        strokeDashoffset: 100,
                      }}
                    />
                  </g>
                </g>
              </svg>

              <div className="mt-8 text-[32px] font-[600] leading-[38.73px] text-[#1A2434] w-[172px] mx-auto ">
                Thank you!
              </div>

              <div className="mt-4 w-[291px] text-sm font-normal leading-[21px] text-[#1A2434] text-center text-balance ">
                Your Affiliate Application Form has been{" "}
                <span className="block">successfully submitted.</span>
                We will reach out to you shortly.
              </div>

              <button
                onClick={() => {
                  handleToggle();
                  setFileSubmitted(false);
                }}
                className="fixed bottom-7 left-1/2 -translate-x-1/2 h-[43px] w-[130px] px-3 py-8 rounded-[40px] flex justify-center items-center gap-[5.5px] bg-[#4D1435] "
              >
                <span className="text-base font-semibold leading-[19.36px] text-white ">
                  Done
                </span>

                <svg
                  className="w-4 h-4"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="check 1">
                    <path
                      id="Vector"
                      d="M12.4693 5.29961C12.2026 5.03294 11.8026 5.03294 11.5359 5.29961L6.53594 10.2996L4.46927 8.23294C4.2026 7.96628 3.8026 7.96628 3.53594 8.23294C3.26927 8.49961 3.26927 8.89961 3.53594 9.16628L6.06927 11.6996C6.2026 11.8329 6.33594 11.8996 6.53594 11.8996C6.73594 11.8996 6.86927 11.8329 7.0026 11.6996L12.4693 6.23294C12.7359 5.96628 12.7359 5.56628 12.4693 5.29961Z"
                      fill="white"
                    />
                  </g>
                </svg>
              </button>
            </section>
          ) : (
            <>
              <section className="flex gap-3 border-b px-4 py-3 ">
                <svg
                  onClick={handleBackButton}
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="icon-arrow-left">
                    <path
                      id="Shape"
                      d="M8.47271 3.80458C8.73306 3.54423 8.73306 3.12212 8.47271 2.86177C8.21236 2.60142 7.79025 2.60142 7.5299 2.86177L2.86323 7.52843C2.60288 7.78878 2.60288 8.21089 2.86323 8.47124L7.5299 13.1379C7.79025 13.3983 8.21236 13.3983 8.47271 13.1379C8.73306 12.8776 8.73306 12.4554 8.47271 12.1951L4.94411 8.6665L12.668 8.6665C13.0362 8.6665 13.3346 8.36803 13.3346 7.99984C13.3346 7.63165 13.0362 7.33317 12.668 7.33317L4.94411 7.33317L8.47271 3.80458Z"
                      fill="#2D3648"
                    />
                  </g>
                </svg>

                <div className="text-base font-[600] leading-[19.2px] text-[#1A2434] ">
                  Affiliate Application Form
                </div>
              </section>

              <form
                onSubmit={formik.handleSubmit}
                className="max-w-[600px] mx-auto mt-4 grid gap-4 "
              >
                {/* Full Name */}
                <div className="mx-4">
                  <label htmlFor="fullName">Full Name*</label>
                  <div className="relative mt-2">
                    <input
                      type="text"
                      name="fullName"
                      id="fullName"
                      placeholder="Type here"
                      className="w-full px-4 py-2 rounded-lg border border-[#1A24341A] text-sm font-normal leading-6 text-[#1A2434] placeholder:text-[#1A243454] placeholder:text-sm placeholder:font-normal placeholder:leading-6 "
                      value={formik.values.fullName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />

                    {formik.touched.fullName &&
                      typeof formik.errors.fullName === "string" && (
                        <svg
                          width="24"
                          height="24"
                          className="absolute top-1/2 -translate-y-1/2 right-4 "
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="icon" clip-path="url(#clip0_3355_4697)">
                            <path
                              id="Vector"
                              d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"
                              fill="#D61D25"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_3355_4697">
                              <rect width="24" height="24" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      )}
                  </div>
                  {formik.touched.fullName &&
                  typeof formik.errors.fullName === "string" ? (
                    <div className="mt-2 text-xs font-normal leading-[18px] text-[#D61D25]">
                      {formik.errors.fullName}
                    </div>
                  ) : null}
                </div>

                {/* DOB */}
                <div className="mx-4">
                  <label htmlFor="dob">Date Of Birth*</label>
                  <div className="relative mt-2">
                    <input
                      type="date"
                      name="dob"
                      id="dob"
                      placeholder="Select a Date"
                      className="w-full px-4 py-2 rounded-lg border border-[#1A24341A] text-sm font-normal leading-6 text-[#1A2434] placeholder:text-[#1A243454] placeholder:text-sm placeholder:font-normal placeholder:leading-6 "
                      value={formik.values.dob}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />

                    {formik.touched.dob &&
                      typeof formik.errors.dob === "string" && (
                        <svg
                          width="24"
                          height="24"
                          className="absolute top-1/2 -translate-y-1/2 right-4 pointer-events-none "
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="icon" clip-path="url(#clip0_3355_4697)">
                            <path
                              id="Vector"
                              d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"
                              fill="#D61D25"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_3355_4697">
                              <rect width="24" height="24" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      )}
                  </div>
                  {formik.touched.dob &&
                  typeof formik.errors.dob === "string" ? (
                    <div className="mt-2 text-xs font-normal leading-[18px] text-[#D61D25]">
                      {formik.errors.dob}
                    </div>
                  ) : null}
                </div>

                {/* Email */}
                <div className="mx-4">
                  <label htmlFor="email">Email Address*</label>
                  <div className="relative mt-2">
                    <input
                      type="text"
                      name="email"
                      id="email"
                      placeholder="Type here"
                      className="w-full px-4 py-2 rounded-lg border border-[#1A24341A] text-sm font-normal leading-6 text-[#1A2434] placeholder:text-[#1A243454] placeholder:text-sm placeholder:font-normal placeholder:leading-6 "
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />

                    {formik.touched.email &&
                      typeof formik.errors.email === "string" && (
                        <svg
                          width="24"
                          height="24"
                          className="absolute top-1/2 -translate-y-1/2 right-4 pointer-events-none "
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="icon" clip-path="url(#clip0_3355_4697)">
                            <path
                              id="Vector"
                              d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"
                              fill="#D61D25"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_3355_4697">
                              <rect width="24" height="24" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      )}
                  </div>
                  {formik.touched.email &&
                  typeof formik.errors.email === "string" ? (
                    <div className="mt-2 text-xs font-normal leading-[18px] text-[#D61D25]">
                      {formik.errors.email}
                    </div>
                  ) : null}
                </div>

                {/* Phone */}
                <div className="mx-4">
                  <label htmlFor="phone">Phone Number*</label>
                  <div className="relative mt-2">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      placeholder="Type here"
                      className="w-full px-4 py-2 rounded-lg border border-[#1A24341A] text-sm font-normal leading-6 text-[#1A2434] placeholder:text-[#1A243454] placeholder:text-sm placeholder:font-normal placeholder:leading-6 "
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />

                    {formik.touched.phone &&
                      typeof formik.errors.phone === "string" && (
                        <svg
                          width="24"
                          height="24"
                          className="absolute top-1/2 -translate-y-1/2 right-4 pointer-events-none "
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="icon" clip-path="url(#clip0_3355_4697)">
                            <path
                              id="Vector"
                              d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"
                              fill="#D61D25"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_3355_4697">
                              <rect width="24" height="24" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      )}
                  </div>
                  {formik.touched.phone &&
                  typeof formik.errors.phone === "string" ? (
                    <div className="mt-2 text-xs font-normal leading-[18px] text-[#D61D25]">
                      {formik.errors.phone}
                    </div>
                  ) : null}
                </div>

                {/* Location */}
                <div className="mx-4">
                  <label htmlFor="location">Location*</label>
                  <div className="relative mt-2">
                    <input
                      type="text"
                      name="location"
                      id="location"
                      placeholder="Type here"
                      className="w-full px-4 py-2 rounded-lg border border-[#1A24341A] text-sm font-normal leading-6 text-[#1A2434] placeholder:text-[#1A243454] placeholder:text-sm placeholder:font-normal placeholder:leading-6 "
                      value={formik.values.location}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />

                    {formik.touched.location &&
                      typeof formik.errors.location === "string" && (
                        <svg
                          width="24"
                          height="24"
                          className="absolute top-1/2 -translate-y-1/2 right-4 pointer-events-none "
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="icon" clip-path="url(#clip0_3355_4697)">
                            <path
                              id="Vector"
                              d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"
                              fill="#D61D25"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_3355_4697">
                              <rect width="24" height="24" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      )}
                  </div>
                  {formik.touched.location &&
                  typeof formik.errors.location === "string" ? (
                    <div className="mt-2 text-xs font-normal leading-[18px] text-[#D61D25]">
                      {formik.errors.location}
                    </div>
                  ) : null}
                </div>

                {/* Profession */}
                <div className="mx-4">
                  <label htmlFor="profession">Profession*</label>
                  <div className="relative mt-2">
                    <select
                      name="profession"
                      id="profession"
                      className="w-full appearance-none px-4 py-2 rounded-lg border border-[#1A24341A] text-sm font-normal leading-6 text-[#1A2434] placeholder:text-[#1A243454] placeholder:text-sm placeholder:font-normal placeholder:leading-6 "
                      value={formik.values.profession}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    >
                      <option selected disabled value="">
                        Select One
                      </option>
                      {professions.map((profession) => {
                        return (
                          <option key={profession} value={profession}>
                            {profession}
                          </option>
                        );
                      })}
                    </select>

                    {formik.touched.profession &&
                      typeof formik.errors.profession === "string" && (
                        <svg
                          width="24"
                          height="24"
                          className="absolute top-1/2 -translate-y-1/2 right-4 pointer-events-none "
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="icon" clip-path="url(#clip0_3355_4697)">
                            <path
                              id="Vector"
                              d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"
                              fill="#D61D25"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_3355_4697">
                              <rect width="24" height="24" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      )}
                  </div>
                  {formik.touched.profession &&
                  typeof formik.errors.profession === "string" ? (
                    <div className="mt-2 text-xs font-normal leading-[18px] text-[#D61D25]">
                      {formik.errors.profession}
                    </div>
                  ) : null}
                </div>

                {/* Education */}
                <div className="mx-4">
                  <label htmlFor="education">Educational Qualification*</label>
                  <div className="relative mt-2">
                    <input
                      type="text"
                      name="education"
                      id="education"
                      placeholder="Type here"
                      className="w-full px-4 py-2 rounded-lg border border-[#1A24341A] text-sm font-normal leading-6 text-[#1A2434] placeholder:text-[#1A243454] placeholder:text-sm placeholder:font-normal placeholder:leading-6 "
                      value={formik.values.education}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />

                    {formik.touched.education &&
                      typeof formik.errors.education === "string" && (
                        <svg
                          width="24"
                          height="24"
                          className="absolute top-1/2 -translate-y-1/2 right-4 pointer-events-none "
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="icon" clip-path="url(#clip0_3355_4697)">
                            <path
                              id="Vector"
                              d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"
                              fill="#D61D25"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_3355_4697">
                              <rect width="24" height="24" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      )}
                  </div>
                  {formik.touched.education &&
                  typeof formik.errors.education === "string" ? (
                    <div className="mt-2 text-xs font-normal leading-[18px] text-[#D61D25]">
                      {formik.errors.education}
                    </div>
                  ) : null}
                </div>

                {/* Organization */}
                <div className="mx-4">
                  <label htmlFor="organizationName">
                    Institution or Organization Name
                  </label>
                  <div className="relative mt-2">
                    <input
                      type="text"
                      name="organizationName"
                      id="organizationName"
                      placeholder="Type here"
                      className="w-full px-4 py-2 rounded-lg border border-[#1A24341A] text-sm font-normal leading-6 text-[#1A2434] placeholder:text-[#1A243454] placeholder:text-sm placeholder:font-normal placeholder:leading-6 "
                      value={formik.values.organizationName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />

                    {formik.touched.organizationName &&
                      typeof formik.errors.organizationName === "string" && (
                        <svg
                          width="24"
                          height="24"
                          className="absolute top-1/2 -translate-y-1/2 right-4 pointer-events-none "
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="icon" clip-path="url(#clip0_3355_4697)">
                            <path
                              id="Vector"
                              d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"
                              fill="#D61D25"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_3355_4697">
                              <rect width="24" height="24" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      )}
                  </div>
                  {formik.touched.organizationName &&
                  typeof formik.errors.organizationName === "string" ? (
                    <div className="mt-2 text-xs font-normal leading-[18px] text-[#D61D25]">
                      {formik.errors.organizationName}
                    </div>
                  ) : null}
                </div>

                {/* ApproxClients */}
                <div className="mx-4">
                  <label htmlFor="approxClients">
                    Approximate Number of Clients/Parents in Your Network*
                  </label>
                  <div className="relative mt-2">
                    <select
                      name="approxClients"
                      id="approxClients"
                      className="w-full appearance-none px-4 py-2 rounded-lg border border-[#1A24341A] text-sm font-normal leading-6 text-[#1A2434] placeholder:text-[#1A243454] placeholder:text-sm placeholder:font-normal placeholder:leading-6"
                      value={formik.values.approxClients}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    >
                      <option
                        className="text-sm font-normal leading-6 text-[#1A2434] "
                        selected
                        disabled
                        value=""
                      >
                        Select One
                      </option>
                      {approxClients.map((approxClients) => {
                        return (
                          <option
                            className="text-sm font-normal leading-6 text-[#1A2434] "
                            key={approxClients}
                            value={approxClients}
                          >
                            {approxClients}
                          </option>
                        );
                      })}
                    </select>

                    {formik.touched.approxClients &&
                      typeof formik.errors.approxClients === "string" && (
                        <svg
                          width="24"
                          height="24"
                          className="absolute top-1/2 -translate-y-1/2 right-4 pointer-events-none "
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="icon" clip-path="url(#clip0_3355_4697)">
                            <path
                              id="Vector"
                              d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"
                              fill="#D61D25"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_3355_4697">
                              <rect width="24" height="24" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      )}
                  </div>
                  {formik.touched.approxClients &&
                  typeof formik.errors.approxClients === "string" ? (
                    <div className="mt-2 text-xs font-normal leading-[18px] text-[#D61D25]">
                      {formik.errors.approxClients}
                    </div>
                  ) : null}
                </div>

                {/* Engaged Type */}
                <div className="mx-4">
                  <label>
                    How Do You Currently Engage with Pregnant Women and/or
                    Parents of Children aged 0 to 15 years?
                  </label>
                  <div className="mt-2 space-y-2">
                    {engageType.map((engage) => (
                      <div key={engage} className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          name="engagedType"
                          id={engage}
                          value={engage}
                          checked={formik.values.engagedType.includes(engage)}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className="hidden"
                        />
                        <span
                          onClick={() => handleEngageType(engage)}
                          className={`w-5 h-5 flex justify-center items-center border-[#CCCCCC] bg-white rounded-md border `}
                        >
                          {formik.values.engagedType.includes(engage) ? (
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g id="check" clip-path="url(#clip0_3443_448)">
                                <path
                                  id="Vector"
                                  d="M7.49818 13.4751L4.02318 10.0001L2.83984 11.1751L7.49818 15.8334L17.4982 5.83345L16.3232 4.65845L7.49818 13.4751Z"
                                  fill="#75C0B1"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_3443_448">
                                  <rect width="20" height="20" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          ) : null}
                        </span>
                        <label
                          htmlFor={engage}
                          className="block text-sm font-normal leading-6 text-[#1A2434]"
                        >
                          {engage}
                        </label>
                      </div>
                    ))}
                  </div>

                  {formik.touched.engagedType &&
                  typeof formik.errors.engagedType === "string" ? (
                    <div className="mt-2 text-xs font-normal leading-[18px] text-[#D61D25]">
                      {formik.errors.engagedType}
                    </div>
                  ) : null}
                </div>

                {/* Plan to Promote */}
                <div className="mx-4">
                  <label>
                    How Do You Plan to Promote Kaushalya Genius Kid Program
                    (KGKP)?*
                  </label>
                  <div className="mt-2 space-y-2">
                    {engageType.map((engage) => (
                      <div key={engage} className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          name="planToPromote"
                          id={`${engage}-ptp`}
                          value={engage}
                          checked={formik.values.planToPromote.includes(engage)}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className="hidden"
                        />
                        <span
                          onClick={() => handlePromoteType(engage)}
                          className={`w-5 h-5 flex justify-center items-center border-[#CCCCCC] bg-white rounded-md border cursor-pointer`}
                        >
                          {formik.values.planToPromote.includes(engage) ? (
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g id="check" clipPath="url(#clip0_3443_448)">
                                <path
                                  id="Vector"
                                  d="M7.49818 13.4751L4.02318 10.0001L2.83984 11.1751L7.49818 15.8334L17.4982 5.83345L16.3232 4.65845L7.49818 13.4751Z"
                                  fill="#75C0B1"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_3443_448">
                                  <rect width="20" height="20" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          ) : null}
                        </span>

                        <label
                          htmlFor={`${engage}-ptp`}
                          className="block text-sm font-normal leading-6 text-[#1A2434] cursor-pointer"
                        >
                          {engage}
                        </label>
                      </div>
                    ))}
                  </div>

                  {formik.touched.planToPromote &&
                  typeof formik.errors.planToPromote === "string" ? (
                    <div className="mt-2 text-xs font-normal leading-[18px] text-[#D61D25]">
                      {formik.errors.planToPromote}
                    </div>
                  ) : null}
                </div>

                {/* Full Name */}
                <div className="mx-4">
                  <label htmlFor="message">
                    How did you find out about the KGKP Affiliate Program?{" "}
                  </label>
                  <div className="relative mt-2">
                    <input
                      type="text"
                      name="message"
                      id="message"
                      placeholder="Type here"
                      className="w-full px-4 py-2 rounded-lg border border-[#1A24341A] text-sm font-normal leading-6 text-[#1A2434] placeholder:text-[#1A243454] placeholder:text-sm placeholder:font-normal placeholder:leading-6 "
                      value={formik.values.message}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />

                    {formik.touched.message &&
                      typeof formik.errors.message === "string" && (
                        <svg
                          width="24"
                          height="24"
                          className="absolute top-1/2 -translate-y-1/2 right-4 "
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="icon" clip-path="url(#clip0_3355_4697)">
                            <path
                              id="Vector"
                              d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"
                              fill="#D61D25"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_3355_4697">
                              <rect width="24" height="24" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      )}
                  </div>
                  {formik.touched.message &&
                  typeof formik.errors.message === "string" ? (
                    <div className="mt-2 text-xs font-normal leading-[18px] text-[#D61D25]">
                      {formik.errors.message}
                    </div>
                  ) : null}
                </div>

                <section className="mt-8 py-4 border-t border-t-[#DCDCDC] ">
                  <BlackButton
                    type="submit"
                    styles={{
                      width: "144px",
                      height: "42px",
                      margin: "0 auto",
                    }}
                    text="Submit"
                  />
                </section>
              </form>

              {showModal && (
                <div className="fixed bg-[#00000099] z-50 inset-0 ">
                  <section className="fixed bottom-0 rounded-t-[50px] left-0 right-0 h-[236px] px-6 pt-[52px] pb-8 bg-white ">
                    <div className="w-[202px] mx-auto text-base font-semibold leading-5 text-center text-[#1E1E1E] ">
                      Are you sure you want to leave this page?
                    </div>

                    <div className="mt-3 w-[226px] mx-auto text-xs font-normal leading-[19.6px] text-[#1A2434A8] text-center ">
                      The information you have entered will not be stored.
                    </div>

                    <section className="mt-6 flex justify-center items-center gap-4 ">
                      <button
                        onClick={confirmNavigation}
                        className="w-[131px] h-8 rounded-[50px] border border-[#4D1435] flex justify-center items-center text-sm font-medium leading-5 text-[#4D1435] "
                      >
                        Yes
                      </button>

                      <button
                        onClick={cancelNavigation}
                        className="w-[131px] h-8 rounded-[50px] bg-[#4D1435] flex justify-center items-center text-sm font-medium leading-5 text-white "
                      >
                        No
                      </button>
                    </section>
                  </section>
                </div>
              )}
            </>
          )}
        </div>
      ) : (
        <BlackButton
          onClick={handleToggle}
          text="Explore Our Courses"
          styles={{
            margin: "44px auto 0 auto",
            width: "255px",
          }}
        />
      )}
    </>
  );
};

export default AffiliateForm;
