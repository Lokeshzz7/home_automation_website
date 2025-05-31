import { motion } from "framer-motion";

const testimonials = [
  { name: "John Doe", text: "SmartHome AI transformed my life! So easy to control everything." },
  { name: "Priya Singh", text: "Love the app and voice control. Highly recommended." },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-12">
      <h2 className="text-center text-3xl font-heading mb-10">What Our Clients Say</h2>
      <div className="max-w-4xl mx-auto space-y-8">
        {testimonials.map(({ name, text }, i) => (
          <motion.blockquote
            key={i}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.3, duration: 0.5 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl shadow-lg bg-white"
          >
            <p className="italic text-gray-700 mb-4">"{text}"</p>
            <footer className="text-right font-semibold">- {name}</footer>
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
}
