import Header from "./Layout/Header";
import React from "react";
import { Outlet } from "react-router-dom";
import "../styles/reset.css";
import "../styles/common.css";
import "../styles/global.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
