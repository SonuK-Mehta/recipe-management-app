import React from "react";
import HeroSection from "../components/HeroSection"; //
import HowItWorks from "../components/HowItWorks";
import Footer from "../components/Footer";
import Category from "../components/Category ";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <HowItWorks />
      <Category />
      <Footer />
    </div>
  );
};

export default Home;
