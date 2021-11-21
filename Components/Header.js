import { css } from '@emotion/react';
import { useState } from 'react';
import LoginPage from '../pages/login';
import RegisterPage from '../pages/register';

export const navWrapper = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const navStyles = css`
  @import url('https://fonts.googleapis.com/css?family=Oswald:500');

  nav {
    width: 100%;
    position: fixed;
    top: 50px;
    text-align: center;
  }
  div {
    font-family: 'Oswald', sans-serif;
    font-weight: 500;
    text-transform: uppercase;
    text-decoration: none;
    color: #16151b;
    margin: 0 15px;
    font-size: 16px;
    letter-spacing: 1px;
    position: relative;
    display: inline-block;
    cursor: pointer;
  }
`;

const modalBackground = css`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 80%;
`;

const modalWrapper = css`
  width: 600px;
  height: 600px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  position: relative;
  top: 150px;
`;

const modalContent = css`
  text-align: center;
  top: 25px;
  padding: 15px;
  height: inherit;
  button {
    display: inline-block;
    border: 0.1em solid black;
    padding: 0.35em 1.2em;
    margin-top: 10px;
    width: 150px;
    background-color: black;
    color: white;
    font-family: 'Oswald', sans-serif;
    text-transform: uppercase;
    text-align: center;
    cursor: pointer;
  }
`;

export default function Header() {
  const [showInstrModal, setShowInstrModal] = useState(false);
  const [showControlsModal, setShowControlsModal] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  return (
    <>
      <div css={navWrapper}>
        <div css={navStyles}>
          <nav>
            <div
              onClick={() => {
                setShowInstrModal(!showInstrModal);
              }}
              aria-hidden="true"
            >
              Instructions
            </div>
            <div
              onClick={() => {
                setShowControlsModal(!showControlsModal);
              }}
              aria-hidden="true"
            >
              Controls
            </div>
            <div
              onClick={() => {
                setShowAboutModal(!showAboutModal);
              }}
              aria-hidden="true"
            >
              What's going on here?
            </div>
            <div
              onClick={() => {
                setShowLoginModal(!showLoginModal);
              }}
              aria-hidden="true"
            >
              Login
            </div>
            <div
              onClick={() => {
                setShowRegisterModal(!showRegisterModal);
              }}
              aria-hidden="true"
            >
              Register
            </div>
          </nav>
        </div>
      </div>

      {showInstrModal ? (
        <div css={modalBackground}>
          <div css={modalWrapper}>
            <div css={modalContent}>
              <div>Hola Muchachos</div>
              <br />
              <div style={{ textAlign: 'justify' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </div>
              <br />
              <button onClick={() => setShowInstrModal(!showInstrModal)}>
                Close
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {showControlsModal ? (
        <div css={modalBackground}>
          <div css={modalWrapper}>
            <div css={modalContent}>
              <div>Hola Muchachos</div>
              <br />
              <p style={{ textAlign: 'justify' }}>
                Default: Click the mouse and rotate the object freely. Use the
                mouse wheel to zoom. Press <strong>C</strong> to enable/disable
                FlyControls. When in FlyControls, use WASD to maneuvre, Q and E
                to roll, and the mouse to look (while pressing the left button).
              </p>
              <br />
              <button onClick={() => setShowControlsModal(!showControlsModal)}>
                Close
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {showAboutModal ? (
        <div css={modalBackground}>
          <div css={modalWrapper}>
            <div css={modalContent}>
              <div>Hola Muchachos</div>
              <br />
              <div style={{ textAlign: 'justify' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </div>
              <br />
              <button onClick={() => setShowAboutModal(!showAboutModal)}>
                Close
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {showLoginModal ? (
        <div css={modalBackground}>
          <div css={modalWrapper}>
            <div css={modalContent}>
              <LoginPage />
              <button onClick={() => setShowLoginModal(!showLoginModal)}>
                Close
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {showRegisterModal ? (
        <div css={modalBackground}>
          <div css={modalWrapper}>
            <div css={modalContent}>
              <RegisterPage />
              <button onClick={() => setShowRegisterModal(!showRegisterModal)}>
                Close
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
