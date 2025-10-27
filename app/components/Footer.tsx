// components/Footer.tsx

import { Github, Twitter, Linkedin } from 'lucide-react';

// Define the social links structure
const socialLinks = [
  { 
    name: 'GitHub', 
    icon: Github, 
    href: 'YOUR_GITHUB_LINK', // 👈 Update this link
  },
  { 
    name: 'Twitter', 
    icon: Twitter, 
    href: 'YOUR_TWITTER_LINK', // 👈 Update this link
  },
  { 
    name: 'LinkedIn', 
    icon: Linkedin, 
    href: 'YOUR_LINKEDIN_LINK', // 👈 Update this link
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full mt-10 p-6 bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        
        {/* 1. Copyright Text */}
        <p className="text-text-muted text-sm">
          &copy; {currentYear} ClipperVerse. All rights reserved.
        </p>

        {/* 2. Social Media Icons */}
        <div className="flex space-x-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Follow us on ${link.name}`}
              className="text-text-muted hover:text-accent transition-colors duration-200"
            >
              <link.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}