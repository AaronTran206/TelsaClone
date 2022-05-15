import React from "react"
import {
  View,
  Text,
  ImageBackground,
  ImageSourcePropType,
  ImageRequireSource,
} from "react-native"
import styles from "./styles"
import Button from "../button/Button"
import { carsType } from "../utils/interfaces"

const CarItem: React.FC<carsType> = (props) => {
  const { name, tagline, taglineCTA, image } = props.car

  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline} <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
        </Text>
      </View>

      <View style={styles.btnContainer}>
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
    </View>
  )
}

export default CarItem
