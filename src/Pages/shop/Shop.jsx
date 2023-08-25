import React, { useState } from "react";
import "./shop.css";
import { PRODUCTS } from "../../product";
import { Product } from "./product";

// import { useRef } from "react";
// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

// import required modules
// import { Autoplay, Pagination } from "swiper";

// importing images for slider
// import basin from "../../assets/basin.jpg";
// import camot from "../../assets/camot.jpg";
// import cutter from "../../assets/cutter.jpg";

export const Shop = (props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleCategoryButtonClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="shop-section">
      {/* <div className="banner">
        <div className="hero-section">
              <h1>Samikshya Nirman Samagri Suppliers</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing 
                elit. Commodi natus distinctio molestias, laborum 
                doloremque animi sequi saepe modi accusamus doloribus 
                est tenetur iure alias quidem dolores ipsa provident 
                tempora corrupti.</p>
        </div>
        <Swiper
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="flex">
              <img src={basin} alt="First Slider image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={camot} alt="second Slider image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={cutter} alt="third Slider image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={basin} alt="fourth Slider image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={camot} alt="First Slider image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={cutter} alt="First Slider image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={basin} alt="fivth Slider image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={camot} alt="sixth Slider image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={cutter} alt="seventh Slider image" />
          </SwiperSlide>
        </Swiper>
      </div> */}

      <div className="shopTitle">
        <h1> hamroPasal </h1>
      </div>

      <div className="productContainer">
        <div className="category">
          <div className="category-search">
            <input
              type="text"
              placeholder="search"
              value={searchQuery}
              onChange={handleSearchInputChange}
            />
          </div>
          <div className="category-btn">
            <button onClick={() => setSelectedCategory("")}>All</button>
            <button onClick={() => handleCategoryButtonClick("pipe & fitting")}>
              pipe & fitting
            </button>
            <button
              onClick={() => handleCategoryButtonClick("bathroom accessories")}
            >
              bathroom
            </button>
            <button onClick={() => handleCategoryButtonClick("lock")}>
              lock
            </button>
            <button onClick={() => handleCategoryButtonClick("machine")}>
              machine
            </button>
          </div>
        </div>

        <div className="products">
          {PRODUCTS.filter(
            (product) =>
              product.productName
                .toLowerCase()
                .includes(searchQuery.toLowerCase()) &&
              (!selectedCategory ||
                product.category.toLowerCase() ===
                  selectedCategory.toLowerCase())
          ).map((product) => (
            <Product key={product.id} data={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
