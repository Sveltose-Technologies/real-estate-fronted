import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

const RecentSales = () => {
  const REACT_APP_VAULTRE_TOKEN = "stsmyaiydrsvyaneizlkfkzmkzndjihbxlgteglr";

  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState(null);

  const hardcodedProperties = [
    {
      id: 1,
      image: "assets/images/bg/sale1.jfif",
      address: "43 Port Way Rosehill",
      description:
        "Discover the perfect blend of space, convenience, and contemporary design and luxury living in this beautiful home.",
      beds: 3,
      baths: 2,
      area: "363 squareMeter",
      status: "Rented",
    },
    {
      id: 2,
      image: "assets/images/bg/sale2.jfif",
      address: "36 Brylee Drive Conifer Grove",
      description:
        "Your Own Slice of Paradise in Conifer Grove's Best Kept secret location with amazing views and garden.",
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
        "Step onto the property ladder with this low-maintenance single-level unit perfect for first home buyers.",
      beds: 3,
      baths: 1,
      area: "",
      status: "Rented",
    },
  ];

  const getProperty = async () => {
    setLoading(true);
    try {
      const propertyResponse = await axios.get(
        `https://backend.realestateshop.co.nz/api/properties`,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${REACT_APP_VAULTRE_TOKEN}`,
            "X-Api-Key": "XRyfiFFE9b7p7e4mP0wqH4mcDVrHBL3C1i4jNlsV",
          },
        },
      );

      // Log success data to console
      console.log("Property details:", propertyResponse?.data?.items);

      if (Array.isArray(propertyResponse?.data?.items)) {
        setProperties(propertyResponse?.data?.items);
      } else {
        setProperties(hardcodedProperties);
      }
    } catch (error) {
      // PRINT API ERROR CONSOLE
      console.error(
        "API ERROR:",
        error.response?.data?.message || error.message,
      );
      console.log("Full Error Response:", error.response?.data);

      // Fallback to hardcoded data so UI doesn't break
      setProperties(hardcodedProperties);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProperty();
  }, []);

  const toggleDescription = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  if (loading) {
    return (
      <div
        className="recent-sales-page"
        style={{ backgroundColor: "#f4f7f6", minHeight: "100vh" }}>
        <div className="container py-5 text-center">
          <p>Loading properties...</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="recent-sales-page"
      style={{ backgroundColor: "#f4f7f6", minHeight: "100vh" }}>
      <section
        className="d-flex align-items-center"
        style={{
          height: "300px",
          background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('assets/images/bg/bannerImage.jpg') center/cover no-repeat`,
        }}>
        <div className="container">
          <h1
            className="text-white fw-bold ps-md-5"
            style={{ fontSize: "3rem" }}>
            Recent Rent
          </h1>
        </div>
      </section>

      <section className="container py-5">
        <div className="row g-4 justify-content-center">
          {properties.map((item) => {
            const displayAddress =
              typeof item.address === "object"
                ? item.displayAddress ||
                  `${item.address.streetNumber} ${item.address.street}, ${item.address.suburb?.name}`
                : item.address;

            const displayImage =
              item.photos && item.photos.length > 0
                ? item.photos[0].url
                : item.image || "assets/images/bg/sale1.jfif";

            // Description Logic
            const fullDescription =
              item.description || "No description available for this property.";
            const words = fullDescription.split(" ");
            const isLong = words.length > 10;
            const shortDescription =
              words.slice(0, 10).join(" ") + (isLong ? "..." : "");
            const isExpanded = expandedId === item.id;

            return (
              <div key={item.id} className="col-lg-4 col-md-6 d-flex">
                <div
                  className="card w-100 border-0 shadow-sm property-card d-flex flex-column"
                  style={{ borderRadius: "0px" }}>
                  {/* Image Link */}
                  <Link href={`/property/${item.id}`} legacyBehavior>
                    <a style={{ textDecoration: "none" }}>
                      <div className="position-relative overflow-hidden">
                        <img
                          src={displayImage}
                          className="card-img-top"
                          alt="Property"
                          style={{ height: "240px", objectFit: "cover" }}
                        />
                        <div className="sold-ribbon text-uppercase">
                          {item.status || "Rented"}
                        </div>
                      </div>
                    </a>
                  </Link>

                  {/* Card Body */}
                  <div className="card-body p-4 d-flex flex-column flex-grow-1">
                    <Link href={`/property/${item.id}`} legacyBehavior>
                      <a style={{ textDecoration: "none", color: "inherit" }}>
                        <h5
                          className="fw-bold mb-2"
                          style={{
                            color: "#333",
                            fontSize: "18px",
                            minHeight: "44px",
                          }}>
                          {displayAddress}
                        </h5>
                      </a>
                    </Link>

                    {item.address?.suburb && (
                      <p className="text-muted small mb-2">
                        {item.address.suburb.name},{" "}
                        {item.address.suburb.state?.name}
                      </p>
                    )}

                    {/* Map Link */}
                    {item.geolocation?.latitude && (
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${item.geolocation.latitude},${item.geolocation.longitude}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-decoration-none d-flex align-items-center gap-1 mb-3"
                        style={{
                          color: "#0a5863",
                          fontSize: "12px",
                          fontWeight: "600",
                        }}>
                        <i className="bi bi-geo-alt-fill"></i> View on Map
                      </a>
                    )}

                    {/* Description Section */}
                    <div className="flex-grow-1">
                      <p
                        className="text-muted mb-1"
                        style={{ fontSize: "13px", lineHeight: "1.6" }}>
                        {isExpanded ? fullDescription : shortDescription}
                      </p>
                      {isLong && (
                        <button
                          onClick={() => toggleDescription(item.id)}
                          className="btn btn-link p-0 mb-3"
                          style={{
                            color: "#0a5863",
                            fontSize: "13px",
                            fontWeight: "600",
                            textDecoration: "none",
                          }}>
                          {isExpanded ? "Read Less" : "Read More"}
                        </button>
                      )}
                    </div>

                    {/* Features Row */}
                    <div
                      className="d-flex align-items-center gap-3 border-top pt-3 text-muted mt-auto"
                      style={{ fontSize: "12px" }}>
                      <div>
                        <span className="fw-bold">Beds</span>{" "}
                        {item.bed || item.beds || 0}
                      </div>
                      <div>
                        <span className="fw-bold">Baths</span>{" "}
                        {item.bath || item.baths || 0}
                      </div>
                      {(item.landArea?.value || item.area) && (
                        <div>
                          <span className="fw-bold">Area</span>{" "}
                          {item.landArea?.value || item.area}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <style jsx>{`
        .property-card {
          transition: transform 0.3s ease;
        }
        .property-card:hover {
          transform: translateY(-10px);
        }
        .sold-ribbon {
          position: absolute;
          top: 20px;
          left: -35px;
          background-color: #0a5863;
          color: white;
          padding: 5px 40px;
          transform: rotate(-45deg);
          font-weight: bold;
          font-size: 14px;
          z-index: 2;
        }
      `}</style>
    </div>
  );
};

export default RecentSales;
