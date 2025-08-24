import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqSections = [
    {
      title: "General",
      questions: [
        {
          question: "What is Firecrawl?",
          answer: "Firecrawl is a powerful web scraping and crawling platform that turns websites into LLM-ready data. It provides clean, structured data extraction with support for JavaScript-heavy sites."
        },
        {
          question: "What sites work?",
          answer: "Firecrawl works with 96% of websites, including JavaScript-heavy sites, SPAs, and protected content. It handles dynamic content, authentication challenges, and complex site structures."
        },
        {
          question: "Who can benefit from using Firecrawl?",
          answer: "Developers building AI applications, data scientists, researchers, sales teams doing lead enrichment, and anyone who needs reliable web data extraction."
        },
        {
          question: "Is Firecrawl open-source?",
          answer: "Yes! Firecrawl is open-source and available on GitHub. You can self-host it or use our managed cloud service for additional features and reliability."
        }
      ]
    },
    {
      title: "Scraping & Crawling", 
      questions: [
        {
          question: "How does Firecrawl handle dynamic content on websites?",
          answer: "Firecrawl uses advanced browser automation to render JavaScript content, wait for dynamic elements to load, and extract data from fully rendered pages."
        },
        {
          question: "Why is it not crawling all the pages?",
          answer: "This could be due to rate limits, robots.txt restrictions, or site-specific blocking. Check your crawl settings and consider using our stealth mode for better results."
        },
        {
          question: "Can Firecrawl crawl websites without a sitemap?",
          answer: "Yes, Firecrawl can discover and crawl pages even without a sitemap by following links and analyzing site structure automatically."
        }
      ]
    }
  ];

  return (
    <section className="py-16 lg:py-24 border-t border-border-faint">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-sm text-black-alpha-48">//</span>
            <div className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-heat-100" />
              <span className="text-sm">FAQ</span>
            </div>
            <span className="text-sm text-black-alpha-48">//</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Frequently asked <span className="text-heat-100">questions</span>
          </h2>
          
          <p className="text-lg text-black-alpha-72">
            Everything you need to know about Firecrawl.
          </p>
        </div>

        {/* FAQ Sections */}
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {faqSections.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <h3 className="text-xl font-bold mb-6 pb-4 border-b border-border-faint">
                  {section.title}
                </h3>
                
                <Accordion type="single" collapsible className="w-full">
                  {section.questions.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${sectionIndex}-${index}`}>
                      <AccordionTrigger className="text-left font-medium">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-black-alpha-72">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}