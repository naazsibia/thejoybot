import React from 'react';
import { Button, Stack, Link, Text} from "@chakra-ui/react"

function ButtonMenu() {
  return (
    <Stack direction='column' h='fit-content' ml='15px' mb='30px' color='#22577A' 
      bg='white' border='1px' borderColor='#38A3A5' borderRadius='5px' spacing='0px'
      textAlign='center' shouldWrapChildren>
      <Text color='#22577A' bg='rgb(56, 163, 165, 0.3)' py='3px'>
        R E S O U R C E S
      </Text>
      <Button w='100%' as='a' target='_blank' href='https://kidshelpphone.ca/'>
        Kid's Help Phone
      </Button >
      <Button w='100%' as='a' target='_blank' href='https://www.cpa-apc.org/'> 
        Canadian Psychiatric Association
      </Button>
      <Button w='100%' as='a' target='_blank' href='https://www.camh.ca'>
        CAMH
      </Button>
      <Button w='100%' as='a' target='_blank' href='https://www.ementalhealth.ca'>
        eMentalHealth.ca
      </Button>
      <Button w='100%' as='a' target='_blank' href='https://moodgym.com.au/'>
        CBT Online
      </Button>
      <Button w='100%' as='a' target='_blank' href='https://mindyourmind.ca/'>
        MindYourMind.ca
      </Button>
      <Button w='100%' as='a' target='_blank' href='http://sioutreach.org/'>
        Self Injury Outreach & Support
      </Button>
      <Button w='100%' as='a' target='_blank' href='https://www.mhfa.ca/en/general-resources'>
        More Resources
      </Button>
    </Stack>
  );
}

export default ButtonMenu;