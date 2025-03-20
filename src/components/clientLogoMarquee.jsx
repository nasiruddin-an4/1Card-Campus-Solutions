import React, { useEffect, useRef } from "react";
import homePageData from "../constants/homePage.json";

function ClientLogoMarquee() {
  const { clientLogos } = homePageData;
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    const clone = marquee.innerHTML;
    marquee.innerHTML += clone;

    let scrollAmount = 0;

    const scroll = () => {
      scrollAmount -= .5;
      marquee.style.transform = `translateX(${scrollAmount}px)`;

      // Restart loop
      if (Math.abs(scrollAmount) >= marquee.scrollWidth / 2) {
        scrollAmount = 0;
      }

      requestAnimationFrame(scroll);
    };

    scroll();
  }, []);

  return (
    <div className="bg-white w-full overflow-hidden py-5 relative">
      <div ref={marqueeRef} className="flex items-center whitespace-nowrap">
        {clientLogos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className="h-[120px] mx-5"
          />
        ))}
      </div>

      {/* White fade on left */}
      <div className="bg-gradient-to-r w-32 absolute from-white inset-y-0 left-0 pointer-events-none to-transparent" />
      {/* White fade on right */}
      <div className="bg-gradient-to-l w-32 absolute from-white inset-y-0 pointer-events-none right-0 to-transparent" />
    </div>
  );
}

export default ClientLogoMarquee;
