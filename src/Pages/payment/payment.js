import React from "react";
import "./payment.css";

export const Payment = () => {
  return (
    <div className="wrapper">
      <h2>Payment Form</h2>
      <form method="POST">
        <h4>Account</h4>
        <div className="input-group">
          <div className="input-box">
            <input type="text" placeholder="Full Name" required class="name" />
            <i class="fa fa-user icon"></i>
          </div>
          <div className="input-box">
            <input type="text" placeholder="Nick Name" required class="name" />
            <i class="fa fa-user icon"></i>
          </div>
        </div>
        <div className="input-group">
          <div className="input-box">
            <input
              type="email"
              placeholder="Email Adress"
              required
              class="name"
            />
            <i class="fa fa-envelope icon"></i>
          </div>
        </div>
        <div className="input-group">
          <div className="input-box">
            <h4> Date of Birth</h4>
            <input type="text" placeholder="DD" class="dob" />
            <input type="text" placeholder="MM" class="dob" />
            <input type="text" placeholder="YYYY" class="dob" />
          </div>
          <div className="input-box">
            <h4> Gender</h4>
            <input type="radio" id="b1" name="gendar" checked class="radio" />
            <label for="b1">Male</label>
            <input type="radio" id="b2" name="gendar" class="radio" />
            <label for="b2">Female</label>
          </div>
        </div>
        <div className="input-group">
          <div className="input-box">
            <h4>Payment Details</h4>
            <input type="radio" name="pay" id="bc1" checked class="radio" />
            <label for="bc1">
              <span>
              <i class="fa-brands fa-cc-visa"></i> Credit Card
              </span>
            </label>
            <input type="radio" name="pay" id="bc2" class="radio" />
            <label for="bc2">
              <span>
              <i class="fa-brands fa-cc-paypal"></i> Paypal
              </span>
            </label>
          </div>
        </div>
        <div className="input-group">
          <div className="input-box">
            <input type="tel" placeholder="Card Number" required class="name" />
            <i class="fa fa-credit-card icon"></i>
          </div>
        </div>
        <div className="input-group">
          <div className="input-box">
            <input type="tel" placeholder="Card CVC" required class="name" />
            <i class="fa fa-user icon"></i>
          </div>
          <div className="input-box">
            <select>
              <option>01 jun</option>
              <option>02 jun</option>
              <option>03 jun</option>
            </select>
            <select>
              <option>2020</option>
              <option>2021</option>
              <option>2022</option>
            </select>
          </div>
        </div>
        <div className="input-group">
          <div className="input-box">
            <button type="submit">PAY NOW</button>
          </div>
        </div>
      </form>
    </div>
  );
};
