import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Oeuvres from "./components/Oeuvres";
import DescriptionC215 from "./components/DescriptionC215";
import Contact from "./components/Contact";
import SocialFollow from "./components/SocialFollow";
import Artistes from "./components/Artistes";
import Banksy from "./components/Banksy";
import Levalet from "./components/Levalet";
import Mto from "./components/Mto";
import DescriptionPoncet from "./components/DescriptionPoncet";
import DescriptionLouisXIII from "./components/DescriptionLouisXIII";
import DescriptionMalle from "./components/DescriptionMalle";
import DescriptionRose from "./components/DescriptionRose";
import DescriptionConnery from "./components/DescriptionConnery";
import DescriptionEco from "./components/DescriptionEco";
import Localisation from "./components/Localisation";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/artistes" element={<Artistes />} />
          <Route path="/oeuvres" element={<Oeuvres />} />
          <Route path="/localisation" element={<Localisation />} />
          <Route path="/descriptionPoncet" element={<DescriptionPoncet />} />
        </Routes>
        <Routes>
          <Route
            path="/descriptionLouisXIII"
            element={<DescriptionLouisXIII />}
          />
          <Route path="/descriptionMalle" element={<DescriptionMalle />} />
          <Route path="/descriptionRose" element={<DescriptionRose />} />
          <Route path="/descriptionConnery" element={<DescriptionConnery />} />
          <Route path="/descriptionEco" element={<DescriptionEco />} />
          <Route path="/descriptionC215" element={<DescriptionC215 />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/banksy" element={<Banksy />} />
          <Route path="/levalet" element={<Levalet />} />
          <Route path="/mto" element={<Mto />} />
        </Routes>
        <SocialFollow />
      </div>
    </Router>
  );
}

export default App;
