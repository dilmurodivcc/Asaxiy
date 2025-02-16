import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    api.get(`/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!product) return <p>Yuklanmoqda...</p>;

  return (
    <div className="product-detail">
      <img src={product.thumbnail} alt={product.title} />
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>💰 {product.price}$</p>
      <p>Reyting: {product.rating}</p>
    </div>
  );
};

export default ProductDetail;
