import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar bg-neutral text-neutral-content">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl">FlashcardPlus</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/sign-up">Sign Up</Link>
          </li>
          <li>
            <Link href="/sign-in">Sign In</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
