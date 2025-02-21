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
      {
        src: "./src/assets/img-jpg-cp/Mon-Portfolio-1.png",
        alt: "Aperçu de la page d'accueil du portfolio de Johan Ternant",
      },
      {
        src: "./src/assets/img-jpg-cp/Mon-Portfolio-2.png",
        alt: "Présentation des projets sur le portfolio de Johan Ternant",
      },
    ],
    githubLink: "https://github.com/Johan-Tnt/Mon-Portfolio-Johan-Ternant",
  },
  {
    title: "Argent Bank",
    description:
      "Application bancaire avec authentification, gestion des transactions et communication avec une API REST.",
    tags: ["Frontend", "Backend", "React", "React Router", "Redux", "Sass"],
    images: [
      {
        src: "./src/assets/img-webp-cp/Argent-Bank-1-new.webp",
        alt: "Page de connexion de l'application bancaire",
      },
      {
        src: "./src/assets/img-webp-cp/Argent-Bank-2-new.webp",
        alt: "Tableau de bord utilisateur avec transactions",
      },
      {
        src: "./src/assets/img-webp-cp/Argent-Bank-3-new.webp",
        alt: "Interface de gestion des comptes",
      },
      {
        src: "./src/assets/img-webp-cp/Argent-Bank-API-Swagger-Editor-1-new.webp",
        alt: "Documentation API avec Swagger",
      },
      {
        src: "./src/assets/img-webp-cp/Argent-Bank-API-Swagger-Editor-2-new.webp",
        alt: "Interface d'édition de l'API avec Swagger",
      },
      {
        src: "./src/assets/img-webp-cp/Argent-Bank-API-Swagger-Editor-3-new.webp",
        alt: "Exemple de réponse de l'API pour les transactions",
      },
    ],
    githubLink:
      "https://github.com/Johan-Tnt/Ternant_Johan_n_11_Implementez_le_front_end_d_une_application_bancaire_avec_React",
  },
  {
    title: "724events",
    description:
      "Débogage et optimisation d’une application de gestion d’événements.",
    tags: ["Frontend", "React Dev Tools"],
    images: [
      {
        src: "./src/assets/img-webp-cp/724Events-1-new.webp",
        alt: "Page d'accueil de l'application de gestion d'événements",
      },
      {
        src: "./src/assets/img-webp-cp/724Events-2-new.webp",
        alt: "Vue d'ensemble des événements en cours",
      },
      {
        src: "./src/assets/img-webp-cp/724Events-3-new.webp",
        alt: "Interface utilisateur pour la gestion des événements",
      },
      {
        src: "./src/assets/img-webp-cp/724Events-4-new.webp",
        alt: "Calendrier de gestion des événements",
      },
      {
        src: "./src/assets/img-webp-cp/724Events-5-new.webp",
        alt: "Édition des événements dans l'application",
      },
      {
        src: "./src/assets/img-webp-cp/724Events-6-new.webp",
        alt: "Vue sur les détails d'un événement",
      },
    ],
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
      {
        src: "./src/assets/img-webp-cp/Nina-Carducci-1-new.webp",
        alt: "Page d'accueil du site de photographe Nina Carducci",
      },
      {
        src: "./src/assets/img-webp-cp/Nina-Carducci-2-new.webp",
        alt: "Optimisation du site pour le référencement SEO",
      },
      {
        src: "./src/assets/img-webp-cp/Nina-Carducci-3-new.webp",
        alt: "Audit des performances du site avec Lighthouse",
      },
      {
        src: "./src/assets/img-webp-cp/Nina-Carducci-4-new.webp",
        alt: "Contrôle de l'accessibilité avec l'outil Wave",
      },
      {
        src: "./src/assets/img-webp-cp/Nina-Carducci-5-new.webp",
        alt: "Analyse de contraste des couleurs sur le site",
      },
      {
        src: "./src/assets/img-webp-cp/Nina-Carducci-6-new.webp",
        alt: "Test d'accessibilité avec résultats enrichis",
      },
    ],
    githubLink:
      "https://github.com/Johan-Tnt/Ternant_Johan_n_9_Optimisez_le_referencement_d_un_site_de_photographe",
  },
  {
    title: "Kasa",
    description:
      "Plateforme de location immobilière avec affichage dynamique des annonces.",
    tags: ["Frontend", "Backend", "React", "React Router", "Sass"],
    images: [
      {
        src: "./src/assets/img-webp-cp/Kasa-1-new.webp",
        alt: "Page d'accueil de la plateforme Kasa",
      },
      {
        src: "./src/assets/img-webp-cp/Kasa-2-new.webp",
        alt: "Annonces immobilières listées sur Kasa",
      },
      {
        src: "./src/assets/img-webp-cp/Kasa-3-new.webp",
        alt: "Détails d'une annonce sur la plateforme Kasa",
      },
      {
        src: "./src/assets/img-webp-cp/Kasa-4-new.webp",
        alt: "Affichage dynamique des annonces sur Kasa",
      },
    ],
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
      {
        src: "./src/assets/img-webp-cp/Menu-Maker-1-new.webp",
        alt: "Interface principale de l'outil Menu Maker",
      },
      {
        src: "./src/assets/img-webp-cp/Menu-Maker-2-new.webp",
        alt: "Page de gestion des menus sur Menu Maker",
      },
      {
        src: "./src/assets/img-webp-cp/Menu-Maker-3-new.webp",
        alt: "Ajout d'un nouveau menu dans Menu Maker",
      },
      {
        src: "./src/assets/img-webp-cp/Menu-Maker-4-new.webp",
        alt: "Interface de suivi des spécifications techniques",
      },
      {
        src: "./src/assets/img-webp-cp/Menu-Maker-5-new.webp",
        alt: "Suivi Kanban des tâches dans Menu Maker",
      },
      {
        src: "./src/assets/img-webp-cp/Menu-Maker-6-new.webp",
        alt: "Page de gestion des commandes sur Menu Maker",
      },
      {
        src: "./src/assets/img-webp-cp/Menu-Maker-7-new.webp",
        alt: "Visualisation des statistiques de menus dans Menu Maker",
      },
      {
        src: "./src/assets/img-webp-cp/Menu-Maker-8-new.webp",
        alt: "Gestion des préférences d'utilisateur sur Menu Maker",
      },
      {
        src: "./src/assets/img-webp-cp/Menu-Maker-9-new.webp",
        alt: "Téléchargement des fichiers depuis Menu Maker",
      },
      {
        src: "./src/assets/img-webp-cp/Menu-Maker-10-new.webp",
        alt: "Écran d'édition des spécifications d'un menu",
      },
      {
        src: "./src/assets/img-webp-cp/Menu-Maker-11-new.webp",
        alt: "Vue sur l'interface de planification des menus",
      },
      {
        src: "./src/assets/img-webp-cp/Menu-Maker-12-new.webp",
        alt: "Page d'exportation des données dans Menu Maker",
      },
      {
        src: "./src/assets/img-webp-cp/Menu-Maker-13-new.webp",
        alt: "Interface de modification d'un menu existant",
      },
      {
        src: "./src/assets/img-webp-cp/Menu-Maker-14-new.webp",
        alt: "Écran de validation des menus dans Menu Maker",
      },
      {
        src: "./src/assets/img-webp-cp/Menu-Maker-15-new.webp",
        alt: "Vue de l'interface de révision des spécifications",
      },
      {
        src: "./src/assets/img-webp-cp/Menu-Maker-16-new.webp",
        alt: "Suivi des tâches de développement dans Menu Maker",
      },
      {
        src: "./src/assets/img-webp-cp/Menu-Maker-17-new.webp",
        alt: "Vue détaillée des menus dans Menu Maker",
      },
      {
        src: "./src/assets/img-webp-cp/Menu-Maker-18-new.webp",
        alt: "Page de gestion des utilisateurs dans Menu Maker",
      },
    ],
    folderLink: "./public/menu-maker/menu-maker.zip",
  },
  {
    title: "Sophie Bluel",
    description:
      "Création d’un site dynamique pour une architecte d’intérieur.",
    tags: ["Frontend", "Backend", "JavaScript", "HTML", "CSS"],
    images: [
      {
        src: "./src/assets/img-webp-cp/Sophie-Bluel-1-new.webp",
        alt: "Page d'accueil du site de Sophie Bluel",
      },
      {
        src: "./src/assets/img-webp-cp/Sophie-Bluel-2-new.webp",
        alt: "Détails des services d'architecture d'intérieur",
      },
      {
        src: "./src/assets/img-webp-cp/Sophie-Bluel-3-new.webp",
        alt: "Portfolio des réalisations de Sophie Bluel",
      },
      {
        src: "./src/assets/img-webp-cp/Sophie-Bluel-4-new.webp",
        alt: "Interface de contact sur le site de Sophie Bluel",
      },
      {
        src: "./src/assets/img-webp-cp/Sophie-Bluel-5-new.webp",
        alt: "Page des projets réalisés par Sophie Bluel",
      },
      {
        src: "./src/assets/img-webp-cp/Sophie-Bluel-6-new.webp",
        alt: "Visualisation des projets d'architecture d'intérieur",
      },
      {
        src: "./src/assets/img-webp-cp/Sophie-Bluel-7-new.webp",
        alt: "Portfolio des projets d'architecture d'intérieur de Sophie Bluel",
      },
    ],
    githubLink:
      "https://github.com/Johan-Tnt/Ternant_Johan_n_6_Creez_une_page_web_dynamique_avec_JavaScript_21_02_2024",
  },
  {
    title: "OhMyFood",
    description:
      "Développement d’un site mobile-first pour des restaurants, avec animations CSS.",
    tags: ["Frontend", "HTML", "Sass"],
    images: [
      {
        src: "./src/assets/img-webp-cp/OhMyFood-1-new.webp",
        alt: "Page d'accueil du site OhMyFood",
      },
      {
        src: "./src/assets/img-webp-cp/OhMyFood-2-new.webp",
        alt: "Sélection de plats sur OhMyFood",
      },
      {
        src: "./src/assets/img-webp-cp/OhMyFood-3-new.webp",
        alt: "Interface de commande sur OhMyFood",
      },
      {
        src: "./src/assets/img-webp-cp/OhMyFood-4-new.webp",
        alt: "Page de confirmation de commande sur OhMyFood",
      },
    ],
    githubLink:
      "https://github.com/Johan-Tnt/Ternant_Johan_n_4_Am-liorez_l_interface_d_un_site_mobile_avec_des_animations_CSS_27_11_2023",
  },

  {
    title: "Booki",
    description: "Développement d’un site desktop-first pour un hôtel.",
    tags: ["Frontend", "HTML", "CSS"],
    images: [
      {
        src: "./src/assets/img-webp-cp/Booki-1-new.webp",
        alt: "Page d'accueil du site Booki",
      },
      {
        src: "./src/assets/img-webp-cp/Booki-2-new.webp",
        alt: "Page de réservation de chambres sur Booki",
      },
    ],
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
              <Slider
                images={project.images.map((image) => ({
                  src: image.src,
                  alt: image.alt,
                }))}
              />
              <div className="projects_description">
                <h3>{project.title}</h3>
                <p className="button_projects_lf">{project.description}</p>
                <aside className="projet-footer-container">
                  <ul className="project-tags">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="tag"
                        style={{ borderColor: tagColors[tag] || "grey" }}
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      className="button_projects button_link_projects"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
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
                      Download Files
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
