import { useState } from "react";
import Modal from "react-modal";
import "../../assets/css/style.css";

const Skills = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("");
  const [skillTitles, setSkillTitles] = useState("");

  const skillDescriptions = {
    unity: [
      'Unity game development',
      'Mobile game development',
      'Game optimization',
      'Game design',
      'Character skill system design',
      'Developing shooter game',
      'Making interactive storytelling',
      'Quest and Puzzle Design in Video Games',
      'Level design',
      '2D game design',
      'develop interactive UI',
    ],
    csharp: [
      'AI scripting & Behaviour design',
      'Unity scripting with C#',
      'Game programming',
      'Gameplay programming',
      'Object Oriented Programming',
      'Unity coroutines',
      'Computational thinking',
      'Algorithing design'
    ],
    photon: [
      'Networking & Photon integration',
      'Multiplayer game development',
      'Remote Procedural Call (RPC)',
      'Matchmaking',
    ],
    git: [
      'Version control with Git & GitHub',
      'Cross-team collaboration',
      'Agile development',
      'Software documentation',
    ],
    kotlin: [
      'Applied machine learning with Kotlin',
      'Mobile application development',
      'Android development',
      'SOLID design principles',
      'Automated software testing',
      'Software testing',
      'MySQL Database',
      'Firebase',
      'Model-View-View Model Architecture',
      'Android studio',
      'Object Oriented Programming',
      'Kotlin Coroutines',
    ],
    react: [
      'Web development with React JS',
      'Cross-platfrom mobile development with React Native',
      'React Animations',
    ],
    photoshop: [
      'Adobe Certified Professional',
      'Adobe Photoshop for asset design',
      'Adobe Creative Cloud',
      'Graphic design',
      'Photo editing',
    ],
    blender: [
      'Game assets creation',
      '3D Modeling',
      'UV Unwrapping and Texturing',
      'Baking textures',
      'Rigging and Animation',
    ],
    figma: [
      'UI/UX Design for Game Interfaces',
      'Collaboration',
      'Responsive Layout Design',
    ]
  };

  const openModal = (category) => {
    setActiveCategory(category);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <section id="skills" className="skills section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Skills</h2>
          <p>
            I have acquired and practiced a wide range of technical and creative skills during my experience working on game and mobile application projects.
          </p>
        </div>

        <div className="row justify-content-center gx-1 gy-3" data-aos="fade-up">
          {/* Unity Skills Card */}
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div 
              className="card skill-card shadow-lg hover-shadow" 
              onClick={() => {
                openModal('unity')
                setSkillTitles('Unity')
              }}
              role="button"
              tabIndex={0}
              style={{ padding: "0.1px" }}
            >
              <div className="card-body text-center">
                <div className="d-flex flex-wrap justify-content-center gap-3">
                  <img src="/skills/unity.png" alt="Unity" width="200" style={{ borderRadius: "10px" }} />
                </div>
                <h3 className="card-title mb-1">Unity</h3>
              </div>
            </div>
          </div>

          {/* C# Skills Card */}
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div 
              className="card skill-card shadow-lg hover-shadow" 
              onClick={() => {
                openModal('csharp')
                setSkillTitles('C#')
              }}
              role="button"
              tabIndex={0}
              style={{ padding: "0.1px" }}
            >
              <div className="card-body text-center">
                <div className="d-flex flex-wrap justify-content-center gap-3">
                  <img src="/skills/csharp.png" alt="C#" width="200" style={{ borderRadius: "10px" }} />
                </div>
                <h3 className="card-title mb-1">C#</h3>
              </div>
            </div>
          </div>

          {/* Photon PUN Skills Card */}
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div 
              className="card skill-card shadow-lg hover-shadow" 
              onClick={() => {
                openModal('photon')
                setSkillTitles('Photon PUN')
              }}
              role="button"
              tabIndex={0}
              style={{ padding: "0.1px" }}
            >
              <div className="card-body text-center">
                <div className="d-flex flex-wrap justify-content-center gap-3">
                  <img src="/skills/photon_pun.png" alt="PUN" width="200" style={{ borderRadius: "10px" }} />
                </div>
                <h3 className="card-title mb-1">PUN</h3>
              </div>
            </div>
          </div>

          {/* Photon Fusion Skills Card */}
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div 
              className="card skill-card shadow-lg hover-shadow" 
              onClick={() => {
                openModal('photon')
                setSkillTitles('Photon Fusion')
              }}
              role="button"
              tabIndex={0}
              style={{ padding: "0.1px" }}
            >
              <div className="card-body text-center">
                <div className="d-flex flex-wrap justify-content-center gap-3">
                  <img src="/skills/photon_fusion.png" alt="Fusion" width="200" style={{ borderRadius: "10px" }} />
                </div>
                <h3 className="card-title mb-1">Fusion</h3>
              </div>
            </div>
          </div>
          
          {/* Git & Github Skills Card */}
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div 
              className="card skill-card shadow-lg hover-shadow" 
              onClick={() => {
                openModal('git')
                setSkillTitles('Git & Github')
              }}
              role="button"
              tabIndex={0}
              style={{ padding: "0.1px" }}
            >
              <div className="card-body text-center">
                <div className="d-flex flex-wrap justify-content-center gap-3">
                  <img src="/skills/git.png" alt="Git" width="200" style={{ borderRadius: "10px" }} />
                </div>
                <h3 className="card-title mb-1">Git</h3>
              </div>
            </div>
          </div>

          {/* Kotlin Skills Card */}
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div 
              className="card skill-card shadow-lg hover-shadow" 
              onClick={() => {
                openModal('kotlin')
                setSkillTitles('Kotlin')
              }}
              role="button"
              tabIndex={0}
              style={{ padding: "0.1px" }}
            >
              <div className="card-body text-center">
                <div className="d-flex flex-wrap justify-content-center gap-3">
                  <img src="/skills/kotlin.png" alt="Kotlin" width="200" style={{ borderRadius: "10px" }} />
                </div>
                <h3 className="card-title mb-1">Kotlin</h3>
              </div>
            </div>
          </div>

          {/* React Skills Card */}
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div 
              className="card skill-card shadow-lg hover-shadow" 
              onClick={() => {
                openModal('react')
                setSkillTitles('React JS/Native')
              }}
              role="button"
              tabIndex={0}
              style={{ padding: "0.1px" }}
            >
              <div className="card-body text-center">
                <div className="d-flex flex-wrap justify-content-center gap-3">
                  <img src="/skills/react.png" alt="React" width="200" style={{ borderRadius: "10px" }} />
                </div>
                <h3 className="card-title mb-1">React</h3>
              </div>
            </div>
          </div>

          {/* Photoshop Skills Card */}
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div 
              className="card skill-card shadow-lg hover-shadow" 
              onClick={() => {
                openModal('photoshop')
                setSkillTitles('Adobe Photoshop')
              }}
              role="button"
              tabIndex={0}
              style={{ padding: "0.1px" }}
            >
              <div className="card-body text-center">
                <div className="d-flex flex-wrap justify-content-center gap-3">
                  <img src="/skills/photoshop.png" alt="Photoshop" width="200" style={{ borderRadius: "10px" }} />
                </div>
                <h3 className="card-title mb-1">Photoshop</h3>
              </div>
            </div>
          </div>

          {/* Blender 3D Skills Card */}
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div 
              className="card skill-card shadow-lg hover-shadow" 
              onClick={() => {
                openModal('blender')
                setSkillTitles('Blender 3D')
              }}
              role="button"
              tabIndex={0}
              style={{ padding: "0.1px" }}
            >
              <div className="card-body text-center">
                <div className="d-flex flex-wrap justify-content-center gap-3">
                  <img src="/skills/blender.png" alt="Blender" width="200" style={{ borderRadius: "10px" }} />
                </div>
                <h3 className="card-title mb-1">Blender 3D</h3>
              </div>
            </div>
          </div>

          {/* Figma Skills Card */}
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div 
              className="card skill-card shadow-lg hover-shadow" 
              onClick={() => {
                openModal('figma')
                setSkillTitles('Figma UI/UX')
              }}
              role="button"
              tabIndex={0}
              style={{ padding: "0.1px" }}
            >
              <div className="card-body text-center">
                <div className="d-flex flex-wrap justify-content-center gap-3">
                  <img src="/skills/figma.png" alt="Figma" width="200" style={{ borderRadius: "10px" }} />
                </div>
                <h3 className="card-title mb-1">Figma</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Modal */}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Skill Details"
          className="modal-content"
          overlayClassName="modal-overlay"
          closeTimeoutMS={200}
        >
          <div className="modal-header">
            <h2 className="modal-title">
              {skillTitles}
            </h2>
            <button 
              className="close-btn" 
              onClick={closeModal}
              aria-label="Close"
            >
              &times;
            </button>
          </div>
          
          <div className="modal-body">
            <ul className="skill-list">
              {(skillDescriptions[activeCategory] || []).map((skill, index) => (
                <li key={index} className="skill-item">{skill}</li>
              ))}
            </ul>
          </div>
        </Modal>
      </div>
    </section>
  );
};

export default Skills;