import React from 'react';
import { Button, Stack, Box, Center, IconButton, useColorMode, Text, Link } from "@chakra-ui/react"
import flowers from '../assets/flowers.gif'

function Navbar() {
  //For toggling dark mode
  //const { colorMode, toggleColorMode } = useColorMode()

  return ( 
      <Center>
      <Box borderRadius="lg" w="100%" h="100%" p={4}>
      <Stack direction="row" spacing={8} align="center">

        <img src={flowers} flex="1" width="100" height="100" resizeMode="contain" alt="logo"/>
        
        <Box border="1px" borderColor="#ffffff" borderRadius="md" p={4} color="white">
          <Text fontSize={24}>J O Y  B O T</Text>
        </Box>

        <Button borderRadius="md" color="#ffffff" variant="ghost" _hover={{ bg: "#ffffff", color: "#22577A"}} 
        _focus={{ boxShadow: "0 0 1px 2px rgba(234, 180, 251, .75), 0 1px 1px rgba(0, 0, 0, .15)",
      }}>
          <Link href="https://screening.mhanational.org/screening-tools" isExternal>
          D I A G N O S T I C S
          </Link>
        </Button>

        <Button borderRadius="md" color="#ffffff" variant="ghost" _hover={{ bg: "#ffffff", color: "#22577A"}} 
        _focus={{ boxShadow: "0 0 1px 2px rgba(234, 180, 251, .75), 0 1px 1px rgba(0, 0, 0, .15)",
        }}>
          <Link href="https://xhalr.com/" isExternal>
          E X E R C I S E S 
          </Link>
        </Button>

        <Button borderRadius="md" color="#ffffff" variant="ghost" _hover={{ bg: "#ffffff", color: "#22577A"}}
        _focus={{ boxShadow: "0 0 1px 2px rgba(234, 180, 251, .75), 0 1px 1px rgba(0, 0, 0, .15)",
        }}>
          <Link href="https://cmha.ca/blogs" isExternal>
          A R T I C L E S
          </Link>
        </Button>

        <Button borderRadius="md" color="#ffffff" variant="ghost" _hover={{ bg: "#ffffff", color: "#22577A"}}
        _focus={{ boxShadow: "0 0 1px 2px rgba(234, 180, 251, .75), 0 1px 1px rgba(0, 0, 0, .15)",
        }}>
          <Link href="https://github.com/naazsibia/thejoybot" isExternal>
          A B O U T
          </Link>
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