import {
  PiStudent,
  PiBriefcase,
  PiMagnifyingGlass,
  PiArrowsClockwise,
  PiArrowUUpLeft
} from "react-icons/pi";
import { GiGraduateCap } from "react-icons/gi";

export const occupationOptions = [
  {
    icon: PiStudent,
    title: "Student",
    description: "I'm currently studying and planning my future career",
  },
  {
    icon: GiGraduateCap,
    title: "Recent Graduate",
    description: "I've recently graduated and I'm starting my career journey",
  },
  {
    icon: PiBriefcase,
    title: "Working Professional",
    description: "I'm currently working and looking to grow my career",
  },
  {
    icon: PiMagnifyingGlass,
    title: "Job Seeker",
    description:
      "I'm actively looking for a job and preparing for my next opportunity",
  },
  {
    icon: PiArrowsClockwise,
    title: "Career Switcher",
    description: "I'm looking to transition into a new career or industry",
  },
   {
    icon: PiArrowUUpLeft,
    title: "Returning to Work",
    description: "I'm returning to the workforce after a career break",
  },
];
