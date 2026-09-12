import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Unicorn from "./pages/Unicorn.jsx";
import Species from "./pages/Species.jsx";
import Realms from "./pages/Realms.jsx";
import Magic from "./pages/Magic.jsx";
import Legends from "./pages/Legends.jsx";
import Journal from "./pages/Journal.jsx";
import FieldNotes from "./pages/FieldNotes.jsx";
import About from "./pages/About.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/unicorn" element={<Unicorn />} />
      <Route path="/species" element={<Species />} />
      <Route path="/realms" element={<Realms />} />
      <Route path="/magic" element={<Magic />} />
      <Route path="/legends" element={<Legends />} />
      <Route path="/journal" element={<Journal />} />
      <Route path="/field-notes" element={<FieldNotes />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}
