"use client";

import { useState } from "react";
import EnrollSection from "./EnrollSection/EnrollSection";
import FaqContainer from "./FaqSection/FaqContainer";

const EnrollSectionContainer = () => {
  const [toggle, setToggle] = useState(false);

  const toggleStateTrue = () => setToggle(true);
  const toggleStateFalse = () => setToggle(false);

  return (
    <>
      <EnrollSection toggle={toggle} toggleStateFalse={toggleStateFalse} />
      <FaqContainer toggleStateTrue={toggleStateTrue} />
    </>
  );
};

export default EnrollSectionContainer;
