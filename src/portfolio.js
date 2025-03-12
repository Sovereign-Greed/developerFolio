/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "M. Raza",
  title: "HI I'M RAZA, A WEB DEVELOPER LIVING NEAR NYC",
  subTitle: emoji(
    "An Experienced Lead Full Stack Web Developer specializing in building scalable web applications, optimizing cloud infrastructure, and leading development teams to deliver innovative solutions."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Sovereign-Greed",
  linkedin: "https://www.linkedin.com/in/mohammad-raza-a44304212/",
  gmail: "mraza081593@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "Crafting seamless user experiences with expertise in modern web development, cloud infrastructure, and API integration.",
  skills: [
    emoji(
      "💻 Building dynamic and responsive web applications using React, Node.js, and TypeScript."
    ),
    emoji(
      "🛠️ Crafting robust backend systems with Node.js, Express, Fastify, and integrating REST and GraphQL APIs."
    ),
    emoji(
      "☁️ Optimizing cloud infrastructure and database performance with AWS (EC2, RDS, Lambda) and PostgreSQL."
    ),
    emoji(
      "🎨 Creating visually engaging, mobile-responsive interfaces using Material UI, Bootstrap, and CSS."
    ),
    emoji(
      "🗄️ Delivering full-stack solutions by combining MongoDB, Mongoose, Prisma, and Redis for scalable data management."
    ),
    emoji(
      "🤖 Automating workflows and integrating AI-powered solutions with OpenAI and third-party APIs."
    ),
    emoji(
      "🤝 Collaborating with teams to lead development projects using Agile methodologies and Git workflows."
    ),
    emoji(
      "🚀 Implementing CI/CD pipelines to ensure smooth deployments and high-performing applications."
    ),
    emoji(
      "🔍 Troubleshooting and optimizing performance issues in front-end, back-end, and database systems."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    // {
    //   skillName: "sass",
    //   fontAwesomeClassname: "fab fa-sass"
    // },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Azure",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Harvard University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2017 - April 2019",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Stanford University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend", //Insert stack or technology you have experience in
      progressPercentage: "85%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "99%"
    },
    {
      Stack: "Dev Ops",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Lead Developer",
      company: "Logie Inc.",
      companylogo: require("./assets/images/logieLogo.png"),
      date: "May 2022 - Present",
      desc: "I lead a global team of 10+ developers, architecting large-scale systems, integrating AI solutions, and deploying scalable cloud infrastructure on AWS and Azure.",
      descBullets: [
        "Led a global team of 10+ web developers across diverse languages and cultures",
        "Developed a Node.js backend server, optimized Prisma queries and mutations, and used AWS CloudWatch for performance monitoring",
        "Migrated a legacy REST API to GraphQL, adding an automatic playground, documentation, and improving CI/CD pipelines",
        "Integrated OpenAI to deliver a Virtual Assistant, enhancing content creation and SEO for users",
        "Deployed services on AWS EC2, configured load balancers for scalability, and optimized performance",
        "Optimized AWS EC2 and RDS performance by leveraging AWS CloudWatch to monitor logs and identify slow queries and mutations",
        "Deployed and optimized collector servers on Azure VMs, using auto-scaling and load balancing for improved performance",
        "Hosted a PostgreSQL database on AWS RDS, implementing read replicas and automatic backups for enhanced performance",
        "Optimized performance with Redis caching for user credentials, permissions, and dashboard summaries, improving scalability"
      ]
    },
    {
      role: "Full Stack Developer",
      company: "Logie Inc.",
      companylogo: require("./assets/images/logieLogo.png"),
      date: "April 2021 – April 2022",
      desc: "Created seamless onboarding workflows, optimized data delivery through API integration, and built tools like a thumbnail generator to enhance user experience.",
      descBullets: [
        "Developed an MVP React.js app with JWT authentication, an intuitive registration process, and Twilio-based 2FA for enhanced security",
        "Deployed a web application on AWS Amplify, restructuring it with a modern, mobile-friendly interface using Material UI",
        "Developed an event-driven Thumbnail Generator using BannerBear API, AWS S3, Webhooks, and Redis for efficient image processing",
        "Built an event-driven, multi-level feature with Brightdata, Redis Pub/Sub, Cron services, and Webhooks to deliver critical data",
        "Engineered a multi-level system for admins to charge brands via Stripe and distribute payments through Mercury API"
      ]
    },
    {
      role: "Freelance Web Developer",
      company: "Self Employed",
      companylogo: require("./assets/images/freelanceLogo.png"),
      date: "Feburary 2018 - March 2021",
      desc: "Specialized in designing and upgrading web applications, resolving technical challenges, and implementing custom third-party API integrations.",
      descBullets: [
        "Developed and maintained scalable APIs using Python and Node.js, optimizing performance",
        "Integrated third-party APIs like Stripe (payments) and Google services (OAuth, Maps) to enhance functionality and UX",
        "Implemented web solutions, enhancing mobile responsiveness with CSS (Flexbox, Grid), Bootstrap, and Tailwind"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Explore My Projects!",
  subtitle: "SOME PROJECTS THAT I CREATED!",
  projects: [
    {
      image: require("./assets/images/filmr8r-logo.jpeg"),
      projectName: "FilmR8R",
      projectDesc:
        "Lights, camera, action! FilmR8R is my first web project, a fun app for rating movies. It's built with Node.js for the backend, MongoDB and Mongoose for the database, and styled with Bootstrap for a polished look. A perfect mix of tech and entertainment!",
      footerLink: [
        {
          name: "Visit FilmR8R",
          url: "https://protected-falls-09261.herokuapp.com/movies"
        }
      ]
    },
    {
      image: require("./assets/images/chatter-logo.jpeg"),
      projectName: "Chatter",
      projectDesc:
        "Dive into Chatter: a sleek, full-stack app for effortless chatting! Powered by the MERN stack—MongoDB, Express, React, and Node.js—it integrates Google authentication for easy sign-ins and secure account connections. Social interaction redefined!",
      footerLink: [
        {
          name: "Visit Chatter",
          url: "https://chatter-mern-app.herokuapp.com/"
        }
      ]
    },
    {
      image: require("./assets/images/weather-main.jpg"),
      projectName: "WeatherScope",
      projectDesc:
        "WeatherScope is a minimalist weather app made with React class components. It fetches real-time weather using WeatherAPI, offering current conditions, a 3-day forecast, and hourly updates—all without third-party integrations. 🌦️",
      footerLink: [
        {
          name: "Visit WeatherScope",
          url: "https://weather-app-13137.web.app/"
        }
      ]
    },
    {
      image: require("./assets/images/snapshot-logo.jpeg"),
      projectName: "SnapShot",
      projectDesc:
        "SnapShot is a free image-sharing platform for saving and sharing photos. With easy sign-up and an intuitive interface, it supports JPEGs, PNGs, and GIFs. Powered by MongoDB and GridFS, it ensures fast uploads and a seamless experience. Join today! 📸",
      footerLink: [
        {
          name: "Visit SnapShot",
          url: "https://stark-shore-05326.herokuapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Got an idea to share or just want to say hello? Don’t be shy—my inbox is always open and ready for action!",
  // number: "+92-0000000000",
  email_address: "mohammadraza1993@yahoo.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
