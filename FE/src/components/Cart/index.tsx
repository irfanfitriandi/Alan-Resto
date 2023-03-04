import React from "react";

interface CartProps {
  photo: string;
  name: string;
  price: number;
  quantity: number;
}

const Cart = ({ photo, name, price, quantity }: CartProps) => {
  return (
    <div className="flex items-center text-xs py-2">
      <img className="w-1/3" src={photo} alt={name} />
      <div className="flex justify-between w-2/3 px-2">
        <h1 className="w-1/2 text-left font-medium text-sm">{name}</h1>
        <span className="w-1/5 text-left font-medium text-sm">x{quantity}</span>
        <p className="w-2/5 text-primary text-left font-medium text-sm">
          Rp. {price}
        </p>
      </div>
    </div>
  );
};

export default Cart;
