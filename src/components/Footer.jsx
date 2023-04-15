import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="main-footer">
        <div className="column-footer">
          <p className="header-footer">SOAPERY</p>
          <Link to="/shop" className="a">SHOP</Link>
          <Link to="/faq" className="a">FAQ</Link>
          <Link to="/about" className="a">ABOUT</Link>
          <Link to="/stores" className="a">STORES</Link>
        </div>
        <div className="column-footer">
          <p className="header-footer">INFO</p>
          <Link to="/agb" className="a">AGB</Link>
          <Link to="/widerruf" className="a">WIDERRUF</Link>
          <Link to="/datenschutz" className="a">DATENSCHUTZ</Link>
        </div>
        <div className="column-footer">
          <p className="header-footer">KONTAKT</p>
          <Link to="/kundenservice" className="a">KUNDENSERVICE</Link>
        </div>
        <div>
          <p className="header-footer">ZAHLUNGSARTEN</p>
          <div  className="payment-logos">
          <div className="pair-logos">
          <img src="https://cdn.shopify.com/s/files/1/0538/7478/6473/files/paypal.png?v=1614936047" />
          <img src="https://cdn.shopify.com/s/files/1/0538/7478/6473/files/Klarna_Logo_Primary_Black_3x_05aca70d-74eb-4d1f-89cd-17fcd48ada0f.png?v=1617690024" />
          </div>
          <div className="pair-logos">
          <img src="https://cdn.shopify.com/s/files/1/0538/7478/6473/files/amex.png?v=1614936088" />
          <img src="https://cdn.shopify.com/s/files/1/0538/7478/6473/files/mastercard.png?v=1614936047" />
          </div>
          <div className="pair-logos">
          <img src="https://cdn.shopify.com/s/files/1/0538/7478/6473/files/sepa.png?v=1614936047" />
          <img src="https://cdn.shopify.com/s/files/1/0538/7478/6473/files/visa.png?v=1614936047" />
          </div>
         
          </div>
        </div>
        <div>
          <p className="header-footer">VERSAND</p>
          <img className="dhl-logo" src="https://cdn.shopify.com/s/files/1/0538/7478/6473/files/dhl.png?v=1614936047"/>
        </div>
      </div>
      <div className="footer-center-bottom">
      <p >
        SOAPERY GMBH - COPYRIGHT © 2023 ALL RIGHTS RESERVED
      </p>
      <Link to="/impressum">IMPRESSUM</Link>
      </div>
    </footer>
  );
}

export default Footer;
