import React from "react";
import "../styles/impressum.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function Impressum() {
  return (
    <div>
      <Navbar />
      <p className="impressum-header">IMPRESSUM</p>
      <div className="impressum-div">
        <p className="small-header">Impressum</p>
        <p>SOAPERY GmbH</p>
        <p>c/o Soapery Brands GmbH <br></br>Seifenstraße 1 <br></br>53639 Königswinter<br></br>Deutschland</p>
        
    
        <p>Telefon: +49 (0)6$21/6$442<br></br> (Du erreichst uns Mo.-Fr. 9-17 Uhr)</p>
    
    
        <p>E-Mail: info@muster-soapery.de</p>
     
        <p>Vertreten durch: Max Mustermann</p>
     
        <p>Handelsregister: Amtsgericht Musterstadt, HRB $2$5$3$6$</p>
      
        <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: DE$$535$35$</p>
    
        <p>Inhaltlich verantwortlich gemäß § 18 Abs. 2 MStV: Max Mustermann</p>
      
        <p>
          Streitschlichtung: Die Europäische Kommission stellt eine Plattform
          zur Online-Streitbeilegung (OS) bereit:
          https://ec.europa.eu/consumers/odr. Unsere E-Mail-Adresse finden Sie
          oben im Impressum.
          Verbraucherstreitbeilegung/Universalschlichtungsstelle: Wir sind nicht
          bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>
        <br></br>
        <p>Konzept, Webdesign: Max Mustermann GmbH, www.mustermann-brands.de</p>
        <p>
          Technische Umsetzung, Design-Umsetzung: Mustermann GmbH,
          www.mustermann.de
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Impressum;
