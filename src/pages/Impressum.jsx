import React, { useContext } from "react";
import "../styles/impressum.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Context } from "../Context";

function Impressum() {
  const { germanLanguage } = useContext(Context);
  return (
    <div>
      <Navbar />
      <p className="impressum-header">IMPRESSUM</p>
      {germanLanguage ? (
        <div className="impressum-div">
          <p className="small-header">Impressum</p>
          <p>SOAPERY GmbH</p>
          <p>
            c/o Soapery Brands GmbH <br></br>Seifenstraße 1 <br></br>53639
            Königswinter<br></br>Deutschland
          </p>
          <p>
            Telefon: +49 (0)6$21/6$442<br></br> (Du erreichst uns Mo.-Fr. 9-17
            Uhr)
          </p>
          <p>E-Mail: info@muster-soapery.de</p>
          <p>Vertreten durch: Max Mustermann</p>
          <p>Handelsregister: Amtsgericht Musterstadt, HRB $2$5$3$6$</p>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: DE$$535$35$
          </p>
          <p>
            Inhaltlich verantwortlich gemäß § 18 Abs. 2 MStV: Max Mustermann
          </p>
          <p>
            Streitschlichtung: Die Europäische Kommission stellt eine Plattform
            zur Online-Streitbeilegung (OS) bereit:
            https://ec.europa.eu/consumers/odr. Unsere E-Mail-Adresse finden Sie
            oben im Impressum.
            Verbraucherstreitbeilegung/Universalschlichtungsstelle: Wir sind
            nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor
            einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
          <br></br>
          <p>
            Konzept, Webdesign: Max Mustermann GmbH, www.mustermann-brands.de
          </p>
          <p>
            Technische Umsetzung, Design-Umsetzung: Mustermann GmbH,
            www.mustermann.de
          </p>
        </div>
      ) : (
        <div className="impressum-div">
          <p className="small-header">Impressum</p>
          <p>SOAPERY GmbH</p>
          <p>
            c/o Soapery Brands GmbH <br></br>Seifenstraße 1 <br></br>53639
            Königswinter<br></br>Germany
          </p>
          <p>
            Phone: +49 (0)6$21/6$442<br></br> (You can reach us Mon.-Fri. 9-17
            Uhr)
          </p>
          <p>E-Mail: info@muster-soapery.de</p>
          <p>Represented by Max Mustermann</p>
          <p>Merchant register: Local Court Musterstadt, HRB $2$5$3$6$</p>
          <p>VAT identification number according to § 27a UStG: DE$$535$35$</p>
          <p>
            Contentwise responsible according to § 18 Abs. 2 MStV: Max
            Mustermann
          </p>
          <p>
            Dispute Resolution: The European Commission provides a platform for
            online dispute resolution (OS): https://ec.europa.eu/consumers/odr.
            Our email address can be found at the top of the imprint. Consumer
            Dispute Resolution/Universal Dispute Resolution Center: We are not
            willing or obligated to participate in dispute resolution
            proceedings before a consumer arbitration board.
          </p>
          <br></br>
          <p>
            Concept, web design: Max Mustermann GmbH, www.mustermann-brands.de
          </p>
          <p>
            Technical implementation, design implementation: Mustermann GmbH,
            www.mustermann.de
          </p>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Impressum;
