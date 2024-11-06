"use client";
import { useFormik } from "formik";
import * as Yup from "yup";

interface CallbackFormProps {
  isFooter?: boolean;
  hideAgeField?: boolean;
}

const CallbackForm: React.FC<CallbackFormProps> = ({
  isFooter,
  hideAgeField = false,
}) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      age: "",
      phone: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Name must be at least 2 characters")
        .max(50, "Name cannot exceed 50 characters")
        .required("Name is required"),
      phone: Yup.string()
        .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
        .required("Phone number is required"),
      message: Yup.string()
        .min(10, "Message must be at least 10 characters")
        .max(200, "Message cannot exceed 200 characters")
        .required("Message is required"),
      ...(hideAgeField
        ? {}
        : { age: Yup.string().required("Age is required") }),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
  });

  return (
    <form className="grid gap-6 xl:gap-11" onSubmit={formik.handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        className={`h-[22px] w-full bg-white outline-none focus:appearance-none border-b border-b-[#4D143536] text-base font-normal leading-[22.4px] text-[#4D1435] placeholder:text-base placeholder:font-normal placeholder:leading-[22.4px] placeholder:text-[#4D1435] `}
        value={formik.values.name}
        onChange={formik.handleChange}
      />
      {!hideAgeField ? (
        <input
          type="text"
          name="age"
          placeholder="Your Child’s Age"
          className={`h-[22px] w-full bg-white outline-none focus:appearance-none border-b border-b-[#4D143536] text-base font-normal leading-[22.4px] text-[#4D1435] placeholder:text-base placeholder:font-normal placeholder:leading-[22.4px] placeholder:text-[#4D1435] `}
          value={formik.values.age}
          onChange={formik.handleChange}
        />
      ) : null}
      <input
        type="text"
        name="phone"
        placeholder="Phone No."
        className={`h-[22px] w-full bg-white outline-none focus:appearance-none border-b border-b-[#4D143536] text-base font-normal leading-[22.4px] text-[#4D1435] placeholder:text-base placeholder:font-normal placeholder:leading-[22.4px] placeholder:text-[#4D1435] `}
        value={formik.values.phone}
        onChange={formik.handleChange}
      />
      <input
        type="text"
        name="message"
        placeholder="What brings you here?"
        className={`h-[22px] w-full bg-white outline-none focus:appearance-none border-b border-b-[#4D143536] text-base font-normal leading-[22.4px] text-[#4D1435] placeholder:text-base placeholder:font-normal placeholder:leading-[22.4px] placeholder:text-[#4D1435] `}
        value={formik.values.message}
        onChange={formik.handleChange}
      />

      <button
        type="submit"
        className={`custom-black-button w-[217px] h-[43px] mx-auto rounded-[40px] px-[18px] py-3 flex gap-2.5 justify-center items-center bg-[#4D1435] ${
          isFooter
            ? "lg:w-[224px] lg:mr-0 lg:ml-auto "
            : "lg:w-[230px] xl:w-[390px] xl:h-[77px] xl:px-[60px] xl:py-6 xl:gap-3.5"
        }`}
      >
        <span
          className={`custom-button-icon text-base font-semibold leading-[19.36px] text-white  ${
            isFooter
              ? "lg:text-base lg:leading-[19.36px] "
              : "xl:text-2xl xl:leading-[28.8px]"
          }`}
        >
          Request A Callback
        </span>
        <svg
          className={`custom-button-icon w-4 h-4 ${
            isFooter ? "lg:w-4 lg:h-4" : "lg:w-6 lg:h-6"
          }`}
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="icon-arrow-right">
            <path
              id="Shape"
              className="fill-current text-white"
              d="M8.02843 3.36225C8.28878 3.1019 8.71089 3.1019 8.97124 3.36225L13.6379 8.02892C13.8983 8.28927 13.8983 8.71138 13.6379 8.97173L8.97124 13.6384C8.71089 13.8987 8.28878 13.8987 8.02843 13.6384C7.76808 13.378 7.76808 12.9559 8.02843 12.6956L11.557 9.16699H3.83317C3.46498 9.16699 3.1665 8.86852 3.1665 8.50033C3.1665 8.13214 3.46498 7.83366 3.83317 7.83366H11.557L8.02843 4.30506C7.76808 4.04471 7.76808 3.6226 8.02843 3.36225Z"
            />
          </g>
        </svg>
      </button>
    </form>
  );
};

export default CallbackForm;
