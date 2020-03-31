import React from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./Components/Themes";
import { GlobalStyles } from "./Components/Global";
import Toggle from "./Components/Toggle";
import useDarkEffect from "./Components/useDarkEffect";

const App = () => {
  const [theme, toggleTheme, componentMounted] = useDarkEffect();

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />;
  }

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Toggle theme={theme} toggleTheme={toggleTheme} />
        <h1>It's a {theme === "light" ? "light theme" : "dark theme"}!</h1>
      </>
      <span>Credits:</span>
      <div>
        Icons made by{" "}
        <a
          href="https://www.flaticon.com/authors/pixel-perfect"
          title="Pixel perfect"
        >
          Pixel perfect
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
      <div>
        Icons made by{" "}
        <a href="https://www.flaticon.com/authors/good-ware" title="Good Ware">
          Good Ware
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </ThemeProvider>
  );
};

export default App;
