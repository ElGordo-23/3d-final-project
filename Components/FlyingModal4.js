import { css } from '@emotion/react';
import Image from 'next/image';
import { useState } from 'react';
import Draggable from 'react-draggable';
import { CgMaximizeAlt, CgMinimize } from 'react-icons/cg';
import { MdClose } from 'react-icons/md';

export default function FlyingModal4() {
  const [divSize, setDivSize] = useState(150);
  const [divSize2, setDivSize2] = useState(75);

  const divStyle = css`
    padding: 5px;
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    height: ${divSize}px;
    width: ${divSize}px;
    border: 2px solid black;
    display: flex;
    flex-direction: column;
    align-items: unset;
    justify-content: space-around;
  `;

  const div2Style = css`
    height: ${divSize2}px;
    width: ${divSize2}px;
    position: relative;
    display: grid;
    grid-template-columns: auto;
  `;

  const div3Style = css`
    height: 30px;
    width: 150px;
  `;

  const [showFlyingModal, setShowFlyingModal] = useState(true);

  return (
    <>
      {showFlyingModal ? (
        <Draggable>
          <div css={divStyle}>
            <div>
              <CgMinimize
                className="close"
                onClick={() => {
                  setDivSize(150);
                  setDivSize2(75);
                }}
              />
              <CgMaximizeAlt
                className="close"
                onClick={() => {
                  setDivSize(400);
                  setDivSize2(300);
                }}
              />

              <MdClose
                className="close"
                onClick={() => setShowFlyingModal(false)}
              />
            </div>
            <div css={div2Style}>
              <Image
                id="image"
                src="https://res.cloudinary.com/storage3dfiles/image/upload/v1637930915/3D-Material/20190128_Massing_render_5_myqjkk.jpg"
                draggable={false}
                layout="fill"
              />
            </div>
            <div css={div3Style}>
              <p>TEXTEXTEXTEXT</p>
            </div>
          </div>
        </Draggable>
      ) : null}{' '}
    </>
  );
}
