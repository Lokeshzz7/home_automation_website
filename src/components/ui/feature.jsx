import { motion } from "framer-motion";
import { FaLightbulb, FaFan, FaMobileAlt } from "react-icons/fa";

const features = [
  { icon: <FaLightbulb size={40} />, title: "Smart Lights", desc: "Control lights with Alexa, Google, or app." },
  { icon: <FaFan size={40} />, title: "Automated Fans", desc: "Adjust fans based on temperature or voice." },
  { icon: <FaMobileAlt size={40} />, title: "Mobile App", desc: "Dedicated app with AI for advanced control." },
];

export default function Features() {
  return (
    <div className="grid md:grid-cols-3 gap-8 p-8 max-w-7xl mx-auto">
      {features.map(({ icon, title, desc }, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ 
            scale: 1.08, 
            y: -10,
            boxShadow: "0 8px 24px rgba(59, 130, 246, 0.6)", // blue glow
          }}
          transition={{ delay: i * 0.2, duration: 0.4, type: "spring", stiffness: 300 }}
          viewport={{ once: true }}
          className="bg-gradient-to-tr from-primary to-secondary rounded-xl p-6 text-white shadow-lg cursor-pointer relative overflow-hidden"
        >
          <div className="mb-4 text-white transition-colors duration-300 group-hover:text-blue-400">
            {icon}
          </div>
          <h3 className="text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-blue-400">{title}</h3>
          <p className="text-white/90 transition-colors duration-300 group-hover:text-blue-200">{desc}</p>
          {/* Animated gradient overlay on hover */}
          <div
            className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 transition-opacity duration-500 pointer-events-none"
          ></div>
        </motion.div>
      ))}
    </div>
  );
}
