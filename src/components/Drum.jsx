import React, { useEffect, useRef } from 'react';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Suspense } from 'react';
import { useLoader } from '@react-three/fiber';
import { OrbitControls, TransformControls, Resize } from '@react-three/drei';
import extends

function ModelViewer() {
  const glbUrl = '/drumset.glb';
  const stickUrl = '/drumstick.glb';
  const { viewport } = extends useThree();

  const stickRef = useRef();

  useFrame(({ mouse }) => {
    const x = (mouse.x * viewport.width) / 2;
    const y = (mouse.y * viewport.height) / 2;
    stickRef.current.position.set(x, y, 0);
    stickRef.current.rotation.set(-y, x, 0);
  });

  return (
    <Canvas>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <Resize>
          <Model glbUrl={glbUrl} scale={4} />
        </Resize>
        <Resize>
          <Model glbUrl={stickUrl} scale={1} />
        </Resize>
      </Suspense>
    </Canvas>
  );
}

function Model({ glbUrl }) {
  const gltf = useLoader(GLTFLoader, glbUrl);

  return <primitive object={gltf.scene} />;
}

export default ModelViewer;
