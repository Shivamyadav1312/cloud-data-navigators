import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import DemoForm from "@/components/DemoForm";

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
      description: "Customer analytics, inventory optimization, and personalized experiences",
      keyAreas: ["Customer Segmentation", "Demand Forecasting", "Price Optimization"],
    },
    {
      slug: "financial-services",
      title: "Financial Services",
      description: "Risk assessment, fraud detection, and algorithmic trading solutions",
      keyAreas: ["Risk Analytics", "Fraud Detection", "Regulatory Compliance"],
    },
    {
      slug: "healthcare",
      title: "Healthcare & Life Sciences",
      description: "Clinical analytics, drug discovery, and patient outcome prediction",
      keyAreas: ["Clinical Decision Support", "Drug Discovery", "Population Health"],
    },
    {
      slug: "manufacturing",
      title: "Manufacturing & Industrial IoT",
      description: "Predictive maintenance, quality control, and process optimization",
      keyAreas: ["Sensor Analytics", "Quality Detection", "Digital Twins"],
    },
    {
      slug: "real-estate",
      title: "Real Estate",
      description: "Market analysis, tenant risk profiling, and occupancy prediction",
      keyAreas: ["Property Value Prediction", "Tenant Screening", "Occupancy Optimization"],
    },
    {
      slug: "utilities-energy-power",
      title: "Utilities, Energy, Power",
      description: "Grid optimization, asset management, and renewable integration",
      keyAreas: ["Grid Analytics", "Predictive Maintenance", "Demand Response"],
    },
    {
      slug: "fmcg",
      title: "FMCG",
      description: "Sales forecasting, promotion impact analysis, and supply chain optimization",
      keyAreas: ["Demand Planning", "Campaign Analytics", "Inventory Optimization"],
    },
    {
      slug: "internet-businesses",
      title: "Internet Businesses",
      description: "Behavioral analytics, ad attribution, and recommendation systems",
      keyAreas: ["User Journey Analytics", "Marketing ROI", "Personalization"],
    },
    {
      slug: "technology",
      title: "Technology Companies",
      description: "Performance benchmarking, feature analytics, and security monitoring",
      keyAreas: ["Product Analytics", "User Engagement", "Threat Detection"],
    },
    {
      slug: "agriculture",
      title: "Agriculture",
      description: "Precision farming, weather prediction, and supply chain traceability",
      keyAreas: ["Precision Agriculture", "Yield Prediction", "Supply Traceability"],
    },
    {
      slug: "automotive",
      title: "Automotive",
      description: "Predictive maintenance, autonomous driving analytics, and market forecasting",
      keyAreas: ["Vehicle Analytics", "Autonomous Systems", "Market Intelligence"],
    },
    {
      slug: "textiles-apparel",
      title: "Textiles and Apparel",
      description: "Trend prediction, inventory analysis, and fashion analytics",
      keyAreas: ["Fashion Trends", "Inventory Management", "Social Analytics"],
    },
    {
      slug: "construction",
      title: "Construction",
      description: "Project risk mitigation, cost estimation, and resource optimization",
      keyAreas: ["Risk Assessment", "Cost Prediction", "Project Analytics"],
    },
    {
      slug: "trading",
      title: "Trading",
      description: "Market sentiment analysis, price forecasting, and algorithmic trading",
      keyAreas: ["Sentiment Analysis", "Price Prediction", "Trading Algorithms"],
    },
    {
      slug: "logistics",
      title: "Transportation and Logistics",
      description: "Route optimization, fleet analytics, and logistics transparency",
      keyAreas: ["Route Planning", "Fleet Management", "Supply Chain Visibility"],
    },
    {
      slug: "media-entertainment",
      title: "Media and Entertainment",
      description: "Audience segmentation, recommendation engines, and social sentiment monitoring",
      keyAreas: ["Audience Analytics", "Content Recommendations", "Social Monitoring"],
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-24 pb-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Industry Expertise
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Specialized data solutions tailored to your industry's unique challenges
          </p>
          <DemoForm 
            buttonText="Get Industry Demo" 
            buttonSize="lg" 
            className="hover:shadow-glow"
          />
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
        
        {/* CTA Section */}
        <div className="text-center mt-16 pt-16 border-t border-border">
          <h2 className="text-3xl font-bold mb-4">Transform Your Industry with Data</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            See how our industry-specific solutions can accelerate your digital transformation
          </p>
          <DemoForm 
            buttonText="Schedule Industry Demo" 
            buttonSize="lg" 
            className="hover:shadow-glow"
          />
        </div>
      </div>
    </div>
  );
};

export default Industries;
