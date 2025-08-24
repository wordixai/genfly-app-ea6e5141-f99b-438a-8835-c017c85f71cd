export default function TrustedBy() {
  const logos = [
    'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=60&fit=crop',
    'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=120&h=60&fit=crop',
    'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=60&fit=crop',
    'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=120&h=60&fit=crop',
    'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=60&fit=crop',
  ];

  return (
    <section className="border-t border-border-faint py-16">
      <div className="container">
        <div className="lg:flex items-center">
          {/* Text */}
          <div className="text-center lg:text-left lg:w-64 mb-8 lg:mb-0">
            <p className="text-lg text-accent-black">
              Trusted by{' '}
              <span className="text-heat-100 font-semibold">
                5000+ <br className="lg:hidden" />
                companies
              </span>{' '}
              of all sizes
            </p>
          </div>

          {/* Logo Cloud */}
          <div className="flex-1 lg:ml-8">
            <div className="flex items-center justify-center lg:justify-start gap-8 overflow-x-auto">
              {logos.map((logo, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 w-24 h-12 bg-gray-100 rounded border border-border-faint flex items-center justify-center"
                >
                  <img 
                    src={logo} 
                    alt={`Company ${index + 1}`}
                    className="w-full h-full object-cover rounded opacity-60 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}