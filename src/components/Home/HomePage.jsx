import Lottie from "lottie-react";
// import ComputerAnimation from "../../../public/assets/ProgrammingComputer.json";
import { Typewriter } from "react-simple-typewriter";
// Icons moved towards the bottom page
function HomePage() {
  return (
    <div className="container-lg my-home-container mb-5">
      <div className=" d-flex  gap-5  align-items-center justify-content-between my-home ">
        <div className="my-home-content">
          <h1>Hi there,</h1>
          <h1 className="myname"> I'm Ankush Verma</h1>
          <p>
            <Typewriter
              words={[
                "Full Stack Web Developer",
                "Aspiring Software Engineer",
                "MERN Stack Enthusiast",
                "AI Explorer",
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              id="typewriter"
            />
          </p>
          <div className="mt-4 d-flex gap-3 my-home-buttons">
             <a href="#resume" className="btn btn-gradient px-4 py-2">View Resume</a>
             <a href="/assets/resume.pdf" download className="btn btn-outline-light px-4 py-2 fw-bold">Download CV</a>
          </div>
        </div>
        <div className="my-home-computer">
          <Lottie
            // animationData={ComputerAnimation}
            path="../../../assets/ProgrammingComputer.json"
            loop={true}
            autoplay={true}
            style={{ width: "32rem", height: "40rem", transform: "scale(1.3)" }}
            className="text-end "
            id="computer-lottie"
          />
        </div>
      </div>
      {/* Find me on block moved to contact section */}
    </div>
  );
}

export default HomePage;
