// src/data/projectsData.js
import imageme from "./../assets/images/image.png";
import laravel from "./../assets/icons/laravel.svg";
import mysql from "./../assets/icons/mysql.svg";
import react from "./../assets/icons/react.svg";
import tailwindcss from "./../assets/icons/tailwindcss.svg";
import css from "./../assets/icons/css.svg";
import html from "./../assets/icons/html.svg";
import javascript from "./../assets/icons/js.svg";
import typescript from "./../assets/icons/typescript.svg";
import echarts from "./../assets/icons/echarts.svg";

export const project = [
  {
    title: "Supply Chain Management System",
    image: imageme,
    description: "This is my first ever to build a System in School. It is a final project for our System Integration and Architecture 1. It manages the flow of goods, services, and information from suppliers to customers, aiming for efficiency and real-time tracking.",
    role: "Full Stack Developer",
    techstack: {
      frontend: [
        { name: "HTML", icon: html },
        { name: "CSS", icon: css },
        { name: "Javascript", icon: javascript },
        { name: "Tailwind CSS", icon: tailwindcss },
      ],
      backend: [
        { name: "Laravel", icon: laravel },
        { name: "MySQL", icon: mysql },
      ],
    },
    link: "#",
  },
  {
    title: "CTU Payroll",
    image: imageme,
    description: "A payroll management system designed for CTU Danao Campus employees. It handles employee records, salary computation, deductions, generate reports via Excel, and payslip generation.",
    role: "Frontend Developer | UI/UX Designer",
    techstack: {
      frontend: [
        { name: "HTML", icon: html },
        { name: "CSS", icon: css },
        { name: "Javascript", icon: javascript },
        { name: "TypeScript", icon: typescript },
        { name: "React", icon: react },
        { name: "Tailwind CSS", icon: tailwindcss },
        { name: "ECharts", icon: echarts },
      ],
      backend: [
        { name: "Laravel", icon: laravel },
        { name: "MySQL", icon: mysql },
      ],
    },
    link: "#",
  },
  {
    title: "CTU Graduate Tracker",
    image: imageme,
    description: "A web-based platform for tracking graduates of CTU Danao Campus. it supports data entry, filtering, track graduates, employment status and has a dashboard for visualizing graduate statistics. also graduates can update their profiles,work history, and contact information.",
    role: "Frontend Developer | UI/UX Designer",
    techstack: {
      frontend: [
        { name: "HTML", icon: html },
        { name: "CSS", icon: css },
        { name: "Javascript", icon: javascript },
        { name: "Tailwind CSS", icon: tailwindcss },
        { name: "ECharts", icon: echarts },
      ],
      backend: [
        { name: "Laravel", icon: laravel },
        { name: "MySQL", icon: mysql },
      ],
    },
    link: "#",
  },
];
