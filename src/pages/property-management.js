import React from "react";
import Link from "next/link";
import Header2 from "../components/header/Header2";
import Footer from "../common/Footer";

const PropertyManagement = () => {
  const faqData = [
    {
      question: "How long have you managed investment properties?",
      answer:
        "Habitat Property Management is a family run business. Originally Auckland property investors that have been collectively investing in property for more than 10 years. We have now expanded our management operations into Northland. Our staff have extensive experience as property managers for both clients and their own portfolio.",
    },
    {
      question: "What are the type of properties that you manage?",
      answer:
        "At Habitat, we're renowned for our expertise in residential property management. We have an exceptional team with deep knowledge of tenancy law and a passion to ensure every client is taken care of like family. Because we specialise, you can be confident your business will thrive!",
    },
    {
      question: "Do you have your own investment properties?",
      answer:
        "Yes, our directors and senior staff are active property investors themselves. This gives us a unique perspective and ensures we treat your property with the same care as our own.",
    },
    {
      question: "How will you advertise my property for tenants to find?",
      answer:
        "We use a multi-channel approach including major portals like TradeMe, social media marketing, and our internal database of pre-qualified tenants.",
    },
    {
      question: "What is your tenant selection and screening process?",
      answer:
        "We conduct rigorous background checks, including credit history, employment verification, and previous landlord references to ensure only high-quality tenants occupy your home.",
    },
    {
      question:
        "Do I need rental inspections and can you show me an example report?",
      answer:
        "Regular inspections are vital. We provide detailed digital reports with photos after every inspection so you can see the condition of your investment.",
    },
    {
      question:
        "What happens if my property needs repairs and how do you get the best price?",
      answer:
        "We have a network of trusted, qualified tradespeople. We obtain multiple quotes for major works to ensure you get the best value without compromising quality.",
    },
    {
      question: "What happens if the tenants miss a rent payment?",
      answer:
        "We have a zero-tolerance policy for arrears. Our automated systems alert us immediately, and we follow a strict legal process to rectify the situation quickly.",
    },
    {
      question: "Can you please provide a full disclosure of your fees?",
      answer:
        "We believe in transparency. Our management fees are all-inclusive with no hidden 'admin' or 'monthly' fees that some other agencies charge.",
    },
    {
      question:
        "Could you please provide me a reference from another client of yours?",
      answer:
        "Absolutely! We are proud of our client relationships and can put you in touch with current landlords who have been with us for years.",
    },
  ];
  return (
    <div className="property-management-page">
      <Header2 />
      {/* HERO SECTION */}
      <section className="pm-hero bg-dark-blue text-white">
        <div className="container-fluid p-0">
          <div className="row g-0 align-items-center">
            <div className="col-lg-6">
              <div className="pm-hero-content p-5 p-xl-120">
                <span className="text-uppercase fw-bold letter-spacing-1">
                  Home owners
                </span>
                <h1
                  className="display-3 fw-bold mt-3 mb-4"
                  style={{ fontSize: 30 }}
                >
                  Residential Property Management
                </h1>
                <p className="h5 mb-4 text-teal fw-normal">
                  Affordable fees from 7.50%{" "}
                  <small className="fs-6">+ GST</small>
                </p>
                <p className="lead mb-5 opacity-75">
                  Are you a busy homeowner seeking a reliable, professional
                  property management company? Look no further than Habitat
                  Property Management – we offer top-notch property management
                  for residential properties.
                </p>
                <p className="opacity-75">
                  Whether you are new to property investment, or have an
                  established investment portfolio, Habitat is here for you!
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="pm-hero-img">
                <img
                  src="/assets/images/bg/lifestyle.jpg"
                  alt="Modern Home Management"
                  className="img-fluid w-100 object-fit-cover"
                  style={{ minHeight: "600px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="why-choose-pm py-120 pt-5 bg-white">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-10">
              <h2 className="display-5 mb-4 text-dark-blue fw-bold">
                Why choose Habitat Property Management?
              </h2>
              <div className="intro-text px-md-5">
                <p className="mb-4">
                  At Habitat Property Management, we’re your dedicated local
                  experts – not part of a franchise, but a close-knit,
                  independent team committed to personalised service. We take
                  the time to truly understand you and your property, building
                  strong relationships based on trust, transparency, and care.
                </p>
                <p className="mb-4">
                  With a low vacancy rate and full Healthy Homes compliance
                  across our entire portfolio, plus keeping up to date with the
                  latest industry training, we are committed to being the best
                  at what we do.
                </p>
                <p className="fw-bold text-dark-blue italic">
                  Also – we love tech!
                </p>
                <p>
                  With us, you have the ability to access your portfolio at any
                  time – for anything.
                </p>
              </div>
            </div>
          </div>

          {/* SERVICE CARDS */}
          <div className="row mt-10  gy-5">
            <div className="col-md-4 text-center px-4">
              <div className="pm-card">
                <h4 className="text-teal mb-3">
                  We help rental property owners comply with Health Homes
                  Standards
                </h4>
                <p className="small text-muted">
                  Complying with the New Zealand Healthy Homes Standards may
                  seem like a daunting task, but we are here to help! Our
                  property managers are well versed with the standards.
                </p>
              </div>
            </div>

            <div className="col-md-4 text-center px-4 ">
              <div className="pm-card">
                <h4 className="text-teal mb-3">
                  We are a property management company small enough to care and
                  large enough to throw some weight
                </h4>
                <p className="small text-muted">
                  Tired of feeling like just another number at a big impersonal
                  property management company? At Habitat, we like to think we
                  offer something they just can't: the personal touch.
                </p>
              </div>
            </div>

            <div className="col-md-4 text-center px-4">
              <div className="pm-card ">
                <h4 className="text-teal mb-3">
                  We are 100% locally owned and experienced in the wider
                  Whangarei market making tenant selection a breeze
                </h4>
                <p className="small text-muted">
                  We believe diligent tenant selection is the most critical part
                  of property management. Proper tenant selection can mean the
                  difference between a profitable venture and a nightmare.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="faq-section  bg-white">
        <div className="container">
          {/* Banner Image above the title */}
          <div className="row mb-5">
            <div className="col-12">
              <img
                src="/assets/images/bg/faq-banner.jpg"
                alt="Modern living space"
                className="img-fluid rounded-4 shadow-sm w-100"
                style={{ maxHeight: "400px", objectFit: "cover" }}
              />
            </div>
          </div>

          <div className="text-center mb-5">
            <h2 className="display-6 text-teal fw-bold">
              10 questions every landlord should ask a potential property
              manager
            </h2>
          </div>

          <div className="row mt-5">
            {/* Left Column */}
            <div className="col-lg-6">
              <div className="accordion accordion-flush" id="faqLeft">
                {faqData.slice(0, 5).map((item, index) => (
                  <div
                    className="accordion-item mb-3 border-bottom"
                    key={index}
                  >
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed fw-bold text-dark-blue"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapseL${index}`}
                      >
                        {item.question}
                      </button>
                    </h2>
                    <div
                      id={`collapseL${index}`}
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqLeft"
                    >
                      <div className="accordion-body text-muted small">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column */}
            <div className="col-lg-6">
              <div className="accordion accordion-flush" id="faqRight">
                {faqData.slice(5, 10).map((item, index) => (
                  <div
                    className="accordion-item mb-3 border-bottom"
                    key={index + 5}
                  >
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed fw-bold text-dark-blue"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapseR${index}`}
                      >
                        {item.question}
                      </button>
                    </h2>
                    <div
                      id={`collapseR${index}`}
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqRight"
                    >
                      <div className="accordion-body text-muted small">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PropertyManagement;
