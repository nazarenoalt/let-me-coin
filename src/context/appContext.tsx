import React, { createContext, useState } from "react";
const appContext = createContext({});

const AppProvider = ({ children }: { children: React.ReactNode}) => {
  const defaultLanguage = localStorage.getItem("language") || "en";
  const [language, setLanguage] = useState(defaultLanguage);

  const value: {
    language: string,
    setLanguage: React.Dispatch<React.SetStateAction<string>>
  } = {
    language,
    setLanguage
  }
  return (
    <appContext.Provider value={value}>
      {children}
    </appContext.Provider>
  )
}
export { appContext, AppProvider }