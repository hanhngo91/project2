import React, { useEffect, useState } from "react";
import "./ProductDetailAdmin.scss";
import { storage } from "../../firebase";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import axios from "axios";

function ProductDetailAdmin({ onChangeStateDetail, openShowDetail }) {
  const [product, setProduct] = useState({});

  const loadProducts = async (id) => {
    const product = await axios.get(`http://localhost:8000/products/${id}`);
    setProduct(product.data);
  };
  useEffect(() => {
    loadProducts();
  }, []);

  const handleChangeStateDetail = (e) => {
    onChangeStateDetail(false);
  };
  return (
    <div className="products-detail-btn">
      <div>
        <h3>Product Detail</h3>
        <form>
          <table>
            <tbody>
              <tr>
                <td>
                  <label>Title</label>
                </td>
                <td>{product.title}</td>
              </tr>
              <tr>
                <td>
                  <label>Image</label>
                </td>
                <td className="image">{product.img}</td>
              </tr>
              <tr>
                <td>
                  <label>New products?</label> <br />
                </td>
                <td>{product.isNew === true ? <>New</> : <>Old</>}</td>
              </tr>
              <tr>
                <td>
                  <label>Old price</label> <br />
                </td>
                <td>{product.oldPrice === 0 ? product.oldPrice : ""}</td>
              </tr>
              <tr>
                <td>
                  <label>Price</label> <br />
                </td>
                <td>{product.price}</td>
              </tr>
              <tr>
                <td>
                  <label>Description</label> <br />
                </td>
                <td>{product.desc}</td>
              </tr>
              <tr>
                <td>
                  <label>Type</label> <br />
                </td>
                <td>{product.type}</td>
              </tr>
              <tr>
                <td>
                  <label>Category</label> <br />
                </td>
                <td>{product.category}</td>
              </tr>
            </tbody>
          </table>
          <button onClick={handleChangeStateDetail} value={openShowDetail}>
            Close
          </button>
        </form>
      </div>
    </div>
  );
}

export default ProductDetailAdmin;
