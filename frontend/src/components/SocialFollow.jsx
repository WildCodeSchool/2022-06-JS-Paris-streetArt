import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function SocialFollow() {
  return (
    <footer>
      <div className="social-container">
        <a
          href="https://www.facebook.com/c215stencils/"
          className="facebook social"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="https://twitter.com/christianguemy" className="twitter social">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a
          href="https://www.instagram.com/christianguemy/?hl=fr"
          className="instagram social"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <div>
          <h4>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/All_rights_reserved_logo.svg/1200px-All_rights_reserved_logo.svg.png"
              alt=""
              width={10}
              height={10}
            />
          </h4>
          <h5>Site crée par Marion , Sylvanie, Alexandre et Cédric</h5>
        </div>
      </div>
    </footer>
  );
}

export default SocialFollow;
