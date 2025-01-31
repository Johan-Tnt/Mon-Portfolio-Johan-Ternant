//Code éditer par Johan
//Contient le menu principal "Home"
import Slider from "../slider";

const projects = [
  {
    title: "Mon Portfolio",
    description: "Frontend, React, React Router, Sass",
    images: [
      "./src/assets/img-jpg-cp/Mon-Portfolio-1.png",
      "./src/assets/img-jpg-cp/Mon-Portfolio-2.png",
    ],
    alt: "Portfolio Johan Ternant",
    githubLink: "https://github.com/Johan-Tnt/Mon-Portfolio-Johan-Ternant",
  },
  {
    title: "Argent Bank",
    description: "Frontend, Backend, React, React Router, Redux, Sass",
    images: [
      "./src/assets/img-webp-cp/Argent-Bank-1-new.webp",
      "./src/assets/img-webp-cp/Argent-Bank-2-new.webp",
      "./src/assets/img-webp-cp/Argent-Bank-3-new.webp",
      "./src/assets/img-webp-cp/Argent-Bank-API-Swagger-Editor-1-new.webp",
      "./src/assets/img-webp-cp/Argent-Bank-API-Swagger-Editor-2-new.webp",
      "./src/assets/img-webp-cp/Argent-Bank-API-Swagger-Editor-3-new.webp",
    ],
    alt: "Argent Bank",
    githubLink:
      "https://github.com/Johan-Tnt/Ternant_Johan_n_11_Implementez_le_front_end_d_une_application_bancaire_avec_React",
  },
  {
    title: "724events",
    description: "Frontend, React dev Tools",
    images: [
      "./src/assets/img-webp-cp/724Events-1-new.webp",
      "./src/assets/img-webp-cp/724Events-2-new.webp",
      "./src/assets/img-webp-cp/724Events-3-new.webp",
      "./src/assets/img-webp-cp/724Events-4-new.webp",
      "./src/assets/img-webp-cp/724Events-5-new.webp",
      "./src/assets/img-webp-cp/724Events-6-new.webp",
    ],
    alt: "724Events",
    githubLink:
      "https://github.com/Johan-Tnt/Ternant_Johan_n_10_Debuggez_le_site_d_une_agence_d_evenementiel",
  },
  {
    title: "Nina Carducci",
    description:
      "Frontend, Minifier, Audit Light House, Contrast Analyser, Wave, Test with enriched results",
    images: [
      "./src/assets/img-webp-cp/Nina-Carducci-1-new.webp",
      "./src/assets/img-webp-cp/Nina-Carducci-2-new.webp",
      "./src/assets/img-webp-cp/Nina-Carducci-3-new.webp",
      "./src/assets/img-webp-cp/Nina-Carducci-4-new.webp",
      "./src/assets/img-webp-cp/Nina-Carducci-5-new.webp",
      "./src/assets/img-webp-cp/Nina-Carducci-6-new.webp",
    ],
    alt: "Nina Carducci",
    githubLink:
      "https://github.com/Johan-Tnt/Ternant_Johan_n_9_Optimisez_le_referencement_d_un_site_de_photographe",
  },
  {
    title: "Kasa",
    description: "Frontend, Backend, React, React Router, Sass",
    images: [
      "./src/assets/img-webp-cp/Kasa-1-new.webp",
      "./src/assets/img-webp-cp/Kasa-2-new.webp",
      "./src/assets/img-webp-cp/Kasa-3-new.webp",
      "./src/assets/img-webp-cp/Kasa-4-new.webp",
    ],
    alt: "Kasa",
    githubLink:
      "https://github.com/Johan-Tnt/Ternant_Johan_n_8_Creez_une_application_web_de_location_immobiliere_avec_React",
  },
  {
    title: "Menu Maker",
    description:
      "Frontend, Backend, Technical specifications, Kanban with Notion, Veille with Feedly",
    images: [
      "./src/assets/img-webp-cp/Menu-Maker-1-new.webp",
      "./src/assets/img-webp-cp/Menu-Maker-2-new.webp",
      "./src/assets/img-webp-cp/Menu-Maker-3-new.webp",
      "./src/assets/img-webp-cp/Menu-Maker-4-new.webp",
      "./src/assets/img-webp-cp/Menu-Maker-5-new.webp",
      "./src/assets/img-webp-cp/Menu-Maker-6-new.webp",
      "./src/assets/img-webp-cp/Menu-Maker-7-new.webp",
      "./src/assets/img-webp-cp/Menu-Maker-8-new.webp",
      "./src/assets/img-webp-cp/Menu-Maker-9-new.webp",
      "./src/assets/img-webp-cp/Menu-Maker-10-new.webp",
      "./src/assets/img-webp-cp/Menu-Maker-11-new.webp",
      "./src/assets/img-webp-cp/Menu-Maker-12-new.webp",
      "./src/assets/img-webp-cp/Menu-Maker-13-new.webp",
      "./src/assets/img-webp-cp/Menu-Maker-14-new.webp",
      "./src/assets/img-webp-cp/Menu-Maker-15-new.webp",
      "./src/assets/img-webp-cp/Menu-Maker-16-new.webp",
      "./src/assets/img-webp-cp/Menu-Maker-17-new.webp",
      "./src/assets/img-webp-cp/Menu-Maker-18-new.webp",
    ],
    alt: "Menu Maker by Qwenta",
    folderLink: "./public/menu-maker/menu-maker.zip",
  },
  {
    title: "Sophie Bluel",
    description: "Frontend, Backend, JavaScript, HTML, CSS",
    images: [
      "./src/assets/img-webp-cp/Sophie-Bluel-1-new.webp",
      "./src/assets/img-webp-cp/Sophie-Bluel-2-new.webp",
      "./src/assets/img-webp-cp/Sophie-Bluel-3-new.webp",
      "./src/assets/img-webp-cp/Sophie-Bluel-4-new.webp",
      "./src/assets/img-webp-cp/Sophie-Bluel-5-new.webp",
      "./src/assets/img-webp-cp/Sophie-Bluel-6-new.webp",
      "./src/assets/img-webp-cp/Sophie-Bluel-7-new.webp",
    ],
    alt: "Sophie Bluel",
    githubLink:
      "https://github.com/Johan-Tnt/Ternant_Johan_n_6_Creez_une_page_web_dynamique_avec_JavaScript_21_02_2024",
  },
  {
    title: "OhMyFood",
    description: "Frontend, HTML, Sass",
    images: [
      "./src/assets/img-webp-cp/OhMyFood-1-new.webp",
      "./src/assets/img-webp-cp/OhMyFood-2-new.webp",
      "./src/assets/img-webp-cp/OhMyFood-3-new.webp",
      "./src/assets/img-webp-cp/OhMyFood-4-new.webp",
    ],
    alt: "OhMyFood",
    githubLink:
      "https://github.com/Johan-Tnt/Ternant_Johan_n_4_Am-liorez_l_interface_d_un_site_mobile_avec_des_animations_CSS_27_11_2023",
  },
  {
    title: "Booki",
    description: "Frontend, HTML, CSS",
    images: [
      "./src/assets/img-webp-cp/Booki-1-new.webp",
      "./src/assets/img-webp-cp/Booki-2-new.webp",
    ],
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
              <div className="buttons_container">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    className="button_projects button_link_projects"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p>GitHub Link</p>
                  </a>
                )}
                {project.folderLink && (
                  <a
                    href={project.folderLink}
                    className="button_projects button_link_projects"
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                  >
                    <p>Download Files</p>
                  </a>
                )}
              </div>
              <Slider images={project.images} alt={project.alt} />
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
