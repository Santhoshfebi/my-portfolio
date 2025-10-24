import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import BackToTop from "./Components/BackToTop";

function App() {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-gray-100 transition-colors duration-500">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Resume />
      <Contact />
      <BackToTop />
    </div>
  );
}

export default App;
