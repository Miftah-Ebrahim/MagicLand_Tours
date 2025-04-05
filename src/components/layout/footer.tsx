import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        
        {/* Brand & CTA */}
        <div className="flex flex-col items-start col-span-1 md:col-span-2 lg:col-span-1">
          <Link href="/" className="font-serif text-3xl font-bold tracking-tight mb-4 text-primary">
            Magicland Tours.
          </Link>
          <p className="text-background/70 mb-8 max-w-sm">
            Experience the magic of Ethiopia. Unforgettable adventures tailored for the curious traveler.
          </p>
          <Link href="/contact">
            <Button variant="primary">Start Your Adventure</Button>
          </Link>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-serif text-xl mb-4">Explore</h4>
          <ul className="flex flex-col gap-3">
            <li><Link href="/" className="text-background/70 hover:text-primary transition-colors">Home</Link></li>
            <li><Link href="/tours" className="text-background/70 hover:text-primary transition-colors">Tours</Link></li>
            <li><Link href="/about" className="text-background/70 hover:text-primary transition-colors">About Us</Link></li>
            <li><Link href="/contact" className="text-background/70 hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-serif text-xl mb-4">Contact Us</h4>
          <address className="not-italic text-background/70 flex flex-col gap-3">
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Magicland%20Tours&query_place_id=ChIJ_y6eHeuDSxYRBv6iB4DQRCE" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors text-left"
            >
              <p>No. 34, Nifasilk Lafto street<br/>Nefassilk Lafto<br/>Addis Ababa, Ethiopia</p>
            </a>
            <a href="tel:+251911223630" className="hover:text-primary transition-colors inline-block pt-2">
              +251 91 122 3630
            </a>
          </address>
        </div>

        {/* Hours */}
        <div>
          <h4 className="font-serif text-xl mb-4">Opening Hours</h4>
          <ul className="text-background/70 flex flex-col gap-3">
            <li className="flex justify-between"><span>Mon - Sat</span> <span>8:00 AM - 5:00 PM</span></li>
            <li className="flex justify-between"><span>Sunday</span> <span>Closed</span></li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-background/10 text-center text-sm text-background/50">
        <p>&copy; {new Date().getFullYear()} Magicland Tours. All rights reserved.</p>
        <p className="mt-2">Designed by NilePixel Technologies</p>
      </div>
    </footer>
  );
}
