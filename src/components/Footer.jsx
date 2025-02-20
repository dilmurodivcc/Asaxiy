function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="column">
            <h4>Ma'lumotlar</h4>
            <a href="https://asaxiy.uz/uz/page/faq">
              Ko'p so'raladigan savollar
            </a>
            <a href="https://asaxiy.uz/uz/news">Yangiliklar</a>
            <a href="https://asaxiy.uz/uz/blogs">Blog</a>
            <a href="https://asaxiy.uz/uz/product/brands">
              Bizning brendlarimiz
            </a>
            <a href="https://asaxiy.uz/uz/site/careers">Asaxiydagi karyerasi</a>
            <a href="https://asaxiy.uz/uz/page/oferta-rassrochka">
              Muddatli toʻlov ofertasi
            </a>
            <a href="https://asaxiy.uz/uz/page/rules">Ommaviy oferta</a>
            <a href="https://asaxiy.uz/uz/page/about">Biz haqimizda</a>
            <a href="https://asaxiy.uz/uz/product">Sayt xaritasi</a>
          </div>
          <div className="column">
            <h4>Biz bilan aloqa</h4>
            <a href="tel:+998 71 200 01 05">
              <i className="fa-solid fa-phone"></i> +998 71 200 01 05
            </a>
            <a href="mailto:mailto:info@asaxiy.uz">
              <i className="fa-solid fa-envelope"></i> info@asaxiy.uz
            </a>
            <a href="https://t.me/asaxiybot">
              <i className="fa-brands fa-telegram"> </i>
              Telegram bot
            </a>
            <a href="https://maps.app.goo.gl/fza2BuedafW2pXWcA">
              <i className="fa-solid fa-location-dot"></i> Chilonzor ko'chasi, 45/2,
              Toshkent
            </a>
            <br />
            <h4>Sodiqlik dasturlari</h4>
            <a href="https://asaxiy.uz/uz/page/el-yurt-ishonchi">
              "El-yurt ishonchi" statusi
            </a>
            <a href="https://asaxiy.uz/uz/page/plus">«Asaxiy Plus»</a>
            <a href="https://asaxiy.uz/uz/page/asaxiy-plus-oferta">
              «Asaxiy Plus» ofertasi
            </a>
          </div>
          <div className="column">
            <h4>Yetkazib berish va do'konlar</h4>
            <button className="link-btn">
              <i className="fa-solid fa-store"></i>
              Bizning do'konlar
              <i className="fa-solid fa-angle-right"></i>
            </button>
            <button className="link-btn">
              <i className="fa-solid fa-map-location"></i>
              Olib ketish punktlari <i className="fa-solid fa-angle-right"></i>
            </button>
            <button className="link-btn">
              <i className="fa-solid fa-truck"></i>
              Yetkazib berish <i className="fa-solid fa-angle-right"></i>
            </button>
          </div>
          <div className="column">
            <h4>To'lov turlari</h4>
          </div>
        </div>

        <div className="copy">
          <div className="container">
            <p>
              2015 - 2025 Internet-do’kon asaxiy.uz: Maishiy texnikalar va
              boshqalar.Mahsulotni yetkazib berish barcha viloyatlarda amalga
              oshiriladi. Barcha huquqlar himoyalangan.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
