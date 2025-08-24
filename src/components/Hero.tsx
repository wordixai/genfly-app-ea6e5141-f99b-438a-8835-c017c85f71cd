import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Globe } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-24 lg:pt-32 lg:pb-32">
      {/* Announcement Banner */}
      <div className="container mb-8 lg:mb-12">
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-3 bg-black-alpha-4 rounded-full px-4 py-2 text-sm hover:bg-black-alpha-7 transition-colors cursor-pointer">
            <span>2 Months Free — Annually</span>
            <div className="w-6 h-6 bg-accent-black rounded-full flex items-center justify-center">
              <ArrowRight className="w-3 h-3 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="container text-center">
        <h1 className="text-4xl lg:text-6xl font-bold mb-6 lg:mb-8 leading-tight">
          Turn websites into <br className="hidden lg:block" />
          <span className="text-heat-100">LLM-ready</span> data
        </h1>
        
        <p className="text-lg lg:text-xl text-black-alpha-72 mb-12 lg:mb-16 max-w-2xl mx-auto">
          Power your AI apps with clean data crawled<br className="hidden lg:block" />
          from any website.
          <Button 
            variant="ghost" 
            className="bg-black-alpha-4 hover:bg-black-alpha-7 ml-2 lg:ml-4 rounded-md px-3 py-1 text-sm"
          >
            It's also open source.
          </Button>
        </p>

        {/* Hero Input */}
        <div className="max-w-lg mx-auto mb-16 lg:mb-24">
          <div className="bg-white rounded-xl shadow-lg border border-border-faint overflow-hidden">
            <div className="flex items-center gap-3 p-4 border-b border-border-faint">
              <Globe className="w-5 h-5 text-black-alpha-48" />
              <Input 
                placeholder="https://example.com"
                className="border-0 shadow-none text-base focus-visible:ring-0"
              />
            </div>
            
            {/* Tab Selection */}
            <div className="p-3 flex items-center justify-between">
              <div className="hidden lg:flex items-center bg-black-alpha-4 rounded-lg p-1">
                <Button size="sm" className="bg-white shadow-sm">
                  <span className="w-4 h-4 mr-2 bg-heat-100 rounded"></span>
                  Scrape
                </Button>
                <Button variant="ghost" size="sm" className="text-black-alpha-56">
                  <span className="w-4 h-4 mr-2 bg-gray-300 rounded"></span>
                  Search
                  <span className="ml-2 px-2 py-0.5 bg-heat-12 text-heat-100 text-xs rounded">New</span>
                </Button>
                <Button variant="ghost" size="sm" className="text-black-alpha-56">
                  <span className="w-4 h-4 mr-2 bg-gray-300 rounded"></span>
                  Map
                </Button>
                <Button variant="ghost" size="sm" className="text-black-alpha-56">
                  <span className="w-4 h-4 mr-2 bg-gray-300 rounded"></span>
                  Crawl
                </Button>
              </div>

              <Button className="btn-primary ml-auto">
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Demo */}
      <div className="container relative">
        <div className="max-w-4xl mx-auto">
          {/* Browser Window */}
          <div className="bg-white rounded-t-xl border border-border-faint shadow-xl">
            {/* Browser Header */}
            <div className="flex items-center gap-2 p-4 border-b border-border-faint">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="flex-1 ml-4">
                <div className="bg-gray-100 rounded px-3 py-1 text-sm text-gray-600 max-w-xs">
                  firecrawl.dev
                </div>
              </div>
            </div>

            {/* Split View */}
            <div className="grid lg:grid-cols-2">
              {/* Left: Website Preview */}
              <div className="p-6 lg:p-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                    <div className="h-3 bg-gray-200 rounded w-32"></div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  </div>

                  <div className="flex gap-2 mt-6">
                    <div className="h-8 bg-gray-200 rounded w-20"></div>
                    <div className="h-8 bg-gray-200 rounded w-16"></div>
                    <div className="h-8 bg-gray-200 rounded w-24"></div>
                  </div>
                </div>
              </div>

              {/* Right: JSON Output */}
              <div className="border-l border-border-faint">
                <div className="flex items-center justify-between p-4 border-b border-border-faint">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                    <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                    <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                  </div>
                  <span className="text-xs font-mono text-black-alpha-48">[ .JSON ]</span>
                </div>
                
                <div className="p-4 font-mono text-sm">
                  <pre className="text-black-alpha-72">
{`[
  {
    "url": "https://example.com",
    "markdown": "# Example Site\\n\\nContent here...",
    "json": { "title": "Example", "desc": "..." },
    "screenshot": "base64-image-data.png"
  }
]`}
                  </pre>
                </div>

                <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-white rounded-full px-3 py-1 shadow border">
                  <div className="w-4 h-4 bg-heat-100 rounded animate-spin"></div>
                  <span className="text-sm">Scraping...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}