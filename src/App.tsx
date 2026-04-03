import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { Skills } from "./pages/Skills";
import { Timeline } from "./pages/Timeline";
import { ProjectDetail } from "./pages/ProjectDetail";
import { CVViewer } from "./pages/CVViewer";
import { AtsCV } from "./components/AtsCV";
import { ScrollToTop } from "./components/ScrollToTop";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projets" element={<Projects />} />
        <Route path="/projets/:id" element={<ProjectDetail />} />
        <Route path="/competences" element={<Skills />} />
        <Route path="/parcours" element={<Timeline />} />
        <Route path="/cv" element={<CVViewer />} />
        <Route path="/cv-ats" element={<AtsCV />} />
      </Routes>
    </Router>
  );
}
