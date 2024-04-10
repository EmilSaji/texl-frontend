import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import ProductList from "./Components/ProductList/ProductList";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import ProductContext from "./ProductContext";
import CreateProduct from "./Components/CreateProduct/CreateProduct";
import Dashboard from "./Components/Dashboard/Dashboard";

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
          <Route path="/create" element={<CreateProduct />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </ProductContext.Provider>
  );
};

export default App;
