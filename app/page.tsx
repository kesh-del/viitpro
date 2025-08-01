'use client';

import { useState, useEffect } from "react";
import Loader from "../components/loader";

// Import your page sections
import HeroSlider from "./pageComponents/heroSection";
import AboutSection from "./pageComponents/aboutSection";
import SchoolsSection from "./pageComponents/schools";
import Programs from "./pageComponents/programs";
import CampusLifeSection from "./pageComponents/campusLife";
import News from "./pageComponents/news";
import PlacementHighlights from "./pageComponents/placementHighlights";
import TopRecruiters from "./pageComponents/topRecruiters";
import SocialMediaWall3D from "./pageComponents/socialMediaWall3D";


export default function HomePage(): JSX.Element {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen" data-scroll-container>
      <HeroSlider />
      <AboutSection />
      <SchoolsSection />
      <Programs />
      <CampusLifeSection />
      <News />
      <SocialMediaWall3D />
      <PlacementHighlights />
      <TopRecruiters />
      
    </div>
  );
}
