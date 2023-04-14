import React from "react";

function Footer() {
  return (
    <footer>
      <div className="main-footer">
        <div>
          <p className="header-footer">SOAPERY</p>
          <p className="a">SHOP</p>
          <p className="a">FAQ</p>
          <p className="a">ABOUT</p>
          <p className="a">STORES</p>
        </div>
        <div>
          <p className="header-footer">INFO</p>
          <p className="a">AGB</p>
          <p className="a">WIDERRUF</p>
          <p className="a">DATENSCHUTZ</p>
        </div>
        <div>
          <p className="header-footer">KONTAKT</p>
          <p className="a">KUNDENSERVICE</p>
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
      <p className="footer-center-bottom">
        SOAPERY GMBH - COPYRIGHT © 2023 ALL RIGHTS RESERVED
      </p>
      <p className="footer-center-bottom">IMPRESSUM</p>
    </footer>
  );
}

export default Footer;
