import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now just simulate submission
    setSubmitted(true);
  };

  return (
    <section className="max-w-3xl mx-auto p-8">
      <h2 className="text-3xl font-heading mb-6">Get in Touch</h2>
      {submitted ? (
        <p className="text-green-600 font-semibold">Thanks for contacting us! We will get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            onChange={handleChange}
            className="w-full p-3 rounded border border-gray-300"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            onChange={handleChange}
            className="w-full p-3 rounded border border-gray-300"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            onChange={handleChange}
            className="w-full p-3 rounded border border-gray-300"
          />
          <button type="submit" className="bg-primary text-white py-3 px-6 rounded font-semibold hover:bg-secondary transition">
            Send Message
          </button>
        </form>
      )}
    </section>
  );
}
