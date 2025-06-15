import { motion } from 'framer-motion';
import { FaClipboardList, FaCalendarAlt, FaSync } from 'react-icons/fa';

const steps = [
  {
    icon: <FaClipboardList className="w-12 h-12 md:w-14 md:h-14 text-mealr-pink" />,
    title: 'Tell Us What You Want',
    description: "Let us know your goals — whether it's fat loss, muscle gain, or just eating smarter. We'll learn your preferences.",
  },
  {
    icon: <FaCalendarAlt className="w-12 h-12 md:w-14 md:h-14 text-mealr-pink" />,
    title: 'Get a Flexible Meal Plan',
    description: 'Receive a personalized 7-day meal plan, designed by nutritionists and powered by AI — built to evolve with you.',
  },
  {
    icon: <FaSync className="w-12 h-12 md:w-14 md:h-14 text-mealr-pink" />,
    title: 'Swipe, Swap, and Stay on Track',
    description: 'Swipe between meal options to keep things fresh, all while sticking to your goals. Flexibility without guilt.',
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-mealr-text-light text-lg max-w-2xl mx-auto">
            Start your journey in three simple steps — powered by AI, backed by nutritionists, and made for real life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="feature-card bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 relative"
            >
              <div className="flex flex-col items-center text-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                  className="mb-4"
                >
                  {step.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-mealr-text-light leading-relaxed">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-mealr-pink"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 