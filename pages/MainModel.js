import { css } from '@emotion/react';
import { Billboard, Html, Plane, Text, useGLTF } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import React, { useCallback, useRef, useState } from 'react';
import { TextureLoader } from 'three';
import Model2 from './Model2';

const divStyle = css`
  padding: 20px;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  height: 100px;
  width: 100px;
  border: 2px solid black;
`;

export default function MainModel(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/1-baked.gltf');
  const colorMap = useLoader(
    TextureLoader,
    '20190314_Sattelite Images from Google Earth Colour-09.jpg',
  );

  const [showHtml, setShowHtml] = useState(false);

  const [isHovered, setIsHovered] = useState(false);

  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const [isHovered5, setIsHovered5] = useState(false);
  const [isHovered6, setIsHovered6] = useState(false);
  const [isHovered7, setIsHovered7] = useState(false);
  const [isHovered8, setIsHovered8] = useState(false);
  const [isHovered9, setIsHovered9] = useState(false);
  const [isHovered10, setIsHovered10] = useState(false);
  const [isHovered11, setIsHovered11] = useState(false);
  const [isHovered12, setIsHovered12] = useState(false);
  const [isHovered13, setIsHovered13] = useState(false);
  const [isHovered14, setIsHovered14] = useState(false);
  const [isHovered15, setIsHovered15] = useState(false);
  const [isHovered16, setIsHovered16] = useState(false);
  const [isHovered17, setIsHovered17] = useState(false);
  const [isHovered18, setIsHovered18] = useState(false);
  const [isHovered19, setIsHovered19] = useState(false);
  const [isHovered20, setIsHovered20] = useState(false);
  const [isHovered21, setIsHovered21] = useState(false);

  const color = isHovered ? '#ff0000' : '#ffffff';
  const color1 = isHovered1 ? '#ff0000' : '#ffffff';
  const color2 = isHovered2 ? '#ff0000' : '#ffffff';
  const color3 = isHovered3 ? '#ff0000' : '#ffffff';
  const color4 = isHovered4 ? '#ff0000' : '#ffffff';
  const color5 = isHovered5 ? '#ff0000' : '#ffffff';
  const color6 = isHovered6 ? '#ff0000' : '#ffffff';
  const color7 = isHovered7 ? '#ff0000' : '#ffffff';
  const color8 = isHovered8 ? '#ff0000' : '#ffffff';
  const color9 = isHovered9 ? '#ff0000' : '#ffffff';
  const color10 = isHovered10 ? '#ff0000' : '#ffffff';
  const color11 = isHovered11 ? '#ff0000' : '#ffffff';
  const color12 = isHovered12 ? '#ff0000' : '#ffffff';
  const color13 = isHovered13 ? '#ff0000' : '#ffffff';
  const color14 = isHovered14 ? '#ff0000' : '#ffffff';
  const color15 = isHovered15 ? '#ff0000' : '#ffffff';
  const color16 = isHovered16 ? '#ff0000' : '#ffffff';
  const color17 = isHovered17 ? '#ff0000' : '#ffffff';
  const color18 = isHovered18 ? '#ff0000' : '#ffffff';
  const color19 = isHovered19 ? '#ff0000' : '#ffffff';
  const color20 = isHovered20 ? '#ff0000' : '#ffffff';
  const color21 = isHovered21 ? '#ff0000' : '#ffffff';

  const onHover = useCallback(
    (e, value) => {
      e.stopPropagation();
      setIsHovered1(value);
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
  const onHover9 = useCallback(
    (e, value) => {
      e.stopPropagation();
      setIsHovered9(value);
    },
    [setIsHovered9],
  );
  const onHover10 = useCallback(
    (e, value) => {
      e.stopPropagation();
      setIsHovered10(value);
    },
    [setIsHovered10],
  );
  const onHover11 = useCallback(
    (e, value) => {
      e.stopPropagation();
      setIsHovered11(value);
    },
    [setIsHovered11],
  );

  const onHover12 = useCallback(
    (e, value) => {
      e.stopPropagation();
      setIsHovered12(value);
    },
    [setIsHovered12],
  );
  const onHover13 = useCallback(
    (e, value) => {
      e.stopPropagation();
      setIsHovered13(value);
    },
    [setIsHovered13],
  );
  const onHover14 = useCallback(
    (e, value) => {
      e.stopPropagation();
      setIsHovered14(value);
    },
    [setIsHovered14],
  );
  const onHover15 = useCallback(
    (e, value) => {
      e.stopPropagation();
      setIsHovered15(value);
    },
    [setIsHovered15],
  );
  const onHover16 = useCallback(
    (e, value) => {
      e.stopPropagation();
      setIsHovered16(value);
    },
    [setIsHovered16],
  );
  const onHover17 = useCallback(
    (e, value) => {
      e.stopPropagation();
      setIsHovered17(value);
    },
    [setIsHovered17],
  );
  const onHover18 = useCallback(
    (e, value) => {
      e.stopPropagation();
      setIsHovered18(value);
    },
    [setIsHovered18],
  );
  const onHover19 = useCallback(
    (e, value) => {
      e.stopPropagation();
      setIsHovered19(value);
    },
    [setIsHovered19],
  );
  const onHover20 = useCallback(
    (e, value) => {
      e.stopPropagation();
      setIsHovered20(value);
    },
    [setIsHovered20],
  );
  const onHover21 = useCallback(
    (e, value) => {
      e.stopPropagation();
      setIsHovered21(value);
    },
    [setIsHovered21],
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
        material-color={color}
        onPointerOver={(e) => onHover(e, true)}
        onPointerOut={(e) => onHover(e, false)}
        castShadow
        receiveShadow
        geometry={nodes['2'].geometry}
        material={materials['2.21']}
        position={[0.41, 0.01, 1.86]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.5, 0.5, 0.5]}
      >
        <meshStandardMaterial map={colorMap} />
      </mesh>
      <mesh
        material-color={color1}
        onPointerOver={(e) => onHover1(e, true)}
        onPointerOut={(e) => onHover1(e, false)}
        castShadow
        receiveShadow
        geometry={nodes['2_1'].geometry}
        material={materials['2.20']}
        position={[0.41, 0.01, 1.86]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.5, 0.5, 0.5]}
      />
      <mesh
        onPointerOver={(e) => onHover2(e, true)}
        onPointerOut={(e) => onHover2(e, false)}
        onClick={() => {
          setShowHtml(!showHtml);
        }}
        material-color={color2}
        castShadow
        receiveShadow
        geometry={nodes['2_2'].geometry}
        material={materials['2.19']}
        position={[0.41, 0.01, 1.86]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.5, 0.5, 0.5]}
      />
      <mesh
        material-color={color3}
        onPointerOver={(e) => onHover3(e, true)}
        onPointerOut={(e) => onHover3(e, false)}
        castShadow
        receiveShadow
        geometry={nodes['2_3'].geometry}
        material={materials['2.18']}
        position={[0.41, 0.01, 1.86]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.5, 0.5, 0.5]}
      />
      <mesh
        material-color={color4}
        onPointerOver={(e) => onHover4(e, true)}
        onPointerOut={(e) => onHover4(e, false)}
        castShadow
        receiveShadow
        geometry={nodes['2_4'].geometry}
        material={materials['2.17']}
        position={[0.41, 0.01, 1.86]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.5, 0.5, 0.5]}
      />
      <mesh
        material-color={color5}
        onPointerOver={(e) => onHover5(e, true)}
        onPointerOut={(e) => onHover5(e, false)}
        castShadow
        receiveShadow
        geometry={nodes['2_5'].geometry}
        material={materials['2.16']}
        position={[0.41, 0.01, 1.86]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.5, 0.5, 0.5]}
      />
      <mesh
        material-color={color6}
        onPointerOver={(e) => onHover6(e, true)}
        onPointerOut={(e) => onHover6(e, false)}
        castShadow
        receiveShadow
        geometry={nodes['2_6'].geometry}
        material={materials['2.15']}
        position={[0.41, 0.01, 1.86]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.5, 0.5, 0.5]}
      />
      <mesh
        material-color={color7}
        onPointerOver={(e) => onHover7(e, true)}
        onPointerOut={(e) => onHover7(e, false)}
        castShadow
        receiveShadow
        geometry={nodes['2_7'].geometry}
        material={materials['2.14']}
        position={[0.41, 0.01, 1.86]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.5, 0.5, 0.5]}
      />
      <mesh
        material-color={color8}
        onPointerOver={(e) => onHover8(e, true)}
        onPointerOut={(e) => onHover8(e, false)}
        castShadow
        receiveShadow
        geometry={nodes['2_8'].geometry}
        material={materials['2.13']}
        position={[0.41, 0.01, 1.86]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.5, 0.5, 0.5]}
      />
      <mesh
        material-color={color9}
        onPointerOver={(e) => onHover9(e, true)}
        onPointerOut={(e) => onHover9(e, false)}
        castShadow
        receiveShadow
        geometry={nodes['2_9'].geometry}
        material={materials['2.12']}
        position={[0.41, 0.01, 1.86]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.5, 0.5, 0.5]}
      />
      <mesh
        material-color={color10}
        onPointerOver={(e) => onHover10(e, true)}
        onPointerOut={(e) => onHover10(e, false)}
        castShadow
        receiveShadow
        geometry={nodes['2_10'].geometry}
        material={materials['2.11']}
        position={[0.41, 0.01, 1.86]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.5, 0.5, 0.5]}
      />
      <mesh
        material-color={color11}
        onPointerOver={(e) => onHover11(e, true)}
        onPointerOut={(e) => onHover11(e, false)}
        castShadow
        receiveShadow
        geometry={nodes['2_11'].geometry}
        material={materials['2.10']}
        position={[0.41, 0.01, 1.86]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.5, 0.5, 0.5]}
      />
      <mesh
        material-color={color12}
        onPointerOver={(e) => onHover12(e, true)}
        onPointerOut={(e) => onHover12(e, false)}
        castShadow
        receiveShadow
        geometry={nodes['2_12'].geometry}
        material={materials['2.9']}
        position={[0.41, 0.01, 1.86]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.5, 0.5, 0.5]}
      />
      <mesh
        material-color={color13}
        onPointerOver={(e) => onHover13(e, true)}
        onPointerOut={(e) => onHover13(e, false)}
        castShadow
        receiveShadow
        geometry={nodes['2_13'].geometry}
        material={materials['2.8']}
        position={[0.41, 0.01, 1.86]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.5, 0.5, 0.5]}
      />
      <mesh
        material-color={color14}
        onPointerOver={(e) => onHover14(e, true)}
        onPointerOut={(e) => onHover14(e, false)}
        castShadow
        receiveShadow
        geometry={nodes['2_14'].geometry}
        material={materials['2.7']}
        position={[0.41, 0.01, 1.86]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.5, 0.5, 0.5]}
      />
      <mesh
        material-color={color15}
        onPointerOver={(e) => onHover15(e, true)}
        onPointerOut={(e) => onHover15(e, false)}
        castShadow
        receiveShadow
        geometry={nodes['2_15'].geometry}
        material={materials['2.6']}
        position={[0.41, 0.01, 1.86]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.5, 0.5, 0.5]}
      />
      <mesh
        material-color={color16}
        onPointerOver={(e) => onHover16(e, true)}
        onPointerOut={(e) => onHover16(e, false)}
        castShadow
        receiveShadow
        geometry={nodes['2_16'].geometry}
        material={materials['2.5']}
        position={[0.41, 0.01, 1.86]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.5, 0.5, 0.5]}
      />
      <mesh
        material-color={color17}
        onPointerOver={(e) => onHover17(e, true)}
        onPointerOut={(e) => onHover17(e, false)}
        castShadow
        receiveShadow
        geometry={nodes['2_17'].geometry}
        material={materials['2.4']}
        position={[0.41, 0.01, 1.86]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.5, 0.5, 0.5]}
      />
      <mesh
        material-color={color18}
        onPointerOver={(e) => onHover18(e, true)}
        onPointerOut={(e) => onHover18(e, false)}
        castShadow
        receiveShadow
        geometry={nodes['2_18'].geometry}
        material={materials['2.3']}
        position={[0.41, 0.01, 1.86]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.5, 0.5, 0.5]}
      />
      <mesh
        material-color={color19}
        onPointerOver={(e) => onHover19(e, true)}
        onPointerOut={(e) => onHover19(e, false)}
        castShadow
        receiveShadow
        geometry={nodes['2_19'].geometry}
        material={materials['2.2']}
        position={[0.41, 0.01, 1.86]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.5, 0.5, 0.5]}
      />
      <mesh
        material-color={color20}
        onPointerOver={(e) => onHover20(e, true)}
        onPointerOut={(e) => onHover20(e, false)}
        castShadow
        receiveShadow
        geometry={nodes['2_20'].geometry}
        material={materials['2.1']}
        position={[0.41, 0.01, 1.86]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.5, 0.5, 0.5]}
      />
      <mesh
        material-color={color21}
        onPointerOver={(e) => onHover21(e, true)}
        onPointerOut={(e) => onHover21(e, false)}
        castShadow
        receiveShadow
        geometry={nodes['2_21'].geometry}
        material={materials['2']}
        position={[0.41, 0.01, 1.86]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.5, 0.5, 0.5]}
      />
      {showHtml ? (
        <>
          <Html position={[230, 200, 200]} follow={true}>
            <div css={divStyle} position={[60, 80, 60]}>
              Hola
            </div>
          </Html>
          <Model2
            scale={[0.5, 0.5, 0.5]}
            position={[200, 200, 200]}
            rotation-x={Math.PI * 0.25}
            rotation={[Math.PI / 2, 0, 0]}
          />
        </>
      ) : null}
    </group>
  );
}

useGLTF.preload('/1-baked.gltf');
