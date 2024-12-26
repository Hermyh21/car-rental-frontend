import React from "react";
import "../styles/productsPage.css";
import cabsy from "../assets/images/casby-regular.png";

const ProductsPage = () => {
  const productspage = [
    {
      id: 1,
      image: cabsy,
      title: "Cabsy Regular",
      description: "1 - 4 Passenger",
      price: "$19.00",
      icon: null,
    },
    {
      id: 2,
      image: cabsy,
      title: "Cabsy XL",
      description: "1 - 4 Passenger",
      price: "$25.00",
      icon: "null",
    },
  ];

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Products</h1>
      <div className="row">
        {productspage.map((product) => (
          <div className="col-12 mb-3" key={product.id}>
            <div className="custom-card">
              <div className="custom-row">
                <div className="custom-col-image">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="custom-image"
                  />
                </div>
                <div className="custom-col-content">
                  <div className="content-wrapper">
                    <h5 className="product-title">{product.title}</h5>
                    <p className="product-description">{product.description}</p>
                  </div>
                  <div className="price-wrapper">
                    <span className="price-badge">{product.price}</span>
                    {product.icon && (
                      <i className={`bi bi-${product.icon} product-icon`} />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
