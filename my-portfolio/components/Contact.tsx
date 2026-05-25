"use client";

import { useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);

    // เก็บ form reference ก่อน await
    const form = e.currentTarget;

    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "เกิดข้อผิดพลาด");
      }

      toast.success("ส่งข้อความสำเร็จแล้ว! ขอบคุณที่ติดต่อมาครับ");

      // reset หลังส่งสำเร็จ
      form.reset();

    } catch (error) {
      console.error("Contact form error:", error);

      toast.error("ระบบมีปัญหา กรุณาลองใหม่อีกครั้ง");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="w-full py-20 bg-zinc-900/50"
    >
      <div className="container mx-auto px-4 max-w-xl">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          ติดต่อฉัน
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div>
            <label className="text-sm font-medium text-zinc-400">
              ชื่อของคุณ
            </label>
            <Input
              name="name"
              placeholder="เช่น สมชาย ใจดี"
              required
              className="bg-zinc-950 border-zinc-800 text-white mt-2"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-zinc-400">
              อีเมล
            </label>
            <Input
              name="email"
              type="email"
              placeholder="somchai@example.com"
              required
              className="bg-zinc-950 border-zinc-800 text-white mt-2"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-zinc-400">
              ข้อความ
            </label>
            <Textarea
              name="message"
              placeholder="สวัสดีครับ สนใจอยากร่วมงานด้วย..."
              required
              rows={5}
              className="bg-zinc-950 border-zinc-800 text-white mt-2"
            />
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting
              ? "กำลังส่งข้อความ..."
              : "ส่งข้อความ"}
          </Button>
        </form>
      </div>
    </section>
  );
}