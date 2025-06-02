import TopNav from "@/components/TopNav";
import SocialNav from "@/components/SocialNav";
import { Box } from '@mui/material';
import Main from "@/components/sections/Header";
import Experiences from "@/components/sections/Experiences";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import ParticlesBackground from '@/components/ParticlesBackground';



export default function Home() {
  return (
    <Box className="body flex flex-col items-center" sx={{bgcolor: 'common.black' , overflowX: "hidden" }}>
      <ParticlesBackground />
      {/* Your content here */}
      <TopNav />
      <SocialNav />
      <Main />
      <Experiences />
      <Projects />
      <Skills />
    </Box>
  );
}