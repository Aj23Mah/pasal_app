import React from "react";
import "./Contact.css";
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { GiEarthAsiaOceania } from "react-icons/gi";

const Contact = () => {

  

  return (
    <div className="contact-section">
      <div className="container">
        
        <div className="contact-detail">
          <h1>let's get in touch</h1>
          <p>We're open for any suggestion or just to have a chat.</p>
          <div>
            <div className="info">
              <i>
                <IoLocationOutline />
              </i>
              Address: hiledol, tarkeshwor-11
            </div>
            <div className="info">
              <i>
                <AiOutlinePhone />
              </i>
              Phone: 01-4027555, 9861544966
            </div>
            <div className="info">
              <i>
                <AiOutlineMail />
              </i>
              Email: info@gmail.com
            </div>
            <div className="info">
              <i>
                <GiEarthAsiaOceania />
              </i>
              Website anything.com
            </div>
          </div>
        </div>

        <div className="form-detail">
          <h1 className="row">Contact Us</h1>
          <form action="https://formspree.io/f/xdovpvjw" method="POST">
            <div className="row">
              <label className="form-label" htmlFor="name">
                Full Name
              </label>
              <br />
              <input
                className="form-control"
                type="text"
                name="name"
                autoComplete="off"
                required
              />
            </div>
            <div className="row">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <br />
              <input
                className="form-control"
                type="email"
                name="email"
                autoComplete="off"
                required
              />
            </div>
            {/* <div className="row">
              <label className="form-label" htmlFor="subject">
                Subject
              </label>
              <br />
              <input
                className="form-control"
                type="text"
                name="subject"
                autoComplete="off"
                required
              />
            </div> */}
            <div className="row">
              <label className="form-label" htmlFor="message">
                Message
              </label>
              <br />
              <textarea
                className="form-control"
                cols="40"
                row="6"
                name="message"
                autoComplete="off"
                required
              ></textarea>
            </div>
            <button className="btn" type="submit">
              Submit
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;
