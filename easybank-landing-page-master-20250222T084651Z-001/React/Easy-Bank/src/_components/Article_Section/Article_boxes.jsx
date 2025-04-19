import React from "react";

export default function Article(props) {
  return (
    <section className="grid grid-cols-2 bg-amber-50 h-[665px]">
      <img src={props.image} alt="" />
      <h1>{props.heading}</h1>
      <p>{props.para}</p>
    </section>
  );
}

// It is not recommended to send CSS taildwind classes via props
// logic can be send to select the right element for the tailwind class.
