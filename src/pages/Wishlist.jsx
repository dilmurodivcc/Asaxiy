import React, { memo, useEffect } from "react";
import { useStateValue } from "../context/Provider";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const Wishlist = () => {
  const { favorites, toggleFavorite } = useStateValue(); 
  useEffect(() => {
    window.scrollTo(100, 0);
  }, []);
  return (
    <div className="container wishlist">
      

      <div className="product-list">
        {favorites.length > 0 ? (
          favorites.map((product) => (
            <Link
              to={`/detail/${product.id}`}
              key={product.id}
              className="product-card"
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

              <button
                className="like"
                onClick={(e) => {
                  e.preventDefault();
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
            </Link>
          ))
        ) : (
          <div className="favorite-empty">
            <i className="fa-solid fa-heart"></i>
            <p>Sevimli mahsulotlar yo'q</p>
            <span>Asosiy sahifaga o'tib qo'shing</span>
            <Link to="/" className="tohome">
            Asosiy sahifaga o'tish
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(Wishlist);
