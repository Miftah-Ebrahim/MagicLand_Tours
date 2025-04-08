"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Mail } from "lucide-react";


export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground">Get in Touch</h1>
        <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
          Whether you're ready to book or just exploring options, our team is here to help you craft the perfect Ethiopian adventure.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white p-8 rounded-2xl shadow-sm border border-foreground/5"
        >
          <h2 className="font-serif text-2xl font-bold mb-6">Send an Inquiry</h2>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">Name</label>
                <input id="name" type="text" className="w-full h-11 px-4 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <input id="email" type="email" className="w-full h-11 px-4 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="john@example.com" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="interest" className="text-sm font-medium">Tour of Interest</label>
              <select id="interest" className="w-full h-11 px-4 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50">
                <option value="">Select a tour (Optional)</option>
                <option value="danakil">Danakil Depression</option>
                <option value="lalibela">Lalibela</option>
                <option value="simien">Simien Mountains</option>
                <option value="custom">Custom Itinerary</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">Message</label>
              <textarea id="message" rows={4} className="w-full p-4 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="Tell us about your dream trip..."></textarea>
            </div>
            
            <Button type="submit" className="w-full">Send Message</Button>
          </form>
        </motion.div>

        {/* Contact Info & 3D Element */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col h-full"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-3 font-serif text-xl font-bold mb-4">
                <MapPin className="text-primary" />
                <h3>Visit Us</h3>
              </div>
              <address className="not-italic text-foreground/70 space-y-1">
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Magicland%20Tours&query_place_id=ChIJ_y6eHeuDSxYRBv6iB4DQRCE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors block"
                >
                  <p>No. 34, Nifasilk Lafto street</p>
                  <p>Nefassilk Lafto</p>
                  <p>Addis Ababa, Ethiopia</p>
                </a>
              </address>
            </div>
            
            <div>
              <div className="flex items-center gap-3 font-serif text-xl font-bold mb-4">
                <Phone className="text-primary" />
                <h3>Call Us</h3>
              </div>
              <a href="tel:+251911223630" className="text-foreground/70 hover:text-primary transition-colors block mb-1">
                +251 91 122 3630
              </a>
              <a href="mailto:hello@magiclandtours.com" className="text-foreground/70 hover:text-primary transition-colors block">
                hello@magiclandtours.com
              </a>
            </div>

            <div className="sm:col-span-2">
              <div className="flex items-center gap-3 font-serif text-xl font-bold mb-4">
                <Clock className="text-primary" />
                <h3>Opening Hours</h3>
              </div>
              <div className="text-foreground/70 flex flex-col gap-2 max-w-sm">
                <div className="flex justify-between border-b border-border pb-2">
                  <span>Monday - Saturday</span>
                  <span>8:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between pt-2 text-foreground/50">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 min-h-[300px] sm:min-h-[400px] bg-foreground/5 rounded-2xl overflow-hidden relative border border-border shadow-md">
            <iframe 
              src="https://maps.google.com/maps?q=Magicland%20Tours,Nifasilk%20Lafto,Addis%20Ababa&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%" 
              height="100%" 
              style={{ border: 0, position: 'absolute', top: 0, left: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Magicland Tours Location"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
