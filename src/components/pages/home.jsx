import React from 'react';
import { SparklesCore } from "../ui/sparkles";
import { motion } from "framer-motion";
import { FaWifi, FaMobileAlt, FaBolt, FaHome } from "react-icons/fa";

const features = [
  {
    icon: <FaWifi className="text-blue-500 text-3xl" />,
    title: "Wi-Fi Controlled",
    description: "Control all your appliances through a secure Wi-Fi connection."
  },
  {
    icon: <FaMobileAlt className="text-green-500 text-3xl" />,
    title: "Mobile App Integration",
    description: "Seamlessly manage everything from our custom mobile app."
  },
  {
    icon: <FaBolt className="text-yellow-500 text-3xl" />,
    title: "Energy Efficient",
    description: "Smart scheduling and automation help reduce electricity usage."
  },
  {
    icon: <FaHome className="text-purple-500 text-3xl" />,
    title: "Voice Assistant Compatible",
    description: "Works flawlessly with Alexa, Google Assistant, and Siri."
  }
];

const Home = () => {
  return (
    <div className="bg-black text-white font-sans flex flex-col min-h-screen">
      {/* Sparkles animation & Hero */}
      <motion.div
        className="h-[40rem] w-full bg-black relative flex items-center justify-center px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0">
          <SparklesCore
            background="black"
            minSize={0.4}
            maxSize={1.2}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>
        <motion.div 
  className="relative text-center max-w-3xl"
  initial={{ opacity: 0, y: -20, scale: 0.95 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  transition={{ duration: 1, ease: "easeOut" }}
>
  <motion.h1 
    className="text-5xl md:text-7xl font-bold leading-tight mb-6 drop-shadow-lg"
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.3 }}
  >
    Transform Your Home<br />
    With <span className="text-blue-500">AutoHome</span> Smart Automation
  </motion.h1>
  <motion.p
    className="text-lg md:text-xl text-gray-300"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.6 }}
  >
    Control lights, fans, and more using Alexa, Google Assistant, or our AI-powered app.
  </motion.p>
</motion.div>

      </motion.div>

      {/* Features section */}
      <section className="py-20 px-6 bg-gray-900 flex-grow">
        <h2 className="text-4xl font-bold text-center mb-12 drop-shadow-md">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
  key={index}
  className="bg-gray-800 p-6 rounded-xl shadow-md text-center cursor-default will-change-transform"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: index * 0.2, duration: 0.5 }}
  viewport={{ once: true }}
  whileHover={{ scale: 1.07 }}
>
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
      {/* How it works / About section */}
{/* How it works / About section */}
<section className="py-20 px-6 bg-black">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">
    
    {/* Text Content */}
    <motion.div
      className="md:w-1/2 text-center md:text-left"
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold mb-6 drop-shadow-md relative inline-block">
        How It Works
        <span className="absolute left-0 bottom-0 w-20 h-1 bg-blue-500 rounded-full"></span>
      </h2>
      <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-lg">
        We install smart controllers in your home that connect to our secure AI-powered app.
        You can then control appliances through Wi-Fi, mobile app, or voice assistants.
      </p>

      {/* Feature Highlights with icons */}
      <div className="grid grid-cols-2 gap-6 max-w-sm">
        {features.map(({ icon, title }, i) => (
          <motion.div
            key={i}
            className="flex items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="text-3xl">{icon}</div>
            <h4 className="font-semibold text-white">{title}</h4>
          </motion.div>
        ))}
      </div>
    </motion.div>

    {/* Image */}
    <motion.img
      src="https://cdn.pixabay.com/photo/2017/02/10/04/27/home-2059327_1280.png"
      alt="Smart Home"
      className="md:w-1/2 rounded-xl shadow-lg max-w-full"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    />
  </div>
</section>


      {/* CTA section */}
      {/* Upgraded CTA section */}
{/* Enhanced CTA Section */}
<section className="relative overflow-hidden py-28 px-6 bg-[#0f172a]">
  {/* Animated glowing blobs */}
  <div className="absolute w-[30rem] h-[30rem] bg-blue-500 rounded-full blur-3xl opacity-30 top-0 -left-20 animate-pulse" />
  <div className="absolute w-[20rem] h-[20rem] bg-purple-600 rounded-full blur-2xl opacity-25 bottom-0 -right-10 animate-ping" />

  {/* Frosted Glass Container */}
  <motion.div
    className="relative max-w-3xl mx-auto backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-10 text-center shadow-xl"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
  >
    <motion.h2
      className="text-4xl md:text-5xl font-extrabold mb-6 text-white tracking-tight drop-shadow-md"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
    >
      Ready to Upgrade Your Home?
    </motion.h2>
    <motion.p
      className="text-lg md:text-xl text-gray-300 mb-8"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.4 }}
    >
      Let’s bring smart living to your doorstep. Chat with us now to begin your smart journey.
    </motion.p>

    <motion.a
      href="https://wa.me/9962524758"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold px-8 py-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-blue-500/50"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      Chat on WhatsApp
    </motion.a>
  </motion.div>
</section>


      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-6 text-center text-gray-500 text-sm select-none">
        © {new Date().getFullYear()} AutoHome — Smart Home Automation. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
