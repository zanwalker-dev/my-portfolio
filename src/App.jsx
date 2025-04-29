/**
 * @copyright 2025 zanwalker-dev
 * @license Apache-2.0
 */

// Css
import "./index.css";

//Node
import { ReactLenis, useLenis } from "lenis/react";

// Components
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Review from "./components/Review";
import Skill from "./components/Skill";
import Work from "./components/Work";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
        <Work />
        <Review />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
