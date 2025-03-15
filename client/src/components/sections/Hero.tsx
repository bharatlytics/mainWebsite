import { PcbButton } from "@/components/ui/pcb-button";
import { motion } from "framer-motion";
import { Link } from "wouter";
import NeuralBackground from "@/components/ui/neural-background";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden py-24">
      <NeuralBackground />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center md:text-left space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              Transform Your Factory with AI & IoT Solutions
            </h1>

            <motion.p 
              className="text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0 leading-relaxed"
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
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link href="/products#factorylytics">
                <PcbButton size="lg" className="text-lg w-full sm:w-auto px-8">
                  Explore Factorylytics.ai
                </PcbButton>
              </Link>
              <Link href="/contact">
                <PcbButton size="lg" variant="outline" className="text-lg w-full sm:w-auto px-8">
                  Schedule Demo
                </PcbButton>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {[
              { value: "40%", label: "Average OEE Improvement" },
              { value: "60%", label: "Reduced Downtime" },
              { value: "25%", label: "Energy Cost Savings" },
              { value: "99.9%", label: "Quality Rate Achievement" }
            ].map((stat) => (
              <div 
                key={stat.label}
                className="text-center p-8 rounded-lg bg-black/5 backdrop-blur hover:bg-black/10 transition-colors"
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