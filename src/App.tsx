import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/global.css";
import Home from "./pages/Home";
import Slash21 from "./pages/Slash21";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/slash-21" element={<Slash21 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
