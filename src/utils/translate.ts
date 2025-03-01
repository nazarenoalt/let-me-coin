import es from "../resources/languages/es.json";
import en from "../resources/languages/en.json";
import { LanguageType } from "../models/resources/language";

const translationsMap: { [key: string]: LanguageType } = {
  es,
  en
};
export const supportedLanguages = Object.keys(translationsMap);
const firstLanguage = "en";

export const useTranslations = (lang?: string) => {
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

const setLanguage = (lang: string | undefined) => {
  const savedLanguage = localStorage.getItem("language");
  console.log(savedLanguage, lang)

  if(lang) {
    localStorage.setItem("language", lang);
  }
  if(!lang && !savedLanguage) {
    console.log("inside no lang")
    localStorage.setItem("language", getDefaultLanguage());
  }
}