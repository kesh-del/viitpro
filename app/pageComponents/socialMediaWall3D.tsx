"use client";

import { ThreeDMarquee } from "../../components/ui/3d-marquee";

export default function SocialMediaWall3D() {
  const primaryColor = "#005f9e";

  // Extract images from the social media posts
  const socialImages = [
    "/sushacks.jpg",
    "/ieee.jpg", 
    "/yuvatarang.jpg",
    "/alumi.jpg",
    "/vista.jpg",
    "/viit-logo.jpeg",
    // Add some additional placeholder images to fill the marquee
    "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=600&h=400&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=400&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=600&h=400&fit=crop&auto=format"
  ];

  return (
    <div className="bg-gray-100 font-sans overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-12 relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-3">
            The Social Wall
          </h1>
          <p className="text-lg text-gray-500">Live updates from the VIIT community</p>
          <div className="w-20 h-1.5 mx-auto mt-4" style={{ backgroundColor: primaryColor }}></div>
        </div>

        {/* 3D Marquee */}
        <ThreeDMarquee 
          images={socialImages}
          className="mx-auto"
        />
      </div>
    </div>
  );
}