import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Factory, TrendingUp, Award } from "lucide-react";

const caseStudies = [
  {
    title: "Automotive Components Manufacturer",
    description: "Leading auto parts manufacturer achieves operational excellence with Factorylytics.ai",
    image: "https://images.unsplash.com/photo-1632914146475-bfe6fa6b2a12",
    results: [
      "40% reduction in machine downtime",
      "25% improvement in OEE",
      "$2M annual cost savings",
      "99.9% quality rate achievement"
    ],
    quote: {
      text: "Factorylytics.ai has transformed our manufacturing operations. The real-time insights and predictive maintenance capabilities have significantly reduced our downtime and improved our overall efficiency.",
      author: "Rajesh Kumar",
      title: "Operations Director"
    }
  },
  {
    title: "Large Retail Chain",
    description: "National retail chain optimizes inventory and improves customer satisfaction",
    image: "https://images.unsplash.com/photo-1706210220394-eeda4906e02c",
    results: [
      "30% reduction in stockouts",
      "15% increase in sales",
      "40% improvement in inventory turnover",
      "95% customer satisfaction rate"
    ],
    quote: {
      text: "Retailytics.ai provided us with deep insights into our inventory management and customer behavior. The platform's recommendations have helped us optimize our operations significantly.",
      author: "Priya Singh",
      title: "Head of Retail Operations"
    }
  },
  {
    title: "Healthcare Provider Network",
    description: "Multi-specialty hospital chain enhances patient care with Healthlytics.ai",
    image: "https://images.unsplash.com/photo-1655393001768-d946c97d6fd1",
    results: [
      "35% reduction in wait times",
      "20% improvement in resource utilization",
      "45% faster patient discharge process",
      "98% patient satisfaction score"
    ],
    quote: {
      text: "Healthlytics.ai has revolutionized how we manage patient care and hospital resources. The platform's predictive analytics have helped us optimize our operations and improve patient outcomes.",
      author: "Dr. Amit Patel",
      title: "Chief Medical Officer"
    }
  }
];

export default function CaseStudies() {
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
            <h1 className="text-4xl font-bold mb-6">Case Studies</h1>
            <p className="text-xl text-muted-foreground">
              Real-world impact of our AI and IoT solutions across industries
            </p>
          </motion.div>

          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card>
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h2 className="text-2xl font-bold mb-4">{study.title}</h2>
                        <p className="text-muted-foreground mb-6">{study.description}</p>
                        
                        <div className="space-y-6">
                          <div>
                            <h3 className="font-semibold mb-3 flex items-center gap-2">
                              <TrendingUp className="h-5 w-5 text-primary" />
                              Key Results
                            </h3>
                            <ul className="grid grid-cols-2 gap-3">
                              {study.results.map((result) => (
                                <li key={result} className="flex items-center text-sm">
                                  <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                                  {result}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h3 className="font-semibold mb-3 flex items-center gap-2">
                              <Award className="h-5 w-5 text-primary" />
                              Client Testimonial
                            </h3>
                            <blockquote className="border-l-2 border-primary pl-4 italic">
                              {study.quote.text}
                              <footer className="mt-2 text-sm">
                                <strong>{study.quote.author}</strong>
                                <br />
                                {study.quote.title}
                              </footer>
                            </blockquote>
                          </div>
                        </div>
                      </div>
                      
                      <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                        <img
                          src={study.image}
                          alt={study.title}
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
    </main>
  );
}
