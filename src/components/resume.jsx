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
            I am proficient in game development and web design, 
            driven by a fervent passion for merging creativity and 
            technology. With a background in illustration and several 
            completed game projects, I bring a unique blend of artistic 
            vision and technical expertise. Seeking to leverage my diverse 
            skill set to create innovative, immersive gaming experiences 
            while continuing to excel in web development and illustration.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-6" data-aos="fade-up">
              <h3 className="resume-title">Education</h3>
              <div className="resume-item">
                <h4>Schools of Fine Arts</h4>
                <h5>2018 - 2020</h5>
                <p>
                Armed with over two years of dedicated study in 
                Fine Arts, I transitioned seamlessly into the 
                realm of freelance artistry. This journey equipped 
                me with a strong foundation in visual storytelling, 
                illustration, and creative problem-solving. As a 
                freelance artist, I've had the opportunity to 
                apply my skills across diverse projects, merging 
                my passion for artistic expression with real-world 
                applications in various mediums and platforms.
                </p>
              </div>
              <div className="resume-item">
                <h4>Bachelor of Computer Science</h4>
                <h5>2021 - present</h5>
                <p>
                  <em>University of Klabat, Airmandidi, Manado</em>
                </p>
                <p>
                Throughout my pursuit of a Bachelor's 
                in Computer Science, I've been captivated by the 
                world of coding from the very start. It's where 
                I discovered my true passion. A fusion of 
                storytelling and technology. I found my niche 
                in game development, utilizing it as a canvas 
                to not only enhance my coding skills but also 
                to amplify the power of storytelling. This journey 
                has not only nurtured my coding expertise but also 
                sharpened my problem-solving skills, allowing me 
                to weave intricate narratives and immersive 
                experiences within the realm of game development.
                </p>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
              <h3 className="resume-title">Working Experience</h3>
              <div className="resume-item">
                <h4>Freelance Illustrator</h4>
                <h5>2020 - Present</h5>
                <ul>
                  <li>
                    With over 15,000 hours of experience in this field
                  </li>
                  <li>
                    Working on books cover, posters, digital illustration and comic books.{" "}
                  </li>
                  <li>
                    mastering the art of turning concepts into captivating visual 
                    narratives, painting stories that resonate with depth and 
                    imagination.
                  </li>
                </ul>
              </div>
              <div className="resume-item">
                <h4>Game and Web developer</h4>
                <h5>2022 - present</h5>
                <p>
                  <em>Fullstack indie developer, Manado</em>
                </p>
                <ul>
                  <li>
                    Developed various 2D and 3D games (platformer,
                    racing, shooter).
                  </li>
                  <li>
                    Developed small e-commerce website
                  </li>
                  <li>
                    Joining the GDSC and be part of the IoT core team
                  </li>
                  <li>
                    Working in collaboration in multiple teams at a time
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
