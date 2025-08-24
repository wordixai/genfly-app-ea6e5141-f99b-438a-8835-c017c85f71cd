import { Button } from "@/components/ui/button";
import { Check, CreditCard } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Free Plan",
      price: 0,
      description: "A lightweight way to try scraping. No cost, no card, no hassle.",
      credits: "500 credits",
      features: [
        "Scrape 500 pages",
        "2 concurrent requests", 
        "Low rate limits"
      ],
      cta: "Get started",
      popular: false
    },
    {
      name: "Hobby",
      price: 16,
      description: "Great for side projects and small tools. Fast, simple, no overkill.",
      credits: "3,000 credits", 
      features: [
        "Scrape 3,000 pages",
        "5 concurrent requests",
        "Standard support"
      ],
      cta: "Subscribe",
      popular: true
    },
    {
      name: "Growth",
      price: 333,
      description: "Built for high volume and speed. Firecrawl at full force.",
      credits: "500,000 credits",
      features: [
        "Scrape 500,000 pages", 
        "100 concurrent requests",
        "Priority support"
      ],
      cta: "Subscribe",
      popular: false
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
              <CreditCard className="w-4 h-4" />
              <span className="text-sm">Transparent</span>
            </div>
            <span className="text-sm text-black-alpha-48">//</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Flexible <span className="text-heat-100">pricing</span>
          </h2>
          
          <p className="text-lg text-black-alpha-72 max-w-2xl mx-auto">
            Explore transparent pricing built for real-world scraping.{' '}
            <span className="font-semibold">Start for free, then scale as you grow.</span>
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center bg-white border border-border-faint rounded-full p-1">
            <Button variant="ghost" size="sm" className="text-black-alpha-64">
              Monthly
            </Button>
            <Button size="sm" className="bg-heat-12 text-heat-100">
              Annual
              <span className="ml-2 px-2 py-0.5 bg-heat-100 text-white text-xs rounded">20% off</span>
            </Button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-white border rounded-xl p-8 ${
                plan.popular 
                  ? 'border-heat-100 shadow-lg' 
                  : 'border-border-faint hover:border-heat-100/30'
              } transition-all duration-200`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-heat-100 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Most popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                </div>
                <p className="text-black-alpha-72 mb-4">{plan.description}</p>
                
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-4 h-4 bg-heat-100 rounded"></div>
                  <span className="font-medium">{plan.credits}</span>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  {plan.price > 0 && <span className="text-black-alpha-48">/monthly</span>}
                </div>
              </div>

              <Button 
                className={`w-full mb-6 ${
                  plan.popular ? 'btn-primary' : 'btn-secondary'
                }`}
              >
                {plan.cta}
              </Button>

              <ul className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-black-alpha-64 flex-shrink-0" />
                    <span className="text-black-alpha-72">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Enterprise */}
        <div className="mt-12 bg-gradient-to-r from-gray-50 to-gray-100 border border-border-faint rounded-xl p-8 lg:p-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
          <p className="text-lg mb-2">Power at your pace</p>
          <p className="text-black-alpha-72 mb-8">Unlimited credits. Custom RPMs.</p>
          <Button className="btn-primary">
            Contact sales
          </Button>
        </div>

        {/* Additional Credits */}
        <div className="mt-8 text-center">
          <div className="flex items-center justify-center gap-2 text-black-alpha-64">
            <CreditCard className="w-4 h-4" />
            <span>
              Additional <span className="text-accent-black font-semibold">1000</span> credits available 
              for <span className="font-semibold">$9/month.</span>{' '}
              <a href="#" className="text-heat-100 hover:underline">Purchase →</a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}