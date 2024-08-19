"use client";
import React, { useState, useEffect } from "react";
import Flashcard from "./Flashcard";

export default function FlashcardList({ query }) {
  const [flippedCards, setFlippedCards] = useState({});
  const [flashcards, setFlashcards] = useState([]);

  useEffect(() => {
    const fetchFlashcards = async () => {
      if (!query) {
        return;
      }
      try {
        const response = await fetch(
          `/api/flashcardContent?query=${encodeURIComponent(query)}`
        );
        const data = await response.json();
        const parsedContent = JSON.parse(data.content);
        setFlashcards(parsedContent);
      } catch (error) {
        console.error("Failed to fetch flashcards:", error);
      }
    };

    fetchFlashcards();
  }, [query]);

  const handleFlip = (id) => {
    setFlippedCards((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <div className="flex justify-center items-center flex-wrap gap-8">
      {flashcards.map((flashcard) => (
        <Flashcard
          key={flashcard.id}
          id={flashcard.id}
          title={flashcard.flashcard_front}
          definition={flashcard.flashcard_back}
          isFlipped={flippedCards[flashcard.id]}
          onFlip={handleFlip}
        />
      ))}
    </div>
  );
}
