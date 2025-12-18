import React, { useState } from "react";
import { FaFacebookF, FaXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const { name, email, message } = formData;
    const subject = `Portfolio Contact from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const mailtoLink = `mailto:alimoavia00123@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <footer className="text-gray-300 py-16 px-6 md:px-20 text-center">
      
      {/* ===== Contact Form Section ===== */}
      <div className="max-w-lg mx-auto mb-10">
        <h2 className="text-3xl font-bold mb-6 text-[#38BDF8]">Get In Touch</h2>
        <p className="text-gray-400 mb-6">
          Have a project idea or want to collaborate? Send me a quick message 👇
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-lg bg-[#1E293B]/70 border border-gray-600 text-white outline-none focus:border-[#38BDF8]"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-lg bg-[#1E293B]/70 border border-gray-600 text-white outline-none focus:border-[#38BDF8]"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="4"
            required
            className="w-full p-3 rounded-lg bg-[#1E293B]/70 border border-gray-600 text-white outline-none focus:border-[#38BDF8]"
          ></textarea>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-[#38BDF8] hover:bg-[#34D399] transition-all text-[#0F172A] font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* ===== Social Links & Footer Info ===== */}
      <div className="flex justify-center gap-6 text-xl mb-6">
        <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-[#38BDF8]">
          <FaFacebookF />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-[#38BDF8]">
          <FaXTwitter />
        </a>
        <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-[#34D399]">
          <FaGithub />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#34D399]">
          <FaLinkedin />
        </a>
      </div>

      <p className="text-gray-400 text-sm mb-1">
        Email: <a href="mailto:alimoavia00123@gmail.com" className="text-[#38BDF8] hover:underline">alimoavia00123@gmail.com</a>
      </p>
      <p className="text-gray-500 text-xs">
        © {new Date().getFullYear()} Moavia Ali — All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
