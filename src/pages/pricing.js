import React from "react";


const Pricing = () => {
  const tealColor = "#28948c";
  const navyColor = "#0b2b46";

  const pricingDetails = [
    { label: "Management fee", value: "7.50% + gst" },
    { label: "Maintenance fee", value: "No fee on maintenance" },
    {
      label: "Letting fee covers",
      value: "1 weeks rent",
      subValue: "(minimum $500)",
      list: [
        "Professional photography + $150",
        "Healthy homes report + $250",
        "Advertised on Trademe",
        "Advertised on Facebook Marketplace",
        "Advertised on Habitat website",
        "For rent signboard",
        "Evening viewings for working tenants",
        "Credit and background checks",
      ],
    },
    { label: "Routine inspection fee", value: "$40 + gst" },
    { label: "Invoice processing fee", value: "$3 + gst" },
    {
      label: "Tribunal attendance fee (capped at 8 hours)",
      value: "$80/hr + gst",
    },
    { label: "12 months minimum agreement term", value: "" },
  ];

  return (
    <div
      className="pricing-wrapper"
      style={{ backgroundColor: "#fff", overflow: "hidden" }}
    >
     
      {/* --- HERO SECTION --- */}
      <div>
        <section className="container-fluid p-0">
          <div className="row g-0">
            {/* Left Teal Text Block */}
            <div
              className="col-lg-6 d-flex align-items-center justify-content-center text-white p-5"
              style={{ backgroundColor: tealColor, minHeight: "450px" }}
            >
              <div style={{ maxWidth: "500px" }}>
                <p
                  className="text-uppercase mb-2"
                  style={{ letterSpacing: "1px", fontSize: "14px" }}
                >
                  Pricing and fees
                </p>
                <h1
                  className="display-4 fw-bold mb-4"
                  style={{ lineHeight: "1.2" }}
                >
                  Fair pricing and great service
                </h1>
                <p
                  style={{
                    opacity: "0.9",
                    lineHeight: "1.6",
                    fontSize: "15px",
                  }}
                >
                  Our pricing is fully transparent, and we're proud to be one of
                  the most affordable full-service management companies around!
                </p>
              </div>
            </div>
            {/* Right Image Block */}
            <div
              className="col-lg-6"
              style={{
                background:
                  "url('assets/images/bg/contact-bg.png') center/cover no-repeat",
                minHeight: "450px",
              }}
            />
          </div>
        </section>

        {/* --- PRICING TABLE SECTION --- */}
        <section className="container py-5 mt-5">
          <div className="text-center mb-5">
            <h2
              style={{ color: navyColor, fontWeight: "600", fontSize: "32px" }}
            >
              Our pricing
            </h2>
            <p
              className="text-muted mx-auto"
              style={{ maxWidth: "700px", fontSize: "14px" }}
            >
              Full service management includes everything that you would expect
              to have a property manager look after your rental property.
              <a href="#" className="ms-1 fw-bold" style={{ color: navyColor }}>
                See what is included.
              </a>
            </p>
          </div>

          {/* The Dark Blue Pricing Card */}
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div
                className="pricing-card shadow-lg p-4 p-md-5"
                style={{
                  backgroundColor: navyColor,
                  borderRadius: "8px",
                  color: "#fff",
                }}
              >
                <h3 className="text-center mb-5" style={{ fontSize: "28px" }}>
                  Pricing
                </h3>

                <div className="pricing-list">
                  {pricingDetails.map((item, idx) => (
                    <div
                      key={idx}
                      className="pricing-row d-flex flex-wrap justify-content-between py-3"
                      style={{
                        borderBottom:
                          idx === pricingDetails.length - 1
                            ? "none"
                            : "1px solid rgba(255,255,255,0.2)",
                      }}
                    >
                      <div
                        className="label-col pe-3"
                        style={{ flex: "1", minWidth: "250px" }}
                      >
                        <p
                          className="mb-1"
                          style={{ fontSize: "15px", fontWeight: "500" }}
                        >
                          {item.label}
                        </p>
                        {item.list && (
                          <ul
                            className="ps-3 mt-2"
                            style={{
                              fontSize: "13px",
                              opacity: "0.8",
                              listStyleType: "square",
                            }}
                          >
                            {item.list.map((li, i) => (
                              <li key={i} className="mb-1">
                                {li}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                      <div className="value-col text-md-end mt-2 mt-md-0">
                        <p
                          className="mb-0 fw-bold"
                          style={{ fontSize: "15px" }}
                        >
                          {item.value}
                        </p>
                        {item.subValue && (
                          <p className="small mb-0 opacity-75">
                            {item.subValue}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <style jsx>{`
        .pricing-wrapper {
          font-family: "Inter", sans-serif;
        }
        .pricing-row:hover {
          background-color: rgba(131, 33, 33, 0.03);
        }
        @media (max-width: 768px) {
          .display-4 {
            font-size: 2.5rem;
          }
          .pricing-card {
            padding: 30px 20px !important;
          }
        }
      `}</style>
   
    </div>
  );
};

export default Pricing;

// import React from "react";

// const Pricing = () => {
//   const pricingFeatures = [
//     { label: "Management fee", value: "7.50% + gst" },
//     { label: "Maintenance fee", value: "No fee on maintenance" },
//     {
//       label: "Letting fee covers",
//       value: "1 weeks rent",
//       subValue: "(minimum $500)",
//       details: [
//         "Professional photography + $150",
//         "Healthy homes report + $280",
//         "Advertised on Trademe",
//         "Advertised on Facebook Marketplace",
//         "Advertised on Habitat website",
//         "For rent signboard",
//         "Evening viewings for working tenants",
//         "Credit and background checks",
//       ],
//     },
//     { label: "Routine inspection fee", value: "$40 + gst" },
//     { label: "Invoice processing fee", value: "$3 + gst" },
//     {
//       label: "Tribunal attendance fee",
//       value: "$80/h + gst",
//       subLabel: "(capped at 8 hours)",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
//       {/* Header Section */}
//       <div className="max-w-3xl mx-auto text-center mb-12">
//         <h1 className="text-4xl font-serif font-bold text-[#0f2a4a] mb-4">
//           Our pricing
//         </h1>
//         <p className="text-lg text-slate-600 leading-relaxed">
//           Full service management{" "}
//           <span className="text-[#1a4a82] font-semibold">
//             includes everything
//           </span>{" "}
//           that you would expect to have a property manager look after your
//           rental property.
//           <a
//             href="#"
//             className="text-[#1a4a82] underline ml-1 hover:text-blue-700 transition-colors"
//           >
//             See what is included.
//           </a>
//         </p>
//       </div>

//       {/* Pricing Card */}
//       <div className="max-w-4xl mx-auto bg-[#0f2a4a] rounded-xl shadow-2xl overflow-hidden border border-[#1a3a5a]">
//         <div className="px-8 py-10 md:px-12">
//           <h2 className="text-3xl font-serif text-white text-center mb-10 border-b border-slate-700 pb-6">
//             Pricing
//           </h2>

//           <div className="space-y-8">
//             {pricingFeatures.map((item, index) => (
//               <div
//                 key={index}
//                 className="border-b border-slate-700/50 pb-6 last:border-0 last:pb-0"
//               >
//                 <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
//                   <div className="flex-grow">
//                     <span className="text-slate-100 text-lg font-medium">
//                       {item.label}
//                     </span>
//                     {item.subLabel && (
//                       <p className="text-slate-400 text-sm italic">
//                         {item.subLabel}
//                       </p>
//                     )}

//                     {/* Nested Details for Letting Fee */}
//                     {item.details && (
//                       <ul className="mt-4 space-y-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1">
//                         {item.details.map((detail, dIndex) => (
//                           <li
//                             key={dIndex}
//                             className="text-slate-300 text-sm flex items-start"
//                           >
//                             <span className="text-blue-400 mr-2">•</span>
//                             {detail}
//                           </li>
//                         ))}
//                       </ul>
//                     )}
//                   </div>

//                   <div className="text-left md:text-right">
//                     <span className="text-white text-lg font-semibold block">
//                       {item.value}
//                     </span>
//                     {item.subValue && (
//                       <span className="text-slate-400 text-sm">
//                         {item.subValue}
//                       </span>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Footer of Card */}
//           <div className="mt-12 pt-8 border-t border-slate-600 text-center">
//             <p className="text-slate-300 font-medium tracking-wide">
//               12 months minimum agreement term
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Pricing;
