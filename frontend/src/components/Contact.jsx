import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <form
        name="contact"
        method="post"
        className="contact_form"
        data-netlify="true"
        onSubmit="submit"
      >
        <label htmlFor="name" value="nom">
          <input id="name" type="text" name="name" />
        </label>

        <input type="hidden" name="form-name" value="contact" />
        <label htmlFor="email" value="email">
          <input id="email" type="email" name="email" />
        </label>

        <label htmlFor="message" value="message">
          <textarea id="message" name="message" />
        </label>

        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export default Contact;
