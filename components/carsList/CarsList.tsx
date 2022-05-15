import React from "react"
import { View, FlatList, Dimensions } from "react-native"
import CarItem from "../carItem/CarItem"
import Cars from "./cars"
import styles from "./styles"

const CarsList: React.FC<{}> = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={Cars}
        renderItem={({ item }) => <CarItem car={item} />}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").height}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default CarsList
