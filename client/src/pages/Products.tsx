import { motion } from "framer-motion";
import Solutions from "@/components/sections/Solutions";
import { Card, CardContent } from "@/components/ui/card";
import { Factory, Users, ShoppingBag, Heart } from "lucide-react";

const products = [
  {
    id: "factorylytics",
    icon: Factory,
    name: "Factorylytics.ai",
    description: "Connected factory platform for smart manufacturing",
    features: [
      "Real-time machine monitoring",
      "Predictive maintenance",
      "Quality control automation",
      "Production optimization",
      "Energy management",
      "Workforce productivity tracking"
    ]
  },
  {
    id: "rozgarsetu",
    icon: Users,
    name: "RozgarSetu.ai",
    description: "AI-powered workforce management solution",
    features: [
      "Skill mapping and matching",
      "Performance analytics",
      "Training recommendations",
      "Workforce planning",
      "Productivity optimization",
      "Career progression tracking"
    ]
  },
  {
    id: "retailytics",
    icon: ShoppingBag,
    name: "Retailytics.ai",
    description: "Retail analytics and automation platform",
    features: [
      "Inventory optimization",
      "Demand forecasting",
      "Customer analytics",
      "Supply chain intelligence",
      "Store performance tracking",
      "Promotional effectiveness"
    ]
  },
  {
    id: "healthlytics",
    icon: Heart,
    name: "Healthlytics.ai",
    description: "Healthcare analytics and patient care system",
    features: [
      "Patient monitoring",
      "Treatment optimization",
      "Resource management",
      "Clinical decision support",
      "Operational efficiency",
      "Quality of care metrics"
    ]
  }
];

export default function Products() {
  return (
    <main>
      <section className="py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h1 className="text-4xl font-bold mb-6">Our Products</h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive suite of AI and IoT solutions for industry transformation
            </p>
          </motion.div>

          <div className="space-y-24">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                id={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card>
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div>
                        <product.icon className="h-12 w-12 text-primary mb-4" />
                        <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
                        <p className="text-lg text-muted-foreground mb-6">
                          {product.description}
                        </p>
                        <ul className="grid grid-cols-2 gap-3">
                          {product.features.map((feature) => (
                            <li key={feature} className="flex items-center text-sm">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="relative aspect-video rounded-lg overflow-hidden">
                        <img
                          src={index === 0 
                            ? "https://images.unsplash.com/photo-1632914146475-bfe6fa6b2a12"
                            : index === 1
                            ? "https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                            : index === 2
                            ? "https://images.unsplash.com/photo-1706210220394-eeda4906e02c"
                            : "https://images.unsplash.com/photo-1655393001768-d946c97d6fd1"
                          }
                          alt={product.name}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Solutions />
    </main>
  );
}
