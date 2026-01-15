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
    <section className="py-12 md:py-16 lg:py-18 bg-[#3740BE] text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-8 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-medium text-balance">
            Most common question
            <br className="hidden sm:inline" /> about our services
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3 md:space-y-6">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-[20px] border px-4 md:px-6"
                style={{
                  border: "0px solid",
                  borderImageSource: "linear-gradient(90deg, #475CBC -4.04%, #34A853 105.66%)",
                  borderImageSlice: 1,
                  background: "linear-gradient(180deg, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0.08) 100%)",
                }}
              >
                <AccordionTrigger className="text-left hover:no-underline py-4 md:py-5 gap-4 text-white [&_svg]:w-6 [&_svg]:h-6 md:[&_svg]:w-8 md:[&_svg]:h-8">
                  <span className="font-normal text-sm md:text-2xl pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-dark-section-foreground/70 pb-4 md:pb-5 text-sm md:text-2xl">
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
