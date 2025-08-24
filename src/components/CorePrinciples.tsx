import { Button } from "@/components/ui/button";
import { Shield, Zap, Lock } from "lucide-react";

export default function CorePrinciples() {
  return (
    <section className="py-16 lg:py-24 border-t border-border-faint">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-sm text-black-alpha-48">//</span>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              <span className="text-sm">Built to outperform</span>
            </div>
            <span className="text-sm text-black-alpha-48">//</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Core principles, <br /> proven <span className="text-heat-100">performance</span>
          </h2>
          
          <p className="text-lg text-black-alpha-72">
            Built from the ground up to outperform traditional scrapers.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Reliability */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-5 h-5 text-black-alpha-64" />
                <span className="text-sm text-black-alpha-64">No proxy headaches</span>
              </div>
              
              <h3 className="text-xl font-bold mb-3">
                <span className="text-heat-100">Reliable.</span> Covers 96% of the web, 
                including JS-heavy and protected pages. No proxies, no puppets, just clean data.
              </h3>
            </div>

            {/* Performance Comparison */}
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 px-4 border border-border-faint rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-heat-100 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">F</span>
                  </div>
                  <span>Firecrawl</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div className="w-[92%] bg-heat-100 h-2 rounded-full"></div>
                  </div>
                  <span className="text-sm font-mono">92%</span>
                </div>
              </div>

              <div className="flex items-center justify-between py-3 px-4 border border-border-faint rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
                  <span>Puppeteer</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div className="w-[77%] bg-gray-400 h-2 rounded-full"></div>
                  </div>
                  <span className="text-sm font-mono">77%</span>
                </div>
              </div>

              <div className="flex items-center justify-between py-3 px-4 border border-border-faint rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
                  <span>cURL</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div className="w-[73%] bg-gray-400 h-2 rounded-full"></div>
                  </div>
                  <span className="text-sm font-mono">73%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Speed */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-5 h-5 text-black-alpha-64" />
                <span className="text-sm text-black-alpha-64">Speed that feels invisible</span>
              </div>
              
              <h3 className="text-xl font-bold mb-3">
                <span className="text-heat-100">Blazingly fast.</span> Delivers results in less than 1 second, 
                fast for real-time agents and dynamic apps.
              </h3>
            </div>

            {/* Speed Metrics */}
            <div className="bg-white border border-border-faint rounded-lg overflow-hidden">
              <div className="grid grid-cols-3 gap-4 p-4 border-b border-border-faint text-sm text-black-alpha-64">
                <span>URL</span>
                <span>Crawl</span>
                <span>Scrape</span>
              </div>

              {[
                { path: '/contact', crawl: '779', scrape: '796' },
                { path: '/partners', crawl: '714', scrape: '779' },
                { path: '/support', crawl: '51', scrape: '50' },
                { path: '/docs', crawl: '50', scrape: '51' },
                { path: '/playground', crawl: '52', scrape: '49' },
              ].map((item, index) => (
                <div key={index} className="grid grid-cols-3 gap-4 p-3 text-sm border-b border-border-faint last:border-b-0">
                  <span>
                    <span className="text-black-alpha-48">firecrawl.dev</span>
                    <span className="text-accent-black">{item.path}</span>
                  </span>
                  <span>
                    <span className="font-mono">{item.crawl}</span>
                    <span className="text-black-alpha-48 ml-1">ms</span>
                  </span>
                  <span>
                    <span className="font-mono">{item.scrape}</span>
                    <span className="text-black-alpha-48 ml-1">ms</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}