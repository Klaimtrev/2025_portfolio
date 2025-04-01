import React from "react";
import { motion } from "framer-motion";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Toolbox</p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </motion.div>

      <div className="bg-[#4a3627] p-6 rounded-xl flex flex-row flex-wrap justify-center gap-10 mt-10">
        {technologies.map((technology) => (
          <div 
            key={technology.name} 
            className="w-28 h-28 flex items-center justify-center bg-[#5a3f28] border-2 border-[#a67c52] rounded-lg"
          >
            <img 
              src={technology.icon} 
              alt={technology.name} 
              className="w-20 h-20 object-contain" 
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
