import { css } from '@emotion/react';
import Image from 'next/image';
import { useState } from 'react';
import Draggable from 'react-draggable';
import { CgMaximizeAlt, CgMinimize } from 'react-icons/cg';
import { MdClose } from 'react-icons/md';

export default function FlyingModal3() {
  const [divSize, setDivSize] = useState(150);
  const [divSize2, setDivSize2] = useState(75);
  const [showText, setShowText] = useState(false);

  const divStyle = css`
    @import url('https://fonts.googleapis.com/css?family=Oswald:500');
    padding: 5px;
    text-align: center;
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
    height: 100px;
    width: 380px;
    font-family: 'Oswald';

    font-weight: lighter;
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
                  setShowText(false);
                }}
              />
              <CgMaximizeAlt
                className="close"
                onClick={() => {
                  setDivSize(400);
                  setDivSize2(300);
                  setShowText(true);
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
                src="https://res.cloudinary.com/storage3dfiles/image/upload/v1637930916/3D-Material/20181124_GeoArticulation_WadiRum_1-5_jp7ljd.jpg"
                draggable={false}
                layout="fill"
              />
            </div>
            <div css={div3Style}>
              {showText ? (
                <div css={div3Style}>
                  Digital Materiality
                  <br /> Procedurally generated, granular material. Closeup.{' '}
                </div>
              ) : null}
            </div>
          </div>
        </Draggable>
      ) : null}{' '}
    </>
  );
}
