import { Dimensions, StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    width: "100%",

    //the Dimensions component in React Native is similar to getting the viewport width/height of the device. It helps make the app responsive to the viewport of the device.
    height: Dimensions.get("window").height,
  },
})

export default styles
