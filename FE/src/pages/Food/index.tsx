import Layout from "../../components/Layout";
import FoodList from "./Foodlist";

const Food = () => {
  return (
    <Layout>
      <p className="text-gray-400 pt-8">
        Tambahkan menu makanan yang ada di resto
      </p>
      <FoodList />
    </Layout>
  );
};

export default Food;
