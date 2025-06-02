'use client';

import {
  EnvelopeIcon,
  PlayCircleIcon,
} from '@heroicons/react/24/outline';
import {
  FiGithub,
  FiInstagram,
  FiTwitter,
  FiLinkedin,
} from 'react-icons/fi';

const socialLinks = [
  {
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=linlin.hong1@gmail.com',
    icon: <EnvelopeIcon className="w-6 h-6" />,
    label: 'Email',
  },
  {
    href: 'https://github.com/LinHong149',
    icon: <FiGithub className="w-6 h-6" />,
    label: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/lin-hong-4b603a260/',
    icon: <FiLinkedin className="w-6 h-6" />,
    label: 'LinkedIn',
  },
];
const SocialNav = () => {
  return (
    <div className="fixed z-10 bottom-0 left-6 hidden lg:flex flex-col items-center gap-6 text-[#72C6B2]" >
      {/* Icons */}
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className="hover:text-[#72C6B2] transition-colors duration-300"
        >
          {link.icon}
        </a>
      ))}

      {/* Vertical line */}
      <div className="w-px h-16 bg-[#72C6B2] mt-2" />
    </div>
  );
};

export default SocialNav;