import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SiLinkedin, SiX } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="md:col-span-1">
            <h3 className="font-bold text-lg mb-4">Bharatlytics.ai</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Transforming industries through AI and IoT solutions
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <SiLinkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <SiX className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-4">Products</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/products#factorylytics">
                  <a className="text-sm text-muted-foreground hover:text-primary transition-colors">Factorylytics.ai</a>
                </Link>
              </li>
              <li>
                <Link href="/products#rozgarsetu">
                  <a className="text-sm text-muted-foreground hover:text-primary transition-colors">RozgarSetu.ai</a>
                </Link>
              </li>
              <li>
                <Link href="/products#retailytics">
                  <a className="text-sm text-muted-foreground hover:text-primary transition-colors">Retailytics.ai</a>
                </Link>
              </li>
              <li>
                <Link href="/products#healthlytics">
                  <a className="text-sm text-muted-foreground hover:text-primary transition-colors">Healthlytics.ai</a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about">
                  <a className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/case-studies">
                  <a className="text-sm text-muted-foreground hover:text-primary transition-colors">Case Studies</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Contact</h4>
            <address className="text-sm text-muted-foreground not-italic space-y-2">
              <p>Bharatlytics.ai</p>
              <p>1003, Padma-Tower-1</p>
              <p>Rajendra Place, New Delhi</p>
              <p>India</p>
              <p className="mt-4">Email: info@bharatlytics.com</p>
            </address>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Bharatlytics.ai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}