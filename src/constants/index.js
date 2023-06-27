import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    nhs,
    carrent,
    jobit,
    tripguide,
    threejs,
    doctor,
    MovieSQL,
    forecastly,
    ecommerce,
    readme,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "About",
      title: "About",
    },
    {
      id: "Projects",
      title: "Projects",
    },
    {
      id: "workExperience",
      title: "Work History",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Doctor",
      icon: doctor,
    },
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Doctor",
      company_name: "Birmingham & Solihull Mental Health NHS Trust",
      icon:nhs,
      iconBg: "#383E56",
      date: "August 2017 - Jan 2020",
      points: [
        "Worked in the Psychiatric intensive care unit, a community psychiatric unit and at Heartlands hospital in the Psychiatric Liaison team.",
        "First port of call for any psychiatric assessments and medical emergencies",
        "Attending mental health tribunals and writing the tribunal reports",
        
      ],
      audit: "Audit: Assessing the quality of referrals to the psychiatric Liaison team (Birmingham and Solihull Mental health NHS Trust June 2018)"
    },
    {
      title: "Locum Doctor",
      company_name: "John Howard Forensice Unit",
      icon: nhs,
      iconBg: "#E6DEDD",
      date: "April 2017 - August 2017",
      points: [
        "I worked as a locum CT1 doctor at a medium secure forensic psychiatric unit:",
        "Provided medical review and psychiatric assessments for all inmates.",
        "Chaired Weekly MDT meetings.",
        "Liaised with family members and other specialities when required.",
      ],
      
    },
    {
      title: "FY1/2 Doctor",
      company_name: "Worcestershire Acute NHS Trusts & Sandwell and West Birmingham NHS Trust",
      icon: nhs,
      iconBg: "#383E56",
      date: "Aug 2014 - Aug 2016",
      points: [
        "Daily ward rounds, assessing new patients and on-call duties",
        "Responsible for collating and analysing the monthly mortality and morbidity results and presenting this alongside proposed changes to the entire urology team at the monthly MDT.",
        "Liaised with nurses, social workers, and occupational therapists, and dealt with all medical queries staff members had.",
        "Organised and chaired several patient specific multidisciplinary team (MDT) meetings, as well as chairing the weekly departmental MDT.",
        "Did several Audits"
      ],
    },
   
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "The Movie Sequel",
      description:
        "This is a movie search engine that allows the user to login, authenticate their login and then search the name of a movie. This program will display the searched movie using third party APIs to fetch the data and allow users to add/update/view/delete reviews on the movie",
      tags: [
        {
          name: "Javascript",
          color: "blue-text-gradient",
        },
        {
          name: "mySQL",
          color: "pink-text-gradient",
        },
        {
          name: "tailwind",
          color: "blue-text-gradient",
        },
        {
          name: "ExpressJS",
          color: "pink-text-gradient",
        },
        {
          name: "NodeJS",
          color: "blue-text-gradient",
        },
        {
          name: "handlebars",
          color: "pink-text-gradient",
        },
      ],
      image: MovieSQL,
      source_code_link: "https://github.com/Iman-Jama/movie-part2",
    },
    {
      name: "ForeCastly Weather APP",
      description:
        "Web application that enables users to search for current weather conditions and a 5-day forecast for any city worldwide.",
      tags: [
        {
          name: "Javascript",
          color: "blue-text-gradient",
        },
        {
          name: "OpenWeatherMap API",
          color: "pink-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "pink-text-gradient",
        },
      ],
      image: forecastly,
      source_code_link: "https://github.com//Iman-Jama/Weather-App",
    },
    {
      name: "E-Commerce Backend",
      description:
        "An efficient e-commerce backend solution for seamless inventory management and order processing.Our e-commerce backend application empowers users to efficiently manage inventory by offering features such as real-time stock tracking, item updates, deletions, and seamless addition of new items to the existing stocklist",
      tags: [
        {
          name: "Javascript",
          color: "blue-text-gradient",
        },
        {
          name: "ExpressJS",
          color: "pink-text-gradient",
        },
        {
          name: "NodeJS",
          color: "pink-text-gradient",
        },
        {
          name: "SequelizeJS",
          color: "blue-text-gradient",
        },
        {
          name: "mySQL",
          color: "pink-text-gradient",
        },
      ],
      image: ecommerce,
      source_code_link: "https://github.com/Iman-Jama/E-commerce",
    },
    {
      name: "README generator",
      description:
        "This application dynamically creates a README file with the users input information from the command line. This application achieves this using the inquirer package.The code for this application was written using javascript.",
      tags: [
        {
          name: "Javascript",
          color: "blue-text-gradient",
        },
        {
          name: "NodeJS",
          color: "pink-text-gradient",
        },
        {
          name: "InquirerJS",
          color: "blue-text-gradient",
        },
      ],
      image: readme,
      source_code_link: "https://github.com/Iman-Jama/E-commerce",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };