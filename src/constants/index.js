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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  spaceship,
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
      "Embrace the first-call resolution principle to maximize customer satisfaction.",
      "Educate customers on existing products and upsell value-added services.",
      "Resolve technical problems with a customer-centric approach, employing active listening, targeted questioning, and clear communication.",
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
    icon: stmichaels, // Replace with actual icon
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
      "I thought it was impossible to make a website as beautiful as our product, but Samir proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Samir does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Samir optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects, spaceships };
