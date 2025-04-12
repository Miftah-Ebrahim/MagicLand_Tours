"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { TourCard } from "@/components/ui/tour-card";
import Link from "next/link";
import { ArrowRight, Globe, Compass, Users, MapPin, Calendar, Phone, Star } from "lucide-react";
import Image from "next/image";

// Placeholder data for tours
const FEATURED_TOURS = [
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
];

export default function Home() {
  const videoRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: videoRef,
    offset: ["start end", "end start"]
  });
  
  // Refined scroll animation for luxury feel
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <div className="flex flex-col w-full bg-background overflow-hidden">
      
      {/* LUXURY HERO SECTION */}
      <section className="relative h-[100dvh] w-full flex flex-col items-center justify-center pt-20 px-4 sm:px-6">
        {/* Background Video */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute inset-0 w-full h-full object-cover scale-105"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          {/* Subtle cinematic gradient overlays */}
          <div className="absolute inset-0 bg-black/40 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent z-10" />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center w-full max-w-5xl mx-auto flex flex-col items-center mt-[-10vh]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-primary font-medium tracking-[0.2em] uppercase text-xs sm:text-sm mb-6 block drop-shadow-md">
              Extraordinary Journeys Await
            </span>
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-serif text-white mb-6 leading-[1.1] drop-shadow-2xl">
              Experience the <br className="hidden sm:block"/> Magic of Ethiopia
            </h1>
            <p className="text-lg sm:text-2xl text-white/90 mb-12 max-w-2xl mx-auto font-light drop-shadow-lg">
              Curated luxury travel experiences across ancient landscapes and vibrant cultures.
            </p>
          </motion.div>
        </div>

        {/* Floating Booking Widget (Tabeer Inspired) */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-30 w-full max-w-5xl mx-auto mt-auto mb-10 sm:mb-20"
        >
          <div className="bg-card/95 backdrop-blur-xl p-2 sm:p-4 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.2)] border border-border/50 flex flex-col sm:flex-row items-center gap-2">
            
            <div className="flex-1 w-full flex items-center gap-3 p-3 sm:px-6 hover:bg-foreground/5 rounded-xl transition-colors cursor-pointer">
              <MapPin className="text-primary w-5 h-5 shrink-0" />
              <div className="flex flex-col text-left">
                <span className="text-xs text-foreground/50 uppercase font-bold tracking-wider">Destination</span>
                <span className="text-sm sm:text-base text-foreground font-medium truncate">Where to next?</span>
              </div>
            </div>
            
            <div className="hidden sm:block w-[1px] h-10 bg-border/50" />
            
            <div className="flex-1 w-full flex items-center gap-3 p-3 sm:px-6 hover:bg-foreground/5 rounded-xl transition-colors cursor-pointer border-t sm:border-t-0 border-border/50">
              <Calendar className="text-primary w-5 h-5 shrink-0" />
              <div className="flex flex-col text-left">
                <span className="text-xs text-foreground/50 uppercase font-bold tracking-wider">Dates</span>
                <span className="text-sm sm:text-base text-foreground font-medium truncate">When are you traveling?</span>
              </div>
            </div>
            
            <div className="hidden sm:block w-[1px] h-10 bg-border/50" />
            
            <div className="flex-1 w-full flex items-center gap-3 p-3 sm:px-6 hover:bg-foreground/5 rounded-xl transition-colors cursor-pointer border-t sm:border-t-0 border-border/50">
              <Users className="text-primary w-5 h-5 shrink-0" />
              <div className="flex flex-col text-left">
                <span className="text-xs text-foreground/50 uppercase font-bold tracking-wider">Guests</span>
                <span className="text-sm sm:text-base text-foreground font-medium truncate">Add guests</span>
              </div>
            </div>

            <Link href="/contact" className="w-full sm:w-auto mt-2 sm:mt-0">
              <Button size="lg" className="w-full h-14 sm:h-16 px-8 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:scale-[1.02]">
                <Phone className="w-5 h-5 sm:mr-2" />
                <span className="hidden sm:inline font-medium">Book a Call</span>
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* EDITORIAL DESTINATION GRID */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="text-primary font-medium tracking-[0.15em] uppercase text-sm mb-4 block">
              Featured Destinations
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-foreground leading-tight">
              Curated for the <br/> Extraordinary
            </h2>
          </motion.div>
          <Link href="/tours" className="group inline-flex items-center text-foreground font-medium hover:text-primary transition-colors border-b border-foreground/20 pb-1">
            Discover all destinations
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-2" />
          </Link>
        </div>

        {/* Asymmetrical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 h-auto md:h-[600px]">
          {/* Main Large Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="md:col-span-7 h-[400px] md:h-full group relative overflow-hidden rounded-3xl"
          >
            <Link href={`/tours/${FEATURED_TOURS[0].slug}`} className="block w-full h-full">
              <Image 
                src={FEATURED_TOURS[0].image} 
                alt={FEATURED_TOURS[0].title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 sm:p-12 text-white transform transition-transform duration-500 group-hover:-translate-y-2">
                <span className="bg-primary px-3 py-1 text-xs font-bold tracking-wider uppercase rounded-full mb-4 inline-block">
                  Signature Tour
                </span>
                <h3 className="text-3xl sm:text-4xl font-serif font-bold mb-2">{FEATURED_TOURS[0].title}</h3>
                <p className="text-white/80 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" /> {FEATURED_TOURS[0].location}
                </p>
              </div>
            </Link>
          </motion.div>

          {/* Stacked Small Cards */}
          <div className="md:col-span-5 flex flex-col gap-6 sm:gap-8 h-auto md:h-full">
            {[FEATURED_TOURS[1], FEATURED_TOURS[2]].map((tour, idx) => (
              <motion.div 
                key={tour.slug}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 + (idx * 0.2) }}
                className="flex-1 h-[300px] md:h-1/2 group relative overflow-hidden rounded-3xl"
              >
                <Link href={`/tours/${tour.slug}`} className="block w-full h-full">
                  <Image 
                    src={tour.image} 
                    alt={tour.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6 sm:p-8 text-white transform transition-transform duration-500 group-hover:-translate-y-2">
                    <h3 className="text-2xl font-serif font-bold mb-2">{tour.title}</h3>
                    <p className="text-white/80 text-sm flex items-center gap-2">
                      <MapPin className="w-3 h-3 text-primary" /> {tour.location}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* THE MAGICLAND DIFFERENCE (Split Screen Layout) */}
      <section className="py-24 sm:py-32 bg-secondary text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Image Side with Parallax feel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="order-2 lg:order-1 relative h-[500px] lg:h-[700px] w-full rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image 
              src="/images/4.png" 
              alt="Cultural experience in Ethiopia" 
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Elegant inner border */}
            <div className="absolute inset-4 border border-white/20 rounded-2xl z-10 pointer-events-none" />
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <span className="text-primary font-medium tracking-[0.15em] uppercase text-sm mb-4 block">
              Why Travel With Us
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif mb-8 leading-tight">
              The Magicland <br className="hidden sm:block"/> Difference
            </h2>
            <p className="text-white/70 text-lg mb-12 leading-relaxed font-light">
              We don't just sell tours; we craft transformative experiences. Our deep local roots provide exclusive access to Ethiopia's most breathtaking and untouched wonders.
            </p>
            
            <div className="space-y-8">
              {[
                { title: "Bespoke Itineraries", desc: "Designed around your unique preferences and pace." },
                { title: "Local Experts", desc: "Guided by passionate natives who bring history to life." },
                { title: "Sustainable Travel", desc: "We ensure our footprint protects the beauty of our heritage." }
              ].map((feature, idx) => (
                <div key={idx} className="flex flex-col border-l-2 border-primary/30 pl-6 hover:border-primary transition-colors">
                  <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                  <p className="text-white/60 text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-[0.15em] uppercase text-sm mb-4 block">
            Guest Reviews
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif text-foreground">
            What Our Travelers Say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {[
            { name: "Sarah Jenkins", loc: "UK", text: "The Danakil Depression trip was life-changing. Magicland Tours handled everything perfectly." },
            { name: "Michael Chen", loc: "USA", text: "Incredible attention to detail. The guides were extremely knowledgeable about Lalibela's history." },
            { name: "Elena Rossi", loc: "Italy", text: "We felt so well taken care of in the Simien Mountains. Highly recommend their bespoke service." }
          ].map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-card text-card-foreground p-8 sm:p-10 rounded-3xl shadow-lg border border-border/50 flex flex-col"
            >
              <div className="flex text-primary mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-foreground/80 text-lg mb-8 flex-1 font-light italic">
                "{review.text}"
              </p>
              <div>
                <h4 className="font-bold text-foreground">{review.name}</h4>
                <p className="text-sm text-foreground/50">{review.loc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* REFINED SCROLL VIDEO SECTION */}
      <section ref={videoRef} className="relative h-[120vh] bg-background flex items-center justify-center overflow-hidden">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
          <motion.div 
            style={{ scale, opacity }}
            className="relative w-full max-w-6xl aspect-video rounded-3xl overflow-hidden shadow-2xl mx-4 sm:mx-6"
          >
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/hero-video.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center p-6 backdrop-blur-[2px]">
              <h2 className="text-3xl sm:text-5xl md:text-7xl font-serif font-bold text-white mb-6 drop-shadow-xl">
                Ready to explore?
              </h2>
              <Link href="/contact">
                <Button size="lg" className="px-8 py-6 text-lg rounded-full bg-white text-black hover:bg-primary hover:text-white transition-all shadow-xl">
                  Start Planning
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
    </div>
  );
}
