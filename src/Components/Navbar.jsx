import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
const Navbar = () => {
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
        setPageState("Sign In");
      }
    });
  }, [auth]);
  // function pathMatchRoute(route) {
  //   if (route === location.pathname) {
  //     return true;
  //   }
  // }

  function pathMatchRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }

  return (
    <div className="bg-white border-b shadow-5m sticky top-0 z-40">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div>
          <img
            src="https://d11n8f3gngmlqh.cloudfront.net/catalog/product/cache/c5b0e6136a6dd7f7d91d8b889ed40f35/g/w/gwd-np001.jpg"
            alt="logo"
            className="h-10 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
        <div>
          <ul className="flex space-x-10">
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent transition-colors duration-200 ${
                pathMatchRoute("/")
                  ? "text-black border-b-red-500 hover:text-black hover:border-b-red-500 active:text-black active:border-b-red-500"
                  : ""
              }`}
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent transition-colors duration-200 ${
                pathMatchRoute("/about")
                  ? "text-black border-b-red-500 hover:text-black hover:border-b-red-500 active:text-black active:border-b-red-500"
                  : ""
              }`}
              onClick={() => navigate("/about")}
            >
              About
            </li>

            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/contact") &&
                "text-black border-b-red-500 hover:text-black hover:border-b-red-500 active:text-black active:border-b-red-500"
              }`}
              onClick={() => navigate("/contact")}
            >
              Contact
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                (pathMatchRoute("/sign-in") || pathMatchRoute("/profile")) &&
                "text-black border-b-red-500 hover:text-black hover:border-b-red-500 active:text-black active:border-b-red-500"
              }
              
              `}
              onClick={() => navigate("/profile")}
            >
              {pageState}
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
