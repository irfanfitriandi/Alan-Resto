import { Link } from "react-router-dom";

const Navbar = () => {
  const path = window.location.pathname;

  return (
    <nav className="flex items-center gap-6 h-12 pt-2 px-24 bg-white shadow-sm text-lg font-medium">
      <Link
        className={`transition-all duration-100 ease-in-out w-28 h-full text-center ${
          path === "/food" || path === "/food/add-menu"
            ? "text-primary border-b-4 border-primary"
            : "hover:border-b-4 border-blue-300 hover:text-blue-300"
        }`}
        to={"/food"}
      >
        Food
      </Link>
      <Link
        className={`transition-all duration-100 ease-in-out w-28 h-full text-center ${
          path === "/transaksi"
            ? "text-primary border-b-4 border-primary"
            : "hover:border-b-4 border-blue-300 hover:text-blue-300"
        }`}
        to={"/transaksi"}
      >
        Transaksi
      </Link>
    </nav>
  );
};

export default Navbar;
