import { memo } from "react";

function About() {
  return (
    <>
      <div className="about container">
        <h2>Asaxiy kompaniyasi haqida</h2>
        <p>
          Butun O‘zbekiston bo‘ylab maishiy texnika va elektronika tovarlarini
          yetkazib beruvchi kompaniyamizning asosiy afzalligi – ko‘p yillik ish
          tajribasi va yaxshi nom qozonib ulgurganidir. Asos solinganidan buyon
          Asaxiy internet-do‘koni va uning jamoasi iste’mol bozorining talablari
          tendensiyalarini tinimsiz kuzatib kelmoqda; bu esa bizga eng so‘nggi
          texnologiyalar va innovatsion yechimlardan hamisha boxabar bo‘lib
          turish imkonini beradi.
        </p>
        <p>
          Kompaniiya mutaxassislari mijozlarimizning istaklarini diqqat bilan
          o‘rganishadi, shu bois resurs doimiy tarzda hamyonbop narxlardagi
          sifatli yangi mahsulotlar bilan boyitilib kelmoqda.
        </p>
        <div className="acc">
          <div className="accardion">
            <b> Kompaniyaning ish tamoyili</b>
            <svg
              fill="none"
              height="10"
              viewBox="0 0 16 10"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              {" "}
              <path
                d="M7.03889 9.0387C7.22625 9.22629 7.48043 9.3318 7.74556 9.33203L8.25223 9.33203C8.51678 9.32896 8.76993 9.22388 8.95889 9.0387L15.7989 2.18536C15.9251 2.06019 15.9961 1.88979 15.9961 1.71203C15.9961 1.53427 15.9251 1.36388 15.7989 1.2387L14.8522 0.29203C14.7293 0.166612 14.5611 0.0959358 14.3856 0.0959358C14.21 0.0959358 14.0418 0.166612 13.9189 0.29203L7.99889 6.22536L2.07889 0.29203C1.95372 0.165822 1.78332 0.0948313 1.60556 0.0948313C1.4278 0.0948313 1.25741 0.165822 1.13223 0.29203L0.198895 1.2387C0.0726853 1.36388 0.00169573 1.53427 0.00169572 1.71203C0.00169572 1.88979 0.0726853 2.06019 0.198895 2.18536L7.03889 9.0387Z"
                fill="black"
              ></path>{" "}
            </svg>
          </div>
          <div className="accardion">
            <b> Kompaniyaning ish tamoyili</b>
            <svg
              fill="none"
              height="10"
              viewBox="0 0 16 10"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              {" "}
              <path
                d="M7.03889 9.0387C7.22625 9.22629 7.48043 9.3318 7.74556 9.33203L8.25223 9.33203C8.51678 9.32896 8.76993 9.22388 8.95889 9.0387L15.7989 2.18536C15.9251 2.06019 15.9961 1.88979 15.9961 1.71203C15.9961 1.53427 15.9251 1.36388 15.7989 1.2387L14.8522 0.29203C14.7293 0.166612 14.5611 0.0959358 14.3856 0.0959358C14.21 0.0959358 14.0418 0.166612 13.9189 0.29203L7.99889 6.22536L2.07889 0.29203C1.95372 0.165822 1.78332 0.0948313 1.60556 0.0948313C1.4278 0.0948313 1.25741 0.165822 1.13223 0.29203L0.198895 1.2387C0.0726853 1.36388 0.00169573 1.53427 0.00169572 1.71203C0.00169572 1.88979 0.0726853 2.06019 0.198895 2.18536L7.03889 9.0387Z"
                fill="black"
              ></path>{" "}
            </svg>
          </div>
        </div>
        <div className="about-footer">
          <b>"Asaxiy Books" MCHJ </b>
          <b>Ro'yxatdan o'tish raqami: 646439</b>
          <b>INN: 305829008</b>
          <b>MCHJ rahbari: Allayev Firuz Abdunasimovich</b>
        </div>
      </div>
    </>
  );
}

export default memo(About);
