"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";

interface VideoLoaderProps {
  onVideoEnd: () => void;
}

// Move video sources outside component to prevent re-creation
const VIDEO_SOURCES = ["/0718.mp4", "/viit.mp4", "/VideoR.mp4"];

const VideoLoader: React.FC<VideoLoaderProps> = ({ onVideoEnd }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // Memoize the video end handler to prevent re-renders
  const handleVideoEnd = useCallback(() => {
    onVideoEnd();
  }, [onVideoEnd]);

  useEffect(() => {
    const video = videoRef.current;
    
    // Set a fallback timer in case video fails to load or play
    const fallbackTimer = setTimeout(() => {
      console.warn("Video loader timeout - proceeding to main content");
      onVideoEnd();
    }, 8000); // 8 second fallback

    if (video) {
      // Handle video load errors
      const handleError = () => {
        console.error(`Video failed to load: ${VIDEO_SOURCES[currentVideoIndex]}`);
        
        // Try next video source
        if (currentVideoIndex < VIDEO_SOURCES.length - 1) {
          setCurrentVideoIndex(prev => prev + 1);
        } else {
          // All videos failed, proceed to main content
          setVideoError(true);
          setTimeout(onVideoEnd, 500);
        }
      };

      const handleCanPlay = () => {
        video.play().catch((e) => {
          console.error("Video play failed:", e);
          handleError();
        });
      };

      video.addEventListener('error', handleError);
      video.addEventListener('canplay', handleCanPlay);

      return () => {
        video.removeEventListener('error', handleError);
        video.removeEventListener('canplay', handleCanPlay);
        clearTimeout(fallbackTimer);
      };
    }

    return () => {
      clearTimeout(fallbackTimer);
    };
  }, [currentVideoIndex, onVideoEnd]);

  // If all videos fail, proceed to main content immediately
  if (videoError) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 w-screen h-screen bg-black" role="status" aria-label="Loading">
      <video
        ref={videoRef}
        src={VIDEO_SOURCES[currentVideoIndex]}
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
        onError={() => {
          if (currentVideoIndex < VIDEO_SOURCES.length - 1) {
            setCurrentVideoIndex(prev => prev + 1);
          } else {
            setVideoError(true);
          }
        }}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default VideoLoader;
