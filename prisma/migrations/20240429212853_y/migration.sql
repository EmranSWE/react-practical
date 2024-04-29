-- CreateTable
CREATE TABLE "products" (
    "id" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "title" TEXT,
    "image" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL,
    "price" INTEGER NOT NULL,
    "rating" INTEGER NOT NULL,
    "keyFeature" TEXT[],
    "spec" JSONB[],

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);
