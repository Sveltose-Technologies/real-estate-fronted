import React from "react";
import Head from "next/head";
import Footer from "../../common/Footer";
import Header2 from "../header/Header2";

function Layout({ children }) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Property Management and Real Estate"
        />
        <link rel="icon" href="/assets/images/icons/logo-icon.svg" />
      </Head>

      <Header2 />
      {/* All page content will be injected here */}
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
