-- CreateTable
CREATE TABLE "Assisted" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "social_name" TEXT,
    "mother_name" TEXT,
    "father_name" TEXT,
    "sex" TEXT,
    "birth_data" TEXT,
    "nationality" TEXT,
    "phone_number" TEXT,
    "city_residence" TEXT,
    "rg" TEXT,
    "org_e" TEXT,
    "uf" TEXT,
    "dt_e" TEXT,
    "cpf" TEXT,
    "reservist" TEXT,
    "work_wallet" TEXT,
    "birth_cert" TEXT,
    "nis" TEXT,
    "benefits" TEXT,
    "situation" TEXT NOT NULL,
    "schooling" TEXT,
    "relactory" TEXT NOT NULL,

    CONSTRAINT "Assisted_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Familiar" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "phone_number" TEXT,
    "assistedId" INTEGER,

    CONSTRAINT "Familiar_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Evolution" (
    "id" SERIAL NOT NULL,
    "data" TEXT NOT NULL,
    "demand" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'CONCLUIDO',
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "assistedId" INTEGER,
    "userId" INTEGER,

    CONSTRAINT "Evolution_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "assignment" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- AddForeignKey
ALTER TABLE "Familiar" ADD CONSTRAINT "Familiar_assistedId_fkey" FOREIGN KEY ("assistedId") REFERENCES "Assisted"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Evolution" ADD CONSTRAINT "Evolution_assistedId_fkey" FOREIGN KEY ("assistedId") REFERENCES "Assisted"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Evolution" ADD CONSTRAINT "Evolution_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
