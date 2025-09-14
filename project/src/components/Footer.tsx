import React from 'react';
import { BookOpen, Phone, Mail, MessageCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <BookOpen className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">MathsGuru</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Empowering students in Mathematics, Science, and Programming with personalized attention 
              and proven teaching methods. Join hundreds of successful students who have achieved 
              their academic goals.
            </p>
            <div className="flex space-x-4">
              <a 
                href="tel:+917879864169"
                className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-colors"
                title="Call Now"
              >
                <Phone className="h-5 w-5" />
              </a>
              <a 
                href="mailto:litoriyaprashant4@email.com"
                className="bg-green-600 hover:bg-green-700 p-2 rounded-full transition-colors"
                title="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a 
                href="https://wa.me/917879864169"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 p-2 rounded-full transition-colors"
                title="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Me
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('subjects')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Subjects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('testimonials')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Testimonials
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Subjects */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Subjects</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">Mathematics (7th-12th)</li>
              <li className="text-gray-400">Science (9th-10th)</li>
              <li className="text-gray-400">Programming Languages</li>
              <li className="text-gray-400">Machine Learning</li>
              <li className="text-gray-400">Deep Learning</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} MathsGuru. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <button
                onClick={scrollToTop}
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Back to Top ↑
              </button>
              <span className="text-gray-600">|</span>
              <span className="text-gray-400 text-sm">
                Made with ❤️ for Education
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;