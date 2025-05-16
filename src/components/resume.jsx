/* eslint-disable react/no-unescaped-entities */
const Resume = () => {
  return (
    <div>
      {/* ======= Resume Section ======= */}
      <section id="resume" className="resume">
        <div className="container">
          <div className="section-title">
            <h2>Resume</h2>
            <p>
              With over 1,720+ hours of hands-on programming and game development
              experience, I’ve grown from a self-taught coding enthusiast to a
              fullstack developer trusted with high-impact responsibilities in a
              professional game studio. My journey includes formal education in
              Informatics, then specialized training in Unity and Android
              development, and finally real-world experience delivering freelance
              projects and contributing to commercial game titles.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-6" data-aos="fade-up">
              <h3 className="resume-title">Education</h3>
              <div className="resume-item">
                <h4>Bachelor of Computer Science</h4>
                <h5>2021 - 2025</h5>
                <p>
                  <a
                    href="https://www.unklab.ac.id/fakultas-ilmu-komputer/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      color: "#f8f9fa",
                    }}
                  >
                    <em>University of Klabat, Airmandidi, Manado</em>
                  </a>
                </p>
                <p>
                  As an Informatics student at Universitas Klabat, I’ve built a
                  strong foundation in programming and software development,
                  earning the nickname “Coding Wizard” from my peers. My passion
                  for game development emerged during a computer graphics class
                  in 2023, where I created my first 3D action game, Sphere Sumō.
                  Since then, I’ve pursued game-related projects that
                  strengthened both my coding and game design capabilities.
                </p>
              </div>
              <div className="resume-item">
                <h4>Bangkit Academy – Android Development Track</h4>
                <h5>February 2024 - June 2024</h5>
                <p>
                  <a
                    href="https://grow.google/intl/id_id/bangkit/?tab=mobile-development"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      color: "#f8f9fa",
                    }}
                  >
                    <em>Bangkit led by Google, Goto, and Traveloka</em>
                  </a>
                </p>
                <p>
                  To broaden my software engineering skills, I joined the
                  Bangkit Academy's Android Development program, where I worked
                  with a team to create Huetiful—a mobile app that uses machine
                  learning to recommend clothing colors based on skin tone. This
                  experience enhanced my understanding of mobile development,
                  UI/UX, and real-world team collaboration in a professional
                  tech setting.
                </p>
              </div>
              <div className="resume-item">
                <h4>
                  Unity Professional Training – Sponsored by BigDade Studio
                </h4>
                <h5>September 2024 - October 2024</h5>
                <p>
                  <a
                    href="https://unity.com/learn/professionals"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      color: "#f8f9fa",
                    }}
                  >
                    <em>Unity Professional Training</em>
                  </a>
                </p>
                <p>
                  I was selected by BigDade Studio to join their Unity
                  Professional Training program, preparing me to contribute to
                  real-world game development. During this training, I developed
                  Quiz Adventure Game, a 3D point-and-click title with
                  interactive NPCs and original mechanics. The program elevated
                  my Unity expertise and gave me practical experience in
                  creating polished, production-ready games.
                </p>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
              <h3 className="resume-title">Working Experience</h3>
              <div className="resume-item">
                <h4>Freelance Programmer</h4>
                <h5>2021 - Present</h5>
                <ul>
                  <li>
                    Built 20+ mini projects for classmates and small business
                    involving mobile apps, games, and web applications.
                  </li>
                  <li>With over 420+ hours of experiences in this field</li>
                  <li>
                    Earned a reputation as the go-to “coding wizard” among peers
                    due to reliable problem-solving and self-taught expertise.
                  </li>
                </ul>
              </div>
              <div className="resume-item">
                <h4>Game Developer – Fullstack</h4>
                <h5>2024 – Present</h5>
                <p>
                  <em>Fullstack indie developer, Manado</em>
                </p>
                <p>
                  Contributed over 1,720+ hours to two professional titles in a
                  production pipeline, collaborating in agile workflows.
                </p>
                <p>
                  <span>Mobile Third-Person Military Shooter</span>
                </p>
                <ul>
                  <li>
                    Delivered for the Pameran Alutsista TNI (2024), with 3
                    realistic combat zones and adaptive enemy AI.
                  </li>
                  <li>
                    Engineered gameplay logic and behavior systems across Urban,
                    Forest, and Desert environments.
                  </li>
                  <li>
                    Ensured visual accuracy of 3 official Indonesian camouflage
                    uniforms{" "}
                  </li>
                </ul>
                <p>
                  <span>Wardeka: PVP Shooter</span>
                </p>
                <ul>
                  <li>
                    Led the AoE skill system overhaul. Increasing player team
                    coordination and gameplay depth.
                  </li>
                  <li>
                    Implemented Photon multiplayer, syncing animations, skills,
                    and VFX across fast-paced 5v5 matches.
                  </li>
                  <li>
                    Implemented other mechanics such as slide movement mechanics
                    and active ragdoll for character death animation
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Resume Section */}
    </div>
  );
};

export default Resume;
