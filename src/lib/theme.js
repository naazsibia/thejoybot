// File used to define a default theme on the website
// Defines button styling as well
import { extendTheme } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"

const styles = {
  global: props => ({
    body: {
      color: mode('blue.900, whiteAlpha.900')(props), //This doesn't work
      bgGradient: "linear(to-r, #22577A, #57CC99)" //This works
    }
  })
};

const components = {
  Button: {
    baseStyle: props => ({
      color: mode('#ffffff','#ffffff')(props), //Doesn't work
      _hover: { //works
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
  Link: {
    baseStyle: {
      _hover: {
        color: '#22577A',
        textDecoration: 'none'
      }
    }
  }
};

const globalTheme = extendTheme({
  styles,
  components
});

export default globalTheme