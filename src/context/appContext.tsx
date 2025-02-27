import React, { createContext, useState } from "react";
const appContext = createContext({});

export interface appContextInterface {
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
  colorMap: { [key: string]: string }
} 

const AppProvider = ({ children }: { children: React.ReactNode}) => {
  const defaultLanguage = localStorage.getItem("language") || "en";
  const [language, setLanguage] = useState(defaultLanguage);

  const colorMap: { [key: string]: string } = {
    yellow: "neon-yellow",
    violet: "neon-violet",
    blue: "neon-blue",
    red: "neon-red",
    green: "neon-green",
    orange: "neon-orange",
    default: "neon-violet"
  };
  
  const value: appContextInterface = {
    language,
    setLanguage,
    colorMap
  }
  return (
    <appContext.Provider value={value}>
      {children}
    </appContext.Provider>
  )
}
export { appContext, AppProvider }