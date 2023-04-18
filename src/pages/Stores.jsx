import React, { useContext, useState } from "react";
import "../styles/stores.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Context } from "../Context";

function Stores() {
  const [toggleGermany, setToggleGermany] = useState(false);
  const [toggleAustria, setToggleAustria] = useState(false);
  const {germanLanguage} = useContext(Context)

  function changeToggleValue(state) {
    state((prev) => (prev = !prev));
  }
  return (
    <div className="store-page">
      <Navbar />
   
      <div className="store-locations-div">
        <button className="germany-stores-btn" onClick={() => changeToggleValue(setToggleGermany)}>
          {germanLanguage ? "DEUTSCHLAND" : "GERMANY"}
          {toggleGermany ? (
            <span className="material-symbols-outlined">expand_less</span>
          ) : (
            <span className="material-symbols-outlined">expand_more</span>
          )}
        </button>
        {toggleGermany && (
          <div className="store-logos">
            <img src="https://cdn.shopify.com/s/files/1/0538/7478/6473/files/MuellerNebenBluete4c-2622_x45.png?v=1623934595" />
            <img src="https://cdn.shopify.com/s/files/1/0538/7478/6473/files/dm_Logo_Deutschland_x80.png?v=1646906553" />
          </div>
        )}

        <button onClick={() => changeToggleValue(setToggleAustria)}>
        {germanLanguage ? "ÖSTERREICH" : "AUSTRIA"}
          {toggleAustria ? (
            <span className="material-symbols-outlined">expand_less</span>
          ) : (
            <span className="material-symbols-outlined">expand_more</span>
          )}
        </button>

        {toggleAustria && (
          <div className="store-logos">
            <img src="https://cdn.shopify.com/s/files/1/0538/7478/6473/files/MuellerNebenBluete4c-2622_x45.png?v=1623934595" />
            <img src="https://cdn.shopify.com/s/files/1/0538/7478/6473/files/2000px-Bipa_Logo.svg_3x_5dbfcf31-7c12-41a6-bf89-5fdf62f7c93e_x80.png?v=1619099814" />
            <img src="https://cdn.shopify.com/s/files/1/0538/7478/6473/files/dm_Logo_Deutschland_x80.png?v=1646906553" />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Stores;
