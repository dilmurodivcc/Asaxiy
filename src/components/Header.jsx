function Header() {
  return (
    <>
      <header>
        <div className="header__top">
          <div className="container">
            <img
              src="https://asaxiy.uz/custom-assets/images/company/asaxiy-logo.svg"
              alt=""
            />
            <button className="header__top__btn">
              <i class="fa-solid fa-bars"></i>
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
                  src="	https://asaxiy.uz/custom-assets/images/icons/header/tracker.svg"
                  alt=""
                />
                <small>Trek</small>
              </span>
              <span>
                <img
                  src="	https://asaxiy.uz/custom-assets/images/icons/header/cart.svg"
                  alt=""
                />
                <small>Savatcha</small>
              </span>
              <span>
                <img
                  src="https://asaxiy.uz/custom-assets/images/icons/header/heart.svg"
                  alt=""
                />
                <small>Sevimlilar</small>
              </span>
              <span>
                <img
                  src="https://asaxiy.uz/custom-assets/images/icons/header/language-ru.svg"
                  alt=""
                />
                <small>Русский</small>
              </span>
              <span>
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
            <a href="https://asaxiy.uz/uz/discount/product">Chegirmalar  </a>
            <a href="https://asaxiy.uz/uz/product/product-list/0-0-6">0-0-6</a>
            <a href="https://asaxiy.uz/uz/product/telefony-i-gadzhety/telefony/smartfony">Smartfonlar</a>
            <a href="https://asaxiy.uz/uz/product/bytovaya-tehnika">Maishiy texnika</a>
            <a href="https://asaxiy.uz/uz/product/knigi">Kitoblar</a>
            <a href="https://asaxiy.uz/uz/product/kompyutery-i-orgtehnika/noutbuki/noutbuki-2">Noutbuklar</a>
            <a href="https://asaxiy.uz/uz/product/product-list/asaxiybooks-bestseller-2024">Bestseller 2024</a>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
