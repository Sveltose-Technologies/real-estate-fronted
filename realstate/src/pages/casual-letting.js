import React from "react";
import Header2 from "../components/header/Header2";
import Footer from "../common/Footer";

const CasualLetting = () => {
  return (
    <div className="casual-letting-page">
      <Header2 />
      {/* SECTION 1: HERO & TOP CONTENT */}
      <section className="letting-hero">
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col-lg-6 bg-teal text-white d-flex align-items-center">
              <div className="hero-content p-5">
                <h6 className="text-uppercase mb-3">
                  Whangarei causal letting service
                </h6>
                <h1 className="display-4 fw-bold mb-4">
                  Find the best prospective tenants for you rental property in
                  Habitat's causal letting service.
                </h1>
                <p className="lead">
                  Are you a property investor who manages your own properties
                  but doesn't have the time or expertise to find the best
                  tenants? Then it's time to outsource this task to an expert.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <img
                src="/assets/images/bg/hero-house.jpg"
                alt="Modern Interior"
                className="img-fluid w-100 h-100 object-fit-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: INFORMATION GRID */}
      <section className="letting-info bg-dark-blue text-white py-120 pt-5 pb-5">
        <div className="container">
          <div className="row gy-5">
            <div className="col-md-6">
              <h2 className="mb-4">What is casual letting?</h2>
              <p>
                Casual letting services are when a professional property manager
                handles the entire process of finding prospective tenants and
                creating a residential tenancy agreement on your behalf.
              </p>
              <button className="eg-btn btn--primary2 mt-4">Contact Us</button>
            </div>
            <div className="col-md-6">
              <h2 className="mb-4">Why use casual letting services?</h2>
              <p>
                It saves you time and energy. We achieve the right rent amount
                and ensure your property is filled with good tenants in no time
                at all.
              </p>
            </div>

            <div className="col-12 mt-5">
              <h2 className="mb-4 text-center text-md-start">
                Tenant selection and creating your Tenancy Agreement
              </h2>
              <ul className="letting-list">
                <li>
                  A free and honest rental appraisal with strategies to achieve
                  the best rent.
                </li>
                <li>
                  Professional written advert and listings on Facebook
                  Marketplace.
                </li>
                <li>
                  Open viewings at suitable times to attract professional
                  tenants.
                </li>
                <li>Thorough background, identification, and credit checks.</li>
                <li>Tenancy Agreement created and tailored to your needs.</li>
                <li>First weeks rent and four weeks bond collected.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: PRICING TABLE */}
      <section className="pricing-section py-120 pt-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5">Pricing Table</h2>
            <p className="text-muted">Prices exclude GST</p>
          </div>
          <div className="table-responsive">
            <table className="table custom-table shadow-sm">
              <thead>
                <tr>
                  <th>Casual Letting Service</th>
                  <th className="text-end text-teal">
                    First weeks rent (min $500)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Facebook Marketing</td>
                  <td className="text-end">Included</td>
                </tr>
                <tr className="table-group-divider">
                  <td className="fw-bold" colSpan="2">
                    Optional Upgrades
                  </td>
                </tr>
                <tr>
                  <td>TradeMe Marketing</td>
                  <td className="text-end">Packages starting from $120</td>
                </tr>
                <tr>
                  <td>Professional Photography</td>
                  <td className="text-end">$350</td>
                </tr>
                <tr>
                  <td>Healthy Homes Inspection</td>
                  <td className="text-end">$300</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CasualLetting;
