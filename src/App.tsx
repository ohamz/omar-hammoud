import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import NavBar from "./components/NavBar";
import NavPage from "./components/NavPage";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <NavPage></NavPage>
    </>
  );
}

export default App;
