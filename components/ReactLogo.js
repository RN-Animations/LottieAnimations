import React from "react";
import { View } from "react-native";
import LottieView from "lottie-react-native/src/js";

export default class ReactLogo extends React.Component {

componentDidMount = () => {
  this.animation.play();
};

  

  render() {
    return (
        <LottieView
          ref={animation => {
            this.animation = animation;
          }}
          source={require("../assets/animations/react-native-logo.json")}
        />
      );
  }
  
};

