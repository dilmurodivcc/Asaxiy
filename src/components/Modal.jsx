import InputMask from "react-input-mask-next";
import { useState } from "react";

function Modal() {
  const [open, setOpen] = useState(false);
  const [phone, setPhone] = useState("");
  return (
    <>
      <div className="overlay">
        <button onClick={() => setOpen(true)}>Telefon raqamni kiritish</button>
        <div className="modal">
          <div className="left">
            <h3>Kirish yoki shaxsiy kabinet yaratish</h3>
            <form>
              <label htmlFor="number">Telefon</label>
              <InputMask
                mask="+998 (99) 999-99-99"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="border p-2 w-full rounded-md focus:ring focus:ring-blue-300"
                placeholder="+998 (__) ___-__-__"
              />
              <button onClick={() => setOpen(false)}>Tasdiqlash</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
