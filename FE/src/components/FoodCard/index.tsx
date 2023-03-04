import React from "react";

interface FoodProps {
  name: string;
  photo: string;
  price: number;
}

const FoodCard = ({ name, photo, price }: FoodProps) => {
  return (
    <div className="flex flex-col w-56 bg-white shadow-md rounded-lg cursor-pointer">
      <img className="rounded-t-lg h-40 object-cover" src={photo} alt={name} />
      <div className="text-center py-2">
        <h1 className="font-semibold">{name}</h1>
        <p className="text-primary font-semibold">Rp. {price}</p>
      </div>
    </div>
  );
};

export default FoodCard;
