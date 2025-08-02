'use client';

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
