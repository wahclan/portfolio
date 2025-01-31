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
  market,
  blog,
  stmichales,
  tdsb,
  rogers,
  cibc,
  openai,
  carrent,
  jobit,
  tripguide,
  threejs,
  spaceship,
  wahnotes,
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
];

const spaceships = [
  {
    icon: spaceship
  }
]

const services = [
  {
    title: "Web and App Developer",
    icon: web,
  },
  {
    title: "Database Developer",
    icon: mobile,
  },
  {
    title: "AI, ML and DL Developer",
    icon: backend,
  },
  {
    title: "Data Analyst",
    icon: creator,
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
    title: "Digital Optimizer",
    company_name: "Rogers Communications",
    icon: rogers, // Replace with actual icon
    iconBg: "#5b93d3", // Example color, adjust as necessary
    date: "June 2023 to Present",
    points: [
      "Assist Product Owners in writing and implementing stories to enhance digital journeys,reduce contact center volumes, and lower Average Handle Time (AHT).",
      "Response for ticket lifecycle.",
      "Utilize OpenAI models and vendor AI systems to optimize responses, train conversation flows, and improve user engagement.",
      "Create Excel reports, analyze data, and generate actionable insights.",
      "Contribute to digital adoption campaigns, shifting volume from Contact Centers to digital platforms.",
      "Present recommendations to Digital, Care, and Tech Ops teams, driving improvements in contact deflection and user experience.",
    ],
  },
  {
    title: "IT Consultant",
    company_name: "Rogers Communications",
    icon: rogers, // Replace with actual icon
    iconBg: "#5b93d3", // Example color, adjust as necessary
    date: "June 2023 to Present",
    points: [
      "Responsible for network management, network security, and network optimization.",
      "Response for ticket lifecycle.",
      "Maintain and manage network systems.",
      "Manage customer interactions through inbound and outbound calls, and chat support, focusing on timely and effective resolution of technical issues.",
      "Continuously enhance expertise in company products, services, and solutions, applying new knowledge and certifications to improve service delivery.",
    ],
  },
  {
    title: "Help Desk Analyst",
    company_name: "CIBC",
    icon: cibc, // Replace with actual icon
    iconBg: "#c4b5a4", // Example color, adjust as necessary
    date: "June 2021 to June 2023",
    points: [
      "Managed and maintained users on Active Directory servers.",
      "Utilized Excel for advanced data analysis, reporting, and automation to support decision-making processes and enhance operational efficiency.",
      "Manage and maintain incident tickets using ServiceNow.",
      "Troubleshoot Banking software and escalate to support teams.",
      "Maintained users on IBM mainframe systems and performed system service support.",
      "Utilized HTML tags to manage and update CIBC's knowledge base, ensuring documentation is current with new information and hyperlinks.",
      "Maintain Unix systems and perform system services using commands.",
      "Maintain and manage CISCO VPN connections, Virtual Machines, Citrix services, and firewall and security management systems for IT infrastructure.",
    ],
  },
  {
    title: "IT Assistant",
    company_name: "Toronto District School Board (Contract Buchanan)",
    icon: tdsb, // Replace with actual icon
    iconBg: "#88c1d0", // Example color, adjust as necessary
    date: "August 2020 to June 2021",
    points: [
      "Operated custom online software for database entry.",
      "Mastered Excel analytics to optimize team performance, spearheading all Excel-related tasks including data analysis, reporting, and automation.",
      "Responsible for sending emails to communicate updates to clients and operated office equipment.",
      "Administrator and Organizer of crew members and data to manage shipment.",
      "Troubleshooting laptops for system integrity and restore laptops to working conditions.",
      "Extensive bookkeeping and maintaining the warehouse using heavy machinery.",
      "Maintain and secure network integrity.",
    ],
  },
  {
    title: "Logistics Assistant",
    company_name: "St. Michael’s Hospital",
    icon: stmichales, // Replace with actual icon
    iconBg: "#a1d2ce", // Example color, adjust as necessary
    date: "February 2020 to August 2020",
    points: [
      "Excel data entry and automating data conversion from Excel.",
      "Troubleshoot text recognizing software and leveraged Excel in conjunction with AccessPoint to maintain and update the database.",
      "Operated office equipment including photocopier, fax machine, printer, scanner and created databases on MS.",
      "Provide quality assurance to medical products and equipment and automate data into company format.",
      "Provide attention to detail regarding necessary medical equipment according to team communication with staff.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "He made sure to update websites keeping the UI beautiful.",
    name: "John Doe",
    designation: "Team Leader",
    company: "CIBC",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "He solved our biggest Database problem and set us up to handle more on our MS access Database.",
    name: "John Doe",
    designation: "Sr Manager",
    company: "St. Michael’s Hospital",
    image: "https://randomuser.me/api/portraits/men/87.jpg",
  },
  {
    testimonial:
      "After Samir optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "John Doe",
    designation: "CTO",
    company: "IRDA Solution",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  
{
    name: "OpenAI ChatBot",
    description:
      "Utilized OpenAi GPT4 Model to create a Dynamic chat bot with custom inputs and MFA using clerk",
    tags: [
      {
        name: "OpenAI",
        color: "green-text-gradient",
      },
      {
        name: "Nextjs",
        color: "Blue-text-gradient",
      },
      {
        name: "Data analysis",
        color: "pink-text-gradient",
      },
    ],
    image: wahnotes,
    source_code_link: "https://wahainote.vercel.app/",
  },
  {
    name: "Custom OpenAI Stock Trading model",
    description:
      "Custom trained models on the OpenAI platform using data normalized using python. creating action in the model to ensure good trading advice. The model is trained on GPT4 and can analyze when to trade and when not to visualizing the data. Trained on all index stock history and patterns of the best traders. The dataset also includes US congress Trades to make the best predictions to BUY or SELL or Wait for better time.",
    tags: [
      {
        name: "OpenAI",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "Data analysis",
        color: "pink-text-gradient",
      },
    ],
    image: openai,
    source_code_link: "https://chat.openai.com/g/g-AT2htsyB4-stock-helper",
  },
  {
    name: "Blog",
    description:
      "Blog website based on reddit. Full stack application with cloud database and optimizing posts and for you page using Redis.",
    tags: [
      {
        name: "redis",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "Prisma",
        color: "pink-text-gradient",
      },
    ],
    image: blog,
    source_code_link: "https://social-wahclan.vercel.app/",
  },
  {
    name: "Market Place",
    description:
      "This is a repository for a Full Stack E-Commerce + Dashboard & CMS: Next.js 13 App Router, React, Tailwind, Prisma, MySQL.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "stripe",
        color: "pink-text-gradient",
      },
      {
        name: "MySQL",
        color: "blue-text-gradient",
      },
    ],
    image: market,
    source_code_link: "https://wahmarketstore.vercel.app/",
  },
  {
    name: "NFT Trade   ",
    description:
      "A NFT Trading website that generates a GIF when sending ETH.",
    tags: [
      {
        name: "vite",
        color: "blue-text-gradient",
      },
      {
        name: "Blockchain",
        color: "green-text-gradient",
      },
      {
        name: "Eth",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://competent-kirch-afd8b9.netlify.app/",
  },
  {
    name: "NFT Market",
    description:
      "NFT market to trade and sell NFTs using polygon. Contracts made in solidity. Minted NFTs https://opensea.io/collection/wahlite-marketplace",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "polygon",
        color: "green-text-gradient",
      },
      {
        name: "solidity",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://wahlite.vercel.app/create-nft",
  },
  {
    name: "Custom Chatbot",
    description:
      "Python pre-trained transformers GPT 2 model. In this project I trained my python model to provide conversational skills like any character based on dialog from that character. The data and the outputs from the modem provided DAN like replys. This model was trained for 100+ hrs using Googles premium computational units",
    tags: [
      {
        name: "Pytorch",
        color: "blue-text-gradient",
      },
      {
        name: "Jupyter notebook",
        color: "green-text-gradient",
      },
      {
        name: "Microsoft-DialogGPT",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://huggingface.co/WAHCLAN",
  },
];

export { services, technologies, experiences, testimonials, projects, spaceships };
