import "./App.scss";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Admin from "./pages/Admin/Admin";
import AdminProducts from "./components/AdminProducts/AdminProducts";
import AdminUsers from "./components/AdminUsers/AdminUsers";
import AdminNavbar from "./components/AdminNavbar/AdminNavbar";
import { useEffect } from "react";

const Layout = () => {
  let currentLocation = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentLocation.pathname]);

  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const AdminLayout = () => {
  return (
    <div className="app">
      <AdminNavbar />
      <Outlet />
      <Footer />
    </div>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/:id",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "/admin",
        element: <Admin />,
      },
      {
        path: "/admin/adminproducts",
        element: <AdminProducts />,
      },
      {
        path: "/admin/adminusers",
        element: <AdminUsers />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
