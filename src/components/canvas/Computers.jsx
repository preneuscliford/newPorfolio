import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const { scene } = useGLTF("./desktop_pc/scene.gltf");

  // Réduction de l'échelle pour les mobiles moins puissants
  const scale = isMobile ? 0.5 : 0.75; // Réduit légèrement plus pour les mobiles
  const position = isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5];
  const rotation = [-0.01, -0.2, -0.1];

  return (
    <mesh>
      <ambientLight intensity={0.3} />{" "}
      {/* Utilisation d'une lumière ambiante pour réduire la charge */}
      <primitive
        object={scene}
        scale={scale}
        position={position}
        rotation={rotation}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)"); // Ajustement pour inclure plus de dispositifs mobiles
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      shadows={false} // Désactivation des ombres pour améliorer les performances
      dpr={Math.min(window.devicePixelRatio, 2)} // Limite le DPR à 2 pour les dispositifs à haute résolution
      camera={{ position: [20, 3, 5], fov: 25 }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
