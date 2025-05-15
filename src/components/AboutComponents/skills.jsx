import { useState } from "react";
import Modal from "react-modal";
import "../../assets/css/style.css";

const Skills = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("");

  const skillDescriptions = {
    technical: [
      'Unity scripting with C#',
      'Multiplayer game development (Photon PUN, Fusion 1 & 2)',
      'Game optimization',
      'Mobile game development',
      'Version control with Git & GitHub',
      'UI integration and state management'
    ],
    creative: [
      'UI/UX Design (Figma)',
      '3D modeling and animation (Blender)',
      'Game concept and system design',
      'Visual storytelling and game flow',
      'Adobe Photoshop for asset design'
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

        <div className="row justify-content-center gap-4" data-aos="fade-up">
          {/* Technical Skills Card */}
          <div className="col-md-5">
            <div 
              className="card skill-card shadow-lg hover-shadow" 
              onClick={() => openModal('technical')}
              role="button"
              tabIndex={0}
            >
              <div className="card-body text-center py-4">
                <h3 className="card-title mb-3">Technical Skills</h3>
                <div className="d-flex flex-wrap justify-content-center gap-3">
                  <img src="/portofolio/dingin.jpg" alt="Unity" width="40" />
                  {/* <img src="/assets/icons/csharp.svg" alt="C#" width="40" />
                  <img src="/assets/icons/photon.svg" alt="Photon" width="40" />
                  <img src="/assets/icons/js.svg" alt="JavaScript" width="40" />
                  <img src="/assets/icons/github.svg" alt="GitHub" width="40" /> */}
                </div>
              </div>
            </div>
          </div>

          {/* Creative Skills Card */}
          <div className="col-md-5">
            <div 
              className="card skill-card shadow-lg hover-shadow" 
              onClick={() => openModal('creative')}
              role="button"
              tabIndex={0}
            >
              <div className="card-body text-center py-4">
                <h3 className="card-title mb-3">Creative Skills</h3>
                <div className="d-flex flex-wrap justify-content-center gap-3">
                  <img src="/portofolio/dingin.jpg" alt="Photoshop" width="40" />
                  {/* <img src="/assets/icons/figma.svg" alt="Figma" width="40" />
                  <img src="/assets/icons/blender.svg" alt="Blender" width="40" />
                  <img src="/assets/icons/design.svg" alt="Design" width="40" /> */}
                </div>
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
              {activeCategory === 'technical' ? 'Technical Skills' : 'Creative Skills'}
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