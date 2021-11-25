import { useGLTF } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import React, { useCallback, useContext, useRef, useState } from 'react';
import { TextureLoader } from 'three';
import { TextureContext } from '../pages';

export default function MainModel5(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/murex-reduced.gltf');
  const texture = useContext(TextureContext);
  const colorMap = useLoader(TextureLoader, `/textures/${texture}.jpg`);

  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const [isHovered5, setIsHovered5] = useState(false);
  const [isHovered6, setIsHovered6] = useState(false);
  const [isHovered7, setIsHovered7] = useState(false);
  const [isHovered8, setIsHovered8] = useState(false);

  const color = isHovered ? '#ff0000' : '#ffffff';
  const color1 = isHovered1 ? '#ff0000' : '#ffffff';
  const color2 = isHovered2 ? '#ff0000' : '#ffffff';
  const color3 = isHovered3 ? '#ff0000' : '#ffffff';
  const color4 = isHovered4 ? '#ff0000' : '#ffffff';
  const color5 = isHovered5 ? '#ff0000' : '#ffffff';
  const color6 = isHovered6 ? '#ff0000' : '#ffffff';
  const color7 = isHovered7 ? '#ff0000' : '#ffffff';
  const color8 = isHovered8 ? '#ff0000' : '#ffffff';

  const onHover = useCallback(
    (e, value) => {
      e.stopPropagation();
      setIsHovered(value);
    },
    [setIsHovered],
  );

  const onHover1 = useCallback(
    (e, value) => {
      e.stopPropagation();
      setIsHovered1(value);
    },
    [setIsHovered1],
  );
  const onHover2 = useCallback(
    (e, value) => {
      e.stopPropagation();
      setIsHovered2(value);
    },
    [setIsHovered2],
  );
  const onHover3 = useCallback(
    (e, value) => {
      e.stopPropagation();
      setIsHovered3(value);
    },
    [setIsHovered3],
  );
  const onHover4 = useCallback(
    (e, value) => {
      e.stopPropagation();
      setIsHovered4(value);
    },
    [setIsHovered4],
  );
  const onHover5 = useCallback(
    (e, value) => {
      e.stopPropagation();
      setIsHovered5(value);
    },
    [setIsHovered5],
  );
  const onHover6 = useCallback(
    (e, value) => {
      e.stopPropagation();
      setIsHovered6(value);
    },
    [setIsHovered6],
  );
  const onHover7 = useCallback(
    (e, value) => {
      e.stopPropagation();
      setIsHovered7(value);
    },
    [setIsHovered7],
  );
  const onHover8 = useCallback(
    (e, value) => {
      e.stopPropagation();
      setIsHovered8(value);
    },
    [setIsHovered8],
  );

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <mesh
        geometry={nodes.murex8.geometry}
        material={materials.murex8}
        material-color={color}
        onPointerOver={(e) => onHover(e, true)}
        onPointerOut={(e) => onHover(e, false)}
        // onClick={() => {
        //   setShowHtml1(!showHtml1);
        // }}
      >
        <meshStandardMaterial map={colorMap} />
      </mesh>
      <mesh
        geometry={nodes.murex9.geometry}
        material={materials.murex9}
        material-color={color1}
        onPointerOver={(e) => onHover1(e, true)}
        onPointerOut={(e) => onHover1(e, false)}
      >
        <meshStandardMaterial map={colorMap} />
      </mesh>
      <mesh
        geometry={nodes.murex7.geometry}
        material={materials.murex7}
        material-color={color2}
        onPointerOver={(e) => onHover2(e, true)}
        onPointerOut={(e) => onHover2(e, false)}
      >
        <meshStandardMaterial map={colorMap} />
      </mesh>
      <mesh
        geometry={nodes.murex6.geometry}
        material={materials.murex6}
        material-color={color3}
        onPointerOver={(e) => onHover3(e, true)}
        onPointerOut={(e) => onHover3(e, false)}
      >
        <meshStandardMaterial map={colorMap} />
      </mesh>
      <mesh
        geometry={nodes.murex4.geometry}
        material={materials.murex4}
        material-color={color4}
        onPointerOver={(e) => onHover4(e, true)}
        onPointerOut={(e) => onHover4(e, false)}
      >
        <meshStandardMaterial map={colorMap} />
      </mesh>
      <mesh
        geometry={nodes.murex5.geometry}
        material={materials.murex5}
        material-color={color5}
        onPointerOver={(e) => onHover5(e, true)}
        onPointerOut={(e) => onHover5(e, false)}
      >
        <meshStandardMaterial map={colorMap} />
      </mesh>
      <mesh
        geometry={nodes.murex3.geometry}
        material={materials.murex3}
        material-color={color6}
        onPointerOver={(e) => onHover6(e, true)}
        onPointerOut={(e) => onHover6(e, false)}
      >
        <meshStandardMaterial map={colorMap} />
      </mesh>
      <mesh
        geometry={nodes.murex1.geometry}
        material={materials.murex1}
        material-color={color7}
        onPointerOver={(e) => onHover7(e, true)}
        onPointerOut={(e) => onHover7(e, false)}
      />
      <mesh
        geometry={nodes.murex2.geometry}
        material={materials.murex2}
        material-color={color8}
        onPointerOver={(e) => onHover8(e, true)}
        onPointerOut={(e) => onHover8(e, false)}
      >
        <meshStandardMaterial map={colorMap} />
      </mesh>
      <mesh geometry={nodes.hair.geometry} material={materials.hair} />
    </group>
  );
}

useGLTF.preload('/murex-reduced.gltf');
