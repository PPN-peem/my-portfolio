// src/lib/prisma.ts
import { PrismaClient } from "@prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";

const prismaClientSingleton = () => {
  // 1. สร้างช่องทางเชื่อมต่อ (Pool) ไปยัง Neon ด้วยลิงก์ในตู้เซฟ
  const pool = new Pool({ connectionString: process.env.DATABASE_URL });
  
  // 2. นำ Pool ไปเสียบเข้ากับตัวแปลง (Adapter) ของ Prisma
  const adapter = new PrismaPg(pool);
  
  // 3. ส่ง Adapter ให้พนักงานโกดังเริ่มทำงาน
  return new PrismaClient({ adapter });
};

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;