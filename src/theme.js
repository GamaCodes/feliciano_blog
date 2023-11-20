import * as ReactDOM from 'react-dom/client'
import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    colors: {
      newprimary: {
        100: "#111e6c",
        900: "#1a202c",
      },
    },
  })

export default theme