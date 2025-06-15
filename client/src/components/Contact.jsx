import { motion } from 'framer-motion';
import { FaEnvelope, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useState } from 'react';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted');
    setIsSubmitted(true);
    // Reset form
    e.target.reset();
    // Hide success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contact" className="section py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Talk</h2>
          <p className="text-mealr-text-light text-lg max-w-2xl mx-auto">
            Want to partner, collab, or just chat? We're always up for a conversation — drop us a line and we'll get back to you ASAP.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="feature-card bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-mealr-text mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  aria-label="Your name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mealr-pink focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-mealr-text mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  aria-label="Your email address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mealr-pink focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-mealr-text mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  aria-label="Your message"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mealr-pink focus:border-transparent"
                  required
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="btn btn-primary w-full bg-mealr-pink text-white py-3 rounded-lg font-semibold hover:bg-mealr-pink/90 transition-colors"
              >
                Send Message
              </motion.button>
              {isSubmitted && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-mealr-pink text-center mt-4"
                >
                  Thanks! We'll get back to you shortly.
                </motion.p>
              )}
            </div>
          </motion.form>

          <div className="flex justify-center space-x-6 mt-8">
            <a
              href="mailto:hello@mealr.com"
              className="text-mealr-text hover:text-mealr-pink transition-colors"
              aria-label="Send us an email"
            >
              <FaEnvelope size={24} />
            </a>
            <a
              href="https://twitter.com/mealr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-mealr-text hover:text-mealr-pink transition-colors"
              aria-label="Follow us on Twitter"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://instagram.com/mealr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-mealr-text hover:text-mealr-pink transition-colors"
              aria-label="Follow us on Instagram"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://linkedin.com/company/mealr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-mealr-text hover:text-mealr-pink transition-colors"
              aria-label="Follow us on LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 