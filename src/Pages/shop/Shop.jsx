import React, { useState } from "react";
import "./shop.css";
import { PRODUCTS } from "../../product";
import { Product } from "./product";

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
      <div className="banner-box">
        <div className="banner">banner</div>
      </div>
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
