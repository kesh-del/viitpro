"use client";
import { HeroParallax } from "../../components/ui/hero-parallax";

export default function HeroParallaxDemo() {
  const products = [
    {
      title: "Computer Science Engineering",
      link: "/Departments/CSE",
      thumbnail: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=600&h=400&fit=crop&auto=format",
    },
    {
      title: "Artificial Intelligence & Data Science",
      link: "/Departments/AIDS",
      thumbnail: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop&auto=format",
    },
    {
      title: "Civil Engineering",
      link: "/Departments/Civil",
      thumbnail: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop&auto=format",
    },
    {
      title: "Applied Computer Science",
      link: "/Departments/ACSE",
      thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop&auto=format",
    },
    {
      title: "Basic Sciences & Humanities",
      link: "/Departments/BSH",
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&auto=format",
    },
    {
      title: "Campus Life",
      link: "/campus-life",
      thumbnail: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop&auto=format",
    },
    {
      title: "Research & Innovation",
      link: "/academics",
      thumbnail: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=400&fit=crop&auto=format",
    },
    {
      title: "Library & Resources",
      link: "/campus-life/library",
      thumbnail: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop&auto=format",
    },
    {
      title: "Sports & Recreation",
      link: "/campus-life/physical-education",
      thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&auto=format",
    },
    {
      title: "Student Activities",
      link: "/cells",
      thumbnail: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=600&h=400&fit=crop&auto=format",
    },
    {
      title: "Admissions",
      link: "/admissions",
      thumbnail: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop&auto=format",
    },
    {
      title: "Engineering Excellence",
      link: "/academics",
      thumbnail: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop&auto=format",
    },
    {
      title: "International Programs",
      link: "/cells/international-student-cell",
      thumbnail: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=600&h=400&fit=crop&auto=format",
    },
    {
      title: "Innovation & Entrepreneurship",
      link: "/cells/iic-cell",
      thumbnail: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=400&fit=crop&auto=format",
    },
    {
      title: "Contact Us",
      link: "/contactUs",
      thumbnail: "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=600&h=400&fit=crop&auto=format",
    },
  ];

  return <HeroParallax products={products} />;
}