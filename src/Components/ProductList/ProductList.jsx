import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import "./ProductList.css";
import { LuMousePointerClick } from "react-icons/lu";
import ProductContext from "../../ProductContext";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const navigate = useNavigate();
  const { productDetails, setProductDetails } = useContext(ProductContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const goToHomePage = () => {
    navigate("/");
  };

  const editProduct = (product) => {
    setProductDetails(product);
    navigate("/details");
  };

  const createProduct = () => {
    navigate("/create");
  };

  return (
    <div>
      <div className="navbar">
        <div className="left-button">
          <button className="button" onClick={goToHomePage}>
            Home
          </button>
        </div>
        <div className="header-text">Products</div>
        <div className="right-buttons">
          <button className="button " onClick={createProduct}>
            Create Product
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="table-container">
        {products.length > 0 ? (
          <table className="table">
            <thead>
              <tr>
                <th>Sl No.</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={product.id}>
                  <td>{index + 1}</td>
                  <td>{product.name}</td>
                  <td>{product.category}</td>
                  <td>{product.price}</td>
                  <td>{product.quantity}</td>
                  <td>
                    <button
                      className="green-button"
                      onClick={() => editProduct(product)}
                    >
                      <LuMousePointerClick /> Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="no-prod">No Products Available!!</div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
