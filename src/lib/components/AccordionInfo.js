import React from 'react';
import { Accordion, AccordionButton, AccordionIcon, 
         AccordionItem, AccordionPanel, Box } from "@chakra-ui/react"

function AccordionInfo() {
  return (
    <Accordion className='accordionInfo' color='blue.900' allowToggle>
      <AccordionItem bg='rgba(255,255,255,0.3)'>
        <AccordionButton>
          <Box flex="1" textAlign="left">
            Instructions
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={4} bg='#C7F9CC'>
          Joy Bot is here to help you with any emotions you would like to talk 
          about. Type into the chat box and press enter to speak with Joy Bot.
          It will do its best to comfort you and give you tips :) 
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem bg='rgba(255,255,255,0.3)'>
        <AccordionButton>
          <Box flex="1" textAlign="left">
            About Joy Bot
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={4} bg='#C7F9CC'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}

export default AccordionInfo;