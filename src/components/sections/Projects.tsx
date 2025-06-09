'use client';

import { useTheme } from '@mui/material/styles';
import Image from 'next/image';
import { Box, Typography } from '@mui/material';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const projects = [
    {
        title: 'Lofied',
        subtitle: 'JamHacks 2025 Winning Project',
        description: `Lofied is an AI-powered web application that transforms regular songs into lo-fi versions. It analyzes uploaded MP3 files using audio signal processing techniques and applies effects such as reverb, EQ shaping, and background noise injection to mimic the nostalgic lo-fi aesthetic. Built with Python and JavaScript, the app offers an interactive frontend that allows users to preview and download the generated lo-fi tracks.`,
        tech: ['Python', 'Web Audio API', 'React', 'Flask', 'FFmpeg'],
        image: '/projects/Lofied.png',
        github: 'https://github.com/LinHong149/lofied',
        external: 'https://dorahacks.io/buidl/26392',
    },
    {
        title: 'Skip the Walk',
        subtitle: 'Hack the North 2024 Winning Project',
        description: `Skip the Walk is a command-line pizza ordering tool built in under 9 hours at Hack the North 2024. I used Commander.js and Terraform to automate orders through the Domino's API, dramatically streamlining the food delivery process. The app integrates MappedIn for navigation and uses the Slack API to send live updates with interactive buttons, allowing volunteers to efficiently track and manage deliveries in real-time.`,
        tech: ['Commander.js', 'Terraform', 'MappedIn', 'Slack API'],
        image: '/projects/SkipTheWalk.png',
        github: 'https://github.com/Ri-Hong/SkipTheWalk',
        external: 'https://devpost.com/software/skip-the-walk',
    },
    {
        title: 'Ingredify',
        subtitle: 'MetHacks 2023 Winning Project',
        description: `Ingredify is a mobile application that helps users scan food labels and analyze ingredients using OCR powered by Tesseract. It leverages Cohere AI to explain ingredient functions and detect allergens, making it especially useful for those with dietary restrictions. The app was built with React Native and uses a Node.js and MongoDB backend to support food logging and personalized health tracking.`,
        tech: ['React Native', 'Tesseract OCR', 'Cohere AI', 'MongoDB', 'Node.js'],
        image: '/projects/Ingredify.png',
        github: 'https://github.com/dan-the-man639/ingredify',
        external: 'https://devpost.com/software/ingredify',
    },
];

export default function Projects({ id }: { id?: string }) {
    const theme = useTheme();

    return (
        <section id={id} className="w-full px-4 sm:px-6 lg:px-8 text-[#DCDEFF] h-min">
            {/* Section Title */}
            <motion.h2
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                viewport={{ once: false, amount: 1.0 }}
                className="max-w-4xl mx-auto mb-12 sm:mb-16 md:mb-20 flex flex-col sm:flex-row items-center gap-4 text-2xl sm:text-3xl md:text-4xl font-extrabold text-left leading-tight"
            >
                Things I've Worked on,
                <span className="text-[#72C6B2]">Some of Them</span>
                <span className="flex-1 h-px bg-[#DCDEFF]/20"></span>
            </motion.h2>

            {/* Project List */}
            <div className="flex flex-col gap-28 max-w-7xl mx-auto px-8 sm:px-6 md:px-8">
                {projects.map((proj, i) => (
                    <AnimatedProject key={proj.title} proj={proj} isEven={i % 2 === 0} />
                ))}
            </div>
        </section>
    );

    function AnimatedProject({ proj, isEven }: { proj: typeof projects[0]; isEven: boolean }) {
        const ref = useRef<HTMLDivElement>(null);
        const inView = useInView(ref, { amount: 1.0 });
        const controls = useAnimation();

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

        useEffect(() => {
            const refTop = ref.current?.offsetTop ?? Infinity;
            const viewportHeight = window.innerHeight;
            const elementTop = refTop - scrollY;

            if (elementTop < viewportHeight) {
                controls.start('visible');
            } else {
                controls.start('hidden');
            }
        }, [scrollY, lastY]);

        return (
            <motion.div
                ref={ref}
                className={`relative flex flex-col lg:flex-row items-center gap-0 sm:gap-8 ${!isEven ? 'lg:flex-row-reverse' : ''}`}
                initial="hidden"
                animate={controls}
                variants={{
                    hidden: { opacity: 0, y: 40, scale: 0.95 },
                    visible: {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        transition: { duration: 0.3, ease: 'easeOut' },
                    },
                }}
            >
                {/* Image */}
                <div className="w-full lg:w-1/2 aspect-[4/3] relative rounded-t-lg lg:rounded-lg overflow-hidden shadow-lg group">
                    <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full h-full block"
                    >
                        <Image
                            src={proj.image}
                            alt={proj.title}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-t-lg lg:rounded-lg sm:grayscale sm:hover:grayscale-0 transition-all duration-300"
                        />
                    </a>
                </div>

                {/* Text */}
                <div className={`w-full lg:w-1/2 flex flex-col gap-4 z-10 ${isEven ? '' : 'lg:items-end'}`}>
                    {/* Mobile Card Layout */}
                    <div className="lg:hidden flex flex-col gap-4 bg-[#463967] p-6 rounded-b-lg lg:rounded-lg shadow-xl">
                        <Typography variant="body2" className="text-[#DCDEFF]/70 text-sm">
                            {proj.subtitle}
                        </Typography>
                        <Typography
                            variant="h5"
                            fontWeight="bold"
                            className="text-[#72C6B2] text-xl"
                        >
                            {proj.title}
                        </Typography>
                        <Typography className="text-[#DCDEFF]/90 leading-relaxed text-sm">
                            {proj.description}
                        </Typography>
                        <Typography variant="body2" className="text-[#72C6B2] text-sm mt-2">
                            {proj.tech.join(' | ')}
                        </Typography>
                        <div className="flex gap-4 mt-2 text-[#DCDEFF]">
                            <a
                                href={proj.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#72C6B2] transition-colors"
                            >
                                <FiGithub className="w-5 h-5" />
                            </a>
                            <a
                                href={proj.external}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#72C6B2] transition-colors"
                            >
                                <FiExternalLink className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Desktop Layout */}
                    <div className="hidden lg:flex flex-col gap-4">
                        <Typography variant="body2" className="text-[#DCDEFF]/70 text-sm">
                            {proj.subtitle}
                        </Typography>
                        <Typography
                            variant="h5"
                            fontWeight="bold"
                            className="text-[#72C6B2] text-xl"
                        >
                            {proj.title}
                        </Typography>

                        {/* Description Animation */}
                        <motion.div
                            initial={{ opacity: 0, x: isEven ? 40 : -40, scale: 0.8 }}
                            animate={controls}
                            variants={{
                                hidden: { opacity: 0, x: isEven ? 40 : -40, scale: 0.8 },
                                visible: {
                                    opacity: 1,
                                    x: 0,
                                    scale: 1,
                                    transition: { delay: 0, duration: 0.3, ease: 'easeOut' },
                                },
                            }}
                        >
                            <div className={`shadow-xl ${isEven ? 'lg:-ml-16' : 'lg:-mr-16'}`}>
                                <Box
                                    sx={{
                                        backgroundColor: '#463967',
                                        padding: '1.5rem',
                                        borderRadius: '8px',
                                        maxWidth: '100%',
                                    }}
                                >
                                    <Typography className="text-[#DCDEFF]/90 leading-relaxed text-sm lg:text-base">
                                        {proj.description}
                                    </Typography>
                                </Box>
                            </div>
                        </motion.div>

                        {/* Tech */}
                        <Typography variant="body2" className="text-[#72C6B2] text-sm mt-2">
                            {proj.tech.join(' | ')}
                        </Typography>

                        {/* Links */}
                        <div className="flex gap-4 mt-2 text-[#DCDEFF]">
                            <a
                                href={proj.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#72C6B2] transition-colors"
                            >
                                <FiGithub className="w-5 h-5" />
                            </a>
                            <a
                                href={proj.external}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#72C6B2] transition-colors"
                            >
                                <FiExternalLink className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>
        );
    }
}