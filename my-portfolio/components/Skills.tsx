// src/components/Skills.tsx
import { Card, CardContent } from "@/components/ui/card";

export default function Skills() {
  // รายชื่อทักษะ (คุณสามารถแก้ไขเพิ่มลดคำในวงเล็บนี้ได้เลยครับ)
  const skills = [
    "HTML / CSS", 
    "JavaScript", 
    "TypeScript",
    "React", 
    "Next.js 15", 
    "Tailwind CSS",
    "Node.js", 
    "PostgreSQL", 
    "Git / GitHub"
  ];

  return (
    // id="skills" มีไว้เพื่อให้ปุ่มเมนูด้านบนกดแล้วเลื่อนเมาส์ลงมาหาหน้านี้ได้ครับ
    <section id="skills" className="w-full py-20 bg-zinc-900/50">
      <div className="container mx-auto px-4 text-center">
        
        <h2 className="text-3xl font-bold text-white mb-10">ทักษะความเชี่ยวชาญ (Skills)</h2>
        
        {/* ใช้ Grid ในการจัดเรียงการ์ดทักษะให้สวยงาม */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <Card key={index} className="bg-zinc-950 border-zinc-800 hover:border-blue-500 transition-colors">
              <CardContent className="p-4 flex items-center justify-center text-zinc-300 font-medium">
                {skill}
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}