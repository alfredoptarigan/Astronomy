import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import PlanetarySystem from "../components/PlanetarySystem";
import About from "../components/About";
import Footer from "../components/Footer";

function index() {
  return (
    <div className="bg-gray-800 min-h-screen max-w-screen antialiased">
      <Head>
        <title>Astronomy &mdash; Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <PlanetarySystem />
      <About />
      <Footer />
    </div>
  );
}

export default index;
