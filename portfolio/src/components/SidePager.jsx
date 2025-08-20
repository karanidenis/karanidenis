// import { Link } from "react-scroll";
// import './SidePager.css';

// function SidePager() {
//     console.log("SidePager mounted!");

//   const sections = ["home", "skills","contact"];

//   return (
//     <div
//     style={{
//       position: "fixed",
//       right: "20px",
//       top: "50%",
//       transform: "translateY(-50%)",
//       background: "yellow",
//       width: "50px",
//       height: "50px",
//       zIndex: 9999,
//     }}
//     >
//       {sections.map((section, idx) => (
//         <Link
//           key={idx}
//           to={section}
//           smooth={true}
//           duration={500}
//           spy={true}
//           offset={-50}
//           activeClass="active-dot"
//           className="w-4 h-4 rounded-full border-2 border-red-500 cursor-pointer transition-colors"
//         />
//       ))}
//       Pager
//     </div>
//   );
// }

// export default SidePager;

import { Link } from "react-scroll";

function SidePager() {
  const sections = ["home", "skills", "contact"];

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-[9999]">
      {sections.map((section, idx) => (
        <Link
          key={idx}
          to={section}
          smooth={true}
          duration={500}
          spy={true}
          offset={-50}
          activeClass="active-dot"
          className="w-4 h-4 rounded-full border-2 border-red-500 cursor-pointer transition-colors bg-white"
        />
      ))}
    </div>
  );
}

export default SidePager;

  