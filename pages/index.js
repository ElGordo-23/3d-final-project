import { css } from '@emotion/react';
import {
  Environment,
  FlyControls,
  Html,
  OrbitControls,
  useProgress,
} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense, useCallback, useState } from 'react';
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
`;

export default function Scene() {
  const [controls, setControls] = useState(true);

  const keyPress = useCallback(
    (e) => {
      if (e.keyCode === 67) {
        setControls(!controls);
      }
    },
    [controls, setControls],
  );

  // document.addEventListener('keydown', keyPress);

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

            <MainModel />

            <Environment files="studio.hdr" />

            <Html position={[200, 0, 200]}>
              {/* <button
                onClick={() => {
                  setControls(!controls);
                }}
              >
                Switch Controls
              </button> */}
            </Html>
          </Suspense>
        </Canvas>
      </div>
      <Header />
    </div>
  );
}
