import { Button } from "@/components/ui/button";
import { FileText, Clock, Shield, MousePointer, ExternalLink } from "lucide-react";

export default function MainFeatures() {
  const features = [
    {
      icon: FileText,
      title: "Media parsing",
      description: "Docs to data",
      detail: "Firecrawl can parse and output content from web hosted pdfs, docx, and more.",
      link: "#"
    },
    {
      icon: Clock,
      title: "Smart wait",
      description: "Knows the moment",
      detail: "Firecrawl intelligently waits for content to load, making scraping faster and more reliable.",
      link: "#"
    },
    {
      icon: Shield,
      title: "Cached, when you need it",
      description: "Scrapes the real thing",
      detail: "Selective caching, you choose your caching patterns, growing web index.",
      link: "#"
    },
    {
      icon: MousePointer,
      title: "Actions",
      description: "Interactive scraping",
      detail: "Click, scroll, write, wait, press and more before extracting content.",
      link: "#"
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
              <div className="w-4 h-4 bg-heat-100 rounded-full"></div>
              <span className="text-sm">Zero configuration</span>
            </div>
            <span className="text-sm text-black-alpha-48">//</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            We handle the <span className="text-heat-100">hard stuff</span>
          </h2>
          
          <p className="text-lg text-black-alpha-72">
            Rotating proxies, orchestration, rate limits, js-blocked content and more.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {features.map((feature, index) => (
            <div key={index} className="feature-card group hover:border-heat-100/20">
              <div className="flex items-center gap-3 mb-4">
                <feature.icon className="w-5 h-5 text-black-alpha-64" />
                <span className="text-sm text-black-alpha-64">{feature.description}</span>
              </div>
              
              <h3 className="text-xl font-bold mb-3">
                <span className="text-heat-100">{feature.title.split('.')[0]}.</span>{' '}
                {feature.detail}
              </h3>

              <Button variant="ghost" className="group-hover:text-heat-100 p-0 h-auto">
                Learn more
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>
          ))}
        </div>

        {/* Interactive Actions Grid */}
        <div className="mt-16 lg:mt-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Navigate', icon: ExternalLink },
              { name: 'Click', icon: MousePointer },
              { name: 'Type', icon: FileText },
              { name: 'Wait', icon: Clock },
              { name: 'Scroll', icon: FileText },
              { name: 'Press', icon: FileText },
              { name: 'Screenshot', icon: FileText },
              { name: 'Scrape', icon: FileText },
            ].map((action, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 mx-auto mb-3 border border-border-faint rounded-full flex items-center justify-center group-hover:bg-heat-12 group-hover:border-heat-100/30 transition-all">
                  <action.icon className="w-5 h-5 text-black-alpha-64 group-hover:text-heat-100" />
                </div>
                <span className="text-sm font-medium">{action.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}