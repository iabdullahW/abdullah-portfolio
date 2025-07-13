import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Muhammad Abdullah",
  title: "Hi all, I'm Abdullah",
  description:
    "I'm a passionate Front End developer with experience developing  web applications with  React.js, and Next.js Technologies. I am strongly interested in learning new technologies and implementing them in my projects. I'm a self-motivated,disciplined  and hardworking individual who is always ready to learn new things and work in a team.",
  resumeLink: "https://drive.google.com/file/d/1_T_AjB85s-2w4RtFzQEMsRPshzdBCsUX/view?usp=sharing",
};

export const openSource = {
  githubUserName: "iabdullahW",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:as0950507@gmail.com",
  linkedin: "https://www.linkedin.com/in/i-abdullah/",
  github: "https://github.com/iabdullahW",
  instagram: "https://www.instagram.com/abdullahhhh.w",
  // facebook: 'https://www.facebook.com/profile.php?id=100088289379036',
  // twitter: 'https://x.com/Abdulla62315537',
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "CRAZY FRONT END DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Front End Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"),
        emoji("⚡ Building responsive static websites using Next.js"),
        emoji("⚡ Building Web Apps using Tailwind CSS"),
      ],
      softwareSkills: [
     
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nextjs",
          iconifyTag: "vscode-icons:file-type-light-next",
        },
     
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
      
        {
          skillName: "Tailwind CSS",
          iconifyTag: "logos:tailwindcss-icon",
        },
        {
          skillName: "Cpp",
          iconifyTag: "vscode-icons:file-type-cpp3",
        },
        {
          skillName: "Java",
          iconifyTag: "logos:java",
        },
        {
          skillName: "Vercel",
          iconifyTag: "logos:vercel",
        },
        {
          skillName: "Firebase",
          iconifyTag: "devicon:firebase-wordmark",
        },
          {
            skillName: "Git",
            iconifyTag: "logos:git-icon",
          },
          {
            skillName: "HTML5",
            iconifyTag: "logos:html-5",
          },
          {
            skillName: "CSS3",
            iconifyTag: "logos:css-3",
          },
             //LEARNING
        // {
        //   skillName: "AWS",
        //   iconifyTag: "logos:aws",
        // },
        // {
        //   skillName: "Heroku",
        //   iconifyTag: "logos:heroku-icon",
        // },

        // {
        //   skillName: "Docker",
        //   iconifyTag: "logos:docker-icon",
        // },
       //LEARNING
        // {
        //   skillName: "Python",
        //   iconifyTag: "logos:python",
        // },
        
        // {
        //   skillName: "Django",
        //   iconifyTag: "vscode-icons:file-type-django",
        // },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "85", //Insert relative proficiency in percentage
  },
  {
    Stack: "Project Management",
    progressPercentage: "90",
  },
  {
    Stack: "Programming",
    progressPercentage: "95",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "Federal Urdu University of Arts, Science and Technology",
    subHeader: "Bachelor of Science in Computer Science",
    duration: "December 2023 - Present",
    desc: "",
    grade: "3.76",
    descBullets: [], // Array of Strings
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Frontend Developer",
    company: "Fast Technology",
    companyLogo: "/img/icons/common/fast.jpeg",
    date: "October 2024 - April 2025",
    desc: "Developed responsive web applications using React.js and Next.js. Collaborated with the design team to create intuitive user interfaces. Implemented responsive design principles to ensure optimal user experience across all devices.Integrate API's to fetch and collaborated with teams to deliver high-quality, scalable and maintainable code.Mentored junior developers helped them learn basics,logic building and participated in code reviews to improve coding standards.",
  },
  {
    role: "Internee",
    company: "Fast Technology",
    companyLogo: "/img/icons/common/fast1.png",
    date: "Jan 2024 - Sept 2024",
    desc: "Gained a solid foundation in programming and logic building, focusing on writing scalable and maintainable code. Learned best practices for reducing code complexity and improving readability by minimizing spaghetti code. Developed a problem-solving mindset and refined skills in iterative development processes.Learned basics of React.js and Next.js.Took part in daily meetings to discuss the progress of the project and the challenges faced.Learned basics of Git and Github.",
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
 
];

export const projects: ProjectType[] = [
  {
    name: "developer-portfolio",
    desc: "Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.",
    github: "https://github.com/iabdullahW/abdullah-portfolio",
    link: "https://abdullahw-portfolio.vercel.app/",
  },
  {
    name: "Vantage CRM",
    desc: "All in one marketing,automation and CRM solution for business,which includes automate leads,followup,booking,payment,and more.",
    link: "https://vantage-crm.vercel.app/",
  },
  {
    name: "O Mejor Oferta",
    desc: "O Mejor Oferta is a mobile marketplace for buying and selling items nearby, helping users find deals on things they want and make money from items they no longer need.",
    link: "https://play.google.com/store/apps/details?id=com.duseca.mejor_oferta",
  },
  {
    name: "Hooligan Culture",
    desc: "A Ecommerce Platform, where shopping meets the future! With HandCash BitcoinSV integration, you can authenticate and purchase products with ease and confidence.",
    link: "https://hooliganculture.com/",
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: "Wajih",
    role: "Frontend Developer at Fast Technology",
    feedback:
      "You were a wonderful addition to our team, alhumdulillah. I'm quite impressed with your abilities and professional practices. You approach problems from a unique perspective and always ask the right question. Finding a good kid like Abdullah is extremely difficult. He has contributed to the growth of our organization and continues to do so. May Allah bless you with everything you desire.",
  },
 
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Muhammad Abdullah",
  description: greetings.description,
  author: "Muhammad Abdullah",
  image: "https://avatars.githubusercontent.com/u/160312962?v=4",
  url: "https://abdullahw-portfolio.vercel.app/",
  keywords: [
    "Muhammad Abdullah",
  "Abdullah Portfolio",
  "Developer Portfolio",
  "web developer",
  "frontend developer",
  "@iabdullahW",
  "iabdullahW",
  "portfolio 2025",
  "development projects",
  "coding portfolio"
  ],
};
