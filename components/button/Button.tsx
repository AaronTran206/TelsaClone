import React from "react"
import { View, Text, Pressable } from "react-native"
import btnStyles from "./btnStyles"

const Button: React.FC<{
  type: string
  content: string
  onPress: Function
}> = (props) => {
  const { type, content, onPress } = props

  const backgroundColor = type === "primary" ? "black" : "white"

  const textColor = type === "primary" ? "white" : "black"

  return (
    <View style={btnStyles.container}>
      <Pressable
        style={[btnStyles.button, { backgroundColor: backgroundColor }]}
        onPress={() => onPress()}
      >
        <Text style={[btnStyles.text, { color: textColor }]}>{content}</Text>
      </Pressable>
    </View>
  )
}

export default Button
