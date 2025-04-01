import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Preload, Shadow, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import CanvasLoader from "../Loader";

const ShadowCatcher = ({ isMobile }) => {
  return (
    <mesh 
      receiveShadow 
      rotation={[-Math.PI / 2, 0, 0]}
      position={isMobile ? [-1, -2, 1] : [-1, -4.25, 1]} // Adjust position for mobile
      scale={[1, 0.4, 0.1]}
    >
      <planeGeometry args={[50, 50]} />
      <shadowMaterial opacity={0.5} />
    </mesh>
  );
};

// Headset Component
const Headset = ({ isMobile, mousePos }) => {
  const { scene, animations } = useGLTF("./VR_HeadsetExport1/Headset1.gltf");
  const groupRef = useRef();
  const mixerRef = useRef(null);
  const actionRef = useRef(null);

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
      }
    });
  }, [scene]);

  useEffect(() => {
    if (animations.length > 0) {
      mixerRef.current = new THREE.AnimationMixer(scene);
      const manIntroAnimation = animations.find(anim => anim.name === "IntroAnimation_Mannequin");
      const loopAnimation = animations.find(anim => anim.name === "LoopAnimation");

      if (manIntroAnimation) {
        const introAction = mixerRef.current.clipAction(manIntroAnimation);
        actionRef.current = introAction;
        introAction.setLoop(THREE.LoopOnce, 1);
        introAction.clampWhenFinished = true;
        introAction.play();

        // Switch to LoopAnimation when Intro finishes
        mixerRef.current.addEventListener("finished", () => {
          if (loopAnimation) {
            const loopAction = mixerRef.current.clipAction(loopAnimation);
            loopAction.setLoop(THREE.LoopRepeat, Infinity);
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

  // Update animation and optionally add some rotation if needed
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
      <primitive
        object={scene}
        scale={isMobile ? 2.0 : 4} // adjust scale if needed
        position={isMobile ? [0, 0, 0] : [-2.2, -4.1, -.4]} // adjust position as required
        rotation={[0.0, Math.PI*0.9 , 0.0]}
        frustumCulled={false}
        castShadow
      />
    </group>
  );
};

// Computers Component (Existing Model)
const Computers = ({ isMobile, mousePos }) => {
  const { scene, animations } = useGLTF("./5thTryAnimation/WoodManequin5.gltf");

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [scene]);

  const groupRef = useRef();
  const mixerRef = useRef(null);
  const actionRef = useRef(null);

  useEffect(() => {
    if (animations.length > 0) {
      mixerRef.current = new THREE.AnimationMixer(scene);
      const manIntroAnimation = animations.find(anim => anim.name === "ManIntro");
      const loopAnimation = animations.find(anim => anim.name === "LoopAnim");

      if (manIntroAnimation) {
        const introAction = mixerRef.current.clipAction(manIntroAnimation);
        actionRef.current = introAction;
        introAction.setLoop(THREE.LoopOnce, 1);
        introAction.clampWhenFinished = true;
        introAction.play();

        // Switch to LoopAnim when Intro finishes
        mixerRef.current.addEventListener("finished", () => {
          if (loopAnimation) {
            const loopAction = mixerRef.current.clipAction(loopAnimation);
            loopAction.setLoop(THREE.LoopRepeat, Infinity);
            loopAction.play();
          } else {
            console.warn("Animation 'LoopAnim' not found.");
          }
        });
      } else {
        console.warn("Animation 'ManIntro' not found.");
      }
    }
  }, [scene, animations]);

  // Update animation and apply mouse rotation
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
      <hemisphereLight intensity={0.1} groundColor="black" />
      <spotLight
        position={[-10, 50, 80]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        shadow-mapSize={1024}
      />
      <spotLight
        position={[150, 100, 50]}
        angle={0.2}
        penumbra={1}
        intensity={2}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={scene}
        scale={isMobile ? 2.0 : 4}
        position={isMobile ? [0, 0.5, -2.5] : [0, -4.2, -3]}
        rotation={[-0.0, (-Math.PI*1.25), -0.]}
        castShadow
      />
    </group>
  );
};

// Main Canvas Component that includes both models
const ComputersCanvas = () => {
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
      camera={{ position: [20, 0, 0], fov: 30, near: 0.1, far: 200 }}
      gl={{ preserveDrawingBuffer: true }}
      onPointerMove={handlePointerMove}
    >
      <Suspense fallback={<CanvasLoader />}>
        {/* Existing model */}
        <Computers isMobile={isMobile} mousePos={mousePos} />
        {/* Headset model added */}
        <Headset isMobile={isMobile} mousePos={mousePos} />
        <ShadowCatcher/>
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
