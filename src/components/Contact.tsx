import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceId = "service_h28v3da"; 
    const templateId = "template_dczc13o"; 
    const publicKey = "chW7ecdWa1ovo0p6m"; 

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setStatus('Message sent, Rai Will contact to you shortly!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('Something is wrong Jessi, please sending an email');
    }
  };

  useEffect(() => {
    const audio = new Audio('/bettersong.mp3'); // Make sure this file is in the `public` folder
    audio.play();

    return () => {
      audio.pause();
      audio.currentTime = 0; // Reset audio when leaving the page
    };
  }, []);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-yellow-500 text-black p-6">
      <div className="flex flex-col md:flex-row items-center max-w-5xl w-full">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left p-6">
          <h1 className="text-6xl font-extrabold text-red-600 italic mb-4 md:whitespace-nowrap" style={{ fontFamily: 'Dancing Script, cursive' }}>
            "Better Call Rai!"
          </h1>
          <p className="text-xl font-bold" style={{ fontFamily: 'Dancing Script, cursive' }}>
            "In Code Trouble? I Can Help!"
          </p>
          <div className="mt-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-3">
              <Phone className="h-6 w-6 text-red-600 mr-2" />
              <a href="tel:+923039222567" className="text-lg font-bold">+92 303 9222567</a>
            </div>
            <div className="flex items-center justify-center md:justify-start mb-3">
              <Mail className="h-6 w-6 text-red-600 mr-2" />
              <a href="mailto:raimuhammadtabish@gmail.com" className="text-lg font-bold">raimuhammadtabish@gmail.com</a>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2 p-6 flex justify-center"
        >
          <img src="/better cal rai.png" alt="Better Call Rai" className="w-full max-w-sm md:max-w-md" />
        </motion.div>
      </div>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-8 w-full max-w-lg bg-white p-6 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-bold text-red-600 mb-4 text-center">
          Want to Hire the Best Developer? <br /> Let's Talk!
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded-lg"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 rounded-lg"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 border border-gray-300 rounded-lg"
            rows="4"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
          />
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-3 rounded-lg font-bold hover:bg-red-700 transition"
          >
            Send Message
          </button>
        </form>
        {status && <p className="text-center mt-3 text-lg font-bold">{status}</p>}
      </motion.div>
    </div>
  );
}
