import React from "react";
import mockup from "../../images/image-mockups.png";
import background from "../../images/bg-intro-desktop.svg";

export default function right_images() {
  return (
    <section className="mt-[100px] ">
      <img
        className="relative left-[40px] top-[-195px] w-600 h-200"
        src={background}
        alt=""
      />
      <img
        className="absolute z-30 bottom-[-180px] left-[880px]"
        src={mockup}
        alt=""
      />
    </section>
  );
}

// It is not recommended to send CSS taildwind classes via props
// logic can be send to select the right element for the tailwind class.
