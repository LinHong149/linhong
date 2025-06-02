'use client';

import Image from 'next/image';

const skills = {
  Frontend: [
    { name: 'JavaScript', icon: '/skills/icons8-javascript.svg' },
    { name: 'Tailwind CSS', icon: '/skills/icons8-tailwind-css.svg' },
    { name: 'CSS', icon: '/skills/icons8-css-logo.svg' },
    { name: 'React Native', icon: '/skills/icons8-react-native.svg' },
    { name: 'C++', icon: '/skills/icons8-c++.svg' },
  ],
  Backend: [
    { name: 'Node.js', icon: '/skills/icons8-nodejs.svg' },
    { name: 'Next.js', icon: '/skills/icons8-next.js.svg' },
    { name: 'Python', icon: '/skills/icons8-python.svg' },
  ],
  Database: [
    // Add here once you get MongoDB, Mongoose, Oracle icons
  ],
  Tools: [
    { name: 'Git', icon: '/skills/icons8-git.svg' },
    { name: 'GitHub', icon: '/skills/icons8-github.svg' },
    { name: 'Docker', icon: '/skills/icons8-docker.svg' },
    { name: 'Google Cloud', icon: '/skills/icons8-google-cloud.svg' },
  ],
};

export default function SkillsSection() {
  return (
    <section className="w-[80vw] px-6 lg:px-20 py-[50vh] text-[#DCDEFF]">
      {/* Section Header */}
      <div className="max-w-screen-xl mx-auto mb-16">
        <h2 className="flex items-center gap-4 text-5xl font-extrabold text-left leading-tight">
          My <span className="text-[#72C6B2]">Skills</span>
          <span className="flex-1 h-px bg-[#DCDEFF]/20"></span>
        </h2>
      </div>

      {/* Skill Grid */}
      <div className="max-w-screen-xl mx-auto flex flex-col gap-16">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-[#DCDEFF]/70 text-xl font-semibold mb-6">{category}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {items.map((skill) => (
                <div key={skill.name} className="flex items-center gap-3">
                  <div className="w-8 h-8 relative">
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={48}
                      height={48}
                    //   fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-md">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}