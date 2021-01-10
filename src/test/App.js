import React from 'react';
import { ChakraProvider, Box, Center, Text, Flex, VStack} from "@chakra-ui/react"
import Player from 'react-soundcloud-player'
import { ChatBox, Navbar, AccordionInfo, ButtonMenu, MusicPlayer } from '../lib';
import globalTheme from '../lib/theme';
import  '../lib/style.css';
import './style.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      user: {},
    };
  }

  componentDidMount() {
    const messages = [];
    const user = {
      "uid": "user1"
    };

    this.setState({ messages: messages, user: user });
  }

  render() {
    return (
      <ChakraProvider theme={globalTheme}>
        <Center>
          <Navbar/>
        </Center>
        <Flex direction='row' align='center' justify='space-evenly' style={{paddingTop: '60px'}} wrap='wrap'>
          <VStack mb='20px'>
            <ButtonMenu minW='250px'/>
            <Player
            client_id="c5a171200f3a0a73a523bba14a1e0a29"
            audio_id="52301001"
            title="Relaxing Rain & Loud Thunder"
            />
          </VStack>
          <Box maxW='750px'>
            <div className='chat-header'>
              <h5>Talk With Joy Bot</h5>
            </div>
              <ChatBox messages={this.state.messages} />
          </Box>
          <Box w='250px'>
            <AccordionInfo />
          </Box>
        </Flex>
        <Center>
        <Text padding="20px" fontSize="md" color="white">Joy is a friendly bot! Your privacy is protected.</Text>
        </Center>
      </ChakraProvider>
    )
  }
}

export default App;
