import './App.css';
import { motion } from "framer-motion";
import { Button } from "./components/ui/button";
import { SparklesCore } from "./components/ui/sparkles";

function App() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={100}
          className="absolute inset-0 z-0"
          particleColor="#00FFAA"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="z-10 text-center px-6"
        >
          <h1 className="font-heading text-5xl font-bold">Welcome to SmartHome AI</h1>
<p className="font-sans text-lg mt-4">Automate your home with the power of AI and voice assistants.</p>

          <Button className="bg-green-500 hover:bg-green-600 text-black font-semibold">
            Book a Free Demo
          </Button>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="p-10 bg-gray-900 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: "Voice Control",
            desc: "Operate lights, fans, and devices using Alexa or Google Assistant."
          },
          {
            title: "AI Integration",
            desc: "Our system learns your habits to optimize energy and convenience."
          },
          {
            title: "Mobile App",
            desc: "Use our intuitive app to monitor and control everything remotely."
          },
          {
            title: "Custom Scenes",
            desc: "Create mood-based lighting and automation scenarios."
          },
          {
            title: "Security & Access",
            desc: "Smart surveillance, alerts, and controlled access."
          },
          {
            title: "Energy Reports",
            desc: "Track usage, get insights, and save on bills."
          }
        ].map((feature, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="bg-black border border-gray-700 rounded-2xl p-6 shadow-xl"
          >
            <h3 className="text-2xl font-semibold mb-2 text-green-400">{feature.title}</h3>
            <p className="text-gray-300">{feature.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* Call to Action */}
      <section className="text-center py-16 bg-black">
        <h2 className="text-4xl font-bold mb-4">Start Automating Your Home Today</h2>
        <p className="text-lg mb-6 text-gray-300">
          Let us transform your space into a smart, responsive, and secure environment.
        </p>
        <Button className="bg-green-500 hover:bg-green-600 text-black font-semibold">
          Get Started
        </Button>
      </section>
    </main>
  );
}

export default App;
