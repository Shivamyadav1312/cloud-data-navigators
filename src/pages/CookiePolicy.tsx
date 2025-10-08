import { useEffect } from "react";
import { Card } from "@/components/ui/card";

const CookiePolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background pt-24 pb-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Cookie Policy
          </h1>
          <p className="text-xl text-muted-foreground">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <Card className="p-8 bg-card border-border">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold mb-4">1. What Are Cookies</h2>
            <p className="text-muted-foreground mb-6">
              Cookies are small text files that are placed on your computer or mobile device when you 
              visit our website. They are widely used to make websites work more efficiently and 
              provide information to website owners.
            </p>

            <h2 className="text-2xl font-semibold mb-4">2. How We Use Cookies</h2>
            <p className="text-muted-foreground mb-6">
              Datenintelligenz uses cookies to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
              <li>Ensure our website functions properly and securely</li>
              <li>Remember your preferences and settings</li>
              <li>Analyze how you use our website to improve user experience</li>
              <li>Provide personalized content and recommendations</li>
              <li>Measure the effectiveness of our marketing campaigns</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">3. Types of Cookies We Use</h2>
            
            <h3 className="text-xl font-semibold mb-3">Essential Cookies</h3>
            <p className="text-muted-foreground mb-4">
              These cookies are necessary for the website to function and cannot be switched off. 
              They are usually set in response to actions made by you such as setting privacy 
              preferences, logging in, or filling in forms.
            </p>

            <h3 className="text-xl font-semibold mb-3">Performance Cookies</h3>
            <p className="text-muted-foreground mb-4">
              These cookies collect information about how visitors use our website, such as which 
              pages are visited most often. This data helps us improve how our website works.
            </p>

            <h3 className="text-xl font-semibold mb-3">Functional Cookies</h3>
            <p className="text-muted-foreground mb-4">
              These cookies allow the website to remember choices you make and provide enhanced, 
              more personal features. They may be set by us or by third-party providers.
            </p>

            <h3 className="text-xl font-semibold mb-3">Marketing Cookies</h3>
            <p className="text-muted-foreground mb-6">
              These cookies track your online activity to help advertisers deliver more relevant 
              advertising or to limit how many times you see an ad.
            </p>

            <h2 className="text-2xl font-semibold mb-4">4. Third-Party Cookies</h2>
            <p className="text-muted-foreground mb-6">
              We may use third-party services that place cookies on your device:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
              <li><strong>Google Analytics:</strong> To analyze website traffic and user behavior</li>
              <li><strong>Social Media Platforms:</strong> For social sharing and embedded content</li>
              <li><strong>Marketing Platforms:</strong> For advertising and remarketing campaigns</li>
              <li><strong>Customer Support:</strong> For chat widgets and support tools</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">5. Managing Your Cookie Preferences</h2>
            <p className="text-muted-foreground mb-6">
              You have several options to manage cookies:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
              <li>Use our cookie consent banner to adjust your preferences</li>
              <li>Configure your browser settings to block or delete cookies</li>
              <li>Use browser plugins or extensions to manage cookies</li>
              <li>Opt out of specific third-party services directly</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">6. Browser Settings</h2>
            <p className="text-muted-foreground mb-6">
              Most web browsers allow you to control cookies through their settings:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
              <li><strong>Chrome:</strong> Settings → Privacy and Security → Cookies</li>
              <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies</li>
              <li><strong>Safari:</strong> Preferences → Privacy → Cookies</li>
              <li><strong>Edge:</strong> Settings → Cookies and Site Permissions</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">7. Impact of Disabling Cookies</h2>
            <p className="text-muted-foreground mb-6">
              If you choose to disable cookies, some features of our website may not function properly:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
              <li>Login and authentication may not work</li>
              <li>Personalized content and preferences may be lost</li>
              <li>Some interactive features may be unavailable</li>
              <li>Website performance may be affected</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">8. Data Retention</h2>
            <p className="text-muted-foreground mb-6">
              Different cookies have different retention periods:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
              <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
              <li><strong>Persistent Cookies:</strong> Remain until expiry date or manual deletion</li>
              <li><strong>Analytics Cookies:</strong> Typically retained for 24 months</li>
              <li><strong>Marketing Cookies:</strong> Usually expire within 12 months</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4">9. Updates to This Policy</h2>
            <p className="text-muted-foreground mb-6">
              We may update this cookie policy from time to time to reflect changes in technology, 
              legislation, or our business practices. We will notify you of any significant changes.
            </p>

            <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
            <p className="text-muted-foreground mb-4">
              If you have questions about our use of cookies, please contact us:
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

export default CookiePolicy;
