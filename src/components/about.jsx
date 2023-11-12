const About = () => {
  return (
    <div>
      {/* ======= About Section ======= */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-title">
            <h2>About</h2>
            <p>
            Dedicated computer science student majoring in informatics, 
            I am deeply passionate about the convergence of game and web 
            development. Alongside my coding expertise and problem-solving 
            focus, I harbor a profound interest in illustration, 
            viewing it as a creative medium that complements my technical 
            skills.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-4" data-aos="fade-right">
              <img src="src/assets/img/portfolio/coolit.jpg" className="img-fluid" alt />
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
              <h3>Game Developer &amp; Web Developer</h3>
              <p className="fst-italic">
              Exploring the dynamic realms of coding, I am driven by an insatiable 
              curiosity for crafting immersive gaming experiences while 
              simultaneously delving into the intricacies of 
              web design and development.
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Birthday:</strong> <span>14 June 2003</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Website:</strong> <span>www.example.com</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Phone:</strong> <span>+62 857 5777 400</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>City:</strong> <span>Manado, Indonesia</span>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Age:</strong> <span>20</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Degree:</strong> <span>Student</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Email:</strong>{" "}
                      <span>hanz@gmail.com</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Freelance:</strong> <span>Available</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p>
              With a keen eye for innovation and a dedication to mastering various 
              programming languages and tools, I am committed to honing my 
              skills to create captivating, interactive worlds in gaming 
              while also architecting user-friendly, efficient web solutions.
              My journey in computer science is not just about mastering technology 
              but also about being a dedicated team player and a tenacious 
              problem solver, driven by a commitment to learning and creating 
              impactful, forward-thinking projects.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* End About Section */}
    </div>
  );
};

export default About;
