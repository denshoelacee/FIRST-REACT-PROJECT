import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import PrimaryButton from "../components/buttons/primarybutton";
import emailjs from "emailjs-com";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false); // ✅ Added loading state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // ✅ Start loading

    try {
      // Send message to YOU
      await emailjs.send(
        "service_1y5zvai", // Your EmailJS service ID
        "template_498d0yz", // Template for you
        formData,
        "MUZZJpDHV184p4LIe" // Your public key
      );

      // Auto-reply to client
      await emailjs.send(
        "service_1y5zvai",
        "template_ekkws39",
        formData,
        "MUZZJpDHV184p4LIe"
      );

      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Email send failed:", error);
      alert("❌ Failed to send message. Please try again later.");
    } finally {
      setLoading(false); // ✅ Stop loading
    }
  };

  return (
    <section id="contacts" className="py-24 relative text-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          data-aos="zoom-in"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          CONTACT ME
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg space-y-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Name */}
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              placeholder="Your name"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              placeholder="your@email.com"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-semibold"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-4">
            <PrimaryButton type="submit" disabled={loading}>
              {loading ? (
                <div className="flex items-center gap-2">
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                  </svg>
                  Sending...
                </div>
              ) : (
                <>
                  <FaPaperPlane className="mr-2" /> Send Message
                </>
              )}
            </PrimaryButton>
          </div>

          {/* Feedback Message */}
          {submitted && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-emerald-400 mt-4"
            >
              ✅ Message sent successfully! I’ll get back to you soon.
            </motion.p>
          )}
        </motion.form>

        {/* Optional email fallback */}
        <div className="text-center mt-8 text-gray-300">
          Or reach me directly at{" "}
          <a
            href="mailto:sgwykdn@gmail.com"
            className="text-emerald-400 hover:underline"
          >
            sgwykdn@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
