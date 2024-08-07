-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN', 'DEVELOPER');

-- CreateEnum
CREATE TYPE "EventType" AS ENUM ('ERROR', 'USER', 'ADMIN', 'VISITOR', 'DEVELOPER', 'PURCHASE', 'MINING', 'TEST');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Setting" (
    "id" TEXT NOT NULL,
    "displayLongitudeAndLatitude" BOOLEAN NOT NULL DEFAULT false,
    "includeLongitudeAndLatitudeText" BOOLEAN NOT NULL DEFAULT false,
    "selectedStyle" TEXT NOT NULL,
    "rightQatMenu" BOOLEAN NOT NULL DEFAULT true,
    "settingsMenuIsOpen" BOOLEAN NOT NULL DEFAULT false,
    "statisticsContainer" BOOLEAN NOT NULL DEFAULT true,
    "welcomeContainer" BOOLEAN NOT NULL DEFAULT false,
    "helpContainer" BOOLEAN NOT NULL DEFAULT false,
    "imagesContainer" BOOLEAN NOT NULL DEFAULT false,
    "animatedSea" BOOLEAN NOT NULL DEFAULT true,
    "antarcticaMode" BOOLEAN NOT NULL DEFAULT false,
    "mouseOverContainerActive" BOOLEAN NOT NULL DEFAULT true,
    "realTimeSettings" BOOLEAN NOT NULL DEFAULT true,
    "countryInfoDisplayIsOpen" BOOLEAN NOT NULL DEFAULT false,
    "countryListContainer" BOOLEAN NOT NULL DEFAULT false,
    "countriesVisited" TEXT[],
    "countrySelected" TEXT,
    "sunAndMoon" BOOLEAN NOT NULL DEFAULT true,
    "displayCountryNames" BOOLEAN NOT NULL DEFAULT true,
    "isMuted" BOOLEAN NOT NULL DEFAULT true,
    "visitedVisible" BOOLEAN NOT NULL DEFAULT true,
    "unvisitedVisible" BOOLEAN NOT NULL DEFAULT true,
    "firstVisitToSite" BOOLEAN NOT NULL DEFAULT true,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Setting_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profile" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "instagramId" TEXT,
    "customHashtag" TEXT,
    "firstName" TEXT,
    "lastName" TEXT,
    "preferedName" TEXT,
    "gender" TEXT,
    "countryOfBirth" TEXT,
    "favoriteCountry" TEXT,
    "hobbies" TEXT,
    "specialHashtags" TEXT,
    "hiddenHashtags" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Event" (
    "id" TEXT NOT NULL,
    "type" "EventType" NOT NULL,
    "topic" TEXT,
    "code" INTEGER,
    "content" TEXT,
    "createdById" TEXT,
    "receivedById" TEXT,
    "viewed" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Setting_userId_key" ON "Setting"("userId");

-- AddForeignKey
ALTER TABLE "Setting" ADD CONSTRAINT "Setting_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_receivedById_fkey" FOREIGN KEY ("receivedById") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
