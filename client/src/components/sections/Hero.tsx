import { PcbButton } from "@/components/ui/pcb-button";
import { motion } from "framer-motion";
import { Link } from "wouter";
import NeuralBackground from "@/components/ui/neural-background";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden">
      <NeuralBackground />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              Transform Your Factory with AI & IoT Solutions
            </h1>

            <motion.p 
              className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto md:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Factorylytics.ai delivers cutting-edge automation and intelligence:
              <br className="hidden md:block" />
              • Real-time Machine Monitoring
              <br className="hidden md:block" />
              • Predictive Maintenance
              <br className="hidden md:block" />
              • Quality Control Automation
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link href="/products#factorylytics">
                <PcbButton size="lg" className="text-lg w-full sm:w-auto">
                  Explore Factorylytics.ai
                </PcbButton>
              </Link>
              <Link href="/contact">
                <PcbButton size="lg" variant="outline" className="text-lg w-full sm:w-auto">
                  Schedule Demo
                </PcbButton>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {[
              { value: "40%", label: "Average OEE Improvement" },
              { value: "60%", label: "Reduced Downtime" },
              { value: "25%", label: "Energy Cost Savings" },
              { value: "99.9%", label: "Quality Rate Achievement" }
            ].map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center p-6 rounded-lg bg-black/5 backdrop-blur"
              >
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}