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
        </div>
        <div>
          <p className="header-footer">VERSAND</p>
        </div>
      </div>
      <p className="footer-center-bottom">SOAPERY GMBH - COPYRIGHT © 2023 ALL RIGHTS RESERVED</p>
      <p className="footer-center-bottom">IMPRESSUM</p>
    </footer>
  );
}

export default Footer;
