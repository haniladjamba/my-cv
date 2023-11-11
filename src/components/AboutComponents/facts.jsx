import '../../assets/css/style.css';

/* eslint-disable react/no-unescaped-entities */
const Facts = () => {
  return (
    <div>
      {/* ======= Facts Section ======= */}
      <section id="facts" className="facts">
        <div className="container">
          <div className="section-title">
            <h2>Facts</h2>
            <p>
            In addition to being fluent in Indonesian and English, 
            I'm currently immersing myself in learning Japanese. I take pride in my diverse 
            portfolio of completed game projects, encompassing both 2D 
            and 3D creations, alongside the successful development of 
            an e-commerce website. With over five years of experience 
            as an illustrator, I've cultivated a keen eye for visual 
            storytelling and design. My knack for problem-solving and 
            creativity has not only led me to win several competitions, 
            including coding challenges and mascot creation contests hosted 
            by my campus, but has also enriched my approach to both technical 
            and artistic endeavors. 
            </p>
          </div>
          <div className="row no-gutters">
            <div
              className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
              data-aos="fade-up"
            >
              <div className="count-box">
                <i className="bi bi-emoji-smile" />
                <span
                  data-purecounter-start={0}
                  data-purecounter-end={232}
                  data-purecounter-duration={1}
                  className="purecounter"
                />
                <p>
                  <strong>Happy Clients</strong> 5 years experience as Illustrator
                </p>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div className="count-box">
                <i className="bi bi-journal-richtext" />
                <span
                  data-purecounter-start={0}
                  data-purecounter-end={521}
                  data-purecounter-duration={1}
                  className="purecounter"
                />
                <p>
                  <strong>Projects</strong> 2D and 3D games
                </p>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="count-box">
                <i className="bi bi-headset" />
                <span
                  data-purecounter-start={0}
                  data-purecounter-end={1453}
                  data-purecounter-duration={1}
                  className="purecounter"
                />
                <p>
                  <strong>Support</strong> Open source contribution
                </p>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <div className="count-box">
                <i className="bi bi-people" />
                <span
                  data-purecounter-start={0}
                  data-purecounter-end={32}
                  data-purecounter-duration={1}
                  className="purecounter"
                />
                <p>
                  <strong>Team Workers</strong> Open to collaboration
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Facts Section */}
    </div>
  );
};

export default Facts;
