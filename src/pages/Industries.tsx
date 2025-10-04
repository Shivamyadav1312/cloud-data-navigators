import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Industries = () => {
  const cardsRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ".industry-card",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  const industries = [
    {
      slug: "retail",
      title: "Retail & eCommerce",
      description: "Customer segmentation, dynamic pricing, and supply chain optimization",
      keyAreas: ["Personalization", "Inventory Management", "Fraud Detection"],
    },
    {
      slug: "financial-services",
      title: "Financial Services & Fintech",
      description: "Risk modeling, fraud detection, and regulatory compliance",
      keyAreas: ["Credit Risk", "AML Monitoring", "Customer Analytics"],
    },
    {
      slug: "healthcare",
      title: "Healthcare & Life Sciences",
      description: "Patient analytics, clinical insights, and research data management",
      keyAreas: ["Predictive Models", "EHR Integration", "Clinical Trials"],
    },
    {
      slug: "manufacturing",
      title: "Manufacturing & Industrial IoT",
      description: "Predictive maintenance, quality control, and process optimization",
      keyAreas: ["Sensor Analytics", "Quality Detection", "Digital Twins"],
    },
    {
      slug: "telecom",
      title: "Telecom & Media",
      description: "Network analytics, churn prediction, and content recommendations",
      keyAreas: ["Usage Analytics", "Churn Prevention", "Recommendation Engines"],
    },
    {
      slug: "logistics",
      title: "Logistics & Transportation",
      description: "Fleet tracking, route optimization, and operational analytics",
      keyAreas: ["Real-Time Tracking", "Route Optimization", "Asset Health"],
    },
    {
      slug: "energy",
      title: "Energy & Utilities",
      description: "Smart meter analytics, grid reliability, and demand forecasting",
      keyAreas: ["Consumption Forecasting", "Predictive Maintenance", "Grid Analytics"],
    },
    {
      slug: "education",
      title: "Education & EdTech",
      description: "Learning analytics, performance prediction, and adaptive testing",
      keyAreas: ["Student Analytics", "Adaptive Learning", "Institutional Reporting"],
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-24 pb-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Industry Expertise
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Specialized data solutions tailored to your industry's unique challenges
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6" ref={cardsRef}>
          {industries.map((industry) => (
            <Link to={`/industries/${industry.slug}`} key={industry.slug}>
              <Card className="industry-card p-6 bg-card border-border hover:border-primary transition-all hover:shadow-glow cursor-pointer h-full">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-semibold">{industry.title}</h3>
                  <ArrowRight className="w-6 h-6 text-primary flex-shrink-0 ml-4" />
                </div>
                <p className="text-muted-foreground mb-4">{industry.description}</p>
                <div className="flex flex-wrap gap-2">
                  {industry.keyAreas.map((area) => (
                    <span
                      key={area}
                      className="px-3 py-1 text-sm bg-secondary rounded-full text-foreground"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Industries;
