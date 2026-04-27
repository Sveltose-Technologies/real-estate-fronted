import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

const AvailableForRent = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // API Configuration
  const API_URL = "https://backend.realestateshop.co.nz/api/properties";
  const AUTH_TOKEN = "stsmyaiydrsvyaneizlkfkzmkzndjihbxlgteglr";
  const API_KEY = "XRyfiFFE9b7p7e4mP0wqH4mcDVrHBL3C1i4jNlsV";

  // Helper to create URL-friendly slugs for links
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
    const fetchProperties = async () => {
      try {
        setLoading(true);
        const response = await axios.get(API_URL, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${AUTH_TOKEN}`,
            "X-Api-Key": API_KEY,
          },
        });

        // Ensure we are accessing the array correctly based on your API structure
        if (response.data && response.data.items) {
          setProperties(response.data.items);
        } else {
          setProperties([]);
        }
      } catch (err) {
        console.error("Fetch error:", err);
        setError("Failed to load properties.");
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  // 1. FILTER LOGIC: Only show items where status is "management"
  // We use optional chaining ?. and default to an empty array [] to prevent the "filter of undefined" error
  const managedProperties =
    properties?.filter((item) => item.status === "management") || [];

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-success" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-5 text-center text-danger">{error}</div>
    );
  }

  return (
    <div style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      {/* HERO SECTION */}
      <section
        className="d-flex align-items-center"
        style={{
          height: "300px",
          backgroundColor: "#0c3547",
          color: "white",
        }}>
        <div className="container">
          <h1 className="fw-bold display-4">Managed Properties</h1>
          <p className="lead">
            Showing properties currently under our management.
          </p>
        </div>
      </section>

      {/* LISTINGS SECTION */}
      <div className="container py-5">
        <div className="row g-4">
          {managedProperties.length > 0 ? (
            managedProperties.map((item) => {
              // Construct Address String
              const displayAddress =
                typeof item.address === "object"
                  ? `${item.address.streetNumber || ""} ${item.address.street || ""}, ${item.address.suburb?.name || ""}`
                  : item.displayAddress || "Address Not Available";

              const slug = createSlug(displayAddress);

              return (
                <div className="col-lg-4 col-md-6" key={item.id}>
                  <div className="card h-100 shadow-sm border-0 rounded-3">
                    <div className="position-relative">
                      {/* Image */}
                      <img
                        src={
                          item.photos?.[0]?.url ||
                          "https://via.placeholder.com/400x240?text=No+Image"
                        }
                        className="card-img-top rounded-top"
                        alt={displayAddress}
                        style={{ height: "240px", objectFit: "cover" }}
                      />
                      {/* Status Badge */}
                      <div className="position-absolute top-0 start-0 m-3">
                        <span className="badge bg-success px-3 py-2 text-capitalize shadow">
                          {item.status}
                        </span>
                      </div>
                    </div>

                    <div className="card-body px-4">
                      <h5 className="card-title fw-bold text-truncate mb-1">
                        {displayAddress}
                      </h5>
                      <p className="text-muted small mb-3">
                        <i className="bi bi-geo-alt me-1"></i>{" "}
                        {item.address?.suburb?.name || "Whangarei"}
                      </p>

                      <h6 className="fw-bold text-success mb-3">
                        {item.searchPrice
                          ? `$${item.searchPrice} / Week`
                          : "Price on Application"}
                      </h6>

                      <p
                        className="card-text text-muted small mb-4"
                        style={{ height: "3em", overflow: "hidden" }}>
                        {item.heading ||
                          "No description available for this managed property."}
                      </p>

                      {/* ICON SET */}
                      <div className="d-flex justify-content-between border-top pt-3">
                        <div className="d-flex align-items-center gap-1">
                          <span className="small fw-bold">
                            🛏 {item.bed || 0}
                          </span>
                        </div>
                        <div className="d-flex align-items-center gap-1">
                          <span className="small fw-bold">
                            🚿 {item.bath || 0}
                          </span>
                        </div>
                        <div className="d-flex align-items-center gap-1">
                          <span className="small fw-bold">
                            🚗 {item.garages || 0}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="card-footer bg-white border-0 p-4 pt-0">
                      <Link
                        href={`/property/${slug}`}
                        className="btn btn-outline-success w-100 rounded-pill fw-bold py-2">
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            /* EMPTY STATE */
            <div className="col-12 text-center py-5">
              <h4 className="text-muted">
                No properties found with 'Management' status.
              </h4>
              <button
                onClick={() => window.location.reload()}
                className="btn btn-primary mt-3">
                Refresh Page
              </button>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .card {
          transition: transform 0.2s ease-in-out;
        }
        .card:hover {
          transform: translateY(-5px);
        }
      `}</style>
    </div>
  );
};

export default AvailableForRent;
