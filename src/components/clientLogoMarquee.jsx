import React from "react";
import homePageData from "../constants/homePage.json";

function clientLogoMarquee() {
  // Extract client logos from the JSON data
  const { clientLogos } = homePageData;

  // Duplicate the logos for a seamless loop
  const duplicatedLogos = [...clientLogos, ...clientLogos];

  return (
    <div className="marquee-container">
      <div className="marquee">
        {duplicatedLogos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className="marquee-logo"
          />
        ))}
      </div>
    </div>
  );
}

export default clientLogoMarquee;