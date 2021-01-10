// File used to define a default theme on the website
// Defines button styling as well
import { extendTheme } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"

const styles = {
  global: props => ({
    body: {
      color: mode('blue.900, whiteAlpha.900')(props),
      //bg: mode('blue.100','blue.900')(props),
      bgGradient: "linear(to-r, #22577A, #57CC99)"
    }
  })
};

const components = {
  Button: {
    baseStyle: props => ({
      color: mode('#ffffff','#ffffff')(props),
      _hover: {
        bg: mode('#ffffff','#22577A')(props), 
        color: mode('#22577A','#ffffff')(props)
      },
      _focus: { 
        boxShadow: "0 0 1px 2px rgba(234, 180, 251, .75), 0 1px 1px rgba(0, 0, 0, .15)",
      }
    }),
    defaultProps: {
      variant: 'ghost'
    }
  },
};

const globalTheme = extendTheme({
  styles,
  components
});

export default globalTheme