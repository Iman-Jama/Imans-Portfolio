
  import mobile from '../assets/mobile.png';
  import backend from '../assets/backend.png';
  import web from '../assets/web.png';
  import nhs from '../assets/company/nhs.png';
  import doctor from '../assets/doctor.png';
  import MovieSQL from "../assets/MovieSQL.png";
  import forecastly from '../assets/forecastly.png';
  import ecommerce from '../assets/ecommerce.png';
  import calendar from '../assets/calendar.png';
  import social from '../assets/socialM.png';
  import wizdumb from '../assets/wizdumb.png';

  const navLinks = [
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
  
  const projects = [
    {
      name: "Wizdumb",
      description:
        "This project is a full-stack MERN application e-learning website. It was made with react, graphql, and Mongo DB. It is an e-learning website where users can make accounts, learn web development through 5 different modules, add these modules to their profiles and take part in the forum discussion board",
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
          name: "GraphQL",
          color: "blue-text-gradient",
        },
        {
          name: "Mongoose",
          color: "pink-text-gradient",
        },
        {
          name: "React",
          color: "blue-text-gradient",
        },
      ],
      image: wizdumb,
      source_code_link: "https://github.com/Cdrcar/Wizdumb",
      app_link: "https://wizdumb-app-a832fc305640.herokuapp.com/",
    },
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
      app_link: "https://the-movie-sequel.herokuapp.com/",
    },
    {
      name: "ForeCastly Weather APP",
      description:
        "Forecastly is a Web application that enables users to search for current weather conditions and a 5-day forecast for any city worldwide. This application was designed with vanilla javascript and DOM manipulation. I also used the openweatherMap API",
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
      app_link: "https://iman-jama.github.io/Weather-App/",
    },
    {
      name: "E-Commerce Backend",
      description:
        "An efficient e-commerce backend solution for inventory management and order processing.Our e-commerce backend application empowers users to  manage inventory by offering features such as stock tracking, item updates, deletions, and addition of new items to the existing stocklist",
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
      app_link: "https://github.com/Iman-Jama/E-commerce",
    },
    {
      name: "Daily Workday Calendar",
      description:
        "On this daily schedule  workday website, you are greeted with a calendar which has timeblocks for standard business hours. These are colour coded, so time blocks in the past are grey, the current time block is red and future time blocks are green. Users are able to save information in the time blocks.",
      tags: [
        {
          name: "Javascript",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "pink-text-gradient",
        },
        {
          name: "CSS",
          color: "blue-text-gradient",
        },
        {
          name: "DOM-Manipulation",
          color: "pink-text-gradient",
        },
      ],
      image: calendar,
      source_code_link: "https://github.com/Iman-Jama/Daily-Workday-Calendar",
      app_link: "https://iman-jama.github.io/Daily-Workday-Calendar/",
    },
    {
      name: "Social Media Backend",
      description:
        "This project is a purely backend implementation for a social media website. It was created using Express.js, Node.js, and Mongoose. It provides a set of routes to handle users, thoughts, and reactions. The backend API can be tested using tools such as Insomnia.",
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
          name: "ExpressJS",
          color: "blue-text-gradient",
        },
        {
          name: "Mongoose",
          color: "pink-text-gradient",
        },
      ],
      image: social,
      source_code_link: "https://github.com/Iman-Jama/social_media_network",
      app_link: "https://github.com/Iman-Jama/social_media_network",
    },
   
  ];
  
  export { services, experiences, projects, navLinks };