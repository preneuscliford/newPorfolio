import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const { scene } = useGLTF("./desktop_pc/scene.gltf"); // Utilisation de la déstructuration pour obtenir la scène directement

  // Configuration simplifiée pour les mobiles moins puissants
  const scale = isMobile ? 0.7 : 0.75;
  const position = isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5];
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)"); // Ajustement de la largeur pour inclure plus d'appareils

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () =>
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows={false} // Désactivation des ombres pour améliorer les performances sur les appareils mobiles
      dpr={[1, 2]} // Ajustement du DPR pour les écrans de haute résolution
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true, alpha: true }} // Conservation du buffer pour les captures d'écran, avec support de la transparence
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          autoRotate // Ajout de l'auto-rotation comme dans l'exemple de la Terre
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default ComputersCanvas;
