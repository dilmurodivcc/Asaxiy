import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faCreditCard,
  faWallet,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useStateValue } from "../context/Provider";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const regions = {
  toshkent: ["Chilonzor", "Yunusobod", "Shayxontohur"],
  samarqand: ["Urgut", "Narpay", "Jomboy"],
  fergana: ["Marg'ilon", "Qo'qon", "Rishton"],
    
};
function Order() {
  const { cart, removeFromCart } = useStateValue();
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm();
  const [districts, setDistricts] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [priceCard, setPriceCard] = useState(0);
  const selectedRegion = watch("region");
  const selectedDistrict = watch("district");
  const [deliveryPrice2, setDeliveryPrice2] = useState(null);
  const navigete = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const handleRegionChange = (e) => {
    const region = e.target.value;
    setValue("region", region);
    setValue("district", "");
    setDistricts(region ? regions[region] : []);
  };

  const onSubmit = (data) => {
    console.log("Form ma'lumotlari:", data);
    setIsModalOpen(true);
    reset();
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handlePrice = (index) => {
    setPriceCard((prevIndex) => (prevIndex === index ? null : index));
  };

  const [deliveryPrice, setDeliveryPrice] = useState("");

  useEffect(() => {
    if (selectedRegion && selectedDistrict && activeIndex === 0) {
      setDeliveryPrice(
        t("order.Delivery_price", {
          price: (30000).toLocaleString(),
          currency: t("sum"),
        })
      );
    } else {
      setDeliveryPrice(t("order.Delivery_not_calculated"));
    }
  }, [selectedRegion, selectedDistrict, activeIndex, t]);

  useEffect(() => {
    if (selectedRegion && selectedDistrict) {
      setDeliveryPrice2(30000);
    } else {
      setDeliveryPrice2(null);
    }
  }, [selectedRegion, selectedDistrict]);

  return (
    <div className="order">
      <div className="container">
        <h2>{t("order.Order")}</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="order-content">
          <div className="order-content-form">
            <div className="form-fullname">
              <div className="input-label">
                <label htmlFor="phone">
                  {t("order.Phone_number")} <span>*</span>
                </label>
                <Controller
                  name="phone"
                  control={control}
                  rules={{
                    required: { value: true, message: t("order.Phone_error") },
                  }}
                  render={({ field }) => (
                    <PhoneInput
                      {...field}
                      country={"uz"}
                      masks={{ uz: "(..) ...-..-.." }}
                      inputClass="phone-input-field"
                      containerClass="phone-input-container"
                      inputStyle={{ paddingLeft: "50px" }}
                    />
                  )}
                />
                {errors.phone && (
                  <span className="error">{errors.phone.message}</span>
                )}
              </div>
              <div className="input-label">
                <label htmlFor="fullname">
                  {t("order.Full_name")} <span>*</span>
                </label>
                <input
                  type="text"
                  id="fullname"
                  {...register("fullname", {
                    required: {
                      value: true,
                      message: t("order.Full_name_error"),
                    },
                  })}
                />
                {errors.fullname && (
                  <span className="error">{errors.fullname.message}</span>
                )}
              </div>
            </div>
            <div className="form-fulladdress">
              <div className="input-label">
                <label htmlFor="region">
                  {t("order.Provice")} <span>*</span>
                </label>
                <select
                  id="region"
                  {...register("region", {
                    required: {
                      value: true,
                      message: t("order.Provice_error"),
                    },
                  })}
                  onChange={handleRegionChange}
                >
                  <option value="">{t("order.Provice_choice")}</option>
                  {Object.keys(regions).map((region) => (
                    <option key={region} value={region}>
                      {region.charAt(0).toUpperCase() + region.slice(1)}
                    </option>
                  ))}
                </select>
                {errors.region && (
                  <span className="error">{errors.region.message}</span>
                )}
              </div>

              <div className="input-label">
                <label htmlFor="district">
                  {t("order.City")} <span>*</span>
                </label>
                <select
                  id="district"
                  {...register("district", {
                    required: { value: true, message: t("order.City_error") },
                  })}
                  disabled={!selectedRegion}
                >
                  <option value="">{t("order.City_choice")}</option>
                  {districts.map((district) => (
                    <option key={district} value={district}>
                      {district}
                    </option>
                  ))}
                </select>
                {errors.district && (
                  <span className="error">{errors.district.message}</span>
                )}
              </div>
            </div>
            <div className="order-text ">
              <h2>{t("order.Delivery")}</h2>
              <div className="order-text-content">
                
                <div
                  className={`order-text-content-item ${
                    activeIndex === 1 ? "active" : ""
                  }`}
                  onClick={() => handleClick(1)}
                >
                  <h3>{t("order.Reception")}</h3>
                  <div className="order-text-content-item-img">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="icon"
                      style={{ color: "green" }}
                    />
                    <p>{t("order.Reception_free")}</p>
                  </div>
                  <div className="order-text-content-item-img">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="icon"
                      style={{ color: "green" }}
                    />
                    <p>{t("order.Reception_time")}</p>
                  </div>
                  <div className="order-text-content-item-img">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="icon"
                      style={{ color: "green" }}
                    />
                    <p>{t("order.Reception_check")}</p>
                  </div>
                  <div className="order-text-content-item-img">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="icon"
                      style={{ color: "green" }}
                    />
                    <p>{t("order.Reception_return")}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="input-label">
              <label htmlFor="address">
                {t("order.Address")} <span>*</span>
              </label>
              <input
                type="text"
                id="address"
                {...register("address", {
                  required: { value: true, message: t("order.Address_error") },
                })}
              />
              {errors.address && (
                <span className="error">{errors.address.message}</span>
              )}
            </div>
            <div className="input-label">
              <label htmlFor="moljal">{t("order.Landmark")} </label>
              <input type="text" id="moljal" {...register("moljal")}></input>
            </div>
            <div className="input-label">
              <label htmlFor="job">{t("order.Work_address")}</label>
              <textarea type="text" id="job" {...register("job")}></textarea>
            </div>
            <div className="input-label">
              <label htmlFor="comment">{t("order.Comment_order")}</label>
              <textarea
                type="text"
                id="comment"
                {...register("comment")}
              ></textarea>
            </div>
            <div className="input-label">
              <label htmlFor="promo">{t("order.Promo_code")}</label>
              <input type="text" id="promo" {...register("promo")}></input>
            </div>
            <div className="order-card-to">
              <h2>{t("order.Payment")}</h2>
              <div
                className={`order-card-to-content ${
                  priceCard === 1 ? "active" : ""
                }`}
                onClick={() => handlePrice(1)}
              >
                <FontAwesomeIcon icon={faCreditCard} />
                <h3>{t("order.Payment_online")}</h3>
              </div>
              <div
                className={`order-card-to-content ${
                  priceCard === 0 ? "active" : ""
                }`}
                onClick={() => handlePrice(0)}
              >
                <FontAwesomeIcon icon={faWallet} />
                <h3>{t("order.Payment_cash")}</h3>
              </div>
              <div
                className={`order-card-to-content ${
                  priceCard === 2 ? "active" : ""
                }`}
                onClick={() => handlePrice(2)}
              >
                <FontAwesomeIcon icon={faUser} />
                <h3>{t("order.Payment_wallet")}</h3>
              </div>
            </div>
      
            <div className="order-button">
              <button type="submit">{t("order.Order_send")}</button>
              <button onClick={() => navigete(-1)}>
                {t("order.Order_back")}
              </button>
            </div>
          </div>
       
        </form>
      </div>
    </div>
  );
}

export default Order;
