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
                        title: "Wardeka: PVP Shooter",
                        src: "/portofolio/wardeka/wardeka_intro.png",
                        description: (
                          <>
                            <p>
                              <strong>Wardeka: PVP Shooter</strong> is a
                              competitive online third-person mobile shooter
                              game with a unique cyber-futuristic theme infused
                              with Indonesian cultural elements. Developed by{" "}
                              <strong>BigDade Studio</strong> in Manado,
                              Indonesia, Wardeka focuses on fast-paced{" "}
                              <strong>5v5 team-based gameplay</strong> across
                              multiple thrilling game modes.
                            </p>

                            <p>
                              In Wardeka, players must work together, utilize
                              unique skills, and adapt to dynamic objectives to
                              secure victory on the battlefield. The game is
                              designed to deliver an intense esports experience
                              while celebrating national spirit and teamwork.
                            </p>

                            <>
                              <p>
                                In this project, <strong style={{ color: 'red' }}>I was tasked to led the
                                redesign of Wardeka’s skill system by
                                introducing Area of Effect (AoE) mechanics</strong>,
                                enabling skills to affect nearby teammates
                                designed to encourage team coordination and
                                support roles in gameplay.
                              </p>
                              <p>
                                <strong style={{ color: 'red' }}>I also designed and implemented a Slide Mechanic</strong> to improve in-game movement dynamics and responsiveness.
                              </p>
                              <p>
                                <strong style={{ color: 'red' }}>As well as developing Active Ragdoll Physics for death animations</strong>, replacing static clips with fluid, physics-driven feedback to increase realism and immersion.
                              </p>
                              <p>
                                As a <strong style={{ color: 'red' }}>Full-Stack Game Developer</strong>,
                                I Managed end-to-end development for these new
                                features, including gameplay scripting,
                                animation handling, VFX integration, and
                                multiplayer synchronization.
                              </p>
                            </>

                            <p>
                              <strong>Wardeka Key Features:</strong>
                            </p>
                            <ul>
                              <li>
                                <strong>5v5 Competitive Matches</strong> –
                                Tactical, team-based battles that emphasize
                                coordination and strategy.
                              </li>
                              <li>
                                <strong>Immersive Combat Arenas</strong> –
                                Realistic visuals and detailed environments
                                heighten the battlefield experience.
                              </li>
                              <li>
                                <strong>National Leaderboards</strong> – Compete
                                with players from across Indonesia for top
                                rankings and exciting rewards.
                              </li>
                              <li>
                                <strong>Skill-Based Gameplay</strong> – Choose
                                your abilities and master different playstyles
                                to dominate the arena.
                              </li>
                            </ul>

                            <p>
                              <strong>Game Modes:</strong>
                            </p>
                            <ul>
                              <li>
                                <strong>Custom Match:</strong> Create your own
                                room, invite friends, and manually assign teams
                                for private matches.
                              </li>
                              <li>
                                <strong>Deathmatch:</strong> Eliminate as many
                                enemies as possible within a time limit. Teams
                                are randomly assigned.
                              </li>
                              <li>
                                <strong>Take Over:</strong> Compete to capture
                                and hold the Take Over Zone (TOZ) a rotating
                                control point to earn points. The first team to
                                reach the target score wins.
                              </li>
                            </ul>

                            <p>
                              <strong>Unique Character Skills:</strong>
                            </p>
                            <ul>
                              <li>
                                <strong>Stealth (AOE):</strong> Turn invisible and
                                move silently, making it harder for enemies to
                                detect you. Nearby allies also got this buff
                              </li>
                              <li>
                                <strong>Technician:</strong> Scan and reveal
                                nearby enemies, showing their name tags even
                                through walls.
                              </li>
                              <li>
                                <strong>Firewall (AOE):</strong> Deploy a shield that
                                blocks incoming damage and protects your HP. Nearby allies will get damage reduction bonus
                              </li>
                              <li>
                                <strong>Healing (AOE):</strong> Restore your health and nearby allies health over
                                time, even while taking damage from enemies.
                              </li>
                              <li>
                                <strong>Athlete:</strong> Boost your movement
                                speed to dodge attacks and reposition quickly.
                              </li>
                              <li>
                                <strong>Stun:</strong> Immobilize enemies and
                                inflict continuous damage for a short duration.
                              </li>
                            </ul>

                            <p>
                              Join players across Indonesia in intense esports
                              battles, show your tactical skill, and lead your
                              team to victory!
                            </p>
                          </>
                        ),
                      },
                      {
                        title:
                          "Immersive Team-Based Combat in a Futuristic Arena",
                        src: "/portofolio/wardeka/wardeka1.png",
                        description:
                          "A glimpse into Wardeka’s fast-paced, team-based combat set in a cyber-futuristic world infused with Indonesian culture. The immersive map design and dynamic third-person combat showcase the game's cyber-futuristic world mixed with Indonesian cultural elements.",
                      },
                      {
                        title: "Precision and Skill in Every Encounter",
                        src: "/portofolio/wardeka/wardeka2.png",
                        description:
                          "Engage in intense firefights where every shot counts. In Wardeka, players rely on sharp aim, tactical positioning, teamwork and the right timing of skills to outplay their opponents. Whether flanking, defending, or launching a surprise attack, combat emphasizes both mechanical precision and team coordination to secure the win.",
                      },
                      {
                        title: "Long-Range Precision Under Pressure",
                        src: "/portofolio/wardeka/wardeka3.png",
                        description:
                          "Master the art of sniping in Wardeka by taking down enemies from a distance using high-powered precision rifles. With the sniper scope engaged, players can scout, aim, and eliminate key targets—turning the tide of battle with a single, well-placed shot. A test of patience, accuracy, and strategic decision-making.",
                      },
                      {
                        title: "Tactical Movement for Strategic Advantage",
                        src: "/portofolio/wardeka/wardeka4.png",
                        description:
                          "Use verticality to your advantage by leaping across high platforms and navigating complex terrain. In Wardeka, mastering movement opens up flanking routes, hidden vantage points, and opportunities to outsmart your opponents. Strategic positioning can mean the difference between victory and defeat in this fast-paced team shooter.",
                      },
                      {
                        title: "High Ground Advantage for Tactical Combat",
                        src: "/portofolio/wardeka/wardeka5.png",
                        description:
                          "Seizing the high ground offers a significant strategic edge. From elevated positions, players can spot and engage enemies below with greater accuracy while minimizing exposure. This height advantage allows for safer, more effective attacks, making it a key tactic in dominating the battlefield.",
                      },
                      {
                        title: "Team Up and Ready for Battle",
                        src: "/portofolio/wardeka/wardeka6.png",
                        description:
                          "The Wardeka lobby provides a seamless and interactive space for players to invite friends and form teams before heading into the action. Here, players can create parties, coordinate strategies, and prepare for intense multiplayer combat. Join forces and take on the battlefield together for a truly collaborative gaming experience.",
                      },
                      {
                        title: "Coordinated Assault with Teammates",
                        src: "/portofolio/wardeka/wardeka7.png",
                        description:
                          "In Wardeka, teamwork is key to success. This image captures a moment of strategic cooperation, where players launch an assault together, advancing through enemy lines as a unified force. The game’s team-based mechanics encourage coordination and synchronized attacks, amplifying the thrill of combat and boosting the chances of victory when playing alongside friends.",
                      },
                      {
                        title: "Character Skills at Your Fingertips",
                        src: "/portofolio/wardeka/wardeka8.png",
                        description: (
                          <>
                            <p>
                              In Wardeka, players can utilize a variety of
                              skills to gain a tactical edge:
                            </p>
                            <ul>
                              <li>
                                <strong>Stealth (AOE):</strong> Turn invisible and
                                move silently, making it harder for enemies to
                                detect you. Nearby allies also got this buff
                              </li>
                              <li>
                                <strong>Technician:</strong> Scan and reveal
                                nearby enemies, showing their name tags even
                                through walls.
                              </li>
                              <li>
                                <strong>Firewall (AOE):</strong> Deploy a shield that
                                blocks incoming damage and protects your HP. Nearby allies will get damage reduction bonus
                              </li>
                              <li>
                                <strong>Healing (AOE):</strong> Restore your health and nearby allies health over
                                time, even while taking damage from enemies.
                              </li>
                              <li>
                                <strong>Athlete:</strong> Boost your movement
                                speed to dodge attacks and reposition quickly.
                              </li>
                              <li>
                                <strong>Stun:</strong> Immobilize enemies and
                                inflict continuous damage for a short duration.
                              </li>
                            </ul>
                          </>
                        ),
                      },
                      {
                        title: "Master the Art of Stealth",
                        src: "/portofolio/wardeka/wardeka9.png",
                        description:
                          "The Stealth skill in Wardeka allows players to move undetected by enemies. With this skill, players can flank opponents, avoid detection, and create opportunities for surprise attacks. Perfect for strategic players who want to control the battlefield with stealthy tactics and precise timing. Use stealth to outmaneuver your foes and turn the tide of battle in your favor!",
                      },
                      {
                        title: "Defensive Power: Firewall in Action",
                        src: "/portofolio/wardeka/wardeka10.png",
                        description:
                          "The Firewall skill creates a protective shield, absorbing damage from enemy attacks and keeping players safe. In intense combat situations, this skill is crucial for staying in the fight longer, allowing players to push forward or retreat without taking damage. Use the firewall strategically to block incoming fire and protect your team while you plan your next move!",
                      },
                      {
                        title: "Unique Map: Anti-Gravity Zone",
                        src: "/portofolio/wardeka/wardeka11.png",
                        description:
                          "Wardeka offers a variety of dynamic and immersive maps, each bringing a unique twist to gameplay. In this Anti-Gravity Zone, players can defy gravity, walking on walls and ceilings to outmaneuver enemies. This map challenges traditional combat strategies, requiring players to think in 3D and use the environment to their advantage. The changing gravity adds an exciting layer of unpredictability and creativity to every match!",
                      },
                      {
                        title: "Choose Your Character",
                        src: "/portofolio/wardeka/wardeka12.png",
                        description:
                          "In Wardeka, players can select from a variety of characters. From a former soldier to secret agent! Strategize with your team to utilize each character effectively and enhance your chances of victory!",
                      },
                      {
                        title: "Weapon Arsenal: Equip for Battle",
                        src: "/portofolio/wardeka/wardeka13.png",
                        description:
                          "In Wardeka, players can choose from a wide range of weapons to customize their loadout. Whether you prefer long-range precision, rapid-fire assault, or heavy firepower, the weapon selection offers flexibility to match your playstyle. Equip wisely to gain the upper hand in battle and support your team's strategy on the battlefield!",
                      },
                      {
                        title: "Customize Your Look: New Styles Available!",
                        src: "/portofolio/wardeka/wardeka14.png",
                        description:
                          "Tired of the same old look? In Wardeka, you can express your unique style with a variety of skins and cosmetic items available in the in-game store. Personalize your character's appearance and stand out in the battlefield with fresh, stylish options!",
                      },
                      {
                        title: "Surviving Under Pressure",
                        src: "/portofolio/wardeka/wardeka15.png",
                        description:
                          "In Wardeka, every moment counts. In this intense scene, a player faces an overwhelming attack, desperately trying to survive and avoid being eliminated. The tension is high as every decision can mean the difference between life and death. Will they make it out alive or fall to their enemies?",
                      },
                    ],
                  };
                  setSelectedProject(project);
                  setPreviewImage(project.images[0]);
                }}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={"/portofolio/wardeka/wardeka_intro.png"}
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
                              during the Unity Professional Training program I
                              attended. The game allows players to explore an
                              immersive game world, interact with diverse NPCs,
                              and solve context-based quizzes to earn points and
                              unlock new areas. In total, players can unlock 5
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
                        title: "Interacting with NPC",
                        src: "/portofolio/quiz_adventure/npc_interaction.png",
                        description:
                          "Players can approach and interact with a variety of NPCs some provide helpful information, while others challenge the player with quizzes that test observation and exploration skills.",
                      },
                      {
                        title: "NPC gives information",
                        src: "/portofolio/quiz_adventure/npc_information.png",
                        description:
                          "Some NPCs offer valuable clues and background stories that help players solve nearby quizzes and progress through the adventure.",
                      },
                      {
                        title: "Environment Landmarks",
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
            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
              <div
                className="portfolio-wrap"
                onClick={() => {
                  const project = {
                    images: [
                      {
                        title: "First-Person 3D Multiplayer Climbing Game",
                        src: "/portofolio/fusion_climb/fusion.png",
                        description: (
                          <>
                            <p>
                              <strong>
                                A competitive 3D multiplayer first-person
                                climbing game
                              </strong>{" "}
                              where players race to reach the top platform (blue
                              platform) as quickly as possible. Built using{" "}
                              <strong>Photon Fusion 2 SDK</strong>, the game
                              supports up to{" "}
                              <strong>12 players per room</strong> and offers a
                              range of mobility and offensive skills that
                              enhance both strategy and chaos.
                            </p>

                            <p>Players can use six unique abilities:</p>
                            <ul>
                              <li>
                                <strong>Double Jump</strong> – Enables a second
                                jump mid-air.
                              </li>
                              <li>
                                <strong>Glide</strong> – Slows descent to reach
                                farther or safer platforms.
                              </li>
                              <li>
                                <strong>Grapple</strong> – Shoots a hook to
                                latch onto specific targets and pull the player
                                forward.
                              </li>
                              <li>
                                <strong>Shove</strong> – Pushes an opponent
                                directly in front of the player.
                              </li>
                              <li>
                                <strong>Cage</strong> – Temporarily traps a
                                targeted opponent.
                              </li>
                              <li>
                                <strong>Break</strong> – A counter-skill that
                                allows players to escape from a cage by rapidly
                                pressing a key.
                              </li>
                            </ul>

                            <p>
                              To aid vertical progression, the game includes two
                              types of jump boosts:
                            </p>
                            <ul>
                              <li>
                                <strong>Square Boost</strong> – Launches players
                                straight up in the set direction.
                              </li>
                              <li>
                                <strong>Sphere Boost</strong> – Launches players
                                based on the angle and direction of contact,
                                increasing the challenge.
                              </li>
                            </ul>

                            <p>
                              Additional features include a{" "}
                              <strong>real-time leaderboard</strong>, a{" "}
                              <strong>player renaming system</strong>, and a{" "}
                              <strong>multiplayer room system</strong> where
                              players can create or join rooms, ready up with
                              the <code>R</code> key, and restart the match once
                              a winner is declared.
                            </p>
                          </>
                        ),
                      },
                      {
                        title: "Player race who can reach the top first",
                        src: "/portofolio/fusion_climb/fusion2.png",
                        description: (
                          <>
                            <p>
                              Players race against each other, using speed,
                              strategy, and skills to climb to the top platform
                              first.
                            </p>
                            <p>
                              Additional features include a{" "}
                              <strong>real-time leaderboard - top left</strong>,
                              a <strong>player renaming system</strong>, and a{" "}
                              <strong>multiplayer room system</strong> where
                              players can create or join rooms, ready up with
                              the <code>R</code> key, and restart the match once
                              a winner is declared.
                            </p>
                          </>
                        ),
                      },
                      {
                        title: "Unique ability and boosts",
                        src: "/portofolio/fusion_climb/fusion3.png",
                        description: (
                          <>
                            <p>
                              Player can utilize six unique abilities and two
                              boosts to help them win the match
                            </p>
                            <ul>
                              <li>
                                <strong>Double Jump</strong> – Enables a second
                                jump mid-air.
                              </li>
                              <li>
                                <strong>Glide</strong> – Slows descent to reach
                                farther or safer platforms.
                              </li>
                              <li>
                                <strong>Grapple</strong> – Shoots a hook to
                                latch onto specific targets and pull the player
                                forward.
                              </li>
                              <li>
                                <strong>Shove</strong> – Pushes an opponent
                                directly in front of the player.
                              </li>
                              <li>
                                <strong>Cage</strong> – Temporarily traps a
                                targeted opponent.
                              </li>
                              <li>
                                <strong>Break</strong> – A counter-skill that
                                allows players to escape from a cage by rapidly
                                pressing a key.
                              </li>
                            </ul>

                            <p>
                              To aid vertical progression, the game includes two
                              types of jump boosts:
                            </p>
                            <ul>
                              <li>
                                <strong>Square Boost</strong> – Launches players
                                straight up in the set direction.
                              </li>
                              <li>
                                <strong>Sphere Boost</strong> – Launches players
                                based on the angle and direction of contact,
                                increasing the challenge.
                              </li>
                            </ul>
                          </>
                        ),
                      },
                      {
                        title: "Platform that players must climb",
                        src: "/portofolio/fusion_climb/fusion4.png",
                        description:
                          "A view of the towering level design, featuring multiple climbing challenges and the blue finish platform awaiting the first player to reach the top.",
                      },
                      {
                        title: "A Player has reached the top!",
                        src: "/portofolio/fusion_climb/fusion5.png",
                        description:
                          "A player has reached the blue finish platform, marking the end of a competitive climb to the top.",
                      },
                    ],
                  };
                  setSelectedProject(project);
                  setPreviewImage(project.images[0]);
                }}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={"/portofolio/fusion_climb/fusion.png"}
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
            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
              <div
                className="portfolio-wrap"
                onClick={() => {
                  const project = {
                    images: [
                      {
                        title: "Platform Master",
                        src: "/portofolio/platformer/plat4.png",
                        description: (
                          <>
                            <p>
                              <strong>Platform Master</strong> is a 2D
                              platformer developed as part of the Unity Learn
                              Platformer Microgame course, which I further
                              customized to enhance gameplay challenge and
                              visual appeal. In this game, players run, jump,
                              and stomp enemies (red slimes) while navigating
                              platform obstacles to reach the finish line and
                              collect diamonds for points. Touching an enemy or
                              falling off results in defeat.
                            </p>

                            <p>
                              To make the experience more engaging, I introduced
                              two custom power-ups:
                            </p>
                            <ul>
                              <li>
                                <strong>Boost</strong> – Propels the player
                                forward.
                              </li>
                              <li>
                                <strong>Long Up</strong> – Launches the player
                                upward to access hard-to-reach areas or evade
                                enemies.
                              </li>
                            </ul>

                            <p>
                              I also revamped the game's color theme and added
                              new visual effects, including a{" "}
                              <strong>ground-smash effect</strong> when enemies
                              are stomped. Additional enemies, including
                              faster-moving variants, were added to increase the
                              level of difficulty and improve pacing.
                            </p>
                          </>
                        ),
                      },
                      {
                        title: "Platform Master gameplay 1",
                        src: "/portofolio/platformer/plat.png",
                        description:
                          "The player leaps between platforms while navigating toward the finish line.",
                      },
                      {
                        title: "Platform Master gameplay 2",
                        src: "/portofolio/platformer/plat2.png",
                        description:
                          "The player stomps an enemy, triggering a ground-smash visual effect for added impact.",
                      },
                      {
                        title: "Platform Master gameplay 3",
                        src: "/portofolio/platformer/plat3.png",
                        description:
                          "The player activates the Long Up boost, launching high into the air to reach elevated platforms.",
                      },
                    ],
                  };
                  setSelectedProject(project);
                  setPreviewImage(project.images[0]);
                }}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={"/portofolio/platformer/plat4.png"}
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
            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
              <div
                className="portfolio-wrap"
                onClick={() => {
                  const project = {
                    images: [
                      {
                        title: "Sphere Sumō",
                        src: "/portofolio/ssumo/ssumo4.png",
                        description: (
                          <>
                            <p>
                              <strong>Sphere Sumō</strong> is a fast-paced 3D
                              action game where players control a sphere in a
                              sumo-style arena, battling waves of enemy spheres
                              while trying to stay on the platform and collect
                              diamonds to increase their score. Inspired by sumo
                              wrestling mechanics, the core gameplay challenges
                              the player to avoid being pushed off while
                              strategically using power-ups to survive
                              increasingly difficult rounds.
                            </p>

                            <p>
                              The game features a survival-based arena design,
                              where new enemies spawn each time a previous one
                              is knocked off, ramping up the challenge over
                              time. Players can collect diamonds for points
                              while navigating the risk of being overwhelmed.
                            </p>

                            <p>
                              To assist in gameplay,{" "}
                              <strong>Sphere Sumō</strong> includes three
                              distinct power-ups:
                            </p>
                            <ul>
                              <li>
                                <strong>Super Strength</strong> – Instantly
                                knocks back any enemy on contact.
                              </li>
                              <li>
                                <strong>Super Speed</strong> – Increases
                                movement speed for quick escapes but also
                                increases the risk of falling.
                              </li>
                              <li>
                                <strong>Insta Kill</strong> – A rare ability
                                that instantly eliminates all nearby enemies.
                              </li>
                            </ul>

                            <p>
                              The environment also features a dynamic{" "}
                              <strong>day-night cycle</strong>, creating a more
                              immersive and visually engaging experience.
                            </p>
                          </>
                        ),
                      },
                      {
                        title: "Sphere Sumō gameplay 1",
                        src: "/portofolio/ssumo/ssumo.png",
                        description: (
                          <>
                            <p>
                              Enemies relentlessly chase the player, pushing
                              them toward the edge of the platform.
                            </p>
                            <p>
                              Additional feature in,{" "}
                              <strong>Sphere Sumō</strong> includes:
                            </p>
                            <ul>
                              <li>
                                <strong>Score Counter</strong> – Show the player
                                current score of how many enemy player knocked
                                out off the platform.
                              </li>
                              <li>
                                <strong>High Score</strong> – Shows the highest
                                score that the player has achieved previously.
                              </li>
                            </ul>
                          </>
                        ),
                      },
                      {
                        title: "Sphere Sumō gameplay 2",
                        src: "/portofolio/ssumo/ssumo2.png",
                        description: (
                          <>
                            <p>
                              The player stomps an enemy, triggering a
                              ground-smash visual effect for added impact.
                            </p>
                            <p>
                              To assist in gameplay,{" "}
                              <strong>Sphere Sumō</strong> includes three
                              distinct power-ups:
                            </p>
                            <ul>
                              <li>
                                <strong>Super Strength</strong> – Instantly
                                knocks back any enemy on contact.
                              </li>
                              <li>
                                <strong>Super Speed</strong> – Increases
                                movement speed for quick escapes but also
                                increases the risk of falling.
                              </li>
                              <li>
                                <strong>Insta Kill</strong> – A rare ability
                                that instantly eliminates all nearby enemies.
                              </li>
                            </ul>
                          </>
                        ),
                      },
                      {
                        title: "Sphere Sumō gameplay 3",
                        src: "/portofolio/ssumo/ssumo3.png",
                        description:
                          "With Insta Kill activated, all nearby enemies are instantly blasted off the platform.",
                      },
                    ],
                  };
                  setSelectedProject(project);
                  setPreviewImage(project.images[0]);
                }}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={"/portofolio/ssumo/ssumo4.png"}
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
                    images: [
                      {
                        title: "Huetiful Mobile App",
                        src: "/portofolio/huetiful/huetiful.jpg",
                        description: (
                          <>
                            <p>
                              <strong>Huetiful</strong> is a mobile application
                              powered by advanced machine learning that helps
                              users choose clothing colors that complement their
                              skin tone, empowering self-expression through
                              fashion. By taking a selfie, users can instantly
                              receive a personalized color palette generated
                              using machine learning. Based on this palette, the
                              app recommends outfit combinations that enhance
                              the user's natural appearance.
                            </p>

                            <p>
                              Designed with a focus on teenagers and young
                              adults, Huetiful also allows users to create
                              accounts to save their color and outfit history
                              securely in the cloud. The app supports both{" "}
                              <strong>Bahasa Indonesia</strong> and{" "}
                              <strong>English</strong>, ensuring accessibility
                              for a broader audience.
                            </p>

                            <p>
                              This project is rooted in findings from research
                              by the{" "}
                              <strong>Fashion Institute of Technology</strong>{" "}
                              and <strong>Deloitte</strong>, which show that
                              over 60% of teenagers view fashion as a key form
                              of personal expression.
                            </p>

                            <p>
                              Additional insights from our own survey of over
                              100 Indonesian youths revealed:
                            </p>
                            <ul>
                              <li>
                                <strong>89%</strong> have felt mismatched in the
                                color of their clothing.
                              </li>
                              <li>
                                <strong>63%</strong> lack knowledge of how to
                                choose colors that suit their skin tone.
                              </li>
                            </ul>

                            <p>
                              Huetiful addresses this gap by combining mobile
                              development, machine learning, and user-centered
                              design. This project was developed as part of my
                              capstone during the{" "}
                              <strong>
                                Bangkit Academy Mobile Development Cohort
                              </strong>
                              .
                            </p>
                          </>
                        ),
                      },
                      {
                        title: "Color Palate Generator",
                        src: "/portofolio/huetiful/huetiful2.jpg",
                        description:
                          "Huetiful analyzes your selfie to generate a personalized color palette that complements your unique skin tone.",
                      },
                      {
                        title: "Outfit Color Matcher",
                        src: "/portofolio/huetiful/huetiful3.jpg",
                        description:
                          "Using your personalized palette, Huetiful suggests outfit color combinations that perfectly match your skin tone.",
                      },
                      {
                        title: "Dare To Be Different? Be Colorful!",
                        src: "/portofolio/huetiful/huetiful4.jpg",
                        description:
                          "Dare To Be Different? Be Colorful! - We encourage users to stand out through personalized style.",
                      },
                    ],
                  };
                  setSelectedProject(project);
                  setPreviewImage(project.images[0]);
                }}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={"/portofolio/huetiful/huetiful.jpg"}
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
