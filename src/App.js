// import React, { useState } from "react";
// import useLocalStorage from "use-local-storage";

import About from "./components/about/about";
import Gallery from "./components/gallery/gallery";
// import { DarkModeSwitch } from "./components/dark-mode-switch/dark-mode-switch.js";
import "./App.css";
// import "./touch-devices.css";

function App() {
  const preferences = window.matchMedia("(prefers-color-scheme: dark)").matches;
  // const [isDark, setIsDark] = useLocalStorage("isDark", preferences);
  // const isDark = useLocalStorage("isDark", preferences);
  const isDark = preferences;

  return (
    <div className="App" data-theme={isDark ? "dark" : "light"}>
      {/* <DarkModeSwitch
        handleChange={() => setIsDark(!isDark)}
        isChecked={isDark}
      /> */}
      <About />
      <Gallery />
    </div>
  );
}

export default App;
