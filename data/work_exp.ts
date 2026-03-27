interface workTypes {
  name: string;
  cer_link: string;
  date: string;
  proj: string;
  proj_link: string;
  description: string;
  tags: string[];
  points: string[];
}

export const work_exp: workTypes[] = [
  {
    name: "HacktoberFest",
    cer_link: "",
    date: "Oct, 2025",
    proj: "",
    proj_link: "https://www.holopin.io/@dhairyagoelgit#badges",
    description: "",
    tags: ["OpenSource"],
    points: [
      "Contributed to open-source projects using JavaScript during Hacktoberfest by implementing new features and enhancing existing functionality",
      "Identified and resolved bugs across repositories, improving application stability and user experience.",
      "Collaborated with developers via GitHub, following structured workflows for pull requests and code reviews.",
    ],
  },
  {
    name: "GIH Hackathon",
    cer_link: "",
    date: "May, 2025",
    proj: "",
    proj_link: "https://www.linkedin.com/posts/abhay-pratap-singh-48121a318_hackathon-gih25-innovation-ugcPost-7327017691402133504-FqCv?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAE4DloMBh8ZJMOoQX9A29q7KruAoxBgJE3A",
    description: "",
    tags: ["Hackathon", "Developement"],
    points: [
      "Finalist at GIH Hackathon for developing an innovative parking management solution to simplify real-time parking space discovery .",
      "Engineered a smart application to help users efficiently locate available parking spots, reducing search time and congestion.",
      "Designed and implemented core features focused on usability, seamless navigation, and real-time data handling.",
      
    ],
  },
];
