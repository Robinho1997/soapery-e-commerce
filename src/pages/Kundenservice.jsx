import React,{useContext} from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/kundenservice.css";
import { Link } from "react-router-dom";
import { Context } from "../Context";

function Kundenservice() {
  const { germanLanguage } = useContext(Context);
  function sendMessage() {
    alert("Vielen Dank für Ihre Nachricht!");
  }
  return (
    <div>
      <Navbar />
      <div className="flex-container">
        {germanLanguage ? <div className="kundenservice-text">
          <h1>Kundenservice</h1>
          <br></br>
          <p>Du hast Fragen zu Deiner Bestellung?</p>
          <p>Unser Kundenservice hilft Dir gerne weiter:</p>
          <br></br>
          <p>+49 800 3$8$002$</p>
          <p>Mo–Fr 9–17.00</p>
          <p>shop@soapery-muster.de</p>
          <br></br>
          <p>Du hast allgemeine Fragen?</p>
          <p>
            Hier geht's zu unseren <Link to="/faq">FAQ</Link>
          </p>
        </div> : <div className="kundenservice-text">
          <h1>Customer Service</h1>
          <br></br>
          <p>Do you have any questions about your order?</p>
          <p>Our customer service will be happy to help you:</p>
          <br></br>
          <p>+49 800 3$8$002$</p>
          <p>Mon–Fri 9am–5pm</p>
          <p>shop@soapery-muster.de</p>
          <br></br>
          <p>Do you have general questions?</p>
          <p>
            Here goes to ours <Link to="/faq">FAQ</Link>
          </p>
        </div>}
        <form>
          <p>{germanLanguage ? "Oder schreiben Sie uns direkt" : "Or contact us directly!"}</p>
          <input type="text" placeholder="Name..." />
          <input type="email" placeholder="E-mail..."></input>
          <textarea placeholder="Nachricht..." />
          <button onClick={sendMessage}>{germanLanguage ? "Senden" : "Send"}</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Kundenservice;
