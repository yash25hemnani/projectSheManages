import React from "react";
import HeroSection from "../components/HeroSection";
import DescriptionSection from "../components/DescriptionSection";
import BuildFlexSection from "../components/BuildFlexSection";
import { useUser } from "@clerk/clerk-react";

const Home = () => {
  const { isSignedIn, user, isLoaded } = useUser();

  if (!isLoaded) return null;
  return (
    <div className="container sm:max-w-screen-2xl mx-auto px-8">
      <HeroSection />
      <DescriptionSection />
      <BuildFlexSection />
    </div>
  );
};

export default Home;
