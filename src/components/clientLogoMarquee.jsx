import React from "react";
import homePageData from "../constants/homePage.json";

function ClientLogoMarquee() {
  const { clientLogos } = homePageData;
  // Duplicate logos for seamless infinite loop
  const duplicatedLogos = [...clientLogos, ...clientLogos];

  return (
    <div className="relative w-full overflow-hidden bg-white py-5">
      <div className="flex animate-marquee whitespace-nowrap">
        {duplicatedLogos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className="h-[100px] mx-5 flex-shrink-0"
          />
        ))}
      </div>
      {/* White fade on left */}
      <div className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-white to-transparent pointer-events-none" />
      {/* White fade on right */}
      <div className="absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-white to-transparent pointer-events-none" />
    </div>
  );
}

export default ClientLogoMarquee;