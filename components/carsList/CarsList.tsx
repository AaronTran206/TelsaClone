import React from "react"
import { View, FlatList, Dimensions } from "react-native"
import CarItem from "../carItem/CarItem"
import Cars from "./cars"
import styles from "./styles"

const CarsList: React.FC<{}> = () => {
  return (
    <View style={styles.container}>
      {/*Flatlist is the equivalent to the map method in regular JavaScript. Data defines the array. RenderItem is the function called on each array. 
      
      Other properties can be called. snapToAlignment, decelerationRate, and snapToInterval provides the logic for scrolling behavior*/}
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
