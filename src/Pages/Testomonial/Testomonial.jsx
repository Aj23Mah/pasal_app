import React from "react";
// import './Testomonial.css'

import review1 from "../../assets/img18.jpg";
import review2 from "../../assets/img19.jpg";
import review3 from "../../assets/img20.jpg";

import { RiStarSFill } from "react-icons/ri";

const review = [
  {
    img: review1,
    name: "Jone Doe",
    stars: <RiStarSFill />,
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    img: review2,
    name: "David",
    stars: <RiStarSFill />,
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    img: review3,
    name: "Akon",
    stars: <RiStarSFill />,
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    img: review2,
    name: "Danial",
    stars: <RiStarSFill />,
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
];
const Testomonial = () => {
  return (
    <div className="lg:px-20 px-5 py-5">
      <div className="text-center lg:text-3xl text-xl font-semibold mb-4">Testomonial</div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
        {review.map((v, key) => (
          <div key={key} className="flex flex-col justify-center items-center p-4 bg-slate-100">
            <div>
              <img
                src={v.img}
                alt=""
                style={{
                  aspectRatio: "1 / 1",
                  height: "100px",
                  width: "100px",
                }}
                className="rounded-full"
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <div>{v.name}</div>
              <div className="flex text-orange-400">
                <div>{v.stars}</div>
                <div>{v.stars}</div>
                <div>{v.stars}</div>
                <div>{v.stars}</div>
                <div>{v.stars}</div>
              </div>
              <div>{v.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testomonial;
