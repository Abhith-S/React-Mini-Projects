import React, { useState } from "react";
import Blog from "./Blog";
import { ThemeContext, themes } from "./context/theme-context";

const LightAndDarkMode = () => {
  const [theme, setTheme] = useState(themes.light);
  return (
    <ThemeContext.Provider value={theme}>
      
      <Blog setTheme={setTheme}/>
    </ThemeContext.Provider>
  );
};

export default LightAndDarkMode;
