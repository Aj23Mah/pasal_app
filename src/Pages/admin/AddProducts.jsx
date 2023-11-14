import React, { useContext, useState } from "react";
import { Container, Col, Form, FormGroup } from "reactstrap";

// import {useShopContext} from '../../context/shop-context'
import { ShopContext } from "../../context/shop-context";
import { useNavigate } from "react-router";
import AdminNav from './AdminNav';

const AddProducts = () => {
  const { addProduct } = useContext(ShopContext); // Get the addProduct function from the context
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    title: "",
    shortDescription: "",
    description: "",
    price: "",
    category: "",
    productImage: null,
  });

  const handleAddProduct = async (e) => {
    e.preventDefault();
    // Call the addProduct function to add the product to the shop
    await addProduct(product);
    navigate("/profile/dashboard/all-products");
  };
  // Handle input changes and form submission

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    // Update the product state based on user input
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleChangeFile = (e) => {
    const { name, files } = e.target;

    // Update the product state with the selected file
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: files[0],
    }));
  };

  return (
    <section className="mb-4">
      <>
        <AdminNav />
      </>
      <Container>
        <Col lg="12">
          <h4 className="mb-5 text-center">AddProducts</h4>
          {loading ? (
            <h4 className="py-5">Loading......</h4>
          ) : (
            <>
              <Form onSubmit={(e) => handleAddProduct(e)}>
                <FormGroup className="form_group">
                  <span>Product title</span>
                  <input
                    type="text"
                    name="title"
                    placeholder="Name....."
                    value={product.title}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
                <FormGroup className="form_group">
                  <span>Short Description</span>
                  <input
                    type="text"
                    name="shortDescription"
                    placeholder="lorem....."
                    //   value={enterShortDesc}
                    value={product.shortDescription}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
                <FormGroup className="form_group">
                  <span>Description</span>
                  <input
                    type="text"
                    name="description"
                    placeholder="Description....."
                    //   value={enterDescription}
                    //   onChange={(e) => setEnterDescription(e.target.value)}
                    value={product.description}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>

                <div className="d-flex aligin-items-center justify-content-between gap-5">
                  <FormGroup className="form_group w-50">
                    <span>Price</span>
                    <input
                      type="number"
                      name="price"
                      placeholder="Rs. price..."
                      // value={enterPrice}
                      // onChange={(e) => setEnterPrice(e.target.value)}
                      value={product.price}
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>

                  <FormGroup className="form_group w-50">
                    <span>Category</span>
                    <br />
                    <select
                      className="w-100 p-2 border border-dark rounded outline-none"
                      name="category"
                      // value={enterCategory}
                      // onChange={(e) => setEnterCategory(e.target.value)}
                      value={product.category}
                      onChange={handleChange}
                    >
                      <option>Select Category</option>
                      <option value="machine">Machine</option>
                      <option value="locks">Locks</option>
                      <option value="water tanks">Water Tanks</option>
                      <option value="bathroom accessories">
                        Bathroom Accessories
                      </option>
                      <option value="pipes & fittings">
                        Pipes and Fittings
                      </option>
                      <option value="other Products">Other Products</option>
                    </select>
                  </FormGroup>
                </div>

                <div>
                  <FormGroup className="form_group">
                    <span>Product Image</span>
                    <input
                      type="file"
                      name="productImage"
                      required
                      // value={enterProductImg}
                      // onChange={(e) => setEnterProductImg(e.target.files[0])}
                      onChange={handleChangeFile}
                    />
                  </FormGroup>
                </div>

                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  type="submit"
                >
                  Add Product
                </button>
              </Form>
            </>
          )}
        </Col>
      </Container>
    </section>
  );
};

export default AddProducts;
