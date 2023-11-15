import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// import { ShopContext } from "../../context/shop-context";

import { ApiGetProducts } from "../../API/Product";
// import { db } from "../../firebase";
// import { doc, deleteDoc } from "firebase/firestore";
// import { toast } from "react-toastify";

const NewItems = () => {
  // const [id] = props.data;
  // const { addToCart, cartItems } = useContext(ShopContext);

  // const cartItemAmount = cartItems[id];

  const [products, setProducts] = useState([]);
  // Function to fetch the new item from the backend API
  const fetchNewItem = async () => {
    try {
      const res = await ApiGetProducts();
      console.log(res);
      setProducts(res);
    } catch (error) {
      console.error("Error fetching new item:", error);
    }
  };

  useEffect(() => {
    fetchNewItem(); // Fetch the new item when the component mounts
  }, []);

  // const deleteProduct = async (id) => {
  //   await deleteDoc(doc(db, "products", id));
  //   toast.success("Deleted!");
  // };

  return (
    <div className="px-8">
      <h1 className="text-center">New Products</h1>
      <div className="flex flex-wrap px-5 gap-2">
      {/* grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 */}
        {products.length > 0 ? (
          products.map((v, key) => (
            <div
              key={key}
              className="min-w-0 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto grid place-items-center p-4 rounded shadow-2xl mb-5"
            >
              <motion.img
                whileHover={{ scale: 0.9 }}
                src={v.productImage}
                alt=""
                style={{
                  aspectRatio: "1 / 1",
                  height: "200px",
                  width: "200px",
                }}
                className="object-center object-scale-down border rounded bg-center"
              />

              <p className="font-semibold text-center font-xl">{v.title}</p>
              <div className="flex justify-around m-2">
                <p>price:</p>
                <p> Rs.{v.price} </p>
              </div>
              <button className="md:px-5 py-2 px-3 bg-blue-600 hover:bg-blue-800 text-white md:text-lg text-sm rounded">Add to Cart</button>
              {/* <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1 rounded"
                  onClick={() => addToCart(id)}
                >
                  Add to Cart {cartItemAmount > 0 && <> ({cartItemAmount}) </>}
                </button> */}
              {/* <div>{v.title}</div>
              <div>{v.description}</div>
              <div>{v.price}</div>
              <div>
                <button
                  onClick={() => deleteProduct(v.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </div> */}
            </div>
          ))
        ) : (
          <h3 className="py-5 text-center fw-bold">Loading.....</h3>
        )}
      </div>
    </div>
  );
};

export default NewItems;
