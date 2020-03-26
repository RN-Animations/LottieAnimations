import React, { useEffect, useRef } from "react";
import { View } from "react-native";
import LottieView from "lottie-react-native/src/js";

export default PG_ReactLogo = () => {
  const animation = useRef(null)

  useEffect(() => {
    animation.current.play();
  });

  return (
    <LottieView
      ref={animation}
      source={require("../assets/animations/react-native-logo.json")}
    />
  );
};
