// src/app/admin/page.tsx
import prisma from "@/lib/prisma";

// บังคับให้หน้าเว็บดึงข้อมูลใหม่เสมอ (ไม่จำ Cache)
export const dynamic = "force-dynamic";

export default async function AdminPage() {
  // สั่งให้ผู้จัดการโกดัง (Prisma) ไปดึงข้อความทั้งหมดมา เรียงจากใหม่สุดไปเก่าสุด
  const messages = await prisma.message.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="min-h-screen bg-zinc-950 p-8 text-white">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">📥 กล่องข้อความ (Inbox)</h1>

        {/* สร้างตารางเพื่อแสดงผลข้อความ */}
        <div className="bg-zinc-900 rounded-lg border border-zinc-800 overflow-hidden">
          <table className="w-full text-left text-sm">
            <thead className="bg-zinc-950 border-b border-zinc-800">
              <tr>
                <th className="p-4 font-medium text-zinc-400 w-32">วันที่</th>
                <th className="p-4 font-medium text-zinc-400 w-48">ชื่อ</th>
                <th className="p-4 font-medium text-zinc-400 w-64">อีเมล</th>
                <th className="p-4 font-medium text-zinc-400">ข้อความ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800">
              {messages.length === 0 ? (
                <tr>
                  <td colSpan={4} className="p-8 text-center text-zinc-500">
                    ยังไม่มีข้อความใหม่
                  </td>
                </tr>
              ) : (
                messages.map((msg) => (
                  <tr key={msg.id} className="hover:bg-zinc-800/50 transition-colors">
                    <td className="p-4 text-zinc-300">
                      {new Date(msg.createdAt).toLocaleDateString("th-TH")}
                    </td>
                    <td className="p-4 font-medium text-white">{msg.name}</td>
                    <td className="p-4 text-zinc-400">{msg.email}</td>
                    <td className="p-4 text-zinc-300">{msg.message}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}