import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaYoutube, FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';
import logo from '../assets/logo.png';

function Footer() {
  return (
    <footer className="bg-neutral-100 py-8 px-4 md:px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
        {/* Section 1: Logo and About */}
        <div>
          <img src={logo} alt="SoftSell Logo" className="h-12 mb-4" />
          <h2 className="text-4xl font-bold mb-4">SoftSell</h2>
          <p className="text-sm text-neutral-600">
            Communication is the foundation on which any great eCommerce Partnership is built. Let’s start talking about how we can grow your online success together. All it takes is an email or a call.
          </p>
        </div>

        {/* Section 2: Contact Info */}
        <div className="flex flex-col">
          <h2 className="font-semibold text-lg mb-4">Contact Us</h2>
          <div className="text-sm text-neutral-600 space-y-4">
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-blue-600" />
              <a href="mailto:accounts@payproglobal.com" className="hover:underline">accounts@payproglobal.com</a>
            </div>
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-blue-600" />
              <address className="not-italic">225 The East Mall, Suite 1117, Toronto, ON, M9B 0A9, Canada</address>
            </div>
          </div>
          <div className="flex space-x-4 mt-4 text-blue-600">
            <a href="#"><FaYoutube className="text-2xl hover:text-blue-800" /></a>
            <a href="#"><FaLinkedin className="text-2xl hover:text-blue-800" /></a>
            <a href="#"><FaFacebook className="text-2xl hover:text-blue-800" /></a>
            <a href="#"><FaTwitter className="text-2xl hover:text-blue-800" /></a>
          </div>
        </div>

        {/* Section 3: Links */}
        <div className="flex flex-col">
          <h2 className="font-semibold text-lg mb-4">Quick Links</h2>
          <div className="grid grid-cols-2 gap-4 text-sm text-neutral-600">
            <div>
              <h3 className="font-semibold">Privacy Policy</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Solutions</a></li>
                <li><a href="#" className="hover:underline">by Use Case</a></li>
                <li><a href="#" className="hover:underline">B2B SaaS</a></li>
                <li><a href="#" className="hover:underline">B2C SaaS</a></li>
                <li><a href="#" className="hover:underline">Software</a></li>
                <li><a href="#" className="hover:underline">Video Games</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Answers</a></li>
                <li><a href="#" className="hover:underline">How-to Guides</a></li>
                <li><a href="#" className="hover:underline">Blog</a></li>
                <li><a href="#" className="hover:underline">Pricing</a></li>
                <li><a href="#" className="hover:underline">Developer Docs</a></li>
                <li><a href="#" className="hover:underline">Support Center</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t mt-8 pt-4 text-center text-sm text-neutral-500">
        <p>&copy; Copyright 2006-2025 PayPro Global, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
