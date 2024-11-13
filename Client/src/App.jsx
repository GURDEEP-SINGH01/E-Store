import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Products from "./components/Products/Products";
import Navbar from "./components/Navbar/Navbar";
import Checkout from "./components/CheckoutForm/Checkout/Checkout";
import Cart from "./components/Cart/Cart";
import Login from "./components/Home/login";
import { CheckoutLoader } from "./components/CheckoutForm/Checkout/Checkout";
import { ThemeProvider, createTheme } from "@mui/material";
import './App.css'

const theme = createTheme();

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ThemeProvider theme={theme}>
        <Navbar />
      </ThemeProvider>
    ),
    id: "root",
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "checkout",
        element: <Checkout />,
        loader: CheckoutLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App
