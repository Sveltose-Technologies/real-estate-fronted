import React, { useEffect, useState } from "react";
import Head from "next/head";
import Footer from "../common/Footer";
import Preloader from "../common/Preloader";
import About2 from "../components/about/About2";
import Banner2 from "../components/banner/Banner2";
import AboutContactArea from "../components/contact/AboutContactArea";
import Header2 from "../components/header/Header2";


function Home2() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      {loading ? (
        <Preloader style="home2preloader" />
      ) : (
        <>
          <Head>
            <title>
              RealEstatePro - Property Agents & Real Estate Services React
              NextJs Template
            </title>
            <meta name="description" content="Real estate agency website" />
            <link rel="icon" href="assets/images/icons/logo-icon.svg" />
          </Head>
          <Header2 />
          <Banner2 />
          <About2 />
     
          {/* <AboutBlog /> */}
          <AboutContactArea />
          <Footer />
        </>
      )}
    </>
  );
}

export default Home2;
