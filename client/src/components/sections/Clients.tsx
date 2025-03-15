import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const clients = [
  {
    name: "Tata Motors",
    logo: "https://www.tatamotors.com/wp-content/themes/tatamotors_2019/images/tata_motors_logo.png"
  },
  {
    name: "Maruti Suzuki",
    logo: "https://www.marutisuzuki.com/-/media/images/maruti/marutisuzuki/generic/logo/ms_logo.png"
  },
  {
    name: "Mahindra",
    logo: "https://www.mahindra.com/assets/mahindra/images/logo.png"
  },
  {
    name: "Hero MotoCorp",
    logo: "https://www.heromotocorp.com/content/dam/hero-aem-website/hero-com/common/logo.png"
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
