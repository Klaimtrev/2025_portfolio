import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import Tilt from "react-tilt";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

// 3D Arrow component for the left arrow
const LeftArrow3D = ({ onClick, style }) => {
  const arrowModel = useGLTF("./ArrowLeft/ArrowL.gltf");
  return (
    <div
      style={{
        width: "50px",
        height: "50px",
        cursor: "pointer",
        ...style,
      }}
      onClick={onClick}
    >
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 0, 5]} intensity={1} />
        <primitive object={arrowModel.scene} />
      </Canvas>
    </div>
  );
};

// 3D Arrow component for the right arrow
const RightArrow3D = ({ onClick, style }) => {
  const arrowModel = useGLTF("./ArrowRight/ArrowR.gltf");
  return (
    <div
      style={{
        width: "50px",
        height: "50px",
        cursor: "pointer",
        ...style,
      }}
      onClick={onClick}
    >
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 0, 5]} intensity={1} />
        <primitive object={arrowModel.scene} />
      </Canvas>
    </div>
  );
};

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <img
              onClick={() => window.open(source_code_link, "_blank")}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
              alt="source code"
              style={{ filter: "invert(1)" }}
              className="w-10 h-10 object-contain cursor-pointer"
            />
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const slideVariant = {
  initial: (direction) => ({
    opacity: 0,
    x: direction === "right" ? 100 : -100,
  }),
  animate: {
    opacity: 1,
    x: 0,
  },
  exit: (direction) => ({
    opacity: 0,
    x: direction === "right" ? -100 : 100,
  }),
};

const Works = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("right");
  const [selectedProject, setSelectedProject] = useState(null);
  const [cardsToShow, setCardsToShow] = useState(3);

  // Update the number of cards to show based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsToShow(1);
      } else {
        setCardsToShow(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    if (currentIndex < projects.length - cardsToShow) {
      setDirection("right");
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setDirection("left");
      setCurrentIndex(currentIndex - 1);
    }
  };

  const displayProjects = projects.slice(currentIndex, currentIndex + cardsToShow);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcase my skills and experience through real-world examples of my work.
          Each project is briefly described with links to code repositories and live demos. It reflects my ability to solve complex problems,
          work with different technologies, and manage projects effectively.
        </motion.p>
      </div>

      {/* Wrap arrows and project cards in a horizontal flex container */}
      <div className="flex items-center justify-center mt-8">
        {/* Left Arrow */}
        <div className="mr-4">
          <LeftArrow3D
            onClick={handlePrev}
            style={{
              opacity: currentIndex > 0 ? 1 : 0.5,
              pointerEvents: currentIndex > 0 ? "auto" : "none",
              transform: "rotate(0deg)",
            }}
          />
        </div>

        {/* Project Cards Container */}
        <div className="flex overflow-hidden w-full">
          <AnimatePresence initial={false} custom={direction}>
            {displayProjects.map((project, index) => (
              <motion.div
                key={project.name}
                custom={direction}
                variants={slideVariant}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.5 }}
                className="mr-7 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <ProjectCard index={currentIndex + index} {...project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Right Arrow */}
        <div className="ml-4">
          <RightArrow3D
            onClick={handleNext}
            style={{
              opacity: currentIndex < projects.length - cardsToShow ? 1 : 0.5,
              pointerEvents: currentIndex < projects.length - cardsToShow ? "auto" : "none",
              transform: "rotate(0deg)",
            }}
          />
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="bg-tertiary p-5 rounded-2xl max-w-3xl w-full mx-4"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <h3 className="text-white font-bold text-[24px]">
                {selectedProject.name}
              </h3>
              <p className="mt-2 text-secondary text-[14px]">
                {selectedProject.longer_description}
              </p>
              {selectedProject.video ? (
                <video
                  src={selectedProject.video}
                  controls
                  className="w-full mt-4 rounded-xl"
                />
              ) : (
                <img
                  src={selectedProject.image}
                  alt="project_image"
                  className="w-full mt-4 rounded-2xl"
                />
              )}
              <div className="mt-4 flex flex-wrap gap-2">
                {selectedProject.tags.map((tag) => (
                  <p
                    key={`${selectedProject.name}-${tag.name}`}
                    className={`text-[14px] ${tag.color}`}
                  >
                    #{tag.name}
                  </p>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SectionWrapper(Works, "");
