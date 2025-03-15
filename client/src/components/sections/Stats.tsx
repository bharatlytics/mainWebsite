import { motion } from "framer-motion";

const stats = [
  { label: "Factories Optimized", value: "100+" },
  { label: "Efficiency Improvement", value: "40%" },
  { label: "Cost Savings", value: "$50M+" },
  { label: "Client Satisfaction", value: "98%" }
];

export default function Stats() {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-primary-foreground/80">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
