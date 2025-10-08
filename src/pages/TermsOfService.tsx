import { useEffect } from "react";
import { Card } from "@/components/ui/card";

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background pt-24 pb-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Terms of Service
          </h1>
          {/* <p className="text-xl text-muted-foreground">
            Last updated: {new Date().toLocaleDateString()}
          </p> */}
        </div>

        <Card className="p-8 bg-card border-border">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground mb-6">
              By accessing and using Datenintelligenz services, you accept and agree to be bound by 
              the terms and provision of this agreement. If you do not agree to abide by the above, 
              please do not use this service.
            </p>

            <h2 className="text-2xl font-semibold mb-4">2. Services Description</h2>
            <p className="text-muted-foreground mb-6">
              Datenintelligenz provides data engineering, AI consulting, and analytics services including:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
              <li>Data pipeline development and infrastructure setup</li>
              <li>AI/ML model development and deployment</li>
              <li>Cloud migration and platform optimization</li>
              <li>Business intelligence and visualization solutions</li>
              <li>Data quality, governance, and security consulting</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">3. Client Responsibilities</h2>
            <p className="text-muted-foreground mb-6">
              As a client, you agree to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
              <li>Provide accurate and complete information for project requirements</li>
              <li>Grant necessary access to systems and data as required for service delivery</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Make timely payments according to agreed terms</li>
              <li>Maintain confidentiality of proprietary methodologies and tools</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">4. Payment Terms</h2>
            <p className="text-muted-foreground mb-6">
              Payment terms will be specified in individual service agreements. Generally:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
              <li>Invoices are due within 30 days of receipt unless otherwise specified</li>
              <li>Late payments may incur additional charges</li>
              <li>Services may be suspended for overdue accounts</li>
              <li>All fees are non-refundable unless otherwise agreed in writing</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
            <p className="text-muted-foreground mb-6">
              Intellectual property rights are governed as follows:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
              <li>Client retains ownership of their data and business information</li>
              <li>Datenintelligenz retains rights to general methodologies and frameworks</li>
              <li>Custom solutions developed for clients belong to the client upon full payment</li>
              <li>Pre-existing tools and technologies remain property of Datenintelligenz</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">6. Confidentiality</h2>
            <p className="text-muted-foreground mb-6">
              Both parties agree to maintain strict confidentiality regarding:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
              <li>Proprietary business information and data</li>
              <li>Technical specifications and methodologies</li>
              <li>Financial information and business strategies</li>
              <li>Any information marked as confidential</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
            <p className="text-muted-foreground mb-6">
              Datenintelligenz's liability is limited as follows:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
              <li>Total liability shall not exceed the amount paid for services</li>
              <li>We are not liable for indirect, incidental, or consequential damages</li>
              <li>Client is responsible for data backup and recovery</li>
              <li>We provide services "as is" without warranties beyond those legally required</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">8. Service Level Agreements</h2>
            <p className="text-muted-foreground mb-6">
              Specific performance metrics and service levels will be defined in individual 
              project agreements. We strive to meet all agreed-upon deadlines and quality standards.
            </p>

            <h2 className="text-2xl font-semibold mb-4">9. Termination</h2>
            <p className="text-muted-foreground mb-6">
              Either party may terminate services:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
              <li>With 30 days written notice for ongoing services</li>
              <li>Immediately for breach of contract</li>
              <li>Upon completion of project deliverables</li>
              <li>By mutual agreement</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">10. Governing Law</h2>
            <p className="text-muted-foreground mb-6">
              These terms shall be governed by and construed in accordance with applicable 
              local laws. Any disputes will be resolved through binding arbitration.
            </p>

            <h2 className="text-2xl font-semibold mb-4">11. Changes to Terms</h2>
            <p className="text-muted-foreground mb-6">
              We reserve the right to modify these terms at any time. Material changes will 
              be communicated to active clients with reasonable notice.
            </p>

            <h2 className="text-2xl font-semibold mb-4">12. Contact Information</h2>
            <p className="text-muted-foreground mb-4">
              For questions about these terms, contact us:
            </p>
            <ul className="list-none text-muted-foreground space-y-2">
              <li>Email: Data@aiforbussiness.com</li>
              <li>Phone: +91-83747-96351 or +91-98711-06515</li>
              <li>Address: Global Offices - India, USA, Europe</li>
            </ul>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default TermsOfService;
