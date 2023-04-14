import React, { useState } from "react";
import "../styles/stores.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Stores() {
  const [toggleGermany, setToggleGermany] = useState(false);
  const [toggleAustria, setToggleAustria] = useState(false);

  function changeToggleValue(state) {
    state((prev) => (prev = !prev));
  }
  return (
    <div className="store-page">
      <Navbar />
      <img className="store-img" src="https://images.unsplash.com/photo-1562731789-8324cbe28333?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
      <div className="store-locations-div">
        <button onClick={() => changeToggleValue(setToggleGermany)}>
          DEUTSCHLAND
          {toggleGermany ? (
            <span class="material-symbols-outlined">expand_less</span>
          ) : (
            <span class="material-symbols-outlined">expand_more</span>
          )}
        </button>
        {toggleGermany && (
          <div className="store-logos margin-bottom">
            <img src="https://cdn.shopify.com/s/files/1/0538/7478/6473/files/MuellerNebenBluete4c-2622_x45.png?v=1623934595" />
            <img src="https://cdn.shopify.com/s/files/1/0538/7478/6473/files/dm_Logo_Deutschland_x80.png?v=1646906553" />
          </div>
        )}

        <button onClick={() => changeToggleValue(setToggleAustria)}>
          ÖSTERREICH
          {toggleAustria ? (
            <span class="material-symbols-outlined">expand_less</span>
          ) : (
            <span class="material-symbols-outlined">expand_more</span>
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
