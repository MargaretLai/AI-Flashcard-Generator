"use client";
import React, { useState } from "react";
import Flashcard from "./Flashcard";

export default function FlashcardList() {
  const [flippedCards, setFlippedCards] = useState({});

  const handleFlip = (id) => {
    setFlippedCards((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const flashcards = [
    { id: 1, title: "Card 1", definition: "Definition 1" },
    { id: 2, title: "Card 2", definition: "Definition 2" },
    { id: 3, title: "Card 3", definition: "Definition 3" },
    { id: 4, title: "Card 4", definition: "Definition 4" },
  ];

  return (
    <div className="flex justify-center items-center flex-wrap gap-8">
      {flashcards.map((flashcard) => (
        <Flashcard
          key={flashcard.id}
          id={flashcard.id}
          title={flashcard.title}
          definition={flashcard.definition}
          isFlipped={flippedCards[flashcard.id]}
          onFlip={handleFlip}
        />
      ))}
    </div>
  );
}
