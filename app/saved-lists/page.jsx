"use client";
import React, { useEffect, useState } from "react";
import { useAuth } from "@clerk/nextjs";

export default function SavedLists() {
  const { userId } = useAuth();
  const [savedLists, setSavedLists] = useState([]);

  useEffect(() => {
    const fetchSavedLists = async () => {
      try {
        const response = await fetch(`/api/savedLists`);
        const data = await response.json();
        setSavedLists(data);
      } catch (error) {
        console.error("Failed to fetch saved flashcard lists:", error);
      }
    };

    if (userId) {
      fetchSavedLists();
    }
  }, [userId]);

  return (
    <>
      <div className="flex justify-center items-center flex-wrap gap-8 p-8">
        {savedLists.length > 0 ? (
          savedLists.map((list) => (
            <div key={list.id} className="card bg-base-100 w-96 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">{list.listName}</h2>
                <div className="mt-4">
                  {list.flashcards.map((flashcard) => (
                    <p key={flashcard.id}>{flashcard.frontContent}</p>
                  ))}
                </div>
                <div className="card-actions justify-end mt-4">
                  <button className="btn btn-primary">View Details</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No saved flashcards found.</p>
        )}
      </div>
    </>
  );
}
