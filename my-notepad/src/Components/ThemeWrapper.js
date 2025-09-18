import { useState } from "react";
import { ThemeProvider, CssBaseline, Box, Select, MenuItem } from "@mui/material";
import { themes } from "./CustomThemes";

export default function ThemeWrapper({ children }) {
  const [themeName, setThemeName] = useState("default");

  return (
    <ThemeProvider theme={themes[themeName]}>
      <CssBaseline />
      {/* Theme Selector */}
      <Box sx={{ position: "absolute", top: 10, right: 10, zIndex: 1500 }}>
        <Select
          value={themeName}
          onChange={(e) => setThemeName(e.target.value)}
          size="small"
        >
          {Object.keys(themes).map((key) => (
            <MenuItem key={key} value={key}>
              {key}
            </MenuItem>
          ))}
        </Select>
      </Box>
      {children}
    </ThemeProvider>
  );
}