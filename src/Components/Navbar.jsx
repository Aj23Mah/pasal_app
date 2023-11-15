import React, { useState, useEffect } from "react";
// import logo from '../assets/logo1.png'
import logo from '../assets/hardware-shop-high-resolution-logo-transparent.png'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Transition } from "@headlessui/react";
// Importing icons from react-icons/fa module
import { FaBars, FaTimes } from "react-icons/fa";

import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // for sing-in and profile state
  const [pageState, setPageState] = useState("sign in");

  // console path or location show => page name
  const location = useLocation(); // color bight and dim on li tags

  // console.log(location.pathname)
  const navigate = useNavigate(); // for click and change pages in the websites
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setPageState("Profile");
      } else {
        setPageState("SignIn");
      }
    });
  }, [auth]);

  function pathMatchRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }

  return (
    // for fixed navbar => className="fixed h-14 w-[100%] m-auto z-10"
    <nav>
      <div className="flex justify-between items-center h-16 max-w-[100%] mx-auto px-4 bg-white text-black">
        {/* <div className="flex flex-row h-10 justify-center">
        <img src={logo} alt="Logo" className="" />
        <h2 className="text-xl font-bold text-[#6a47ba] justify-center items-center">
        // w-full text-2xl font-bold text-[#f95a41]
          hardwarePasal
        </h2>
        </div> */}
        <div className=" flex items-center w-full text-2xl font-bold text-gray-500">
          <img src={logo} style={{ width: "80px"}} alt="" />
          <div className="hidden sm:block">HardwarePasal</div>
          {/* <img src={logo} style={{ width: "50px"}} alt="" /> */}
        </div>
        <ul className="hidden md:flex font-xl">
          <li
            className="cursor-pointer px-6 py-2 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent border-b-red-500 hover:text-black hover:border-b-red-500 active:text-black active:border-b-red-500"
            onClick={() => navigate("/")}
          >
            Home
          </li>
          <li
            className="cursor-pointer px-6 py-2 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent border-b-red-500 hover:text-black hover:border-b-red-500 active:text-black active:border-b-red-500"
            onClick={() => navigate("/shop")}
          >
            Shop
          </li>

          <li
            className="cursor-pointer px-6 py-2 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent border-b-red-500 hover:text-black hover:border-b-red-500 active:text-black active:border-b-red-500"
            onClick={() => navigate("/contact")}
          >
            Contact
          </li>
          <li
            className={`cursor-pointer px-6 py-2 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent border-b-red-500 hover:text-black hover:border-b-red-500 active:text-black active:border-b-red-500 ${
              pathMatchRoute("/sign-in") || pathMatchRoute("/profile")
            }
              
              `}
            onClick={() => navigate("/profile")}
          >
            {pageState}
          </li>
          <li
            className="cursor-pointer px-6 py-2 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent border-b-red-500 hover:text-black hover:border-b-red-500 active:text-black active:border-b-red-500"
            onClick={() => navigate("/cart")}
          >
            <i class="fa fa-shopping-cart" aria-hidden="true" />
          </li>
        </ul>

        {/* <div className="mt-20"> */}
        {/* for small screen => responsiveness */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <FaTimes className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <FaBars className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
        {/* <div className="mt-20"> */}
        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {/* <div className=""> */}
          {(ref) => (
            <div ref={ref} className="md:hidden">
              <div className="flex flex-col fixed left-[-200px] bg-slate-200 mx-10 my-7 p-8 items-center justify-center z-50">
                {/* px-2 pt-2 pb-3 space-y-1 sm:px-3 */}
                <a href="/" className="text-3xl pb-2 text-black">
                  Home
                </a>
                <a href="/shop" className="text-3xl pb-2 text-black">
                  Shop
                </a>
                <a href="/contact" className="text-3xl p-2 text-black">
                  Contact
                </a>

                <a
                  className={`text-3xl p-2 text-black ${
                    pathMatchRoute("/sign-in") || pathMatchRoute("/profile")
                  }`}
                  // onClick={() => navigate("/profile")}
                  href="/profile"
                >
                  {pageState}
                </a>

                <a href="/cart" className="text-3xl p-2 text-black">
                  <i class="fa fa-shopping-cart" aria-hidden="true" />
                </a>
              </div>
            </div>
          )}
          {/* </div> */}
        </Transition>
        {/* </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
