import { ImageRequireSource } from "react-native"

export interface carsType {
  car: {
    name: string
    tagline: string
    taglineCTA?: string
    image: ImageRequireSource
  }
}
