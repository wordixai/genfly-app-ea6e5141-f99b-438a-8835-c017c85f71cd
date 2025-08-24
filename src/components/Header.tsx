import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background-base border-b border-border-faint">
      <div className="container flex items-center justify-between py-5 lg:py-8">
        {/* Logo and Navigation */}
        <div className="flex items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-heat-100 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">F</span>
            </div>
            <span className="font-semibold text-lg">Firecrawl</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 ml-8">
            <Button variant="ghost" className="flex items-center gap-1">
              Products
              <ChevronDown className="w-4 h-4 opacity-60" />
            </Button>
            <Button variant="ghost">Playground</Button>
            <Button variant="ghost">Docs</Button>
            <Button variant="ghost">Pricing</Button>
            <Button variant="ghost">Blog</Button>
            <Button variant="ghost" className="flex items-center gap-1">
              Extract
              <ChevronDown className="w-4 h-4 opacity-60" />
            </Button>
            <Button variant="ghost" className="flex items-center gap-1">
              Resources
              <ChevronDown className="w-4 h-4 opacity-60" />
            </Button>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* GitHub Star Button */}
          <Button 
            variant="ghost" 
            className="hidden lg:flex items-center gap-2 btn-tertiary"
          >
            <Github className="w-4 h-4" />
            51.5K
          </Button>

          {/* Sign Up */}
          <Button className="btn-secondary">
            Sign up
          </Button>

          {/* Mobile Menu */}
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}