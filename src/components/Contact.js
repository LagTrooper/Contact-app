import React from "react";
import "./Contact.css";

const name = "John Duff";
const avatar =
  "https://conseils.mybrocante.fr/wp-content/uploads/2020/05/Pacman.png";
const isOnline = true;

function Contact() {
  return (
    <div className="Contact">
      <img class="avatar" src={avatar} alt="" />
      <div>
        <h3>{name}</h3>
        <div class="status">
          <div class={isOnline ? "status-online" : "status-offline"}></div>
          <p class="status-text">{isOnline ? "online" : "offline"}</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
