import React, { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, useAnimations } from "@react-three/drei";

import CanvasLoader from "../Loader";

const ShadowCatcher = ({ isMobile }) => {
  return (
    <mesh 
      receiveShadow 
      rotation={[-Math.PI / 2, 0, 0]}  // Orients the plane horizontally
      position={[0, -1.7, 0]}           // Lower it slightly so objects appear to cast shadows onto it
      scale={[1, 1, 1]}                // Use scale 1,1,1 unless you have a specific need to non-uniformly scale
    >
      <planeGeometry args={[50, 50]} />
      <shadowMaterial opacity={0.5} />
    </mesh>
  );
};


const TelephoneMan = () => {
  const gltf = useGLTF("./telephone_mannequin1/TelephoneMannequin1.gltf");
  const { scene, animations } = gltf;
  const { actions } = useAnimations(animations, scene);

  // Traverse the scene and set shadow properties for each mesh
  useEffect(() => {
    if (scene) {
      scene.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          // Optionally, if you want the mesh to receive shadows as well:
          // child.receiveShadow = true;
        }
      });
    }
  }, [scene]);

  useEffect(() => {
    if (actions && Object.values(actions).length > 0) {
      Object.values(actions)[0].play();
    }
  }, [actions]);

  return (
    <primitive object={scene} scale={2.5} position-y={0} rotation-y={-1} castShadow />
  );
};

const Telephone = () => { 
  // Load the GLTF model
  const gltf = useGLTF("./Telephone/Telephone1.gltf");
  const { scene, animations } = gltf;

  // Setup animations for the imported model
  const { actions } = useAnimations(animations, scene);

  // Traverse the scene and set shadow properties for each mesh
  useEffect(() => {
    if (scene) {
      scene.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
    }
  }, [scene]);

  useEffect(() => {
    if (actions) {
      // Log all available animation action names to check if there are multiple animations
      console.log("Available animations:", Object.keys(actions));

      // Attempt to play the specific animation by name
      const targetAnimation = actions["Telephone_cable_0Action"];
      if (targetAnimation) {
        targetAnimation.reset().fadeIn(0.5).play();
      } else {
        console.warn("Animation 'Telephone_cable_0Action_Telephone_cable_0.001' not found. Available animations:", Object.keys(actions));
      }
    }
  }, [actions]);

  return (
    <primitive object={scene} scale={2.5} position-y={0} rotation-y={-1} />
  );
};


const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='always'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <spotLight
          position={[-10, 10, 10]}
          angle={0.3}
          penumbra={1}
          intensity={2}
          castShadow
        />
        <TelephoneMan />
        <Telephone />
        <ShadowCatcher />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};


export default EarthCanvas;
