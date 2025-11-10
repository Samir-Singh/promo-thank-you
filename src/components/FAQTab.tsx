import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

export default function FAQTab() {
  const [isOpen, setIsOpen] = useState(false);

  const faqs = [
    {
      question: "What are the operating hours?",
      answer: "Our coworking spaces are open 24/7, providing you with the flexibility to work at any time that suits your schedule."
    },
    {
      question: "What is included in the membership?",
      answer: "All memberships include high-speed Wi-Fi, printing facilities, complimentary tea/coffee, access to meeting rooms, and 24/7 security."
    },
    {
      question: "Is there a minimum lock-in period?",
      answer: "Yes, we have a minimum 1-month lock-in period for all our memberships to ensure quality service and community building."
    },
    {
      question: "Can I book meeting rooms separately?",
      answer: "Yes, meeting rooms can be booked hourly by both members and non-members. Members get preferential rates and booking privileges."
    },
    {
      question: "What locations are available in Mumbai?",
      answer: "We have 15+ locations across Mumbai including BKC, Lower Parel, Andheri, Powai, Ghatkopar, Thane, and many more prime business districts."
    },
    {
      question: "Do you provide business address services?",
      answer: "Yes, our Virtual Office services provide you with a premium business address, mail handling, and GSTIN registration options."
    },
    {
      question: "Is parking available at all locations?",
      answer: "Most of our locations offer parking facilities. Availability and charges may vary by location. Please check with individual centers."
    },
    {
      question: "What COVID-19 safety measures are in place?",
      answer: "We follow all government guidelines including regular sanitization, temperature checks, mask requirements, and social distancing protocols."
    }
  ];

  return (
    <div className="fixed right-0 top-20 md:top-1/2 transform md:-translate-y-1/2 z-50">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            size="lg"
            className="bg-red-500 text-white border-red-500 hover:bg-red-600 shadow-lg rounded-l-lg rounded-r-none py-8 px-0 w-8 md:w-10"
          >
            <div className="flex items-center gap-1 transform -rotate-90 whitespace-nowrap scale-90">
              <HelpCircle className="w-4 h-4" />
              <span className="font-medium text-xs">FAQs</span>
            </div>
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-primary flex items-center gap-2">
              <HelpCircle className="w-6 h-6" />
              Frequently Asked Questions
            </DialogTitle>
          </DialogHeader>
          <div className="mt-6">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-medium hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}