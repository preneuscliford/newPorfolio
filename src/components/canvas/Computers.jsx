import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = () => {
  const { scene } = useGLTF("./desktop_pc/scene.gltf"); // Utilisation de la déstructuration pour obtenir la scène directement

  // Configuration simplifiée pour tous les appareils
  const scale = 0.75;
  const position = [0, -3.25, -1.5];
  const rotation = [-0.01, -0.2, -0.1];

  return (
    <primitive
      object={scene}
      scale={scale}
      position={position}
      rotation={rotation}
    />
  );
};

const ComputersCanvas = () => {
  // Utilisation du useState et useEffect pour détecter la taille de l'écran est inutile ici car nous affichons sur tous les appareils
  return (
    <Canvas
      shadows={false} // Désactivation des ombres pour améliorer les performances sur les appareils mobiles
      dpr={Math.min(2, window.devicePixelRatio)} // Ajustement dynamique de la résolution
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ alpha: true }} // Activation de la transparence sans préserver le buffer de dessin
    >
      <Suspense fallback={<CanvasLoader />}>
        <ambientLight intensity={0.5} />{" "}
        {/* Lumière ambiante pour un éclairage simple et performant */}
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default ComputersCanvas;
