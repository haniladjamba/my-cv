const About = () => {
  return (
    <div>
      {/* ======= About Section ======= */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-title">
            <h2>About</h2>
            {/* <p>
            Dedicated computer science student majoring in informatics, 
            I am deeply passionate about the convergence of game and web 
            development. Alongside my coding expertise and problem-solving 
            focus, I harbor a profound interest in illustration, 
            viewing it as a creative medium that complements my technical 
            skills.
            </p> */}
            <p>
              I’m a <strong>final-year Computer Science student</strong> with a
              growing specialization in game development, backed by hands-on
              experience in both <strong>mobile</strong> and{" "}
              <strong>multiplayer games</strong>. My journey includes a
              significant role at{" "}
              <strong>BigDade Game Development Studio</strong>, where I
              contributed as a <strong>full-stack game developer </strong>
              for <em>Wardeka</em> — a competitive mobile 5v5 third-person
              shooter. Working within a professional team environment sharpened
              my skills in both design thinking and technical implementation.
            </p>
            <br />
            <p>
              During my time at BigDade Studio, I've worked on key gameplay
              features such as:
              <ul>
                <li>
                  Designing and implementing a <strong>Slide Mechanic</strong>{" "}
                  to enhance movement dynamics.
                </li>
                <li>
                  Developing <strong>Active Ragdoll Physics</strong> for
                  immersive death animations.
                </li>
                <li>
                  Leading the <strong>redesign of the skill system</strong> by
                  introducing <strong>Area of Effect (AoE) mechanics</strong> to
                  promote team coordination.
                </li>
                <li>
                  Handling full development pipelines, from{" "}
                  <strong>scripting</strong>,<strong> animation</strong> to{" "}
                  <strong>VFX integration</strong> and{" "}
                  <strong>multiplayer synchronization</strong>.
                </li>
              </ul>
            </p>
            <p>
              I possess solid expertise in{" "}
              <strong>Unity game development</strong> and{" "}
              <strong>networked gameplay programming</strong>, honed through the
              <strong> Unity Professional Training program</strong> and hands-on
              development using <strong>Photon Fusion 2 SDK</strong>. My
              commitment to mastering the craft is also evident in my consistent
              academic excellence across computer science courses.
            </p>
            <br />
            <p>
              In addition to my game dev background, I bring experience in{" "}
              <strong>mobile app development</strong>, making me a versatile
              developer capable of building
              <strong> player-centric</strong>,{" "}
              <strong>technically robust experiences</strong>. I am now eager to
              grow within a{" "}
              <strong>professional game development environment</strong>,
              contributing to the creation of innovative gameplay solutions and
              expanding my impact as a developer.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-4" data-aos="fade-right">
              <img src={"/portofolio/coolit.jpg"} className="img-fluid" alt style={{ borderRadius: 8 }}/>
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
              <a
                href="https://bigdade.id/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <h3>
                Game Developer &amp; Mobile Developer at{" "}
                <strong style={{ color: "red" }}>BigDade Studio</strong>
              </h3>
              </a>
              <p className="fst-italic">
                Exploring the dynamic realms of coding, I am driven by an
                insatiable curiosity for crafting immersive gaming experiences
                while simultaneously delving into the intricacies of mobile
                development.
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Flagship Project:</strong>
                      <a
                        href="https://play.google.com/store/apps/details?id=com.bigdade.wardekapvp&hl=id"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          textDecoration: "none",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "6px",
                        }}
                      >
                        <i
                          className="bi bi-google-play"
                          style={{ fontSize: "1.2rem", color: "red" }}
                        ></i>
                        <span style={{ color: "red" }}>
                          Wardeka: PVP Shooter
                        </span>
                      </a>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Focus:</strong>
                      <span>Gameplay & Multiplayer Systems</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Tools:</strong>{" "}
                      <span>Unity, C#, Photon PUN 2 & Fusion</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Social:</strong>{" "}
                      <a
                        href="https://www.linkedin.com/in/hani-ladjamba-42406730a/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          textDecoration: "none",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "6px",
                        }}
                      >
                        <i
                          className="bi bi-linkedin"
                          style={{ fontSize: "1.2rem", color: "#fef7ce" }}
                        ></i>
                        <span style={{ color: "#fef7ce" }}>
                          Connect With Me
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Email:</strong>{" "}
                      <span>contact.haniladjamba@gmail.com</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Degree:</strong> <span>Informatics Student</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>City:</strong> <span>Manado, Indonesia</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Freelance:</strong> <span>Available</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p>
                My passion for game development stems from a deep love of games
                and storytelling that began in middle school. I was captivated
                by the worlds, characters, and art of classics like{" "}
                <strong>
                  <em>Final Fantasy</em>
                </strong>{" "}
                and the{" "}
                <strong>
                  <em>.hack</em>
                </strong>{" "}
                series, and later drawn to the adrenaline of modern competitive
                games such as{" "}
                <strong>
                  <em>Apex Legends</em>
                </strong>
              </p>

              {/*Images of each game mention aboves goes Here*/}
              <div style={{ display: "flex", gap: "16px", marginTop: "16px" }}>
                <img
                  src="/about/final_fantasy.png"
                  alt="Final Fantasy"
                  style={{
                    width: "100px",
                    height: "120px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
                <img
                  src="/about/hack_gu.png"
                  alt=".hack"
                  style={{
                    width: "100px",
                    height: "120px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
                <img
                  src="/about/apex_legends.png"
                  alt="Apex Legends"
                  style={{
                    width: "100px",
                    height: "120px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
              </div>
              <br />
              <p>
                This lifelong interest inspired me not only to pursue technical
                skills like programming and game systems development, but also
                to nurture my creative side through illustration and design.
              </p>
              <p>
                This dual-track dedication led me to earn the{" "}
                <img
                  src="/about/adobe.png"
                  alt=".hack"
                  style={{
                    width: "30px",
                    height: "30px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
                <a
                  href="https://www.credly.com/badges/b31d1ac0-7cc1-4e45-bc28-25e8a271d7e2"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <strong style={{ color: "#fef7ce" }}>
                    Adobe Certified Professional in Visual Design
                  </strong>
                </a>
                , a recognition of my proficiency in industry-standard design
                tools and visual communication.
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
