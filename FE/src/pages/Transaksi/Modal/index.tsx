import { useState } from "react";
import Popup from "reactjs-popup";
import withReactContent from "sweetalert2-react-content";

import "reactjs-popup/dist/index.css";
import Swal from "../../../utils/Swal";
import { useNavigate } from "react-router-dom";
import { FoodTypes } from "../../../utils/types/DataTypes";

interface ModalProps {
  price: number;
  cart: FoodTypes[];
}

const Modal = ({ price, cart }: ModalProps) => {
  const [pay, setPay] = useState<number>(0);
  const PopUp = withReactContent(Swal);
  const navigate = useNavigate();
  let kembalian = pay - price;

  const preventChar = (e: React.KeyboardEvent) =>
    ["e", "E", "+", "-"].includes(e.key) && e.preventDefault();

  const handlePay = () => {
    if (kembalian > 0) {
      PopUp.fire({
        icon: "success",
        title: "Success",
        text: "Pembayaran berhasil",
        showCancelButton: false,
      });
      navigate(0);
    } else {
      PopUp.fire({
        icon: "error",
        title: "Oops... ",
        text: "Maaf uang anda belum mencukupi",
        showCancelButton: false,
      });
    }
  };

  return (
    <Popup
      modal
      nested
      trigger={
        <button className="bg-primary text-white py-1 rounded-md">
          Charge Rp. {price}
        </button>
      }
    >
      <div className="p-5">
        <h1 className="font-medium text-xl">Detail Pesanan</h1>
        <div className="flex gap-5">
          <table className="my-5 w-2/3">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-2 px-3 font-medium">#</th>
                <th className="py-2 px-3 font-medium">Nama</th>
                <th className="py-2 px-3 font-medium">Foto</th>
                <th className="py-2 px-3 font-medium">Harga</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((data: any, index: number) => (
                <tr key={index} className="odd:bg-gray-100">
                  <td className="py-2 px-3 text-sm">{index + 1}</td>
                  <td className="py-2 px-3 text-sm">{data.name}</td>
                  <td className="py-2 px-3 text-sm">
                    <img
                      className="w-[100px]"
                      src={data.photo}
                      alt={data.name}
                    />
                  </td>
                  <td className="py-2 px-3 text-sm">Rp. {data.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex flex-col items-center gap-4 my-5 border-l-4 w-1/3">
            <h1 className="font-medium">{`Uang Pembeli (Rp)`}</h1>
            <input
              type="number"
              value={pay}
              min={1}
              onKeyDown={preventChar}
              className="border-2 rounded-md text-sm py-1 px-2 outline-none"
              onChange={(e) => setPay(e.target.valueAsNumber)}
            />
            <div className="flex w-full">
              <button
                className="bg-white border-2 text-gray-400 text-sm font-medium w-1/2 py-1 mx-2 rounded-md"
                onClick={() => close()}
              >
                Close
              </button>
              <button
                className="bg-primary text-white text-sm font-medium w-1/2 py-1 mx-2 rounded-md"
                onClick={handlePay}
              >
                Pay!
              </button>
            </div>
            <p className="text-red-600 text-sm font-medium text-left w-full px-2">
              Kembalian:
              {kembalian <= 0 ? "mohon maaf uang anda kurang" : kembalian}
            </p>
          </div>
        </div>
        <h1 className="font-medium">Total Harga: Rp. {price}</h1>
      </div>
    </Popup>
  );
};

export default Modal;
