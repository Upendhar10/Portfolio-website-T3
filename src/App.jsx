import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Techstack from "./components/Techstack";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="max-w-[80%] md:max-w-[75%] m-auto  h-full">
      <Header />
      <Hero />
      <About />
      <Techstack />
      <Projects />
      <Experience/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
