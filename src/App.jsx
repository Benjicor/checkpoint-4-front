import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import BurgerMenu from "./components/BurgerMenu/BurgerMenu";
import Home from "./components/PagesSite/Home/Home";
import News from "./components/PagesSite/News/News";
import Articles from "./components/PagesSite/Articles/Articles";
import Events from "./components/PagesSite/Events/Events";
import Contact from "./components/PagesSite/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  const [siteTitle, setSiteTitle] = useState("");

  return (
    <div className="App">
      <BurgerMenu siteTitle={siteTitle} />
      <Routes>
        <Route path="/" element={<Home setSiteTitle={setSiteTitle} />} />
        <Route path="/news" element={<News setSiteTitle={setSiteTitle} />} />
        <Route
          path="/articles"
          element={<Articles setSiteTitle={setSiteTitle} />}
        />
        <Route
          path="/events"
          element={<Events setSiteTitle={setSiteTitle} />}
        />
        <Route
          path="/contact"
          element={<Contact setSiteTitle={setSiteTitle} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
