import Image from "next/image";

import treeImage from "../assets/28th Sept - less leaves (1).png";
import Title from "./Title";

const TreeSection = () => {
  return (
    <div className="mt-[52px] ">
      <Title />

      <section className="relative sm:mt-0 h-[490px] sm:h-auto mx-auto max-w-[1920px] ">
        <Image
          src={treeImage}
          alt="Tree Image"
          className="w-full mx-auto h-full object-cover "
        />
      </section>
    </div>
  );
};

export default TreeSection;
