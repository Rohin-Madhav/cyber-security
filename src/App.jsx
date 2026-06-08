import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Qcsp from "./pages/courses/Qcsp";
import Contact from "./pages/Contact";
import Ceh from "./pages/courses/Ceh";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="courses/QCSP" element={<Qcsp />} />
            <Route path="courses/CEH" element={<Ceh />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
