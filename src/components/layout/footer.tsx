import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, ChevronRight, Compass } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-[#040914] text-white pt-32 pb-10 px-6 overflow-hidden border-t border-primary/20 shadow-[0_-20px_50px_rgba(212,175,55,0.05)]">
      
      {/* Background Architectural Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[100vw] h-[400px] bg-primary/5 blur-[150px] pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8">
        
        {/* Brand & CTA - Futuristic Typography */}
        <div className="flex flex-col items-start col-span-1 lg:col-span-5">
          <Link href="/" className="font-serif text-4xl sm:text-5xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 drop-shadow-sm">
            Magicland Tours<span className="text-primary">.</span>
          </Link>
          <p className="text-white/60 mb-10 max-w-md text-lg font-light leading-relaxed">
            Pioneering the future of luxury travel in Ethiopia. Immersive, sustainable, and extraordinarily curated.
          </p>
          <Link href="/contact" className="w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto h-14 px-8 rounded-xl bg-primary/10 hover:bg-primary border border-primary/30 hover:border-primary text-primary hover:text-primary-foreground shadow-[0_0_20px_rgba(212,175,55,0.15)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all duration-500">
              <Compass className="w-5 h-5 mr-2" />
              Begin Your Journey
            </Button>
          </Link>
        </div>

        {/* Links Grid */}
        <div className="lg:col-span-3">
          <h4 className="font-serif text-2xl mb-8 font-medium text-white/90">Navigation</h4>
          <ul className="flex flex-col gap-5">
            {[
              { name: "Home", href: "/" },
              { name: "Destinations", href: "/tours" },
              { name: "Our Story", href: "/about" },
              { name: "Contact", href: "/contact" },
            ].map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="group flex items-center text-white/60 hover:text-primary transition-colors text-lg">
                  <ChevronRight className="w-4 h-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="lg:col-span-4">
          <h4 className="font-serif text-2xl mb-8 font-medium text-white/90">Global Office</h4>
          <address className="not-italic text-white/60 flex flex-col gap-6">
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Magicland%20Tours&query_place_id=ChIJ_y6eHeuDSxYRBv6iB4DQRCE" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 hover:text-primary transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-white/5 group-hover:bg-primary/10 flex items-center justify-center shrink-0 border border-white/5 group-hover:border-primary/30 transition-colors">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <p className="pt-2 leading-relaxed">No. 34, Nifasilk Lafto<br/>Addis Ababa, Ethiopia</p>
            </a>
            
            <a href="tel:+251911223630" className="flex items-center gap-4 hover:text-primary transition-colors group">
              <div className="w-10 h-10 rounded-full bg-white/5 group-hover:bg-primary/10 flex items-center justify-center shrink-0 border border-white/5 group-hover:border-primary/30 transition-colors">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <span className="text-lg">+251 91 122 3630</span>
            </a>

            <a href="mailto:hello@magiclandtours.com" className="flex items-center gap-4 hover:text-primary transition-colors group">
              <div className="w-10 h-10 rounded-full bg-white/5 group-hover:bg-primary/10 flex items-center justify-center shrink-0 border border-white/5 group-hover:border-primary/30 transition-colors">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <span className="text-lg">hello@magiclandtours.com</span>
            </a>
          </address>
        </div>
      </div>

      {/* Massive Background Text & Copyright */}
      <div className="max-w-7xl mx-auto mt-32 pt-8 border-t border-white/10 flex flex-col items-center relative">
        <h2 className="absolute -top-16 sm:-top-24 left-1/2 -translate-x-1/2 text-[15vw] sm:text-[10vw] font-black tracking-tighter text-white/[0.02] whitespace-nowrap pointer-events-none select-none">
          MAGICLAND
        </h2>
        
        <div className="flex flex-col sm:flex-row justify-between w-full text-sm text-white/40 z-10 gap-4 text-center sm:text-left">
          <p>&copy; {new Date().getFullYear()} Magicland Tours. All rights reserved.</p>
          <div className="flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <p>Designed by NilePixel Technologies</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
