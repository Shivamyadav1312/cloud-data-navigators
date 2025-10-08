import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { 
  Factory, 
  ShoppingCart, 
  GraduationCap, 
  Heart, 
  Building, 
  Home, 
  Zap, 
  Package, 
  Globe, 
  Cpu, 
  Wheat, 
  Car, 
  Shirt, 
  HardHat, 
  TrendingUp, 
  Truck,
  Film,
  Microscope,
  Users,
  Shield,
  Settings,
  Leaf,
  Stethoscope,
  Target,
  Database
} from "lucide-react";

const Solutions = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    companyName: '',
    industry: '',
    location: '',
    budget: '',
    preferredContact: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Demo form submitted:', formData);
    alert('Thank you! Your demo request has been submitted. We will contact you within 24 hours.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      contactNumber: '',
      companyName: '',
      industry: '',
      location: '',
      budget: '',
      preferredContact: ''
    });
    
    setIsSubmitting(false);
    setIsDialogOpen(false);
  };

  const industries = [
    'Manufacturing',
    'Retail & eCommerce',
    'Healthcare',
    'Financial Services',
    'Real Estate',
    'Utilities, Energy, Power',
    'FMCG',
    'Internet Businesses',
    'Technology',
    'Agriculture',
    'Automotive',
    'Textiles/Apparel',
    'Construction',
    'Trading',
    'Transportation & Logistics',
    'Media/Entertainment',
    'Life Sciences',
    'Other'
  ];

  const contactModes = [
    'Email',
    'Phone Call',
    'Video Conference',
    'In-Person Meeting',
    'WhatsApp'
  ];
  const dataProductUseCases = [
    {
      industry: "Manufacturing",
      icon: <Factory className="h-6 w-6" />,
      useCases: [
        "Predictive maintenance for machinery",
        "Real-time production monitoring", 
        "Supply chain optimization",
        "Inventory forecasting",
        "Energy consumption modeling"
      ]
    },
    {
      industry: "Retail & eCommerce",
      icon: <ShoppingCart className="h-6 w-6" />,
      useCases: [
        "Customer segmentation",
        "Demand forecasting",
        "Personalized recommendations",
        "Price optimization",
        "Fraud detection",
        "Inventory analytics"
      ]
    },
    {
      industry: "Education",
      icon: <GraduationCap className="h-6 w-6" />,
      useCases: [
        "Student performance tracking",
        "Adaptive learning systems",
        "Dropout prediction",
        "Digital assessment platforms"
      ]
    },
    {
      industry: "Healthcare",
      icon: <Heart className="h-6 w-6" />,
      useCases: [
        "Diagnostic imaging analysis",
        "Patient risk stratification",
        "Drug discovery",
        "Resource scheduling",
        "Personalized medicine",
        "Remote monitoring"
      ]
    },
    {
      industry: "Financial Services",
      icon: <Building className="h-6 w-6" />,
      useCases: [
        "Credit risk modeling",
        "Algorithmic trading",
        "Anti-fraud systems",
        "Customer churn prediction",
        "Regulatory compliance analytics"
      ]
    },
    {
      industry: "Real Estate",
      icon: <Home className="h-6 w-6" />,
      useCases: [
        "Market trend analysis",
        "Property valuation models",
        "Tenant screening",
        "Occupancy analytics"
      ]
    },
    {
      industry: "Utilities, Energy, Power",
      icon: <Zap className="h-6 w-6" />,
      useCases: [
        "Grid monitoring platforms",
        "Energy usage prediction",
        "Asset lifecycle analytics",
        "Carbon footprint modeling"
      ]
    },
    {
      industry: "FMCG",
      icon: <Package className="h-6 w-6" />,
      useCases: [
        "Market basket analysis",
        "Sales forecasting",
        "Promotion impact measurement",
        "Supply chain analytics"
      ]
    },
    {
      industry: "Internet Businesses",
      icon: <Globe className="h-6 w-6" />,
      useCases: [
        "Recommendation engines",
        "User behavior analytics",
        "Ad targeting platforms",
        "Content optimization systems"
      ]
    },
    {
      industry: "Technology (Hardware/Software)",
      icon: <Cpu className="h-6 w-6" />,
      useCases: [
        "Product feature usage analytics",
        "Operational telemetry",
        "Performance benchmarking",
        "User feedback platforms"
      ]
    },
    {
      industry: "Agriculture",
      icon: <Wheat className="h-6 w-6" />,
      useCases: [
        "Yield prediction",
        "Soil analytics",
        "Crop health monitoring with IoT",
        "Supply chain transparency tools"
      ]
    },
    {
      industry: "Automotive",
      icon: <Car className="h-6 w-6" />,
      useCases: [
        "Preventive maintenance platforms",
        "Connected vehicle data",
        "Production process optimization",
        "Autonomous driving analytics"
      ]
    },
    {
      industry: "Textiles/Apparel",
      icon: <Shirt className="h-6 w-6" />,
      useCases: [
        "Inventory optimization",
        "Trend detection",
        "Production workflow analytics"
      ]
    },
    {
      industry: "Construction",
      icon: <HardHat className="h-6 w-6" />,
      useCases: [
        "Project risk dashboards",
        "Timeline forecasting",
        "Cost estimation models",
        "Resource utilization analytics"
      ]
    },
    {
      industry: "Trading",
      icon: <TrendingUp className="h-6 w-6" />,
      useCases: [
        "Market analytics",
        "Transaction optimization",
        "Price prediction"
      ]
    },
    {
      industry: "Transportation & Logistics",
      icon: <Truck className="h-6 w-6" />,
      useCases: [
        "Route optimization",
        "Fleet management",
        "Demand forecasting",
        "Warehouse analytics"
      ]
    },
    {
      industry: "Media/Entertainment",
      icon: <Film className="h-6 w-6" />,
      useCases: [
        "Audience segmentation",
        "Content recommendation",
        "Usage trend modeling",
        "Social sentiment analysis"
      ]
    },
    {
      industry: "Life Sciences",
      icon: <Microscope className="h-6 w-6" />,
      useCases: [
        "Clinical trial analytics",
        "Genomic data interpretation",
        "Drug efficacy modeling"
      ]
    }
  ];

  const serviceOnlyAreas = [
    {
      category: "Strategy Consulting",
      icon: <Users className="h-6 w-6" />,
      services: [
        "Data-driven digital transformation roadmaps",
        "AI implementation strategy",
        "Technology adoption assessments"
      ]
    },
    {
      category: "Risk & Compliance",
      icon: <Shield className="h-6 w-6" />,
      services: [
        "Regulatory data analysis",
        "Audit support",
        "Fraud and risk assessment services"
      ]
    },
    {
      category: "Operations & Supply Chain",
      icon: <Settings className="h-6 w-6" />,
      services: [
        "Process improvement",
        "Supply chain optimization",
        "Inventory management consulting"
      ]
    },
    {
      category: "Environmental & Sustainability",
      icon: <Leaf className="h-6 w-6" />,
      services: [
        "Carbon footprint analysis",
        "Energy transition strategy",
        "ESG reporting consulting"
      ]
    },
    {
      category: "Healthcare/Life Sciences",
      icon: <Stethoscope className="h-6 w-6" />,
      services: [
        "Compliance support (FDA, HIPAA)",
        "Clinical operations consulting",
        "Product launch strategy"
      ]
    },
    {
      category: "Marketing & Sales",
      icon: <Target className="h-6 w-6" />,
      services: [
        "CRM integration",
        "Customer journey mapping",
        "Segmentation modeling services"
      ]
    },
    {
      category: "IT Services & Data Engineering",
      icon: <Database className="h-6 w-6" />,
      services: [
        "Data modernization",
        "Migration services",
        "System integration",
        "Cloud data architecture",
        "Quality assurance"
      ]
    },
    {
      category: "Custom Analytics Solutions",
      icon: <TrendingUp className="h-6 w-6" />,
      services: [
        "Tailored dashboards",
        "KPI modeling",
        "Predictive analytics implementations",
        "Workflow automation"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Comprehensive Data Solutions
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Data-based products, custom-built solutions, and service-only offerings drive transformative use cases across major industry verticals, enabling insights, efficiency, personalization, and innovation in business functions.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="secondary" className="text-sm px-4 py-2">
              Industry-Specific Solutions
            </Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">
              Custom Analytics
            </Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">
              Consulting Services
            </Badge>
          </div>
          
          {/* Demo Button */}
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button size="lg" className="bg-gradient-primary hover:bg-gradient-primary/90 text-white px-8 py-4 text-lg">
                Schedule No-Obligation Demo
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  Schedule Your Demo
                </DialogTitle>
                <DialogDescription className="text-base">
                  Click here to schedule a No-Obligation demo of our product-based and service-only solutions, with specific use cases and requirements based.
                </DialogDescription>
              </DialogHeader>
              
              <form onSubmit={handleSubmit} className="space-y-6 mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                      placeholder="Enter your email address"
                    />
                  </div>

                  {/* Contact Number */}
                  <div className="space-y-2">
                    <Label htmlFor="contactNumber">Contact Number *</Label>
                    <Input
                      id="contactNumber"
                      type="tel"
                      value={formData.contactNumber}
                      onChange={(e) => handleInputChange('contactNumber', e.target.value)}
                      required
                      placeholder="Enter your phone number"
                    />
                  </div>

                  {/* Company Name */}
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Company Name *</Label>
                    <Input
                      id="companyName"
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => handleInputChange('companyName', e.target.value)}
                      required
                      placeholder="Enter your company name"
                    />
                  </div>

                  {/* Industry */}
                  <div className="space-y-2">
                    <Label htmlFor="industry">Industry *</Label>
                    <Select value={formData.industry} onValueChange={(value) => handleInputChange('industry', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your industry" />
                      </SelectTrigger>
                      <SelectContent>
                        {industries.map((industry) => (
                          <SelectItem key={industry} value={industry}>
                            {industry}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Location */}
                  <div className="space-y-2">
                    <Label htmlFor="location">Location *</Label>
                    <Input
                      id="location"
                      type="text"
                      value={formData.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                      required
                      placeholder="City, Country"
                    />
                  </div>

                  {/* Budget */}
                  <div className="space-y-2">
                    <Label htmlFor="budget">Budget (Optional)</Label>
                    <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-10k">Under $10,000</SelectItem>
                        <SelectItem value="10k-50k">$10,000 - $50,000</SelectItem>
                        <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                        <SelectItem value="100k-500k">$100,000 - $500,000</SelectItem>
                        <SelectItem value="500k-plus">$500,000+</SelectItem>
                        <SelectItem value="discuss">Prefer to discuss</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Preferred Mode of Contact */}
                  <div className="space-y-2">
                    <Label htmlFor="preferredContact">Preferred Mode of Contact (Optional)</Label>
                    <Select value={formData.preferredContact} onValueChange={(value) => handleInputChange('preferredContact', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select contact preference" />
                      </SelectTrigger>
                      <SelectContent>
                        {contactModes.map((mode) => (
                          <SelectItem key={mode} value={mode}>
                            {mode}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-primary hover:bg-gradient-primary/90 text-white py-3"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Demo Request'}
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-16 px-4">
        <div className="container mx-auto">
          <Tabs defaultValue="products" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="products">Data Products & Custom Solutions</TabsTrigger>
              <TabsTrigger value="services">Service-Only & Consulting</TabsTrigger>
              <TabsTrigger value="detailed">See Detailed Industry Use Cases</TabsTrigger>
            </TabsList>

            <TabsContent value="products">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4">Data Product & Custom Build Use Cases</h2>
                <p className="text-muted-foreground mb-8">
                  Software platforms, analytics applications, AI models, and integrated tools tailored for specific industry workflows and decision-making.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {dataProductUseCases.map((industry, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                          {industry.icon}
                        </div>
                        {industry.industry}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {industry.useCases.map((useCase, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start">
                            <span className="w-2 h-2 rounded-full bg-primary/60 mt-2 mr-3 flex-shrink-0"></span>
                            {useCase}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="services">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4">Service-Only Areas & Consulting Solutions</h2>
                <p className="text-muted-foreground mb-8">
                  Strategic consulting and specialized services that leverage data expertise to drive business transformation and operational excellence.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {serviceOnlyAreas.map((service, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-secondary/10 text-secondary-foreground">
                          {service.icon}
                        </div>
                        {service.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {service.services.map((item, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start">
                            <span className="w-2 h-2 rounded-full bg-secondary/60 mt-2 mr-3 flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="detailed">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4">Detailed Industry Use Cases</h2>
                <p className="text-muted-foreground mb-8">
                  Each major industry vertical leverages data for highly specialized—yet often transformative—applications. Here are detailed use cases for business intelligence, analytics, and AI across industry verticals.
                </p>
              </div>
              
              <div className="space-y-8">
                {/* Manufacturing */}
                <Card className="p-6">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3 text-2xl">
                      <Factory className="h-7 w-7 text-primary" />
                      Manufacturing
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-primary">Predictive Maintenance</h4>
                        <p className="text-sm text-muted-foreground">Active machine/instrument monitoring to anticipate equipment failures and minimize downtime.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-primary">Quality Control</h4>
                        <p className="text-sm text-muted-foreground">Real-time defect detection using machine vision/artificial intelligence.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-primary">Process Optimization</h4>
                        <p className="text-sm text-muted-foreground">Maximizing throughput/yield based on energy and materials consumption analytics.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-primary">Demand Forecasting</h4>
                        <p className="text-sm text-muted-foreground">Machine learning-based models predict demand to match production schedules and reduce inventory costs.</p>
                      </div>
                      <div className="md:col-span-2">
                        <h4 className="font-semibold mb-2 text-primary">Supply Chain Resilience</h4>
                        <p className="text-sm text-muted-foreground">End-to-end tracking, stock optimization, and risk prediction using big data from suppliers to customers.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Retail & eCommerce */}
                <Card className="p-6">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3 text-2xl">
                      <ShoppingCart className="h-7 w-7 text-primary" />
                      Retail & eCommerce
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-primary">Personalized Recommendations</h4>
                        <p className="text-sm text-muted-foreground">AI/ML features tailor product offers based on user browsing, purchases, interaction histories.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-primary">Real-time Inventory Insight</h4>
                        <p className="text-sm text-muted-foreground">Stockouts, logistics delays, and predictive restocking powered by sales and supplier data.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-primary">Customer Segmentation</h4>
                        <p className="text-sm text-muted-foreground">Identify lucrative audience segments for targeted acquisition and retention campaigns.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-primary">Dynamic Pricing</h4>
                        <p className="text-sm text-muted-foreground">Adjusting prices in response to demand, seasonality, and competitor moves using analytics.</p>
                      </div>
                      <div className="md:col-span-2">
                        <h4 className="font-semibold mb-2 text-primary">Footfall Analysis</h4>
                        <p className="text-sm text-muted-foreground">Physical retail uses IoT and geospatial analytics to enhance store layouts and optimize staff.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Healthcare */}
                <Card className="p-6">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3 text-2xl">
                      <Heart className="h-7 w-7 text-primary" />
                      Healthcare
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-primary">Patient Risk Stratification</h4>
                        <p className="text-sm text-muted-foreground">Predict chronic illness, high-risk patient groups using EMR and imaging data analytics.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-primary">Diagnostic Assistance</h4>
                        <p className="text-sm text-muted-foreground">AI-powered interpretation for radiology, genomics, pathology reports.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-primary">Treatment Personalization</h4>
                        <p className="text-sm text-muted-foreground">Data-driven insights recommend tailored treatments based on patient history, genetic profiles.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-primary">Resource Planning</h4>
                        <p className="text-sm text-muted-foreground">Optimize staff schedules, bed management, and supply chain for equipment/drugs using predictive analytics.</p>
                      </div>
                      <div className="md:col-span-2">
                        <h4 className="font-semibold mb-2 text-primary">Disease Outbreak Prediction</h4>
                        <p className="text-sm text-muted-foreground">Real-time public health surveillance, COVID-19 containment mapping.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Financial Services */}
                <Card className="p-6">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3 text-2xl">
                      <Building className="h-7 w-7 text-primary" />
                      Financial Services
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-primary">Credit Scoring</h4>
                        <p className="text-sm text-muted-foreground">Predict risk using transactional, behavioral, and alternative data sources for scoring and loan underwriting.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-primary">Fraud Detection</h4>
                        <p className="text-sm text-muted-foreground">Identifying suspicious transactions and anomaly patterns in real time using ML models.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-primary">Trading & Portfolio Analytics</h4>
                        <p className="text-sm text-muted-foreground">Algorithmic trading and portfolio optimization based on market data streams.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-primary">Regulatory Compliance</h4>
                        <p className="text-sm text-muted-foreground">Automating record-keeping and compliance checks with data-driven audit trails.</p>
                      </div>
                      <div className="md:col-span-2">
                        <h4 className="font-semibold mb-2 text-primary">Customer Churn Prediction</h4>
                        <p className="text-sm text-muted-foreground">Use behavioral and transaction data to predict and proactively retain clients.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Real Estate */}
                <Card className="p-6">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3 text-2xl">
                      <Home className="h-7 w-7 text-primary" />
                      Real Estate
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-primary">Market Analysis</h4>
                        <p className="text-sm text-muted-foreground">Predict property values, trending locations, future price movements using demographic and market signals.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-primary">Tenant Risk Profiling</h4>
                        <p className="text-sm text-muted-foreground">Analyze tenant payment history and demography for screening and lease approvals.</p>
                      </div>
                      <div className="md:col-span-2">
                        <h4 className="font-semibold mb-2 text-primary">Occupancy Prediction</h4>
                        <p className="text-sm text-muted-foreground">Forecast vacancy and optimize rental pricing strategies using building data and industry trends.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Utilities, Energy, Power */}
                <Card className="p-6">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3 text-2xl">
                      <Zap className="h-7 w-7 text-primary" />
                      Utilities, Energy, Power
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-primary">Grid Optimization</h4>
                        <p className="text-sm text-muted-foreground">Monitor and adjust energy flows, forecast outages, and balance supply/demand with real-time grid data.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-primary">Asset Management</h4>
                        <p className="text-sm text-muted-foreground">Predict maintenance needs and optimize lifecycle of physical infrastructure via IoT sensor analytics.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-primary">Load Shifting/Demand Response</h4>
                        <p className="text-sm text-muted-foreground">Align energy usage with grid constraints, offering incentives to users for peak shaving.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-primary">Theft/Fraud Detection</h4>
                        <p className="text-sm text-muted-foreground">Spot unusual consumption patterns signaling tampering or loss.</p>
                      </div>
                      <div className="md:col-span-2">
                        <h4 className="font-semibold mb-2 text-primary">Renewable Integration</h4>
                        <p className="text-sm text-muted-foreground">Predict wind/solar output, integrate distributed generation.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* FMCG */}
                <Card className="p-6">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3 text-2xl">
                      <Package className="h-7 w-7 text-primary" />
                      FMCG
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-primary">Sales Trend Forecasting</h4>
                        <p className="text-sm text-muted-foreground">Analyze historical and real-time POS transactions for demand/supply alignment.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-primary">Promotion Impact</h4>
                        <p className="text-sm text-muted-foreground">Measure lift of marketing campaigns and price drops on sales.</p>
                      </div>
                      <div className="md:col-span-2">
                        <h4 className="font-semibold mb-2 text-primary">Supply Chain Optimization</h4>
                        <p className="text-sm text-muted-foreground">Minimize out-of-stocks and excess inventory with advanced analytics on procurement, distribution.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Internet Businesses */}
                <Card className="p-6">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3 text-2xl">
                      <Globe className="h-7 w-7 text-primary" />
                      Internet Businesses
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-primary">Behavioral Analytics</h4>
                        <p className="text-sm text-muted-foreground">Understand user journeys, conversion funnels via event tracking and engagement metrics.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-primary">Ad Attribution & Targeting</h4>
                        <p className="text-sm text-muted-foreground">Advanced algorithms allocate marketing spend and optimize campaign ROIs.</p>
                      </div>
                      <div className="md:col-span-2">
                        <h4 className="font-semibold mb-2 text-primary">Recommendation Systems</h4>
                        <p className="text-sm text-muted-foreground">Guide content and purchase decisions using biographical/user data.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Technology Companies */}
                <Card className="p-6">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3 text-2xl">
                      <Cpu className="h-7 w-7 text-primary" />
                      Technology Companies (Hardware/Software)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-primary">Performance Benchmarking</h4>
                        <p className="text-sm text-muted-foreground">Analyze customer usage, adoption, and product performance using telemetry.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-primary">Feature Usage Analytics</h4>
                        <p className="text-sm text-muted-foreground">Prioritize new developments with real-time user engagement tracking.</p>
                      </div>
                      <div className="md:col-span-2">
                        <h4 className="font-semibold mb-2 text-primary">Security Monitoring</h4>
                        <p className="text-sm text-muted-foreground">Detect threats and anomalies from device logs and access patterns.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Agriculture */}
                <Card className="p-6">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3 text-2xl">
                      <Wheat className="h-7 w-7 text-primary" />
                      Agriculture
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-primary">Precision Farming</h4>
                        <p className="text-sm text-muted-foreground">Satellite, drone, and in-field IoT sensor analytics optimize use of inputs and predict yield.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-primary">Weather/Soil Prediction</h4>
                        <p className="text-sm text-muted-foreground">Data-driven models recommend interventions based on real-time environment conditions.</p>
                      </div>
                      <div className="md:col-span-2">
                        <h4 className="font-semibold mb-2 text-primary">Supply Chain Traceability</h4>
                        <p className="text-sm text-muted-foreground">Track crops and goods throughout delivery networks.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Automotive */}
                <Card className="p-6">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3 text-2xl">
                      <Car className="h-7 w-7 text-primary" />
                      Automotive
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-primary">Predictive Maintenance for Vehicles</h4>
                        <p className="text-sm text-muted-foreground">Monitor sensor data and predict failures before they occur.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-primary">Autonomous Driving Analytics</h4>
                        <p className="text-sm text-muted-foreground">Leverage real-world data streams to improve perception and routing algorithms.</p>
                      </div>
                      <div className="md:col-span-2">
                        <h4 className="font-semibold mb-2 text-primary">Market Trend Forecasting</h4>
                        <p className="text-sm text-muted-foreground">Data-driven insights guide design, engineering, and sales planning.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Textiles and Apparel */}
                <Card className="p-6">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3 text-2xl">
                      <Shirt className="h-7 w-7 text-primary" />
                      Textiles and Apparel
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-primary">Trend Prediction</h4>
                        <p className="text-sm text-muted-foreground">Social media and sales analytics detect new fashion developments.</p>
                      </div>
                      <div className="md:col-span-2">
                        <h4 className="font-semibold mb-2 text-primary">Inventory Analysis</h4>
                        <p className="text-sm text-muted-foreground">Stock allocation and reorder management using sales and demand data.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Construction */}
                <Card className="p-6">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3 text-2xl">
                      <HardHat className="h-7 w-7 text-primary" />
                      Construction
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-primary">Project Risk Mitigation</h4>
                        <p className="text-sm text-muted-foreground">Use historical data and environmental models to pinpoint risk factors for delays/cost overruns.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-primary">Cost Estimation</h4>
                        <p className="text-sm text-muted-foreground">AI supports dynamic budgeting and procurement planning.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Trading */}
                <Card className="p-6">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3 text-2xl">
                      <TrendingUp className="h-7 w-7 text-primary" />
                      Trading
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-primary">Market Sentiment Analysis</h4>
                        <p className="text-sm text-muted-foreground">Natural language processing on news, social, and signal feeds to guide trading strategies.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-primary">Price Trend Forecasting</h4>
                        <p className="text-sm text-muted-foreground">Algorithmic prediction of future commodity/security prices.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Transportation and Logistics */}
                <Card className="p-6">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3 text-2xl">
                      <Truck className="h-7 w-7 text-primary" />
                      Transportation and Logistics
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-primary">Route Optimization</h4>
                        <p className="text-sm text-muted-foreground">Real-time traffic and weather analytics guide least-cost, fastest delivery.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-primary">Fleet Analytics</h4>
                        <p className="text-sm text-muted-foreground">Monitor vehicle health, efficiency, and safety using IoT/sensor data.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-primary">Load Optimization</h4>
                        <p className="text-sm text-muted-foreground">Maximize capacity utilization with data-driven packing and scheduling.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-primary">Logistics Transparency</h4>
                        <p className="text-sm text-muted-foreground">End-to-end tracking improves customer experience and reduces delays.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Media and Entertainment */}
                <Card className="p-6">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3 text-2xl">
                      <Film className="h-7 w-7 text-primary" />
                      Media and Entertainment
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-primary">Audience Segmentation</h4>
                        <p className="text-sm text-muted-foreground">Advanced analytics target demographic preferences for better programming and ads.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-primary">Recommendation Engines</h4>
                        <p className="text-sm text-muted-foreground">Content suggestion models drive higher engagement and retention.</p>
                      </div>
                      <div className="md:col-span-2">
                        <h4 className="font-semibold mb-2 text-primary">Social Sentiment Monitoring</h4>
                        <p className="text-sm text-muted-foreground">Real-time social media analysis for campaign impact, crisis control.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Life Sciences */}
                <Card className="p-6">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3 text-2xl">
                      <Microscope className="h-7 w-7 text-primary" />
                      Life Sciences
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-primary">Genomic Analytics</h4>
                        <p className="text-sm text-muted-foreground">High-throughput genetic sequencing informs drug development and personalized medicine.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-primary">Clinical Trial Optimization</h4>
                        <p className="text-sm text-muted-foreground">Data-driven trial design, patient recruitment, adverse event prediction.</p>
                      </div>
                      <div className="md:col-span-2">
                        <h4 className="font-semibold mb-2 text-primary">Pandemic Prediction</h4>
                        <p className="text-sm text-muted-foreground">Surveillance of molecular and news outlets for outbreak early warning.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="bg-muted/50 py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Industry?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Every industry leverages data differently based on its operational needs, regulatory requirements, and digital maturity. Let us help you unlock the full potential of your data.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Badge variant="outline" className="text-sm px-6 py-3">
              Packaged Products
            </Badge>
            <Badge variant="outline" className="text-sm px-6 py-3">
              Bespoke Services
            </Badge>
            <Badge variant="outline" className="text-sm px-6 py-3">
              Value Creation
            </Badge>
          </div>
          
          {/* Second Demo Button */}
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button size="lg" className="bg-gradient-primary hover:bg-gradient-primary/90 text-white px-8 py-4">
                Get Your Custom Demo Today
              </Button>
            </DialogTrigger>
          </Dialog>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
