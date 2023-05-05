import React, { useState } from "react";
import "./AddProducts.scss";
import { storage } from "../../firebase";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import axios from "axios";

function AddProducts({ onChangeState, openShowAdd }) {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [status, setStatus] = useState(false);
  const [oldPrice, setOldPrice] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const [desc, setDesc] = useState("");
  const [newProducts, setNewProducts] = useState({});

  const handleChangeStateChil = () => {
    onChangeState(false);
  };

  // Tạo storage lưu trữ từ dịch vụ của firebase
  const imagesListRef = ref(storage, "images/");

  // Viết hàm upload
  const uploadFile = (e) => {
    let imageUpload = e;
    if (imageUpload == null) return;

    const imageRef = ref(storage, `images/${imageUpload.name}`);

    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrl(url);
        console.log(url);
      });
    });
  };

  function resetInput() {
    setTitle("");
    setImageUrl("");
    setStatus(false);
    setOldPrice("");
    setPrice("");
    setType("");
    setCategory("");
    setDesc("");
  }

  const handleAdd = async (e) => {
    e.preventDefault();
    const makeId = Math.floor(new Date());

    const newProduct = {
      id: makeId,
      title: title,
      img: imageUrl,
      isNew: Boolean(status),
      oldPrice: Number(oldPrice).toFixed(2),
      price: Number(price).toFixed(2),
      desc: desc,
      type: type,
      category: category,
    };
    setNewProducts(newProduct);
    await axios.post("http://localhost:8000/products", newProduct);
    window.location.reload();
    resetInput();
  };
  return (
    <div className="add-products-btn">
      <div>
        <h3>Add products</h3>
        <form onSubmit={handleAdd}>
          <table>
            <tbody>
              <tr>
                <td>
                  <label>Title</label>
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="Product name..."
                    onChange={(e) => setTitle(e.target.value)}
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
                  {imageUrl == "" ? "" : <img src={imageUrl} alt="" />}
                  <input
                    id="file"
                    type="file"
                    onChange={(e) => uploadFile(e.target.files[0])}
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
                    placeholder="true or false"
                    onChange={(e) => setStatus(e.target.checked)}
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
                    placeholder="Original price..."
                    onChange={(e) => setOldPrice(e.target.value)}
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
                    placeholder="Current price..."
                    onChange={(e) => setPrice(e.target.value)}
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
                    placeholder="Products' description..."
                    onChange={(e) => setDesc(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Type</label> <br />
                </td>
                <td>
                  <select
                    name="type"
                    id="type"
                    onChange={(e) => setType(e.target.value)}
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
                    onChange={(e) => setCategory(e.target.value)}
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
          <button>Add</button>
          <button onClick={handleChangeStateChil} value={openShowAdd}>
            Close
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProducts;
