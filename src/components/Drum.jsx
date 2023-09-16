import React, { useEffect } from 'react';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { useLoader } from '@react-three/fiber';
import { OrbitControls, TransformControls } from '@react-three/drei';

// export default function Drum() {
//   return (
//     <>
//       <OrbitControls />

//       <directionalLight position={[1, 2, 3]} intensity={1.5} />
//       <ambientLight intensity={0.5} />

//       <mesh position-x={-2}>
//         <sphereGeometry />
//         <meshStandardMaterial color='orange' />
//       </mesh>
//       <TransformControls>
//         <mesh position-x={2} scale={1.5}>
//           <boxGeometry />
//           <meshStandardMaterial color='mediumpurple' />
//         </mesh>
//       </TransformControls>

//       <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
//         <planeGeometry />
//         <meshStandardMaterial color='greenyellow' />
//       </mesh>
//     </>
//   );
// }

function ModelViewer() {
  const glbUrl = '/drumset.glb';

  return (
    <Canvas onClick={(e) => console.log(e)}>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <Model glbUrl={glbUrl} />
      </Suspense>
    </Canvas>
  );
}

function Model({ glbUrl }) {
  const gltf = useLoader(GLTFLoader, glbUrl);

  return <primitive object={gltf.scene} />;
}

export default ModelViewer;
