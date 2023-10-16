import "./App.scss";
import About from "./components/layout/About/about";
import Contact from "./components/layout/Contact/contact";
import Hero from "./components/layout/Hero/hero";
import Navbar from "./components/layout/navbar/navbar";
import Portfolio from "./components/layout/Portfolio/portfolio";
import Resume from "./components/layout/Resume/resume";
import Skills from "./components/layout/Skills/skills";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";

function App() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Resume />
      <Portfolio />
      <Contact />
      <div className="scrollToTop" onClick={() => scrollToTop()}>
        <KeyboardDoubleArrowUpIcon className="scroll_icon" />
      </div>
    </div>
  );
}

export default App;
