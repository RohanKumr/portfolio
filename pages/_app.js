import { useRef, useState, useEffect } from "react";
import "../common/styles/main.scss";

import ScreenState from "../contexts/screen-state";

function MyApp({ Component, pageProps }) {
  const [screenState, _setScreenState] = useState({
    isMobile: true,
    isTablet: true,
    isBigMobile: false,
    isSmallMobile: true,
    isBigDesktop: false,
  });
  // const [screen, setScreen] = useState('small');
  const stateRef = useRef(screenState);
  const setScreenState = (newState) => {
    stateRef.current = { ...newState };
    _setScreenState(newState);
  };
  const compareStates = (obj1, obj2) => {
    for (let key in obj1) {
      if (obj1[key] !== obj2[key]) return false;
    }
    return true;
  };

  const handleResizeListener = () => {
    const width = window.innerWidth;
    // const windowSize = getScreenWidth();
    // if (screen !== windowSize) {
    //     setScreen({ screen: windowSize });
    // }
    let isMobile = false,
      isTablet = false,
      isBigMobile = false,
      isSmallMobile = false,
      isBigDesktop = false;

    if (width >= 1280) isBigDesktop = true;
    if (width < 1200 && width > 600) isBigMobile = true;
    if (width < 992) isMobile = true;
    if (width < 769) isTablet = true;
    if (width < 531) isSmallMobile = true;
    const newState = {
      isMobile,
      isTablet,
      isBigMobile,
      isSmallMobile,
      isBigDesktop,
    };
    const areBothSame = compareStates(newState, stateRef.current || {});
    if (!areBothSame) {
      setScreenState(newState);
    }
  };
  useEffect(() => {
    handleResizeListener();
    window.addEventListener("resize", handleResizeListener);
    return () => {
      window.removeEventListener("resize", handleResizeListener);
    };
  }, []);
  return (
    <ScreenState.Provider>
      <Component {...pageProps} screenState={screenState} />;
    </ScreenState.Provider>
  );
}

export default MyApp;
