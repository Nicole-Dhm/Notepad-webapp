import { useState, createContext, useContext } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { themes } from "./CustomThemes";

const ThemeContext = createContext();

export function useThemeUpdate() {
  return useContext(ThemeContext);
}

export default function ThemeWrapper({ children }) {
  const [ themeName, setThemeName] = useState('default');

  return (
    <ThemeContext.Provider value = {{ themeName, setThemeName }}>
      <ThemeProvider theme={themes[themeName]}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}