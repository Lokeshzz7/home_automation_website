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
          transition={{ delay: i * 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-tr from-primary to-secondary rounded-xl p-6 text-white shadow-lg hover:scale-105 transform transition-transform cursor-pointer"
        >
          <div className="mb-4">{icon}</div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p>{desc}</p>
        </motion.div>
      ))}
    </div>
  );
}
