import React from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import ProductList from "./Components/ProductList/ProductList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
      </Routes>
    </Router>
  );
};

export default App;
