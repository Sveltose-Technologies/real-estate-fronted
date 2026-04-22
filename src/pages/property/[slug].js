import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";


import axios from "axios";

const PropertyDetail = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  const createSlug = (text) => {
    return text
      ?.toString()
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "")
      .replace(/--+/g, "-");
  };

  useEffect(() => {
    if (!slug) return;
    const fetchDetail = async () => {
      try {
        const response = await axios.get(
          `https://backend.realestateshop.co.nz/api/properties`,
          {
            headers: {
              Authorization: `Bearer stsmyaiydrsvyaneizlkfkzmkzndjihbxlgteglr`,
              "X-Api-Key": "XRyfiFFE9b7p7e4mP0wqH4mcDVrHBL3C1i4jNlsV",
            },
          },
        );
        const found = response.data.items.find((item) => {
          const addr =
            typeof item.address === "object"
              ? `${item.address.streetNumber} ${item.address.street}, ${item.address.suburb?.name}`
              : item.address;
          return createSlug(addr) === slug;
        });
        setProperty(found);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    fetchDetail();
  }, [slug]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (!property) {
    return (
      <div className="text-center py-5">
    
        <h2 className="mt-5">Property Not Found</h2>
        <button
          onClick={() => router.push("/property")}
          className="btn btn-primary mt-3">
          Back to Listings
        </button>
       
      </div>
    );
  }

  const displayAddress =
    typeof property.address === "object"
      ? `${property.address.streetNumber} ${property.address.street}, ${property.address.suburb?.name}`
      : property.address;

  return (
    <div style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
   
      {/* Main Content */}
      <section className="py-5" style={{ marginTop: "70px" }}>
        <div className="container">
          {/* Breadcrumb / Back Button */}
          <nav aria-label="breadcrumb" className="mb-4">
            <button
              onClick={() => router.back()}
              className="btn btn-link text-decoration-none p-0 text-dark fw-bold">
              <i className="bi bi-arrow-left me-2"></i>Back to Search
            </button>
          </nav>

          <div className="row g-4">
            {/* Left Column: Media & Description */}
            <div className="col-lg-8">
              {/* Main Image */}
              <div
                className="position-relative shadow-sm overflow-hidden mb-4"
                style={{ borderRadius: "12px" }}>
                <img
                  src={
                    property.photos?.[0]?.url || "/assets/images/bg/sale1.jfif"
                  }
                  className="img-fluid w-100"
                  alt="Property"
                  style={{
                    maxHeight: "550px",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
                <div className="position-absolute top-0 end-0 m-3">
                  <span className="badge bg-dark px-3 py-2 fs-6 shadow">
                    {property.status || "For Rent"}
                  </span>
                </div>
              </div>

              {/* Property Title & Summary */}
              <div
                className="bg-white p-4 shadow-sm mb-4"
                style={{ borderRadius: "12px" }}>
                <h1 className="fw-bold h2 mb-2" style={{ color: "#0b2b46" }}>
                  {displayAddress}
                </h1>
                <p className="text-muted mb-4">
                  <i className="bi bi-geo-alt-fill me-2"></i>
                  {property.address?.suburb?.name},{" "}
                  {property.address?.suburb?.state?.name}
                </p>

                <div className="d-flex gap-4 border-top border-bottom py-3 mb-4">
                  <div className="text-center">
                    <span className="d-block fw-bold h4 mb-0">
                      {property.bed || 0}
                    </span>
                    <small
                      className="text-muted text-uppercase fw-bold"
                      style={{ fontSize: "10px" }}>
                      Bedrooms
                    </small>
                  </div>
                  <div className="vr"></div>
                  <div className="text-center">
                    <span className="d-block fw-bold h4 mb-0">
                      {property.bath || 0}
                    </span>
                    <small
                      className="text-muted text-uppercase fw-bold"
                      style={{ fontSize: "10px" }}>
                      Bathrooms
                    </small>
                  </div>
                  <div className="vr"></div>
                  <div className="text-center">
                    <span className="d-block fw-bold h4 mb-0">
                      {property.landArea?.value || "N/A"}
                    </span>
                    <small
                      className="text-muted text-uppercase fw-bold"
                      style={{ fontSize: "10px" }}>
                      Square Area
                    </small>
                  </div>
                </div>

                <h4 className="fw-bold mb-3" style={{ color: "#0a5863" }}>
                  About This Property
                </h4>
                <p
                  className="text-muted"
                  style={{ lineHeight: "1.8", whiteSpace: "pre-line" }}>
                  {property.description}
                </p>
              </div>

              {/* Location/Map Link Section */}
              {property.geolocation && (
                <div
                  className="bg-white p-4 shadow-sm mb-4"
                  style={{ borderRadius: "12px" }}>
                  <h4 className="fw-bold mb-3" style={{ color: "#0b2b46" }}>
                    Location
                  </h4>
                  <div
                    className="position-relative overflow-hidden mb-3"
                    style={{
                      height: "200px",
                      borderRadius: "8px",
                      background: "#eee",
                    }}>
                    <div className="d-flex align-items-center justify-content-center h-100 flex-column text-muted">
                      <i className="bi bi-map h1"></i>
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${property.geolocation.latitude},${property.geolocation.longitude}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-primary btn-sm mt-2">
                        Open in Google Maps
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Sidebar */}
            <div className="col-lg-4">
              <div
                className="sticky-top"
                style={{ top: "100px", zIndex: "10" }}>
                {/* Pricing / CTA Card */}
                <div
                  className="card border-0 shadow-sm p-4 mb-4"
                  style={{ borderRadius: "12px" }}>
                  <h3 className="fw-bold mb-1" style={{ color: "#0b2b46" }}>
                    Property Inquiry
                  </h3>
                  <p className="text-muted small mb-4">
                    Express your interest in this property.
                  </p>

                  <div className="mb-3">
                    <label className="form-label small fw-bold">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-lg fs-6"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label small fw-bold">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control form-control-lg fs-6"
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="form-label small fw-bold">Message</label>
                    <textarea
                      className="form-control fs-6"
                      rows="3"
                      placeholder="I'm interested in this property..."></textarea>
                  </div>

                  <button
                    className="btn btn-dark w-100 py-3 fw-bold text-uppercase shadow-sm"
                    style={{ background: "#0b2b46", letterSpacing: "1px" }}>
                    Send Inquiry
                  </button>

                  <div className="text-center mt-4 pt-3 border-top">
                    <p className="mb-1 text-muted small">
                      Need immediate help?
                    </p>
                    <a
                      href="tel:+123456789"
                      className="text-decoration-none fw-bold text-primary">
                      Call an Agent
                    </a>
                  </div>
                </div>

                {/* Additional Info Snippet */}
                <div
                  className="card border-0 bg-light p-3"
                  style={{ borderRadius: "12px" }}>
                  <div className="d-flex align-items-center gap-2">
                    <i className="bi bi-shield-check text-success h4 mb-0"></i>
                    <div className="small">
                      <strong>Verified Listing</strong>
                      <p className="mb-0 text-muted">
                        This property has been inspected.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <style jsx>{`
        .form-control:focus {
          border-color: #0a5863;
          box-shadow: 0 0 0 0.25rem rgba(10, 88, 99, 0.1);
        }
        h1,
        h2,
        h3,
        h4 {
          font-family: "Inter", sans-serif;
        }
      `}</style>
    </div>
  );
};

export default PropertyDetail;
