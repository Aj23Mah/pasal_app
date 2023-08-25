
// black ola navbar

import React, { useState } from "react";
import { Transition } from "@headlessui/react";
// Importing icons from react-icons/fa module
import { FaBars, FaTimes } from "react-icons/fa";

import { useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";

import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [pageState, setPageState] = useState("sign in");
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  // function pathMatchRoute(path) {
  //   // const location = useLocation();
  //   return location.pathname === path ? "border-b border-gray-600" : "";
  // }

  // console.log(location.pathname)
  // const navigate = useNavigate(); // for click and change pages in the websites
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

  // const [isLoggedIn] = useState(true);
  // function isLoggedIn() {
  //   // You can use any logic here to determine if the user is logged in
  //   // For example, you could check if there is a token in local storage
  //   // or if there is a user object in your app's state
  //   // Here's a simple example that always returns true:
  //   return true;
  // }

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img className="h-8 w-8" src="logo.svg" alt="Logo" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="/"
                  className="px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900"
                >
                  Home
                </a>
                <a
                  href="/about"
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                >
                  About
                </a>
                <a
                  href="/contact"
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                >
                  Contact
                </a>
                <a
                  className={`cursor-pointer p-4 text-sm font-semibold text-gray-400 ${
                    pathMatchRoute("/sign-in") || pathMatchRoute("/profile")
                  }`}
                  // onClick={() => Navigate("/profile")}
                  href="/sign-in"
                >
                  {pageState}
                </a>

                {/* <a
                    href="/sign-in"
                    className={`cursor-pointer p-4 text-sm font-semibold border-b ${
                      isActive('/sign-in') ? 'border-blue-500 text-blue-500' : 'border-gray-600 text-gray-400'
                    }`}
                  >
                    //{isLoggedIn ? 'Profile' : 'Sign In'}
                    // {pageState}
                  </a> */}

                <a
                  href="/cart"
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                >
                  <i class="fa fa-shopping-cart" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
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
        </div>
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
                href="/"
                className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900"
              >
                Home
              </a>
              <a
                href="/about"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
              >
                About
              </a>
              <a
                href="/contact"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
              >
                Contact
              </a>
              {/* <a
                href="/sign-in"
                className={`cursor-pointer p-4 text-sm font-semibold border-b ${
                  isActive("/sign-in")
                    ? "border-blue-500 text-blue-500"
                    : "border-gray-600 text-gray-400"
                }`}
              >
                {isLoggedIn ? "Profile" : "Sign In"}
              </a> */}
              <a
                className={`cursor-pointer p-4 text-sm font-semibold text-gray-400 ${
                  pathMatchRoute("/sign-in") || pathMatchRoute("/profile")
                }`}
                onClick={() => Navigate("/profile")}
              >
                {pageState}
              </a>

              <a
                href="/cart"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
              >
                <i class="fa fa-shopping-cart" aria-hidden="true" />
              </a>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
};

export default Navbar;
