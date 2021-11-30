import { css } from '@emotion/react';
import Image from 'next/image';
import { useState } from 'react';
import Draggable from 'react-draggable';
import { CgMaximizeAlt, CgMinimize } from 'react-icons/cg';
import { MdClose } from 'react-icons/md';

export default function FlyingModal1() {
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
                src="https://res.cloudinary.com/storage3dfiles/image/upload/v1637930915/3D-Material/20190128_Massing_render_1_oisls9.jpg"
                draggable={false}
                layout="fill"
              />
            </div>
            <div css={div3Style}>
              {showText ? (
                <div css={div3Style}>
                  Geyser Tower Two, 2019.
                  <br />A speculative design proposal for an ancient tower,
                  situated in the middle of hot springs. The warm air rises
                  through the structure to passively heat the interior spaces.{' '}
                </div>
              ) : null}
            </div>
          </div>
        </Draggable>
      ) : null}{' '}
    </>
  );
}
