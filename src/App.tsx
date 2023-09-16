import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/global.css";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/slash-21" element={<>hello slash 21</>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
