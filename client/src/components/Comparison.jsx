import { motion } from 'framer-motion';
import { FaCheck, FaTimes } from 'react-icons/fa';

const Comparison = () => {
  const features = [
    {
      traditional: 'One static plan',
      mealr: 'Swipe-based variety',
    },
    {
      traditional: 'Repetitive meals',
      mealr: 'Personalized by AI + nutritionist',
    },
    {
      traditional: 'Manual adjustments',
      mealr: 'Meals that adapt as you go',
    },
    {
      traditional: 'No flexibility',
      mealr: 'Stick to your plan without boredom',
    },
  ];

  return (
    <section className="section py-20 bg-mealr-bg">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Mealr Is Different</h2>
          <p className="text-mealr-text-light text-lg max-w-2xl mx-auto">
            Most apps give you a static plan. Mealr gives you control.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Traditional Plans Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="feature-card bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-600">Traditional Meal Plans</h3>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center space-x-3 text-gray-600"
                >
                  <FaTimes className="text-red-400 flex-shrink-0" />
                  <span>{feature.traditional}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Mealr Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="feature-card bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <h3 className="text-2xl font-bold mb-6 text-center text-mealr-pink">Mealr</h3>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center space-x-3 text-gray-700"
                >
                  <FaCheck className="text-mealr-pink flex-shrink-0" />
                  <span>{feature.mealr}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Comparison; 