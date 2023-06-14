import React from "react";
import "./contact.css";

export const Contact = () => {
  return (
    <div className="contact_container">
      <div className="contact">
        <div className="label">Contact Us</div>
        <div className="head">Get In Touch With Us</div>
        <div>
          Please contact us for creative solutions based on your unique
          situation. Our Focus is on establishing long term supports and
          resources for high-conflict cases involving abuse and post-separation
          abuse in family court.
        </div>
        <div>
          <form className="form">
            <div className="input_group">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
              <input type="email" placeholder="Email" />
              <input type="number" placeholder="ZIP Code" />
              <textarea
                cols="30"
                rows="10"
                placeholder="Type Your Message Here"
              ></textarea>
            </div>
            <button className="btn_submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};
