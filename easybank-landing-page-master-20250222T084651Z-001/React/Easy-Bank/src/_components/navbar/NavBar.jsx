import React from "react";
import NavItem from "./NavItem";
import Logo from "./Logo";
import Button from "./../button";

export default function Navbar() {
  return (
    <nav className="h-[70px]  bg-white w-[2450px] fixed z-50">
      <div className="flex flex-row  justify-between w-[1350px] pl-[40px] pt-[20px] ">
        <Logo />
        <div className=" flex flex-row ml-[40px] gap-[30px] pr-[100px]">
          <NavItem label="Home" href="/" />
          <NavItem label="About" href="/about" />
          <NavItem label="Contact" href="/contact" />
          <NavItem label="Blog" href="/blog" />
          <NavItem label="Careers" href="/careers" />
        </div>
        <Button className="mt-[300px]" text="Request Invite"></Button>
      </div>
    </nav>
  );
}

// It is not recommended to send CSS taildwind classes via props
// logic can be send to select the right element for the tailwind class.
