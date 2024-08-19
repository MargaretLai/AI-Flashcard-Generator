import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI();

const systemRole = `
You are a teacher that knows all subjects very well. 
Your job is to generate 8 flashcards given a subject/topic.
Return the flashcards in this format (array of objects): 
[ 
{id: x,
flashcard-front: "front of flashcard",
flashcard-back: "back of flashcard"
},
...
]`;

const completion = await openai.chat.completions.create({
  model: "gpt-4o-mini",
  messages: [
    {
      role: "system",
      content: systemRole
    },
    {
      role: "user",
      content: "Calculus",
    },
  ],
});

console.log(completion.choices[0].message);

export function GET(req) {
  try {
    return NextResponse.json(completion.choices[0].message, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to retrieve posts" },
      { status: 500 }
    );
  }
}
