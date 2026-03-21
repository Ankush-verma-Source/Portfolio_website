

import "./index.css";

import HomePage from "./components/Home/HomePage";
import AboutPage from "./components/About/AboutPage.jsx";
// ProjectsPage import temporarily removed
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Contact from "./components/Contact/ContactSec.jsx";
import ResumePage from "./components/Resume/ResumePage.jsx";

function App() {
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <main className="flex-grow-1">
          <section id="home">
            <HomePage />
          </section>
          <section id="about">
            <AboutPage />
          </section>
          <section id="resume">
            <ResumePage />
          </section>
          {/* Projects section removed for now */}
          <section id="contact">
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
