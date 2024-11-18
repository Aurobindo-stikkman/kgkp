import React from "react";
import CallbackForm from "./CallbackForm";
import Title from "./Title";

interface CallbackContainerProps {
  hideAgeField?: boolean;
}

const CallbackContainer: React.FC<CallbackContainerProps> = ({
  hideAgeField,
}) => {
  return (
    <div className="py-[52px] px-6 mx-auto w-[360px] rounded-[40px] bg-[#FAEFB6] flex justify-center items-center flex-col gap-11 md:flex-row md:w-auto md:mx-4 md:px-12 md:justify-between lg:w-[900px] lg:mx-auto xl:w-auto max-w-[1280px] xl:px-[52px] 2xl:pr-[70px] xl:py-20 xl:rounded-[100px] ">
      <Title />

      <section className="w-[296px] px-4 py-6 bg-white rounded-[20px] lg:w-[350px] xl:px-6 xl:grow xl:rounded-[40px] ">
        <CallbackForm hideAgeField={hideAgeField} />
      </section>
    </div>
  );
};

export default CallbackContainer;
