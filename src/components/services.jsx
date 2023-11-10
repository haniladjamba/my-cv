/* eslint-disable react/no-unescaped-entities */
const Services = () => {
  return (
    <div>
      {/* ======= Services Section ======= */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-title">
            <h2>Services</h2>
            <p>
            As a versatile strudent, my services span a 
            spectrum of creative and technical realms. Specializing 
            in game development, web design, and artistic 
            illustration, I offer a range of expertise tailored 
            to meet diverse needs.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
              <div className="icon">
                <i className="bi bi-unity" />
              </div>
              <h4 className="title">
                <a href>Assets creation</a>
              </h4>
              <p className="description">
              With a focus on creating assets that seamlessly 
              integrate into Unity environments, I aim to assist 
              developers in building compelling and visually engaging 
              gaming worlds. Whether it's characters or environments design.
              </p>
            </div>
            <div
              className="col-lg-4 col-md-6 icon-box"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div className="icon">
                <i className="bi bi-filetype-cs" />
              </div>
              <h4 className="title">
                <a href>C# scripting</a>
              </h4>
              <p className="description">
              From implementing game mechanics to creating intricate 
              gameplay features, my expertise in C# coding ensures 
              a seamless integration of functionality and interactivity.
              </p>
            </div>
            <div
              className="col-lg-4 col-md-6 icon-box"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="icon">
                <i className="bi bi-filetype-jsx" />
              </div>
              <h4 className="title">
                <a href>Front-End developer</a>
              </h4>
              <p className="description">
              My services cater to enhancing the interactivity and 
              usability of web-based projects. Whether it's building 
              components or implementing state-of-the-art UI/UX designs.
              </p>
            </div>
            <div
              className="col-lg-4 col-md-6 icon-box"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <div className="icon">
                <i className="bi bi-brush" />
              </div>
              <h4 className="title">
                <a href>Digital illustration</a>
              </h4>
              <p className="description">
              From concept art and character design to vibrant visual 
              narratives, my expertise extends to a wide spectrum of 
              digital artistry.
              </p>
            </div>
            <div
              className="col-lg-4 col-md-6 icon-box"
              data-aos="fade-up"
              data-aos-delay={400}
            >
              <div className="icon">
                <i className="bi bi-book-half" />
              </div>
              <h4 className="title">
                <a href>Book cover</a>
              </h4>
              <p className="description">
              My expertise focuses on creating visually 
              striking and marketable covers that resonate 
              with your target audience.
              </p>
            </div>
            <div
              className="col-lg-4 col-md-6 icon-box"
              data-aos="fade-up"
              data-aos-delay={500}
            >
              <div className="icon">
                <i className="bi bi-file-person" />
              </div>
              <h4 className="title">
                <a href>Poster illustration</a>
              </h4>
              <p className="description">
              I offer a range of design services aimed 
              at crafting visually compelling and impactful posters.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* End Services Section */}
    </div>
  );
};

export default Services;
