import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

interface DemoFormProps {
  buttonText?: string;
  buttonVariant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive";
  buttonSize?: "default" | "sm" | "lg" | "icon";
  className?: string;
}

const DemoForm = ({ 
  buttonText = "Schedule Demo", 
  buttonVariant = "default",
  buttonSize = "default",
  className = ""
}: DemoFormProps) => {
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
    
    try {
      const apiUrl = import.meta.env.PROD 
        ? 'api/demo'
        : 'http://localhost:3001/api/demo';

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        alert('Thank you! Your demo request has been submitted successfully. We will contact you within 24 hours to schedule your demo.');
        
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
        
        setIsDialogOpen(false);
      } else {
        throw new Error(result.message || 'Failed to submit demo request');
      }
    } catch (error) {
      console.error('Error submitting demo request:', error);
      alert('Sorry, there was an error submitting your demo request. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
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

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button 
          variant={buttonVariant} 
          size={buttonSize} 
          className={`${buttonVariant === "default" ? "bg-gradient-primary hover:bg-gradient-primary/90 text-white" : ""} ${className}`}
        >
          {buttonText}
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
  );
};

export default DemoForm;
