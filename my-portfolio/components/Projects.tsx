// src/components/Projects.tsx
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Projects() {
  // ข้อมูลแบบจำลอง (Mock data) สำหรับโชว์ผลงาน คุณสามารถมาเปลี่ยนชื่อและคำอธิบายทีหลังได้ครับ
  const projects = [
    {
      title: "E-Commerce Website",
      description: "เว็บไซต์ขายของออนไลน์ครบวงจร มีระบบตะกร้าสินค้าและชำระเงิน",
      tech: "Next.js, Tailwind, Prisma",
      link: "#"
    },
    {
      title: "Task Management App",
      description: "แอปพลิเคชันจัดการงานและแจ้งเตือนสำหรับทีม",
      tech: "React, Node.js, PostgreSQL",
      link: "#"
    },
    {
      title: "Portfolio Website",
      description: "เว็บไซต์พอร์ตโฟลิโอส่วนตัว (เว็บที่คุณกำลังดูอยู่นี่แหละ!)",
      tech: "Next.js, Tailwind, shadcn/ui",
      link: "#"
    }
  ];

  return (
    // id="projects" สำหรับให้เมนูด้านบนกดแล้วเลื่อนมาหน้านี้
    <section id="projects" className="w-full py-20 bg-zinc-950">
      <div className="container mx-auto px-4">
        
        <h2 className="text-3xl font-bold text-white mb-10 text-center">ผลงานที่โดดเด่น (Projects)</h2>
        
        {/* ใช้ Grid จัดเรียงการ์ดผลงานเป็น 3 คอลัมน์ในหน้าจอคอม */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="bg-zinc-900 border-zinc-800 flex flex-col justify-between hover:border-zinc-600 transition-colors">
              <CardHeader>
                <CardTitle className="text-xl text-white">{project.title}</CardTitle>
                <CardDescription className="text-zinc-400 mt-2">{project.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <span className="text-sm text-blue-400 font-medium">เครื่องมือ: {project.tech}</span>
              </CardContent>
              
              <CardFooter>
                <Link href={project.link} className="w-full">
                  <Button variant="secondary" className="w-full">ดูรายละเอียด</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}