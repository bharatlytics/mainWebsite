import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Factory, Users, ShoppingBag, Heart } from "lucide-react";

const products = [
  {
    name: "Factorylytics.ai",
    description: "Smart manufacturing platform for connected factories",
    icon: Factory,
    features: ["Machine Intelligence", "Vision Intelligence", "Decision Intelligence"],
    link: "/products#factorylytics"
  },
  {
    name: "RozgarSetu.ai",
    description: "AI-powered workforce management and optimization",
    icon: Users,
    features: ["Skill Matching", "Performance Analytics", "Training Recommendations"],
    link: "/products#rozgarsetu"
  },
  {
    name: "Retailytics.ai",
    description: "Retail analytics and automation solution",
    icon: ShoppingBag,
    features: ["Inventory Optimization", "Customer Analytics", "Supply Chain Intelligence"],
    link: "/products#retailytics"
  },
  {
    name: "Healthlytics.ai",
    description: "Healthcare analytics and patient care platform",
    icon: Heart,
    features: ["Patient Monitoring", "Treatment Optimization", "Resource Management"],
    link: "/products#healthlytics"
  }
];

export default function Products() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Solutions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive suite of AI and IoT solutions to drive digital transformation
            across industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <product.icon className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature) => (
                      <li key={feature} className="text-sm text-muted-foreground">
                        • {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href={product.link}>
                    <Button variant="outline" className="w-full">Learn More</Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
