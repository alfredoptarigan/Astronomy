import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";
import "../styles/astronomy.css";

import AOS from "aos";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
    return () => {};
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
