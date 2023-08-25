
// white ola Navbar

import React, { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Transition } from "@headlessui/react";
// Importing icons from react-icons/fa module
import { FaBars, FaTimes } from "react-icons/fa";

import { useLocation, useNavigate } from "react-router-dom";
import {logo} from '../assets/logo1.png'

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

<nav>

    <div className="flex justify-between items-center h-14 max-w-full: mx-auto px-4 bg-white text-black">
      <h2 className="w-full text-2xl font-bold text-[#f95a41]">
        hardwarePasal
      </h2>
      <ul className="hidden md:flex font-medium">
        <li
          className='cursor-pointer p-6 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent border-b-red-500 hover:text-black hover:border-b-red-500 active:text-black active:border-b-red-500'
          
          onClick={() => navigate("/")}
        >
          Shop
        </li>
        <li
          className='cursor-pointer p-6 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent border-b-red-500 hover:text-black hover:border-b-red-500 active:text-black active:border-b-red-500'
          onClick={() => navigate("/about")}
        >
          About
        </li>

        <li
          className='cursor-pointer p-6 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent border-b-red-500 hover:text-black hover:border-b-red-500 active:text-black active:border-b-red-500'
          onClick={() => navigate("/contact")}
        >
          Contact
        </li>
        <li
          className={`cursor-pointer p-6 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent border-b-red-500 hover:text-black hover:border-b-red-500 active:text-black active:border-b-red-500 ${
            pathMatchRoute("/sign-in") || pathMatchRoute("/profile")
          }
              
              `}
          onClick={() => navigate("/profile")}
        >
          {pageState}
        </li>
        <li
          className="cursor-pointer p-6 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent border-b-red-500 hover:text-black hover:border-b-red-500 active:text-black active:border-b-red-500"
          onClick={() => navigate("/cart")}
        >
          <i class="fa fa-shopping-cart" aria-hidden="true" />
        </li>
      </ul>



      {/* for small screen => responsiveness */}
          <div className="-mr-2 flex md:hidden">
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


	

<Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >

 {(ref) => (
          <div ref={ref} className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900"
                onClick={() => navigate("/")}
              >
                Home
              </a>
              <a
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                onClick={() => navigate("/about")}
              >
                About
              </a>
              <a
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                onClick={() => navigate("/contact")}
              >
                Contact
              </a>
              <a
                className={`cursor-pointer p-4 text-sm font-semibold text-gray-400 ${
                  pathMatchRoute("/sign-in") || pathMatchRoute("/profile")
                }`}
                onClick={() => navigate("/profile")}
              >
                {pageState}
              </a>

              <a
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                onClick={() => navigate("/cart")}
              >
                <i class="fa fa-shopping-cart" aria-hidden="true" />
              </a>
            </div>
          </div>
        )}

</Transition>
</div>
</nav>


  );
};

export default Navbar;
