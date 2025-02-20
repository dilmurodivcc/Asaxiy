import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import { FaStar } from "react-icons/fa";


import xazna from "../assets/icons/xaznaNasiya.svg";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    api
      .get(`/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!product) return <p>Yuklanmoqda...</p>;

  return (
    <div className="product-detail container">
      <div className="img-con">
        <div className="column">
          <img src={product.thumbnail} alt="" />
          <img src={product.thumbnail} alt="" />
          <img src={product.thumbnail} alt="" />
          <img src={product.thumbnail} alt="" />
        </div>
        <img src={product.thumbnail} alt={product.title} />
      </div>
      <div className="content">
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <div className="rating">
          {[...Array(Math.round(product.rating))].map((_, i) => (
            <FaStar key={i} color="gold" />
          ))}
        </div>
        <h5>{product.price * 13000} so'm</h5>
        <div className="btns">
          <button className="add-card">
            Savatchaga Qo'shish
          </button>
          <button className="buy-now">
            Hoziroq xarid qilish
          </button>
        </div>
      </div>
      <div className="monthly">
        <h2>Bo'lib To'lash</h2>
        <span className="month">18 oy ga bo'lib to'lash</span>
        <div className="buy-card">
          XaznaNasiya hamkorining muddatli to'lovi
          <div className="line">
            <img src={xazna} alt="" />
            <b>{((product.price * 13000) / 18).toFixed()} so'm</b>
          </div>
          <div className="line">
            <small>Umumiy qiymat</small>
            <p>{product.price * 13000} so'm</p>
          </div>
          <button>Bolib to'lashga olish </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
