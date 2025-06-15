import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Parham Fatemi',
    role: 'Co-founder & Engineer',
    image: '/team/Parham Fatemi.JPG',
    description: 'Blending engineering with empathy, Parham creates human-centered tech solutions — from medical devices to intelligent meal tools.',
  },
  {
    name: 'Nasim Samiei',
    role: 'Co-founder & Registered Nutritionist',
    image: '/team/Nasim Samiei.JPG',
    description: 'Certified nutritionist focused on helping people reach their goals through flexible, sustainable eating habits — not rigid diets.',
  },
  {
    name: 'Saeid YazdiNezhad',
    role: 'Co-founder & Developer',
    image: '/team/Saeed Yazdinezhad.jpg',
    description: "An engineer with a passion for AI and simplicity, Saeid builds smart systems that feel effortless to use — including Mealr's core engine.",
  },
];

const Team = () => {
  return (
    <section id="team" className="section bg-mealr-bg py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-mealr-text-light text-lg max-w-2xl mx-auto">
            We're a passionate team of experts dedicated to revolutionizing
            the way people approach their nutrition and health.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="feature-card bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col items-center">
                <div className="w-48 h-48 rounded-full overflow-hidden mb-6 relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center"
                    style={{ objectPosition: 'center top' }}
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-mealr-pink font-medium mb-3">{member.role}</p>
                  <p className="text-mealr-text-light leading-relaxed">{member.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team; 