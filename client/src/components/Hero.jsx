import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/hero.png)' }}
      >
        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(255,88,100,0.8), rgba(255,88,100,0.6))'
          }}
        />
      </div>

      {/* Content */}
      <div className="container relative z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-[800px] mx-auto"
        >
          <h1 
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)' }}
          >
            Personalized Meal Plans — With the Freedom to Swipe.
          </h1>
          <p 
            className="text-base md:text-lg mb-8 max-w-[700px] mx-auto leading-relaxed"
            style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)' }}
          >
            Forget one-size-fits-all diets. Mealr gives you nutritionist-designed plans<br className="hidden md:block" /> tailored to your goals — lose fat, build muscle, or just eat better — and lets you swipe between meals without breaking your plan.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cta-button bg-white text-mealr-pink hover:bg-mealr-pink hover:text-white text-lg px-8 py-3 rounded-full font-semibold transition-all duration-300"
            style={{
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
            }}
          >
            Join the Waitlist
          </motion.button>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mt-12"
          >
            <Link
              to="features"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="cursor-pointer inline-block"
            >
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="text-white/80 hover:text-white transition-colors"
              >
                <span className="scroll-icon inline-block text-2xl">
                  <FaChevronDown size={24} />
                </span>
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 