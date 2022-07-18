import React from "react";
import { Link } from "react-router-dom";
import banksy from "../image/banksy.jpg";

function Artistes() {
  return (
    <div className="Artistes">
      <Link to="/banksy">
        <div className="espace" />
        <img src={banksy} alt="banksy" height={200} width={250} />
      </Link>
      <Link to="/levalet">
        <img
          src="https://www.hoteldegallifet.com/images/pages/content_image1/Levalet.jpg?p=main-image"
          alt="levalet"
          height={200}
          width={250}
        />
      </Link>
      <Link to="/mto">
        <img
          src="https://cdn-s-www.ledauphine.com/images/6CF7AB48-A1D5-45C3-A966-ACCADC9EA94E/NW_detail_M/dr-1576680650.jpg"
          alt="mto"
          height={200}
          width={250}
        />
      </Link>
    </div>
  );
}

export default Artistes;
