import React, { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// styles
import "./styles/App.css";
// components
const Hero = lazy(() => import("./pages/Hero"));
const _404_ = lazy(() => import("./pages/_404_"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />}></Route>
          <Route path="*" element={<_404_ />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
