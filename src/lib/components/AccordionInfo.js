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
        Joy Bot was built to be a mental health assistant and digital friend. 
        It was created in January 2021 during the quarantine for COVID-19, a 
        period when more common sources of support were temporarily 
        inaccessible. It was also built for the SheHacks V online hackathon.
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem bg='rgba(255,255,255,0.3)'>
        <AccordionButton>
          <Box flex="1" textAlign="left">
            Staying Healthy
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={4} bg='#C7F9CC'>
          Here are some tips:<br/>
        - Drink a cup of water every 4 hours<br/>
        - Look away from computer screens for 20 seconds every 20 minutes<br/>
        - Proper posture will prevent muscle pain<br/>
        - Eat a healthy meal
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}

export default AccordionInfo;