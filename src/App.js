import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import ProductList from "./Components/ProductList/ProductList";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import ProductContext  from "./ProductContext";

const App = () => {
  const [productDetails, setProductDetails] = useState(null);

  const value = {
    productDetails,
    setProductDetails,
  };

  return (
    <ProductContext.Provider value={value}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/details" element={<ProductDetails />} />
        </Routes>
      </Router>
    </ProductContext.Provider>
  );
};

export default App;
