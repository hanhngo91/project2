import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";

function Categories() {
  return (
    <div className="categories">
      {/* ----------------Cột 1-------------------- */}
      <div className="col">
        <div className="row">
          <img src="/img/dashboard/sale.png" alt="" />
          <button>
            <Link className="link" to="/products/1">
              Sale
            </Link>
          </button>
        </div>
        <div className="row">
          <img src="/img/dashboard/sparkling.png" alt="" />
          <button>
            <Link className="link" to="/products/1">
              Sparkling tea
            </Link>
          </button>
        </div>
      </div>
      {/* -----------------Cột 2----------------- */}
      <div className="col">
        <div className="row">
          <img src="/img/dashboard/bubble-tea.png" alt="" />
          <button>
            <Link className="link" to="/products/1">
              Bubble tea
            </Link>
          </button>
        </div>
      </div>
      {/* -----------------Cột 3------------------ */}
      <div className="col col-l">
        {/* -------------hàng 1------------ */}
        <div className="row">
          <div className="col">
            <div className="row">
              <img src="/img/dashboard/new-flavor.png" alt="" />
              <button>
                <Link className="link" to="/products/1">
                  New flavor
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img src="/img/dashboard/extras.png" alt="" />
              <button>
                <Link className="link" to="/products/1">
                  Extras
                </Link>
              </button>
            </div>
          </div>
        </div>
        {/* --------------hàng 2----------- */}
        <div className="row">
          <img src="/img/dashboard/specialties.png" alt="" />
          <button>
            <Link className="link" to="/products/1">
              Specialties
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Categories;
