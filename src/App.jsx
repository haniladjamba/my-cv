import { useEffect } from 'react';
import AOS from 'aos';
import Header from "./components/header";
import Hero from "./components/hero";
import About from "./components/about";
import Facts from "./components/AboutComponents/facts";
import Skills from "./components/AboutComponents/skills";
import Resume from "./components/resume";
import Portofolio from "./components/portofolio";
import Services from "./components/services";
import Contact from "./components/contact";
import Footer from "./components/footer";

import ScrollListener from './components/behaviour/schrool'
import PortfolioIsotope from './components/behaviour/portofoliosotope';
import PortfolioLightbox from './components/behaviour/portofolioLightBox';
import PortfolioDetailsSlider from './components/behaviour/portofolioSlider';

function App() {
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <>
      <ScrollListener />
      <PortfolioIsotope />
      <Header />
      <Hero />
      <main id="main">
        <About />
        <Facts />
        <Skills />
        <Resume />
        <PortfolioDetailsSlider />
        <PortfolioLightbox />
        <Portofolio />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App;
