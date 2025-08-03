import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-[#00bcd4] to-[#26a69a] text-white pt-12 pb-8 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* University Info */}
        <div className="flex flex-col items-center md:items-start">
          <span className="text-2xl font-bold tracking-wide mb-2">A.P. Shah Institute of Technology</span>
          <span className="text-sm opacity-80 mb-2">Inspiring Excellence, Empowering Minds</span>
          <span className="text-xs opacity-70 mb-4">&copy; {new Date().getFullYear()} APSIT. All rights reserved.</span>
          <div className="flex gap-3 mt-2">
            <a href="#" aria-label="Facebook" className="hover:text-[#ffc107] transition"><svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg></a>
            <a href="#" aria-label="Twitter" className="hover:text-[#ffc107] transition"><svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 0 0-8.38 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.117 2.823 5.247a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.057 0 14.009-7.496 14.009-13.986 0-.213-.005-.425-.014-.636A9.936 9.936 0 0 0 24 4.557z"/></svg></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-[#ffc107] transition"><svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 20h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm15.25 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"/></svg></a>
          </div>
        </div>
        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm opacity-90">
            <li><a href="#" className="hover:text-[#ffc107] transition">About</a></li>
            <li><a href="#" className="hover:text-[#ffc107] transition">Contact</a></li>
            <li><a href="#" className="hover:text-[#ffc107] transition">Admissions</a></li>
            <li><a href="#" className="hover:text-[#ffc107] transition">Alumni</a></li>
            <li><a href="#" className="hover:text-[#ffc107] transition">Placements</a></li>
            <li><a href="#" className="hover:text-[#ffc107] transition">Events</a></li>
          </ul>
        </div>
        {/* Contact Info */}
        <div>
          <h3 className="font-bold text-lg mb-3">Contact Us</h3>
          <ul className="space-y-2 text-sm opacity-90">
            <li><span className="font-semibold">Address:</span> Ghodbunder Rd, Kasarvadavali, Thane (W), Maharashtra 400615</li>
            <li><span className="font-semibold">Phone:</span> <a href="tel:+912225988800" className="hover:text-[#ffc107] transition">+91 22 2598 8800</a></li>
            <li><span className="font-semibold">Email:</span> <a href="mailto:info@apsit.edu.in" className="hover:text-[#ffc107] transition">info@apsit.edu.in</a></li>
          </ul>
        </div>
        {/* Newsletter */}
        <div>
          <h3 className="font-bold text-lg mb-3">Newsletter</h3>
          <p className="text-sm opacity-90 mb-3">Subscribe to get the latest news, updates, and events from APSIT.</p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input type="email" placeholder="Your email" className="px-3 py-2 rounded text-gray-800 focus:outline-none" />
            <button type="submit" className="bg-[#ffc107] text-[#222] font-semibold px-4 py-2 rounded hover:bg-[#ffd740] transition">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="mt-10 text-center text-xs opacity-70">Designed & Developed by APSIT Students</div>
    </footer>
  );
};

export default Footer;
