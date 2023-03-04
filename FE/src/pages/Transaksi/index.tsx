import Layout from "../../components/Layout";
import Cart from "./FoodCart";
import FoodMenu from "./FoodMenu";

const Transaksi = () => {
  return (
    <Layout>
      <div className="flex">
        <FoodMenu />
        <Cart />
      </div>
    </Layout>
  );
};

export default Transaksi;
