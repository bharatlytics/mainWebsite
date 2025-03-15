import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Factory, Brain, Activity, BarChart } from "lucide-react";

const solutions = [
  {
    icon: Factory,
    title: "Machine Intelligence",
    description: "Real-time monitoring and predictive maintenance for optimal machine performance"
  },
  {
    icon: Brain,
    title: "Vision Intelligence",
    description: "Advanced computer vision for quality control and process optimization"
  },
  {
    icon: Activity,
    title: "Decision Intelligence",
    description: "Data-driven insights for better operational decision making"
  },
  {
    icon: BarChart,
    title: "Performance Analytics",
    description: "Comprehensive analytics to track and improve factory performance"
  }
];

export default function Solutions() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Factorylytics.ai Features</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our flagship product offers comprehensive solutions for smart manufacturing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <CardContent className="pt-6 flex flex-col h-full items-center text-center">
                  <solution.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{solution.title}</h3>
                  <p className="text-sm text-muted-foreground flex-grow">{solution.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}