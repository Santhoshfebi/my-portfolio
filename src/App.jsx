import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Experience from "./Components/Experience";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";

function App() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-neutral-950 text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Resume />
      <Contact />
    </main>
  );
}

export default App;