import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card } from "@/components/ui/card";
import { Database, Zap, Cloud, BarChart3, Lock, Cog } from "lucide-react";
import DemoForm from "@/components/DemoForm";

gsap.registerPlugin(ScrollTrigger);

const Capabilities = () => {
  const cardsRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ".capability-card",
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: 0.1,
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  const capabilities = [
    {
      icon: Database,
      title: "Data Integration & Pipeline Development",
      description: "End-to-end data pipeline design, ETL/ELT automation, and integration across diverse source systems including APIs, databases, files, and legacy applications.",
      details: [
        "Batch and streaming data processing",
        "Multi-source data harmonization",
        "Automated data quality checks",
        "Scalable pipeline architecture",
      ],
    },
    {
      icon: Cloud,
      title: "Cloud Data Platform Implementation",
      description: "Deploy and optimize cloud-native data platforms with expertise in leading cloud providers and modern data stack technologies.",
      details: [
        "Data lake and warehouse setup",
        "Multi-cloud and hybrid architectures",
        "Cost optimization strategies",
        "Platform migration services",
      ],
    },
    {
      icon: Zap,
      title: "Real-Time Analytics & Streaming",
      description: "Build real-time data processing systems for immediate insights, monitoring, and decision support using cutting-edge streaming technologies.",
      details: [
        "Stream processing pipelines",
        "IoT and sensor data integration",
        "Real-time alerting and monitoring",
        "Low-latency data delivery",
      ],
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics & ML Deployment",
      description: "Develop and operationalize machine learning models, predictive analytics, and AI-powered insights customized to your business needs.",
      details: [
        "Model development and training",
        "MLOps and production deployment",
        "Feature engineering",
        "Continuous model monitoring",
      ],
    },
    {
      icon: Lock,
      title: "Data Security & Governance",
      description: "Implement comprehensive security measures, privacy-preserving analytics, and governance frameworks to protect your data assets.",
      details: [
        "Encryption and access controls",
        "Compliance automation",
        "Data cataloging and lineage",
        "Privacy-preserving techniques",
      ],
    },
    {
      icon: Cog,
      title: "BI & Visualization Solutions",
      description: "Enable self-service analytics with interactive dashboards, embedded analytics, and customized reporting solutions.",
      details: [
        "Dashboard design and development",
        "Self-service BI enablement",
        "Embedded analytics integration",
        "Mobile-responsive visualizations",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-24 pb-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Our Capabilities
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Comprehensive data and analytics expertise spanning the entire technology stack
          </p>
          <DemoForm 
            buttonText="See Our Capabilities" 
            buttonSize="lg" 
            className="hover:shadow-glow"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" ref={cardsRef}>
          {capabilities.map((capability, index) => (
            <Card
              key={index}
              className="capability-card p-6 bg-card border-border hover:border-primary transition-all hover:shadow-glow"
            >
              <capability.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">{capability.title}</h3>
              <p className="text-muted-foreground mb-4 text-sm">{capability.description}</p>
              <ul className="space-y-2">
                {capability.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start text-sm">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-muted-foreground">{detail}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="text-center mt-16 pt-16 border-t border-border">
          <h2 className="text-3xl font-bold mb-4">Ready to Leverage Our Expertise?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover how our comprehensive capabilities can accelerate your data initiatives
          </p>
          <DemoForm 
            buttonText="Request Capabilities Demo" 
            buttonSize="lg" 
            className="hover:shadow-glow"
          />
        </div>
      </div>
    </div>
  );
};

export default Capabilities;
