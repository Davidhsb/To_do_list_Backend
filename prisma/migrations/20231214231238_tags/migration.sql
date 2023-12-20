-- AlterTable
ALTER TABLE "Tasks" ADD COLUMN     "tagId" INTEGER;

-- CreateTable
CREATE TABLE "Tags" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Tags_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Tags_name_key" ON "Tags"("name");

-- AddForeignKey
ALTER TABLE "Tasks" ADD CONSTRAINT "Tasks_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tags"("id") ON DELETE SET NULL ON UPDATE CASCADE;
