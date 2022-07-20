import React from "react";
import "../CSS/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <h1>CONTACTEZ-NOUS</h1>
      <form
        name="contact"
        method="post"
        className="contact_form"
        data-netlify="true"
        onSubmit="submit"
      >
        <label htmlFor="name" value="nom">
          Nom :
          <input id="name" type="text" name="name" />
        </label>

        <input type="hidden" name="form-name" value="contact" />
        <label htmlFor="email" value="email">
          Email :
          <input id="email" type="email" name="email" />
        </label>

        <label htmlFor="message" value="message">
          Message :
          <textarea id="message" name="message" />
        </label>

        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export default Contact;
