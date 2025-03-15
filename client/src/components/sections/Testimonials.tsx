import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    quote: "Factorylytics.ai has revolutionized our manufacturing processes. The predictive maintenance features alone have saved us millions.",
    author: "Rajesh Kumar",
    title: "Operations Director, Automotive Manufacturing",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
  },
  {
    quote: "The implementation was smooth and the results were immediate. Our OEE has improved significantly since adopting Bharatlytics solutions.",
    author: "Priya Singh",
    title: "Plant Manager, Electronics Manufacturing",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978"
  },
  {
    quote: "The level of insight we get from the platform is remarkable. It's like having an AI consultant watching our operations 24/7.",
    author: "Amit Patel",
    title: "Technical Director, Precision Engineering",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from industry leaders who have transformed their operations with our solutions
          </p>
        </div>

        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <Card>
                  <CardContent className="p-6 text-center">
                    <blockquote className="text-xl italic mb-6">
                      "{testimonial.quote}"
                    </blockquote>
                    <Avatar className="w-16 h-16 mx-auto mb-4">
                      <AvatarImage src={testimonial.image} alt={testimonial.author} />
                      <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
                    </Avatar>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
