// import React, { useReducer, useState } from "react";
// import Link from "next/link";
// import { useRouter } from "next/router";
// import { EXTERNAL_LINKS } from "../../constants/links";

// const initialState = { activeMenu: "" };
// function reducer(state, action) {
//   if (state.activeMenu === action.type) return { activeMenu: "" };
//   return { activeMenu: action.type };
// }

// function Header2() {
//   const [isMobileOpen, setMobileOpen] = useState(false);
//   const [state, dispatch] = useReducer(reducer, initialState);
//   const router = useRouter();

//   const toggle = (name) => dispatch({ type: name });
//   const isActive = (path) => router.pathname === path;

//   // Function to close mobile menu when link is clicked
//   const handleLinkClick = () => {
//     setMobileOpen(false);
//   };

//   return (
//     <>
//       {/* --- MAIN NAVBAR --- */}
//       <nav className="navbar navbar-expand-xl navbar-light bg-white border-bottom sticky-top p-0">
//         <div className="container-fluid px-xl-5 py-1">
//           {/* LOGO - Scaled for professional look */}
//           <Link href="/" passHref>
//             <a className="navbar-brand m-0 p-0">
//               <img
//                 src="assets/images/icons/header1-img.png"
//                 alt="Logo"
//                 width="130"
//                 height="45"
//                 className="d-inline-block align-top"
//               />
//             </a>
//           </Link>

//           {/* DESKTOP NAVIGATION */}
//           <div className="collapse navbar-collapse d-none d-xl-flex justify-content-center">
//             <ul className="navbar-nav gap-2 gap-xxl-3 align-items-center">
//               <li className="nav-item">
//                 <Link href="/" passHref>
//                   <a
//                     className={`nav-link fw-bold px-2 text-nowrap ${isActive("/") ? "text-success border-bottom border-success border-2" : "text-dark"}`}>
//                     Home
//                   </a>
//                 </Link>
//               </li>

//               {/* Landlords Dropdown */}
//               <li
//                 className="nav-item dropdown"
//                 onMouseEnter={() => toggle("land")}
//                 onMouseLeave={() => toggle("")}>
//                 <span
//                   className={`nav-link fw-bold d-flex align-items-center cursor-pointer text-nowrap px-2 ${state.activeMenu === "land" ? "text-success" : "text-dark"}`}>
//                   Landlords <i className="bi bi-chevron-down ms-1 small"></i>
//                 </span>
//                 <ul
//                   className={`dropdown-menu shadow border-0 p-2 mt-0 start-0 ${state.activeMenu === "land" ? "show d-block" : ""}`}>
//                   <li>
//                     <Link href="/property-management" passHref>
//                       <a className="dropdown-item py-2 border-bottom small">
//                         Property Management
//                       </a>
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href="/casual-letting" passHref>
//                       <a className="dropdown-item py-2 border-bottom small">
//                         Casual Letting Service
//                       </a>
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href="/pricing" passHref>
//                       <a className="dropdown-item py-2 small">Pricing</a>
//                     </Link>
//                   </li>
//                 </ul>
//               </li>

//               {/* Tenants Dropdown */}
//               <li
//                 className="nav-item dropdown"
//                 onMouseEnter={() => toggle("ten")}
//                 onMouseLeave={() => toggle("")}>
//                 <span
//                   className={`nav-link fw-bold d-flex align-items-center cursor-pointer text-nowrap px-2 ${state.activeMenu === "ten" ? "text-success" : "text-dark"}`}>
//                   Tenants <i className="bi bi-chevron-down ms-1 small"></i>
//                 </span>
//                 <ul
//                   className={`dropdown-menu shadow border-0 p-2 mt-0 start-0 ${state.activeMenu === "ten" ? "show d-block" : ""}`}>
//                   <li>
//                     <Link href="/property" passHref>
//                       <a className="dropdown-item py-2 border-bottom small">
//                         Available for Rent
//                       </a>
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href="/available-for-rent" passHref>
//                       <a className="dropdown-item py-2 border-bottom small">
//                         Rented
//                       </a>
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href="#" passHref>
//                       <a className="dropdown-item py-2 border-bottom small">
//                         Report Maintenance
//                       </a>
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href="#" passHref>
//                       <a className="dropdown-item py-2 border-bottom small">
//                         Property Inspection Guide
//                       </a>
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href="#" passHref>
//                       <a className="dropdown-item py-2 small">
//                         Move-out Property Inspection guide
//                       </a>
//                     </Link>
//                   </li>
//                 </ul>
//               </li>

//               <li className="nav-item">
//                 <Link href="/maintenance" passHref>
//                   <a
//                     className={`nav-link fw-bold px-2 text-nowrap ${isActive("/maintenance") ? "text-success" : "text-dark"}`}>
//                     Maintenance
//                   </a>
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link href="/about" passHref>
//                   <a
//                     className={`nav-link fw-bold px-2 text-nowrap ${isActive("/about") ? "text-success" : "text-dark"}`}>
//                     About Us
//                   </a>
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link href="/contact" passHref>
//                   <a
//                     className={`nav-link fw-bold px-2 text-nowrap ${isActive("/contact") ? "text-success" : "text-dark"}`}>
//                     Contact Us
//                   </a>
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* ACTION BUTTONS */}
//           <div className="d-flex align-items-center gap-2">
//             <div className="d-none d-lg-flex gap-2">
//               <Link href="#" passHref>
//                 <a className="btn btn-success rounded-pill px-3 py-2 fw-bold small text-nowrap shadow-sm">
//                   Free Appraisal
//                 </a>
//               </Link>
//               <a
//                 href={EXTERNAL_LINKS.CLIENT_LOGIN}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="btn btn-outline-success rounded-pill px-3 py-2 fw-bold small text-nowrap">
//                 Client Login
//               </a>
//             </div>
//             {/* Mobile Toggle Button */}
//             <button
//               className="btn d-xl-none border-0 p-1 shadow-none"
//               onClick={() => setMobileOpen(true)}>
//               <i className="bi bi-list fs-1 text-success"></i>
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* --- MOBILE OFFCANVAS SIDEBAR --- */}
//       <div
//         className={`offcanvas offcanvas-start border-0 ${isMobileOpen ? "show visible" : "invisible"}`}>
//         <div className="offcanvas-header border-bottom">
//           <img
//             src="assets/images/icons/header1-img.png"
//             alt="Logo"
//             height="35"
//           />
//           <button
//             className="btn-close shadow-none"
//             onClick={() => setMobileOpen(false)}></button>
//         </div>

//         <div className="offcanvas-body p-0">
//           <ul className="navbar-nav w-100">
//             <li className="nav-item border-bottom p-3">
//               <Link href="/" passHref>
//                 <a
//                   className="nav-link text-dark fw-bold p-0"
//                   onClick={handleLinkClick}>
//                   Home
//                 </a>
//               </Link>
//             </li>

//             <li className="nav-item border-bottom p-3">
//               <div
//                 className="d-flex justify-content-between align-items-center cursor-pointer"
//                 onClick={() => toggle("mob-land")}>
//                 <span className="fw-bold">Landlords</span>
//                 <i
//                   className={`bi bi-chevron-down ${state.activeMenu === "mob-land" ? "text-success rotate-180" : ""}`}></i>
//               </div>
//               {state.activeMenu === "mob-land" && (
//                 <ul className="list-unstyled ps-3 mt-2 bg-light rounded p-2">
//                   <li className="py-2">
//                     <Link href="/property-management" passHref>
//                       <a
//                         className="text-muted small text-decoration-none d-block"
//                         onClick={handleLinkClick}>
//                         Property Management
//                       </a>
//                     </Link>
//                   </li>
//                   <li className="py-2">
//                     <Link href="/casual-letting" passHref>
//                       <a
//                         className="text-muted small text-decoration-none d-block"
//                         onClick={handleLinkClick}>
//                         Casual Letting Service
//                       </a>
//                     </Link>
//                   </li>
//                   <li className="py-2">
//                     <Link href="/pricing" passHref>
//                       <a
//                         className="text-muted small text-decoration-none d-block"
//                         onClick={handleLinkClick}>
//                         Pricing
//                       </a>
//                     </Link>
//                   </li>
//                 </ul>
//               )}
//             </li>

//             <li className="nav-item border-bottom p-3">
//               <div
//                 className="d-flex justify-content-between align-items-center cursor-pointer"
//                 onClick={() => toggle("mob-ten")}>
//                 <span className="fw-bold">Tenants</span>
//                 <i
//                   className={`bi bi-chevron-down ${state.activeMenu === "mob-ten" ? "text-success rotate-180" : ""}`}></i>
//               </div>
//               {state.activeMenu === "mob-ten" && (
//                 <ul className="list-unstyled ps-3 mt-2 bg-light rounded p-2">
//                   <li className="py-2">
//                     <Link href="/property" passHref>
//                       <a
//                         className="text-muted small text-decoration-none d-block"
//                         onClick={handleLinkClick}>
//                         Available for Rent
//                       </a>
//                     </Link>
//                   </li>
//                   <li className="py-2">
//                     <Link href="/available-for-rent" passHref>
//                       <a
//                         className="text-muted small text-decoration-none d-block"
//                         onClick={handleLinkClick}>
//                         Rented
//                       </a>
//                     </Link>
//                   </li>
//                   <li className="py-2">
//                     <Link href="#" passHref>
//                       <a
//                         className="text-muted small text-decoration-none d-block"
//                         onClick={handleLinkClick}>
//                         Report Maintenance
//                       </a>
//                     </Link>
//                   </li>
//                   <li className="py-2">
//                     <Link href="#" passHref>
//                       <a
//                         className="text-muted small text-decoration-none d-block"
//                         onClick={handleLinkClick}>
//                         Property Inspection Guide
//                       </a>
//                     </Link>
//                   </li>
//                   <li className="py-2">
//                     <Link href="#" passHref>
//                       <a
//                         className="text-muted small text-decoration-none d-block"
//                         onClick={handleLinkClick}>
//                         Move-out Property Inspection guide
//                       </a>
//                     </Link>
//                   </li>
//                 </ul>
//               )}
//             </li>

//             <li className="nav-item border-bottom p-3">
//               <Link href="/maintenance" passHref>
//                 <a
//                   className="nav-link text-dark fw-bold p-0"
//                   onClick={handleLinkClick}>
//                   Maintenance
//                 </a>
//               </Link>
//             </li>
//             <li className="nav-item border-bottom p-3">
//               <Link href="/about" passHref>
//                 <a
//                   className="nav-link text-dark fw-bold p-0"
//                   onClick={handleLinkClick}>
//                   About Us
//                 </a>
//               </Link>
//             </li>
//             <li className="nav-item border-bottom p-3">
//               <Link href="/contact" passHref>
//                 <a
//                   className="nav-link text-dark fw-bold p-0"
//                   onClick={handleLinkClick}>
//                   Contact Us
//                 </a>
//               </Link>
//             </li>
//           </ul>

//           <div className="p-3 d-grid gap-2 mt-4">
//             <Link href="#" passHref>
//               <a
//                 className="btn btn-success rounded-pill py-2 fw-bold"
//                 onClick={handleLinkClick}>
//                 Free Rent Appraisal
//               </a>
//             </Link>
//             <a
//               href={EXTERNAL_LINKS.CLIENT_LOGIN}
//               className="btn btn-outline-success rounded-pill py-2 fw-bold text-decoration-none text-center">
//               Client Login
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* BACKDROP */}
//       {isMobileOpen && (
//         <div
//           className="modal-backdrop fade show transition-none"
//           onClick={() => setMobileOpen(false)}></div>
//       )}
//     </>
//   );
// }

// export default Header2;
import React, { useReducer, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { EXTERNAL_LINKS } from "../../constants/links";

const initialState = { activeMenu: "" };
function reducer(state, action) {
  if (state.activeMenu === action.type) return { activeMenu: "" };
  return { activeMenu: action.type };
}

function Header2() {
  const [isMobileOpen, setMobileOpen] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);
  const router = useRouter();

  const toggle = (name) => dispatch({ type: name });
  const isActive = (path) => router.pathname === path;

  // Function to close mobile menu when link is clicked
  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <>
      {/* --- MAIN NAVBAR --- */}
      <nav className="navbar navbar-expand-xl navbar-light bg-white border-bottom sticky-top p-0">
        <div className="container-fluid px-xl-5 py-1">
          {/* LOGO - Scaled for professional look */}
          <Link href="/" passHref legacyBehavior>
            <a className="navbar-brand m-0 p-0">
              <img
                src="assets/images/icons/header1-img.png"
                alt="Logo"
                width="130"
                height="45"
                className="d-inline-block align-top"
              />
            </a>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="collapse navbar-collapse d-none d-xl-flex justify-content-center">
            <ul className="navbar-nav gap-2 gap-xxl-3 align-items-center">
              <li className="nav-item">
                <Link href="/" passHref legacyBehavior>
                  <a
                    className={`nav-link fw-bold px-2 text-nowrap ${isActive("/") ? "text-success border-bottom border-success border-2" : "text-dark"}`}>
                    Home
                  </a>
                </Link>
              </li>

              {/* Landlords Dropdown */}
              <li
                className="nav-item dropdown"
                onMouseEnter={() => toggle("land")}
                onMouseLeave={() => toggle("")}>
                <span
                  className={`nav-link fw-bold d-flex align-items-center cursor-pointer text-nowrap px-2 ${state.activeMenu === "land" ? "text-success" : "text-dark"}`}
                  style={{ cursor: "pointer" }}>
                  Landlords <i className="bi bi-chevron-down ms-1 small"></i>
                </span>
                <ul
                  className={`dropdown-menu shadow border-0 p-2 mt-0 start-0 ${state.activeMenu === "land" ? "show d-block" : ""}`}>
                  <li>
                    <Link href="/property-management" passHref legacyBehavior>
                      <a className="dropdown-item py-2 border-bottom small">
                        Property Management
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/casual-letting" passHref legacyBehavior>
                      <a className="dropdown-item py-2 border-bottom small">
                        Casual Letting Service
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/pricing" passHref legacyBehavior>
                      <a className="dropdown-item py-2 small">Pricing</a>
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Tenants Dropdown */}
              <li
                className="nav-item dropdown"
                onMouseEnter={() => toggle("ten")}
                onMouseLeave={() => toggle("")}>
                <span
                  className={`nav-link fw-bold d-flex align-items-center cursor-pointer text-nowrap px-2 ${state.activeMenu === "ten" ? "text-success" : "text-dark"}`}
                  style={{ cursor: "pointer" }}>
                  Tenants <i className="bi bi-chevron-down ms-1 small"></i>
                </span>
                <ul
                  className={`dropdown-menu shadow border-0 p-2 mt-0 start-0 ${state.activeMenu === "ten" ? "show d-block" : ""}`}>
                  <li>
                    <Link href="/property" passHref legacyBehavior>
                      <a className="dropdown-item py-2 border-bottom small">
                        Available for Rent
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/available-for-rent" passHref legacyBehavior>
                      <a className="dropdown-item py-2 border-bottom small">
                        Rented
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" passHref legacyBehavior>
                      <a className="dropdown-item py-2 border-bottom small">
                        Report Maintenance
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" passHref legacyBehavior>
                      <a className="dropdown-item py-2 border-bottom small">
                        Property Inspection Guide
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" passHref legacyBehavior>
                      <a className="dropdown-item py-2 small">
                        Move-out Property Inspection guide
                      </a>
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link href="/maintenance" passHref legacyBehavior>
                  <a
                    className={`nav-link fw-bold px-2 text-nowrap ${isActive("/maintenance") ? "text-success" : "text-dark"}`}>
                    Maintenance
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about" passHref legacyBehavior>
                  <a
                    className={`nav-link fw-bold px-2 text-nowrap ${isActive("/about") ? "text-success" : "text-dark"}`}>
                    About Us
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact" passHref legacyBehavior>
                  <a
                    className={`nav-link fw-bold px-2 text-nowrap ${isActive("/contact") ? "text-success" : "text-dark"}`}>
                    Contact Us
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* ACTION BUTTONS */}
          <div className="d-flex align-items-center gap-2">
            <div className="d-none d-lg-flex gap-2">
              <Link href="#" passHref legacyBehavior>
                <a className="btn btn-success rounded-pill px-3 py-2 fw-bold small text-nowrap shadow-sm">
                  Free Appraisal
                </a>
              </Link>
              <a
                href={EXTERNAL_LINKS.CLIENT_LOGIN}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-success rounded-pill px-3 py-2 fw-bold small text-nowrap">
                Client Login
              </a>
            </div>
            {/* Mobile Toggle Button */}
            <button
              className="btn d-xl-none border-0 p-1 shadow-none"
              onClick={() => setMobileOpen(true)}>
              <i className="bi bi-list fs-1 text-success"></i>
            </button>
          </div>
        </div>
      </nav>

      {/* --- MOBILE OFFCANVAS SIDEBAR --- */}
      <div
        className={`offcanvas offcanvas-start border-0 ${isMobileOpen ? "show visible" : "invisible"}`}
        style={{
          visibility: isMobileOpen ? "visible" : "hidden",
          transform: isMobileOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.3s ease-in-out, visibility 0.3s ease-in-out",
          position: "fixed",
          top: 0,
          left: 0,
          width: "300px",
          height: "100%",
          backgroundColor: "#fff",
          zIndex: 1050,
          overflowY: "auto",
        }}>
        <div className="offcanvas-header border-bottom">
          <img
            src="assets/images/icons/header1-img.png"
            alt="Logo"
            height="35"
          />
          <button
            className="btn-close shadow-none"
            onClick={() => setMobileOpen(false)}></button>
        </div>

        <div className="offcanvas-body p-0">
          <ul className="navbar-nav w-100">
            <li className="nav-item border-bottom p-3">
              <Link href="/" passHref legacyBehavior>
                <a
                  className="nav-link text-dark fw-bold p-0"
                  onClick={handleLinkClick}>
                  Home
                </a>
              </Link>
            </li>

            <li className="nav-item border-bottom p-3">
              <div
                className="d-flex justify-content-between align-items-center cursor-pointer"
                style={{ cursor: "pointer" }}
                onClick={() => toggle("mob-land")}>
                <span className="fw-bold">Landlords</span>
                <i
                  className={`bi bi-chevron-down ${state.activeMenu === "mob-land" ? "text-success rotate-180" : ""}`}
                  style={{
                    transform:
                      state.activeMenu === "mob-land"
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                    transition: "transform 0.2s ease",
                  }}></i>
              </div>
              {state.activeMenu === "mob-land" && (
                <ul className="list-unstyled ps-3 mt-2 bg-light rounded p-2">
                  <li className="py-2">
                    <Link href="/property-management" passHref legacyBehavior>
                      <a
                        className="text-muted small text-decoration-none d-block"
                        onClick={handleLinkClick}>
                        Property Management
                      </a>
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link href="/casual-letting" passHref legacyBehavior>
                      <a
                        className="text-muted small text-decoration-none d-block"
                        onClick={handleLinkClick}>
                        Casual Letting Service
                      </a>
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link href="/pricing" passHref legacyBehavior>
                      <a
                        className="text-muted small text-decoration-none d-block"
                        onClick={handleLinkClick}>
                        Pricing
                      </a>
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li className="nav-item border-bottom p-3">
              <div
                className="d-flex justify-content-between align-items-center cursor-pointer"
                style={{ cursor: "pointer" }}
                onClick={() => toggle("mob-ten")}>
                <span className="fw-bold">Tenants</span>
                <i
                  className={`bi bi-chevron-down ${state.activeMenu === "mob-ten" ? "text-success rotate-180" : ""}`}
                  style={{
                    transform:
                      state.activeMenu === "mob-ten"
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                    transition: "transform 0.2s ease",
                  }}></i>
              </div>
              {state.activeMenu === "mob-ten" && (
                <ul className="list-unstyled ps-3 mt-2 bg-light rounded p-2">
                  <li className="py-2">
                    <Link href="/property" passHref legacyBehavior>
                      <a
                        className="text-muted small text-decoration-none d-block"
                        onClick={handleLinkClick}>
                        Available for Rent
                      </a>
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link href="/available-for-rent" passHref legacyBehavior>
                      <a
                        className="text-muted small text-decoration-none d-block"
                        onClick={handleLinkClick}>
                        Rented
                      </a>
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link href="#" passHref legacyBehavior>
                      <a
                        className="text-muted small text-decoration-none d-block"
                        onClick={handleLinkClick}>
                        Report Maintenance
                      </a>
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link href="#" passHref legacyBehavior>
                      <a
                        className="text-muted small text-decoration-none d-block"
                        onClick={handleLinkClick}>
                        Property Inspection Guide
                      </a>
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link href="#" passHref legacyBehavior>
                      <a
                        className="text-muted small text-decoration-none d-block"
                        onClick={handleLinkClick}>
                        Move-out Property Inspection guide
                      </a>
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li className="nav-item border-bottom p-3">
              <Link href="/maintenance" passHref legacyBehavior>
                <a
                  className="nav-link text-dark fw-bold p-0"
                  onClick={handleLinkClick}>
                  Maintenance
                </a>
              </Link>
            </li>
            <li className="nav-item border-bottom p-3">
              <Link href="/about" passHref legacyBehavior>
                <a
                  className="nav-link text-dark fw-bold p-0"
                  onClick={handleLinkClick}>
                  About Us
                </a>
              </Link>
            </li>
            <li className="nav-item border-bottom p-3">
              <Link href="/contact" passHref legacyBehavior>
                <a
                  className="nav-link text-dark fw-bold p-0"
                  onClick={handleLinkClick}>
                  Contact Us
                </a>
              </Link>
            </li>
          </ul>

          <div className="p-3 d-grid gap-2 mt-4">
            <Link href="#" passHref legacyBehavior>
              <a
                className="btn btn-success rounded-pill py-2 fw-bold"
                onClick={handleLinkClick}>
                Free Rent Appraisal
              </a>
            </Link>
            <a
              href={EXTERNAL_LINKS.CLIENT_LOGIN}
              className="btn btn-outline-success rounded-pill py-2 fw-bold text-decoration-none text-center">
              Client Login
            </a>
          </div>
        </div>
      </div>

      {/* BACKDROP */}
      {isMobileOpen && (
        <div
          className="modal-backdrop fade show"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 1040,
            transition: "opacity 0.3s ease-in-out",
          }}
          onClick={() => setMobileOpen(false)}></div>
      )}
    </>
  );
}

export default Header2;