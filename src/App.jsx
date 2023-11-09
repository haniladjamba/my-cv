import Header from "./components/header";
import Hero from "./components/hero";
import About from "./components/about";
import Facts from "./components/AboutComponents/facts";
import Skills from "./components/AboutComponents/skills";
import Resume from "./components/resume";
import Portofolio from "./components/portofolio";
import Services from "./components/services";
import Testimonial from "./components/Testimonial/testimonial";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <main id="main">
        <About />
        <Facts />
        <Skills />
        <Resume />
        <Portofolio />
        <Services />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App;
