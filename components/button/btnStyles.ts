import { StyleSheet } from "react-native"

const btnStyles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
  },

  button: {
    backgroundColor: "red",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    //equivalent to border-radius in CSS
    borderRadius: 20,
  },
  text: {
    fontSize: 12,
    fontWeight: "500",
    textTransform: "uppercase",
  },
})

export default btnStyles
