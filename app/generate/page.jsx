import React from "react";
import { getAuth } from "@clerk/nextjs/server";
import UserInput from "../components/UserInput";
import FlashcardList from "../components/FlashcardList";

export default function page() {
  return (
    <>
      <UserInput />
      <FlashcardList />
    </>
  );
}
