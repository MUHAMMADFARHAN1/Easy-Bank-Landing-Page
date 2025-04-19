import React from "react";
import NavItem from "./NavItem";
import Logo from "./Logo";
import Button from "./../button";
// import DashboardLink from "../DashboardLink";

export default function Navbar() {
  return (
    <nav className="flex flex-row  justify-between w-[1450px] ml-[40px] mt-[20px] fixed">
      <Logo />
      <div className=" flex flex-row ml-[40px] gap-[30px]">
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

// It is not recommended to send CSS taildwind classes via props
// logic can be send to select the right element for the tailwind class.
