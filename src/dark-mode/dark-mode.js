import React, { useEffect, useState } from "react";
import lightModeIcon from "./button/icons/sun.svg"; // Import the icons
import darkModeIcon from "./button/icons/moon.svg"; // Import the icons
import "./button/button-dark-mode.css";

const DarkModeSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    if (savedDarkMode) {
      document.documentElement.setAttribute("data-theme", "dark");
    }
    setIsDarkMode(savedDarkMode);
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("darkMode", "false");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("darkMode", "true");
    }
    setIsDarkMode(!isDarkMode);
  };

  // the switch button
  return (
    <button id="button-dark-mode" title="Dark mode" onClick={toggleDarkMode}>
      <img
        src={isDarkMode ? darkModeIcon : lightModeIcon}
        alt="Dark mode icon"
      />
    </button>
  );
};

export default DarkModeSwitch;
