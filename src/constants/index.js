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
  ai_puzzle_solver,
  ai_puzzle_solver_video,
  videoAnalysis,
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
      "The goal is to improve classification performance by selecting the most relevant features from gene expression data. The repository contains implementations of multiple feature selection techniques and evaluates their impact on different machine learning models.",
    tags: [
      { name: "Python 🐍", color: "blue-text-gradient" },
      { name: "Machine Learning 🤖", color: "green-text-gradient" },
      { name: "MATLAB 📊", color: "pink-text-gradient" },
    ],
    image: hfs_cancer,
    video: hfs_video,
    source_code_link: "https://github.com/Klaimtrev/HFS-Cancer",
  },
  {
    name: "Hand Tracking Physics",
    description:
      "Unity project using hand tracking for physical interactions with a manufacturing robot.",
    longer_description:
      "Built in Unity using hand tracking APIs to enable real-time interactions in a VR environment. Emphasis on physics-based interactions and immersive realism.",
    tags: [
      { name: "Unity 🕹️", color: "blue-text-gradient" },
      { name: "C# 💻", color: "green-text-gradient" },
      { name: "VR 🥽", color: "pink-text-gradient" },
    ],
    image: handtrackingphysics,
    video: physicshandtracking_video,
    source_code_link: "https://github.com/Klaimtrev/HFS-Cancer", // You might want to update this link
  },
  {
    name: "Azimuth VR Project",
    description:
      "Developed a VR bedroom prototype for Meta Quest 2, optimizing performance through light baking.",
    longer_description:
      "Created for the NSAC 2022 case study. Modeled environment using Blender and Unity, and optimized lighting for standalone headset performance.",
    tags: [
      { name: "Unity 🕹️", color: "blue-text-gradient" },
      { name: "Blender 🍑", color: "green-text-gradient" },
      { name: "Light Baking 💡", color: "pink-text-gradient" },
    ],
    image: azimuth,
    video: azimuth_video,
    source_code_link: "https://github.com/Klaimtrev/VR_Bedroom_Project_Oculus",
  },
  {
    name: "Virtual Reality Golf Game",
    description:
      "Adapted an existing golf game into a VR experience using Meta Quest, reaching 15k+ players.",
    longer_description:
      "Enhanced interactions and physics for VR gameplay following Meta development guidelines. Published on Meta Store through WKU XR Lab.",
    tags: [
      { name: "Unity 🕹️", color: "blue-text-gradient" },
      { name: "VR 🥽", color: "green-text-gradient" },
      { name: "Meta Quest 🎯", color: "pink-text-gradient" },
    ],
    image: mini_golf,
    source_code_link: "https://www.meta.com/experiences/mini-golf-game/5738234716190098/?srsltid=AfmBOorxwFt7x2q8iR7Fm61_vZnpV7mPmQd11Sl5GoxFO2p5tEOF8xq7",
  },
  {
    name: "A* Search Algorithm in Puzzle Games",
    description:
      "Developed three puzzle games with AI solvers, deployed on Android and web.",
    longer_description:
      "A JavaFX-based project featuring four small games alongside AI solvers (BFS, DFS, A*) for solving in-game challenges. This is project implemented in Java using NetBeans. It includes: Problem Information: Displays the problem's name, introduction, and current state. State Information: Shows the current state and the goal state of the puzzle.Search Type Selection: Choose between BFS or DFS search algorithms for solving the puzzle. A Solver*: Option to solve the puzzle using the A* search algorithm. Statistics: Displays the statistics of the AI search algorithms.",
    tags: [
      { name: "Java ☕", color: "blue-text-gradient" },
      { name: "Android 📱", color: "green-text-gradient" },
      { name: "A* Algorithm ⭐", color: "pink-text-gradient" },
    ],
    image: ai_puzzle_solver,
    video: ai_puzzle_solver_video,
    source_code_link: "https://github.com/Klaimtrev/AI-PuzzleSolvers",
  },
  {
    name: "AI-Video-DataMiner",
    description:
      "Multithreaded pipeline for AI-driven video analysis and sentiment extraction.",
    longer_description:
      "Automates tasks like video download, audio transcription, sentiment/emotion detection, and translation. Developed for scalable processing of large video datasets.",
    tags: [
      { name: "Python 🐍", color: "blue-text-gradient" },
      { name: "NLP 🗣️", color: "green-text-gradient" },
      { name: "Multithreading 🧵", color: "pink-text-gradient" },
    ],
    image: videoAnalysis,
    //no video yet
    source_code_link: "https://github.com/Klaimtrev/Video_Analysis",
  },
];


export { services, technologies, experiences, projects };
