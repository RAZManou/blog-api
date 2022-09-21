-- CreateTable
CREATE TABLE "Blog" (
    "id" SERIAL NOT NULL,
    "coverUri" TEXT,
    "title" TEXT NOT NULL,
    "subTitle" TEXT NOT NULL,
    "categories" TEXT[],
    "tags" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Blog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Content" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "blogId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Content_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "authorEmail" TEXT,
    "blogId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BlogMember" (
    "email" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "BlogMember_pkey" PRIMARY KEY ("email")
);

-- CreateTable
CREATE TABLE "_BlogToBlogMember" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_BlogToBlogMember_AB_unique" ON "_BlogToBlogMember"("A", "B");

-- CreateIndex
CREATE INDEX "_BlogToBlogMember_B_index" ON "_BlogToBlogMember"("B");

-- AddForeignKey
ALTER TABLE "Content" ADD CONSTRAINT "Content_blogId_fkey" FOREIGN KEY ("blogId") REFERENCES "Blog"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_blogId_fkey" FOREIGN KEY ("blogId") REFERENCES "Blog"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_authorEmail_fkey" FOREIGN KEY ("authorEmail") REFERENCES "BlogMember"("email") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BlogToBlogMember" ADD CONSTRAINT "_BlogToBlogMember_A_fkey" FOREIGN KEY ("A") REFERENCES "Blog"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BlogToBlogMember" ADD CONSTRAINT "_BlogToBlogMember_B_fkey" FOREIGN KEY ("B") REFERENCES "BlogMember"("email") ON DELETE CASCADE ON UPDATE CASCADE;
