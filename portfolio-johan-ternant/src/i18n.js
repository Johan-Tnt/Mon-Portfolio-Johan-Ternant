//Code éditer par Johan
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Importer les fichiers de traduction
import translationFR from "./locales/fr.json";
import translationEN from "./locales/en.json";

i18n.use(initReactI18next).init({
  resources: {
    fr: { translation: translationFR },
    en: { translation: translationEN },
  },
  lng: "fr", //Langue par défaut
  fallbackLng: "en", //Langue de secours
  interpolation: {
    escapeValue: false, //React gère la protection contre les failles XSS
  },
});

export default i18n;
