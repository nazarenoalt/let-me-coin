export interface appContextInterface {
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
  colorMap: { [key: string]: string }
} 