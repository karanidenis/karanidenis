import {
    FaHome,
    FaUser,
    FaBriefcase,
    FaEnvelopeOpen,
    // FaCode,
    // FaFolderOpen,
    // FaGraduationCap,
} from "react-icons/fa";

// import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";

// import Work1 from "./assets/image1.png";
// import Work2 from "./assets/image2.png";
// import Work3 from "./assets/image3.png";
// import Work4 from "./assets/image4.png";
// import Work5 from "./assets/karani.png";

// import Resume from "./assets/Resume.pdf";

// import Theme1 from "./assets/blue.png";
// import Theme2 from "./assets/red.png";
// import Theme3 from "./assets/green.png";
// import Theme4 from "./assets/purple.png";
// import Theme5 from "./assets/yellow.png";
// import Theme6 from "./assets/blueviolet.png";
// import Theme7 from "./assets/yellowgreen.png";

export const links = [
    {
        id: 1,
        name: "Home",
        icon: <FaHome classname='nav__icon' />,
        path: "/",
    },
    {
        id: 2,
        name: "About",
        icon: <FaUser classname='nav__icon' />,
        path: "/about",
    },
    {
        id: 3,
        name: "portfolio",
        icon: <FaBriefcase classname='nav__icon' />,
        path: "/portfolio",
    },
    {
        id: 4,
        name: "Contact",
        icon: <FaEnvelopeOpen classname='nav__icon' />,
        path: "/contact",
    },
];