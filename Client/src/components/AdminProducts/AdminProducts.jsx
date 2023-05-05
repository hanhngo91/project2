import React, { useEffect, useState } from "react";
import "./AdminProducts.scss";
import AddProducts from "../AddProducts/AddProducts";
import EditProducts from "../EditProducts/EditProducts";
import ProductDetailAdmin from "../ProductDetailAdmin/ProductDetailAdmin";
import axios from "axios";

function AdminProducts() {
  const [openAddProducts, setOpenAddProducts] = useState(false);
  const [openEditProducts, setOpenEditProducts] = useState(false);
  const [openProductDetail, setOpenProductDetail] = useState(false);
  const [products, setProducts] = useState([]);

  //Load products:
  const loadProducts = async () => {
    const products = await axios.get("http://localhost:8000/products");
    setProducts(products.data);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  //Edit product:

  //Delete Product:
  const deleteProduct = async (id) => {
    await axios.delete(`http://localhost:8000/products/${id}`);
    loadProducts();
  };

  //Open modals' functions:
  const onChangeStateDetail = (state) => {
    setOpenProductDetail(state);
  };

  const onChangeState = (state) => {
    setOpenAddProducts(state);
  };
  const onChangeStateEdit = (state) => {
    setOpenEditProducts(state);
  };
  return (
    <div className="admin-products">
      <div className="content">
        <div className="sideBar">
          <div className="add">
            <button onClick={() => setOpenAddProducts(!openAddProducts)}>
              Add product
            </button>
          </div>
          <div className="types">
            <button>All</button>
            <button>Boba tea</button>
            <button>Sparkling tea</button>
            <button>Specialties</button>
            <button>Extras</button>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Product</th>
              <th>Image</th>
              <th>isNew</th>
              <th>Old Price</th>
              <th>Price</th>
              <th>Type</th>
              <th>Category</th>
              <th>Option</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => {
              return (
                <tr key={index}>
                  <td>{product.id}</td>
                  <td>{product.title}</td>
                  <td>
                    <img src={product.img} alt="" />
                  </td>
                  <td>
                    {product.isNew === true ? (
                      <span>New</span>
                    ) : (
                      <span>Old</span>
                    )}
                  </td>
                  <td>{product.oldPrice}</td>
                  <td>{product.price}</td>
                  <td>{product.type}</td>
                  <td>{product.category}</td>
                  <td>
                    <button
                      onClick={() => setOpenProductDetail(!openProductDetail)}
                    >
                      <i className="fa-solid fa-circle-info"></i>
                    </button>
                    <button
                      onClick={() => setOpenEditProducts(!openEditProducts)}
                    >
                      <i className="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button onClick={() => deleteProduct(product.id)}>
                      <i className="fa-solid fa-trash-can"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {openProductDetail && (
        <ProductDetailAdmin
          onChangeStateDetail={onChangeStateDetail}
          openShowDetail={openProductDetail}
        />
      )}

      {openAddProducts && (
        <AddProducts
          onChangeState={onChangeState}
          openShowAdd={openAddProducts}
        />
      )}

      {openEditProducts && (
        <EditProducts
          openShowEdit={openEditProducts}
          onChangeStateEdit={onChangeStateEdit}
        />
      )}
    </div>
  );
}

export default AdminProducts;
