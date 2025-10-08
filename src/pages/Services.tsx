import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import DemoForm from "@/components/DemoForm";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const cardsRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ".service-detail-card",
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  const services = [
    {
      slug: "data-engineering",
      title: "Data Engineering & Infrastructure",
      shortDesc: "Build, maintain, and optimize data pipelines for batch and streaming data",
      tags: ["ETL/ELT", "Big Data", "Data Lakes", "DevOps"],
    },
    {
      slug: "data-quality",
      title: "Data Quality & Governance",
      shortDesc: "Ensure data accuracy, consistency, and compliance across your organization",
      tags: ["Data Cleansing", "MDM", "Cataloging", "Compliance"],
    },
    {
      slug: "ai-ml",
      title: "AI/ML Implementation",
      shortDesc: "Deploy machine learning models and enable advanced analytics",
      tags: ["Model Development", "MLOps", "Predictive Analytics", "Deep Learning"],
    },
    {
      slug: "cloud-migration",
      title: "Cloud & Platform Migration",
      shortDesc: "Seamless data migration and cloud optimization",
      tags: ["AWS", "Azure", "GCP", "Hybrid Cloud"],
    },
    {
      slug: "real-time",
      title: "Real-Time Data Processing",
      shortDesc: "Handle streaming data for real-time insights and IoT applications",
      tags: ["Kafka", "Spark Streaming", "IoT", "Time Series"],
    },
    {
      slug: "bi-visualization",
      title: "BI & Visualization",
      shortDesc: "Enable self-service analytics with interactive dashboards",
      tags: ["Power BI", "Tableau", "Looker", "Embedded Analytics"],
    },
    {
      slug: "security",
      title: "Data Security & Privacy",
      shortDesc: "Implement robust security measures and privacy-preserving analytics",
      tags: ["Encryption", "Access Control", "Compliance", "Anonymization"],
    },
    {
      slug: "support",
      title: "Maintenance & Support",
      shortDesc: "Ongoing platform health monitoring and technical support",
      tags: ["Monitoring", "Optimization", "Troubleshooting", "24/7 Support"],
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-24 pb-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Comprehensive data solutions tailored to your business needs
          </p>
          <DemoForm 
            buttonText="Schedule Service Demo" 
            buttonSize="lg" 
            className="hover:shadow-glow"
          />
        </div>

        <div className="space-y-6" ref={cardsRef}>
          {services.map((service) => (
            <Link to={`/services/${service.slug}`} key={service.slug}>
              <Card className="service-detail-card p-6 bg-card border-border hover:border-primary transition-all hover:shadow-glow cursor-pointer">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.shortDesc}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-sm bg-secondary rounded-full text-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ArrowRight className="w-6 h-6 text-primary ml-4 flex-shrink-0" />
                </div>
              </Card>
            </Link>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="text-center mt-16 pt-16 border-t border-border">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss which services best fit your data transformation needs
          </p>
          <DemoForm 
            buttonText="Book Consultation" 
            buttonSize="lg" 
            className="hover:shadow-glow"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
