import React, { useState } from "react";
import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Stores from "./pages/Stores";
import Faq from "./pages/Faq";
import Agb from "./pages/Agb";
import Widerruf from "./pages/Widerruf";
import Datenschutz from "./pages/Datenschutz";
import Kundenservice from "./pages/Kundenservice";
import Impressum from "./pages/Impressum";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/stores" element={<Stores />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/agb" element={<Agb />} />
        <Route path="/widerruf" element={<Widerruf />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
        <Route path="/kundenservice" element={<Kundenservice />} />
        <Route path="/impressum" element={<Impressum />} />
      </Routes>
    </div>
  );
}

export default App;
