import { ExternalLink } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Morgan Linton",
      handle: "@morganlinton",
      content: "If you're coding with AI, and haven't discovered @firecrawl_dev yet, prepare to have your mind blown 🤯",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
    },
    {
      name: "Chris DeWeese", 
      handle: "@chrisdeweese_",
      content: "Started using @firecrawl_dev for a project, I wish I used this sooner.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
    },
    {
      name: "Alex Reibman",
      handle: "@AlexReibman", 
      content: "Moved our internal agent's web scraping tool from Apify to Firecrawl because it benchmarked 50x faster with AgentOps.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face"
    },
    {
      name: "Tom - Morpho",
      handle: "@TomReppelin",
      content: "I found gold today. Thank you @firecrawl_dev",
      avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=40&h=40&fit=crop&crop=face"
    },
    {
      name: "Bardia",
      handle: "@thepericulum",
      content: "The Firecrawl team ships. I wanted types for their node SDK, and less than an hour later, I got them.",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=40&h=40&fit=crop&crop=face"
    },
    {
      name: "Matt Busigin",
      handle: "@mbusigin", 
      content: "Firecrawl is dope. Congrats guys 👏",
      avatar: "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=40&h=40&fit=crop&crop=face"
    },
    {
      name: "Sumanth",
      handle: "@Sumanth_077",
      content: "Web scraping will never be the same! Firecrawl is an open-source framework that takes a URL, crawls it, and conver...",
      avatar: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=40&h=40&fit=crop&crop=face"
    },
    {
      name: "Steven Tey", 
      handle: "@steventey",
      content: "Open-source Clay alternative just dropped. Upload a CSV of emails and...",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop&crop=face"
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
              <span className="text-sm">Community</span>
            </div>
            <span className="text-sm text-black-alpha-48">//</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            People love building with <span className="text-heat-100">Firecrawl</span>
          </h2>
          
          <p className="text-lg text-black-alpha-72">
            Discover why developers choose Firecrawl every day.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white border border-border-faint rounded-lg p-6 hover:border-heat-100/30 hover:shadow-lg transition-all duration-200 group cursor-pointer"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-medium">{testimonial.name}</div>
                    <div className="text-sm text-black-alpha-56">{testimonial.handle}</div>
                  </div>
                </div>
                <ExternalLink className="w-5 h-5 text-black-alpha-32 group-hover:text-heat-100 transition-colors" />
              </div>

              {/* Content */}
              <p className="text-lg leading-relaxed">
                "{testimonial.content.replace(/@firecrawl_dev|Firecrawl/g, (match) => match)}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}