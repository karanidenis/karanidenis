import { Element } from "react-scroll";
import "./Home.css";
import ProfileImage from "../assets/profile.png"; 

function Home() {
  return (
    // <Element name="home" className="section min-h-screen flex flex-col justify-center">
    <Element name="home" className="section home  ">
      <div className="home">
          <div className="intro">
          <h1>Hello I'm</h1>
          <h1>a Software Developer</h1>

          <p>
            Fond of creating applications, solving problems with code & playing with
            AI (Machine Learning).
          </p>

          <p>
                I love to learn new technologies and apply them in my projects. I am
                always looking for new challenges and opportunities to grow.
          </p>

            <button className="bg-red-500 text-white px-4 py-2 rounded">
            </button>
          </div>

          <div className="image-section">
              <img src={ProfileImage} className="profile-image" alt="Profile" />
          </div>
        </div>
    </Element>
  );
}

export default Home;
