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
  tnm,
  unicorniz,
  eatery,
  dhaage,
  taskscheduler,
  // carrent,
  game,
  // jobit,
  hackerrank,
  // tripguide,
  threejs,
  intelliassist,
} from '../assets'

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
]

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'React Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Software Engineer',
    icon: creator,
  },
]

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: 'git',
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  {
    name: "docker",
    icon: docker,
  },
]

const experiences = [
  {
    title: 'Software Engineer',
    company_name: 'Intelliassist',
    icon: intelliassist,
    iconBg: '#E6DEDD',
    date: 'Sept 2024 - Present',
    points: [
      'Migrated legacy APIs from Java Spring Boot to NestJS with Prisma ORM, improving maintainability.',
      'Designed and implemented a scalable backend architecture, resulting in a 60% improvement in API response times. Developed custom triggers to ensure effective and automated database handling',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Developed Shopify extensions that increased client store revenue by 30% and worked on Recommendations API tailored for diverse Shopify stores to enhance user engagement and sales..',
    ],
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Unicorniz Innovations',
    icon: unicorniz,
    iconBg: '#E6DEDD',
    date: 'Sept 2023 - Oct 2022',
    points: [
      'Developing and maintaining web applications using React.js, Tailwind and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Web Developer',
    company_name:
      'TechSurge and Mridang by Maharaja Agrasen Institute of Technology',
    icon: tnm,
    iconBg: '#383E56',
    date: 'Mar 2023 - Apr 2023',
    points: [
      "Led a team of four in planning, designing, developing, and launching the college's annual fest website using HTML, CSS, JavaScript and Joomla.",
      'Developed and tested the fest website, creating 50+ customized event pages, increasing traffic by 40%.',
      'Utilized APIs to create a visually appealing gallery showcasing 100+ HD images/videos, enhancing user engagement.',
    ],
  },
]

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
]

const projects = [
  {
    name: 'Dhaage',
    description: `a cutting-edge, MERN stack-based application inspired by Instagram Threads,boasting image and thoughts sharing, and a user-friendly interface. Enhanced with Chakra UI’s elegant design components and jwt based authentication.`,
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'nodejs',
        color: 'green-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'pink-text-gradient',
      },
    ],
    image: dhaage,
    deployed_link: 'https://dhaage-eta.vercel.app/',
    source_code_link: 'https://github.com/vineetkhemnani/Dhaage',
  },
  {
    name: 'The Eatery (food ordering app)',
    description:
      'Developed a ReactJS-powered food ordering application that integrates with the Swiggy public API for real-time culinary information.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'redux-toolkit',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: eatery,
    deployed_link: 'https://the-eatery-food-ordering.vercel.app',
    source_code_link:
      'https://github.com/vineetkhemnani/The-eatery-food-ordering',
  },
  {
    name: '2D SideScroller Game',
    description:
      'Developed a game using the Canvas API with parallax backgrounds and responsive keyboard controls.Demonstrated state management skills by optimizing performance and gameplay mechanics.',
    tags: [
      {
        name: 'HTML',
        color: 'blue-text-gradient',
      },
      {
        name: 'CSS',
        color: 'green-text-gradient',
      },
      {
        name: 'JavaScript',
        color: 'pink-text-gradient',
      },
    ],
    image: game,
    deployed_link: 'https://vineetkhemnani.github.io/2D-SideScroller-Game/',
    source_code_link: 'https://github.com/vineetkhemnani/2D-SideScroller-Game',
  },
  {
    name: 'HackerRank Automation',
    description:
      'Designed & implemented codebase for automating HackerRank login and question-solving using Puppeteer.',
    tags: [
      {
        name: 'JavaScript',
        color: 'blue-text-gradient',
      },
      {
        name: 'Automation',
        color: 'green-text-gradient',
      },
      {
        name: 'Puppeteer',
        color: 'pink-text-gradient',
      },
    ],
    image: hackerrank,
    source_code_link: 'https://github.com/vineetkhemnani/HackerrankAutomated',
  },
  {
    name: 'Task Scheduler',
    description:
      'Designed a task scheduler using React and Redux-toolkit for state management. Handling creation and deleting of dynamic lists with each containing individual todos',
    tags: [
      {
        name: 'JavaScript',
        color: 'blue-text-gradient',
      },
      {
        name: 'React',
        color: 'green-text-gradient',
      },
      {
        name: 'Redux',
        color: 'pink-text-gradient',
      },
    ],
    image: taskscheduler,
    deployed_link: 'https://taskscheduler-react-redux.netlify.app',
    source_code_link: 'https://github.com/vineetkhemnani/ToDo-React-Redux',
  },
]

export { services, technologies, experiences, testimonials, projects }
