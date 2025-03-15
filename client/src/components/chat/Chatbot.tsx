import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const emailSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type EmailForm = z.infer<typeof emailSchema>;

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<'welcome' | 'email' | 'thanks'>('welcome');
  const { toast } = useToast();

  const form = useForm<EmailForm>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(data: EmailForm) {
    try {
      await apiRequest("POST", "/api/chatbot", {
        email: data.email,
        timestamp: new Date().toISOString(),
      });
      setStep('thanks');
      form.reset();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to submit. Please try again.",
      });
    }
  }

  return (
    <>
      {/* Chat Button */}
      <Button
        className="fixed bottom-4 right-4 rounded-full h-14 w-14 shadow-lg z-50"
        onClick={() => setIsOpen(true)}
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-20 right-4 w-80 bg-background rounded-lg shadow-xl border z-50"
          >
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="font-semibold">Chat with Us</h3>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="p-4 h-[300px] overflow-y-auto">
              {step === 'welcome' && (
                <div className="space-y-4">
                  <p className="text-sm">👋 Hello! I'm your AI assistant.</p>
                  <p className="text-sm">Would you like to learn more about our AI & IoT solutions?</p>
                  <Button 
                    className="w-full"
                    onClick={() => setStep('email')}
                  >
                    Yes, tell me more
                  </Button>
                </div>
              )}

              {step === 'email' && (
                <div className="space-y-4">
                  <p className="text-sm">Great! Please share your email and our team will send you detailed information.</p>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <div className="flex gap-2">
                                <Input placeholder="your@email.com" {...field} />
                                <Button type="submit" size="icon" disabled={form.formState.isSubmitting}>
                                  <Send className="h-4 w-4" />
                                </Button>
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </form>
                  </Form>
                </div>
              )}

              {step === 'thanks' && (
                <div className="space-y-4">
                  <p className="text-sm">Thank you! Our team will contact you shortly with more information about our solutions.</p>
                  <p className="text-sm">Feel free to explore our website in the meantime!</p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}