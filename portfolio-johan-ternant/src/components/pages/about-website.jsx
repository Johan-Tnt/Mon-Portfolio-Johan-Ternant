//Code édité par Johan
//Contient la mise en page globale de la page "À propos"
import { useTranslation } from "react-i18next";

const AboutWebsite = () => {
  const { t } = useTranslation();
  return (
    <main>
      <section>
        <div className="about_website_box_title">
          <h2 className="about_website_title">{t("aboutTitle")}</h2>
        </div>

        <div className="about_website_bento">
          {/*Hébergements du Portfolio Johan */}
          <div className="box-host bento_box_about_website about_website_text">
            <h3 className="about_website_title">{t("hostingGithubTitle")}</h3>
            <p>
              {t("managerText")}
              <a
                href="https://www.johan-ternant.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="about_website_links"
              >
                {t("managerName")}
              </a>
            </p>
            <p>{t("hostingGithubText")}</p>
            <p>{t("hostingTextAddressGithub")}</p>
            <p>
              {t("hostingGithubText2")}
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="about_website_links"
              >
                {t("hostGithubLink")}
              </a>
            </p>
            <p>{t("hostingDomainOVHText")}</p>
            <p>{t("hostingDomainAddressOVH")}</p>
            <p>
              {t("hostingDomainOVHText2")}

              <a
                href="https://www.ovhcloud.com/fr/"
                target="_blank"
                rel="noopener noreferrer"
                className="about_website_links"
              >
                {t("DomainLinkOVH")}
              </a>
            </p>
          </div>

          {/* Droits d'auteur de l'image de la bannière */}
          <div className="box-copyrights bento_box_about_website about_website_text">
            <h3 className="about_website_title">{t("copyrightsTitle")}</h3>
            <p>
              {t("mandatoryInformation")}
              <a
                href="https://www.economie.gouv.fr/entreprises/site-internet-mentions-obligatoires"
                target="_blank"
                rel="noopener noreferrer"
                className="about_website_links"
              >
                {t("mandatoryLink")}
              </a>
            </p>
            <p>
              <a
                href="https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000044067469"
                target="_blank"
                rel="noopener noreferrer"
                className="about_website_links"
              >
                {t("confidenceLawLink")}
              </a>
              {t("confidenceLaw")}
            </p>
            <p>
              {t("bannerCopyrightText1")}
              <a
                href="https://fr.freepik.com"
                target="_blank"
                rel="noopener noreferrer"
                className="about_website_links"
              >
                {t("bannerCopyrightFreepik")}
              </a>
            </p>
            <p>
              {t("bannerCopyrightText2")}
              <a
                href="https://fr.freepik.com/photos-gratuite/branche-fleur-cerisier_12686583.htm#fromView=search&page=1&position=39&uuid=8e368b95-5fc2-432c-aa31-e32074e5635e&query=image+cerisier"
                target="_blank"
                rel="noopener noreferrer"
                className="about_website_links"
              >
                {t("bannerCopyrightImage")}
              </a>
              {t("bannerCopyrightText3")}
              <a
                href="https://fr.freepik.com/auteur/jplenio1"
                target="_blank"
                rel="noopener noreferrer"
                className="about_website_links"
              >
                {t("bannerCopyrightAutor")}
              </a>
            </p>
            <p>{t("myThanks")}</p>
          </div>

          {/* Mentions légales */}
          <div className="box-all-rights bento_box_about_website about_website_text">
            <h3 className="about_website_title ">
              {t("allRightsReservedTitle")}
            </h3>
            <p>{t("presentationRights")}</p>
            <p>
              {t("presentationJohan")}
              {t("allRightsReserved")}
              {t("licenseChooser")}
              <a
                href="https://creativecommons.org/licenses/by-nd/4.0/deed.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="about_website_links "
              >
                {t("licenseChooserLink")}
              </a>
            </p>
            <p>
              {t("hostingGithubLink")}
              <a
                href="https://github.com/Johan-Tnt/Mon-Portfolio-Johan-Ternant"
                target="_blank"
                rel="noopener noreferrer"
                className="about_website_links"
              >
                {t("githubRepositoryLink")}
              </a>
            </p>
            <p>{t("noCookies")}</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutWebsite;
