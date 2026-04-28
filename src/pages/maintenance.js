// "use client";
// import React, { useEffect } from "react";

// const Maintenance = () => {
//   // Initialize Bootstrap carousel manually to ensure auto-slide works
//   useEffect(() => {
//     import("bootstrap/dist/js/bootstrap.bundle.min.js").then((bootstrap) => {
//       const carouselElement = document.getElementById("maintenanceCarousel");
//       if (carouselElement) {
//         new bootstrap.Carousel(carouselElement, {
//           interval: 3000,
//           ride: "carousel",
//           wrap: true,
//         });
//       }
//     });
//   }, []);

//   return (
//     <div>
//       {/* HERO CAROUSEL - Full width with auto sliding */}
//       <section>
//         <div
//           id="maintenanceCarousel"
//           className="carousel slide carousel-fade"
//           data-bs-ride="carousel"
//           data-bs-interval="4000">
//           <div className="carousel-indicators">
//             <button
//               type="button"
//               data-bs-target="#maintenanceCarousel"
//               data-bs-slide-to="0"
//               className="active"
//               aria-current="true"
//               aria-label="Slide 1"></button>
//             <button
//               type="button"
//               data-bs-target="#maintenanceCarousel"
//               data-bs-slide-to="1"
//               aria-label="Slide 2"></button>
//             <button
//               type="button"
//               data-bs-target="#maintenanceCarousel"
//               data-bs-slide-to="2"
//               aria-label="Slide 3"></button>
//           </div>
//           <div className="carousel-inner">
//             <div className="carousel-item active">
//               <img
//                 src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1600&h=550&fit=crop"
//                 className="d-block w-100"
//                 style={{ height: "550px", objectFit: "cover" }}
//                 alt="Professional home cleaning service"
//               />
//             </div>

//             <div className="carousel-item">
//               <img
//                 src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=1600&h=550&fit=crop"
//                 className="d-block w-100"
//                 style={{ height: "550px", objectFit: "cover" }}
//                 alt="Technician doing maintenance work"
//               />
//             </div>

//             <div className="carousel-item">
//               <img
//                 src="https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=1600&h=550&fit=crop"
//                 className="d-block w-100"
//                 style={{ height: "550px", objectFit: "cover" }}
//                 alt="Beautiful and well-maintained home"
//               />
//             </div>
//           </div>

//           {/* Carousel Controls */}
//           <button
//             className="carousel-control-prev"
//             type="button"
//             data-bs-target="#maintenanceCarousel"
//             data-bs-slide="prev">
//             <span
//               className="carousel-control-prev-icon"
//               aria-hidden="true"></span>
//             <span className="visually-hidden">Previous</span>
//           </button>
//           <button
//             className="carousel-control-next"
//             type="button"
//             data-bs-target="#maintenanceCarousel"
//             data-bs-slide="next">
//             <span
//               className="carousel-control-next-icon"
//               aria-hidden="true"></span>
//             <span className="visually-hidden">Next</span>
//           </button>
//         </div>
//       </section>

//       {/* INTRO SECTION */}
//       <section className="container py-5 my-3">
//         <div className="row align-items-center g-4">
//           <div className="col-md-5">
//             <img
//               src="https://images.unsplash.com/photo-1581141849291-1125c7b692b5?w=600&h=450&fit=crop"
//               alt="Home maintenance tools and equipment"
//               className="img-fluid rounded-4 shadow"
//             />
//           </div>

//           <div className="col-md-7">
//             <p className="text-secondary fs-6">
//               Imagine living in a perfect home where everything is exactly where
//               it should be and it works in the way you expect it to work.
//               Although easy to imagine, this is not the easiest thing to achieve
//               especially if you plan to do all the maintenance work yourself.
//             </p>

//             <p className="text-secondary fs-6">
//               Fortunately, this doesn't have to be the case. We are devoted to
//               ensuring that you live in a clean, safe and comfortable
//               environment whether you are renting, moving in, or renovating.
//             </p>

//             <p className="text-secondary fs-6">
//               Our technicians ensure that you get the best home maintenance
//               services so your home stays in safe hands.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* BENEFITS SECTION */}
//       {/* INTRO SECTION */}
//       <section className="container py-5 my-3">
//         <div className="row align-items-center g-4">
//           <div className="col-md-7">
//             <h3>Benefits of Our Home Maintenance Services:</h3>
//             <p className="text-secondary fs-6">
//               Imagine living in a perfect home where everything is exactly where
//               it should be and it works in the way you expect it to work.
//               Although easy to imagine, this is not the easiest thing to achieve
//               especially if you plan to do all the maintenance work yourself.
//             </p>

//             <p className="text-secondary fs-6">
//               Fortunately, this doesn't have to be the case. We are devoted to
//               ensuring that you live in a clean, safe and comfortable
//               environment whether you are renting, moving in, or renovating.
//             </p>

//             <p className="text-secondary fs-6">
//               Our technicians ensure that you get the best home maintenance
//               services so your home stays in safe hands.
//             </p>
//           </div>
//           <div className="col-md-5">
//             <img
//               src="https://images.unsplash.com/photo-1581141849291-1125c7b692b5?w=600&h=450&fit=crop"
//               alt="Home maintenance tools and equipment"
//               className="img-fluid rounded-4 shadow"
//             />
//           </div>
//         </div>
//       </section>

//       {/* CTA SECTION with phone and email matching your text */}
      // <section className="container py-5 ">
      //   <div className="row ">
      //     <div className="col-lg-12">
      //       <p className="text-secondary fs-5 mb-4">
      //         Those are just a few of the main services that we offer so
      //         whether the service you need is listed above or not, give us a
      //         call and tell us about it and we will send someone to fix it for
      //         you.
      //       </p>

      //       <div className="bg-light p-4 rounded-4 mb-4">
      //         <p className="mb-2 fs-5">
      //           Give us a call on{" "}
      //           <b className="text-success">+64 20 4111 2333</b> or{" "}
      //           <b className="text-success">09 392 3000</b>
      //         </p>
      //         <p className="mb-0">
      //           or mail us at{" "}
      //           <b className="text-success">rentals@fairrentals.co.nz</b>
      //         </p>
      //       </div>

      //       {/* Contact Form Button with Modal trigger */}
            // <button
            //   type="button"
            //   className="btn btn-success px-5 py-3 rounded-pill fw-semibold fs-5"
            //   data-bs-toggle="modal"
            //   data-bs-target="#maintenanceModal">
            //   Request Maintenance
            // </button>
      //     </div>
      //   </div>
      // </section>

//       {/* BOOTSTRAP MODAL - Contact Form */}
//       <div
//         className="modal fade"
//         id="maintenanceModal"
//         tabIndex={-1}
//         aria-labelledby="maintenanceModalLabel"
//         aria-hidden="true">
//         <div className="modal-dialog modal-dialog-centered">
//           <div className="modal-content rounded-4">
//             <div className="modal-header border-0 pb-0">
//               <h5
//                 className="modal-title fs-3 fw-bold"
//                 id="maintenanceModalLabel">
//                 Request Maintenance
//               </h5>
//               <button
//                 type="button"
//                 className="btn-close"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"></button>
//             </div>
//             <div className="modal-body pt-4 px-4">
//               <form id="maintenanceForm" onSubmit={(e) => e.preventDefault()}>
//                 <div className="mb-3">
//                   <label htmlFor="fullName" className="form-label fw-semibold">
//                     Full Name
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control rounded-pill py-2 px-3"
//                     id="fullName"
//                     placeholder="Enter your full name"
//                     required
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label
//                     htmlFor="emailInput"
//                     className="form-label fw-semibold">
//                     Email Address
//                   </label>
//                   <input
//                     type="email"
//                     className="form-control rounded-pill py-2 px-3"
//                     id="emailInput"
//                     placeholder="name@example.com"
//                     required
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label
//                     htmlFor="phoneInput"
//                     className="form-label fw-semibold">
//                     Phone Number
//                   </label>
//                   <input
//                     type="tel"
//                     className="form-control rounded-pill py-2 px-3"
//                     id="phoneInput"
//                     placeholder="+64 XX XXX XXXX"
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label
//                     htmlFor="phoneInput"
//                     className="form-label fw-semibold">
//                     Address
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control rounded-pill py-2 px-3"
//                     id="phoneInput"
//                     placeholder="Address"
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label
//                     htmlFor="issueDetails"
//                     className="form-label fw-semibold">
//                     Maintenance Issue
//                   </label>
//                   <textarea
//                     className="form-control rounded-3"
//                     id="issueDetails"
//                     rows={3}
//                     placeholder="Describe the issue and property address..."
//                     required></textarea>
//                 </div>

//                 <button
//                   type="submit"
//                   className="btn btn-success w-100 rounded-pill py-2 fw-semibold">
//                   Send Request
//                 </button>
//                 <p className="small text-muted text-center mt-3 mb-0">
//                   For emergency repairs call <b>0800 HABITAT</b> immediately.
//                 </p>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Maintenance;

"use client";
import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const MaintenancePage = () => {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js").then((bootstrap) => {
      const carouselElement = document.getElementById("mainCarousel");
      if (carouselElement) {
        new bootstrap.Carousel(carouselElement, {
          interval: 3000,
          ride: "carousel",
        });
      }
    });
  }, []);

  const themeGreen = "#78be20"; // Lime Green
  const darkGreen = "#052011"; // Dark Forest Green

  return (
    <div
      style={{
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#444",
      }}>
      {/* 3. HD HERO SLIDER */}
      <div
        id="mainCarousel"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1920&q=100"
              className="d-block w-100"
              alt="Clean Kitchen Maintenance"
              style={{ height: "550px", objectFit: "cover" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1920&q=100"
              className="d-block w-100"
              alt="Interior Painting"
              style={{ height: "550px", objectFit: "cover" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=100"
              className="d-block w-100"
              alt="Modern Interior"
              style={{ height: "550px", objectFit: "cover" }}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#mainCarousel"
          data-bs-slide="prev">
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#mainCarousel"
          data-bs-slide="next">
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"></span>
        </button>
      </div>

      {/* 4. INTRO SECTION */}
      <div className="container py-5">
        <div className="row align-items-center g-5">
          <div className="col-md-5">
            <img
              src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=800&q=100"
              alt="Tools and Maintenance"
              className="img-fluid rounded shadow-lg"
              style={{ borderBottom: `8px solid ${themeGreen}` }}
            />
          </div>
          <div className="col-md-7">
            <p className="lead text-dark">
              Imagine living in a perfect home where everything is exactly where
              it should be and it works in the way you expect it to work.
            </p>
            <p>
              Although easy to imagine, this is not the easiest thing to achieve
              especially if you plan to do all the maintenance work yourself.
            </p>
            <p>
              Fortunately, this doesn't have to be the case. At{" "}
              <strong>Fair Rentals</strong>, we are devoted to ensuring that you
              live in a clean, safe and comfortable environment regardless of
              whether you are renting, moving in, renovating or preparing your
              home to put it on the market.
            </p>
            <p>
              We have competent technicians who will stop at nothing to ensure
              that you get the best home maintenance services. These people have
              been in the home maintenance industry for decades so you can rest
              assured that your home will be in safe hands.
            </p>
          </div>
        </div>
      </div>

      {/* 5. BENEFITS SECTION */}
      <div className="container py-5 border-top">
        <div className="row align-items-center g-5">
          <div className="col-md-8">
            <h3 className="fw-bold mb-4" style={{ color: darkGreen }}>
              Benefits of Our Home Maintenance Services:
            </h3>
            <div className="d-flex flex-column gap-3">
              <div className="d-flex align-items-start">
                <span className="me-2" style={{ color: themeGreen }}>
                  ●
                </span>
                <p>
                  <strong>Competent Professionals.</strong> Your home is
                  probably one of your most expensive assets. Our technicians
                  are competent, and they will ensure that no harm falls on your
                  home.
                </p>
              </div>
              <div className="d-flex align-items-start">
                <span className="me-2" style={{ color: themeGreen }}>
                  ●
                </span>
                <p>
                  <strong>Competitive Prices.</strong> At Fair Rentals, we are
                  all about fairness. You are guaranteed of getting the best
                  value for your money with our very competitive rates.
                </p>
              </div>
              <div className="d-flex align-items-start">
                <span className="me-2" style={{ color: themeGreen }}>
                  ●
                </span>
                <p>
                  <strong>Timely Delivery.</strong> Our process is simple and
                  straightforward. Just tell us what you want done, and we'll do
                  it promptly.
                </p>
              </div>
              <div className="d-flex align-items-start">
                <span className="me-2" style={{ color: themeGreen }}>
                  ●
                </span>
                <p>
                  <strong>Experienced Professionals.</strong> Our technicians
                  have been in the industry for decades, providing expert advice
                  on every job.
                </p>
              </div>
              <div className="d-flex align-items-start">
                <span className="me-2" style={{ color: themeGreen }}>
                  ●
                </span>
                <p>
                  <strong>Peace of Mind.</strong> Contract us to maintain your
                  property and rest easy knowing we take care of everything for
                  you.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=100"
              alt="Professional Real Estate"
              className="img-fluid rounded-circle shadow"
            />
          </div>
        </div>
      </div>

      {/* 6. DETAILED SERVICES SECTION */}
      <div className="bg-light py-5">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-md-4">
              <img
                src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=800&q=100"
                alt="Property Services"
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-md-8">
              <ul className="list-unstyled d-flex flex-column gap-3">
                <li>
                  <strong style={{ color: darkGreen }}>
                    ● Bathroom Maintenance:
                  </strong>{" "}
                  Restoration and repair of all fixtures to ensure full
                  functionality.
                </li>
                <li>
                  <strong style={{ color: darkGreen }}>
                    ● Garage Maintenance:
                  </strong>{" "}
                  From storage rack installation to repairing doors and windows.
                </li>
                <li>
                  <strong style={{ color: darkGreen }}>
                    ● Kitchen Maintenance:
                  </strong>{" "}
                  Expert care for plumbing, cabinets, tiles, and appliances.
                </li>
                <li>
                  <strong style={{ color: darkGreen }}>
                    ● Attic Maintenance:
                  </strong>{" "}
                  Improvements to help you utilize your home's space
                  efficiently.
                </li>
                <li>
                  <strong style={{ color: darkGreen }}>
                    ● Indoor Home Maintenance:
                  </strong>{" "}
                  Solving small issues like locks and lighting before they grow.
                </li>
                <li>
                  <strong style={{ color: darkGreen }}>
                    ● Outdoor Home Maintenance:
                  </strong>{" "}
                  Fencing, power washing, and lawn care for great curb appeal.
                </li>
                <li>
                  <strong style={{ color: darkGreen }}>
                    ● Routine All-Round Maintenance:
                  </strong>{" "}
                  Monthly inspections to keep your home running on auto-pilot.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 7. CALL TO ACTION SECTION */}
      <section className="container py-5 ">
        <div className="row ">
          <div className="col-lg-12">
            <p className="text-secondary fs-5 mb-4">
              Those are just a few of the main services that we offer so whether
              the service you need is listed above or not, give us a call and
              tell us about it and we will send someone to fix it for you.
            </p>

            <div className="bg-light p-4 rounded-4 mb-4">
              <p className="mb-2 fs-5">
                Give us a call on{" "}
                <b className="text-success">+64 20 4111 2333</b> or{" "}
                <b className="text-success">09 392 3000</b>
              </p>
              <p className="mb-0">
                or mail us at{" "}
                <b className="text-success">rentals@fairrentals.co.nz</b>
              </p>
              <button
                type="button"
                className="btn btn-success px-3 mt-5 py-3 rounded-pill fw-semibold fs-5"
                data-bs-toggle="modal"
                data-bs-target="#maintenanceModal">
                Request Maintenance
              </button>
            </div>

            {/* Contact Form Button with Modal trigger */}
            <div
              className="modal fade"
              id="maintenanceModal"
              tabIndex={-1}
              aria-labelledby="maintenanceModalLabel"
              aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content rounded-4">
                  <div className="modal-header border-0 pb-0">
                    <h5
                      className="modal-title fs-3 fw-bold"
                      id="maintenanceModalLabel">
                      Request Maintenance
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"></button>
                  </div>
                  <div className="modal-body pt-4 px-4">
                    <form
                      id="maintenanceForm"
                      onSubmit={(e) => e.preventDefault()}>
                      <div className="mb-3">
                        <label
                          htmlFor="fullName"
                          className="form-label fw-semibold">
                          Full Name
                        </label>
                        <input
                          type="text"
                          className="form-control rounded-pill py-2 px-3"
                          id="fullName"
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="emailInput"
                          className="form-label fw-semibold">
                          Email Address
                        </label>
                        <input
                          type="email"
                          className="form-control rounded-pill py-2 px-3"
                          id="emailInput"
                          placeholder="name@example.com"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="phoneInput"
                          className="form-label fw-semibold">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          className="form-control rounded-pill py-2 px-3"
                          id="phoneInput"
                          placeholder="+64 XX XXX XXXX"
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="phoneInput"
                          className="form-label fw-semibold">
                          Address
                        </label>
                        <input
                          type="text"
                          className="form-control rounded-pill py-2 px-3"
                          id="phoneInput"
                          placeholder="Address"
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="issueDetails"
                          className="form-label fw-semibold">
                          Comment
                        </label>
                        <textarea
                          className="form-control rounded-3"
                          id="issueDetails"
                          rows={3}
                          placeholder="Comment..."
                          required></textarea>
                      </div>

                      <button
                        type="submit"
                        className="btn btn-success w-100 rounded-pill py-2 fw-semibold">
                        Send Request
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MaintenancePage;