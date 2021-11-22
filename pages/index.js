import { css } from '@emotion/react';
import {
  Environment,
  FlyControls,
  Html,
  OrbitControls,
  useProgress,
} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, {
  createContext,
  Suspense,
  useCallback,
  useEffect,
  useState,
} from 'react';
import Header from '../Components/Header';
import MainModel from '../Components/MainModel';

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}

const canvasWrapper = css`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const wrapperMain = css`
  box-sizing: border-box;
  margin: 0;
  display: flex;
  .Controls {
    text-align: center;
    font-family: 'Oswald';
    height: 50px;
    width: 50px;
    background-color: black;
    color: white;
    font-size: 30px;
    top: 50px;
    margin-left: 40px;
    margin-top: 40px;
  }
  .Textures {
    position: fixed;
    top: 100px;
  }
`;

export const TextureContext = createContext();

export default function Scene() {
  const [textureSelector, setTextureSelector] = useState('texture1');

  const [controls, setControls] = useState(true);

  const keyPress = useCallback(
    (e) => {
      if (e.keyCode === 67) {
        setControls(!controls);
      }
    },
    [controls, setControls],
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  return (
    <div css={wrapperMain}>
      <div css={canvasWrapper}>
        <Canvas camera={{ position: [500, 500, 500] }}>
          <Suspense fallback={<Loader />}>
            <spotLight
              position={[1000, 1500, 1000]}
              angle={0.5}
              intensity={1}
            />

            {controls ? (
              <OrbitControls />
            ) : (
              <FlyControls
                autoForward={false}
                dragToLook={true}
                movementSpeed={300}
                rollSpeed={1}
              />
            )}

            <TextureContext.Provider value={textureSelector}>
              <MainModel />
            </TextureContext.Provider>

            <Environment files="studio.hdr" />
          </Suspense>
        </Canvas>
      </div>
      <Header />
      <select
        className="Textures"
        onChange={(e) => {
          setTextureSelector(e.currentTarget.value);
        }}
      >
        <option value="texture1">1</option>
        <option value="texture2">2</option>
        <option value="texture3">3</option>
        <option value="texture4">4</option>
        <option value="texture5">5</option>
      </select>
      {controls ? (
        <div className="Controls">
          <div>O</div>
        </div>
      ) : (
        <div className="Controls">F</div>
      )}
    </div>
  );
}
