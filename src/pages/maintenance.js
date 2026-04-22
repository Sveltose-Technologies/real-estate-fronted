import React from "react";
import Link from "next/link";


const Maintenance = () => {
  return (
    <div className="maintenance-page">
 

      {/* HERO SECTION */}
      <section className="maintenance-hero bg-dark-blue text-white py-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h1 className="display-4 fw-bold mb-4">Maintenance</h1>
              <p className="lead opacity-75 mb-0">
                At Habitat Property Management, we pride ourselves on our
                proactive approach to maintenance. Our goal is to ensure your
                home remains safe, functional, and well-cared for.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STEPS SECTION */}
      <section className="maintenance-steps py-120 bg-white">
        <div className="container">
          <div className="row gy-5">
            {/* Step 1 */}
            <div className="col-md-4">
              <div className="step-card">
                <div className="step-number text-teal mb-3">01</div>
                <h3 className="h4 text-dark-blue mb-3">Report Maintenance</h3>
                <p className="text-muted mb-4">
                  All non-urgent maintenance must be reported in writing. Click
                  the link below to access our official reporting form.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="col-md-4 border-start-md">
              <div className="step-card px-md-4">
                <div className="step-number text-teal mb-3">02</div>
                <h3 className="h4 text-dark-blue mb-3">Property Inspection</h3>
                <p className="text-muted mb-4">
                  We conduct regular inspections to ensure everything is in
                  order. Download our guide to see what we look for.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="col-md-4 border-start-md">
              <div className="step-card px-md-4">
                <div className="step-number text-teal mb-3">03</div>
                <h3 className="h4 text-dark-blue mb-3">Moving Out</h3>
                <p className="text-muted mb-4">
                  Preparing to move? Follow our move-out inspection guide to
                  ensure a smooth bond refund process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* URGENT REPAIRS BANNER */}
      <section className="urgent-repairs bg-light py-5 border-top border-bottom">
        <div className="container text-center">
          <h2 className="h4 text-dark-blue mb-3">Urgent Maintenance?</h2>
          <p className="mb-0">
            For urgent after-hours repairs that require immediate attention,
            please call our emergency line directly at{" "}
            <strong>0800 HABITAT</strong>.
          </p>
        </div>
      </section>

    
    </div>
  );
};

export default Maintenance;
