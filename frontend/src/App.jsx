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
import MapConnery from "./components/MapConnery";
import MapProvins from "./components/MapProvins";
import MapPoncet from "./components/MapPoncet";
import MapEco from "./components/MapEco";
import MapMalle from "./components/MapMalle";
import MapRose from "./components/MapRose";
import MapLouisXIII from "./components/MapLouisXIII";
import DescriptionPoncet from "./components/DescriptionPoncet";
import DescriptionLouisXIII from "./components/DescriptionLouisXIII";
import DescriptionMalle from "./components/DescriptionMalle";
import DescriptionRose from "./components/DescriptionRose";
import DescriptionConnery from "./components/DescriptionConnery";
import DescriptionEco from "./components/DescriptionEco";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/artistes" element={<Artistes />} />
          <Route path="/oeuvres" element={<Oeuvres />} />
          <Route path="/localisation" element={<MapProvins />} />
          <Route path="/descriptionPoncet" element={<DescriptionPoncet />} />
          <Route path="/MapPoncet" element={<MapPoncet />} />
          <Route
            path="/descriptionLouisXIII"
            element={<DescriptionLouisXIII />}
          />
          <Route path="/MapLouisXIII" element={<MapLouisXIII />} />
          <Route path="/descriptionMalle" element={<DescriptionMalle />} />
          <Route path="/MapMalle" element={<MapMalle />} />
          <Route path="/descriptionRose" element={<DescriptionRose />} />
          <Route path="/MapRose" element={<MapRose />} />
          <Route path="/descriptionConnery" element={<DescriptionConnery />} />
          <Route path="/MapConnery" element={<MapConnery />} />
          <Route path="/descriptionEco" element={<DescriptionEco />} />
          <Route path="/MapEco" element={<MapEco />} />
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
