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
    icon: <EnvelopeIcon className="w-5 h-5 sm:w-6 sm:h-6" />,
    label: 'Email',
  },
  {
    href: 'https://github.com/LinHong149',
    icon: <FiGithub className="w-5 h-5 sm:w-6 sm:h-6" />,
    label: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/lin-hong-4b603a260/',
    icon: <FiLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />,
    label: 'LinkedIn',
  },
];

const SocialNav = () => {
  return (
    <>
      {/* Desktop version */}
      <div className="fixed z-10 bottom-0 left-6 hidden lg:flex flex-col items-center gap-6 text-[#72C6B2]">
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
        <div className="w-px h-16 bg-[#72C6B2] mt-2" />
      </div>

      {/* Mobile version */}
      <div className="fixed z-10 bottom-0 left-0 right-0 lg:hidden flex justify-center items-center gap-8 py-4 bg-black/50 backdrop-blur-sm">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="text-[#72C6B2] hover:text-[#72C6B2]/80 transition-colors duration-300"
          >
            {link.icon}
          </a>
        ))}
      </div>
    </>
  );
};

export default SocialNav;