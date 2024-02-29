import "./app.scss";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Parallax from "./components/Parallax/Parallax";
import About from "./components/Sections/About";
import Skills from "./components/Sections/Skills";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      {/* <section id="About" type="About">
        <Parallax />
      </section> */}
      <section id="About">
        <About />
      </section>
      {/* <section id="Skills" type="Skills">
        <Parallax />
      </section> */}
      <section id="Skills">
        <Skills />
      </section>

      <section id="Projects">Projects</section>

      <section id="Contact">Contact</section>
    </div>
  );
};

export default App;
