import { useEffect, useState } from "react";
import axios from "axios";
import withReactContent from "sweetalert2-react-content";

import { Link } from "react-router-dom";
import { FoodTypes } from "../../../utils/types/DataTypes";
import Swal from "../../../utils/Swal";

const FoodList = () => {
  const [food, setFood] = useState<FoodTypes[]>([]);
  const PopUp = withReactContent(Swal);

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

  const handleDelete = (id: number) => {
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/food/${id}`)
      .then(() => {
        setFood(
          food.filter((food) => {
            return food.id !== id;
          })
        );
        PopUp.fire({
          icon: "success",
          title: "Succes",
          text: "Delete Menu Success",
          showCancelButton: false,
        });
      })
      .catch(() => {
        PopUp.fire({
          icon: "error",
          title: "Oops... ",
          text: "Gagal delete menu",
          showCancelButton: false,
        });
      });
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-md my-12">
      <Link to={`/food/add-menu`}>
        <button className="bg-primary text-sm text-white font-medium py-1 px-2 rounded-md">
          + Tambah Menu
        </button>
      </Link>
      <table className="my-5 w-full">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-4 px-6 text-left font-medium">#</th>
            <th className="py-4 px-6 text-left font-medium">Nama</th>
            <th className="py-4 px-6 text-left font-medium">Foto</th>
            <th className="py-4 px-6 text-left font-medium">Harga</th>
            <th className="py-4 px-6 text-left font-medium">Delete</th>
          </tr>
        </thead>
        <tbody>
          {food.map((data: any, index: number) => (
            <tr key={index} className="odd:bg-gray-100">
              <td className="py-2 px-6 text-left text-sm">{index + 1}</td>
              <td className="py-2 px-6 text-left text-sm">{data.name}</td>
              <td className="py-2 px-6 text-left text-sm">
                <img className="w-[100px]" src={data.photo} alt={data.name} />
              </td>
              <td className="py-2 px-6 text-left text-sm">Rp. {data.price}</td>
              <td className="py-2 px-6 text-left text-sm">
                <button
                  className="bg-red-500 py-1 px-3 font-semibold text-white text-center rounded-full"
                  onClick={() => handleDelete(data.id)}
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FoodList;
