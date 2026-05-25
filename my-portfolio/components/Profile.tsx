'use client';

import React from 'react';

interface ProfileSection {
  title: string;
  content: string;
}

const Profile: React.FC = () => {
  const profileSections: ProfileSection[] = [
    {
      title: 'ประวัติส่วนตัว',
      content: 'สวัสดีค่ะ/ครับ ฉันเป็นนักพัฒนาซอฟต์แวร์ที่มีความหลงใหลในการสร้างโปรแกรมและแอปพลิเคชันที่มีคุณภาพ'
    },
    {
      title: 'ทักษะและความสามารถ',
      content: 'ฉันมีความเชี่ยวชาญในด้าน React, TypeScript, Next.js, Node.js, และเทคโนโลยีเว็บสมัยใหม่อื่นๆ'
    },
    {
      title: 'ประสบการณ์การทำงาน',
      content: 'ฉันมีประสบการณ์ในการพัฒนาแอปพลิเคชันเว็บและมือถือ ทำงานกับทีมที่มีหลากหลายและมีความสนใจในการเรียนรู้เทคโนโลยีใหม่ๆ'
    },
    {
      title: 'การศึกษา',
      content: 'ฉันมีพื้นฐานการศึกษาในสาขาวิทยาการคอมพิวเตอร์ และมีการพัฒนาทักษะอย่างต่อเนื่องผ่านการเรียนรู้ด้วยตนเองและการอบรมเพิ่มเติม'
    },
    {
      title: 'ความสนใจและงานอดิเรก',
      content: 'นอกเหนือจากการเขียนโค้ด ฉันชอบการแก้ปัญหา การอ่านบล็อกเทคโนโลยี และการแบ่งปันความรู้กับชุมชนนักพัฒนา'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">โปรไฟล์ส่วนตัว</h1>
          <p className="text-lg text-gray-600">ยินดีต้อนรับสู่หน้าประวัติส่วนตัวของฉัน</p>
        </div>

        {/* Profile Sections */}
        <div className="space-y-6">
          {profileSections.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h2 className="text-2xl font-semibold text-indigo-600 mb-3">{section.title}</h2>
              <p className="text-gray-700 leading-relaxed text-base">{section.content}</p>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-12 bg-indigo-600 text-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">ติดต่อฉัน</h2>
          <p className="mb-6 text-indigo-100">
            หากคุณสนใจที่จะทำงานร่วมกัน ฉันยินดีที่จะได้ยินความคิดเห็นของคุณ
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:your-email@example.com"
              className="bg-white text-indigo-600 px-6 py-2 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
            >
              อีเมล
            </a>
            <a
              href="#"
              className="bg-white text-indigo-600 px-6 py-2 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="bg-white text-indigo-600 px-6 py-2 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
