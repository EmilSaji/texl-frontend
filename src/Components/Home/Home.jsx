import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const listProducts = () => {
    navigate("/products");
  };
  return (
    <div className="container">
      <button className="btn">Dashboard</button>
      <button className="btn" onClick={listProducts}>
        List Products
      </button>
    </div>
  );
};

export default Home;
