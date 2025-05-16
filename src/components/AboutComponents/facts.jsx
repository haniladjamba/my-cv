import "../../assets/css/style.css";

/* eslint-disable react/no-unescaped-entities */
const Facts = () => {
  return (
    <div>
      {/* ======= Facts Section ======= */}
      <section id="facts" className="facts">
        <div className="container">
          <div className="section-title">
            <h2>Facts</h2>
            {/* <p>
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
            </p> */}
            <p>
              With a professional level of English proficiency, I bring clear
              communication and collaborative effectiveness to every team I
              join. Over the course of my journey, I’ve contributed to a total
              of <strong>7 game development projects</strong>, including two
              major professional titles during my time at BigDade Studio.
            </p>
            <p>
              The first was a{" "}
              <strong>mobile third-person military shooter</strong> created
              specifically for the <em>Pameran Alutsista TNI 2024</em>{" "}
              (Indonesia’s military defense exhibition), showcasing official TNI
              camouflage designs. The second is <strong>Wardeka</strong>, a
              competitive <em>5v5 third-person shooter</em> and Indonesia’s
              first homegrown mobile esports shooter title.
            </p>
            <p>
              Since beginning my professional journey in{" "}
              <strong>July 2024</strong>, I’ve dedicated over{" "}
              <strong>1,720+ development hours</strong> to creating immersive
              gameplay experiences, combining both technical and creative
              disciplines. My toolset includes{" "}
              <strong>Unity, C#, Photon PUN 2 & Fusion, Git/GitHub</strong>,
              with design support from <strong>Photoshop, Figma,</strong> and{" "}
              <strong>Blender 3D</strong>.
            </p>
            <p>
              Alongside project work, I hold multiple certifications including{" "}
              <strong>Adobe Certified Professional in Visual Design</strong>,{" "}
              <strong>Bangkit Academy Mobile Development Distict Graduate</strong>, and{" "}
              <strong>Mobile App Development at Dicoding Academy</strong>. I’ve
              worked in multidisciplinary teams of up to 10 members,
              collaborating closely with designers, artists, and engineers in
              full-cycle development.
            </p>
          </div>
          <div className="row justify-content-center">
            {/* <!-- English Proficiency --> */}
            <div
              className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
              data-aos="fade-up"
            >
              <div className="count-box">
                <i className="bi bi-translate" />
                <span className="purecounter" style={{ color: "#fef7ce" }}>
                  Pro
                </span>
                <p>
                  <strong>English Level</strong> Professional working
                  proficiency
                </p>
              </div>
            </div>
            {/* <!-- Total Projects --> */}
            <div
              className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="count-box">
                <i className="bi bi-controller" />
                <span className="purecounter" style={{ color: "#fef7ce" }}>
                  7
                </span>
                <p>
                  <strong>Projects Contributed</strong> Including 2 Major
                  Industry Titles
                </p>
              </div>
            </div>
            {/* <!-- Hours of Development --> */}
            <div
              className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="count-box">
                <i className="bi bi-clock-history" />
                <span className="purecounter" style={{ color: "#fef7ce" }}>
                  1.720+
                </span>
                <p>
                  <strong>Hours of Development</strong> Since July 2024
                  (Full-time)
                </p>
              </div>
            </div>

            {/* <!-- Tools & Technologies --> */}
            <div
              className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="count-box">
                <i className="bi bi-tools" />
                <span className="purecounter" style={{ color: "#fef7ce" }}>Unity</span>
                <p>
                  <strong>Tools Used</strong> Unity, C#, Photon Fusion, Git,
                  Figma, Blender
                </p>
              </div>
            </div>

            {/* <!-- Certifications --> */}
            <div
              className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="count-box">
                <i className="bi bi-patch-check" />
                <span className="purecounter" style={{ color: "#fef7ce" }}>12+</span>
                <p>
                  <strong>Certifications</strong> Adobe Visual Design, Bangkit,
                  Dicoding
                </p>
              </div>
            </div>

            {/* <!-- Team Collaboration --> */}
            <div
              className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="count-box">
                <i className="bi bi-people" />
                <span className="purecounter" style={{ color: "#fef7ce" }}>10</span>
                <p>
                  <strong>Team Size</strong> Worked in 10-person
                  cross-functional team
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
