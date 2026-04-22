import React from "react";
import Head from "next/head";
import Footer from "../../common/Footer";
import Header2 from "../header/Header2";

function Layout({ children }) {
  // Debugging: If one of these logs "undefined", you found the source of the error
  console.log("Header2 component:", Header2);
  console.log("Footer component:", Footer);

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

      {/* If Header2 is undefined, this line crashes the app */}
      {Header2 ? <Header2 /> : <p>Header Loading Error...</p>}

      <main>{children}</main>

      {/* If Footer is undefined, this line crashes the app */}
      {Footer ? <Footer /> : <p>Footer Loading Error...</p>}
    </>
  );
}

export default Layout;
