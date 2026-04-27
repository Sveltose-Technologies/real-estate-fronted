import React from "react";
import Head from "next/head";
import Footer from "../../common/Footer";
import Header2 from "../header/Header2";

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Real Estate Project</title>
        <meta
          name="description"
          content="Property Management and Real Estate"
        />
        <link rel="icon" href="/assets/images/icons/logo-icon.svg" />
      </Head>

      {/* 
         Standard rendering: If these imports were missing, 
         Next.js would show a "Module Not Found" error during build.
      */}
      <Header2 />

      <main>{children}</main>

      <Footer />
    </>
  );
}

export default Layout;
