import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQSection() {
  const faqs = [
    {
      question: "Is there a lock-in period for memberships?",
      answer: "Yes, all coworking memberships come with a minimum lock-in of one month. This ensures you get the best value from our workspace solutions while maintaining flexibility."
    },
    {
      question: "Is Wi-Fi included in my plan?",
      answer: "Yes. Every plan includes high-speed Wi-Fi with smooth tech support to keep you connected at all times. Our enterprise-grade internet ensures seamless video calls and fast downloads."
    },
    {
      question: "Can I choose my own seat?",
      answer: "Yes, you can select from all available seats at your centre. We offer both hot desks for flexibility and dedicated desks for consistency, depending on your membership type."
    },
    {
      question: "Can I upgrade from a hot desk to a dedicated desk or cabin?",
      answer: "Yes. Upgrades are assisted by our team to ensure a smooth transition. You can upgrade at any time during your membership period with pro-rated pricing."
    },
    {
      question: "Is parking available?",
      answer: "Yes, parking is free and provided as required at our centres. Most locations offer ample parking space for cars and two-wheelers."
    },
    {
      question: "Do centres have cafés or food options?",
      answer: "Yes, every Awfis centre has an in-house all-day café. Plus, members get up to 15% discount on in-app purchases. We offer fresh meals, snacks, and beverages throughout the day."
    },
    {
      question: "What payment modes are accepted?",
      answer: "We accept all major payment modes except cash, including UPI, credit/debit cards, net banking, and invoicing. Corporate clients can also set up monthly invoicing."
    },
    {
      question: "How does the billing cycle work?",
      answer: "Payments are made on a monthly basis. Your billing cycle starts from your membership start date and renews automatically unless cancelled with proper notice."
    },
    {
      question: "What is the cancellation policy?",
      answer: "You can cancel your membership with 30 days' notice. For detailed cancellation terms and conditions, please refer to our membership agreement or contact our support team."
    },
    {
      question: "Can I bring guests or clients for meetings?",
      answer: "Yes, members can host guests or clients free of cost. We also offer dedicated meeting rooms that can be booked hourly for more formal presentations and discussions."
    }
  ];

  return (
    <section className="py-16 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about Awfis coworking spaces
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-lg shadow-soft border-0 overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-foreground hover:text-primary transition-colors duration-200 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}