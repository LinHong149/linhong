import TopNav from "@/components/TopNav";
import SocialNav from "@/components/SocialNav";
import { Box } from '@mui/material';
import Main from "@/components/sections/Header";
import Experiences from "@/components/sections/Experiences";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import ParticlesBackground from '@/components/ParticlesBackground';
import About from '@/components/sections/About';

export default function Home() {
  return (
    <Box className="body flex flex-col items-center min-h-screen" sx={{bgcolor: 'common.black' , overflowX: "hidden" }}>
      <ParticlesBackground />
      {/* Your content here */}
      <TopNav />
      <SocialNav />
      <Main />
      
      <div className="flex flex-col items-center gap-32 md:gap-48 lg:gap-64 py-32 md:py-48 lg:py-64 px-4 md:px-6 lg:px-8 w-full max-w-7xl mx-auto">
        <About />
        <Experiences />
        <Projects id="projects" />
        <Skills />
      </div>
    </Box>
  );
}