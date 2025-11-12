import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Droplets, Wind } from "lucide-react";
import heroImage from "@/assets/earth-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-forest/90 via-forest/70 to-sky/80" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-forest-light/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-sky/20 rounded-full blur-3xl animate-pulse delay-75" />
        <div className="absolute top-1/2 left-1/4 w-36 h-36 bg-success/10 rounded-full blur-3xl animate-pulse delay-150" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/10 backdrop-blur-md border border-background/20 text-background">
            <Leaf className="w-4 h-4" />
            <span className="text-sm font-medium">AI-Powered Environmental Monitoring</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-background leading-tight">
            Protecting Our Planet with{" "}
            <span className="bg-gradient-to-r from-sky-light to-success bg-clip-text text-transparent">
              Smart Technology
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-background/90 max-w-3xl mx-auto leading-relaxed">
            Real-time environmental monitoring using satellite data and AI to detect pollution, 
            deforestation, and air quality changes — helping you make informed decisions for a sustainable future.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto pt-8">
            <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-background/10 backdrop-blur-md border border-background/20">
              <Droplets className="w-8 h-8 text-sky-light" />
              <div className="text-3xl font-bold text-background">98%</div>
              <div className="text-sm text-background/80">Water Quality</div>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-background/10 backdrop-blur-md border border-background/20">
              <Leaf className="w-8 h-8 text-success" />
              <div className="text-3xl font-bold text-background">2.4M</div>
              <div className="text-sm text-background/80">Trees Monitored</div>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-background/10 backdrop-blur-md border border-background/20">
              <Wind className="w-8 h-8 text-sky-light" />
              <div className="text-3xl font-bold text-background">Good</div>
              <div className="text-sm text-background/80">Air Quality</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              className="bg-background text-forest hover:bg-background/90 shadow-lg hover:shadow-xl transition-all duration-300 text-base px-8"
            >
              View Dashboard
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-background/10 text-background border-background/30 hover:bg-background/20 backdrop-blur-md text-base px-8"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
