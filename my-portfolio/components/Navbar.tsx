// src/components/Navbar.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md z-50">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        
        {/* โลโก้หรือชื่อ */}
        <Link href="/" className="text-xl font-bold text-white">
          MyPortfolio<span className="text-blue-500">.</span>
        </Link>

        {/* เมนูนำทางตรงกลาง */}
        <div className="hidden md:flex space-x-6 text-sm font-medium text-zinc-300">
          <Link href="#profile" className="hover:text-white transition-colors">ประวัติส่วนตัว (Profile)</Link>
          <Link href="#skills" className="hover:text-white transition-colors">ทักษะ (Skills)</Link>
          <Link href="#projects" className="hover:text-white transition-colors">ผลงาน (Projects)</Link>
        </div>

        {/* ปุ่มติดต่อฉัน */}
        <Link href="#contact">
          <Button variant="outline">ติดต่อฉัน</Button>
        </Link>

      </div>
    </nav>
  );
}