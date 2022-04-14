import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import BurgerMenu from './components/BurgerMenu/BurgerMenu';
import Home from './components/PagesSite/Home/Home';
import Contact from './components/PagesSite/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  const [siteTitle, setSiteTitle] = useState('');

  return (
    <div className="App">
      <BurgerMenu siteTitle={siteTitle} />
      <Routes>
        <Route path="/" element={<Home setSiteTitle={setSiteTitle} />} />
        <Route
          path="/Contact"
          element={<Contact setSiteTitle={setSiteTitle} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
