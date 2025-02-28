import React, { memo, useEffect, useState } from "react";
import { useStateValue } from "../context/Provider";
import { Link } from "react-router-dom";

function Karzinka() {
  const { cart, toggleCart, toggleFavorite, favorites } = useStateValue();

  const [counts, setCounts] = useState(() => {
    return (
      JSON.parse(localStorage.getItem("cartCounts")) ||
      cart.reduce((acc, item) => ({ ...acc, [item.id]: 1 }), {})
    );
  });

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * 13000 * (counts[item.id] || 1),
    0
  );

  useEffect(() => {
    localStorage.setItem("cartCounts", JSON.stringify(counts));
  }, [counts]);

  useEffect(() => {
    window.scrollTo(100, 0);
  }, []);

  return (
    <div className="container cards">
      <div className="product-row">
        {cart.length > 0 ? (
          cart.map((product) => (
            <div key={product.id} className="card">
              <img src={product.images[0]} alt={product.title} />
              <h3>{product.title}</h3>

              <div className="counters">
                <button
                  onClick={() =>
                    setCounts((prev) => {
                      const newCount = Math.max(1, (prev[product.id] || 1) - 1);
                      return { ...prev, [product.id]: newCount };
                    })
                  }
                >
                  -
                </button>
                <span>{counts[product.id] || 1}</span>
                <button
                  onClick={() =>
                    setCounts((prev) => ({
                      ...prev,
                      [product.id]: (prev[product.id] || 1) + 1,
                    }))
                  }
                >
                  +
                </button>
              </div>

              <div className="narx">
                <p className="discount">
                  {(product.price * 1.1 * 13000).toLocaleString()}
                  
                  so'm
                </p>

                <p className="price">
                  {(
                    product.price *
                    13000 *
                    (counts[product.id] || 1)
                  ).toLocaleString()}{" "}
                  so'm
                </p>
                <span className="monthly">
                  {((product.price / 12) * 13000).toFixed(0)} so'm x 12 oy
                </span>
              </div>
              <div className="btns">
                <button
                  className="like-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
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
                <button
                  className="remove-button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleCart(product);
                    setCounts((prev) => {
                      const updatedCounts = { ...prev };
                      delete updatedCounts[product.id];
                      localStorage.setItem(
                        "cartCounts",
                        JSON.stringify(updatedCounts)
                      );
                      return updatedCounts;
                    });
                  }}
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>Korzinka bo'sh</p>
        )}
      </div>
      <div className="total">
        <div className="top">
          <div className="line">
            <b>Savatdagi mahsulotlar soni: {cart.length}</b>
            <img
              src="https://asaxiy.uz/custom-assets/images/icons/discount_cart.svg"
              alt=""
            />
          </div>
          <div className="line">
            <h5> Umumiy qiymat:</h5>
            <p> {totalPrice.toLocaleString()}</p>
          </div>
        </div>
        <div className="bottom">
          <Link to="/orders">
            <button className="order">BUYURTMA</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default memo(Karzinka);
