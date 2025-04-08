"use client";

import { motion } from "framer-motion";
import { TourCard } from "@/components/ui/tour-card";

// Placeholder data for all tours
const ALL_TOURS = [
  {
    slug: "danakil-depression",
    title: "Danakil Depression Expedition",
    location: "Afar Region",
    duration: "4 Days",
    price: "$599",
    image: "/images/2.png",
  },
  {
    slug: "lalibela-churches",
    title: "Lalibela Rock-Hewn Churches",
    location: "Amhara Region",
    duration: "3 Days",
    price: "$450",
    image: "/images/3.png",
  },
  {
    slug: "simien-mountains",
    title: "Simien Mountains Trek",
    location: "Amhara Region",
    duration: "7 Days",
    price: "$850",
    image: "/images/1.png",
  },
  {
    slug: "omo-valley",
    title: "Omo Valley Cultural Tour",
    location: "SNNPR Region",
    duration: "6 Days",
    price: "$780",
    image: "/images/4.png",
  },
  {
    slug: "bale-mountains",
    title: "Bale Mountains Wildlife",
    location: "Oromia Region",
    duration: "5 Days",
    price: "$620",
    image: "/images/1.png",
  },
  {
    slug: "harar-city",
    title: "Historic City of Harar",
    location: "Harari Region",
    duration: "3 Days",
    price: "$390",
    image: "/images/3.png",
  },
];

export default function ToursPage() {
  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground">Our Tours</h1>
        <p className="text-foreground/70 text-lg max-w-2xl">
          Browse our curated selection of Ethiopian adventures. From ancient rock-hewn churches to otherworldly volcanic landscapes.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ALL_TOURS.map((tour, index) => (
          <motion.div
            key={tour.slug}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <TourCard {...tour} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
