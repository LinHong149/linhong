'use client';

import dynamic from 'next/dynamic';

const ParticlesBg = dynamic(() => import('particles-bg'), {
  ssr: false,
});

const ParticlesBackground = () => {
  return (
    <div className='z-10 bg-[#0A1110]'>

    <ParticlesBg
      type="cobweb"
      bg={true}
      color="#72C6B2"
      num={50}
      />
    </div>
  );
};

export default ParticlesBackground;