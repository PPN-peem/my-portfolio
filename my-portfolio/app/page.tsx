// page.tsx
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-zinc-950 text-white pt-20">
      
      {/* --- เริ่มต้น Hero Section --- */}
      <section className="flex flex-col items-center justify-center text-center px-4 py-32 mt-10">
        
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl mb-6">
          Wellcome <span className="text-blue-500">to My Portfolio</span>
        </h1>
        
        <p className="text-lg text-zinc-400 max-w-2xl mb-8">
          Full-Stack Developer ที่หลงใหลในการสร้างเว็บไซต์ที่สวยงามและใช้งานง่าย 
          พร้อมเรียนรู้เทคโนโลยีใหม่ๆ อยู่เสมอ
        </p>
        
        <div className="flex space-x-4">
          <Link href="#projects">
            <Button size="lg">ดูผลงานของฉัน</Button>
          </Link>
          <Link href="#contact">
            <Button variant="outline" size="lg">ติดต่อฉัน</Button>
          </Link>
        </div>
      

      </section>
      {/* --- จบ Hero Section --- */}
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}