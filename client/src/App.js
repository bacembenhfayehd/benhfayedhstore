import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import "./App.css"

import Home from './Pages/Home/Home'
import Product from './Pages/Product/Product'
import Products from './Pages/Products/Products'


function App() {
  return (
    <Router>
      <Routes>
        {/* la page d'accueil */}
        <Route path="/" element={<Layout><Home /></Layout>} />

        {/* page de toutes les produits */}
        <Route path="/products/:id" element={<Layout><Products /></Layout>} />

        {/* page d'un  seul produit */}
        <Route path="/product/:id" element={<Layout><Product /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;