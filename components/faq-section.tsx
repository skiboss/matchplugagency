"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Do you only work with licensed operators?",
    answer:
      "No, we work with both licensed and unlicensed operators. Our proprietary cloaking technology and unlimited ad account infrastructure allows us to successfully run campaigns in grey markets while maintaining 98%+ uptime. We have geo-specific expertise across 79+ countries, whether regulated or not.",
  },
  {
    question: 'What is the "90-Day Market Share" guarantee?',
    answer:
      "Our 90-day framework is designed to deliver measurable market share gains, not just vanity metrics. We track FTDs and market position as primary KPIs. If we don't deliver the agreed-upon ROAS and FTD targets within 90 days, we continue working at reduced rates until we hit our goals. We're in this for partnership, not quick wins.",
  },
  {
    question: "How do you handle ad account bans in restricted markets?",
    answer:
      "This is our specialty. We maintain unlimited Meta ad account redundancy through our proprietary infrastructure. When one account faces issues, campaigns seamlessly transition to backup accounts with zero downtime. Combined with our advanced cloaking technology, we achieve 98%+ campaign uptime compared to the 40% industry average for aggressive campaigns.",
  },
]

export function FAQSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-[#3740BE] text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <span className="text-lg text-white uppercase tracking-wider">FAQ</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 text-balance">
            Most common question
            <br className="hidden sm:inline" /> about our services
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-dark-section-foreground/5 border-0 rounded-xl px-4 md:px-6 data-[state=open]:bg-dark-section-foreground/10"
              >
                <AccordionTrigger className="text-left hover:no-underline py-4 md:py-5 gap-4 text-white">
                  <span className="font-medium text-sm md:text-base pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-dark-section-foreground/70 pb-4 md:pb-5 text-sm md:text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
