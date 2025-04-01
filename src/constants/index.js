import {
  mobile,
  backend,
  creator,
  web,
  vr_icon,
  software_dev,
  technical_artist,
  character_art,
  robotminion,
  wkuxrlab,
  hfs_cancer,
  mini_golf,
  azimuth,
  hfs_video,
  handtrackingphysics,
  physicshandtracking_video,
  azimuth_video,
} from "../assets";
          

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "cv",
    title: "Download CV",
  },
];

const services = [
  {
    title: "XR Developer",
    icon: vr_icon,
  },
  {
    title: "Software Engineer",
    icon: software_dev,
  },
  {
    title: "Technical Artist",
    icon: technical_artist,
  },
  {
    title: "3D Character Artist",
    icon: character_art,
  },
];

const technologies = [
  {
    name: "C++",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
  },
  {
    name: "C#",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  },
  {
    name: "React JS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  },
  {
    name: "Django",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
  },
  {
    name: "Three JS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original.svg",
  },
  {
    name: "SQLite",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Unity",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg",
  },
  {
    name: "Unreal Engine",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unrealengine/unrealengine-original.svg",
  },
  {
    name: "Android Studio",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg",
  },
  {
    name: "git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  },
  {
    name: "docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  },
  {
    name: "TensorFlow",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",
  },
  {
    name: "RStudio",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rstudio/rstudio-original.svg",
  },
  {
    name: "LaTeX",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/latex/latex-original.svg",
  },
];

const experiences = [
  {
    title: "XR Developer",
    company_name: "WKU XR Lab",
    icon: wkuxrlab,
    iconBg: "#AAAAAA",
    date: "June 2021 - July 2022",
    img: robotminion,
    points: [
      "Developed a Digital Twin of a Manufacturing Robot to enhance training simulations, improving accuracy and interactivity.",
      "Developed a machine learning algorithm (gradient descent) to recreate local and global movement.",
      "Integrated hand tracking for XR interactions and authored comprehensive user documentation for Oculus and MRTK APIs.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Modeled, textured, rigged, and animated a 3D character. Collaborated with an actor for motion capture to deliver real-time instructions to students.",
      "Optimized and adapted the experience for Microsoft HoloLens and Meta Quest 2, ensuring seamless performance in standalone mode.",
    ],
  },
];

const projects = [
  {
    name: "Heuristic Feature Selection Method for Cancer Classification",
    description:
      "Use of heuristic feature selection methods applied to cancer classification using machine learning.",
    longer_description:
      "Use of heuristic feature selection methods applied to cancer classification using machine learning. The goal is to improve classification performance by selecting the most relevant features from gene expression data. The repository contains implementations of multiple feature selection techniques and evaluates their impact on different machine learning models.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: hfs_cancer,
    video: hfs_video,
    source_code_link: "https://github.com/Klaimtrev/HFS-Cancer",
  },
  {
    name: "Hand Tracking Physics",
    description:
      "Unity Project that uses hand tracking for physics interactions including a a manufacturing robot. ",
    longer_description:
      "Use of heuristic feature selection methods applied to cancer classification using machine learning. The goal is to improve classification performance by selecting the most relevant features from gene expression data. The repository contains implementations of multiple feature selection techniques and evaluates their impact on different machine learning models.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: handtrackingphysics,
    video: physicshandtracking_video,
    source_code_link: "https://github.com/Klaimtrev/HFS-Cancer",
  },
  {
    name: "Azimuth VR Project",
    description:
      "Developed a VR bedroom environment for a prototype targeting Meta Quest 2, as part of the NSAC 2022 Case Study, Optimized performance by baking lighting data into textures, ensuring smooth execution on standalone VR hardware",
    longer_description:
      "Bedroom model for a VR Prototype in Unity. Most models are from Blender Kit and Poly Haven. I made the rest of the models and modified some of the ones downloaded from the web. The project was made for the NSAC 2022 Case Study: Meta Quest 2. The light data is baked into the textures so that the performance is optimized to run using the standalone headset.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: azimuth,
    video: azimuth_video,
    source_code_link: "https://github.com/Klaimtrev/VR_Bedroom_Project_Oculus",
  },
  {
    name: "Virtual Reality Golf Game",
    description:
      "Adapted an existing golf game from WKU XR Lab into an immersive VR experience, following Meta’s development guidelines.",
    longer_description:
      "Adapted an existing golf game from WKU XR Lab into an immersive VR experience, following Meta’s development guidelines. Optimized interactions, physics, and user experience for VR gameplay. Successfully published on the Meta Store, achieving over 15,000 players.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: mini_golf,
    source_code_link: "https://github.com/",
  },
  {
    name: "A* search algorithm in puzzle games",
    description:
      "Three puzzle games were developed using java and were ported to android and HTML 5.",
    longer_description:
      "I developed 3 puzzle mini games using java and were ported to android and HTML 5. Android studio was used to deploy the games on android; and for HTML5, I used CSS and JavaScript. For the last part of the project, it was required to create basic artificial intelligence that searches for the easiest path to win the game",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: azimuth,
    video: hfs_video,
    source_code_link: "https://github.com/",
  },
  {
    name: "AI-Video-DataMiner",
    description:
      "Multithreaded pipeline for AI-driven video analysis",
    longer_description:
      "Multithreaded pipeline for AI-driven video analysis, automating tasks such as downloading videos, extracting audio, transcribing speech, performing sentiment analysis, translating text, and detecting emotions",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: azimuth,
    video: hfs_video,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
