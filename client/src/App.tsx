import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Chatbot from "@/components/chat/Chatbot";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Products from "@/pages/Products";
import CaseStudies from "@/pages/CaseStudies";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/products" component={Products} />
      <Route path="/case-studies" component={CaseStudies} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-16">
          {/* Container wrapper for all pages */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <Router />
          </div>
        </main>
        <Footer />
        <Chatbot />
      </div>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;