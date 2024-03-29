import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./CSS/App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import Oeuvres from "./components/Oeuvres";
import DescriptionC215 from "./components/DescriptionC215";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
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
import Présentation from "./components/Presentation";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Présentation />} />
          <Route path="/home" element={<Home />} />
          <Route path="/artistes" element={<Artistes />} />
          <Route path="/gallerie" element={<Oeuvres />} />
          <Route path="/localisation" element={<Localisation />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Routes>
          <Route path="/descriptionPoncet" element={<DescriptionPoncet />} />
          <Route
            path="/descriptionLouisXIII"
            element={<DescriptionLouisXIII />}
          />
          <Route path="/descriptionMalle" element={<DescriptionMalle />} />
          <Route path="/descriptionRose" element={<DescriptionRose />} />
          <Route path="/descriptionConnery" element={<DescriptionConnery />} />
          <Route path="/descriptionEco" element={<DescriptionEco />} />
          <Route path="/descriptionC215" element={<DescriptionC215 />} />
          <Route path="/banksy" element={<Banksy />} />
          <Route path="/levalet" element={<Levalet />} />
          <Route path="/mto" element={<Mto />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
