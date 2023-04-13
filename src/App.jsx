import React, { useState } from "react";
import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Stores from "./pages/Stores";
import Soapery from "./pages/Soapery";
// lädt alle in app
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/stores" element={<Stores />}></Route>
        <Route path="/soapery" element={<Soapery />}></Route>
      </Routes>
    </div>
  );
}

export default App;
