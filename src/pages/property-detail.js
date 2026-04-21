import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header2 from "../components/header/Header2";
import Footer from "../common/Footer";
import axios from "axios";

const PropertyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // In a real app, you'd fetch this from an API.
  // For now, we use the same mock data.
  const properties = [
    {
      id: 1,
      address: "43 Port Way Rosehill",
      price: "$550/week",
      beds: 3,
      baths: 2,
      area: "363m²",
      image: "/assets/images/bg/sale1.jfif",
      description: "Full detailed text here...",
    },
    {
      id: 2,
      image: "assets/images/bg/sale2.jfif",
      address: "36 Brylee Drive Conifer Grove",
      description: "Your Own Slice of Paradise in Conifer Grove's Best Kept...",
      beds: 4,
      baths: 2,
      area: "743 squareMeter",
      status: "Rented",
    },
    {
      id: 3,
      image: "assets/images/bg/sale3.jfif",
      address: "2/50 Ferndale Road Mount Wellington",
      description:
        "Step onto the property ladder with this low-maintenance single-level unit...",
      beds: 3,
      baths: 1,
      area: "", // No area for this one based on image
      status: "Rented",
    },
    {
      id: 4,
      image: "assets/images/bg/sale1.jfif",
      address: "43 Port Way Rosehill",
      description:
        "Discover the perfect blend of space, convenience, and contemporary design...",
      beds: 3,
      baths: 2,
      area: "363 squareMeter",
      status: "Rented",
    },
    {
      id: 5,
      image: "assets/images/bg/sale2.jfif",
      address: "36 Brylee Drive Conifer Grove",
      description: "Your Own Slice of Paradise in Conifer Grove's Best Kept...",
      beds: 4,
      baths: 2,
      area: "743 squareMeter",
      status: "Rented",
    },
    {
      id: 6,
      image: "assets/images/bg/sale3.jfif",
      address: "2/50 Ferndale Road Mount Wellington",
      description:
        "Step onto the property ladder with this low-maintenance single-level unit...",
      beds: 3,
      baths: 1,
      area: "", // No area for this one based on image
      status: "Rented",
    },
  ];

  const property = properties.find((p) => p.id === parseInt(id));

  if (!property)
    return <div className="text-center py-5">Property Not Found</div>;

  return (
    <div style={{ backgroundColor: "#f4f7f6" }}>
      <Header2 />

      {/* Detail Hero */}
      <section className="py-5" style={{ marginTop: "80px" }}>
        <div className="container">
          <button
            onClick={() => navigate(-1)}
            className="btn btn-outline-dark mb-4"
          >
            ← Back to Listings
          </button>

          <div className="row">
            {/* Image Gallery */}
            <div className="col-lg-8">
              <img
                src={property.image}
                className="img-fluid w-100 shadow-sm"
                alt="Property"
                style={{
                  borderRadius: "8px",
                  maxHeight: "500px",
                  objectFit: "cover",
                }}
              />
              <div className="bg-white p-4 mt-4 shadow-sm">
                <h2 className="fw-bold">{property.address}</h2>
                <hr />
                <h4 className="fw-bold text-primary mb-3">Description</h4>
                <p className="text-muted" style={{ lineHeight: "1.8" }}>
                  {property.description}
                </p>
              </div>
            </div>

            {/* Sidebar Stats */}
            <div className="col-lg-4">
              <div
                className="card border-0 shadow-sm p-4 sticky-top"
                style={{ top: "100px" }}
              >
                <h3 className="fw-bold mb-4" style={{ color: "#0b2b46" }}>
                  Property Info
                </h3>
                <div className="d-flex justify-content-between mb-3 border-bottom pb-2">
                  <span className="text-muted">Status</span>
                  <span className="fw-bold text-success">For Rent</span>
                </div>
                <div className="d-flex justify-content-between mb-3 border-bottom pb-2">
                  <span className="text-muted">Bedrooms</span>
                  <span className="fw-bold">{property.beds}</span>
                </div>
                <div className="d-flex justify-content-between mb-3 border-bottom pb-2">
                  <span className="text-muted">Bathrooms</span>
                  <span className="fw-bold">{property.baths}</span>
                </div>
                <div className="d-flex justify-content-between mb-4 border-bottom pb-2">
                  <span className="text-muted">Total Area</span>
                  <span className="fw-bold">{property.area}</span>
                </div>

                <button
                  className="btn btn-dark w-100 py-3 fw-bold"
                  style={{ backgroundColor: "#0b2b46" }}
                >
                  Inquire Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PropertyDetail;
