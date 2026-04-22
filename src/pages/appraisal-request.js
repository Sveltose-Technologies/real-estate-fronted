import React, { useState } from "react";

const AppraisalRequest = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const navyColor = "#0b2b46"; // Matching your brand navy

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Request sent successfully!");
  };

  return (
    <div
      className="appraisal-page"
      style={{ backgroundColor: "#f9f9f9", minHeight: "100vh" }}
    >
      {/* --- HERO SECTION --- */}
      <section
        className="d-flex align-items-center justify-content-center"
        style={{
          height: "350px",
          background: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url('assets/images/bg/appraisal-hero.jpg') center/cover no-repeat`,
          backgroundColor: "#000000", // Fallback color matching the image
        }}
      >
        <h1
          className="text-white fw-bold"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
        >
          Property Appraisal Request
        </h1>
      </section>

      {/* --- FORM SECTION --- */}
      <section
        className="container"
        style={{ marginTop: "-60px", paddingBottom: "80px" }}
      >
        <div className="row justify-content-center">
          <div
            className="col-lg-10 shadow-sm bg-white p-0"
            style={{ borderRadius: "4px", overflow: "hidden" }}
          >
            {/* Form Header Bar */}
            <div
              className="p-4"
              style={{ backgroundColor: "#053b3b", color: "#fff" }}
            >
              <h4 className="mb-0 fw-bold">Property Appraisal Request</h4>
            </div>

            <div className="p-4 p-md-5">
              <p className="mb-4" style={{ fontSize: "15px", color: "#555" }}>
                Please fill in the form below to request a free rental
                appraisal.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="row g-4">
                  {/* Name Field */}
                  <div className="col-md-6">
                    <label className="form-label small fw-bold">
                      Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="form-control custom-input"
                      required
                      onChange={handleChange}
                    />
                  </div>

                  {/* Email Field */}
                  <div className="col-md-6">
                    <label className="form-label small fw-bold">
                      Email <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="form-control custom-input"
                      required
                      onChange={handleChange}
                    />
                  </div>

                  {/* Phone Field */}
                  <div className="col-md-6">
                    <label className="form-label small fw-bold">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      className="form-control custom-input"
                      onChange={handleChange}
                    />
                  </div>

                  {/* Address Field */}
                  <div className="col-md-6">
                    <label className="form-label small fw-bold">Address</label>
                    <input
                      type="text"
                      name="address"
                      className="form-control custom-input"
                      onChange={handleChange}
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="col-12 mt-4">
                    <button
                      type="submit"
                      className="btn px-5 py-2 fw-bold text-white shadow-sm"
                      style={{
                        backgroundColor: navyColor,
                        borderRadius: "50px",
                        fontSize: "14px",
                        border: "none",
                      }}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* --- INFO SECTION --- */}
        <div className="row justify-content-center mt-5">
          <div className="col-lg-10">
            <h3 className="fw-bold mb-3" style={{ color: "#333" }}>
              What is a Property Appraisal?
            </h3>
            <p style={{ lineHeight: "1.7", color: "#666", fontSize: "15px" }}>
              An appraisal is undertaken to provide the owners with an educated
              opinion on their property’s value. There are many contributing
              factors that form the appraisal of a property. The key
              contributing factors are:
            </p>
          </div>
        </div>
      </section>

      <style jsx>{`
        .custom-input {
          border: 1px solid #ced4da;
          border-radius: 2px;
          padding: 10px;
          transition: border-color 0.3s ease;
        }
        .custom-input:focus {
          box-shadow: none;
          border-color: #0b2b46;
        }
        @media (max-width: 768px) {
          .appraisal-page h1 {
            text-align: center;
            padding: 0 15px;
          }
        }
      `}</style>
    
    </div>
  );
};

export default AppraisalRequest;
