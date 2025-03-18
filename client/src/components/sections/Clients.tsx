import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const clients = [
  {
    name: "Tata Motors",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Tata_Motors_Logo.svg/1328px-Tata_Motors_Logo.svg.png"
  },
  {
    name: "Maruti Suzuki",
    logo: "https://cdn.worldvectorlogo.com/logos/maruti-suzuki-logo.svg"
  },
  {
    name: "Mahindra",
    logo: "https://gaadhi.s3.amazonaws.com/uploads/post/featured_image/10/Mahindra-logo.png"
  },
  {
    name: "Hero MotoCorp",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Hero_MotoCorp_Logo.svg/2560px-Hero_MotoCorp_Logo.svg.png"
  }
];

export default function Clients() {
  return (
    <section className="py-16">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-4">Trusted by Industry Leaders</h2>
          <p className="text-lg text-muted-foreground">
            Powering digital transformation across leading manufacturers
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {clients.map((client) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-24 flex items-center justify-center p-4">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-12 w-auto object-contain"
                />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
