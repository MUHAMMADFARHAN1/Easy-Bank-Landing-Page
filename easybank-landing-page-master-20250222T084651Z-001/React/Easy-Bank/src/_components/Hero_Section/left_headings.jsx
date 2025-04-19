import React from "react";
import Button from "./../button";

export default function left_head() {
  return (
    <section className="mt-[100px] ml-[120px]">
      <h1 className="">
        Next Generation <br /> digital banking
      </h1>
      <p className="mt-[10px] mb-[20px]">
        Take your financial life online. Your Easybank account <br />
        will be aone-stop-shop for spending, savcing,
        <br />
        budgeting, investing and much more.
      </p>
      <Button className="mt-[300px]" text="Request Invite"></Button>
    </section>
  );
}

// It is not recommended to send CSS taildwind classes via props
// logic can be send to select the right element for the tailwind class.
