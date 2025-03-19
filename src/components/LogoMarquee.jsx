import { motion } from 'framer-motion';

const LogoMarquee = () => {
  const logos = [
    'https://placehold.co/200x80?text=Client+1',
    'https://placehold.co/200x80?text=Client+2',
    'https://placehold.co/200x80?text=Client+3',
    'https://placehold.co/200x80?text=Client+4',
    'https://placehold.co/200x80?text=Client+5',
    'https://placehold.co/200x80?text=Client+6',
  ];

  return (
    <section className="py-12 bg-gray-50 overflow-hidden" id="partners">
      <div className="container">
        <h2 className="text-2xl font-bold text-center text-dark mb-8">
          Trusted by Leading Institutions
        </h2>
        
        <div className="flex justify-center items-center mb-8">
          <img
            src="https://placehold.co/300x120?text=Main+Logo"
            alt="Main Logo"
            className="w-[300px]"
          />
        </div>

        <div className="relative flex">
          {/* Left to Right Marquee */}
          <div className="w-1/2 overflow-hidden">
            <div className="flex space-x-8 animate-marquee-left">
              {[...logos, ...logos].map((logo, index) => (
                <div
                  key={`left-${index}`}
                  className="flex-shrink-0 w-[150px] h-16 flex items-center justify-center"
                >
                  <img src={logo} alt={`Client Logo ${index + 1}`} className="max-w-full h-auto" />
                </div>
              ))}
            </div>
          </div>

          {/* Right to Left Marquee */}
          <div className="w-1/2 overflow-hidden">
            <div className="flex space-x-8 animate-marquee-right">
              {[...logos, ...logos].map((logo, index) => (
                <div
                  key={`right-${index}`}
                  className="flex-shrink-0 w-[150px] h-16 flex items-center justify-center"
                >
                  <img src={logo} alt={`Client Logo ${index + 1}`} className="max-w-full h-auto" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;