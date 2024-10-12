import images from './imageImports';

const logotext = "Freelance Web Developer";
const meta = {
    title: "Freelance Web Developer",
    description: "I’m Jane Doe, a Web Developer specializing in modern, responsive websites.",
};

const introdata = {
    title: "I’m Jane Doe",
    animated: {
        first: "I create stunning web designs",
        second: "I develop responsive websites",
        third: "I bring creative ideas to life",
    },
    description: "With a passion for web development, I specialize in creating visually appealing and functional websites.",
    your_img_url: images['fkayy.jpg'],  // Placeholder image
};

const dataabout = {
    title: "About Me",
    aboutme: "As a creative web developer, I bring a mix of design and technical skills to every project. My approach combines attention to detail and a passion for coding to deliver high-quality results.",
};

const worktimeline = [
    {
        jobtitle: "Junior Developer",
        where: "TechCorp Inc.",
        date: "2021",
    },
    {
        jobtitle: "Web Developer",
        where: "Web Solutions Ltd.",
        date: "2020",
    },
    {
        jobtitle: "Freelance Developer",
        where: "Self-employed",
        date: "2019",
    },
];

const skills = [
    {
        name: "HTML & CSS",
        value: 90,
    },
    {
        name: "JavaScript",
        value: 85,
    },
    {
        name: "React",
        value: 80,
    },
    {
        name: "Node.js",
        value: 75,
    },
    {
        name: "UI/UX Design",
        value: 70,
    },
];

const services = [
    {
        title: "Web Development",
        description: "Building responsive, user-friendly websites tailored to meet the needs of my clients.",
    },
    {
        title: "UI/UX Design",
        description: "Designing intuitive and visually appealing user interfaces that provide an exceptional user experience.",
    },
    {
        title: "Consulting",
        description: "Providing expert advice on how to improve web presence and enhance user engagement.",
    },
];

const dataportfolio = [
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "A minimalistic portfolio website.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/800/?grayscale",
        description: "An e-commerce platform for modern shopping.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "A creative agency website showcasing services and projects.",
        link: "#",
    },
];

const contactConfig = {
    YOUR_EMAIL: "janedoe@example.com", // Placeholder email
    YOUR_FONE: "+1234567890",          // Placeholder phone number
    description: "Feel free to reach out for web development projects, collaborations, or consulting.",
    YOUR_SERVICE_ID: "YOUR_SERVICE_ID",
    YOUR_TEMPLATE_ID: "YOUR_TEMPLATE_ID",
    YOUR_USER_ID: "YOUR_USER_ID",
};

const socialprofils = {
    github: "https://github.com/janedoe",  // Placeholder GitHub
    facebook: "https://facebook.com/janedoe",  // Placeholder Facebook
    linkedin: "https://linkedin.com/in/janedoe",  // Placeholder LinkedIn
    twitter: "https://twitter.com/janedoe",  // Placeholder Twitter
    instagram: "https://www.instagram.com/janedoe",  // Placeholder Instagram
    twitch: "https://twitch.com/janedoe",  // Placeholder Twitch
};

export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
