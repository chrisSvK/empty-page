import React, { useEffect } from "react";
import "./App.css";
import scrollTo from "./assets/scripts/mainPage.js";

function App() {
  useEffect(() => {
    scrollTo();
  }, []);


  return (
    <div>
      <nav>
        <a href="#first-segment">O mne</a>
        <a href="#gallery">Galéria</a>
        <a href="#email-form">Kontakt</a>
      </nav>
      {/* First segment: header with landmark picture, headline, and short text about me */}
      <div className="header">
        <img src={require("./assets/img/header.jpg")} alt="landmark" />
        <h1>Nejaky nadpis</h1>
      </div>
      <div className="first-segment" id="first-segment">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis
          semper nunc non auctor. Nunc tristique vulputate tellus, id aliquam
          tortor rhoncus non. Praesent eu dictum velit. Etiam vitae lacus
          ligula. Vivamus feugiat ex ut molestie placerat. Sed imperdiet lorem
          id euismod dictum. Suspendisse finibus tempus porta. Maecenas ut
          tellus aliquet, aliquam velit quis, fringilla enim. Quisque feugiat
          elit quis orci maximus, in scelerisque nisi cursus. Pellentesque
          semper mauris vel libero viverra maximus. Integer convallis iaculis
          hendrerit. Nullam vulputate odio pulvinar leo viverra lacinia. Donec
          porta lectus vitae dictum tempor. Quisque quis venenatis dui, quis
          viverra eros.
        </p>
      </div>

      {/* Second segment: grid with pictures */}
      <div className="gallery"  id="gallery">
        <img src={require("./assets/img/galler1.jpg")} alt="picture 1" />
        <img src={require("./assets/img/galler2.jpg")} alt="picture 2" />
        <img src={require("./assets/img/galler3.jpg")} alt="picture 3" />
        <img src={require("./assets/img/galler4.jpg")} alt="picture 4" />
        <img src={require("./assets/img/galler5.jpg")} alt="picture 5" />
        {/* Add more pictures as needed */}
      </div>

      {/* Third segment: form to send email */}
      <form class="email-form" id="email-form">
        <h1>Kontaktujte ma</h1>
        <label for="email">Email address:</label>
        <input type="email" id="email" name="email" required />
        <label for="message">Message:</label>
        <textarea id="message" name="message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default App;
