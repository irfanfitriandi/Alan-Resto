import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import withReactContent from "sweetalert2-react-content";

import Layout from "../../../components/Layout";
import Swal from "../../../utils/Swal";

const AddMenu = () => {
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [price, setPrice] = useState(0);
  const [disabled, setDisabled] = useState(true);
  const PopUp = withReactContent(Swal);
  const navigate = useNavigate();

  useEffect(() => {
    if (name && photo && price) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [name, photo, price]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const body = { name, photo, price };

    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/food`, body)
      .then(() => {
        PopUp.fire({
          icon: "success",
          title: "Success",
          text: "Berhasil menambahkan menu",
          showCancelButton: false,
        });
        navigate("/food");
      })
      .catch(() => {
        PopUp.fire({
          icon: "error",
          title: "Oops... ",
          text: "Gagal menambahkan menu",
          showCancelButton: false,
        });
      });
  };

  const preventChar = (e: React.KeyboardEvent) =>
    ["e", "E", "+", "-"].includes(e.key) && e.preventDefault();

  return (
    <Layout>
      <div className="bg-white rounded-lg p-6 shadow-md my-12">
        <form onSubmit={handleSubmit}>
          <h1 className="text-primary text-lg font-medium">Tambahkan Menu</h1>
          <div className="py-4 flex flex-col gap-2">
            <p className="text-">Nama Menu</p>
            <input
              className="border-2 outline-none rounded-md px-3 py-1 w-full"
              type="text"
              placeholder="Nama Menu"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="py-4 flex flex-col gap-2">
            <p className="text-">Url Photo</p>
            <input
              className="border-2 outline-none rounded-md px-3 py-1 w-full"
              type="text"
              placeholder="Url Photo .jpg .jpeg .png"
              onChange={(e) => setPhoto(e.target.value)}
            />
          </div>
          <div className="py-4 flex flex-col gap-2">
            <p className="text-">Harga Menu</p>
            <div className="flex border-2 items-center rounded-md">
              <div className="px-4 py-2 bg-primary text-sm text-white">Rp.</div>
              <input
                className="outline-none px-3 py-1 w-full"
                type="number"
                min={1}
                onKeyDown={preventChar}
                placeholder="Harga Menu"
                onChange={(e) => setPrice(e.target.valueAsNumber)}
              />
            </div>
          </div>
          <div className="flex justify-end w-full my-5">
            <button
              className="bg-[#7CB083] text-white text-sm font-medium rounded-md py-2 px-16 disabled:bg-gray-400"
              disabled={disabled}
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default AddMenu;
