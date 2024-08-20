-- CreateTable
CREATE TABLE "savedFlashcardList" (
    "id" SERIAL NOT NULL,
    "userID" TEXT NOT NULL,
    "listName" TEXT NOT NULL,
    "flashcardIds" INTEGER[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "savedFlashcardList_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Flashcard" (
    "id" SERIAL NOT NULL,
    "flashcard_front" TEXT NOT NULL,
    "flashcard_back" TEXT NOT NULL,
    "savedFlashcardListId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Flashcard_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Flashcard" ADD CONSTRAINT "Flashcard_savedFlashcardListId_fkey" FOREIGN KEY ("savedFlashcardListId") REFERENCES "savedFlashcardList"("id") ON DELETE SET NULL ON UPDATE CASCADE;
