import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const listProducts = () => {
    navigate("/products");
  };

  const dashboard = () => {
    navigate("/dashboard");
  };

  return (
    <div>
      <div className="navbar">
        <div className="header-text">Welcome</div>
      </div>
      <div className="container">
        <button className="btn" onClick={dashboard}>
          Dashboard
        </button>
        <button className="btn" onClick={listProducts}>
          List Products
        </button>
      </div>
    </div>
  );
};

export default Home;
