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
              As a versatile strudent, my services span a spectrum of creative
              and technical realms. Specializing in game development and mobile app development, I offer a range of expertise
              tailored to meet diverse needs.
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
              <div className="icon">
                <i className="bi bi-unity" />
              </div>
              <h4 className="title">
                <a href>Custom Game Development</a>
                <br />
                <a href>(2D & 3D)</a>
              </h4>
              <p className="description">
                Build complete games from concept to publish-ready product using Unity. Includes mechanics, UI, and optimization.
              </p>
            </div>
            <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
              <div className="icon">
                <i className="bi bi-controller" />
              </div>
              <h4 className="title">
                <a href>Prototyping &</a>
                <br />
                <a href>Game Jam Projects</a>
              </h4>
              <p className="description">
                Rapid game prototypes or MVPs for testing ideas, whether you have a rough concept or just a theme.
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
                From implementing game mechanics to creating intricate gameplay
                features, my expertise in C# coding ensures a seamless
                integration of functionality and interactivity.
              </p>
            </div>
            <div
              className="col-lg-4 col-md-6 icon-box"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div className="icon">
                <i className="bi bi-file-earmark-code" />
              </div>
              <h4 className="title">
                <a href>Debugging & Game Optimization</a>
              </h4>
              <p className="description">
                Improve performance for mobile devices, resolve gameplay bugs, and ensure smooth user experience.
              </p>
            </div>
            <div
              className="col-lg-4 col-md-6 icon-box"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div className="icon">
                <i className="bi bi-person-arms-up" />
              </div>
              <h4 className="title">
                <a href>Game Dev Mentorship</a>
              </h4>
              <p className="description">
                Teach Unity basics, scripting, game mechanics, and project structuring for students or indie devs.
              </p>
            </div>
            <div
              className="col-lg-4 col-md-6 icon-box"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="icon">
                <i className="bi bi-android" />
              </div>
              <h4 className="title">
                <a href>Android App Development</a>
              </h4>
              <p className="description">
                Build mobile apps using Android Studio, including UI/UX, API integration, and ML features.
              </p>
            </div>
            {/* <div
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
                narratives, my expertise extends to a wide spectrum of digital
                artistry.
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
                My expertise focuses on creating visually striking and
                marketable covers that resonate with your target audience.
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
                I offer a range of design services aimed at crafting visually
                compelling and impactful posters.
              </p>
            </div> */}
          </div>
        </div>
      </section>
      {/* End Services Section */}
    </div>
  );
};

export default Services;
