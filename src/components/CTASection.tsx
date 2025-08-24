import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="py-16 lg:py-24 border-t border-border-faint bg-gradient-to-br from-gray-50 to-white">
      <div className="container text-center">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-sm text-black-alpha-48">//</span>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-heat-100 rounded"></div>
              <span className="text-sm">Get started</span>
            </div>
            <span className="text-sm text-black-alpha-48">//</span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to build?
          </h2>
          
          <p className="text-lg text-black-alpha-72 mb-8">
            Kick off your journey for free and scale seamlessly as your project expands.{' '}
            <span className="font-semibold">No credit card needed.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-primary">
              Start for free
            </Button>
            <Button className="btn-secondary">
              See our plans
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}