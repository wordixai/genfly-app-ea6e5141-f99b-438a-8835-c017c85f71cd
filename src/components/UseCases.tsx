import { Button } from "@/components/ui/button";
import { MessageCircle, Users, Search, Code } from "lucide-react";

export default function UseCases() {
  const useCases = [
    {
      icon: MessageCircle,
      title: "Smarter AI chats",
      subtitle: "Chat with context",
      description: "Power your AI assistants with real-time, accurate web content.",
      cta: "View docs",
      link: "#"
    },
    {
      icon: Users,
      title: "Lead enrichment", 
      subtitle: "Know your leads",
      description: "Enhance your sales data with web information.",
      cta: "Check out Extract",
      link: "#"
    },
    {
      icon: Code,
      title: "MCPs",
      subtitle: "Know your leads", 
      description: "Add powerful scraping to your code editors.",
      cta: "Get started",
      link: "#"
    },
    {
      icon: Search,
      title: "Deep research",
      subtitle: "No insight missed", 
      description: "Extract comprehensive information for in-depth research.",
      cta: "Build your own with Search",
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
              <div className="w-4 h-4 bg-heat-100 rounded"></div>
              <span className="text-sm">Use cases</span>
            </div>
            <span className="text-sm text-black-alpha-48">//</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 max-w-3xl mx-auto">
            Transform web data into <span className="text-heat-100">AI-powered</span> solutions
          </h2>
          
          <p className="text-lg text-black-alpha-72 mb-8">
            Discover how Firecrawl customers are getting the most out of our API.
          </p>

          <Button className="btn-primary">
            View all use cases
          </Button>
        </div>

        {/* Use Cases Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 mt-16">
          {useCases.map((useCase, index) => (
            <div key={index} className="flex flex-col lg:flex-row gap-6 lg:gap-8">
              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <useCase.icon className="w-5 h-5 text-black-alpha-64" />
                  <span className="text-sm text-black-alpha-64">{useCase.subtitle}</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-3">{useCase.title}</h3>
                <p className="text-lg text-black-alpha-72 mb-6">{useCase.description}</p>
                
                <Button variant="ghost" className="text-heat-100 hover:text-heat-90 p-0 h-auto">
                  {useCase.cta}
                  <span className="ml-2">→</span>
                </Button>
              </div>

              {/* Visual */}
              <div className="lg:w-80">
                <div className="aspect-video bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg border border-border-faint flex items-center justify-center">
                  <useCase.icon className="w-12 h-12 text-black-alpha-32" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}