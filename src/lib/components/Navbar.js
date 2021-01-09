import React from 'react';
import { Button, Stack, Box, Center, IconButton, useColorMode} from "@chakra-ui/react"

function Navbar() {
  //For toggling dark mode
  //const { colorMode, toggleColorMode } = useColorMode()

  return ( 
      <Center>
      <Box borderRadius="lg" w="100%" h="100%" p={4}>
      <Stack direction="row" spacing={8} align="center">
        <Box border="1px" borderColor="#ffffff" borderRadius="md" p={4} color="white">
          J O Y  B O T
        </Box>
        <Button color="#ffffff" variant="ghost" _hover={{ bg: "#ffffff", color: "#22577A"}} 
        _focus={{ boxShadow: "0 0 1px 2px rgba(234, 180, 251, .75), 0 1px 1px rgba(0, 0, 0, .15)",
      }}>
          D I A G N O S T I C S
        </Button>
        <Button color="#ffffff" variant="ghost" _hover={{ bg: "#ffffff", color: "#22577A"}} 
        _focus={{ boxShadow: "0 0 1px 2px rgba(234, 180, 251, .75), 0 1px 1px rgba(0, 0, 0, .15)",
      }}>
          E X E R C I S E S 
        </Button>
        <Button color="#ffffff" variant="ghost" _hover={{ bg: "#ffffff", color: "#22577A"}}
        _focus={{ boxShadow: "0 0 1px 2px rgba(234, 180, 251, .75), 0 1px 1px rgba(0, 0, 0, .15)",
      }}>
          S E T T I N G S
        </Button>
        <Button color="#ffffff" variant="ghost" _hover={{ bg: "#ffffff", color: "#22577A"}}
        _focus={{ boxShadow: "0 0 1px 2px rgba(234, 180, 251, .75), 0 1px 1px rgba(0, 0, 0, .15)",
      }}>
          A B O U T
        </Button>
        {/* For toggling dark mode */}
        {/* <IconButton 
          icon={colorMode === 'light' ? 'moon' : 'sun'} 
          onClick={toggleColorMode}
          variant='ghost'
          /> */}
      </Stack>
      </Box>
      </Center>
  );
}

export default Navbar;