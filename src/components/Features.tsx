import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Zap, Shield, FileText, Clock, MousePointer } from "lucide-react";

export default function Features() {
  return (
    <section className="py-16 lg:py-24 border-t border-border-faint">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-sm text-black-alpha-48">//</span>
            <div className="flex items-center gap-2">
              <Code className="w-4 h-4" />
              <span className="text-sm">Developer First</span>
            </div>
            <span className="text-sm text-black-alpha-48">//</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Start <span className="text-heat-100">scraping</span> today
          </h2>
          
          <p className="text-lg text-black-alpha-72 max-w-2xl mx-auto">
            Enhance your apps with industry leading web scraping and crawling capabilities.
          </p>
        </div>

        {/* Feature Tabs */}
        <Tabs defaultValue="scrape" className="w-full">
          <TabsList className="grid w-full grid-cols-3 lg:max-w-md mx-auto mb-12">
            <TabsTrigger value="scrape" className="flex items-center gap-2">
              <div className="w-4 h-4 bg-heat-100 rounded"></div>
              Scrape
            </TabsTrigger>
            <TabsTrigger value="search" className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gray-300 rounded"></div>
              Search
              <span className="ml-1 px-1.5 py-0.5 bg-heat-12 text-heat-100 text-xs rounded">New</span>
            </TabsTrigger>
            <TabsTrigger value="crawl" className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gray-300 rounded"></div>
              Crawl
            </TabsTrigger>
          </TabsList>

          <TabsContent value="scrape">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Code Example */}
              <div>
                <div className="bg-black rounded-lg p-6 text-sm font-mono">
                  <div className="text-green-400"># pip install firecrawl-py</div>
                  <div className="text-blue-400 mt-2">from firecrawl import Firecrawl</div>
                  <div className="mt-4">
                    <span className="text-yellow-400">app</span> = 
                    <span className="text-blue-400">Firecrawl</span>
                    <span className="text-gray-400">(api_key=</span>
                    <span className="text-green-400">"fc-YOUR_API_KEY"</span>
                    <span className="text-gray-400">)</span>
                  </div>
                  <div className="mt-4 text-green-400"># Scrape a website:</div>
                  <div className="mt-2">
                    <span className="text-yellow-400">app</span>
                    <span className="text-gray-400">.</span>
                    <span className="text-blue-400">scrape</span>
                    <span className="text-gray-400">(</span>
                    <span className="text-green-400">'firecrawl.dev'</span>
                    <span className="text-gray-400">)</span>
                  </div>
                </div>
              </div>

              {/* Output Example */}
              <div>
                <div className="bg-white border border-border-faint rounded-lg">
                  <div className="flex items-center justify-between p-4 border-b border-border-faint">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                      <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                      <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                    </div>
                    <span className="text-xs font-mono text-black-alpha-48">[ .MD ]</span>
                  </div>
                  
                  <div className="p-4 font-mono text-sm">
                    <div className="text-xl font-bold mb-2"># Firecrawl</div>
                    <div className="text-gray-600">
                      Firecrawl is a powerful web scraping<br />
                      library that makes it easy to extract<br />
                      data from websites.
                    </div>
                    <div className="mt-4 font-bold">## Installation</div>
                    <div className="text-gray-600 mt-2">
                      To install Firecrawl, run:
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="search">
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold mb-4">Search the Web</h3>
              <p className="text-lg text-black-alpha-72">
                Search the web and get full content from results with our new Search feature.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="crawl">
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold mb-4">Crawl Entire Sites</h3>
              <p className="text-lg text-black-alpha-72">
                Crawl all the pages on a website and get data for each page.
              </p>
            </div>
          </TabsContent>
        </Tabs>

        {/* Language Selection */}
        <div className="flex justify-center mt-8">
          <div className="flex items-center bg-white border border-border-faint rounded-full p-1">
            <Button size="sm" className="bg-heat-12 text-heat-100">
              <div className="w-4 h-4 mr-2 bg-yellow-400 rounded"></div>
              Python
            </Button>
            <Button variant="ghost" size="sm">
              <div className="w-4 h-4 mr-2 bg-green-400 rounded"></div>
              Node.js
            </Button>
            <Button variant="ghost" size="sm">
              <div className="w-4 h-4 mr-2 bg-blue-400 rounded"></div>
              Curl
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}