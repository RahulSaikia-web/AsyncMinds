import React, { useState } from "react";
import Navbbar from "../components/Navbbar";
import Footer from "../components/Footer";

function BookService() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <main>
      <Navbbar />
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h1 className="display-5 fw-bold text-primary">Book a Service</h1>
            <p className="text-muted">
              Ready to elevate your business? Fill out the form below and let's create something amazing together!
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="card shadow-sm border-0">
                <div className="card-body p-4">
                  <form 
                    action="https://formsubmit.co/asyncminds.co@gmail.com" // Replace with your FormSubmit URL
                    method="POST"
                  >
                    {/* Name */}
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label fw-bold">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* Email */}
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label fw-bold">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* Service Type */}
                    <div className="mb-3">
                      <label htmlFor="service" className="form-label fw-bold">
                        Service Type
                      </label>
                      <select
                        className="form-select"
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select a Service</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Web Design">Web Design</option>
                        <option value="UI/UX">UI/UX</option>
                        <option value="Mobile Application">Mobile Application</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div className="mb-3">
                      <label htmlFor="message" className="form-label fw-bold">
                        Message
                      </label>
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="d-grid">
                      <button type="submit" className="btn btn-primary btn-lg">
                        Submit Request
                      </button>
                    </div>

                    {/* Hidden Inputs for Extra Data (Optional) */}
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_next" value="http://localhost:5173/ThankYou" />

                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default BookService;
