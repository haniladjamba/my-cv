import TypedText from "./behaviour/heroAnim";

/* eslint-disable react/no-unescaped-entities */
const Hero = () => {
  return (
    <div>
      {/* ======= Hero Section ======= */}
      <section
        id="hero"
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <div className="hero-container" data-aos="fade-in">
          <h1>Hani Ladjamba</h1>
          <p>
            I'm <TypedText />
          </p>
        </div>
      </section>
      {/* End Hero */}
    </div>
  );
};

export default Hero;
