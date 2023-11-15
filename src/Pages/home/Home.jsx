import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Services from "./Services";
import NewItems from "./NewItems";
import Clock from "./Clock";

import pprImg from "../../assets/ppr_pipe-removebg-preview.png";
import Testomonial from './../Testomonial/Testomonial';

const Home = () => {
  return (
    <>
      <section className="flex justify-center items-center md:flex-row flex-col gap-10 bg-slate-100">
        <div className="w-1/2">
          <p className="hero_subtitle">Find the product</p>
          <h2>Design House As Your Prefer</h2>
          <p className="text-lg font-normal">
            Lorem ipsum dolor, sit consectetur. cum dolores, et rem vel, modi
            eum, lorem ipsum dolor, sit consectetur. cum dolores.
          </p>
          <Link to="/shop" className="no-underline">
            <motion.button
              whileTap={{ scale: 0.8 }}
              className="py-2 px-4 font-semibold text-md text-white bg-blue-500 hover:bg-blue-700 rounded"
            >
              Shop Now
            </motion.button>
          </Link>
        </div>

        <div className="hero_img">
          <img
            src="https://us.123rf.com/450wm/kolopach/kolopach1502/kolopach150200231/36275059-shop-icon.jpg?ver=6"
            alt=""
          />
        </div>
      </section>

      <Services />

      <NewItems />

      <section className="flex md:justify-between justify-center py-5 bg-slate-900 lg:px-28 lg:py-10 md:px-12 md:py-8 sm:px-5 sm:py-5">
        <div className="count_down-col">
          <div className="clock_top-content">
            <h4 className="text-white fs-6 mb-2">New year Offers</h4>
            <span className="text-white mb-2">Get Upto 5% on</span>
            <h3 className="text-white fs-5 mb-3">PPR Pipes and Fitting</h3>
          </div>
          <Clock />
          <Link to="/shop">
            <motion.button
              whileTap={{ scale: 1.2 }}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-800 text-white md:text-lg text-base rounded"
            >
              Visit Store
            </motion.button>
          </Link>
        </div>
        <div className="hidden md::block lg:block">
          <img
            src={pprImg}
            style={{
              aspectRatio: "1 / 1",
              height: "250px",
              width: "250px",
            }}
            alt=""
          />
        </div>
      </section>

      <Testomonial />
      
      <section></section>
    </>
  );
};

export default Home;
