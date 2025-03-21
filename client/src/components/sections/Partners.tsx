import { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { SiGooglecloud, SiAmazon, SiNvidia, SiMongodb, SiGrafana } from "react-icons/si";

const partners = [
  {
    icon: SiGooglecloud,
    name: "Google Cloud"
  },
  {
    icon: SiAmazon,
    name: "AWS"
  },
  {
    icon: SiNvidia,
    name: "NVIDIA"
  },
  {
    icon: SiMongodb,
    name: "MongoDB"
  },
  {
    icon: SiGrafana,
    name: "Grafana"
  }
];

// Custom logos for partners without icons in react-icons
const customLogos = {
  Hikrobot: "https://www.security-d.com/en/wp-content/themes/en-theme-230403/img/product-logo/hikrobot.png",
  Omron: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/OMRON_Logo.svg/1200px-OMRON_Logo.svg.png",
  SICK: "https://shaltzautomation.com/wp-content/uploads/2024/04/SICK-logo.png",
  AWS: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png",
  NVIDIA: "https://upload.wikimedia.org/wikipedia/sco/thumb/2/21/Nvidia_logo.svg/1200px-Nvidia_logo.svg.png",
  MONGODB: "https://victorycto.com/wp-content/uploads/2023/12/mongodb.png",
};

export default function Partners() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    dragFree: true,
    containScroll: "trimSnaps"
  });

  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section className="py-16 bg-slate-50">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-4">SaaS Infrastructure Partners</h2>
          <p className="text-lg text-muted-foreground">
            Working with industry leaders to deliver cutting-edge solutions
          </p>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-8">
            {/* Tech Partners */}
            {/* {partners.map((partner) => (
              <motion.div
                key={partner.name}
                className="flex-[0_0_20%] min-w-0"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <Card className="h-24">
                  <CardContent className="flex items-center justify-center h-full p-4">
                    <partner.icon className="w-12 h-12 text-gray-600" />
                  </CardContent>
                </Card>
              </motion.div>
            ))} */}

            {/* Industrial Partners */}
            {Object.entries(customLogos).map(([name, src]) => (
              <motion.div
                key={name}
                className="flex-[0_0_20%] min-w-0"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <Card className="h-24">
                  <CardContent className="flex items-center justify-center h-full p-4">
                    <img src={src} alt={name} className="h-12 object-contain" />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}