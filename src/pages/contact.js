"use client";
import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import Banner1 from "../components/banner/Banner1";
import { useFetch } from "../hooks/useFetch";
import { getAllContactApi, sendInquiryApi } from "../services/userService";

function Contact() {
  // 1. Fetch Contact Details (Location, Email, Phone)
  const { data, fetchData } = useFetch(getAllContactApi);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Normalized data (getting the first contact object)
  const contactItem = data && data.length > 0 ? data[0] : null;

  // 2. Inquiry Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNo: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSending(true);
  console.log("Submitting to backend..."); // Log start

  try {
    const res = await sendInquiryApi(formData);
    console.log("Server Response:", res); // SEE IF SERVER SAYS OK

    alert("Inquiry sent successfully!");
    setFormData({ fullName: "", email: "", phoneNo: "", message: "" });
  } catch (error) {
    console.error("Server Error:", error.response || error); // SEE THE ERROR
    alert(
      "Error: " + (error.response?.data?.message || "Server not responding"),
    );
  } finally {
    setIsSending(false); // This ensures the button goes back to "Send Message"
  }
};

  return (
    <>
      <Banner1 />
      <div>
        <div className="contact-section pt-120">
          <div className="container">
            <div className="row gy-5">
              <div className="col-lg-6 col-md-6">
                <div className="address-area">
                  <div className="section-title2 mb-50">
                    <h2>Contact Us If You Have More Questions.</h2>
                  </div>
                  <ul className="address-list sibling3">
                    {/* --- DYNAMIC LOCATION SECTION --- */}
                    <li>
                      <div className="icon">
                        <svg
                          width={44}
                          height={44}
                          viewBox="0 0 44 44"
                          xmlns="http://www.w3.org/2000/svg">
                          <g fill="currentColor">
                            <path d="M22 0.125C13.519 0.125 6.61914 7.02485 6.61914 15.5059C6.61914 18.3713 7.41288 21.1677 8.91508 23.5938L21.1245 43.2691C21.3584 43.646 21.7704 43.875 22.2135 43.875C22.217 43.875 22.2203 43.875 22.2237 43.875C22.6707 43.8715 23.0836 43.6354 23.3132 43.2519L35.2114 23.386C36.6307 21.0112 37.3809 18.2863 37.3809 15.5059C37.3809 7.02485 30.481 0.125 22 0.125ZM33.0115 22.0699L22.1941 40.1311L11.0939 22.2432C9.84348 20.2239 9.16553 17.8942 9.16553 15.5059C9.16553 8.43835 14.9325 2.67139 22 2.67139C29.0675 2.67139 34.8259 8.43835 34.8259 15.5059C34.8259 17.8233 34.1927 20.0935 33.0115 22.0699Z" />
                            <path d="M22 7.81543C17.7595 7.81543 14.3096 11.2654 14.3096 15.5059C14.3096 19.7193 17.7034 23.1963 22 23.1963C26.3496 23.1963 29.6904 19.673 29.6904 15.5059C29.6904 11.2654 26.2405 7.81543 22 7.81543ZM22 20.6499C19.1582 20.6499 16.856 18.34 16.856 15.5059C16.856 12.6789 19.173 10.3618 22 10.3618C24.827 10.3618 27.1355 12.6789 27.1355 15.5059C27.1355 18.2986 24.8868 20.6499 22 20.6499Z" />
                          </g>
                        </svg>
                      </div>
                      <div className="text">
                        <h4>Location</h4>
                        <p>
                          {contactItem ? contactItem.location : "Loading..."}
                        </p>
                      </div>
                    </li>

                    {/* --- DYNAMIC PHONE SECTION --- */}
                    <li>
                      <div className="icon">
                        <svg
                          width={44}
                          height={44}
                          viewBox="0 0 44 44"
                          xmlns="http://www.w3.org/2000/svg">
                          <g fill="currentColor">
                            <path d="M34.7007 27.2267C33.805 26.2941 32.7247 25.7955 31.5797 25.7955C30.444 25.7955 29.3544 26.2849 28.4218 27.2175L25.5039 30.1261C25.2638 29.9969 25.0238 29.8768 24.7929 29.7568C24.4605 29.5906 24.1466 29.4336 23.8788 29.2674C21.1456 27.5314 18.6617 25.2692 16.2794 22.3421C15.1252 20.8832 14.3496 19.6551 13.7863 18.4085C14.5435 17.716 15.2452 16.9958 15.9285 16.3032C16.1871 16.0447 16.4456 15.7769 16.7042 15.5184C18.6433 13.5793 18.6433 11.0677 16.7042 9.12861L14.1834 6.6078C13.8971 6.32156 13.6016 6.02608 13.3246 5.7306C12.7706 5.1581 12.1889 4.56714 11.5887 4.01312C10.693 3.12668 9.62189 2.65576 8.49537 2.65576C7.36886 2.65576 6.27928 3.12668 5.3559 4.01312C5.34667 4.02235 5.34667 4.02235 5.33744 4.03159L2.19797 7.19876C1.01605 8.38068 0.341985 9.82114 0.194245 11.4924C-0.0273642 14.1887 0.766737 16.7003 1.37616 18.3439C2.87203 22.379 5.10659 26.1187 8.43997 30.1261C12.4843 34.9554 17.3505 38.7689 22.9092 41.4559C25.033 42.4624 27.8678 43.6535 31.0349 43.8567C31.2288 43.8659 31.432 43.8752 31.6166 43.8752C33.7496 43.8752 35.541 43.1088 36.9445 41.5852C36.9538 41.5667 36.9722 41.5575 36.9815 41.539C37.4616 40.9573 38.0156 40.431 38.5974 39.8677C38.9944 39.4891 39.4007 39.0921 39.7977 38.6766C40.7119 37.7255 41.192 36.6174 41.192 35.4817C41.192 34.3367 40.7026 33.2379 39.77 32.3145L34.7007 27.2267ZM38.0064 36.9499C37.9972 36.9499 37.9972 36.9591 38.0064 36.9499Z" />
                          </g>
                        </svg>
                      </div>
                      <div className="text">
                        <h4>Phone</h4>
                        {contactItem && contactItem.contactNo ? (
                          <>
                            <a href={`tel:${contactItem.contactNo[0]}`}>
                              {contactItem.contactNo[0]}
                            </a>
                            <br />
                            <a href={`tel:${contactItem.contactNo[1]}`}>
                              {contactItem.contactNo[1]}
                            </a>
                          </>
                        ) : (
                          "Loading..."
                        )}
                      </div>
                    </li>

                    {/* --- DYNAMIC EMAIL SECTION --- */}
                    <li>
                      <div className="icon">
                        <svg
                          width={44}
                          height={44}
                          viewBox="0 0 50 50"
                          xmlns="http://www.w3.org/2000/svg">
                          <g fill="currentColor">
                            <path d="M45.3125 6.25H4.68753C2.10267 6.25 0 8.35267 0 10.9375V39.0625C0 41.6474 2.10267 43.75 4.68753 43.75H45.3125C47.8973 43.75 50 41.6474 50 39.0625V10.9375C50 8.35267 47.8973 6.25 45.3125 6.25ZM45.3125 9.37499C45.5248 9.37499 45.7267 9.41903 45.9114 9.49595L25 27.62L4.08854 9.49595C4.27318 9.41914 4.47514 9.37499 4.68743 9.37499H45.3125ZM45.3125 40.625H4.68753C3.82542 40.625 3.12499 39.9246 3.12499 39.0624V12.7975L23.9761 30.8685C24.2707 31.1233 24.6353 31.25 25 31.25C25.3647 31.25 25.7294 31.1234 26.0239 30.8685L46.875 12.7975V39.0625C46.8749 39.9246 46.1746 40.625 45.3125 40.625Z" />
                          </g>
                        </svg>
                      </div>
                      <div className="text">
                        <h4>Email</h4>
                        {contactItem && contactItem.email ? (
                          <>
                            <a href={`mailto:${contactItem.email[0]}`}>
                              {contactItem.email[0]}
                            </a>
                            <br />
                            <a href={`mailto:${contactItem.email[1]}`}>
                              {contactItem.email[1]}
                            </a>
                          </>
                        ) : (
                          "Loading..."
                        )}
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* DYNAMIC FORM SECTION */}
              <div className="col-lg-6 col-md-6 text-md-start text-center">
                <div className="section-title2 mb-50">
                  <h2>Have Any Questions</h2>
                </div>
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-inner sibling2">
                        <input
                          type="text"
                          name="fullName"
                          placeholder="Enter your name"
                          value={formData.fullName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-inner sibling2">
                        <input
                          type="email"
                          name="email"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-inner sibling2">
                        <input
                          type="text"
                          name="phoneNo"
                          placeholder="Enter your Phone"
                          value={formData.phoneNo}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-inner sibling2">
                        <textarea
                          rows={5}
                          name="message"
                          placeholder="Your message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 text-lg-start text-center">
                      <button
                        type="submit"
                        disabled={isSending}
                        className="eg-btn btn--outline btn--lg sibling3 capsule">
                        {isSending ? "Sending..." : "Send Message"} &nbsp;
                        <svg
                          width={18}
                          height={15}
                          viewBox="0 0 22 13"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M21.9805 6.64708C21.955 6.74302 20.6834 7.78829 18.0766 9.85862..." />
                        </svg>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="map-section pt-120 pb-0 overflow-hidden"></div>
      </div>
    </>
  );
}

export default Contact;
