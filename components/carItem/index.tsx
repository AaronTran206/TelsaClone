import React from "react"
import { View, Text, ImageBackground } from "react-native"
import styles from "./styles"

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
    </View>
  )
}

export default CarItem
