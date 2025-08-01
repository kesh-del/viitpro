// components/LoaderWrapper.tsx
"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Loader from "./loader";
import VideoLoader from "./VideoLoader";

export default function LoaderWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

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
    }
  }, [pathname]);

  const handleVideoEnd = () => {
    setLoading(false);
  };

  if (loading) {
    return pathname === "/" ? <VideoLoader onVideoEnd={handleVideoEnd} /> : <Loader />;
  }
  return <>{children}</>;
}
