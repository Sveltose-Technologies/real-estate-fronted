import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, EffectFade, Navigation } from "swiper";
import Link from "next/link";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

SwiperCore.use([Autoplay, EffectFade, Navigation]);

function Banner2() {
  return (
    <section
      className="container-fluid p-0 position-relative"
      style={{ height: "85vh", overflow: "hidden" }}>
      {/* 1. FULL WIDTH BACKGROUND SLIDER (Auto-changing) */}
      <Swiper
        loop={true}
        effect={"fade"}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".banner-next",
          prevEl: ".banner-prev",
        }}
        className="h-100 w-100">
        <SwiperSlide>
          <div
            className="w-100 h-100"
            style={{
              background:
                "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('assets/images/bg/anotherbg.jpg') center/cover no-repeat",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="w-100 h-100"
            style={{
              background:
                "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('assets/images/bg/imagebg.jpg') center/cover no-repeat",
            }}
          />
        </SwiperSlide>
      </Swiper>

      {/* 2. CENTER CONTENT OVERLAY */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center text-center"
        style={{ zIndex: 10 }}>
        <div className="container">
          {/* Top Label */}
          <p
            className="text-white text-uppercase fw-light mb-2"
            style={{ letterSpacing: "4px", fontSize: "14px" }}>
            Need any help?
          </p>

          {/* Main Heading */}
          <h1 className="text-white display-2 fw-bold mb-5 px-md-5">
            Find your dream home.
          </h1>

          {/* TWO ACTION BUTTONS (Replacing Search Bar) */}
          <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3">
            <Link href="/appraisal-request">
              <a
                className="btn btn-light rounded-pill px-5 py-3 fw-bold shadow-sm"
                style={{ minWidth: "250px", color: "#111" }}>
                Request an appraisal
              </a>
            </Link>
            <Link href="/property" legacyBehavior>
              <a
                className="btn btn-light rounded-pill px-5 py-3 fw-bold shadow-sm"
                style={{
                  minWidth: "250px",
                  color: "#111",
                  textDecoration: "none",
                }}>
                Rental updates
              </a>
            </Link>
          </div>
        </div>
      </div>

      {/* 3. NAVIGATION ARROWS (Optional, kept for usability) */}
      <div
        className="position-absolute bottom-0 start-50 translate-middle-x mb-4 d-flex gap-3"
        style={{ zIndex: 20 }}>
        <button
          className="banner-prev btn btn-outline-light rounded-circle d-flex align-items-center justify-content-center"
          style={{ width: "45px", height: "45px" }}>
          <i className="bi bi-chevron-left"></i>
        </button>
        <button
          className="banner-next btn btn-outline-light rounded-circle d-flex align-items-center justify-content-center"
          style={{ width: "45px", height: "45px" }}>
          <i className="bi bi-chevron-right"></i>
        </button>
      </div>
    </section>
  );
}

export default Banner2;
