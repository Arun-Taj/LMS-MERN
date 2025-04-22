import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import Logo from '../../assets/Logo.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Social */}
          <div>
            <Link to="/" className="inline-block mb-4 bg-white rounded-4xl">
              <img src={Logo} alt="EduMaster logo" className="h-16 w-auto" />
            </Link>
            <p className="text-sm leading-relaxed">
              Empowering learners worldwide with cutting-edge educational
              resources.
            </p>
            <div className="flex items-center space-x-4 mt-4">
              {[
                { icon: <FaFacebookF />, href: 'https://facebook.com', label: 'Facebook' },
                { icon: <FaTwitter />, href: 'https://twitter.com', label: 'Twitter' },
                { icon: <FaLinkedinIn />, href: 'https://linkedin.com', label: 'LinkedIn' },
                { icon: <FaInstagram />, href: 'https://instagram.com', label: 'Instagram' },
              ].map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2 rounded-full hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                >
                  {React.cloneElement(icon, { className: 'h-5 w-5' })}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { name: 'Home', to: '/' },
                { name: 'Courses', to: '/courseList' },
                { name: 'About Us', to: '/about' },
                { name: 'Blog', to: '/blog' },
                { name: 'Contact', to: '/contact' },
              ].map(link => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    className="hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center">
                <FaEnvelope className="mr-3" />
                <a
                  href="mailto:support@edumaster.com"
                  className="hover:text-white transition-colors"
                >
                  support@edumaster.com
                </a>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="mr-3" />
                <a
                  href="tel:+11234567890"
                  className="hover:text-white transition-colors"
                >
                  +1 (123) 456-7890
                </a>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3" />
                <span>
                  123 Education Street,<br /> Learn City, LC 12345
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Newsletter
            </h4>
            <p className="text-sm mb-4">
              Subscribe to receive our latest courses and offers.
            </p>
            <form className="flex flex-col sm:flex-row" onSubmit={e => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                aria-label="Email address"
                className="w-full px-4 py-2 rounded-md bg-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-200"
              />
              <button
                type="submit"
                className="mt-2 sm:mt-0 sm:ml-2 px-6 py-2 rounded-md bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-sm font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bar */}
        <div className="border-t border-gray-800 mt-12 pt-6 pb-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <span>&copy; {new Date().getFullYear()} EduMaster. All rights reserved.</span>
            <div className="flex space-x-4 mt-3 md:mt-0">
              <Link
                to="/privacy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
