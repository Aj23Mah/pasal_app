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

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  

  return (
    <div className="shop-section">
      <div className="mt-4 mb-6 text-center text-black text-3xl font-semibold">
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

          <div className="category-dropdown">
            <select value={selectedCategory} onChange={handleCategoryChange}>
              <option value="">All</option>
              <option value="pipe & fitting">pipe & fitting</option>
              <option value="bathroom accessories">bathroom</option>
              <option value="lock">lock</option>
              <option value="machine">machine</option>
            </select>
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
