//Code éditer par Johan
//Contient le menu principal "Projets"
import Slider from "../slider";
import { useTranslation } from "react-i18next";

const projects = [
  {
    title: "portfolioTitle",
    description: "portfolioDescription",
    tags: ["Frontend", "React", "ReactRouter", "Sass"],
    images: [
      {
        src: "/img-webp-cp/Mon-Portfolio-1-new.webp",
        alt: "portfolioImageAlt1",
      },
      {
        src: "/img-webp-cp/Mon-Portfolio-2-new.webp",
        alt: "portfolioImageAlt2",
      },
      {
        src: "/img-webp-cp/Mon-Portfolio-3-new.webp",
        alt: "portfolioImageAlt3",
      },
      {
        src: "/img-webp-cp/Mon-Portfolio-4-new.webp",
        alt: "portfolioImageAlt4",
      },
      {
        src: "/img-webp-cp/Mon-Portfolio-5-new.webp",
        alt: "portfolioImageAlt5",
      },
      {
        src: "/img-webp-cp/Mon-Portfolio-6-new.webp",
        alt: "portfolioImageAlt6",
      },
      {
        src: "/img-webp-cp/Mon-Portfolio-7-new.webp",
        alt: "porfolioImageAlt7",
      },
      {
        src: "/img-webp-cp/Mon-Portfolio-8-new.webp",
        alt: "porfolioImageAlt8",
      },
      {
        src: "/img-webp-cp/Mon-Portfolio-9-new.webp",
        alt: "porfolioImageAlt9",
      },
      {
        src: "/img-webp-cp/Mon-Portfolio-10-new.webp",
        alt: "porfolioImageAlt10",
      },
    ],
    githubLink: "https://github.com/Johan-Tnt/Mon-Portfolio-Johan-Ternant",
  },
  {
    title: "ArgentBankTitle",
    description: "argentBankDescription",
    tags: ["Frontend", "Backend", "React", "ReactRouter", "Redux", "Sass"],
    images: [
      {
        src: "/img-webp-cp/Argent-Bank-1-new.webp",
        alt: "ArgentBankImageAlt1",
      },
      {
        src: "/img-webp-cp/Argent-Bank-2-new.webp",
        alt: "ArgentBankImageAlt2",
      },
      {
        src: "/img-webp-cp/Argent-Bank-3-new.webp",
        alt: "ArgentBankImageAlt3",
      },
      {
        src: "/img-webp-cp/Argent-Bank-4-new.webp",
        alt: "ArgentBankImageAlt4",
      },
      {
        src: "/img-webp-cp/Argent-Bank-API-Swagger-Editor-1-new.webp",
        alt: "ArgentBankImageAlt5",
      },
      {
        src: "/img-webp-cp/Argent-Bank-API-Swagger-Editor-2-new.webp",
        alt: "ArgentBankImageAlt6",
      },
      {
        src: "/img-webp-cp/Argent-Bank-API-Swagger-Editor-3-new.webp",
        alt: "ArgentBankImageAlt7",
      },
    ],
    githubLink:
      "https://github.com/Johan-Tnt/Ternant_Johan_n_11_Implementez_le_front_end_d_une_application_bancaire_avec_React",
  },
  {
    title: "724events",
    description: "724EventsDescription",
    tags: ["Frontend", "ReactDevTools"],
    images: [
      {
        src: "/img-webp-cp/724Events-1-new.webp",
        alt: "724EventsImageAlt1",
      },
      {
        src: "/img-webp-cp/724Events-2-new.webp",
        alt: "724EventsImageAlt2",
      },
      {
        src: "/img-webp-cp/724Events-3-new.webp",
        alt: "724EventsImageAlt3",
      },
      {
        src: "/img-webp-cp/724Events-4-new.webp",
        alt: "724EventsImageAlt4",
      },
      {
        src: "/img-webp-cp/724Events-5-new.webp",
        alt: "724EventsImageAlt5",
      },
      {
        src: "/img-webp-cp/724Events-6-new.webp",
        alt: "724EventsImageAlt6",
      },
    ],
    githubLink:
      "https://github.com/Johan-Tnt/Ternant_Johan_n_10_Debuggez_le_site_d_une_agence_d_evenementiel",
  },
  {
    title: "Nina Carducci",
    description: "NinaCarducciDescription",
    tags: [
      "Frontend",
      "Minifier",
      "SEO",
      "AuditLightHouse",
      "Wave",
      "ContrastAnalyser",
      "TestWithEnrichedResults",
    ],
    images: [
      {
        src: "/img-webp-cp/Nina-Carducci-1-new.webp",
        alt: "NinaCarducciImageAlt1",
      },
      {
        src: "/img-webp-cp/Nina-Carducci-2-new.webp",
        alt: "NinaCarducciImageAlt2",
      },
      {
        src: "/img-webp-cp/Nina-Carducci-3-new.webp",
        alt: "NinaCarducciImageAlt3",
      },
      {
        src: "/img-webp-cp/Nina-Carducci-4-new.webp",
        alt: "NinaCarducciImageAlt4",
      },
      {
        src: "/img-webp-cp/Nina-Carducci-5-new.webp",
        alt: "NinaCarducciImageAlt5",
      },
      {
        src: "/img-webp-cp/Nina-Carducci-6-new.webp",
        alt: "NinaCarducciImageAlt6",
      },
    ],
    githubLink:
      "https://github.com/Johan-Tnt/Ternant_Johan_n_9_Optimisez_le_referencement_d_un_site_de_photographe",
  },
  {
    title: "Kasa",
    description: "KasaDescription",
    tags: ["Frontend", "Backend", "React", "ReactRouter", "Sass"],
    images: [
      {
        src: "/img-webp-cp/Kasa-1-new.webp",
        alt: "KasaImageAlt1",
      },
      {
        src: "/img-webp-cp/Kasa-2-new.webp",
        alt: "KasaImageAlt2",
      },
      {
        src: "/img-webp-cp/Kasa-3-new.webp",
        alt: "KasaImageAlt3",
      },
      {
        src: "/img-webp-cp/Kasa-4-new.webp",
        alt: "KasaImageAlt4",
      },
    ],
    githubLink:
      "https://github.com/Johan-Tnt/Ternant_Johan_n_8_Creez_une_application_web_de_location_immobiliere_avec_React",
  },
  {
    title: "Menu Maker",
    description: "MenuMakerDescription",
    tags: [
      "Frontend",
      "Backend",
      "TechnicalSpecifications",
      "Kanban",
      "TechnologyWatch",
    ],
    images: [
      {
        src: "/img-webp-cp/Menu-Maker-1-new.webp",
        alt: "MenuMakerImageAlt1",
      },
      {
        src: "/img-webp-cp/Menu-Maker-2-new.webp",
        alt: "MenuMakerImageAlt2",
      },
      {
        src: "/img-webp-cp/Menu-Maker-3-new.webp",
        alt: "MenuMakerImageAlt3",
      },
      {
        src: "/img-webp-cp/Menu-Maker-4-new.webp",
        alt: "MenuMakerImageAlt4",
      },
      {
        src: "/img-webp-cp/Menu-Maker-5-new.webp",
        alt: "MenuMakerImageAlt5",
      },
      {
        src: "/img-webp-cp/Menu-Maker-6-new.webp",
        alt: "MenuMakerImageAlt6",
      },
      {
        src: "/img-webp-cp/Menu-Maker-7-new.webp",
        alt: "MenuMakerImageAlt7",
      },
      {
        src: "/img-webp-cp/Menu-Maker-8-new.webp",
        alt: "MenuMakerImageAlt8",
      },
      {
        src: "/img-webp-cp/Menu-Maker-9-new.webp",
        alt: "MenuMakerImageAlt9",
      },
      {
        src: "/img-webp-cp/Menu-Maker-10-new.webp",
        alt: "MenuMakerImageAlt10",
      },
    ],

    folderLink: "/menu-maker/menu-maker.zip",
  },
  {
    title: "Sophie Bluel",
    description: "SophieBluelDescription",
    tags: ["Frontend", "Backend", "JavaScript", "HTML", "CSS"],
    images: [
      {
        src: "/img-webp-cp/Sophie-Bluel-1-new.webp",
        alt: "SophieBluelImageAlt1",
      },
      {
        src: "/img-webp-cp/Sophie-Bluel-2-new.webp",
        alt: "SophieBluelImageAlt2",
      },
      {
        src: "/img-webp-cp/Sophie-Bluel-3-new.webp",
        alt: "SophieBluelImageAlt3",
      },
      {
        src: "/img-webp-cp/Sophie-Bluel-4-new.webp",
        alt: "SophieBluelImageAlt4",
      },
      {
        src: "/img-webp-cp/Sophie-Bluel-5-new.webp",
        alt: "SophieBluelImageAlt5",
      },
      {
        src: "/img-webp-cp/Sophie-Bluel-6-new.webp",
        alt: "SophieBluelImageAlt6",
      },
      {
        src: "/img-webp-cp/Sophie-Bluel-7-new.webp",
        alt: "SophieBluelImageAlt7",
      },
    ],
    githubLink:
      "https://github.com/Johan-Tnt/Ternant_Johan_n_6_Creez_une_page_web_dynamique_avec_JavaScript_21_02_2024",
  },
  {
    title: "OhMyFood",
    description: "OhMyFoodDescription",
    tags: ["Frontend", "HTML", "Sass"],
    images: [
      {
        src: "/img-webp-cp/OhMyFood-1-new.webp",
        alt: "OhMyFoodImageAlt1",
      },
      {
        src: "/img-webp-cp/OhMyFood-2-new.webp",
        alt: "OhMyFoodImageAlt2",
      },
      {
        src: "/img-webp-cp/OhMyFood-3-new.webp",
        alt: "OhMyFoodImageAlt3",
      },
      {
        src: "/img-webp-cp/OhMyFood-4-new.webp",
        alt: "OhMyFoodImageAlt4",
      },
    ],
    githubLink:
      "https://github.com/Johan-Tnt/Ternant_Johan_n_4_Am-liorez_l_interface_d_un_site_mobile_avec_des_animations_CSS_27_11_2023",
  },
];

/*{ Bloc des Tags et de leur couleur }*/
const tagColors = {
  Frontend: "#2C5E3C", //Vert foncé
  Backend: "#922222", //Rouge foncé
  HTML: "#7F4000", //Orange foncé
  CSS: "#892880", //Rose foncé
  Sass: "#892880", //Rose foncé
  React: "#005c8b", //Bleu foncé
  ReactRouter: "#005c8b", //Bleu foncé
  Redux: "#005c8b", //Bleu foncé
  ReactDevTools: "#005c8b", //Bleu foncé
  JavaScript: "#595b00", //Jaune foncé
  Kanban: "#2C5E3C", //Vert foncé
  TechnologyWatch: "#892880", //Rose foncé
  SEO: "#555858", //Gris foncé
  Minifier: "#555858", //Gris foncé
  AuditLightHouse: "#555858", //Gris foncé
  ContrastAnalyser: "#555858", //Gris foncé
  Wave: "#555858", //Gris foncé
  TestWithEnrichedResults: "#555858", //Gris foncé
  TechnicalSpecifications: "#555858", //Gris foncé
};

const Projects = () => {
  const { t } = useTranslation();
  return (
    <main>
      <section>
        <div className="projects_title">
          <h2>{t("projectsTitle")}</h2>
        </div>
        <div className="section_projects">
          {projects.map((project, index) => (
            <div className="list_projects" key={index}>
              <Slider
                images={project.images.map((image) => ({
                  src: image.src,
                  alt: t(image.alt),
                }))}
              />
              <div className="projects_description">
                <h3>{t(project.title)}</h3>
                <p>{t(project.description)}</p>
                <aside className="projet-footer-container">
                  <ul className="project-tags">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="tag"
                        style={{ borderColor: tagColors[tag] || "grey" }}
                      >
                        {t(tag)}
                      </li>
                    ))}
                  </ul>
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      className="button_link_projects"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t("projectsGitHubLinks")}
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
                      {t("projectsFilesLinks")}
                    </a>
                  )}
                </aside>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Projects;
