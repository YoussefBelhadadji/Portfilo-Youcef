import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  coffeeProject,
  project3,
  mysql,
  express,
  aws,
  mui,
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from '../assets';

import NewsWebsite from '../assets/NewsWebsite.png';
import CarStore from '../assets/cars.png';

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

const services = [
  {
    title: "Développeur Front-End",
    icon: web,
  },
  {
    title: "Développement d'Applications Mobiles",
    icon: mobile,
  },
  {
    title: "UI/UX Designer",
    icon: creator,
  },
  {
    title: "Copywriting & Marketing Digital",
    icon: backend,
  },
];

const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "React JS", icon: reactjs },
  { name: "figma", icon: figma },
  { name: "Redux Toolkit", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Material Ui", icon: mui },
  { name: "Node JS", icon: nodejs },
  { name: "AWS", icon: aws },
  { name: "MongoDB", icon: mongodb },
  { name: "MySql", icon: mysql },
  { name: "git", icon: git },
];

const experiences = [
  {
    title: "Full-Stack Developer",
    company_name: "Final Year Project",
    icon: logo,
    iconBg: "#383E56",
    date: "Jan 2025 - May 2025",
    points: [
      "Developed a news website with a recommendation system powered by artificial intelligence.",
      "Used React for the frontend and Firebase for real-time database management.",
      "Implemented a secure backend using Node.js.",
      "Performed deployment and testing to ensure compatibility and performance.",
    ],
  },
  {
    title: "Copywriter & Digital Marketer",
    company_name: "Freelance",
    icon: logo,
    iconBg: "#E6DEDD",
    date: "Dec 2023 - Apr 2024",
    points: [
      "Created compelling content for landing pages, social media, and email campaigns.",
      "Collaborated with designers and developers to align marketing strategies with UI/UX.",
      "Optimized content for SEO and user engagement.",
      "Increased client conversion rates through persuasive and targeted messaging.",
    ],
  },
];


const testimonials = [
  {
    testimonial:
      "A creative and fast learner with strong problem-solving skills. His project was full of innovative and scalable ideas, and I was particularly impressed by the chatbot feature he implemented.",
    name: "Supervising Professor",
    designation: "Professor ",
    company: "University Belhaj Bochaib",
    image: firstTestimonial,
  },
];


const projects = [
  {
    name: "Coffee Website",
    description:
      "A stylish website for a local coffee shop, featuring a modern design and smooth navigation. This project showcases my skills in HTML, CSS, and JavaScript.",
    tags: [
      { name: "html", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "javascript", color: "yellow-text-gradient" },
    ],
    image: coffeeProject,
    source_code_link: "https://youssefbelhadadji.github.io/Coffee/",
  },
  {
    name: "AI News Website",
    description:
      "A dynamic news website that uses artificial intelligence to recommend personalized articles to users. Built with React, Firebase, and Node.js for a seamless experience.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "firebase", color: "orange-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "AI", color: "pink-text-gradient" },
    ],
    image: NewsWebsite,
    source_code_link: "https://github.com/", // ضع الرابط الحقيقي هنا
  },
   {
    name: "Car Sales Website",
    description:
      "A responsive and elegant car sales website that allows users to explore different car models using a dynamic swiper. Built using HTML, CSS, JavaScript, and Swiper.js.",
    tags: [
      { name: "html", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "javascript", color: "yellow-text-gradient" },
      { name: "swiper.js", color: "purple-text-gradient" },
    ],
    image: CarStore,
    source_code_link: "https://youssefbelhadadji.github.io/Cars/", // غيّر هذا الرابط إلى رابط الكود الفعلي للمشروع
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
};
