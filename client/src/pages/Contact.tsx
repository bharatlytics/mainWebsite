import { motion } from "framer-motion";
import ContactForm from "@/components/sections/ContactForm";
import { MapPin, Phone, Mail } from "lucide-react";
import AiAssistant from "@/components/ui/ai-assistant";

export default function Contact() {
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
            <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-muted-foreground">
              Get in touch to learn how our AI solutions can transform your business
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="sticky top-24 space-y-8">
                <div className="flex items-center justify-center mb-8">
                  <AiAssistant />
                </div>

                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                <p className="text-muted-foreground mb-8">
                  Whether you're interested in our products, partnership opportunities,
                  or just want to learn more about how we can help your business,
                  we'd love to hear from you.
                </p>

                <div className="space-y-6">
                  {/* <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-semibold mb-1">Visit Us</h3>
                      <address className="text-muted-foreground not-italic">
                        Bharatlytics.ai<br />
                        1003, Padma-Tower-1<br />
                        Rajendra Place, New Delhi<br />
                        India
                      </address>
                    </div>
                  </div> */}

                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-semibold mb-1">Call Us</h3>
                      <p className="text-muted-foreground">
                        +91-9868429095
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-semibold mb-1">Email Us</h3>
                      <p className="text-muted-foreground">
                        info@bharatlytics.ai
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-slate-50 p-8 rounded-lg"
            >
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}