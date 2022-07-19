/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { Link } from "react-router-dom";
import C215 from "../image/C215.jpg";
import "../CSS/Description.css";

function Home() {
  return (
    <div className="containercard">
      <h1> Artiste du Mois</h1>
      <h3>C215</h3>
      <Link to="/descriptionC215">
        <img id="artist-of-month" src={C215} alt="C215" />
      </Link>
    </div>
  );
}

export default Home;
