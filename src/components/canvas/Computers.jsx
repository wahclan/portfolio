import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Computers = ({ isMobile }) => {
  const { scene, errors } = useGLTF('./blackhole/scene.gltf', true); // The second parameter `true` is for draco loader, adjust accordingly

  // Check for errors in loading the model
  useEffect(() => {
    if (errors) {
      console.error('Error loading GLTF model:', errors);
    }
  }, [errors]);

  return (
    <mesh>
      <primitive
        object={scene}
        scale={isMobile ? 2.0 : 2.5}
        position={isMobile ? [1, -1, -8.2] : [2, -1.25, -7.5]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1500);
    };

    // Initial check
    handleResize();

    // Listen for resize events
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      camera={{ fov: 12, near: 12, far: 300, position: [-20, -3, -8] }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls autoRotate  autoRotateSpeed={4}  enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
