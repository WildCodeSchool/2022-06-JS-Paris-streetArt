import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Oeuvres from "./components/Oeuvres";
import Description from "./components/Description";
import Description2 from "./components/Description2";
import Description3 from "./components/Description3";
import Description4 from "./components/Description4";
import Description5 from "./components/Description5";
import DescriptionC215 from "./components/DescriptionC215";
import Contact from "./components/Contact";
import SocialFollow from "./components/SocialFollow";
import Artistes from "./components/Artistes";
import Banksy from "./components/Banksy";
import Levalet from "./components/Levalet";
import Mto from "./components/Mto";
import MapConnery from "./components/MapConnery";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/artistes" element={<Artistes />} />
          <Route path="/oeuvres" element={<Oeuvres />} />
          <Route path="/description" element={<Description />} />
          <Route path="/description2" element={<Description2 />} />
          <Route path="/description3" element={<Description3 />} />
          <Route path="/description4" element={<Description4 />} />
          <Route path="/description5" element={<Description5 />} />
          <Route path="/descriptionC215" element={<DescriptionC215 />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/banksy" element={<Banksy />} />
          <Route path="/levalet" element={<Levalet />} />
          <Route path="/mto" element={<Mto />} />
        </Routes>
        <SocialFollow />
        <MapConnery />
      </div>
    </Router>
  );
}

export default App;
