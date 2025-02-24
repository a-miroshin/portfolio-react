import React from "react";
import About from "./components/about/about";
import Gallery from "./components/gallery/gallery";
import DarkModeSwitch from "./dark-mode/dark-mode"; // Import the DarkModeSwitch component
import "./App.css";
import "./touch-devices.css";

function App() {
  return (
    <main>
      <About />
      <Gallery />
      <DarkModeSwitch />
      {/* Include the DarkModeSwitch component */}
    </main>
  );
}

export default App;
