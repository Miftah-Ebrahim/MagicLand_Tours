"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, MapPin } from "lucide-react";

export interface TourCardProps {
  title: string;
  location: string;
  duration: string;
  price: string;
  image: string; // Placeholder URL for now
  slug: string;
}

export function TourCard({ title, location, duration, price, image, slug }: TourCardProps) {
  return (
    <Link href={`/tours/${slug}`} className="block group">
      <motion.div 
        className="relative overflow-hidden rounded-2xl bg-card text-card-foreground shadow-sm border border-border hover:shadow-lg transition-all duration-500 h-full flex flex-col"
        whileHover={{ y: -5 }}
      >
        <div className="relative h-64 overflow-hidden">
          <Image 
            src={image} 
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Placeholder badge */}
          <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-foreground">
            {price}
          </div>
        </div>
        
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="font-serif text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {title}
          </h3>
          
          <div className="flex items-center gap-4 text-sm text-foreground/70 mt-auto pt-4">
            <div className="flex items-center gap-1">
              <MapPin size={14} className="text-primary" />
              <span>{location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={14} className="text-primary" />
              <span>{duration}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
