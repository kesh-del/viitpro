// components/LoaderWrapper.tsx
"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Loader from "./loader";
import VideoLoader from "./VideoLoader";

export default function LoaderWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const [hasVideoLoaded, setHasVideoLoaded] = useState(false);

  useEffect(() => {
    // For the root path, loading is controlled by the VideoLoader's onVideoEnd.
    // For other paths, we use a simple timed loader.
    if (pathname !== "/") {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1000); // standard page loader timeout
      return () => clearTimeout(timer);
    } else {
      // Ensure loader is active on the root path initially.
      setLoading(true);
      setHasVideoLoaded(false);
      
      // Additional safety timeout for root path
      const safetyTimer = setTimeout(() => {
        console.warn("LoaderWrapper safety timeout triggered");
        setLoading(false);
      }, 8000); // 8 second safety timeout
      
      return () => clearTimeout(safetyTimer);
    }
  }, [pathname]);

  const handleVideoEnd = () => {
    setHasVideoLoaded(true);
    setLoading(false);
  };

  // Show loader while loading is true
  if (loading) {
    return pathname === "/" ? (
      <VideoLoader onVideoEnd={handleVideoEnd} />
    ) : (
      <Loader />
    );
  }

  return <>{children}</>;
}
