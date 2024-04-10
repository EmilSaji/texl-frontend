import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

const CreateProduct = () => {
  const navigate = useNavigate();

  const [details, setDetails] = useState({
    name: "",
    category: "",
    price: "",
    quantity: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDetails({ ...details, [name]: value });
  };

  const createProduct = async () => {
    try {
      await axios.post("http://localhost:5000/create-product", details);
      setDetails({
        name: "",
        category: "",
        price: "",
        quantity: "",
      });
      Swal.fire({
        title: "Done",
        text: "Product Created",
        icon: "success",
      });
    } catch (error) {
      Swal.fire({
        title: "Failed",
        text: "Failed to Create Product",
        icon: "error",
      });
    }
  };

  const backToList = () => {
    navigate("/products");
  };

  return (
    <div>
      <header className="navbar-2">
        <div className="header-text">Create Product</div>
      </header>
      <div className="container">
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>:</td>
              <td>
                <input
                  type="text"
                  name="name"
                  value={details.name}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr>
              <td>Category</td>
              <td>:</td>
              <td>
                <input
                  type="text"
                  name="category"
                  value={details.category}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr>
              <td>Price</td>
              <td>:</td>
              <td>
                <input
                  type="number"
                  name="price"
                  value={details.price}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr>
              <td>Quantity</td>
              <td>:</td>
              <td>
                <input
                  type="number"
                  name="quantity"
                  value={details.quantity}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="btn-cls">
          <button className="green-button-2" onClick={() => createProduct()}>
            Create
          </button>
          <button className="blue-button" onClick={backToList}>
            Back To Product List
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
