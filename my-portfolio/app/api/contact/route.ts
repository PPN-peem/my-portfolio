// src/app/api/contact/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    // บันทึกลงฐานข้อมูล
    await prisma.message.create({
      data: { name, email, message },
    });

    // ส่งสถานะ 200 กลับไปว่าสำเร็จ
    return NextResponse.json({ success: true }, { status: 200 });
    
  } catch (error) {
    console.error("Error saving message:", error);
    return NextResponse.json(
      { success: false, error: "เกิดข้อผิดพลาด" },
      { status: 500 }
    );
  }
}