// import React, { useRef, useEffect } from "react";
// import { Canvas, extend, useFrame, useThree } from "@react-three/fiber";
// import { OrbitControls, Stats } from "@react-three/drei";
// import { Water } from "three-stdlib";
// import * as THREE from "three";

// // Extend R3F with Water
// extend({ Water });

// const WaterPlane = () => {
//   const waterRef = useRef();
//   const meshRef = useRef();

//   const { scene, gl, camera } = useThree();

//   useEffect(() => {
//     if (!waterRef.current) return;

//     // Water options
//     const waterOptions = {
//       textureWidth: 512,
//       textureHeight: 512,
//       waterNormals: new THREE.TextureLoader().load(
//         "https://threejs.org/examples/textures/waternormals.jpg",
//         (texture) => {
//           texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
//         }
//       ),
//       alpha: 1.0,
//       sunDirection: new THREE.Vector3(),
//       sunColor: 0xffffff,
//       waterColor: 0x001e0f,
//       distortionScale: 3.7,
//       fog: scene.fog !== undefined,
//     };

//     // Assign args for the Water constructor
//     waterRef.current.material = new Water(
//       meshRef.current.geometry,
//       waterOptions
//     );
//   }, [scene]);

//   // Animate water
//   useFrame((state, delta) => {
//     if (waterRef.current) {
//       waterRef.current.material.uniforms["time"].value += delta;
//     }
//   });

//   return (
//     <mesh ref={meshRef} rotation-x={-Math.PI / 2}>
//       <planeGeometry args={[100, 100]} />
//       <primitive ref={waterRef} object={new Water()} />
//     </mesh>
//   );
// };

// export default function App() {
//   return (
//     <Canvas camera={{ position: [0, 10, 20], fov: 60 }}>
//       <ambientLight intensity={0.5} />
//       <directionalLight position={[10, 10, 5]} intensity={1} />
//       <WaterPlane />
//       <OrbitControls />
//       <Stats />
//     </Canvas>
//   );
// }
