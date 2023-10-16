import "./App.scss";
import About from "./components/layout/About/about";
import Contact from "./components/layout/Contact/contact";
import Footer from "./components/layout/Footer/footer";
import Hero from "./components/layout/Hero/hero";
import Navbar from "./components/layout/navbar/navbar";
import Portfolio from "./components/layout/Portfolio/portfolio";
import Resume from "./components/layout/Resume/resume";
import Skills from "./components/layout/Skills/skills";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";

function App() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="App">
      <div className="rightFloat">
        <a
          href="https://www.linkedin.com/in/youssef-bedoui-63661a201/"
          alt="linkedin"
          className="socialBtn"
        >
          <LinkedInIcon className="icon" />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100004288716633"
          alt="facebook"
          className="socialBtn"
        >
          <FacebookIcon className="icon" />
        </a>
      </div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Resume />
      <Portfolio />
      <Contact />
      <Footer />
      <div className="scrollToTop" onClick={() => scrollToTop()}>
        <KeyboardDoubleArrowUpIcon className="scroll_icon" />
      </div>
    </div>
  );
}

export default App;
