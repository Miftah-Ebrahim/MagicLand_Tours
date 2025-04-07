"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground">Our Story</h1>
          <div className="space-y-6 text-lg text-foreground/80 font-light">
            <p>

            </p>
            <p>
              Magicland Tours was born from a deep love for the incredible diversity of Ethiopia. Founded in Addis Ababa, our mission has always been to show the world the true magic of our homeland—beyond the guidebooks.
            </p>
            <p>
              Whether it's the blistering, otherworldly landscapes of the Danakil Depression, the ancient rock-hewn majesty of Lalibela, or the lush, wildlife-rich peaks of the Simien Mountains, we believe every journey should be transformative.
            </p>
            <p>
              We are a team of passionate, local experts dedicated to sustainable tourism and creating highly personalized experiences. We don't just take you places; we connect you with the soul of Ethiopia.
            </p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative h-[600px] w-full rounded-2xl overflow-hidden"
        >
          <Image 
            src="/images/2.png"
            alt="Ethiopian landscape"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
}
