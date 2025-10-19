// src/data/projectsData.js
import laravel from "./../assets/icons/laravel.svg";
import mysql from "./../assets/icons/mysql.svg";
import react from "./../assets/icons/react.svg";
import tailwindcss from "./../assets/icons/tailwindcss.svg";
import css from "./../assets/icons/css.svg";
import html from "./../assets/icons/html.svg";
import javascript from "./../assets/icons/js.svg";
import typescript from "./../assets/icons/typescript.svg";
import echarts from "./../assets/icons/echarts.svg";
import sass from "./../assets/icons/sass.svg";
import java from "./../assets/icons/java.svg";
import php from "./../assets/icons/php.svg";
import git from "./../assets/icons/git.svg";
import postman from "./../assets/icons/postman.svg";
import figma from "./../assets/icons/figma.svg";
import vscode from "./../assets/icons/vsc.svg";
import github from "./../assets/icons/github.svg";
import code from "./../assets/icons/code.svg";
export const myskill = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML", icon:html },
        { name: "CSS", icon: css },
        { name: "JavaScript", icon: javascript},
        { name: "TypeScript", icon: typescript },
        { name: "React", icon: react},
        { name: "Tailwind CSS", icon: tailwindcss },
        { name: "SASS", icon: sass },
        { name: "ECharts", icon: echarts },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Laravel", icon: laravel},
        { name: "Java" , icon: java},
        { name: "PHP", icon: php},
        { name: "MySQL", icon: mysql },
        { name: "Database Design", icon: code },
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git", icon: git },
        { name: "Postman", icon: postman },
        { name: "Figma", icon: figma },
        { name: "VS Code", icon: vscode },
        { name: "GitHub", icon: github },
      ],
    },
  ];