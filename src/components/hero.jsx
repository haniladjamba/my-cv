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
          <div className="typed-card p-3 px-4 rounded">
            <p className="m-0 d-flex align-items-center">
              I'm&nbsp;<TypedText />
            </p>
          </div>
        </div>
      </section>
      {/* End Hero */}
    </div>
  );
};

export default Hero;
