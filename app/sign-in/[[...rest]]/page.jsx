import React from "react";
import { SignIn } from "@clerk/nextjs";

export default function page() {
  return (
    <div className="sign-in-box">
      <SignIn />
    </div>
  );
}
