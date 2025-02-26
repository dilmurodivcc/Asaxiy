import React, { memo, useEffect, useState } from "react";
import api from "../services/api";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import Corousel from "../components/Corousel.jsx";
import DetailModal from "../components/DetailModal.jsx";
import { useStateValue } from "../context/Provider.jsx"; 
const Home = () => {
  const { favorites, toggleFavorite } = useStateValue();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortType, setSortType] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 
  useEffect(() => {
    api
      .get("/")
      .then((res) => {
        setProducts(res.data.products);
        setFilteredProducts(res.data.products);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleSort = (type) => {
    let sortedProducts = [...products];
    if (type === "rating-up")
      sortedProducts.sort((a, b) => b.rating - a.rating);
    else if (type === "rating-down")
      sortedProducts.sort((a, b) => a.rating - b.rating);
    else if (type === "price-up")
      sortedProducts.sort((a, b) => b.price - a.price);
    else if (type === "price-down")
      sortedProducts.sort((a, b) => a.price - b.price);
    else if (type === "az")
      sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
    else if (type === "za")
      sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
    else if (type === "clear") sortedProducts = products;
    setFilteredProducts(sortedProducts);
    setSortType(type);
  };

  return (
    <>
      <div className="container">
        <Corousel />
      </div>
      <div className="container">
        <div className="card-header">
          <div className="filters">
            <button onClick={() => handleSort("rating-up")}>
              Reyting <i className="fa-solid fa-arrow-up"></i>
            </button>
            <button onClick={() => handleSort("rating-down")}>
              Reyting <i className="fa-solid fa-arrow-down"></i>
            </button>
            <button onClick={() => handleSort("price-up")}>
              Narx <i className="fa-solid fa-arrow-up"></i>
            </button>
            <button onClick={() => handleSort("price-down")}>
              Narx <i className="fa-solid fa-arrow-down"></i>
            </button>
            <button onClick={() => handleSort("az")}>A-Z</button>
            <button onClick={() => handleSort("za")}>Z-A</button>
            <button className="clear" onClick={() => handleSort("clear")}>
              <i className="fa-solid fa-trash "></i>
            </button>
          </div>
        </div>
        <div className="product-list">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="product-card"
              onClick={() => setSelectedProduct(product)}
            >
              <img src={product.images[0]} alt={product.title} />
              <h3>{product.title}</h3>
              <div className="rating">
                {[...Array(Math.round(product.rating))].map((_, i) => (
                  <FaStar key={i} color="gold" />
                ))}
              </div>
              <p className="discount">
                {(product.price * 1.1 * 13000).toLocaleString()} so'm
              </p>
              <p className="price">
                {(product.price * 13000).toLocaleString()} so'm
              </p>

              {/* Like tugmasi */}
              <button
                className="like"
                onClick={(e) => {
                  e.stopPropagation(); // Card bosilishining oldini olish
                  toggleFavorite(product);
                }}
              >
                <i
                  className={
                    favorites.some((fav) => fav.id === product.id)
                      ? "fa-solid fa-heart"
                      : "fa-regular fa-heart"
                  }
                ></i>
              </button>

              <span className="super">SUPER NARX</span>
              <span className="monthly">
                {((product.price / 12) * 13000).toFixed(0)} so'm x 12 oy
              </span>
              <div className="btns">
                <button className="buy">Hozir sotib olish</button>
                <button className="card">
                  <i className="fa-solid fa-shopping-cart"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DetailModalni chiqarish */}
      {selectedProduct && (
        <DetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
};

export default memo(Home);
