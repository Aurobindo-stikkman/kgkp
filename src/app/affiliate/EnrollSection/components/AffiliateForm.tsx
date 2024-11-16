"use client";
import Image from "next/image";

import { useState, useEffect, useRef, cloneElement } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import qrCode from "./QR-Code.jpeg";

import "./styles.css";

const engageType = [
  "In-person consultations",
  "At School",
  "Workshops",
  "Email",
  "WhatsApp",
  "Social media (Instagram, Facebook, etc.)",
  "Online platforms",
  "Other",
];

const Plan_To_Promote = [
  "In-person consultations",
  "Website/blog",
  "Community events",
  "Email",
  "WhatsApp",
  "Social media (Instagram, Facebook, etc.)",
  "Other",
];
const professions = ["Teacher", "Paediatrician", "Gynaecologist", "Other"];
const Approx_number_clients = [
  "0 - 1",
  "10 - 50",
  "100 - 200",
  "200 - 500",
  "500+",
];

interface AffiliateFormProps {
  isToggle?: boolean;
  toggleStateFalse?: () => void;
  children?: React.ReactNode;
}

const AffiliateForm = ({
  isToggle,
  toggleStateFalse,
  children,
}: AffiliateFormProps) => {
  const [makingRequest, setMakingRequest] = useState(false);
  const [toggle, setToggle] = useState(isToggle || false);
  const [fileSubmitted, setFileSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [preventReload, setPreventReload] = useState(false);
  const [professionDropdown, setProfessionDropdown] = useState({
    isOpen: false,
    value: "",
  });
  const [approxClientsDropdown, setapproxClientsDropdown] = useState({
    isOpen: false,
    value: "",
  });
  const professionalDropdownRef = useRef<HTMLDivElement>(null);
  const approxClientDropdownRef = useRef<HTMLDivElement>(null);
  const [selectedValue, setSelectedValue] = useState<string>("cp1");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const handleToggle = () => setToggle(!toggle);

  const validationSchema = Yup.object({
    Full_Name: Yup.string().required("This is a required field").min(3),
    DOB: Yup.date()
      .required("This is a required field.")
      .nullable()
      .min(new Date(1900, 0, 1), "Date of birth must be after January 1, 1900")
      .max(new Date(), "Date of birth cannot be in the future"),

    Email: Yup.string()
      .email("Enter a valid Email")
      .required("This is a required field."),
    Phone: Yup.string()
      .matches(/^[0-9]+$/, "Enter a valid Phone Number.")
      .min(10, "Phone number must be exactly 10 digits.")
      .max(10, "Phone number must be exactly 10 digits.")
      .required("This is a required field."),

    Location: Yup.string().required("This is a required field."),

    Profession: Yup.string()
      .required("This is a required field")
      .oneOf(professions, "Please select a valid option"),

    Education: Yup.string().required("This is a required field."),

    Organization_Name: Yup.string().required("This is a required field."),

    Approx_number_clients: Yup.string()
      .required("This is a required field")
      .oneOf(Approx_number_clients, "Please select a valid option"),

    Engagement_Type: Yup.array()
      .of(Yup.string().oneOf(engageType))
      .min(1, "Select at least One")
      .required("This is a required field"),

    Plan_To_Promote: Yup.array()
      .of(Yup.string().oneOf(Plan_To_Promote))
      .min(1, "Select at least One")
      .required("This is a required field"),

    Message: Yup.string(),
  });

  const initialValues = {
    Full_Name: "",
    DOB: "",
    Email: "",
    Phone: "",
    Location: "",
    Profession: "",
    Education: "",
    Organization_Name: "",
    Approx_number_clients: "",
    Engagement_Type: [],
    Plan_To_Promote: [],
    Message: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (value: any, { resetForm }) => {
      const data = [];
      for (let key in value) {
        data.push(key + "=" + (value[key as keyof typeof value] ?? ""));
      }
      data.push(`Category=${selectedValue}`);
      console.log("data", data.join("&"));

      const URL =
        "https://script.google.com/macros/s/AKfycbyU2DHDG2sEwBOTOmT1BuByIIFeet1vs598lMAsPF94Cci5lMWU05ztnqNb4RXYta4/exec";
      try {
        setMakingRequest(true);
        const response = await fetch(URL, {
          method: "POST",
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
          body: data.join("&"),
        });

        if (response.ok) {
          setFileSubmitted(true);
          setPreventReload(false);
          setProfessionDropdown({
            isOpen: false,
            value: "",
          });
          setapproxClientsDropdown({
            isOpen: false,
            value: "",
          });
          resetForm();
          setMakingRequest(false);
        } else {
          setMakingRequest(false);
        }
      } catch (error) {
        console.log("Error happened", error);
        setMakingRequest(false);
      }
    },
  });

  const handleEngageType = (value: string) => {
    const engagedTypes = [...formik.values.Engagement_Type];

    if (engagedTypes.includes(value)) {
      const updatedTypes = engagedTypes.filter((ele: string) => ele !== value);
      formik.setFieldValue("Engagement_Type", updatedTypes);
    } else {
      formik.setFieldValue("Engagement_Type", [...engagedTypes, value]);
    }
  };

  const handlePromoteType = (value: string) => {
    const engagedTypes = [...formik.values.Plan_To_Promote];

    if (engagedTypes.includes(value)) {
      const updatedTypes = engagedTypes.filter((ele: string) => ele !== value);
      formik.setFieldValue("Plan_To_Promote", updatedTypes);
    } else {
      formik.setFieldValue("Plan_To_Promote", [...engagedTypes, value]);
    }
  };

  const handleBackButton = () => {
    if (preventReload) {
      setShowModal(true);
    } else {
      formik.setTouched({}, false);
      formik.resetForm();
      handleToggle();
      setShowModal(false);
      if (toggleStateFalse) toggleStateFalse();
      setFileSubmitted(false);
    }
  };

  const toggleDropdown = () => {
    if (!professionDropdown.isOpen) {
      setProfessionDropdown((prev) => ({ ...prev, isOpen: true }));
      return;
    }

    if (!formik.values.Profession) {
      formik.handleBlur({ target: { name: "Profession" } });
    }

    setProfessionDropdown((prev) => ({
      ...prev,
      isOpen: false,
    }));
  };

  const selectProfession = (event: React.MouseEvent, value: string) => {
    event.stopPropagation();

    setProfessionDropdown({
      isOpen: false,
      value: value,
    });

    formik.setFieldValue("Profession", value);
    formik.setFieldTouched("Profession", true, true);

    if (value) {
      setTimeout(() => {
        formik.setFieldError("Profession", "");
      }, 0);
    } else {
      formik.setFieldError("Profession", "Please select a Profession.");
    }

    // Delay re-render with a short timeout
    setTimeout(() => {
      setProfessionDropdown((prevState) => ({
        ...prevState,
        value: value,
      }));
    }, 50);
  };

  const toggleapproxClientsDropdown = () => {
    if (!approxClientsDropdown.isOpen) {
      setapproxClientsDropdown((prev) => ({ ...prev, isOpen: true }));
      return;
    }

    if (!formik.values.Approx_number_clients) {
      formik.handleBlur({ target: { name: "Approx_number_clients" } });
    }

    setapproxClientsDropdown((prev) => ({
      ...prev,
      isOpen: false,
    }));
  };

  const selectApproxClientsDropdown = (
    event: React.MouseEvent,
    value: string
  ) => {
    event.stopPropagation();

    setapproxClientsDropdown({
      isOpen: false,
      value: value,
    });

    formik.setFieldValue("Approx_number_clients", value);
    formik.setFieldTouched("Approx_number_clients", true, true);

    if (value) {
      setTimeout(() => {
        formik.setFieldError("Approx_number_clients", "");
      }, 0);
    } else {
      formik.setFieldError(
        "Approx_number_clients",
        "Please select a Approx_number_clients."
      );
    }

    // Delay re-render with a short timeout
    setTimeout(() => {
      setapproxClientsDropdown((prevState) => ({
        ...prevState,
        value: value,
      }));
    }, 50);
  };

  const confirmNavigation = () => {
    formik.resetForm();
    formik.setTouched({}, false);
    setProfessionDropdown({
      isOpen: false,
      value: "",
    });
    setapproxClientsDropdown({
      isOpen: false,
      value: "",
    });
    setShowModal(false);
    setPreventReload(false);
    setToggle(false);
  };

  const cancelNavigation = () => setShowModal(false);

  useEffect(() => {
    if (isToggle) setToggle(isToggle);
  }, [isToggle]);

  // Handle browser refresh/close
  useEffect(() => {
    if (!preventReload) return;

    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [preventReload]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        professionalDropdownRef.current &&
        !professionalDropdownRef.current.contains(event.target as Node)
      ) {
        setProfessionDropdown((prev) => ({ ...prev, isOpen: false }));
      }
    };

    // Attach the listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if professionalDropdownRef is defined and if click was outside
      if (
        approxClientDropdownRef.current &&
        !approxClientDropdownRef.current.contains(event.target as Node)
      ) {
        setapproxClientsDropdown((prev) => ({ ...prev, isOpen: false }));
      }
    };

    // Attach the listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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

  useEffect(() => {
    if (professionDropdown.value) {
      setProfessionDropdown((prevState) => ({
        ...prevState,
        isOpen: false,
        value: formik.values.Profession,
      }));
    }
  }, [formik.values.Profession]);

  useEffect(() => {
    if (approxClientsDropdown.value) {
      setapproxClientsDropdown((prevState) => ({
        ...prevState,
        isOpen: false,
        value: formik.values.Approx_number_clients,
      }));
    }
  }, [formik.values.Approx_number_clients]);

  return (
    <>
      {toggle ? (
        <div
          className={`fixed inset-0 z-[99999] bg-white overflow-y-auto overflow-x-hidden `}
        >
          {fileSubmitted ? (
            <section className="relative h-dvh w-full flex flex-col justify-center items-center ">
              <svg
                className="absolute w-6 h-6 top-7 right-5 md:hidden "
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

              <div className="mt-8 text-[32px] font-[600] leading-[38.73px] text-[#1A2434] w-[172px] mx-auto md:mt-[52px] md:w-auto ">
                Thank you!
              </div>

              <div className="mt-4 w-[291px] text-sm font-normal leading-[21px] text-[#1A2434] text-center text-balance md:text-wrap md:text-base md:leading-6 md:mt-6 md:w-[500px]">
                Your Affiliate Application Form has been{" "}
                <span className="block md:inline-block">
                  successfully submitted.
                </span>
                We will reach out to you shortly.
              </div>

              <button
                onClick={() => {
                  handleToggle();
                  setFileSubmitted(false);
                }}
                className="custom-black-button hidden md:flex gap-[14px] justify-center items-center mt-[52px] w-[390px] h-[77px] rounded-[50px] bg-[#4D1435] py-6 px-[50px] "
              >
                <span className="text-2xl font-semibold leading-[28.8px] text-white custom-button-icon">
                  Back To Affiliate Page
                </span>

                <svg
                  className="custom-button-icon w-6 h-6"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="icon-arrow-right">
                    <path
                      id="Shape"
                      className="fill-current text-white"
                      d="M7.5299 3.36177C7.79025 3.10142 8.21236 3.10142 8.47271 3.36177L13.1394 8.02843C13.3997 8.28878 13.3997 8.71089 13.1394 8.97124L8.47271 13.6379C8.21236 13.8983 7.79025 13.8983 7.5299 13.6379C7.26955 13.3776 7.26955 12.9554 7.5299 12.6951L11.0585 9.1665H3.33464C2.96645 9.1665 2.66797 8.86803 2.66797 8.49984C2.66797 8.13165 2.96645 7.83317 3.33464 7.83317H11.0585L7.5299 4.30457C7.26955 4.04423 7.26955 3.62212 7.5299 3.36177Z"
                    />
                  </g>
                </svg>
              </button>

              <button
                onClick={() => {
                  handleToggle();
                  setFileSubmitted(false);
                }}
                className="fixed bottom-7 left-1/2 -translate-x-1/2 h-[43px] w-[130px] px-3 py-8 rounded-[40px] flex justify-center items-center gap-[5.5px] bg-[#4D1435] md:hidden "
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
            <div className="max-w-[1440px] xl:mx-auto ">
              <section className="flex gap-3 border-b px-4 py-3 xl:mt-8 xl:ml-[118px] xl:border-none ">
                <svg
                  onClick={handleBackButton}
                  width="16"
                  height="16"
                  className="w-4 h-4 xl:w-6 xl:h-6 cursor-pointer"
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

                <div className="text-base font-[600] leading-[19.2px] text-[#1A2434] xl:hidden ">
                  Affiliate Application Form
                </div>

                <div
                  onClick={handleBackButton}
                  className="cursor-pointer text-base font-[600] leading-[19.2px] text-[#1A2434] hidden xl:inline "
                >
                  Back
                </div>
              </section>

              <h1 className="hidden xl:block w-[600px] mx-auto text-2xl font-bold leading-7 text-[#1A2434] text-center mt-[26px] ">
                Affiliate Application Form:
              </h1>
              <form
                onSubmit={formik.handleSubmit}
                className="max-w-[605px] mx-auto my-4 grid gap-4 xl:my-6 "
              >
                {/* Radio Buttons */}
                <label className="block text-base font-medium leading-[18px] text-[#1A2434]">
                  Select Affiliate Program
                </label>
                <div className="mx-4 md:mx-0 flex gap-12">
                  <div className="radio-container">
                    <input
                      type="radio"
                      id="cp1"
                      name="category"
                      value="cp1"
                      className="radio-input cursor-pointer"
                      checked={selectedValue === "cp1"}
                      onChange={handleChange}
                    />
                    <span className="custom-radio"></span>
                    <label className="cursor-pointer" htmlFor="cp1">
                      CP - 1
                    </label>
                  </div>

                  <div className="radio-container">
                    <input
                      type="radio"
                      id="cp2"
                      name="category"
                      value="cp2"
                      className="radio-input cursor-pointer"
                      checked={selectedValue === "cp2"}
                      onChange={handleChange}
                    />
                    <span className="custom-radio"></span>
                    <label className="cursor-pointer" htmlFor="cp2">
                      CP - 2
                    </label>
                  </div>
                </div>

                {/* Full Name */}
                <div className="mx-4 md:mx-0">
                  <label
                    className="text-base font-medium leading-[18px] text-[#1A2434] "
                    htmlFor="Full_Name"
                  >
                    Full Name*
                  </label>
                  <div className="relative mt-2">
                    <input
                      type="text"
                      name="Full_Name"
                      id="Full_Name"
                      placeholder="Type here"
                      className={`w-full px-4 py-2 focus:border-[#75C0B1] focus:border-[2.5px] focus:outline-none rounded-lg border border-[#1A24341A] text-sm font-normal leading-6 text-[#1A2434] placeholder:text-[#1A243454] placeholder:text-sm placeholder:font-normal placeholder:leading-6 ${
                        formik.errors.Full_Name && formik.touched.Full_Name
                          ? "border-[2.5px] border-[#D61D25] focus:border-[#D61D25]"
                          : ""
                      }`}
                      value={formik.values.Full_Name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />

                    {formik.touched.Full_Name &&
                      typeof formik.errors.Full_Name === "string" && (
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
                  {formik.touched.Full_Name &&
                  typeof formik.errors.Full_Name === "string" ? (
                    <div className="mt-2 text-xs font-normal leading-[18px] text-[#D61D25]">
                      {formik.errors.Full_Name}
                    </div>
                  ) : null}
                </div>

                {/* DOB */}
                <div className="mx-4 md:mx-0">
                  <label
                    className="text-base font-medium leading-[18px] text-[#1A2434] "
                    htmlFor="DOB"
                  >
                    Date Of Birth*
                  </label>
                  <div className="relative mt-2">
                    <input
                      type="date"
                      name="DOB"
                      id="DOB"
                      placeholder="Select a Date"
                      className={`w-full px-4 py-2 rounded-lg border border-[#1A24341A] text-sm font-normal leading-6 text-[#1A2434] placeholder:text-[#1A243454] placeholder:text-sm placeholder:font-normal placeholder:leading-6 focus:border-[#75C0B1] focus:border-[2.5px] focus:outline-none ${
                        formik.errors.DOB && formik.touched.DOB
                          ? "border-[2.5px] border-[#D61D25] focus:border-[#D61D25]"
                          : ""
                      }`}
                      value={formik.values.DOB}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                  {formik.touched.DOB &&
                  typeof formik.errors.DOB === "string" ? (
                    <div className="mt-2 text-xs font-normal leading-[18px] text-[#D61D25]">
                      {formik.errors.DOB}
                    </div>
                  ) : null}
                </div>

                {/* Email */}
                <div className="mx-4 md:mx-0">
                  <label
                    className="text-base font-medium leading-[18px] text-[#1A2434] "
                    htmlFor="Email"
                  >
                    Email Address*
                  </label>
                  <div className="relative mt-2">
                    <input
                      type="text"
                      name="Email"
                      id="Email"
                      placeholder="Type here"
                      className={`w-full px-4 py-2 rounded-lg border border-[#1A24341A] text-sm font-normal leading-6 text-[#1A2434] placeholder:text-[#1A243454] placeholder:text-sm placeholder:font-normal placeholder:leading-6 focus:border-[#75C0B1] focus:border-[2.5px] focus:outline-none ${
                        formik.errors.Email && formik.touched.Email
                          ? "border-[2.5px] border-[#D61D25] focus:border-[#D61D25]"
                          : ""
                      }`}
                      value={formik.values.Email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />

                    {formik.touched.Email &&
                      typeof formik.errors.Email === "string" && (
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
                  {formik.touched.Email &&
                  typeof formik.errors.Email === "string" ? (
                    <div className="mt-2 text-xs font-normal leading-[18px] text-[#D61D25]">
                      {formik.errors.Email}
                    </div>
                  ) : null}
                </div>

                {/* Phone */}
                <div className="mx-4 md:mx-0">
                  <label
                    className="text-base font-medium leading-[18px] text-[#1A2434] "
                    htmlFor="Phone"
                  >
                    Phone Number*
                  </label>
                  <div className="relative mt-2">
                    <input
                      type="text"
                      name="Phone"
                      id="Phone"
                      placeholder="Type here"
                      className={`w-full px-4 py-2 rounded-lg border border-[#1A24341A] text-sm font-normal leading-6 text-[#1A2434] placeholder:text-[#1A243454] placeholder:text-sm placeholder:font-normal placeholder:leading-6 focus:border-[#75C0B1] focus:border-[2.5px] focus:outline-none ${
                        formik.errors.Phone && formik.touched.Phone
                          ? "border-[2.5px] border-[#D61D25] focus:border-[#D61D25]"
                          : ""
                      }`}
                      value={formik.values.Phone}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />

                    {formik.touched.Phone &&
                      typeof formik.errors.Phone === "string" && (
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
                  {formik.touched.Phone &&
                  typeof formik.errors.Phone === "string" ? (
                    <div className="mt-2 text-xs font-normal leading-[18px] text-[#D61D25]">
                      {formik.errors.Phone}
                    </div>
                  ) : null}
                </div>

                {/* Location */}
                <div className="mx-4 md:mx-0">
                  <label
                    className="text-base font-medium leading-[18px] text-[#1A2434] "
                    htmlFor="Location"
                  >
                    Location*
                  </label>
                  <div className="relative mt-2">
                    <input
                      type="text"
                      name="Location"
                      id="Location"
                      placeholder="Type here"
                      className={`w-full px-4 py-2 rounded-lg border border-[#1A24341A] text-sm font-normal leading-6 text-[#1A2434] placeholder:text-[#1A243454] placeholder:text-sm placeholder:font-normal placeholder:leading-6 focus:border-[#75C0B1] focus:border-[2.5px] focus:outline-none ${
                        formik.errors.Location && formik.touched.Location
                          ? "border-[2.5px] border-[#D61D25] focus:border-[#D61D25]"
                          : ""
                      }`}
                      value={formik.values.Location}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />

                    {formik.touched.Location &&
                      typeof formik.errors.Location === "string" && (
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
                  {formik.touched.Location &&
                  typeof formik.errors.Location === "string" ? (
                    <div className="mt-2 text-xs font-normal leading-[18px] text-[#D61D25]">
                      {formik.errors.Location}
                    </div>
                  ) : null}
                </div>

                {/* Profession */}
                <div ref={professionalDropdownRef} className="mx-4 md:mx-0">
                  <label className="text-base font-medium leading-[18px] text-[#1A2434] ">
                    Profession*
                  </label>
                  <div
                    onClick={toggleDropdown}
                    className={`h-[42px] mt-2 rounded-lg border px-[13px] py-3 flex justify-between items-center relative cursor-pointer text-sm font-normal leading-6 ${
                      professionDropdown.isOpen
                        ? "rounded-b-none border-[3px] border-[#75C0B1]"
                        : ""
                    } ${
                      formik.touched.Profession &&
                      typeof formik.errors.Profession === "string" &&
                      !professionDropdown.value
                        ? "border-[2.5px] border-[#D61D25] focus:border-[#D61D25]"
                        : "border-[#1A24341A]"
                    }`}
                  >
                    <span
                      className={` ${
                        formik.values.Profession
                          ? "text-black"
                          : "text-[#1A243454]"
                      }`}
                    >
                      {professionDropdown.value
                        ? professionDropdown.value
                        : "Select One"}
                    </span>

                    {professionDropdown.isOpen && (
                      <ul className="absolute bottom-[-160px] bg-white border border-t-0 border-[#1A24341A] left-[-3px] right-[-3px] z-10 rounded-b-lg overflow-hidden ">
                        {professions.map((Profession) => (
                          <li
                            onClick={(event) =>
                              selectProfession(event, Profession)
                            }
                            className="h-10 px-[13px] py-[11px] text-[#1A2434] text-sm font-normal leading-6 hover:bg-[#75C0B1] hover:text-white cursor-pointer border-t border-t-[#1A24341A]"
                            key={Profession}
                          >
                            {Profession}
                          </li>
                        ))}
                      </ul>
                    )}

                    {professionDropdown.isOpen && (
                      <svg
                        className="w-3 h-3 absolute top-1/2 -translate-y-1/2 right-4 rotate-180 "
                        viewBox="0 0 12 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          id="Vector"
                          d="M1.41 8L6 3.05533L10.59 8L12 6.47773L6 0L0 6.47773L1.41 8Z"
                          fill="#75C0B1"
                        />
                      </svg>
                    )}

                    {formik.touched.Profession &&
                      typeof formik.errors.Profession === "string" &&
                      !professionDropdown.value && (
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
                  {formik.touched.Profession &&
                  typeof formik.errors.Profession === "string" ? (
                    <div className="mt-2 text-xs font-normal leading-[18px] text-[#D61D25]">
                      {formik.errors.Profession}
                    </div>
                  ) : null}
                </div>

                {/* Education */}
                <div className="mx-4 md:mx-0">
                  <label
                    className="text-base font-medium leading-[18px] text-[#1A2434] "
                    htmlFor="Education"
                  >
                    Educational Qualification*
                  </label>
                  <div className="relative mt-2">
                    <input
                      type="text"
                      name="Education"
                      id="Education"
                      placeholder="Type here"
                      className={`w-full px-4 py-2 rounded-lg border border-[#1A24341A] text-sm font-normal leading-6 text-[#1A2434] placeholder:text-[#1A243454] placeholder:text-sm placeholder:font-normal placeholder:leading-6 focus:border-[#75C0B1] focus:border-[2.5px] focus:outline-none ${
                        formik.errors.Education && formik.touched.Education
                          ? "border-[2.5px] border-[#D61D25] focus:border-[#D61D25]"
                          : ""
                      }`}
                      value={formik.values.Education}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />

                    {formik.touched.Education &&
                      typeof formik.errors.Education === "string" && (
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
                  {formik.touched.Education &&
                  typeof formik.errors.Education === "string" ? (
                    <div className="mt-2 text-xs font-normal leading-[18px] text-[#D61D25]">
                      {formik.errors.Education}
                    </div>
                  ) : null}
                </div>

                {/* Organization */}
                <div className="mx-4 md:mx-0">
                  <label
                    className="text-base font-medium leading-[18px] text-[#1A2434] "
                    htmlFor="Organization_Name"
                  >
                    Institution or Organization Name
                  </label>
                  <div className="relative mt-2">
                    <input
                      type="text"
                      name="Organization_Name"
                      id="Organization_Name"
                      placeholder="Type here"
                      className={`w-full px-4 py-2 rounded-lg border border-[#1A24341A] text-sm font-normal leading-6 text-[#1A2434] placeholder:text-[#1A243454] placeholder:text-sm placeholder:font-normal placeholder:leading-6 focus:border-[#75C0B1] focus:border-[2.5px] focus:outline-none ${
                        formik.errors.Organization_Name &&
                        formik.touched.Organization_Name
                          ? "border-[2.5px] border-[#D61D25] focus:border-[#D61D25]"
                          : ""
                      }`}
                      value={formik.values.Organization_Name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />

                    {formik.touched.Organization_Name &&
                      typeof formik.errors.Organization_Name === "string" && (
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
                  {formik.touched.Organization_Name &&
                  typeof formik.errors.Organization_Name === "string" ? (
                    <div className="mt-2 text-xs font-normal leading-[18px] text-[#D61D25]">
                      {formik.errors.Organization_Name}
                    </div>
                  ) : null}
                </div>

                {/* ApproxClients */}
                <div ref={approxClientDropdownRef} className="mx-4 md:mx-0">
                  <label className="text-base font-medium leading-[18px] text-[#1A2434] ">
                    Approximate Number of Clients/Parents in Your Network*
                  </label>
                  <div
                    onClick={toggleapproxClientsDropdown}
                    className={`h-[42px] mt-2 rounded-lg border border-[#1A24341A] px-[13px] py-3 flex justify-between items-center relative cursor-pointer text-sm font-normal leading-6 ${
                      approxClientsDropdown.isOpen
                        ? "rounded-b-none border-[3px] border-[#75C0B1]"
                        : ""
                    } ${
                      formik.touched.Approx_number_clients &&
                      typeof formik.errors.Approx_number_clients === "string" &&
                      !approxClientsDropdown.value
                        ? "border-[2.5px] border-[#D61D25] focus:border-[#D61D25]"
                        : "border-[#1A24341A]"
                    }`}
                  >
                    <span
                      className={` ${
                        formik.values.Approx_number_clients
                          ? "text-black"
                          : "text-[#1A243454]"
                      }`}
                    >
                      {approxClientsDropdown.value
                        ? approxClientsDropdown.value
                        : "Select One"}
                    </span>

                    {approxClientsDropdown.isOpen && (
                      <ul className="absolute bottom-[-200px] bg-white border border-t-0 border-[#1A24341A] left-[-3px] right-[-3px] z-10 rounded-b-lg overflow-hidden ">
                        {Approx_number_clients.map((approxClient) => (
                          <li
                            onClick={(event) =>
                              selectApproxClientsDropdown(event, approxClient)
                            }
                            className="h-10 px-[13px] py-[11px] text-[#1A2434] text-sm font-normal leading-6 hover:bg-[#75C0B1] hover:text-white cursor-pointer border-t border-t-[#1A24341A]"
                            key={approxClient}
                          >
                            {approxClient}
                          </li>
                        ))}
                      </ul>
                    )}

                    {approxClientsDropdown.isOpen && (
                      <svg
                        className="w-3 h-3 absolute top-1/2 -translate-y-1/2 right-4 rotate-180 "
                        viewBox="0 0 12 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          id="Vector"
                          d="M1.41 8L6 3.05533L10.59 8L12 6.47773L6 0L0 6.47773L1.41 8Z"
                          fill="#75C0B1"
                        />
                      </svg>
                    )}

                    {formik.touched.Approx_number_clients &&
                      typeof formik.errors.Approx_number_clients === "string" &&
                      !approxClientsDropdown.value && (
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
                  {formik.touched.Approx_number_clients &&
                  typeof formik.errors.Approx_number_clients === "string" ? (
                    <div className="mt-2 text-xs font-normal leading-[18px] text-[#D61D25]">
                      {formik.errors.Approx_number_clients}
                    </div>
                  ) : null}
                </div>

                {/* Engaged Type */}
                <div className="mx-4 md:mx-0">
                  <label>
                    How Do You Currently Engage with Pregnant Women and/or
                    Parents of Children aged 0 to 15 years?
                  </label>
                  <div className="mt-2 space-y-2 xl:grid xl:grid-cols-2 ">
                    {engageType.map((engage) => (
                      <div key={engage} className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          name="Engagement_Type"
                          id={engage}
                          value={engage}
                          checked={formik.values.Engagement_Type.includes(
                            engage
                          )}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className="hidden"
                        />
                        <span
                          onClick={() => handleEngageType(engage)}
                          className={`w-5 h-5 flex justify-center items-center border-[#CCCCCC] bg-white rounded-md border cursor-pointer`}
                        >
                          {formik.values.Engagement_Type.includes(engage) ? (
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
                          className="block text-sm font-normal leading-6 text-[#1A2434] cursor-pointer"
                        >
                          {engage}
                        </label>
                      </div>
                    ))}
                  </div>

                  {formik.touched.Engagement_Type &&
                  typeof formik.errors.Engagement_Type === "string" ? (
                    <div className="mt-2 text-xs font-normal leading-[18px] text-[#D61D25]">
                      {formik.errors.Engagement_Type}
                    </div>
                  ) : null}
                </div>

                {/* Plan to Promote */}
                <div className="mx-4 md:mx-0">
                  <label>
                    How Do You Plan to Promote Kaushalya Genius Kid Program
                    (KGKP)?*
                  </label>
                  <div className="mt-2 space-y-2 xl:grid xl:grid-cols-2">
                    {Plan_To_Promote.map((engage) => (
                      <div key={engage} className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          name="Plan_To_Promote"
                          id={`${engage}-ptp`}
                          value={engage}
                          checked={formik.values.Plan_To_Promote.includes(
                            engage
                          )}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className="hidden"
                        />
                        <span
                          onClick={() => handlePromoteType(engage)}
                          className={`w-5 h-5 flex justify-center items-center border-[#CCCCCC] bg-white rounded-md border cursor-pointer`}
                        >
                          {formik.values.Plan_To_Promote.includes(engage) ? (
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

                  {formik.touched.Plan_To_Promote &&
                  typeof formik.errors.Plan_To_Promote === "string" ? (
                    <div className="mt-2 text-xs font-normal leading-[18px] text-[#D61D25]">
                      {formik.errors.Plan_To_Promote}
                    </div>
                  ) : null}
                </div>

                {/* Message */}
                <div className="mx-4 md:mx-0">
                  <label
                    className="text-base font-medium leading-[18px] text-[#1A2434] "
                    htmlFor="Message"
                  >
                    How did you find out about the KGKP Affiliate Program?{" "}
                  </label>
                  <div className="relative mt-2">
                    <input
                      type="text"
                      name="Message"
                      id="Message"
                      placeholder="Type here"
                      className={`w-full px-4 py-2 rounded-lg border border-[#1A24341A] text-sm font-normal leading-6 text-[#1A2434] placeholder:text-[#1A243454] placeholder:text-sm placeholder:font-normal placeholder:leading-6 focus:border-[#75C0B1] focus:border-[2.5px] focus:outline-none ${
                        formik.errors.Message && formik.touched.Message
                          ? "border-[2.5px] border-[#D61D25] focus:border-[#D61D25]"
                          : ""
                      }`}
                      value={formik.values.Message}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                </div>

                {/* QR Code */}
                {selectedValue === "cp1" && (
                  <div className="mx-4 md:mx-0 text-base font-medium leading-[18px] text-[#1A2434]">
                    <label>
                      Complete the payment of INR 5000/- via the QR Code or bank
                      transfer.
                    </label>
                    <label className="block ">QR Code-</label>

                    <Image
                      src={qrCode}
                      alt="QR Code"
                      className="my-5 rounded-lg object-cover "
                    />

                    <div className="mt-3">
                      <span className="block">Bank Transfer Details -</span>
                      <span className="block">Ru Education Pvt Ltd</span>
                      <span className="block">ICICI bank</span>
                      <span className="block">A/c no 777705180853</span>
                      <span className="block">IFSC Code ICIC0001121</span>
                    </div>
                  </div>
                )}

                <section className="mt-8 py-4 border-t border-t-[#DCDCDC] xl:border-none xl:m-0 xl:p-0 ">
                  <button
                    disabled={makingRequest}
                    type="submit"
                    className="custom-black-button mx-auto w-[144px] h-[42px] flex items-center justify-center gap-3.5 px-7 py-4 rounded-[50px] bg-[#4D1435] xl:mx-0 justify-self-end xl:w-[135px] xl:h-[43px] "
                  >
                    <span className="custom-button-icon text-[16px] font-[700] leading-[19.2px] text-white ">
                      Submit
                    </span>

                    <svg
                      className="custom-button-icon w-4 h-4"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="icon-arrow-right">
                        <path
                          id="Shape"
                          className="fill-current text-white"
                          d="M7.5299 3.36177C7.79025 3.10142 8.21236 3.10142 8.47271 3.36177L13.1394 8.02843C13.3997 8.28878 13.3997 8.71089 13.1394 8.97124L8.47271 13.6379C8.21236 13.8983 7.79025 13.8983 7.5299 13.6379C7.26955 13.3776 7.26955 12.9554 7.5299 12.6951L11.0585 9.1665H3.33464C2.96645 9.1665 2.66797 8.86803 2.66797 8.49984C2.66797 8.13165 2.96645 7.83317 3.33464 7.83317H11.0585L7.5299 4.30457C7.26955 4.04423 7.26955 3.62212 7.5299 3.36177Z"
                        />
                      </g>
                    </svg>
                  </button>
                </section>
              </form>

              {showModal && (
                <div className="fixed bg-[#00000099] z-50 inset-0 ">
                  <section className="fixed bottom-0 rounded-t-[50px] left-0 right-0 h-[236px] px-6 pt-[52px] pb-8 bg-white xl:w-[360px] xl:h-[242px] xl:top-1/2 xl:bottom-auto xl:left-1/2 xl:right-auto xl:-translate-x-1/2 xl:-translate-y-1/2 xl:rounded-[50px] xl:px-6 xl:pt-[52px] xl:pb-8 ">
                    <div className="w-[202px] mx-auto text-base font-semibold leading-5 text-center text-[#1E1E1E] ">
                      Are you sure you want to leave this page?
                    </div>

                    <div className="mt-3 w-[226px] mx-auto text-xs font-normal leading-[19.6px] text-[#1A2434A8] text-center ">
                      The information you have entered will not be stored.
                    </div>

                    <section className="mt-6 flex justify-center items-center gap-4 ">
                      <button
                        onClick={confirmNavigation}
                        className="w-[131px] h-8 rounded-[50px] border border-[#4D1435] flex justify-center items-center text-sm font-medium leading-5 text-[#4D1435] xl:w-[131px] xl:h-[42px] "
                      >
                        Yes
                      </button>

                      <button
                        onClick={cancelNavigation}
                        className="w-[131px] h-8 rounded-[50px] bg-[#4D1435] flex justify-center items-center text-sm font-medium leading-5 text-white xl:w-[131px] xl:h-[42px] "
                      >
                        No
                      </button>
                    </section>

                    <svg
                      onClick={cancelNavigation}
                      className="hidden xl:block absolute w-6 h-6 top-6 right-6 cursor-pointer"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="icon-x">
                        <path
                          id="Shape"
                          d="M18.7071 6.70711C19.0976 6.31658 19.0976 5.68342 18.7071 5.29289C18.3166 4.90237 17.6834 4.90237 17.2929 5.29289L12 10.5858L6.70711 5.29289C6.31658 4.90237 5.68342 4.90237 5.29289 5.29289C4.90237 5.68342 4.90237 6.31658 5.29289 6.70711L10.5858 12L5.29289 17.2929C4.90237 17.6834 4.90237 18.3166 5.29289 18.7071C5.68342 19.0976 6.31658 19.0976 6.70711 18.7071L12 13.4142L17.2929 18.7071C17.6834 19.0976 18.3166 19.0976 18.7071 18.7071C19.0976 18.3166 19.0976 17.6834 18.7071 17.2929L13.4142 12L18.7071 6.70711Z"
                          fill="#545454"
                        />
                      </g>
                    </svg>
                  </section>
                </div>
              )}
            </div>
          )}
        </div>
      ) : (
        <>
          {children ? (
            cloneElement(children as React.ReactElement, {
              onClick: handleToggle,
            })
          ) : (
            <button
              onClick={handleToggle}
              className="custom-black-button custom-black-button w-[247px] h-[51px] flex px-7 py-4 mt-11 mx-auto items-center justify-center gap-3.5 rounded-[50px] bg-[#4D1435] xl:w-[390px] xl:h-[77px] xl:px-[60px] xl:py-6 "
            >
              <span className="custom-button-icon text-[16px] font-[700] leading-[19.2px] text-white xl:text-2xl xl:leading-[29.05px] ">
                Sign Up Now
              </span>

              <svg
                className="custom-button-icon w-4 h-4 xl:w-6 xl:h-6"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="icon-arrow-right">
                  <path
                    id="Shape"
                    className="fill-current text-white"
                    d="M7.5299 3.36177C7.79025 3.10142 8.21236 3.10142 8.47271 3.36177L13.1394 8.02843C13.3997 8.28878 13.3997 8.71089 13.1394 8.97124L8.47271 13.6379C8.21236 13.8983 7.79025 13.8983 7.5299 13.6379C7.26955 13.3776 7.26955 12.9554 7.5299 12.6951L11.0585 9.1665H3.33464C2.96645 9.1665 2.66797 8.86803 2.66797 8.49984C2.66797 8.13165 2.96645 7.83317 3.33464 7.83317H11.0585L7.5299 4.30457C7.26955 4.04423 7.26955 3.62212 7.5299 3.36177Z"
                  />
                </g>
              </svg>
            </button>
          )}
        </>
      )}
    </>
  );
};

export default AffiliateForm;
