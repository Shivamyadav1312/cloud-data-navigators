import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Target, Wrench } from "lucide-react";
import DemoForm from "@/components/DemoForm";

const IndustryDetail = () => {
  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  interface IndustryDetail {
    title: string;
    description: string;
    useCases: string[];
    services: string[];
  }

  const industryDetails: Record<string, IndustryDetail> = {
    retail: {
      title: "Retail & eCommerce",
      description: "Transform your retail operations with data-driven insights for personalization, pricing, and supply chain excellence.",
      useCases: [
        "Customer segmentation and personalized marketing using purchasing behavior and omni-channel data",
        "Dynamic pricing optimization driven by real-time demand, inventory, and competitor analytics",
        "Supply chain analytics for demand forecasting, stock-out prediction, and logistics optimization",
        "Fraud detection in payments and returns processes through anomaly detection",
      ],
      services: [
        "Integration of POS, CRM, eCommerce, and supply chain platforms for unified analytics",
        "Implementation of real-time dashboards for sales, inventory, and customer journeys",
        "Personalization engine deployment with A/B testing and recommendation algorithms",
        "ETL pipeline development for fast-moving product catalogs and pricing updates",
        "Integration with marketing automation tools for data-driven campaigns",
      ],
    },
    "financial-services": {
      title: "Financial Services & Fintech",
      description: "Secure, compliant data solutions for risk management, fraud detection, and customer intelligence.",
      useCases: [
        "Credit risk modeling using alternative data and advanced machine learning techniques",
        "Real-time fraud and AML transaction monitoring with anomaly detection and alerting",
        "Customer lifetime value and churn prediction models",
        "Regulatory and compliance reporting automation",
      ],
      services: [
        "Data pipeline setup for bank transactions, open banking, and external feeds",
        "Secure, compliant data lake/warehouse with role-based access control",
        "Model scoring pipelines for loan applications and fraud alerts",
        "Integration with core banking and transaction processing systems",
        "Secure workflow automation for compliance and KYC processes",
      ],
    },
    healthcare: {
      title: "Healthcare & Life Sciences",
      description: "HIPAA-compliant data solutions for patient care, research, and population health management.",
      useCases: [
        "Predictive modeling for patient readmission, disease risk, and resource planning",
        "NLP-powered extraction and structuring of information from clinical notes",
        "Clinical trial analytics—cohort building, eligibility, and real-world evidence",
        "Population health management dashboards for proactive care",
      ],
      services: [
        "EHR, claims, device, and imaging data integration via FHIR and HL7 standards",
        "HIPAA-compliant data warehousing with de-identification and anonymization",
        "Patient risk stratification and clinical decision support models",
        "Real-time alerting systems for remote patient monitoring",
        "Federated analytics for privacy-preserving insights",
      ],
    },
    manufacturing: {
      title: "Manufacturing & Industrial IoT",
      description: "IIoT-powered analytics for predictive maintenance, quality control, and operational excellence.",
      useCases: [
        "Predictive maintenance using machine data, sensor logs, and failure patterns",
        "Computer vision-based quality control and defect detection on production lines",
        "Yield optimization through process parameter and environmental analysis",
        "Supply chain visibility and supplier performance dashboards",
      ],
      services: [
        "Real-time data ingestion from sensors, PLCs, and MES systems",
        "Digital twin development and process analytics engines",
        "Edge processing for high-volume plant data",
        "IoT platform integration and asset connectivity solutions",
        "Operational dashboards for floor managers and executives",
      ],
    },
    telecom: {
      title: "Telecom & Media",
      description: "Network optimization, customer retention, and content personalization through advanced analytics.",
      useCases: [
        "Network usage analytics for capacity planning and outage prediction",
        "Customer churn analysis using usage, support, and sentiment data",
        "Content recommendation engines for OTT and streaming platforms",
        "Ad inventory optimization and programmatic campaign analytics",
      ],
      services: [
        "CDR, network log, and OTT interaction data processing",
        "Real-time event processing for usage and quality of service analytics",
        "Personalized recommendation algorithm deployment",
        "Ad-tech platform integration for click-through and bidding optimization",
        "Campaign performance and support KPI visualizations",
      ],
    },
    logistics: {
      title: "Logistics & Transportation",
      description: "Real-time visibility and optimization for fleet management, routing, and warehouse operations.",
      useCases: [
        "Real-time fleet tracking, route optimization, and ETA prediction",
        "Driver behavior, asset health, and fuel consumption analytics",
        "Warehouse load and space optimization",
        "Dynamic pricing and capacity matching for freight marketplaces",
      ],
      services: [
        "IoT device integration for fleet and asset tracking",
        "Route optimization engines with weather and traffic data integration",
        "Supply chain and last-mile delivery dashboards",
        "Shipment consolidation and scheduling workflow automation",
        "Predictive models for vehicle maintenance and downtime reduction",
      ],
    },
    energy: {
      title: "Energy & Utilities",
      description: "Smart grid analytics, renewable integration, and demand-side management solutions.",
      useCases: [
        "Smart meter data analytics for consumption forecasting and anomaly detection",
        "Predictive maintenance for grid infrastructure and asset reliability",
        "Renewable energy integration and supply-demand balancing",
        "Customer engagement analytics for efficiency and rebate programs",
      ],
      services: [
        "Real-time IoT data ingestion from meters, grids, and renewable sources",
        "Time-series data lake construction for high-throughput scenarios",
        "Weather and market data feed integration for forecasting",
        "Predictive models for outage, load, and consumption scenarios",
        "Operational and compliance reporting visualizations",
      ],
    },
    education: {
      title: "Education & EdTech",
      description: "Learning analytics, adaptive testing, and institutional intelligence for better outcomes.",
      useCases: [
        "Learning path analytics and student performance prediction",
        "Adaptive testing and personalized content recommendations",
        "Institutional reporting and regulatory compliance analytics",
        "Alumni engagement and fundraising intelligence",
      ],
      services: [
        "LMS, content library, and assessment system integration",
        "Student engagement and performance dashboards",
        "Adaptive learning and assessment model development",
        "Privacy-compliant data management and consent tracking",
        "Automated institutional reporting pipelines",
      ],
    },
  };

  const industry = industryDetails[slug || ""];

  if (!industry) {
    return (
      <div className="min-h-screen bg-background pt-24 px-4 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Industry Not Found</h1>
          <Link to="/industries">
            <Button>Back to Industries</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-24 pb-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <Link to="/industries">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Industries
          </Button>
        </Link>

        <h1 className="text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
          {industry.title}
        </h1>
        <p className="text-xl text-muted-foreground mb-12">{industry.description}</p>

        <div className="space-y-8 mb-12">
          <Card className="p-8 bg-card border-border">
            <div className="flex items-center mb-6">
              <Target className="w-8 h-8 text-primary mr-3" />
              <h2 className="text-2xl font-semibold">Typical Use Cases</h2>
            </div>
            <ul className="space-y-4">
              {industry.useCases.map((useCase: string, index: number) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary mr-3 font-bold">•</span>
                  <span className="text-muted-foreground">{useCase}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-8 bg-secondary border-border">
            <div className="flex items-center mb-6">
              <Wrench className="w-8 h-8 text-primary mr-3" />
              <h2 className="text-2xl font-semibold">Our Consulting Services</h2>
            </div>
            <ul className="space-y-4">
              {industry.services.map((service: string, index: number) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary mr-3 font-bold">•</span>
                  <span className="text-muted-foreground">{service}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <Card className="p-8 bg-gradient-secondary border-primary/20">
          <h2 className="text-2xl font-semibold mb-4">Ready to Transform Your {industry.title} Operations?</h2>
          <p className="text-muted-foreground mb-6">
            Let's discuss how our industry-specific expertise can drive measurable results for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <DemoForm 
              buttonText="Get Industry Demo" 
              buttonSize="lg" 
              className="hover:shadow-glow"
            />
            <Link to="/contact">
              <Button size="lg" variant="outline">
                Schedule a Consultation
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default IndustryDetail;
