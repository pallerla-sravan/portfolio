import React from 'react';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/pallerla-sravan",
      label: "GitHub",
      color: "hover:bg-gray-900"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://www.linkedin.com/in/sravan-pallerla-95604a288/",
      label: "LinkedIn",
      color: "hover:bg-blue-600"
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      href: "https://twitter.com/pallerlasravan",
      label: "Twitter",
      color: "hover:bg-sky-500"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:sravanpallerla1234@gmail.com",
      label: "Email",
      color: "hover:bg-red-500"
    }
  ];

  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800 py-16 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Connect Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Let's <span className="text-purple-600">Connect</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-md">
              Follow me on social platforms or send me an email to discuss opportunities.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full bg-gray-50 dark:bg-gray-800 ${link.color} hover:text-white transition-all duration-300 hover:-translate-y-1`}
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Quick <span className="text-purple-600">Links</span>
            </h3>
            <ul className="space-y-3">
              {navLinks.map((section) => (
                <li key={section}>
                  <a
                    href={`#${section.toLowerCase()}`}
                    className="group flex items-center text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {section}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resume + CTA */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Get My <span className="text-purple-600">Resume</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Interested in working together? Download my resume or reach out directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/resume-1.pdf"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
              >
                Download Resume
              </a>
              <a
                href="mailto:sravanpallerla1234@gmail.com"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-lg transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center border-t border-gray-100 dark:border-gray-800 pt-8">
          <p className="flex justify-center items-center text-sm text-gray-600 dark:text-gray-400">
            Crafted with <Heart className="mx-1.5 h-4 w-4 text-red-500 animate-pulse" /> using Next.js & Tailwind CSS
          </p>
          <p className="mt-3 text-sm text-gray-500 dark:text-gray-500">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;