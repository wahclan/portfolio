import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, useAnimations } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Earth = () => {
  const { scene, animations } = useGLTF("./brain_hologram/scene.gltf");
  const { ref } = useAnimations(animations); // Extracts animations and creates a ref you can attach to the object

  return <primitive ref={ref} object={scene} scale={2.5} />;
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 5,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <ambientLight intensity={1.25} />
      <directionalLight position={[10, 10, 10.05]} />
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
