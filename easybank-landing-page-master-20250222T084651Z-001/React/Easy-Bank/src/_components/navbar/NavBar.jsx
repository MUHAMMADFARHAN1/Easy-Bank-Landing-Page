import React from "react";
import NavItem from "./NavItem";
import Logo from "./Logo";
import Button from "./../button";
// import DashboardLink from "../DashboardLink";

export default function Navbar() {
  return (
    <nav className="flex flex-row">
      <Logo />
      <div className=" ml-[700px]">
        <NavItem label="Home" href="/" />
        <NavItem label="About" href="/about" />
        <NavItem label="Contact" href="/contact" />
        <NavItem label="Blog" href="/blog" />
        <NavItem label="Careers" href="/careers" />
      </div>
      <Button className="mt-[300px]" text="Request Invite"></Button>
    </nav>
  );
}
