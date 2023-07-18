import { createBrowserRouter, RouterProvider} from "react-router-dom";
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import  { BreakpointProvider } from 'react-socks';
import '@fortawesome/fontawesome-free/css/all.min.css';

import './app.css';
import Home from './Pages/Home';
// import Category from './Components/PLP/Category';
import Results from "./Pages/Results";
import Description from './Components/PDP/Description';
import CartPage from "./Pages/CartPage";
import AddProduct from "./Pages/AddProduct";
import AddTag from "./Pages/AddTag";
import AddAdmin from "./Pages/AddAdmin";
import Checkout from "./Pages/Checkout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/products/description/:id",
    element: <Description />,
  },
  {
    path: "/products/search/:query/:page/return",
    element: <Results />,
  },
  {
    path: "/products/category/:category/:page/return",
    element: <Results />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/cart/checkout",
    element: <Checkout />,
  },
  {
    path: "/admin/products/add",
    element: <AddProduct />,
  },
  {
    path: "/admin/categories/edit",
    element: <AddTag />,
  },
  {
    path: "/admin/add",
    element: <AddAdmin />,
  },
  {
    path: "*",
    element: false,
  },
]);

function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <BreakpointProvider>
          {/* <div className={`${ false && 'darken-main-content'}`} /> */}
          <RouterProvider router={router} />
        </BreakpointProvider>
      </Provider>
    </React.StrictMode>
  );
}

export default App;
