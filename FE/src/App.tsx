import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Food from "./pages/Food";
import AddMenu from "./pages/Food/AddMenuPage";
import NotFoundPage from "./pages/NotFoundPage";
import Transaksi from "./pages/Transaksi";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "*",
      element: <NotFoundPage />,
    },
    {
      path: "/",
      element: <Navigate to={"/transaksi"} />,
    },
    {
      path: "/transaksi",
      element: <Transaksi />,
    },
    {
      path: "/food",
      element: <Food />,
    },
    {
      path: "/food/add-menu",
      element: <AddMenu />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
