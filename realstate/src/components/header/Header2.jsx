import React, { useReducer, useState } from "react";
import Link from "next/link";

const initialState = { activeMenu: "" };
function reducer(state, action) {
  if (state.activeMenu === action.type) return { activeMenu: "" };
  return { activeMenu: action.type };
}

function Header2() {
  const [isMobileOpen, setMobileOpen] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggle = (name) => dispatch({ type: name });

  return (
    <>
      <header className="custom-header">
        <div className="container-fluid px-lg-5">
          <div className="row align-items-center">
            {/* LOGO */}
            <div className="col-xl-2 col-6">
              <Link href="/">
                <a className="d-flex align-items-center">
                  <img
                    src="assets/images/icons/header1-img.png"
                    alt="Logo"
                    style={{ height: "55px" }}
                  />
                </a>
              </Link>
            </div>

            {/* TABS (With Animation) */}
            <div className="col-xl-7 d-none d-xl-block">
              <nav className="d-flex justify-content-center">
                <ul className="d-flex align-items-center gap-1">
                  <li>
                    <Link href="/">
                      <a className="nav-link-custom">Home</a>
                    </Link>
                  </li>
                  <li
                    className="position-relative"
                    onClick={() => toggle("land")}
                  >
                    <a href="#" className="nav-link-custom">
                      Landlords
                      <i
                        className={`bi bi-chevron-down ms-1 small transition-all ${state.activeMenu === "land" ? "d-inline-block rotate-180" : ""}`}
                        style={{ transition: "0.3s" }}
                      />
                    </a>
                    {state.activeMenu === "land" && (
                      <div className="dropdown-box">
                        <Link href="property-management">
                          <a>Property Management</a>
                        </Link>
                        <Link href="/casual-letting">
                          <a>Casual Letting Service</a>
                        </Link>
                        <Link href="/pricing">
                          <a>Pricing</a>
                        </Link>
                      </div>
                    )}
                  </li>

                  <li
                    className="position-relative"
                    onClick={() => toggle("ten")}
                  >
                    <a href="#" className="nav-link-custom">
                      Tenants
                      <i
                        className={`bi bi-chevron-down ms-1 small transition-all ${state.activeMenu === "ten" ? "d-inline-block rotate-180" : ""}`}
                        style={{ transition: "0.3s" }}
                      />
                    </a>
                    {state.activeMenu === "ten" && (
                      <div className="dropdown-box">
                        <Link href="available-for-rent">
                          <a>Available for Rent</a>
                        </Link>
                        {/* Example: Reporting Maintenance via an external PDF form */}
                        <Link href="https://www.superiorschoolnc.com/wp-content/uploads/2024/02/GeneralGlossary.pdf">
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="pdf-link"
                          >
                            Report Maintenance
                          </a>
                        </Link>

                        {/* Example: Property Inspection Guide */}
                        <Link href="https://www.superiorschoolnc.com/wp-content/uploads/2024/02/GeneralGlossary.pdf">
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="pdf-link"
                          >
                            Property Inspection Guide
                          </a>
                        </Link>

                        {/* Example: Move-out Inspection Guide */}
                        <Link href="https://www.superiorschoolnc.com/wp-content/uploads/2024/02/GeneralGlossary.pdf">
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="pdf-link"
                          >
                            Move-out Property Inspection guide
                          </a>
                        </Link>
                      </div>
                    )}
                  </li>

                  <li>
                    <Link href="maintenance">
                      <a className="nav-link-custom">Maintenance</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about">
                      <a className="nav-link-custom">About Us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <a className="nav-link-custom">Contact Us</a>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            {/* BUTTONS */}
            <div className="col-xl-3 col-6 text-end">
              <div className="d-flex align-items-center justify-content-end gap-2">
                <div className="d-none d-xl-flex gap-2">
                  <Link href="#">
                    <a className="btn-appraisal-top">Free Rent Appraisal</a>
                  </Link>
                  <Link href="#">
                    <a className="btn-appraisal-top">Client Login</a>
                  </Link>
                </div>
                <div
                  className="d-xl-none fs-1 ms-2"
                  onClick={() => setMobileOpen(true)}
                  style={{ cursor: "pointer" }}
                >
                  <i className="bi bi-list text-success"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE OVERLAY & SIDEBAR */}
      <div
        className={`overlay-bg ${isMobileOpen ? "show" : ""}`}
        onClick={() => setMobileOpen(false)}
      ></div>
      <div className={`mobile-sidebar ${isMobileOpen ? "active" : ""}`}>
        {/* ... Sidebar Content ... */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <img
            src="assets/images/icons/header1-img.png"
            alt="Logo"
            style={{ height: "40px" }}
          />
          <i
            className="bi bi-x-lg fs-3"
            onClick={() => setMobileOpen(false)}
          ></i>
        </div>
        {/* Mobile items follow same logic as desktop */}
      </div>

      <style jsx>{`
        .rotate-180 {
          transform: rotate(180deg);
        }
      `}</style>
    </>
  );
}

export default Header2;
