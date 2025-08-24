import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border-faint bg-white">
      <div className="container py-16 lg:py-20">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-12">
          {/* Left: Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-heat-100 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">F</span>
              </div>
              <span className="font-semibold text-lg">Firecrawl</span>
            </div>
            <p className="text-lg font-medium mb-8">
              The easiest way to extract data from the web
            </p>

            {/* Certifications */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm text-black-alpha-64">Backed by</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-orange-500 flex items-center justify-center rounded">
                    <span className="text-white text-xs font-bold">Y</span>
                  </div>
                  <span className="font-medium">Y Combinator</span>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm text-black-alpha-64">SOC II · Type 2</span>
                  <div className="w-4 h-4 bg-blue-500 rounded"></div>
                </div>
                <div className="w-20 h-20 bg-gradient-to-b from-white to-gray-100 rounded-full flex items-center justify-center border border-border-faint">
                  <div className="text-center">
                    <div className="text-xs font-medium text-heat-100">AICPA</div>
                    <div className="text-xs text-black-alpha-48">SOC 2</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Links */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Products */}
            <div>
              <h4 className="font-medium mb-4">Products</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-black-alpha-72 hover:text-heat-100 transition-colors">Playground</a></li>
                <li><a href="#" className="text-black-alpha-72 hover:text-heat-100 transition-colors">Extract</a></li>
                <li><a href="#" className="text-black-alpha-72 hover:text-heat-100 transition-colors">Pricing</a></li>
                <li><a href="#" className="text-black-alpha-72 hover:text-heat-100 transition-colors">Templates</a></li>
                <li><a href="#" className="text-black-alpha-72 hover:text-heat-100 transition-colors">Changelog</a></li>
              </ul>
            </div>

            {/* Use Cases */}
            <div>
              <h4 className="font-medium mb-4">Use Cases</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-black-alpha-72 hover:text-heat-100 transition-colors">AI Platforms</a></li>
                <li><a href="#" className="text-black-alpha-72 hover:text-heat-100 transition-colors">Lead Enrichment</a></li>
                <li><a href="#" className="text-black-alpha-72 hover:text-heat-100 transition-colors">SEO Platforms</a></li>
                <li><a href="#" className="text-black-alpha-72 hover:text-heat-100 transition-colors">Deep Research</a></li>
              </ul>
            </div>

            {/* Documentation */}
            <div>
              <h4 className="font-medium mb-4">Documentation</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-black-alpha-72 hover:text-heat-100 transition-colors">Getting started</a></li>
                <li><a href="#" className="text-black-alpha-72 hover:text-heat-100 transition-colors">API Reference</a></li>
                <li><a href="#" className="text-black-alpha-72 hover:text-heat-100 transition-colors">Integrations</a></li>
                <li><a href="#" className="text-black-alpha-72 hover:text-heat-100 transition-colors">Examples</a></li>
                <li><a href="#" className="text-black-alpha-72 hover:text-heat-100 transition-colors">SDKs</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-medium mb-4">Company</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-black-alpha-72 hover:text-heat-100 transition-colors">Blog</a></li>
                <li><a href="#" className="text-black-alpha-72 hover:text-heat-100 transition-colors">Careers</a></li>
                <li><a href="#" className="text-black-alpha-72 hover:text-heat-100 transition-colors">Creator & OSS program</a></li>
                <li><a href="#" className="text-black-alpha-72 hover:text-heat-100 transition-colors">Student program</a></li>
              </ul>
            </div>

            {/* Social */}
            <div className="col-span-2 lg:col-span-1">
              <h4 className="font-medium mb-4">Connect</h4>
              <div className="space-y-3">
                <a href="#" className="flex items-center gap-3 text-black-alpha-72 hover:text-heat-100 transition-colors">
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
                <a href="#" className="flex items-center gap-3 text-black-alpha-72 hover:text-heat-100 transition-colors">
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
                <a href="#" className="flex items-center gap-3 text-black-alpha-72 hover:text-heat-100 transition-colors">
                  <Twitter className="w-4 h-4" />
                  X (Twitter)
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Status */}
        <div className="text-center mb-8">
          <Button variant="ghost" className="text-blue-600">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
            All systems normal
          </Button>
        </div>

        {/* Bottom */}
        <div className="flex flex-col lg:flex-row justify-between items-center pt-8 border-t border-border-faint gap-4">
          <div className="text-sm text-black-alpha-48">
            © 2025 Firecrawl
          </div>
          
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-black-alpha-72 hover:text-heat-100 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-black-alpha-72 hover:text-heat-100 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-black-alpha-72 hover:text-heat-100 transition-colors">
              Report Abuse
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}