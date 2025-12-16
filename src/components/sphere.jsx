import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useEffect } from "react";

function VoiceOrb() {
  const materialRef = useRef();
  const analyserRef = useRef(null);
  const dataRef = useRef(null);

  // ---------------- AUDIO SETUP ----------------
  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      const audioCtx = new AudioContext();
      const source = audioCtx.createMediaStreamSource(stream);
      const analyser = audioCtx.createAnalyser();
      analyser.fftSize = 256;
      source.connect(analyser);

      analyserRef.current = analyser;
      dataRef.current = new Uint8Array(analyser.frequencyBinCount);
    });
  }, []);

  // ---------------- FRAME LOOP ----------------
  useFrame(({ clock }) => {
    if (!analyserRef.current) return;

    analyserRef.current.getByteFrequencyData(dataRef.current);
    const avg =
      dataRef.current.reduce((a, b) => a + b, 0) /
      dataRef.current.length;

    materialRef.current.uniforms.uTime.value = clock.elapsedTime;
    materialRef.current.uniforms.uEnergy.value = avg / 255;
  });

  return (
    <mesh>
      <sphereGeometry args={[1, 128, 128]} />
      <shaderMaterial
        ref={materialRef}
        uniforms={{
          uTime: { value: 0 },
          uEnergy: { value: 0 },
        }}
        vertexShader={`
          varying vec2 vUv;
          varying vec3 vNormal;
          varying vec3 vPosition;
          uniform float uTime;
          uniform float uEnergy;

          void main() {
            vUv = uv;
            vNormal = normalize(normalMatrix * normal);
            vPosition = position;

            float energy = clamp(uEnergy * 4.0, 0.0, 1.0);
            vec3 pos = position;

            // Calculate edge distance for displacement
            float d = distance(uv, vec2(0.5));
            float edgeFactor = smoothstep(0.3, 0.5, d);

            // Wave animation
            float wave =
              sin(pos.y * 6.0 + uTime) +
              cos(pos.x * 6.0 - uTime) +
              sin((pos.x + pos.y) * 4.0 + uTime);

            float displacement = wave * edgeFactor * (0.035 + energy * 0.1);
            pos += normal * displacement;

            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `}
        fragmentShader={`
          varying vec2 vUv;
          varying vec3 vNormal;
          varying vec3 vPosition;
          uniform float uTime;
          uniform float uEnergy;

          void main() {
            float energy = clamp(uEnergy * 4.0, 0.0, 1.0);
            
            // Calculate distance from center for radial gradient
            float dist = distance(vUv, vec2(0.5));
            
            // -------- CENTER TO EDGE GRADIENT --------
            // Soft white/pastel center
            vec3 centerColor = vec3(0.98, 0.96, 1.0);
            
            // Vibrant iridescent edge colors
            float t = uTime * 0.4;
            vec3 color1 = vec3(0.5, 0.7, 1.0);   // Blue
            vec3 color2 = vec3(1.0, 0.4, 0.8);   // Pink
            vec3 color3 = vec3(0.4, 1.0, 0.7);   // Cyan
            vec3 color4 = vec3(1.0, 0.7, 0.3);   // Orange
            
            // Animated color mixing based on UV coordinates
            float angle = atan(vUv.y - 0.5, vUv.x - 0.5);
            float colorMix1 = sin(angle * 3.0 + t) * 0.5 + 0.5;
            float colorMix2 = sin(angle * 2.0 - t * 0.7) * 0.5 + 0.5;
            float colorMix3 = sin(dist * 8.0 + t) * 0.5 + 0.5;
            
            vec3 edgeColor = mix(color1, color2, colorMix1);
            edgeColor = mix(edgeColor, color3, colorMix2 * 0.5);
            edgeColor = mix(edgeColor, color4, colorMix3 * 0.3);
            
            // -------- RADIAL BLEND --------
            // Smooth transition from center to edge
            float gradientFactor = smoothstep(0.0, 0.5, dist);
            vec3 finalColor = mix(centerColor, edgeColor, gradientFactor);
            
            // -------- OUTER RIM GLOW --------
            // Add bright rim at the very edge
            float rimStrength = smoothstep(0.35, 0.5, dist);
            vec3 rimColor = edgeColor * 1.3;
            finalColor = mix(finalColor, rimColor, rimStrength * 0.6);
            
            // -------- VOICE ENERGY BOOST --------
            finalColor += energy * vec3(0.12, 0.15, 0.18);
            
            // -------- BRIGHTNESS ADJUSTMENT --------
            // Ensure colors are visible and vibrant
            finalColor = clamp(finalColor * 1.1, 0.0, 1.0);
            
            gl_FragColor = vec4(finalColor, 1.0);
          }
        `}
      />
    </mesh>
  );
}

export default function IridescentVoiceOrb() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background:
          "radial-gradient(circle at center, #e8ecf5 0%, #f8f9fc 70%)",
      }}
    >
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[5, 5, 5]} intensity={0.5} />
        <VoiceOrb />
      </Canvas>
    </div>
  );
}