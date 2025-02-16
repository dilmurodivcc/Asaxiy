import React, { useEffect, useState } from "react";
import api from "../services/api";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortType, setSortType] = useState("");

  useEffect(() => {
    api
      .get("/")
      .then((res) => {
        setProducts(res.data.products);
        setFilteredProducts(res.data.products);
      })
      .catch((err) => console.error(err));
  }, []);

  // Filtrlash funksiyasi
  const handleSort = (type) => {
    let sortedProducts = [...products];
    if (type === "rating-up") {
      sortedProducts.sort((a, b) => b.rating - a.rating);
    } else if (type === "rating-down") {
      sortedProducts.sort((a, b) => a.rating - b.rating);
    }
    else if (type === "price-up") {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (type === "price-down") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (type === "az") {
      sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
    } else if (type === "za") {
      sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
    } else if (type === "clear") {
      sortedProducts = products;
    }
    setFilteredProducts(sortedProducts);
    setSortType(type);
  };

  return (
    <div className="container">
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
      <h1>Mahsulotlar</h1>
      <div className="product-list">
        {filteredProducts.map((product) => (
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            className="product-card"
          >
            <img src={product.images[0]} alt={product.title} />
            <h3>{product.title}</h3>
            <p>💰 {product.price}$</p>
            <div className="rating">
              {[...Array(Math.round(product.rating))].map((_, i) => (
                <FaStar key={i} color="gold" />
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
