import React from "react";
import Article from "./Article_boxes";

export default function Article_Section() {
  return (
    <main className="grid grid-cols-2 bg-amber-50 h-[665px]">
      <Article />
    </main>
  );
}

// It is not recommended to send CSS taildwind classes via props
// logic can be send to select the right element for the tailwind class.
