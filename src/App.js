import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Header from './components/header/Header';
import About from "./components/about/About"
import Footer from "./components/footer/Footer";
import Projects from "./components/project/Projects";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/projects"
            element={<Projects />}
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </>
    </Router>
  );
}

export default App;
