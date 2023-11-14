import React from "react";
import { Container, Col, Form, FormGroup } from "reactstrap";

import "./checkout.css";
// import { useSelector } from "react-redux";

// import { ShopContext } from '../../context/shop-context';
import { useLocation } from "react-router-dom";

const Checkout = () => {
  //props => paremeter
  // const {id, productName, price, productImage} = props.data;
  // const {price} = props.data;
  // const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);

  // const totalQty = useSelector((state) => state.cart.totalQuantity);
  // const totalAmt = useSelector((state) => state.cart.totalAmount);

  const location = useLocation();
const { totalQty, totalAmount } = location.state || {};

  return (
    <section className="mb-4">
      <Container>
        {/* <Row> */}
        <Col lg="8">
          <h6 className="mb-4 text-lg fw-bold">Billing Information</h6>
          <Form className="billing_form">
            <FormGroup className="form_group">
              <input type="text" placeholder="Enter your name" />
            </FormGroup>

            <FormGroup className="form_group">
              <input type="email" placeholder="Enter your email" />
            </FormGroup>

            <FormGroup className="form_group">
              <input type="number" placeholder="Phone number" />
            </FormGroup>

            <FormGroup className="form_group">
              <input type="text" placeholder="Street address" />
            </FormGroup>

            <FormGroup className="form_group">
              <input type="text" placeholder="City" />
            </FormGroup>

            <FormGroup className="form_group">
              <input type="text" placeholder="Postal code" />
            </FormGroup>

            <FormGroup className="form_group">
              <input type="text" placeholder="Country" />
            </FormGroup>
          </Form>
        </Col>
        <Col lg="4">
          <div className="checkout_cart">
            <h6>
              Total Qty: <span>{totalQty} items</span>
            </h6>
            <h6>
              Subtotal: <span>${totalAmount}</span>
            </h6>
            <h6>
              <span>
                Shipping: <br /> free shipping
              </span>
              <span>Rs.0</span>
            </h6>
            <h4>
              Total Cost: <span>Rs.{totalAmount}</span>
            </h4>
            <button className="buy_btn auth_btn w-100 border-2 bg-transparent text-white p-1">
              place an order
            </button>

          </div>
        </Col>
        {/* </Row> */}
      </Container>
    </section>
  );
};

export default Checkout;
