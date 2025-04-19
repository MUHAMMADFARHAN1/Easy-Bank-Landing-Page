import React from "react";
import Left_head from "./left_headings";
import Right_images from "./right_images";

export default function Hero() {
  return (
    <main className="grid grid-cols-2 bg-amber-50 h-[665px]">
      <Left_head />
      <Right_images />
    </main>
  );
}

// It is not recommended to send CSS taildwind classes via props
// logic can be send to select the right element for the tailwind class.
