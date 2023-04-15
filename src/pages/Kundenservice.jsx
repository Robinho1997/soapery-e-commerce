import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/kundenservice.css";
import { Link } from "react-router-dom";
function Kundenservice() {

    function sendMessage() {
        alert("Vielen Dank für Ihre Nachricht!")
    }
    return(
        <div>
            <Navbar/>
            <div className="flex-container">
                <div className="kundenservice-text">
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
                    <p>Hier geht's zu unseren <Link to="/faq">FAQ</Link></p>
                </div>
                <form>
                <p>Oder schreiben Sie uns direkt!</p>
                    <input type="text" placeholder="Name..." />
                    <input type="email" placeholder="E-mail..."></input>
                    <textarea placeholder="Nachricht..."/>
                    <button onClick={sendMessage}>Send</button>
                </form>
                </div>
            <Footer/>
        </div>
       
    )
}

export default Kundenservice