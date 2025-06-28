import React from "react";
import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <div className='w-full h-full flex items-center justify-center'>
            <technology.icon size={64} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");