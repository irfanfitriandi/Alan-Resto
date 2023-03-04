import { useEffect, useRef, useState } from "react";
import axios from "axios";
import withReactContent from "sweetalert2-react-content";

import ChefIcon from "../../../assets/icons/ChefIcon";
import Cart from "../../../components/Cart";
import ButtonPrint from "../ButtonPrint";

import Swal from "../../../utils/Swal";
import Modal from "../Modal";
import { FoodTypes } from "../../../utils/types/DataTypes";

const FoodCart = () => {
  const [cart, setCart] = useState<FoodTypes[]>([]);
  const [price, setPrice] = useState<number>(0);
  const componentToPrint = useRef();
  const PopUp = withReactContent(Swal);

  const fetchData = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/food`)
      .then((data) => {
        setCart(data.data.slice(0, 4));
      })
  };

  useEffect(() => {
    fetchData();
    setPrice(cart.reduce((total, cart) => total + cart.price * cart.id, 0));
  }, [cart]);

  const handleSave = () => {
    PopUp.fire({
      icon: "success",
      title: "Done",
      text: "Saved",
      showCancelButton: false,
    });
  };

  return (
    <section
      ref={(el: any) => (componentToPrint.current = el)}
      className="flex flex-col my-8 ml-10 p-4 w-1/3 bg-white shadow-md rounded-lg"
    >
      <div className="flex justify-center items-center gap-2 pt-2">
        <ChefIcon />
        <h1 className="text-xl font-medium antialiased tracking-wider">
          Pesanan
        </h1>
      </div>
      <div className="py-8">
        {cart.map((data, index) => (
          <Cart
            key={index}
            photo={data.photo}
            name={data.name}
            price={data.price}
            quantity={data.id}
          />
        ))}
      </div>
      <button className="text-red-400 font-medium border-2 border-red-400 py-1 rounded-md">
        Clear Cart
      </button>
      <div className="flex gap-4 my-3">
        <button
          className="w-1/2 text-white font-medium bg-[#7CB083] py-1 rounded-md"
          onClick={handleSave}
        >
          Save Bill
        </button>
        <ButtonPrint componentToPrint={componentToPrint} />
      </div>
      <Modal cart={cart} price={price} />
    </section>
  );
};

export default FoodCart;
