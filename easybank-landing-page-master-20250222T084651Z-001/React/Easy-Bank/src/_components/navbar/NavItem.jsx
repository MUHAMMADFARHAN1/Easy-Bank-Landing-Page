import React from "react";

function NavItem({ href, label = "Link" }) {
  return (
      <a href={href}>{label}</a>
  );
}

export default NavItem;
