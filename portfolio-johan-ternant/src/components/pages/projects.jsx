//Code éditer par Johan
//Contient le menu principal "Projets"
import Slider from "../slider";

const projects = [
  {
    title: "Mon Portfolio",
    description:
      "Développement de mon site portfolio mettant en avant mes compétences et mes projets.",
    tags: ["Frontend", "React", "React Router", "Sass"],
    images: [
      "./src/assets/img-jpg-cp/Mon-Portfolio-1.png",
      "./src/assets/img-jpg-cp/Mon-Portfolio-2.png",
    ],
    alt: "Portfolio Johan Ternant",
    githubLink: "https://github.com/Johan-Tnt/Mon-Portfolio-Johan-Ternant",
  },
  {
    title: "Argent Bank",
    description:
      "Application bancaire avec authentification, gestion des transactions et communication avec une API REST.",
    tags: ["Frontend", "Backend", "React", "React Router", "Redux", "Sass"],
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
    description:
      "Débogage et optimisation d’une application de gestion d’événements.",
    tags: ["Frontend", "React Dev Tools"],
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
      "Optimisation des performances et de l'accessibilité d’un site de photographe professionnel.",
    tags: [
      "Frontend",
      "Minifier",
      "SEO",
      "Audit Light House",
      "Wave",
      "Contrast Analyser",
      "Test with enriched results",
    ],
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
    description:
      "Plateforme de location immobilière avec affichage dynamique des annonces.",
    tags: ["Frontend", "Backend", "React", "React Router", "Sass"],
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
      "Création d’un outil de gestion de menus avec suivi des spécifications techniques et méthode Agile.",
    tags: [
      "Frontend",
      "Backend",
      "Technical specifications",
      "Kanban",
      "Veille",
    ],
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
    description:
      "Création d’un site dynamique pour une architecte d’intérieur.",
    tags: ["Frontend", "Backend", "JavaScript", "HTML", "CSS"],
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
    description:
      "Développement d’un site mobile-first pour des restaurants, avec animations CSS.",
    tags: ["Frontend", "HTML", "Sass"],
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
    description: "Développement d’un site desktop-first pour un hôtel.",
    tags: ["Frontend", "HTML", "CSS"],
    images: [
      "./src/assets/img-webp-cp/Booki-1-new.webp",
      "./src/assets/img-webp-cp/Booki-2-new.webp",
    ],
    alt: "Booki",
    githubLink: "",
  },
];

{
  /* Bloc des Tags et de leur couleur */
}
const tagColors = {
  Frontend: "#38863C", //Vert foncé
  Backend: "#B22222", //Rouge foncé
  HTML: "#E65100", //Orange foncé
  CSS: "#A32880", //Rose foncé
  Sass: "#A32880", //Rose foncé
  React: "#005CB1", //Bleu foncé
  "React Router": "#005CB1", //Bleu foncé
  Redux: "#005CB1", //Bleu foncé
  "React Dev Tools": "#005CB1", //Bleu foncé
  JavaScript: "#C99700", //Jaune foncé
  Kanban: "#38863C", //Vert foncé
  Veille: "#A32880", //Rose foncé
  SEO: "#767275", //Gris foncé
  Minifier: "#767275", //Gris foncé
  "Audit Light House": "#767275", //Gris foncé
  "Contrast Analyser": "#767275", //Gris foncé
  Wave: "#767275", //Gris foncé
  "Résultats Enrichis": "##767275", //Gris foncé
  "Spécifications Techniques": "#767275", //Gris foncé
};

const Projects = () => {
  return (
    <main>
      <section>
        <div className="projects_title">
          <h2>Mes Projets</h2>
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
                <p className="button_projects_lf">{project.description}</p>
                <div className="tags_container">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="tag"
                      style={{
                        border: `2px solid ${tagColors[tag] || "grey"}`,
                        color: tagColors[tag] || "grey",
                        padding: "0.5rem",
                        margin: "0.2rem",
                        borderRadius: "4px",
                        fontWeight: "bold",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Projects;
