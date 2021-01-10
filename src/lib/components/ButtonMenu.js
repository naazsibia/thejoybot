import React from 'react';
import { Button, Stack, Link, Text} from "@chakra-ui/react"

function ButtonMenu() {
  return (
    <Stack direction='column' h='fit-content' ml='15px' mb='30px' color='#ffffff' 
      border='1px' borderColor='#ffffff' borderRadius='5px' spacing='0px'
      shouldWrapChildren>
      <Text>Resources</Text>
      <Button>
        <Link href='https://kidshelpphone.ca/' isExternal>Kid's Help Phone</Link>
      </Button>
      <Button> 
        <Link href='https://www.cpa-apc.org/'>Canadian Psychiatric Association</Link> 
      </Button>
      <Button>
        <Link href='https://www.camh.ca'>CAMH</Link>
      </Button>
      <Button>
        <Link href='https://www.ementalhealth.ca'>eMentalHealth.ca</Link>
      </Button>
      <Button>
        <Link href='https://moodgym.com.au/'>CBT Online</Link>
      </Button>
      <Button>
        <Link href='https://mindyourmind.ca/'>MindYourMind.ca</Link>
      </Button>
      <Button>
        <Link href='http://sioutreach.org/'>Self Injury Outreach & Support</Link>
      </Button>
      <Button>
        <Link href='https://www.mhfa.ca/en/general-resources'>More Resources</Link>
      </Button>
    </Stack>
  );
}

export default ButtonMenu;