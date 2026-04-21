import React, { useEffect, useState } from "react";
import Header2 from "../components/header/Header2";
import Footer from "../common/Footer";
import Link from "next/link";
import axios from "axios";

const RecentSales = () => {
  const REACT_APP_VAULTRE_TOKEN = "stsmyaiydrsvyaneizlkfkzmkzndjihbxlgteglr";

  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  const hardcodedProperties = [
    {
      id: 1,
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

  const getProperty = async () => {
    console.log("Fetching property details from API...");
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
      console.log("Property details:", propertyResponse?.data?.items);
      // Assuming the response data is an array of properties
      if (Array.isArray(propertyResponse?.data?.items)) {
        setProperties(propertyResponse?.data?.items);
      } else if (
        propertyResponse?.data?.properties &&
        Array.isArray(propertyResponse?.data?.items)
      ) {
        setProperties(propertyResponse?.data?.items);
      } else {
        console.warn("Unexpected API response structure");
        setProperties(propertyResponse?.data?.items);
      }
    } catch (error) {
      console.error("Failed to fetch property details:", error);
      // Fallback to hardcoded properties
      // setProperties(propertyResponse.data?.items);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProperty();
  }, []);

  if (loading) {
    return (
      <div
        className="recent-sales-page"
        style={{ backgroundColor: "#f4f7f6", minHeight: "100vh" }}
      >
        <Header2 />
        <section
          className="d-flex align-items-center"
          style={{
            height: "300px",
            background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('assets/images/bg/bannerImage.jpg') center/cover no-repeat`,
          }}
        >
          <div className="container">
            <h1
              className="text-white fw-bold ps-md-5"
              style={{ fontSize: "3rem" }}
            >
              Recent Rent
            </h1>
          </div>
        </section>
        <div className="container py-5 text-center">
          <p>Loading properties...</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div
      className="recent-sales-page"
      style={{ backgroundColor: "#f4f7f6", minHeight: "100vh" }}
    >
      {/* --- HERO SECTION --- */}

      <Header2 />
      <section
        className="d-flex align-items-center"
        style={{
          height: "300px",
          background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('assets/images/bg/bannerImage.jpg') center/cover no-repeat`,
        }}
      >
        <div className="container">
          <h1
            className="text-white fw-bold ps-md-5"
            style={{ fontSize: "3rem" }}
          >
            Recent Rent
          </h1>
        </div>
      </section>

      {/* --- PROPERTY GRID --- */}
      <section className="container py-5">
        <div className="row g-4 justify-content-center">
          {properties.map((item) => {
            // 1. Handle Address: API gives an object, hardcoded gives a string
            const displayAddress =
              typeof item.address === "object"
                ? item.displayAddress ||
                  `${item.address.streetNumber} ${item.address.street}, ${item.address.suburb?.name}`
                : item.address;

            // 2. Handle Image: API uses photos array, hardcoded uses item.image
            const displayImage =
              item.photos && item.photos.length > 0
                ? item.photos[0].url
                : item.image || "assets/images/bg/sale1.jfif";

            // 3. Handle Status: API uses item.status, hardcoded uses item.status
            const displayStatus = item.status || "For Sale";

            return (
              <div key={item.id} className="col-lg-4 col-md-6">
                <Link href={`/property/${item.id}`} legacyBehavior>
                  <a style={{ textDecoration: "none", color: "inherit" }}>
                    <div
                      className="card h-100 border-0 shadow-sm property-card"
                      style={{ borderRadius: "0px" }}
                    >
                      {/* Image Container */}
                      <div className="position-relative overflow-hidden">
                        <img
                          src={displayImage}
                          className="card-img-top"
                          alt="Property"
                          style={{ height: "240px", objectFit: "cover" }}
                        />

                        {/* Rented/Status Ribbon */}
                        <div className="sold-ribbon text-uppercase">
                          {displayStatus}
                        </div>

                        <div className="position-absolute bottom-0 end-0 p-3">
                          <div
                            className="bg-white rounded-circle shadow-sm d-flex align-items-center justify-content-center"
                            style={{
                              width: "35px",
                              height: "35px",
                              cursor: "pointer",
                            }}
                          >
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="#0b2b46"
                            >
                              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      {/* Card Body */}
                      <div className="card-body p-4">
                        <h5
                          className="fw-bold mb-3"
                          style={{ color: "#333", fontSize: "18px" }}
                        >
                          {displayAddress}
                        </h5>

                        {/* City/State display (Relatable data you asked for) */}
                        {item.address?.suburb && (
                          <p className="text-muted small mb-2">
                            {item.address.suburb.name},{" "}
                            {item.address.suburb.state?.abbreviation}{" "}
                            {item.address.suburb.state?.name}{" "}
                            {item.address.suburb.postcode}
                          </p>
                        )}

                        {item.geolocation && item.geolocation.latitude && (
                          <a
                            href={`https://www.google.com/maps/search/?api=1&query=${item.geolocation.latitude},${item.longitude}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-decoration-none d-flex align-items-center gap-1"
                            style={{
                              color: "#0a5863",
                              fontSize: "12px",
                              fontWeight: "600",
                            }}
                          >
                            <i className="bi bi-geo-alt-fill"></i>
                            View on Map
                            <span className="text-muted fw-normal">
                              ({item.geolocation.latitude.toFixed(4)},{" "}
                              {item.geolocation.longitude.toFixed(4)})
                            </span>
                          </a>
                        )}
                        <p
                          className="text-muted mb-4"
                          style={{
                            fontSize: "13px",
                            lineHeight: "1.6",
                            minHeight: "40px",
                          }}
                        >
                          {item.description ||
                            "No description available for this property."}
                        </p>

                        {/* Features Row - handling bed/beds and bath/baths differences */}
                        <div
                          className="d-flex align-items-center gap-3 border-top pt-3 text-muted"
                          style={{ fontSize: "12px" }}
                        >
                          <div className="d-flex align-items-center gap-1">
                            <span className="fw-bold">Beds</span>{" "}
                            {item.bed || item.beds || 0}
                          </div>
                          <div className="d-flex align-items-center gap-1">
                            <span className="fw-bold">Baths</span>{" "}
                            {item.bath || item.baths || 0}
                          </div>
                          {(item.landArea?.value || item.area) && (
                            <div className="d-flex align-items-center gap-1">
                              <span className="fw-bold">Area</span>{" "}
                              {item.landArea?.value || item.area}{" "}
                              {item.landArea?.units || ""}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </a>
                </Link>
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
          background-color: #0a5863; /* Orange color from image */
          color: white;
          padding: 5px 40px;
          transform: rotate(-45deg);
          font-weight: bold;
          font-size: 14px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
          z-index: 2;
        }
        .card-img-top {
          transition: filter 0.3s ease;
        }
        .property-card:hover .card-img-top {
          filter: brightness(0.9);
        }
      `}</style>
      <Footer />
    </div>
  );
};

export default RecentSales;
