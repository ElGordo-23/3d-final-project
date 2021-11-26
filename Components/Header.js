import { css } from '@emotion/react';
import { useRef, useState } from 'react';
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
    cursor: pointer;
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
  }
`;

const modalBackground = css`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 90%;
`;

const modalWrapper = css`
  width: 600px;
  height: 600px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  position: relative;
  top: 100px;
`;

const modalContent = css`
  text-align: center;
  top: 25px;
  padding: 15px;
  height: inherit;
  font-family: 'Oswald', sans-serif;
  font-weight: lighter;
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

  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowInstrModal(false);
    }
  };
  const closeModal2 = (e) => {
    if (modalRef.current === e.target) {
      setShowControlsModal(false);
    }
  };
  const closeModal3 = (e) => {
    if (modalRef.current === e.target) {
      setShowAboutModal(false);
    }
  };
  const closeModal4 = (e) => {
    if (modalRef.current === e.target) {
      setShowLoginModal(false);
    }
  };
  const closeModal5 = (e) => {
    if (modalRef.current === e.target) {
      setShowRegisterModal(false);
    }
  };

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
              About
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
        <div
          css={modalBackground}
          ref={modalRef}
          onClick={closeModal}
          aria-hidden="true"
        >
          <div css={modalWrapper}>
            <div css={modalContent}>
              <br />
              <div style={{ textAlign: 'justify' }}>
                The Model you see acts as the main menu for the page content.
                When you hover the mouse over the model, you will see the
                currently selected layer highlighted in red. Most of those
                layers are clickable and will promt a little window that shows
                more information related to the project. You can expand and drag
                the little windows around the scene. Zoom out until the main
                model disappears in order to have a clear view. On the left,
                change the texture of the main model by selecting one of the
                numbers. Click on <strong>M</strong> to change the model.
                <br />
                <br />
                For performance reasons, it can be helpful to refresh the page
                every now and then.
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
        <div
          css={modalBackground}
          ref={modalRef}
          onClick={closeModal2}
          aria-hidden="true"
        >
          <div css={modalWrapper}>
            <div css={modalContent}>
              <br />
              <p style={{ textAlign: 'justify' }}>
                Default: Click the mouse and rotate the object freely. Use the
                mouse wheel to zoom. (OrbitControls)
                <br />
                <br />
                Press <strong>C</strong> to enable/disable FlyControls.
                <br />
                You can see which mode you're in on the left side (O =
                OrbitControls, F = FlyControls)
                <br />
                <br />
                When in FlyControls, use WASD to maneuvre, Q and E to roll, and
                the mouse to look (while pressing the left button).
                <br />
                <br />
                Click on <strong>M</strong> to change the model.
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
        <div
          css={modalBackground}
          ref={modalRef}
          onClick={closeModal3}
          aria-hidden="true"
        >
          <div css={modalWrapper}>
            <div css={modalContent}>
              <br />
              <div style={{ textAlign: 'justify' }}>
                This Page displays two projects by{' '}
                <a href="https://www.cutaneous.work/">Andreas Körner</a>, and
                was built by Felix Lang.
                <br />
                <br />
                All Artwork ©Andreas Körner.
                <br />
                <br />
                Website ©Felix Lang 2021.
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
        <div
          css={modalBackground}
          ref={modalRef}
          onClick={closeModal4}
          aria-hidden="true"
        >
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
        <div
          css={modalBackground}
          ref={modalRef}
          onClick={closeModal5}
          aria-hidden="true"
        >
          <div css={modalWrapper}>
            <div css={modalContent}>
              <br />
              <RegisterPage />
              <br />
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
