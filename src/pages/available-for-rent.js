import React from "react";


const AvailableForRent = () => {
  // Sample Data for Listings
  const properties = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=600",
      address: "8 Taurangawaka Road, Whangarei 0118, New Zealand",
      price: "$700 per week",
      beds: 4,
      baths: 2,
      cars: 2,
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=600",
      address: "7 Finch Street, One Tree Point",
      price: "$580 per week",
      beds: 3,
      baths: 1,
      cars: 0,
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=600",
      address: "173 Corks Road, Tikipunga, Whangarei 0112, New Zealand",
      price: "$650 per week",
      beds: 3,
      baths: 1,
      cars: 2,
    },
    {
      id: 4,
      image:
        "https://th.bing.com/th/id/OIP.3LQ21e8npqjmiTH7qSGcBwHaE8?w=234&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
      address: "8 Taurangawaka Road, Whangarei 0118, New Zealand",
      price: "$700 per week",
      beds: 4,
      baths: 2,
      cars: 2,
    },
    {
      id: 5,
      image:
        "https://th.bing.com/th/id/OIP.mcd72bUmF87lOQUIczRGPgHaEq?w=247&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
      address: "7 Finch Street, One Tree Point",
      price: "$580 per week",
      beds: 4,
      baths: 1,
      cars: 0,
    },
    {
      id: 6,
      image:
        "https://th.bing.com/th/id/OIP.Iep8WRR2L3oQnBsIA4akMQHaE8?w=270&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
      address: "173 Corks Road, Tikipunga, Whangarei 0112, New Zealand",
      price: "$650 per week",
      beds: 5,
      baths: 1,
      cars: 2,
    },
  ];

  return (
    <div className="rentals-page">
 
      <section className="hero-banner">
        <div className="hero-content">
          <h1>Houses for rent</h1>
          <p>Looking for a rental property in Whangarei?</p>
          <p className="sub-text">
            Click below to explore our available properties. You can schedule a
            viewing, request a private showing, or submit a rental application
            with ease.
          </p>
          <button className="btn-rent">See previously rented properties</button>
        </div>
        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800"
            alt="Kitchen Interior"
          />
        </div>
      </section>

      {/* 2. LISTINGS SECTION */}
      <div className="container">
        <h2 className="section-title">Available properties in Whangarei</h2>
        <div className="property-grid">
          {properties.map((prop) => (
            <div key={prop.id} className="property-card">
              <div className="img-container">
                <img src={prop.image} alt="Property" />
              </div>
              <div className="card-details">
                <p className="address">{prop.address}</p>
                <p className="price">{prop.price}</p>
                <div className="icons">
                  <span>🛏 {prop.beds}</span>
                  <span>🚿 {prop.baths}</span>
                  <span>🚗 {prop.cars}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        /* RESET GLOBAL MARGINS */
        :global(body) {
          margin: 0;
          font-family: "Inter", sans-serif;
          overflow-x: hidden;
        }

        /* HERO FIX: Force full width regardless of parent */
        .hero-banner {
          width: 100vw;
          margin-left: calc(-50vw + 50%);
          display: flex;
          background-color: #0c3547;
          min-height: 400px;
          flex-wrap: wrap;
        }

        .hero-content {
          flex: 1;
          color: white;
          padding: 60px 10%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-width: 350px;
        }

        .hero-content h1 {
          font-size: 3rem;
          margin-bottom: 20px;
        }
        .hero-content p {
          font-size: 1.2rem;
          margin-bottom: 10px;
        }
        .sub-text {
          opacity: 0.8;
          font-size: 0.9rem !important;
          margin-bottom: 30px !important;
          line-height: 1.6;
        }

        .btn-rent {
          background: #17a2b8;
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 4px;
          width: fit-content;
          cursor: pointer;
        }

        .hero-image {
          flex: 1;
          min-width: 350px;
        }
        .hero-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* GRID SECTION */
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 60px 20px;
        }

        .section-title {
          text-align: center;
          color: #333;
          margin-bottom: 40px;
        }

        .property-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }

        .property-card {
          border-radius: 8px;
          overflow: hidden;
          transition: transform 0.3s ease;
        }

        .property-card:hover {
          transform: translateY(-5px);
        }

        .img-container img {
          width: 100%;
          height: 220px;
          object-fit: cover;
        }

        .card-details {
          padding: 15px 0;
        }
        .address {
          font-weight: bold;
          color: #0c3547;
          margin-bottom: 5px;
          min-height: 48px;
        }
        .price {
          color: #17a2b8;
          font-weight: bold;
          font-size: 1.1rem;
        }
        .icons {
          margin-top: 10px;
          color: #666;
          display: flex;
          gap: 15px;
        }

        /* RESPONSIVE DESIGN */
        @media (max-width: 768px) {
          .hero-content {
            padding: 40px 20px;
          }
          .hero-content h1 {
            font-size: 2rem;
          }
        }
      `}</style>
   
    </div>
  );
};

export default AvailableForRent;
