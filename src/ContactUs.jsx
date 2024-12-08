import React, { useEffect, useState } from "react";
import "./ContactUs.css"; // Custom styles for the contact form

const ContactUs = () => {
  // State to control the visibility of the form
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 10000); // 10 seconds

    // Cleanup the timer in case the component is unmounted before the timeout
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container-fluid bg-dark text-white py-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          {showForm && (
            <div className="contact-form p-4 shadow-lg rounded">
              <h2 className="text-center mb-4">Contact Us</h2>
              <form>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="4"
                    placeholder="Write your message"
                  ></textarea>
                </div>
                <div className="form-group text-center">
                  <button type="submit" className="btn btn-light w-100">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
