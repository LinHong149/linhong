'use client';

import Image from 'next/image';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

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
  Tools: [
    { name: 'Git', icon: '/skills/icons8-git.svg' },
    { name: 'GitHub', icon: '/skills/icons8-github.svg' },
    { name: 'Docker', icon: '/skills/icons8-docker.svg' },
    { name: 'Google Cloud', icon: '/skills/icons8-google-cloud.svg' },
  ],
};
const animationVariants = [
  {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5,amount:1.0, ease: 'easeOut' } },
  },
  {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5,amount:1.0, ease: 'easeOut' } },
  },
  {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5,amount:1.0, ease: 'easeOut' } },
  },
];

export default function SkillsSection() {
  const [scrollY, setScrollY] = useState(0);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setLastY(scrollY);
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollY]);

  return (
    <section className="w-[80vw] px-6 lg:px-20 text-[#DCDEFF]">
      <motion.div
        className="max-w-screen-xl mx-auto mb-16"
        initial={{ opacity: 0, scale: 0.80 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.6 }}
      >
        <h2 className="flex items-center gap-4 text-2xl sm:text-3xl md:text-4xl font-extrabold text-left leading-tight">
          My <span className="text-[#72C6B2]">Skills</span>
          <span className="flex-1 h-px bg-[#DCDEFF]/20"></span>
        </h2>
      </motion.div>

      <div className="max-w-screen-xl mx-auto flex flex-col gap-16">
        {Object.entries(skills).map(([category, items], index) => (
          <AnimatedCategory
            key={category}
            category={category}
            items={items}
            index={index}
            variant={animationVariants[index % animationVariants.length]}
            scrollY={scrollY}
            lastY={lastY}
          />
        ))}
      </div>
    </section>
  );
}

function AnimatedCategory({ category, items, variant, index, scrollY, lastY }: any) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  const controls = useAnimation();

  useEffect(() => {
    const refTop = ref.current?.offsetTop ?? Infinity;
    const isScrollingDown = scrollY > lastY;

    if (inView && isScrollingDown) {
      controls.start('visible');
    } else if (!inView && scrollY < refTop) {
      controls.start('hidden');
    }
  }, [inView, scrollY, lastY]);

  return (
    <motion.div
      ref={ref}
      variants={variant}
      initial="hidden"
      animate={controls}
    >
      <h3 className="text-[#DCDEFF]/70 text-xl font-semibold mb-6">{category}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {items.map((skill: any) => (
          <div key={skill.name} className="flex items-center gap-3">
            <div className="w-8 h-8 relative">
              <Image
                src={skill.icon}
                alt={skill.name}
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <span className="text-md">{skill.name}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}