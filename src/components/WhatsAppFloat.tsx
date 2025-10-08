import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const WhatsAppFloat = () => {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappNumbers = [
    {
      number: "+91-83747-96351",
      link: "https://wa.me/918374796351",
      label: "Primary Support"
    },
    {
      number: "+91-98711-06515", 
      link: "https://wa.me/919871106515",
      label: "Secondary Support"
    }
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* WhatsApp Numbers Menu */}
      {isOpen && (
        <Card className="mb-4 p-4 bg-card border-border shadow-lg animate-in slide-in-from-bottom-2">
          <div className="space-y-3 min-w-[200px]">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-sm">Contact us on WhatsApp</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMenu}
                className="h-6 w-6 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            {whatsappNumbers.map((contact, index) => (
              <a
                key={index}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-secondary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <MessageCircle className="h-4 w-4 text-green-600" />
                <div>
                  <div className="text-sm font-medium">{contact.label}</div>
                  <div className="text-xs text-muted-foreground">{contact.number}</div>
                </div>
              </a>
            ))}
          </div>
        </Card>
      )}

      {/* Main WhatsApp Button */}
      <Button
        onClick={toggleMenu}
        className="h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        size="icon"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default WhatsAppFloat;
