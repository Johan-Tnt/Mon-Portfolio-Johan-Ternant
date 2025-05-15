//Code édité par Johan
//Composant pour le contact
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const ContactLinks = () => {
  const { t } = useTranslation();
  return (
    <div className="link_contact">
      <a
        href="https://github.com/Johan-Tnt"
        className="contact_button"
        aria-label={t("contactLinkGitHub")}
      >
        <FontAwesomeIcon icon={faGithub} size={"xl"} />
      </a>
      <a
        href="https://www.linkedin.com/in/johan-ternant-064b48313/"
        className="contact_button"
        aria-label={t("contactLinkLinkedIn")}
      >
        <FontAwesomeIcon icon={faLinkedin} size={"xl"} />
      </a>
      <a
        href="media/CV-Johan-Web.pdf"
        target="_blank"
        className="contact_button"
        aria-label={t("contactLinkCV")}
      >
        CV
      </a>
    </div>
  );
};

export default ContactLinks;
