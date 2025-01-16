import React from "react";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import FeaturesSection from "@/components/FeaturesSection";
import CatalogSection from "@/components/CatalogSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative">
      <Navbar/>
      <Hero/>
      <FeaturesSection/>
      <CatalogSection/>
      <FAQSection/>
      <Footer/>
    </div>
  );
}
