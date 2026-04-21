import React from "react";

function About1() {
  return (
    <>
      <div className="about-section pt-120 pb-120" id="about">
        {/* TIP: Replace this SVG file with a subtle house pattern or remove it for a cleaner look */}
        {/* <img
          src="assets/images/bg/section-bg1.svg"
          alt="decoration"
          className="section-bg1 img-fluid"
        /> */}
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6 text-lg-start text-center wow fadeInDown"
              data-wow-duration="1.5s"
              data-wow-delay="200ms"
            >
              <div className="section-title1">
                <h2>The Neziland Advantage</h2>
                <p>
                  Finding your dream home shouldn't be a challenge. At Neziland
                  Real Estate, we combine local market expertise with a
                  personalized approach to help you navigate the property
                  market. Whether you are a first-time buyer or an experienced
                  investor, we are here to open new doors for you.
                </p>
              </div>
              <div className="about-content1">
                <h3>Expert Property Guidance & Seamless Transactions.</h3>
                <div
                  className="lawyer-word"
                  style={{ backgroundColor: "#dbe1e2" }}
                >
                  <p>
                    "Our commitment is to provide transparency and value in
                    every listing, ensuring our clients make informed decisions
                    for their future."
                  </p>
                  <div className="d-flex align-items-center gap-3 mt-3">
                    <div>
                      <h6 className="mb-0">Main Randhawa</h6>
                      <span>Founder & Lead Agent</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE IMAGE SECTION */}
            <div className="col-lg-6 d-flex justify-content-lg-end justify-content-center">
              <div
                className="about1-img-wrap wow fadeInRight"
                data-wow-duration="1.5s"
                data-wow-delay="0.2s"
              >
                <div className="main-image-container">
                  <img
                    src="assets/images/bg/contactUs.jpg"
                    alt="Modern Luxury Property"
                    className="img-fluid custom-about-img"
                  />
                  {/* Floating Experience Card */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About1;
