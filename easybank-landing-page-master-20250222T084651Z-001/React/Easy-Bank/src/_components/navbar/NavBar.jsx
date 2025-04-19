import React from "react";
import NavItem from "./NavItem";
import Logo from "./Logo";
import Button from "./../button";
// import DashboardLink from "../DashboardLink";

export default function Navbar() {
  return (
    <nav>
      <Logo>Logo</Logo>
      <div>
        <NavItem label="Home" href="/" />
        <NavItem label="About" href="/about" />
        <NavItem label="Contact" href="/contact" />
        <NavItem label="Blog" href="/contact" />
        <NavItem label="Careers" href="/contact" />
      </div>
      <Button text="Request Invite"></Button>
    </nav>
  );
}
