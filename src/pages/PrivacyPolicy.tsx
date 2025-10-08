import { useEffect } from "react";
import { Card } from "@/components/ui/card";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background pt-24 pb-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-xl text-muted-foreground">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <Card className="p-8 bg-card border-border">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
            <p className="text-muted-foreground mb-6">
              We collect information you provide directly to us, such as when you create an account, 
              request our services, fill out a form, or communicate with us. This may include:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
              <li>Name, email address, phone number, and company information</li>
              <li>Professional information and project requirements</li>
              <li>Communication preferences and feedback</li>
              <li>Payment and billing information for our services</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
            <p className="text-muted-foreground mb-6">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
              <li>Provide, maintain, and improve our data engineering and AI consulting services</li>
              <li>Process transactions and send related information</li>
              <li>Send technical notices, updates, security alerts, and support messages</li>
              <li>Respond to your comments, questions, and provide customer service</li>
              <li>Communicate about products, services, offers, and events</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">3. Information Sharing and Disclosure</h2>
            <p className="text-muted-foreground mb-6">
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              without your consent, except as described in this policy:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
              <li>With service providers who assist us in operating our business</li>
              <li>To comply with legal obligations or protect our rights</li>
              <li>In connection with a merger, acquisition, or sale of assets</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
            <p className="text-muted-foreground mb-6">
              We implement appropriate technical and organizational measures to protect your personal 
              information against unauthorized access, alteration, disclosure, or destruction. However, 
              no method of transmission over the internet is 100% secure.
            </p>

            <h2 className="text-2xl font-semibold mb-4">5. Data Retention</h2>
            <p className="text-muted-foreground mb-6">
              We retain your personal information for as long as necessary to fulfill the purposes 
              outlined in this privacy policy, unless a longer retention period is required by law.
            </p>

            <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
            <p className="text-muted-foreground mb-6">
              Depending on your location, you may have certain rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
              <li>Access to your personal information</li>
              <li>Correction of inaccurate information</li>
              <li>Deletion of your personal information</li>
              <li>Objection to processing of your information</li>
              <li>Data portability</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">7. International Data Transfers</h2>
            <p className="text-muted-foreground mb-6">
              Your information may be transferred to and processed in countries other than your own. 
              We ensure appropriate safeguards are in place to protect your information.
            </p>

            <h2 className="text-2xl font-semibold mb-4">8. Changes to This Policy</h2>
            <p className="text-muted-foreground mb-6">
              We may update this privacy policy from time to time. We will notify you of any 
              material changes by posting the new policy on this page and updating the "Last updated" date.
            </p>

            <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
            <p className="text-muted-foreground mb-4">
              If you have any questions about this privacy policy, please contact us:
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

export default PrivacyPolicy;
