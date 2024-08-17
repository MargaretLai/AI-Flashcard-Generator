"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function GetStartedBtn() {
  const router = useRouter();

  function handleClick() {
    router.push("/sign-up");
  }

  return (
    <div>
      <button className="btn btn-primary" onClick={handleClick}>
        Get Started
      </button>
    </div>
  );
}
