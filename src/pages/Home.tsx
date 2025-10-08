import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Database, Zap, Shield, TrendingUp, Cloud, Cpu } from "lucide-react";
import DemoForm from "@/components/DemoForm";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);

  useEffect(() => {
    // Hero animation
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    // Services cards animation
    gsap.fromTo(
      ".service-card",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  const coreServices = [
    {
      icon: Database,
      title: "Data Engineering",
      description: "Build scalable data pipelines and infrastructure",
      link: "/services/data-engineering",
    },
    {
      icon: Cpu,
      title: "AI/ML Implementation",
      description: "Deploy advanced analytics and ML models",
      link: "/services/ai-ml",
    },
    {
      icon: Cloud,
      title: "Cloud Migration",
      description: "Seamless transition to modern cloud platforms",
      link: "/services/cloud-migration",
    },
    {
      icon: Zap,
      title: "Real-Time Processing",
      description: "Streaming analytics and IoT data solutions",
      link: "/services/real-time",
    },
    {
      icon: TrendingUp,
      title: "BI & Visualization",
      description: "Interactive dashboards and reporting solutions",
      link: "/services/bi-visualization",
    },
    {
      icon: Shield,
      title: "Data Security",
      description: "Privacy-preserving analytics and compliance",
      link: "/services/security",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center" ref={heroRef}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Transform Data Into Intelligence
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Expert data engineering and AI consulting services that power your digital transformation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <DemoForm 
              buttonText="Schedule Free Demo" 
              buttonSize="lg" 
              className="hover:shadow-glow"
            />
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow">
                Get Started
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline">
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Core Services Grid */}
      <section className="py-20 px-4" ref={servicesRef}>
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our Core Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreServices.map((service, index) => (
              <Link to={service.link} key={index}>
                <Card className="service-card p-6 bg-card border-border hover:border-primary transition-all hover:shadow-glow cursor-pointer h-full">
                  <service.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Industries We Serve</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Specialized data solutions across multiple verticals
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Retail", "Financial Services", "Healthcare", "Manufacturing", "Telecom", "Logistics", "Energy", "Education"].map((industry) => (
              <Link to={`/industries/${industry.toLowerCase().replace(/\s+/g, "-")}`} key={industry}>
                <Button variant="secondary" className="hover:bg-primary hover:text-primary-foreground">
                  {industry}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Data Strategy?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you unlock the full potential of your data
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <DemoForm 
              buttonText="Book Your Demo Now" 
              buttonSize="lg" 
              className="hover:shadow-glow"
            />
            <Link to="/contact">
              <Button size="lg" variant="outline">
                Contact Us Today
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
