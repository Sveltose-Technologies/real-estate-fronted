import React, { useEffect, useState } from "react";
import Head from "next/head";
import Preloader from "../common/Preloader";
import About2 from "../components/about/About2";
import Banner2 from "../components/banner/Banner2";
import Practice2 from "../components/practice/Practice2";
import PracticeTestimonial from "../components/testimonial/PracticeTestimonial";

function Home2() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) return <Preloader style="home2preloader" />;

  return (
    <>
      <Head>
        <title>RealEstatePro - Home</title>
      </Head>
      {/* Header2 is automatically here from Layout */}
      <Banner2 />
      <About2 />
      <Practice2 />
      <PracticeTestimonial />
      {/* Footer is automatically here from Layout */}
    </>
  );
}

export default Home2;
