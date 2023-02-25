import React from "react";
import './Product.css';

const products = [
  {
    id: 1,
    name: "pipe and fitting",
    price: 100,
    imageUrl: "./images/basin.jpg",
  },
  {
    id: 2,
    name: "pipe and fitting",
    price: 100,
    imageUrl: "./images/mirror-1.jpg",
  },
  {
    id: 3,
    name: "pipe and fitting",
    price: 100,
    imageUrl: "./images/female-socket.jpg",
  },
  {
    id: 4,
    name: "pipe and fitting",
    price: 100,
    imageUrl: "./images/female-elbo.png",
  },
  {
    id: 5,
    name: "pipe and fitting",
    price: 100,
    imageUrl: "./images/ball-valve.jpg",
  },
  {
    id: 6,
    name: "pipe and fitting",
    price: 100,
    imageUrl: "./images/camot.jpg",
  },
  {
    id: 7,
    name: "pipe and fitting",
    price: 100,
    imageUrl: "./images/bathroom-rain-shower.jpg",
  },
  {
    id: 8,
    name: "pipe and fitting",
    price: 100,
    imageUrl: "./images/door-holder.jpg",
  },
  {
    id: 9,
    name: "pipe and fitting",
    price: 100,
    imageUrl: "./images/door-lock.jpg",
  },
  {
    id: 10,
    name: "pipe and fitting",
    price: 100,
    imageUrl: "./images/drill-machine.jpg",
  },
  {
    id: 11,
    name: "pipe and fitting",
    price: 100,
    imageUrl: "./images/grinder.jpg",
  },
  {
    id: 12,
    name: "pipe and fitting",
    price: 100,
    imageUrl: "./images/Brass-Basin-Faucet.jpg",
  },
  {
    id: 13,
    name: "pipe and fitting",
    price: 100,
    imageUrl: "./images/grinder.jpg",
  },
  {
    id: 14,
    name: "pipe and fitting",
    price: 100,
    imageUrl: "./images/butt hinges.jpg",
  },
  {
    id: 15,
    name: "pipe and fitting",
    price: 100,
    imageUrl: "./images/camot.jpg",
  },

  {
    id: 16,
    name: "Product 1",
    price: 10.99,
    imageUrl: "./images/basin.jpg",
  },
  {
    id: 17,
    name: "Product 2",
    price: 14.99,
    imageUrl: "./images/basin.jpg",
  },
  {
    id: 18,
    name: "pipe and fitting",
    price: 100,
    imageUrl: "./images/butt hinges.jpg",
  },
  {
    id: 19,
    name: "pipe and fitting",
    price: 100,
    imageUrl: "./images/camot.jpg",
  },
  {
    id: 20,
    name: "Product 3",
    price: 19.99,
    imageUrl: "./images/basin.jpg",
  },
];

function ProductList() {
  return (
    <div>
      <h1 className="text-center font-medium">Product List</h1>
      <div className="products">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <div>
            <img className="product-image" src={product.imageUrl} alt={product.name} />
            </div>
            <div>
            <h3 className="product-name">{product.name}</h3>
            </div>
            <div>
            <p className="product-price">Price: {product.price}</p>
            </div>
            <div><button className="product-add-button">Add to Cart</button></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
