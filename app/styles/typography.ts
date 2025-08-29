import { TextStyle } from "react-native"
import { colors } from "./colors"

export const typography: { [key: string]: TextStyle } = {
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.text,
  },
  body: {
    fontSize: 14,
    color: colors.text,
  },
  caption: {
    fontSize: 12,
    color: colors.gray,
  },
}
