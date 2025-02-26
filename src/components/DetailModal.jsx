import React, { memo } from "react";
import { Link } from "react-router-dom";

const DetailModal = ({ product, onClose }) => {
  return (

    <div  className="mo" onClick={onClose}>
      <div className="mc" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={onClose}>&times;</span>
        <img src={product.images[0]} alt={product.title} />
        <div className="text">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <h3 className="price">{(product.price * 13000).toLocaleString()} so'm</h3>
        <div className="modal-buttons">
          <Link to={`/product/${product.id}`} className="learn-more">Learn More</Link>
          <button className="buy-now">Hozir sotib olish</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default memo(DetailModal);
