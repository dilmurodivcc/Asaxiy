"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import api from "../services/api";

const Carousel = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api
      .get("/")
      .then((response) => setProducts(response.data.products))
      .catch((error) => console.error("Xatolik:", error));
  }, []);

  return (
    <>
    <h3 className="title">Super narx</h3>
      <div className="container c-carousel">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={7}
          navigation
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="c-card">
                <img src={product.images[0]} alt={product.title} />
                <h3>{product.title}</h3>
                <p>{product.price} so'm</p>
                <button>Buyurtma berish</button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Carousel;
