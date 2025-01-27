//Début code Johan
//Contient le menu principal "Home"

const projects = [
  {
    title: "Mon Portfolio",
    description: "Frontend, React, React Router, Sass",
    image: "./src/assets/img/Mon-Portfolio-1.png",
    alt: "Portfolio Johan Ternant",
    githubLink: "",
  },
  {
    title: "Argent Bank",
    description: "Frontend, Backend, React, React Router, Redux, Sass",
    image: "./src/assets/img/Argent-Bank-1.png",
    alt: "Argent Bank",
    githubLink:
      "https://github.com/Johan-Tnt/Ternant_Johan_n_11_Implementez_le_front_end_d_une_application_bancaire_avec_React",
  },
  {
    title: "724events",
    description: "Frontend, React dev Tools",
    image: "./src/assets/img/724Events-1.png",
    alt: "724Events",
    githubLink:
      "https://github.com/Johan-Tnt/Ternant_Johan_n_10_Debuggez_le_site_d_une_agence_d_evenementiel",
  },
  {
    title: "Nina Carducci",
    description:
      "Frontend, Minifier, Audit Light House, Contrast Analyser, Wave, Test with enriched results",
    image: "./src/assets/img/Nina-Carducci-1.png",
    alt: "Nina Carducci",
    githubLink:
      "https://github.com/Johan-Tnt/Ternant_Johan_n_9_Optimisez_le_referencement_d_un_site_de_photographe",
  },
  {
    title: "Kasa",
    description: "Frontend, Backend, React, React Router, Sass",
    image: "./src/assets/img/Kasa-1.png",
    alt: "Kasa",
    githubLink:
      "https://github.com/Johan-Tnt/Ternant_Johan_n_8_Creez_une_application_web_de_location_immobiliere_avec_React",
  },
  {
    title: "Menu Maker",
    description:
      "Frontend, Backend, Technical specifications, Kanban with Notion, Veille with Feedly",
    image: "./src/assets/img/Menu-Maker-1.png",
    alt: "Menu Maker by Qwenta",
    githubLink: "",
  },
  {
    title: "Sophie Bluel",
    description: "Frontend, Backend, JavaScript, HTML, CSS",
    image: "./src/assets/img/Sophie-Bluel-1.png",
    alt: "Sophie Bluel",
    githubLink:
      "https://github.com/Johan-Tnt/Ternant_Johan_n_6_Creez_une_page_web_dynamique_avec_JavaScript_21_02_2024",
  },
  {
    title: "OhMyFood",
    description: "Frontend, HTML, Sass",
    image: "./src/assets/img/OhMyFood-1.png",
    alt: "OhMyFood",
    githubLink:
      "https://github.com/Johan-Tnt/Ternant_Johan_n_4_Am-liorez_l_interface_d_un_site_mobile_avec_des_animations_CSS_27_11_2023",
  },
  {
    title: "Booki",
    description: "Frontend, HTML, CSS",
    image: "./src/assets/img/Booki-1.png",
    alt: "Booki",
    githubLink:
      "https://github.com/Johan-Tnt/Ternant_Johan_n_4_Am-liorez_l_interface_d_un_site_mobile_avec_des_animations_CSS_27_11_2023",
  },
];

const Projects = () => {
  return (
    <main>
      <section>
        <div className="projects_title">
          <h2>My Projects</h2>
        </div>
        <div className="section_projects">
          {projects.map((project, index) => (
            <div className="list_projects" key={index}>
              <a
                href={project.githubLink}
                className="button_projects button_link_github"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>GitHub Link</p>
              </a>
              <img
                src={project.image}
                alt={project.alt}
                className="img_projects"
              />
              <div className="projects_description">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Projects;

//Fin code Johan
