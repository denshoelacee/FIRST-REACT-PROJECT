import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function SocialLinks() {
  return (
    <div className="flex gap-3 h-auto w-auto justify-center md:justify-normal">
      <a href="https://facebook.com/sgwykdn" target="_blank" rel="noopener noreferrer">
        <FaFacebook className="w-12 h-12 p-2 rounded-full border transition-all duration-300 hover:text-emerald-500 hover:scale-110" />
      </a>
      <a href="https://github.com/denshoelacee" target="_blank" rel="noopener noreferrer">
        <FaGithub className="w-12 h-12 p-2 rounded-full border transition-all duration-300 hover:text-emerald-500 hover:scale-110" />
      </a>
      <a href="https://www.instagram.com/_denshoww" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="w-12 h-12 p-2 rounded-full border transition-all duration-300 hover:text-emerald-500 hover:scale-110" />
      </a>
      <a href="https://www.linkedin.com/in/deniel-ybañez-6b5732320" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="w-12 h-12 p-2 rounded-full border transition-all duration-300 hover:text-emerald-500 hover:scale-110" />
      </a>
    </div>
  )
}

export default SocialLinks
