import { useState, useEffect } from "react";

import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import SearchBar from "../Components/SearchBar";
import PropertiesSection from "../Components/PropertiesSection";
import WhyChooseUs from "../Components/WhyChooseUs";
import ServicesSection from "../Components/ServicesSection";
import CTASection from "../Components/CTASection";
import Footer from "../Components/Footer";

import properties from "../Data/properties";
import services from "../Data/services";
import useInView from "../Hooks/useInView";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [heroRef, heroVis] = useInView();
  const [propsRef, propsVis] = useInView();
  const [whyRef, whyVis] = useInView();
  const [servRef, servVis] = useInView();

  return (
    <>
      <Navbar scrolled={scrolled} />
      <Hero sectionRef={heroRef} visible={heroVis} />
      <SearchBar />
      <PropertiesSection
        sectionRef={propsRef}
        visible={propsVis}
        properties={properties}
      />
      <WhyChooseUs sectionRef={whyRef} visible={whyVis} />
      <ServicesSection
        sectionRef={servRef}
        visible={servVis}
        services={services}
      />
      <CTASection />
      <Footer />
    </>
  );
}
