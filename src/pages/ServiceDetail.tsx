import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

const ServiceDetail = () => {
  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const serviceDetails: Record<string, any> = {
    "data-engineering": {
      title: "Data Engineering & Infrastructure",
      description: "Build robust, scalable data infrastructure that powers your analytics and AI initiatives.",
      capabilities: [
        "Data pipeline design and development for batch and streaming data",
        "Data ingestion and integration from diverse sources (APIs, databases, files, sensors)",
        "Big Data platform setup (Hadoop, Spark, Databricks, Snowflake)",
        "Data lake and warehouse implementation (cloud, hybrid, on-premise)",
        "DevOps for data platforms with automated deployment and monitoring",
        "Performance optimization and scaling for high-volume data processing",
      ],
      benefits: [
        "Reduced data processing time by up to 70%",
        "Automated data workflows saving hundreds of engineering hours",
        "Scalable architecture supporting growth from GB to PB scale",
        "Improved data reliability and consistency",
      ],
    },
    "data-quality": {
      title: "Data Quality, Management & Governance",
      description: "Ensure your data is accurate, consistent, and compliant with industry regulations.",
      capabilities: [
        "Data cleansing, validation, and profiling",
        "Master data management for critical business entities",
        "Metadata management and data cataloging",
        "Data lineage and impact analysis",
        "Governance framework implementation",
        "Compliance monitoring and reporting",
      ],
      benefits: [
        "Improved decision-making with trustworthy data",
        "Reduced operational costs from data quality issues",
        "Enhanced regulatory compliance and audit readiness",
        "Better data discoverability across the organization",
      ],
    },
    "ai-ml": {
      title: "AI/ML Implementation",
      description: "Deploy advanced machine learning models that drive business value and automation.",
      capabilities: [
        "Model development, training, and hyperparameter tuning",
        "ML engineering and MLOps for production deployment",
        "Deep learning and neural network implementation",
        "Feature engineering and selection",
        "Model monitoring, versioning, and continuous improvement",
        "Custom statistical analysis and predictive analytics",
      ],
      benefits: [
        "Automated decision-making reducing manual effort",
        "Predictive insights enabling proactive strategies",
        "Continuous model improvement with feedback loops",
        "Production-ready ML pipelines with monitoring",
      ],
    },
    "cloud-migration": {
      title: "Cloud & Platform Migration",
      description: "Seamlessly migrate your data infrastructure to modern cloud platforms.",
      capabilities: [
        "Data migration planning and execution",
        "Cloud platform selection and architecture design",
        "AWS, Azure, and GCP expertise",
        "Hybrid and multi-cloud implementations",
        "Cost optimization and resource management",
        "Data validation and reconciliation",
      ],
      benefits: [
        "Reduced infrastructure costs by 30-60%",
        "Improved scalability and flexibility",
        "Enhanced disaster recovery capabilities",
        "Access to cutting-edge cloud-native services",
      ],
    },
    "real-time": {
      title: "Real-Time Data Processing & IoT",
      description: "Process streaming data in real-time for immediate insights and actions.",
      capabilities: [
        "Streaming analytics with Kafka, Flink, Spark Streaming",
        "Real-time monitoring, alerts, and decision support",
        "IoT data flows and sensor integration",
        "Time series data processing and analysis",
        "Edge computing and processing",
        "Complex event processing (CEP)",
      ],
      benefits: [
        "Instant insights from streaming data",
        "Proactive alerting and anomaly detection",
        "Reduced latency in data-driven decisions",
        "Scalable architecture for high-throughput scenarios",
      ],
    },
    "bi-visualization": {
      title: "BI, Reporting & Visualization",
      description: "Enable self-service analytics with beautiful, interactive dashboards.",
      capabilities: [
        "Data warehousing optimization for BI",
        "Dashboard and visualization solutions (Power BI, Tableau, Looker)",
        "Embedded analytics integration",
        "Self-service BI enablement",
        "KPI tracking and executive dashboards",
        "Mobile-responsive reporting solutions",
      ],
      benefits: [
        "Faster time-to-insight for business users",
        "Reduced dependency on IT for reports",
        "Improved data-driven culture",
        "Better visibility into business performance",
      ],
    },
    "security": {
      title: "Data Security, Privacy & Compliance",
      description: "Protect your data assets with robust security measures and privacy-preserving analytics.",
      capabilities: [
        "Data encryption (at rest and in transit)",
        "Access controls and identity management",
        "Security monitoring and threat detection",
        "Privacy-preserving analytics (differential privacy, anonymization)",
        "Compliance framework implementation (GDPR, HIPAA, SOC2)",
        "Synthetic data generation for development",
      ],
      benefits: [
        "Reduced security risk and breach exposure",
        "Enhanced customer trust and brand protection",
        "Regulatory compliance and audit readiness",
        "Safe data sharing and collaboration",
      ],
    },
    "support": {
      title: "Maintenance & Support Services",
      description: "Keep your data platforms running smoothly with proactive monitoring and support.",
      capabilities: [
        "Platform health monitoring and alerting",
        "Performance tuning and optimization",
        "Issue detection and resolution",
        "Troubleshooting and technical support",
        "Data pipeline operationalization",
        "Ongoing platform enhancements",
      ],
      benefits: [
        "Minimized downtime and data delays",
        "Proactive issue prevention",
        "Continuous performance improvement",
        "Peace of mind with expert support",
      ],
    },
  };

  const service = serviceDetails[slug || ""];

  if (!service) {
    return (
      <div className="min-h-screen bg-background pt-24 px-4 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <Link to="/services">
            <Button>Back to Services</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-24 pb-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <Link to="/services">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Services
          </Button>
        </Link>

        <h1 className="text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
          {service.title}
        </h1>
        <p className="text-xl text-muted-foreground mb-12">{service.description}</p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-8 bg-card border-border">
            <h2 className="text-2xl font-semibold mb-6">Our Capabilities</h2>
            <ul className="space-y-4">
              {service.capabilities.map((capability: string, index: number) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{capability}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-8 bg-secondary border-border">
            <h2 className="text-2xl font-semibold mb-6">Key Benefits</h2>
            <ul className="space-y-4">
              {service.benefits.map((benefit: string, index: number) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <Card className="p-8 bg-gradient-secondary border-primary/20">
          <h2 className="text-2xl font-semibold mb-4">Ready to Get Started?</h2>
          <p className="text-muted-foreground mb-6">
            Let's discuss how this service can transform your data operations and drive business value.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow">
              Contact Us
            </Button>
          </Link>
        </Card>
      </div>
    </div>
  );
};

export default ServiceDetail;
