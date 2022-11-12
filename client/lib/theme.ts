import { extendTheme } from "@chakra-ui/react"

const colors: any = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const fonts = {
  "base": "'Roboto Slab', serif"
}

export default extendTheme({ colors, fonts })