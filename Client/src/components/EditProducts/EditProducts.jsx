import React, { useEffect, useState } from "react";
import "./EditProducts.scss";
import { storage } from "../../firebase";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import axios from "axios";
import { useParams } from "react-router-dom";

function EditProducts({ onChangeStateEdit, openShowEdit }) {
  const [product, setProduct] = useState({
    title: "",
    img: "",
    oldPrice: "",
    isNew: false,
    price: "",
    desc: "",
    type: "",
    category: "",
  });

  const loadProducts = async () => {
    let products = await axios.get(`http://localhost:8000/products/${id}`);
    setProduct(products.data);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const { title, img, oldPrice, isNew, price, desc, type, category } = product;
  const id = useParams();

  const handleInputChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async (e) => {
    e.preventdefault();
    await axios.put(`http://localhost:8000/products/${id}`, product);
    window.location.reload();
  };
  //Function change modal's state:
  const handleChangeStateChild = () => {
    onChangeStateEdit(false);
  };

  return (
    <div className="edit-products-btn">
      <div>
        <h3>Edit products</h3>
        <form onSubmit={(e) => handleSave(e)}>
          <table>
            <tbody>
              <tr>
                <td>
                  <label>Title</label>
                </td>
                <td>
                  <input
                    type="text"
                    name="title"
                    value={title}
                    placeholder="Product name..."
                    onInput={(e) => handleInputChange(e)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Image</label>
                </td>
                <td className="image">
                  <label id="addImage" htmlFor="file">
                    Add image
                  </label>
                  {/* {imageUrl == "" ? "" : <img src={imageUrl} alt="" />} */}
                  <input
                    id="file"
                    type="file"
                    name="img"
                    value={img}
                    onInput={(e) => handleInputChange(e)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>New products?</label> <br />
                </td>
                <td>
                  <input
                    id="checkbox"
                    name="isNew"
                    type="checkbox"
                    value={isNew}
                    onInput={(e) => handleInputChange(e)}
                  />
                  <label id="status" htmlFor="isNew">
                    true
                  </label>
                </td>
              </tr>
              <tr>
                <td>
                  <label>Old price</label> <br />
                </td>
                <td>
                  <input
                    type="text"
                    name="oldPrice"
                    value={oldPrice}
                    placeholder="Original price..."
                    onInput={(e) => handleInputChange(e)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Price</label> <br />
                </td>
                <td>
                  <input
                    type="text"
                    name="price"
                    value={price}
                    placeholder="Current price..."
                    onInput={(e) => handleInputChange(e)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Description</label> <br />
                </td>
                <td>
                  <input
                    type="text"
                    name="desc"
                    value={desc}
                    placeholder="Products' description..."
                    onInput={(e) => handleInputChange(e)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Type</label> <br />
                </td>
                <td>
                  <select
                    id="type"
                    name="type"
                    value={type}
                    onInput={(e) => handleInputChange(e)}
                  >
                    <option>------Choose a type------</option>
                    <option value="normal">Normal</option>
                    <option value="featured">Featured</option>
                    <option value="bestsellers">Bestsellers</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <label>Category</label> <br />
                </td>
                <td>
                  <select
                    name="category"
                    id="category"
                    value={category}
                    onInput={(e) => handleInputChange(e)}
                  >
                    <option>---Choose a category---</option>
                    <option value="boba tea">Boba tea</option>
                    <option value="sparkling tea">Sparkling tea</option>
                    <option value="specialties">Specialties</option>
                    <option value="extras">Extras</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
          <button>Save</button>
          <button onClick={handleChangeStateChild} value={openShowEdit}>
            Close
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditProducts;
