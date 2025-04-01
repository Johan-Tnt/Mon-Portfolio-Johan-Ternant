//Code édité par Johan
//Contient la mise en page globale de la page "error404"
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons"; // Icône d'erreur

const Error404 = () => {
  const navigate = useNavigate(); //Utilisation du hook useNavigate

  const handleRedirect = () => {
    navigate("/"); //Redirection vers la page d'accueil
  };
  const { t } = useTranslation();
  return (
    <div className="message_error" role="alert">
      <div className="error_box">
        <FontAwesomeIcon icon={faTriangleExclamation} className="error_icon" />
        <h1 className="error_title">{t("error404Title")}</h1>
        <p className="error_text" aria-live="assertive">
          {t("error404Text")}
        </p>
        <button
          onClick={handleRedirect}
          className="error_redirection"
          aria-label={t("error404Redirection")}
        >
          {t("error404Redirection")}
        </button>
      </div>
    </div>
  );
};

export default Error404;
