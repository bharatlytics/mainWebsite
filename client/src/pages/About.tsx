import { motion } from "framer-motion";

export default function About() {
  return (
    <main>
      <section className="py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl font-bold mb-6">About Bharatlytics.ai</h1>
            <p className="text-xl text-muted-foreground mb-12">
              Leading the digital transformation of industries through innovative AI and IoT solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
                alt="Team working"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground mb-6">
                At Bharatlytics.ai, we envision a future where Indian industries lead the global
                digital transformation wave. Our mission is to empower businesses with cutting-edge
                AI and IoT solutions that drive efficiency, innovation, and growth.
              </p>
              <p className="text-muted-foreground">
                Through our suite of intelligent platforms - Factorylytics.ai, RozgarSetu.ai,
                Retailytics.ai, and Healthlytics.ai - we're helping organizations across sectors
                embrace the power of data-driven decision making.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description:
                  "Pushing the boundaries of what's possible with AI and IoT technology",
              },
              {
                title: "Excellence",
                description:
                  "Delivering best-in-class solutions that exceed customer expectations",
              },
              {
                title: "Impact",
                description:
                  "Creating meaningful change across industries and communities",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="text-center p-6 rounded-lg bg-slate-50"
              >
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
