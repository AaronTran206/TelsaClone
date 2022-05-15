import React from "react"
import { View, Text, Pressable } from "react-native"
import btnStyles from "./btnStyles"

const Button: React.FC<{
  type: string
  content: string
  onPress: Function
}> = (props) => {
  //destructure props variable to obtain the type, content, and onPress function
  const { type, content, onPress } = props

  //if the type is primary, set the background Color of button to black, else set to white
  const backgroundColor = type === "primary" ? "black" : "white"

  //if type is primary, set text to white, else set to black
  const textColor = type === "primary" ? "white" : "black"

  return (
    <View style={btnStyles.container}>
      {/* similar to anchor tag in CSS but for mobile devices. */}
      <Pressable
        style={[btnStyles.button, { backgroundColor: backgroundColor }]}
        onPress={() => onPress()}
      >
        {/*Can add style beyond styles on the stylesheet by making the style property an array*/}
        <Text style={[btnStyles.text, { color: textColor }]}>{content}</Text>
      </Pressable>
    </View>
  )
}

export default Button
