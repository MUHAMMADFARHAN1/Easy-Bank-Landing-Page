import React from "react";

function NavItem({ href, label = "Link" }) {
  return (
    <li>
      <a href={href}>{label}</a>
    </li>
  );
}

export default NavItem;
