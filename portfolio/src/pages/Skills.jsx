import './Skills.css';
import { Element } from 'react-scroll';

function Skills() {
  return (
    // <div className="skills">
    <Element name="skills" className="section min-h-screen flex flex-col items-center justify-center">
    <h2>Skills</h2>
      <p>Here are some of my skills:</p>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>CSS</li>
        <li>HTML</li>
      </ul>
      </Element>
    // </div>
  );
}

export default Skills;