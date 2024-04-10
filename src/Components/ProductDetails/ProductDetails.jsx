import React, { useContext, useState } from "react";
import axios from "axios";
import "./ProductDetails.css";
import ProductContext from "../../ProductContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ProductDetails = () => {
  const navigate = useNavigate();

  const { productDetails, setProductDetails } = useContext(ProductContext);
  const [details, setDetails] = useState({
    name: productDetails.name,
    category: productDetails.category,
    price: productDetails.price,
    quantity: productDetails.quantity,
  });

  const [isEditable, setIsEditable] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  const toggleEdit = () => {
    setIsEditable(!isEditable);
  };

  const saveProduct = async () => {
    try {
      const response = await axios.put(
        `https://blue-green-caridea-wrap.cyclic.app/update-products/${productDetails.id}`,
        {
          name: details.name,
          category: details.category,
          price: details.price,
          quantity: details.quantity,
        }
      );
      await fetchProduct();
      Swal.fire({
        title: "Done",
        text: "Product Updated",
        icon: "success",
      });
    } catch (error) {
      Swal.fire({
        title: "Failed",
        text: "Failed to update product",
        icon: "error",
      });
      console.error("Error saving data:", error);
    }
  };

  const fetchProduct = async () => {
    try {
      const response = await axios.get(
        `https://blue-green-caridea-wrap.cyclic.app/products/${productDetails.id}`
      );
      setProductDetails(response.data);
      setIsEditable();
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const backToList = () => {
    navigate("/products");
  };

  const deleteProduct = async () => {
    try {
      const response = await axios.delete(
        `https://blue-green-caridea-wrap.cyclic.app/delete-products/${productDetails.id}`
      );
      Swal.fire({
        title: "Done",
        text: "Product Deleted",
        icon: "success",
      });
      navigate("/products");
    } catch (error) {
      Swal.fire({
        title: "Failed",
        text: "Failed to delete product",
        icon: "error",
      });
      console.log("Error", error);
    }
  };

  return (
    <div>
      <header className="navbar-2">
        <div className="header-text">Product Details</div>
      </header>
      <div className="container">
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>:</td>
              {isEditable ? (
                <td>
                  <input
                    type="text"
                    name="name"
                    value={details.name}
                    onChange={handleInputChange}
                  />
                </td>
              ) : (
                <td>{productDetails.name}</td>
              )}
            </tr>
            <tr>
              <td>Category</td>
              <td>:</td>
              {isEditable ? (
                <td>
                  <input
                    type="text"
                    name="category"
                    value={details.category}
                    onChange={handleInputChange}
                  />
                </td>
              ) : (
                <td>{productDetails.category}</td>
              )}
            </tr>
            <tr>
              <td>Price</td>
              <td>:</td>
              {isEditable ? (
                <td>
                  <input
                    type="number"
                    name="price"
                    value={details.price}
                    onChange={handleInputChange}
                  />
                </td>
              ) : (
                <td>{productDetails.price}</td>
              )}
            </tr>
            <tr>
              <td>Quantity</td>
              <td>:</td>
              {isEditable ? (
                <td>
                  <input
                    type="number"
                    name="quantity"
                    value={details.quantity}
                    onChange={handleInputChange}
                  />
                </td>
              ) : (
                <td>{productDetails.quantity}</td>
              )}
            </tr>
          </tbody>
        </table>
        <div className="btn-cls">
          <button
            className="green-button-2"
            onClick={isEditable ? saveProduct : toggleEdit}
          >
            {isEditable ? "Save" : "Edit"}
          </button>
          <button
            className={isEditable ? "red-button" : "blue-button"}
            onClick={isEditable ? toggleEdit : backToList}
          >
            {isEditable ? "Cancel" : "Back To Product List"}
          </button>
          {!isEditable ? (
            <button className="red-button" onClick={deleteProduct}>
              Delete
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
