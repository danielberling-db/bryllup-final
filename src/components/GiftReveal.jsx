import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { RoundedBox } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';

const Confetti = ({ active }) => {
  const count = 150;
  const mesh = useRef();
  const particles = useMemo(() => {
    const temp = [];
    for(let i=0; i<count; i++) {
      const colors = ['#D4AF37', '#FFD700', '#FF6B9D', '#FFF8E1'];
      temp.push({
        x: (Math.random() - 0.5) * 4,
        y: 3 + Math.random() * 1,
        z: (Math.random() - 0.5) * 4,
        vy: Math.random() * 0.15 + 0.05,
        vx: (Math.random() - 0.5) * 0.08,
        vz: (Math.random() - 0.5) * 0.08,
        color: colors[Math.floor(Math.random() * colors.length)],
        scale: Math.random() * 0.08 + 0.04
      })
    }
    return temp;
  }, []);

  const dummy = new THREE.Object3D();

  useFrame(() => {
    if(!active || !mesh.current) return;
    particles.forEach((p, i) => {
      p.y += p.vy;
      p.x += p.vx;
      p.z += p.vz;
      p.vy -= 0.004;

      if(p.y < -2) {
        p.y = 3;
        p.vy = Math.random() * 0.15 + 0.05;
      }

      dummy.position.set(p.x, p.y, p.z);
      dummy.scale.set(p.scale, p.scale, p.scale);
      dummy.rotation.x += 0.08;
      dummy.rotation.z += 0.08;
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  if (!active) return null;

  return (
    <instancedMesh ref={mesh} args={[null, null, count]}>
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial side={THREE.DoubleSide} color="#D4AF37" />
    </instancedMesh>
  );
}

const Scene = ({ setRevealed }) => {
  const groupRef = useRef();
  const boxRef = useRef();
  const lidRef = useRef();
  const ribbonHRef = useRef();
  const ribbonVRef = useRef();
  const bowRef = useRef();
  const [exploded, setExploded] = useState(false);

  useFrame(() => {
    if(!exploded && groupRef.current) {
      groupRef.current.rotation.y += 0.003;
    }
  });

  const handleClick = () => {
    if (exploded) return;

    const tl = gsap.timeline({
      onComplete: () => {
        setExploded(true);
        setRevealed(true);
      }
    });

    tl.to(groupRef.current.rotation, { z: 0.15, duration: 0.08, yoyo: true, repeat: 6, ease: "power1.inOut" })
      .to(lidRef.current.position, { y: 4, duration: 0.6, ease: "back.out(1.5)" }, "+=0.1")
      .to(lidRef.current.rotation, { x: 0.8, z: 0.3, duration: 0.6, ease: "power2.out" }, "<")
      .to(bowRef.current.scale, { x: 0, y: 0, z: 0, duration: 0.3, ease: "back.in(2)" }, "<0.2");
  };

  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight position={[3, 4, 2]} intensity={1.5} color="#FFFFFF" />
      <pointLight position={[-2, 1, -2]} intensity={0.6} color="#FFD700" />

      <group
        ref={groupRef}
        position={[0, -0.5, 0]}
        onClick={handleClick}
        onPointerOver={(e) => { document.body.style.cursor = 'pointer'; }}
        onPointerOut={(e) => { document.body.style.cursor = 'default'; }}
        scale={0.5}
      >
        <RoundedBox ref={boxRef} args={[2.2, 2.2, 2.2]} radius={0.2}>
            <meshStandardMaterial
              color="#DC143C"
              roughness={0.25}
              metalness={0.15}
            />
        </RoundedBox>

        <group ref={lidRef} position={[0, 1.2, 0]}>
          <RoundedBox args={[2.3, 0.3, 2.3]} radius={0.2}>
            <meshStandardMaterial
              color="#DC143C"
              roughness={0.25}
              metalness={0.15}
            />
          </RoundedBox>

          <mesh ref={ribbonHRef} position={[0, 0.16, 0]}>
            <boxGeometry args={[2.35, 0.3, 0.3]} />
            <meshStandardMaterial
              color="#F8F8F8"
              roughness={0.15}
              metalness={0.35}
            />
          </mesh>

          <mesh ref={ribbonVRef} position={[0, 0.16, 0]}>
            <boxGeometry args={[0.3, 0.3, 2.35]} />
            <meshStandardMaterial
              color="#F8F8F8"
              roughness={0.15}
              metalness={0.35}
            />
          </mesh>

          <group ref={bowRef} position={[0, 0.4, 0]}>
            <mesh position={[-0.28, 0, 0]}>
              <sphereGeometry args={[0.22, 20, 20]} />
              <meshStandardMaterial
                color="#F8F8F8"
                roughness={0.1}
                metalness={0.4}
              />
            </mesh>
            <mesh position={[0.28, 0, 0]}>
              <sphereGeometry args={[0.22, 20, 20]} />
              <meshStandardMaterial
                color="#F8F8F8"
                roughness={0.1}
                metalness={0.4}
              />
            </mesh>
            <mesh>
              <sphereGeometry args={[0.18, 20, 20]} />
              <meshStandardMaterial
                color="#F8F8F8"
                roughness={0.1}
                metalness={0.4}
              />
            </mesh>
          </group>
        </group>

        <mesh ref={ribbonHRef} position={[0, 0, 0]}>
          <boxGeometry args={[2.25, 2.25, 0.28]} />
          <meshStandardMaterial
            color="#F8F8F8"
            roughness={0.15}
            metalness={0.35}
          />
        </mesh>

        <mesh ref={ribbonVRef} position={[0, 0, 0]}>
          <boxGeometry args={[0.28, 2.25, 2.25]} />
          <meshStandardMaterial
            color="#F8F8F8"
            roughness={0.15}
            metalness={0.35}
          />
        </mesh>
      </group>

      <Confetti active={exploded} />
    </>
  );
};

const GiftReveal = () => {
  const [revealed, setRevealed] = useState(false);
  return (
    <section id="gift-section" className="relative w-full m-0 flex flex-col items-center justify-center py-20 md:py-32 bg-gradient-to-b from-[#FFF5F0] to-[#FFFFFF] overflow-hidden">
      <div className="absolute inset-0 opacity-8 pointer-events-none" style={{
        background: 'radial-gradient(circle at 30% 50%, #FF8C42 0%, transparent 50%), radial-gradient(circle at 70% 70%, #FFB88C 0%, transparent 50%)',
        filter: 'blur(80px)'
      }}></div>

      <div className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-1000 z-10 ${revealed ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <div className="w-full max-w-md h-[450px] md:h-[500px] flex items-center justify-center">
          <Canvas
            camera={{ position: [0, 1.5, 5], fov: 45 }}
            gl={{ antialias: true, alpha: true, preserveDrawingBuffer: true }}
            dpr={[1, 1.5]}
          >
            <Scene setRevealed={setRevealed} />
          </Canvas>
        </div>

        <div className="relative z-20 flex flex-col items-center gap-4 mt-12 px-4">
          <p className="font-montserrat text-lg md:text-xl font-semibold text-[#C5A059] animate-pulse drop-shadow-md">
            Klikk på gaven
          </p>
          <div className="flex gap-2 justify-center">
            <div className="w-2 h-2 rounded-full bg-[#FFB88C] animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 rounded-full bg-[#FFB88C] animate-bounce" style={{ animationDelay: '200ms' }}></div>
            <div className="w-2 h-2 rounded-full bg-[#FFB88C] animate-bounce" style={{ animationDelay: '400ms' }}></div>
          </div>
        </div>
      </div>

      <div className={`relative z-20 max-w-4xl px-6 transition-all duration-1000 ${revealed ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
         <div className="bg-white rounded-3xl p-12 md:p-16 shadow-2xl border border-[#E8C4C8]">
            <h1 className="font-cinzel text-7xl md:text-8xl font-black mb-12 text-center bg-gradient-to-r from-[#C5A059] to-[#D4AF37] bg-clip-text text-transparent drop-shadow-md">
              ØNSKELISTEN VÅR
            </h1>
            <h2 className="font-vibes text-6xl md:text-7xl mb-10 text-[#C5A059]">
              Kjære Gjester
            </h2>
            <div className="font-montserrat text-xl md:text-2xl leading-relaxed text-[#2C2C2C] space-y-6">
              <p>
                Vi er så utrolig spente på å begynne på vårt nye kapittel, og vi gleder oss til å bygge et ekte hjem – et sted fylt med minner, latter og varme. For å hjelpe oss med å fylle dette hjemmet, har vi satt sammen en liste over ting vi drømmer om for fremtiden.
              </p>
              <p>
                Tusen takk for at dere tenker på oss! Bare det å dele denne dagen med dere er den største gaven.
              </p>
              <p className="font-vibes text-4xl md:text-5xl text-[#B76E79] mt-10">
                Varm hilsen<br />Remine & Daniel
              </p>
            </div>

            <a
              href="https://onskelister.no/liste?id=Wn6HUmvekcuEJKmi63ky"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 mt-12 px-14 py-6 bg-gradient-to-r from-[#C5A059] to-[#D4AF37] rounded-full transition-all duration-300 hover:shadow-[0_15px_50px_rgba(197,160,89,0.5)] hover:scale-105 hover:from-[#D4AF37] hover:to-[#E8C870]"
            >
              <span className="font-montserrat font-bold text-white text-xl md:text-2xl">
                SE VÅR ØNSKELISTE
              </span>
              <span className="text-3xl">🎁</span>
            </a>
         </div>
      </div>
    </section>
  );
};
export default GiftReveal;
