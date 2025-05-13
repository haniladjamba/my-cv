import { useState } from "react";

const Portofolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  return (
    <div>
      {/* ======= Portfolio Section ======= */}
      <section id="portfolio" className="portfolio section-bg">
        <div className="container">
          <div className="section-title">
            <h2>Portfolio</h2>
            <p>
              These diverse creations stand as a showcase of my dedication,
              blending coding finesse, visual storytelling, and a passion for
              creating immersive experiences.
            </p>
          </div>
          <div className="row" data-aos="fade-up">
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="portfolio-flters">
                <li data-filter="*" className="filter-active">
                  All
                </li>
                <li data-filter=".filter-app">Mobile Game</li>
                <li data-filter=".filter-card">PC Game</li>
                <li data-filter=".filter-web">Other</li>
              </ul>
            </div>
          </div>
          <div
            className="row portfolio-container"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div
                className="portfolio-wrap"
                onClick={() => {
                  const project = {
                    images: [
                      {
                        title: "Mobile Third-Person Military Shooter",
                        src: "/portofolio/tps_military_shooter/desert_scene.png",
                        description: (
                          <>
                            <p>
                              A mobile third-person shooter created to showcase
                              authentic Indonesian military camouflage:{" "}
                              <strong>New Malvinas</strong>,{" "}
                              <strong>Urban Digital</strong>, and{" "}
                              <strong>Desert Digital</strong>. The project was
                              commissioned for the Indonesian Armed Forces (TNI)
                              defense exhibition <em>Pameran Alutsista TNI</em>{" "}
                              in Bali (October 2024).
                            </p>
                            <p>
                              The game features three distinct combat
                              environments: Urban, Desert, and Forest—each
                              offering unique enemy behavior and tactical
                              challenges. Players face intelligent AI opponents
                              that vary by level: coordinated group attacks in
                              the urban setting, high-visibility threats in the
                              desert, and stealth ambushes in dense forests.
                            </p>

                            <p>
                              <strong>Key features include:</strong>
                            </p>
                            <ul>
                              <li>
                                Weapon loadout customization with unlockable
                                camo and gear progression.
                              </li>
                              <li>
                                Dual-weapon system (assault rifle and SMG) and
                                throwable grenades.
                              </li>
                              <li>
                                Fully localized content with Indonesian military
                                themes.
                              </li>
                              <li>
                                Optimized for low-end Android devices, ensuring
                                smooth performance without compromising visual
                                quality.
                              </li>
                            </ul>

                            <p>
                              This project reflects a strong focus on purposeful
                              game design, cultural representation, and
                              technical efficiency tailored to real-world
                              exhibition needs and hardware limitations.
                            </p>
                          </>
                        ),
                      },
                      {
                        title:
                          "Outfit Selection Screen – Featuring the New Malvinas Camo",
                        src: "/portofolio/tps_military_shooter/new_malvinas_camo.png",
                        description:
                          "Showcases the player customization menu with the New Malvinas camouflage. Players can unlock and switch between multiple camo patterns before entering missions.",
                      },
                      {
                        title:
                          "Outfit Selection Screen – Featuring the Urban Digital Camo",
                        src: "/portofolio/tps_military_shooter/urban_camo.png",
                        description:
                          "Displays the Urban Digital camouflage, designed for close-quarters combat in city environments. Tailored for urban-level engagements.",
                      },
                      {
                        title:
                          "Outfit Selection Screen – Featuring the Desert Digital Camo",
                        src: "/portofolio/tps_military_shooter/desert_camo.png",
                        description:
                          "Highlights the Desert Digital camouflage, optimized for arid environments. Ideal for high-visibility desert combat scenarios.",
                      },
                      {
                        title: "Urban Combat Gameplay",
                        src: "/portofolio/tps_military_shooter/urban_combat.png",
                        description:
                          "Intense close-quarters firefight in a dense cityscape. Enemies use coordinated group tactics and cover-based movement to challenge the player in tight, tactical spaces.",
                      },
                      {
                        title: "Desert Combat Gameplay",
                        src: "/portofolio/tps_military_shooter/desert_combat.png",
                        description:
                          "Tactical battle in an open, sun-scorched desert landscape. Enemies have enhanced spotting abilities, demanding strategic positioning and precision from the player.",
                      },
                      {
                        title: "Forest Combat Gameplay",
                        src: "/portofolio/tps_military_shooter/forest_combat.png",
                        description:
                          "Stealth-focused encounter in dense jungle terrain. Enemies blend into foliage and launch ambush attacks, creating unpredictable and immersive combat scenarios.",
                      },
                      {
                        title: "Tactical Gadgets Use",
                        src: "/portofolio/tps_military_shooter/tactical_granade.png",
                        description:
                          "Player strategically deploying a grenade to flush out and eliminate a hidden enemy in a dense combat environment, demonstrating tactical gameplay and environmental awareness.",
                      },
                    ],
                  };
                  setSelectedProject(project);
                  setPreviewImage(project.images[0]);
                }}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={"/portofolio/tps_military_shooter/desert_scene.png"}
                  className="img-fluid"
                  alt
                />
                <div className="portofolio-hover-title">
                  Click to see project details
                </div>
                <div className="portfolio-links">
                  <a
                    href={"/portofolio/Game-1.png"}
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="App 1"
                  >
                    <i className="bx bx-plus" />
                  </a>
                  <a href="portfolio-details.html" title="More Details">
                    <i className="bx bx-link" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div
                className="portfolio-wrap"
                onClick={() => {
                  const project = {
                    images: [
                      {
                        title: "Mobile Point-and-Click Quiz Adventure Game",
                        src: "/portofolio/quiz_adventure/quiz_adventure.png",
                        description: (
                          <>
                            <p>
                              <strong>Quiz Adventure</strong> is a 3D
                              point-and-click game developed as part of the
                              <em>"Develop 3D Mobile Game in Unity"</em> course
                              during the Unity Professional Training program I attended.
                              The game allows players to explore an immersive
                              game world, interact with diverse NPCs, and solve
                              context-based quizzes to earn points and unlock
                              new areas. In total, players can unlock 5
                              different areas:
                              <strong>
                                Coastal Town, Old Town, Downtown, Airport,
                              </strong>{" "}
                              and <strong>Military Base</strong>.
                            </p>

                            <p>
                              Players roam freely through detailed environments,
                              encountering two types of NPCs:
                              <strong>quiz givers</strong> and{" "}
                              <strong>information holders</strong>. Quizzes are
                              designed to be lore-driven and location-based —
                              for instance, players might be asked,
                              <em>"Who is the strongest man in town?"</em>
                              and must deduce the answer by visiting relevant
                              places (e.g., the gym) or speaking to other NPCs.
                            </p>

                            <p>
                              To enhance gameplay depth and replayability, I
                              introduced several original mechanics:
                            </p>
                            <ul>
                              <li>
                                <strong>Quiz Conditions</strong> – Some quizzes
                                are locked until prerequisite challenges are
                                completed.
                              </li>
                              <li>
                                <strong>Timed Challenges</strong> – Certain
                                quizzes must be completed within a time limit.
                              </li>
                              <li>
                                <strong>Dual-role NPCs</strong> – Some
                                info-giving NPCs will only help after players
                                answer their quiz.
                              </li>
                              <li>
                                <strong>Hostile NPCs</strong> – Guarded areas
                                require trust-building through successful quiz
                                completion. Some may even chase the player,
                                deducting points if caught.
                              </li>
                              <li>
                                <strong>Hazards & Penalties</strong> – Getting
                                hit by vehicles results in point loss,
                                simulating hospital bills.
                              </li>
                              <li>
                                <strong>Hidden Quizzes</strong> – Optional side
                                content that rewards exploration and critical
                                thinking.
                              </li>
                              <li>
                                <strong>Cutscenes & Lore</strong> – Rich
                                storytelling through worldbuilding and in-game
                                dialogue events.
                              </li>
                            </ul>

                            <p>
                              Built and optimized for mobile platforms,{" "}
                              <strong>Quiz Adventure</strong> offers a fun mix
                              of puzzle-solving, narrative interaction, and
                              exploration wrapped in a custom-designed immersive
                              world.
                            </p>
                          </>
                        ),
                      },
                      {
                        title:
                          "Interacting with NPC",
                        src: "/portofolio/quiz_adventure/npc_interaction.png",
                        description:
                          "Players can approach and interact with a variety of NPCs some provide helpful information, while others challenge the player with quizzes that test observation and exploration skills.",
                      },
                      {
                        title:
                          "NPC gives information",
                        src: "/portofolio/quiz_adventure/npc_information.png",
                        description:
                          "Some NPCs offer valuable clues and background stories that help players solve nearby quizzes and progress through the adventure.",
                      },
                      {
                        title:
                          "Environment Landmarks",
                        src: "/portofolio/quiz_adventure/landmarks.png",
                        description:
                          "Key landmarks, provide environmental hints that players can use to answer NPC quizzes and uncover hidden lore.",
                      },
                      {
                        title: "Exploring the city",
                        src: "/portofolio/quiz_adventure/city_exploration.png",
                        description:
                          "Players can freely roam around the city, interact with NPCs, discover clues, and unlock new areas as they progress through the quiz-based adventure.",
                      },
                      {
                        title: "Unlock New Area - Old town area",
                        src: "/portofolio/quiz_adventure/new_area.png",
                        description:
                          "After collecting enough points, players can unlock new zones like the Old Town, offering fresh challenges, unique NPCs, and hidden quizzes to uncover.",
                      },
                      {
                        title: "Airport area",
                        src: "/portofolio/quiz_adventure/airport.png",
                        description:
                          "The Airport area introduces new lore, quizzes, and NPCs including hostile ones challenging players to adapt, explore, and earn trust to progress further in their journey.",
                      },
                      {
                        title: "Military base",
                        src: "/portofolio/quiz_adventure/military.png",
                        description:
                          "Enter the highly guarded Military area, where players must navigate strict NPCs, complete prerequisite quizzes, and avoid patrols to uncover high-stakes challenges and hidden rewards.",
                      },
                    ],
                  };
                  setSelectedProject(project);
                  setPreviewImage(project.images[0]);
                }}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={"/portofolio/quiz_adventure/quiz_adventure.png"}
                  className="img-fluid"
                  alt
                />
                <div className="portofolio-hover-title">
                  Click to see project details
                </div>
                <div className="portfolio-links">
                  <a
                    href={"/portofolio/Game-1.png"}
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="App 1"
                  >
                    <i className="bx bx-plus" />
                  </a>
                  <a href="portfolio-details.html" title="More Details">
                    <i className="bx bx-link" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <div
                className="portfolio-wrap"
                onClick={() => {
                  const project = {
                    title: "Game Project",
                    images: [
                      {
                        src: "/portofolio/Web-1.jpg",
                        description:
                          "Main gameplay screenshot showing UI and controls",
                      },
                      {
                        src: "/portofolio/Art-1.jpg",
                        description:
                          "Level design showcasing terrain and props",
                      },
                      {
                        src: "/portofolio/Art-2.jpg",
                        description: "Multiplayer match with active players",
                      },
                    ],
                  };
                  setSelectedProject(project);
                  setPreviewImage(project.images[0]);
                }}
                style={{ cursor: "pointer" }}
              >
                <img src={"/portofolio/Web-1.jpg"} className="img-fluid" alt />
                <div className="portofolio-hover-title">
                  Click to see project details
                </div>
                <div className="portfolio-links">
                  <a
                    href={"/portofolio/Web-1.jpg"}
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="Web 3"
                  >
                    <i className="bx bx-plus" />
                  </a>
                  <a href="portfolio-details.html" title="More Details">
                    <i className="bx bx-link" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
              <div
                className="portfolio-wrap"
                onClick={() => {
                  const project = {
                    title: "Game Project",
                    images: [
                      {
                        src: "/portofolio/Art-1.jpg",
                        description:
                          "Main gameplay screenshot showing UI and controls",
                      },
                      {
                        src: "/portofolio/Art-2.jpg",
                        description:
                          "Level design showcasing terrain and props",
                      },
                      {
                        src: "/portofolio/Art-3.jpg",
                        description: "Multiplayer match with active players",
                      },
                    ],
                  };
                  setSelectedProject(project);
                  setPreviewImage(project.images[0]);
                }}
                style={{ cursor: "pointer" }}
              >
                <img src={"/portofolio/Art-1.jpg"} className="img-fluid" alt />
                <div className="portofolio-hover-title">
                  Click to see project details
                </div>
                <div className="portfolio-links">
                  <a
                    href={"/portofolio/Art-1.jpg"}
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="Card 2"
                  >
                    <i className="bx bx-plus" />
                  </a>
                  <a href="portfolio-details.html" title="More Details">
                    <i className="bx bx-link" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
              <div
                className="portfolio-wrap"
                onClick={() => {
                  const project = {
                    title: "Game Project",
                    images: [
                      {
                        src: "/portofolio/Art-2.jpg",
                        description:
                          "Main gameplay screenshot showing UI and controls",
                      },
                      {
                        src: "/portofolio/Art-1.jpg",
                        description:
                          "Level design showcasing terrain and props",
                      },
                      {
                        src: "/portofolio/Art-3.jpg",
                        description: "Multiplayer match with active players",
                      },
                    ],
                  };
                  setSelectedProject(project);
                  setPreviewImage(project.images[0]);
                }}
                style={{ cursor: "pointer" }}
              >
                <img src={"/portofolio/Art-2.jpg"} className="img-fluid" alt />
                <div className="portofolio-hover-title">
                  Click to see project details
                </div>
                <div className="portfolio-links">
                  <a
                    href={"/portofolio/Art-2.jpg"}
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="Card 1"
                  >
                    <i className="bx bx-plus" />
                  </a>
                  <a href="portfolio-details.html" title="More Details">
                    <i className="bx bx-link" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
              <div
                className="portfolio-wrap"
                onClick={() => {
                  const project = {
                    title: "Game Project",
                    images: [
                      {
                        src: "/portofolio/Art-3.jpg",
                        description:
                          "Main gameplay screenshot showing UI and controls",
                      },
                      {
                        src: "/portofolio/Art-2.jpg",
                        description:
                          "Level design showcasing terrain and props",
                      },
                      {
                        src: "/portofolio/Art-1.jpg",
                        description: "Multiplayer match with active players",
                      },
                    ],
                  };
                  setSelectedProject(project);
                  setPreviewImage(project.images[0]);
                }}
                style={{ cursor: "pointer" }}
              >
                <img src={"/portofolio/Art-3.jpg"} className="img-fluid" alt />
                <div className="portofolio-hover-title">
                  Click to see project details
                </div>
                <div className="portfolio-links">
                  <a
                    href={"/portofolio/Art-3.jpg"}
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="Card 3"
                  >
                    <i className="bx bx-plus" />
                  </a>
                  <a href="portfolio-details.html" title="More Details">
                    <i className="bx bx-link" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Portfolio Section */}
      {selectedProject && (
        <div className="popup-overlay" onClick={() => setSelectedProject(null)}>
          <div
            className="popup-card"
            onClick={(e) => e.stopPropagation()} // <-- prevent closing when clicking inside card
          >
            {/* Top Section: Preview + Description */}
            <div className="popup-top">
              {/* Left: Image Preview */}
              <div className="popup-image-preview">
                <img
                  src={previewImage.src}
                  alt="Preview"
                  className="popup-main-image"
                />
              </div>

              {/* Right: Description */}
              <div className="popup-description">
                <h2>{previewImage.title}</h2>
                <p>{previewImage.description}</p>
              </div>
            </div>

            {/* Bottom Section: Image List */}
            <div className="popup-image-list">
              {/* Example: Can map more images here */}
              {selectedProject.images.map((image, index) => (
                <img
                  key={index}
                  src={image.src}
                  alt={`Thumbnail ${index}`}
                  className={`popup-thumbnail ${
                    previewImage.src === image.src ? "active" : ""
                  }`}
                  onClick={() => setPreviewImage(image)} // <-- updates preview
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portofolio;
