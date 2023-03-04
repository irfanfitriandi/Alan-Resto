import { useEffect, useState } from "react";
import axios from "axios";
import FoodCard from "../../../components/FoodCard";
import { FoodTypes } from "../../../utils/types/DataTypes";

const FoodMenu = () => {
  const [food, setFood] = useState<FoodTypes[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/food`)
      .then((data) => {
        setFood(data.data);
      })
      .catch((err) => alert(`Error: ${err.response.request.statusText}`));
  };

  return (
    <section className="py-8 grid grid-cols-3 w-2/3 gap-6">
      {food.map((data: any, index: number) => (
        <FoodCard
          key={index}
          photo={data.photo}
          name={data.name}
          price={data.price}
        />
      ))}
    </section>
  );
};

export default FoodMenu;
