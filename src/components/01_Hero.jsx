import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Float } from '@react-three/drei'
import { motion } from 'framer-motion'

// Section Name: HERO — large hero with 3D object (placeholder) + parallax text
export default function Hero(){
  return (
    <section id="hero" className="relative h-screen flex items-center">
      <Parallax pages={1} style={{ top:0, left:0 }}>
        <ParallaxLayer offset={0} speed={0.2}>
          <div className="absolute inset-0 bg-gradient-to-b from-[#07121a] via-transparent to-[#07121a]" />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.6}>
          <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-screen">
            <div className="w-1/2">
              <motion.h1 initial={{y:20, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:0.2}} className="text-6xl font-extrabold leading-tight">
                Raj Doshi
                <span className="block text-primary text-2xl mt-2">Marketing Analytics · Growth · Paid Media</span>
              </motion.h1>

              <motion.p initial={{y:20, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:0.45}} className="mt-6 text-slate-300 max-w-xl">
                Performance-driven marketing analyst who turns data into growth. I build dashboards, run paid media strategies, and design experiments that move metrics.
              </motion.p>

              <div className="mt-8 flex gap-4">
                <a href="#projects" className="px-6 py-3 rounded-lg bg-primary text-black font-semibold">View Projects</a>
                <a href="/Raj_Doshi_Resume_2025.pdf" download className="px-6 py-3 rounded-lg border border-slate-600 text-slate-200">Download CV</a>
              </div>

            </div>

            <div className="w-1/2 flex justify-end">
              <div className="w-[420px] h-[420px] section-card rounded-3xl relative flex items-center justify-center">
                {/* 3D Canvas placeholder: torus knot using react-three-fiber */}
                <Canvas camera={{ position: [0, 0, 6] }}>
                  <ambientLight intensity={0.6} />
                  <directionalLight position={[5, 5, 5]} intensity={1} />
                  <Float rotationIntensity={0.6} floatIntensity={0.6}>
                    <mesh>
                      <torusKnotGeometry args={[1.2, 0.35, 128, 32]} />
                      <meshStandardMaterial metalness={0.8} roughness={0.2} color={'#00E5FF'} />
                    </mesh>
                  </Float>
                  <OrbitControls enableZoom={false} enablePan={false} />
                </Canvas>
              </div>
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </section>
  )
}
