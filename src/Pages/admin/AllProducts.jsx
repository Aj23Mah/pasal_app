import React, { useState, useEffect } from "react";
import { Container, Col } from "reactstrap";
import { ApiGetProducts } from "../../API/Product";
import { db } from "../../firebase";
import { doc, deleteDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import AdminNav from "./AdminNav";

const AllProducts = () => {
  const [newItem, setNewItem] = useState(null);
  const [products, setProducts] = useState([]);
  // Function to fetch the new item from the backend API
  const fetchNewItem = async () => {
    try {
      const res = await ApiGetProducts();
      console.log(res);
      setProducts(res);
      // const response = await fetch('/api/new-item'); // Replace with your API endpoint
      // if (!response.ok) {
      //   throw new Error('Failed to fetch data');
      // }
      // const data = await response.json();
      // setNewItem(data);
    } catch (error) {
      console.error("Error fetching new item:", error);
    }
  };

  useEffect(() => {
    fetchNewItem(); // Fetch the new item when the component mounts
  }, []);

  // const deleteProduct = async (id) => {
  //   try {
  //     // Make an API call to delete the product by ID on the server
  //     // Replace 'ApiDeleteProduct' with your actual delete API function
  //     // await ApiDeleteProduct(id);

  //     // Assuming a successful delete, update the local state to remove the product
  //     setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
  //   } catch (error) {
  //     console.error("Error deleting product:", error);
  //   }
  // }

  // const deleteProduct = async (id) => {
  //   try {
  //     // Make an API call to delete the product by ID on the server
  //     await ApiDeleteProduct(id);

  //     // Assuming a successful delete, update the local state to remove the product
  //     setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
  //   } catch (error) {
  //     console.error("Error deleting product:", error);
  //   }
  // };

  const deleteProduct = async (id) => {
    await deleteDoc(doc(db, "products", id));
    toast.success("Deleted!");
  };

  return (
    <section>
      <>
        <AdminNav />
      </>
      <Container>
        <Col lg="12">
          <table className="table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Category</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 ? (
                products.map((v, key) => (
                  <tr key={key}>
                    <td>
                      <img
                        src={v.productImage}
                        alt=""
                        style={{
                          aspectRatio: "1 / 1",
                          height: "100px",
                          width: "100px",
                        }}
                        className="object-center object-scale-down border rounded bg-center"
                      />
                    </td>
                    <td>{v.title}</td>
                    <td>{v.description}</td>
                    <td>{v.price}</td>
                    <td>
                      <button
                        onClick={() => deleteProduct(v.id)}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <h3 className="py-5 text-center fw-bold">Loading.....</h3>
              )}
            </tbody>
          </table>
        </Col>
      </Container>
    </section>
  );
};

export default AllProducts;
