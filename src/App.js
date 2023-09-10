import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Profile from "./Pages/Profile";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import PrivateRoute from "./Components/PrivateRoute";
import ForgetPassword from "./Pages/ForgetPassword";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Navbar from "./Components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Error from "./hooks/Error";

import { Shop } from "./Pages/shop/Shop";
import { Cart } from "./Pages/cart/cart";
// import Payment from "./Pages/payment/payment"
// import { Payment } from "./Pages/payment/Checkout";
import { ShopContextProvider } from "./context/shop-context";

import Checkout from "./Pages/payment/Checkout";
import Dashboard from "./Pages/admin/Dashboard";
import AddProducts from "./Pages/admin/AddProducts";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <>
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            {/* <Route path="/payment" element={<Payment />} /> */}
            {/* <Route path="/payment" element={<Payment />} /> */}
            <Route path="checkout" element={<Checkout />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/profile" element={<PrivateRoute />}>
              <Route path="/profile" element={<Profile />} />
              {/* <Route path="checkout" element={<Checkout />} /> */}
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="dashboard/add-products" element={<AddProducts />} />
              {/* <Route path="dashboard/all-products" element={<AllProducts />} />
              <Route path="dashboard/users" element={<Users />} /> */}
            </Route>

            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/forget-password" element={<ForgetPassword />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </Router>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </ShopContextProvider>
    </>
  );
};

export default App;
