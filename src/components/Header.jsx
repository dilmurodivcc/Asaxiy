import { memo, useState } from "react";
import { Link } from "react-router-dom";
import google from "../assets/icons/g.webp";
import facebook from "../assets/icons/f.webp";
import { useStateValue } from "../context/Provider.jsx";
function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { favorites, cart } = useStateValue();

  return (
    <>
      <header>
        <div className="header__top">
          <div className="container">
            <Link to="/">
              <img
                src="https://asaxiy.uz/custom-assets/images/company/asaxiy-logo.svg"
                alt=""
              />
            </Link>
            <button className="header__top__btn">
              <i className="fa-solid fa-bars"></i>
              Bo'limlar
            </button>
            <form>
              <input type="text" placeholder="Qidirish..." />
              <button className="header-submit">Qidirish</button>
            </form>
            <nav>
              <span>
                <img
                  src="https://asaxiy.uz/custom-assets/images/icons/header/compare_header.svg"
                  alt=""
                />
                <small>Taqqoslash</small>
              </span>
              <span>
                <img
                  src="https://asaxiy.uz/custom-assets/images/icons/header/payment.svg"
                  alt=""
                />
                <small>To'lov</small>
              </span>
              <span>
                <img
                  src="https://asaxiy.uz/custom-assets/images/icons/header/tracker.svg"
                  alt=""
                />
                <small>Trek</small>
              </span>
         <Link to="/korzinka">
         <span className="navlinks">
                <img
                  src="https://asaxiy.uz/custom-assets/images/icons/header/cart.svg"
                  alt=""
                />
                <small>Savatcha</small>
                <div className="badge">{cart.length}</div>
              </span>
         </Link>
              <Link to="/wishlist">
                <span className="navlinks">
                  <img
                    src="https://asaxiy.uz/custom-assets/images/icons/header/heart.svg"
                    alt=""
                  />
                  <small>Sevimlilar</small>
                  <div className="badge">{favorites.length}</div>
                </span>
              </Link>
              <span>
                <img
                  src="https://asaxiy.uz/custom-assets/images/icons/header/language-ru.svg"
                  alt=""
                />
                <small>Русский</small>
              </span>
              <span onClick={() => setIsModalOpen(true)} className="login-btn">
                <img
                  src="https://asaxiy.uz/custom-assets/images/icons/header/avatar.svg"
                  alt=""
                />
                <small>Kirish</small>
              </span>
            </nav>
          </div>
        </div>
        <div className="header__bottom">
          <div className="container">
            <a href="https://asaxiy.uz/uz/discount/product">Chegirmalar </a>
            <a href="https://asaxiy.uz/uz/product/product-list/0-0-6">0-0-6</a>
            <a href="https://asaxiy.uz/uz/product/telefony-i-gadzhety/telefony/smartfony">
              Smartfonlar
            </a>
            <a href="https://asaxiy.uz/uz/product/bytovaya-tehnika">
              Maishiy texnika
            </a>
            <a href="https://asaxiy.uz/uz/product/knigi">Kitoblar</a>
            <a href="https://asaxiy.uz/uz/product/kompyutery-i-orgtehnika/noutbuki/noutbuki-2">
              Noutbuklar
            </a>
            <a href="https://asaxiy.uz/uz/product/product-list/asaxiybooks-bestseller-2024">
              Bestseller 2024
            </a>
          </div>
        </div>
      </header>

      {isModalOpen && <LoginModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
}

function LoginModal({ onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="left">
          <h2>Kirish yoki shaxsiy kabinet yaratish</h2>
          <form>
            <label htmlFor="number">Telefon</label>
            <input type="text" placeholder="+998 (__) ___-__-__" id="number" />
            <button className="number-submit">
              Faolashtirish kodini oling
            </button>
          </form>
          <div className="or">
            <span></span>
            <small>Yoki</small>
            <span></span>
          </div>
          <div className="btns">
            <a href="www.google.com">
              <img src={google} alt="" />
            </a>
            <a href="www.facebook.com">
              <img src={facebook} alt="" />
            </a>
          </div>
        </div>
        <div className="right">
          <div className="tab">
            <div className="img">
              <img
                src="https://asaxiy.uz/custom-assets/images/icons/market.svg"
                alt=""
              />
            </div>
            <div className="text">
              <h5>Endi bozorga borishga hojat yo'q</h5>
              <p>Bizda qulay narxlar va uyga yetkazib berish mavjud</p>
            </div>
          </div>
          <div className="tab">
            <div className="img">
              <img
                src="https://asaxiy.uz/custom-assets/images/icons/market.svg"
                alt=""
              />
            </div>
            <div className="text">
              <h5>Endi bozorga borishga hojat yo'q</h5>
              <p>Bizda qulay narxlar va uyga yetkazib berish mavjud</p>
            </div>
          </div>
          <div className="tab">
            <div className="img">
              <img
                src="https://asaxiy.uz/custom-assets/images/icons/market.svg"
                alt=""
              />
            </div>
            <div className="text">
              <h5>Endi bozorga borishga hojat yo'q</h5>
              <p>Bizda qulay narxlar va uyga yetkazib berish mavjud</p>
            </div>
          </div>
          <div className="tab">
            <div className="img">
              <img
                src="https://asaxiy.uz/custom-assets/images/icons/market.svg"
                alt=""
              />
            </div>
            <div className="text">
              <h5>Endi bozorga borishga hojat yo'q</h5>
              <p>Bizda qulay narxlar va uyga yetkazib berish mavjud</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Header);
