import React from 'react';
import footerLogo from '../../assets/logo-footer.png';

const Footer = () => {
  return (
    <footer className="bg-[#06091A] text-white pt-40 pb-10">
      <div className="w-11/12 mx-auto flex flex-col items-center">
        {/* Logo Section */}
        <div className="mb-16">
          <img src={footerLogo} alt="BPL Dream 11 Logo" className="h-20 md:h-24" />
        </div>

        {/* Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full mb-16">
          {/* About Us */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold mb-2">About Us</h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              We are a passionate team dedicated to providing the best services to our customers. 
              Build your dream team and compete with the best in the BPL league.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold mb-2">Quick Links</h3>
            <ul className="text-gray-400 text-sm flex flex-col gap-3">
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Subscribe */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold mb-2">Subscribe</h3>
            <p className="text-gray-400 text-sm mb-2">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-0 overflow-hidden rounded-xl">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="input input-bordered bg-white text-gray-800 border-none rounded-r-none focus:outline-none w-full sm:w-64"
              />
              <button className="btn bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900 font-bold border-none rounded-l-none px-6 hover:from-yellow-500 hover:to-amber-600">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="w-full pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>©2026 Your Company All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
