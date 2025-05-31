export default function Pricing() {
  const plans = [
    { name: "Basic", price: "$19/mo", features: ["Voice Control", "App Access"], recommended: false },
    { name: "Pro", price: "$49/mo", features: ["All Basic Features", "AI Automation", "Priority Support"], recommended: true },
    { name: "Enterprise", price: "Contact Us", features: ["Custom Solutions", "Dedicated Support"], recommended: false },
  ];

  return (
    <section className="py-12 bg-white">
      <h2 className="text-3xl font-heading text-center mb-10">Choose Your Plan</h2>
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        {plans.map(({ name, price, features, recommended }, i) => (
          <div
            key={i}
            className={`p-8 rounded-xl border shadow-lg transition-transform ${
              recommended ? "border-primary scale-105 bg-gradient-to-tr from-primary/20 to-secondary/20" : "border-gray-200"
            }`}
          >
            <h3 className="text-xl font-bold mb-4">{name}</h3>
            <p className="text-3xl font-extrabold mb-6">{price}</p>
            <ul className="mb-6 space-y-2">
              {features.map((f, idx) => (
                <li key={idx} className="before:content-['✔'] before:text-primary before:mr-2">{f}</li>
              ))}
            </ul>
            <button className={`w-full py-3 rounded font-semibold text-white ${recommended ? "bg-primary hover:bg-secondary" : "bg-gray-800 hover:bg-gray-900"}`}>
              {recommended ? "Get Started" : "Contact Us"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
