// === LaptopModel.jsx ===
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

const LaptopModel = (props) => {
  const group = useRef();

  const { nodes, materials, scene } = useGLTF(
    'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf'
  );

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (group.current) {
      group.current.rotation.y = Math.sin(t / 4) / 4;
      group.current.position.y = Math.sin(t / 1.5) / 10;
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      {/* Optional: log to inspect the structure */}
      {/* {console.log(nodes)} */}

      {nodes && nodes['Cube001'] && materials && materials['Material.001'] ? (
        <mesh
          geometry={nodes.Cube001.geometry}
          material={materials['Material.001']}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.7}
        />
      ) : (
        <primitive object={scene} />
      )}
    </group>
  );
};

export default LaptopModel;

useGLTF.preload(
  'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf'
);
