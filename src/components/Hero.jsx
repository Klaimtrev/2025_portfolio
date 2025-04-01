import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas, HeadsetCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen pt-[120px] mx-auto flex xl:flex-row flex-col gap-10 overflow-hidden">
      {/* Text Section */}
      <div className={`max-w-7xl mx-auto ${styles.paddingX} flex flex-col sm:flex-row items-center sm:items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#DE9E48]" />
          <div className="w-1 sm:h-80 h-40 gold-gradient" />
        </div>
        <div className="text-center sm:text-left relative z-10">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#DE9E48]">Diego</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop XR Experiences, <br className="sm:block hidden" />
            games and 3D applications.
          </p>
          <p className={`${styles.sectionSubText} mt-2 text-white-100`}>
            I am a computer scientist and technical <br className="sm:block hidden" />
            artist specializing in XR, AI-driven <br className="sm:block hidden" />
            simulations, and real-time graphics.
            <br className="sm:block hidden" />
            I develop immersive applications, <br className="sm:block hidden" />
            optimize VR performance, and create <br className="sm:block hidden" />
            AI-driven solutions for complex problems.
            <br className="sm:block hidden" />
            With expertise in C++, C#, Python, <br className="sm:block hidden" />
            and 3D technologies.
          </p>
        </div>
      </div>

      {/* 3D Canvas Section */}
      <div className="flex-1 flex justify-center relative z-10 mt-10 xl:mt-0 h-[600px]">
        <ComputersCanvas />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center sm:flex hidden">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>

    </section>
  );
};

export default Hero;
