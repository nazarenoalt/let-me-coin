import es from "../resources/languages/es.json";
import en from "../resources/languages/en.json";
import { LanguageType } from "../models/resources/language";

const translationsMap: { [key: string]: LanguageType } = {
  es,
  en
};
export const supportedLanguages = Object.keys(translationsMap);
const firstLanguage = "en";

export const useTranslations = ({ lang }: { lang: string | null }) => {
  setLanguage(lang);
  const translation: LanguageType = translationsMap[lang || getDefaultLanguage() || firstLanguage];
  const t = (key: string) => {
    return translation[key] || key;
  };

  return { t };
};

export const getDefaultLanguage = () => {
  const savedLanguage = localStorage.getItem("language") || firstLanguage;
  if(savedLanguage) {
    return supportedLanguages.includes(savedLanguage) ? savedLanguage : firstLanguage;
  }
  const navigatorLang = navigator.language.split("-")[0];
  return supportedLanguages.includes(navigatorLang) ? navigatorLang : firstLanguage;
}

const setLanguage = (lang: string | null) => {
  const savedLanguage = localStorage.getItem("language");
  if(lang) {
    localStorage.setItem("language", lang);
  }
  if(!lang && !savedLanguage) {
    localStorage.setItem("language", getDefaultLanguage());
  }
}