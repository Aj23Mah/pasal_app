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

  function pathMatchRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }

  return (
    <div className="bg-white border-b shadow-5m sticky top-0 z-40">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div className="flex text-sm font-semibold cursor-pointer" onClick={() => navigate("/")}>
          {/* <img
            src="../assets/logo1.png"
            alt="logo"
            className="h-10 cursor-pointer"
            onClick={() => navigate("/")}
          /> */}
          {/* <video src='../assets/svg/logo.mp4' /> */}
          {/* <video width="320" height="240" autoplay>
            <source src="../assets/svg/logo.mp4" type="video/mp4" />
          </video> */}
          <span className="text-blue-500">hardware</span><p className="text-red-700">Pasal</p>
        </div>
        <div>
          <ul className="flex space-x-10">
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent transition-colors duration-200 border-b-red-500 hover:text-black hover:border-b-red-500 active:text-black active:border-b-red-500 ${
                pathMatchRoute("/")
              }`}
              onClick={() => navigate("/")}
            >
              Shop
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent transition-colors duration-200 border-b-red-500 hover:text-black hover:border-b-red-500 active:text-black active:border-b-red-500 ${
                pathMatchRoute("/about")
              }`}
              onClick={() => navigate("/about")}
            >
              About
            </li>

            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent border-b-red-500 hover:text-black hover:border-b-red-500 active:text-black active:border-b-red-500 ${
                pathMatchRoute("/contact") 
              }`}
              onClick={() => navigate("/contact")}
            >
              Contact
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent border-b-red-500 hover:text-black hover:border-b-red-500 active:text-black active:border-b-red-500 ${
                (pathMatchRoute("/sign-in") || pathMatchRoute("/profile"))
              }
              
              `}
              onClick={() => navigate("/profile")}
            >
              {pageState}
            </li>
            <li className='cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent border-b-red-500 hover:text-black hover:border-b-red-500 active:text-black active:border-b-red-500' onClick={() => navigate("/cart")}><i class="fa fa-shopping-cart" aria-hidden="true" /></li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
