import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Preload, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import CanvasLoader from "../Loader";

const Headset = ({ isMobile, mousePos }) => {
  const { scene, animations } = useGLTF("./VR_HeadsetExport1/Headset1.gltf");
  const groupRef = useRef();
  const mixerRef = useRef(null);
  const actionRef = useRef(null);

  useEffect(() => {
    if (animations.length > 0) {
      mixerRef.current = new THREE.AnimationMixer(scene);

      const manIntroAnimation = animations.find(anim => anim.name === "IntroAnimation_Mannequin");
      const loopAnimation = animations.find(anim => anim.name === "LoopAnimation");

      if (manIntroAnimation) {
        const introAction = mixerRef.current.clipAction(manIntroAnimation);
        actionRef.current = introAction;
        introAction.setLoop(THREE.LoopOnce, 1); // Play once
        introAction.clampWhenFinished = true; // Keep last frame when finished
        introAction.play();

        // When the ManIntro animation finishes, switch to LoopAnim
        mixerRef.current.addEventListener("finished", () => {
          if (loopAnimation) {
            const loopAction = mixerRef.current.clipAction(loopAnimation);
            loopAction.setLoop(THREE.LoopRepeat, Infinity); // Loop forever
            loopAction.play();
          } else {
            console.warn("Animation 'LoopAnimation' not found.");
          }
        });
      } else {
        console.warn("Animation 'IntroAnimation_Mannequin' not found.");
      }
    }
  }, [scene, animations]);

  // Update animation each frame
  useFrame((_, delta) => {
    if (mixerRef.current) mixerRef.current.update(delta);

    if (groupRef.current) {
      const limit = 0.2;
      const yRotation = Math.max(-limit, Math.min(limit, mousePos.x * 0.2));
      groupRef.current.rotation.y = yRotation;
    }
  });

  return (
    <group ref={groupRef}>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-10, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={scene}
        scale={isMobile ? 2.0 : 6}
        position={isMobile ? [0, 0.5, -2.5] : [0, -4.2, -3]}
        rotation={[-0.01, 1.5, -0.1]}
      />
    </group>
  );
};

const HeadsetCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0 });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => setIsMobile(event.matches);
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  const handlePointerMove = (e) => {
    const x = (e.clientX / window.innerWidth) * 2 - 1;
    setMousePos({ x });
  };

  return (
    <Canvas
      style={{ width: "100%", height: "100%" }}
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 0], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      onPointerMove={handlePointerMove}
    >
      <Suspense fallback={<CanvasLoader />}>
        <Headset isMobile={isMobile} mousePos={mousePos} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default HeadsetCanvas;
