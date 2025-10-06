import React from 'react'
import { FaFacebook, FaFacebookMessenger, FaInstagram, FaLinkedin } from "react-icons/fa";

function SocialLinks() {
  return (
    <div className="flex gap-3 h-auto w-auto justify-center md:justify-normal">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook className="w-12 h-12 p-2 rounded-full border transition-all duration-300 hover:text-emerald-500 hover:scale-110" />
      </a>
      <a href="https://messenger.com" target="_blank" rel="noopener noreferrer">
        <FaFacebookMessenger className="w-12 h-12 p-2 rounded-full border transition-all duration-300 hover:text-emerald-500 hover:scale-110" />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="w-12 h-12 p-2 rounded-full border transition-all duration-300 hover:text-emerald-500 hover:scale-110" />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="w-12 h-12 p-2 rounded-full border transition-all duration-300 hover:text-emerald-500 hover:scale-110" />
      </a>
    </div>
  )
}

export default SocialLinks
