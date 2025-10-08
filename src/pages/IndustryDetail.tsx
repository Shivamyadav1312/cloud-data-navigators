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
    "real-estate": {
      title: "Real Estate",
      description: "Market analysis, tenant risk profiling, and occupancy prediction for property management excellence.",
      useCases: [
        "Predict property values, trending locations, future price movements using demographic and market signals",
        "Analyze tenant payment history and demography for screening and lease approvals",
        "Forecast vacancy and optimize rental pricing strategies using building data and industry trends",
        "Market trend analysis for investment and development decisions",
      ],
      services: [
        "Property valuation models using market and demographic data",
        "Tenant risk assessment and screening automation",
        "Occupancy prediction and pricing optimization engines",
        "Market intelligence dashboards for investment decisions",
        "Property management analytics and reporting systems",
      ],
    },
    "utilities-energy-power": {
      title: "Utilities, Energy, Power",
      description: "Grid optimization, asset management, and renewable integration for modern energy systems.",
      useCases: [
        "Monitor and adjust energy flows, forecast outages, and balance supply/demand with real-time grid data",
        "Predict maintenance needs and optimize lifecycle of physical infrastructure via IoT sensor analytics",
        "Align energy usage with grid constraints, offering incentives to users for peak shaving",
        "Spot unusual consumption patterns signaling tampering or loss",
        "Predict wind/solar output, integrate distributed generation",
      ],
      services: [
        "Real-time grid monitoring and optimization systems",
        "Predictive maintenance for energy infrastructure",
        "Demand response and load shifting platforms",
        "Theft and fraud detection analytics",
        "Renewable energy forecasting and integration solutions",
      ],
    },
    "fmcg": {
      title: "FMCG",
      description: "Sales forecasting, promotion analytics, and supply chain optimization for fast-moving consumer goods.",
      useCases: [
        "Analyze historical and real-time POS transactions for demand/supply alignment",
        "Measure lift of marketing campaigns and price drops on sales",
        "Minimize out-of-stocks and excess inventory with advanced analytics on procurement, distribution",
        "Consumer behavior analysis and market trend prediction",
      ],
      services: [
        "Sales trend forecasting and demand planning systems",
        "Promotion impact measurement and campaign analytics",
        "Supply chain optimization and inventory management",
        "Consumer insights and market research analytics",
        "Retail execution and trade marketing dashboards",
      ],
    },
    "internet-businesses": {
      title: "Internet Businesses",
      description: "Behavioral analytics, ad attribution, and recommendation systems for digital-first companies.",
      useCases: [
        "Understand user journeys, conversion funnels via event tracking and engagement metrics",
        "Advanced algorithms allocate marketing spend and optimize campaign ROIs",
        "Guide content and purchase decisions using biographical/user data",
        "A/B testing and personalization for improved user experience",
      ],
      services: [
        "User behavior tracking and analytics implementation",
        "Marketing attribution and ROI optimization platforms",
        "Recommendation engine development and deployment",
        "Conversion funnel analysis and optimization",
        "Personalization and A/B testing frameworks",
      ],
    },
    "technology": {
      title: "Technology Companies",
      description: "Performance benchmarking, feature analytics, and security monitoring for hardware/software companies.",
      useCases: [
        "Analyze customer usage, adoption, and product performance using telemetry",
        "Prioritize new developments with real-time user engagement tracking",
        "Detect threats and anomalies from device logs and access patterns",
        "Product performance optimization and user experience enhancement",
      ],
      services: [
        "Product telemetry and usage analytics platforms",
        "Feature adoption and engagement tracking systems",
        "Security monitoring and threat detection solutions",
        "Performance benchmarking and optimization tools",
        "User feedback analysis and product intelligence",
      ],
    },
    "agriculture": {
      title: "Agriculture",
      description: "Precision farming, weather prediction, and supply chain traceability for modern agriculture.",
      useCases: [
        "Satellite, drone, and in-field IoT sensor analytics optimize use of inputs and predict yield",
        "Data-driven models recommend interventions based on real-time environment conditions",
        "Track crops and goods throughout delivery networks",
        "Crop health monitoring and disease prediction",
      ],
      services: [
        "Precision agriculture and IoT sensor integration",
        "Weather and soil condition monitoring systems",
        "Yield prediction and crop optimization models",
        "Supply chain traceability and logistics platforms",
        "Agricultural market intelligence and pricing analytics",
      ],
    },
    "automotive": {
      title: "Automotive",
      description: "Predictive maintenance, autonomous driving analytics, and market forecasting for automotive industry.",
      useCases: [
        "Monitor sensor data and predict failures before they occur",
        "Leverage real-world data streams to improve perception and routing algorithms",
        "Data-driven insights guide design, engineering, and sales planning",
        "Connected vehicle analytics and telematics",
      ],
      services: [
        "Vehicle predictive maintenance and diagnostics systems",
        "Autonomous driving data processing and analytics",
        "Market trend analysis and sales forecasting",
        "Connected vehicle platforms and telematics solutions",
        "Manufacturing quality control and optimization",
      ],
    },
    "textiles-apparel": {
      title: "Textiles and Apparel",
      description: "Trend prediction, inventory analysis, and fashion analytics for textile and apparel industry.",
      useCases: [
        "Social media and sales analytics detect new fashion developments",
        "Stock allocation and reorder management using sales and demand data",
        "Consumer preference analysis and trend forecasting",
        "Supply chain optimization for fashion retail",
      ],
      services: [
        "Fashion trend prediction and social media analytics",
        "Inventory optimization and demand forecasting",
        "Consumer behavior analysis and market research",
        "Supply chain visibility and vendor management",
        "Retail analytics and merchandising optimization",
      ],
    },
    "construction": {
      title: "Construction",
      description: "Project risk mitigation, cost estimation, and resource optimization for construction industry.",
      useCases: [
        "Use historical data and environmental models to pinpoint risk factors for delays/cost overruns",
        "AI supports dynamic budgeting and procurement planning",
        "Resource allocation and project timeline optimization",
        "Safety monitoring and compliance management",
      ],
      services: [
        "Project risk assessment and mitigation systems",
        "Dynamic cost estimation and budgeting tools",
        "Resource optimization and scheduling platforms",
        "Safety monitoring and compliance analytics",
        "Construction progress tracking and reporting",
      ],
    },
    "trading": {
      title: "Trading",
      description: "Market sentiment analysis, price forecasting, and algorithmic trading for financial markets.",
      useCases: [
        "Natural language processing on news, social, and signal feeds to guide trading strategies",
        "Algorithmic prediction of future commodity/security prices",
        "Risk management and portfolio optimization",
        "Market microstructure analysis and execution optimization",
      ],
      services: [
        "Market sentiment analysis and news processing",
        "Price prediction and forecasting models",
        "Algorithmic trading strategy development",
        "Risk management and portfolio analytics",
        "Market data processing and real-time analytics",
      ],
    },
    "media-entertainment": {
      title: "Media and Entertainment",
      description: "Audience segmentation, recommendation engines, and social sentiment monitoring for enhanced engagement.",
      useCases: [
        "Advanced analytics target demographic preferences for better programming and ads",
        "Content suggestion models drive higher engagement and retention",
        "Real-time social media analysis for campaign impact, crisis control",
        "Viewership analytics and content performance optimization",
      ],
      services: [
        "Audience segmentation and demographic analytics platforms",
        "Content recommendation engine development and deployment",
        "Social media sentiment monitoring and crisis management systems",
        "Viewership analytics and content performance dashboards",
        "Advertising optimization and programmatic campaign management",
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
