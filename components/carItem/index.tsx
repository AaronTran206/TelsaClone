import React from "react"
import { View, Text, ImageBackground } from "react-native"
import styles from "./styles"
import Button from "../button"

const CarItem: React.FC<{ car: string }> = (car) => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require("../../assets/ModelS.jpeg")}
        style={styles.image}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subtitle}>Starting $69,420</Text>
      </View>

      <Button
        type="primary"
        content="custom order"
        onPress={() => console.warn("custom order pressed")}
      />
      <Button
        type="secondary"
        content="existing inventory"
        onPress={() => console.warn("existing inventory pressed")}
      />
    </View>
  )
}

export default CarItem
