import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const Dashboard = () => {
  const navigate = useNavigate();
  const [productTotals, setProductTotals] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/product-totals"
        );
        setProductTotals(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const [data, setData] = useState(() => {
    return {
      labels: [],
      datasets: [],
    };
  });
  const [options, setOptions] = useState({
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  });

  useEffect(() => {
    if (productTotals.length > 0) {
      const chartData = {
        labels: productTotals.map((item) => item.category),
        datasets: [
          {
            label: "Total Value",
            data: productTotals.map((item) => item.total_value),
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
            ],
            borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
            borderWidth: 1,
          },
        ],
      };

      setData(chartData);
    }
  }, [productTotals]);

  const goToHomePage = () => {
    navigate("/");
  };

  return (
    <div>
      <div className="navbar">
        <div className="left-button">
          <button className="button" onClick={goToHomePage}>
            Home
          </button>
        </div>
      </div>
      <div className="header-dashboard">
        <h2 className="title">Total Value of Products</h2>
        {productTotals.length > 0 ? (
          <Bar data={data} options={options} />
        ) : (
          <div>Loading data...</div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
