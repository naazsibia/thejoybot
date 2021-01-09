import React from 'react';
import { Navbar } from '../lib';
import { ChakraProvider, Box, Center } from "@chakra-ui/react"
import { ChatBox } from '../lib';
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
    const messages = [
      {
        "text": "Hello there",
        "id": "1",
        "sender": {
          "name": "Ironman",
          "uid": "user1",
          "avatar": "https://data.cometchat.com/assets/images/avatars/ironman.png",
        },
      },
      {
        "text": "Hi Mr. Stark",
        "id": "2",
        "sender": {
          "name": "Spiderman",
          "uid": "user2",
          "avatar": "https://data.cometchat.com/assets/images/avatars/spiderman.png",
        },
      },
      {
        "text": "Hello Spiderman, how are you today?",
        "id": "3",
        "sender": {
          "name": "Ironman",
          "uid": "user1",
          "avatar": "https://data.cometchat.com/assets/images/avatars/ironman.png",
        },
      },
      {
        "text": "Hello Spiderman, how are you today?",
        "id": "4",
        "sender": {
          "name": "Ironman",
          "uid": "user1",
          "avatar": "https://data.cometchat.com/assets/images/avatars/ironman.png",
        },
      },
      {
        "text": "Hello Spiderman, how are you today?",
        "id": "5",
        "sender": {
          "name": "Ironman",
          "uid": "user1",
          "avatar": "https://data.cometchat.com/assets/images/avatars/ironman.png",
        },
      },
      {
        "text": "Hello Spiderman, how are you today?",
        "id": "6",
        "sender": {
          "name": "Ironman",
          "uid": "user1",
          "avatar": "https://data.cometchat.com/assets/images/avatars/ironman.png",
        },
      },
      {
        "text": "Hello Spiderman, how are you today?",
        "id": "7",
        "sender": {
          "name": "Ironman",
          "uid": "user1",
          "avatar": "https://data.cometchat.com/assets/images/avatars/ironman.png",
        },
      },
      {
        "text": "Hello Spiderman, how are you today?",
        "id": "8",
        "sender": {
          "name": "Ironman",
          "uid": "user1",
          "avatar": "https://data.cometchat.com/assets/images/avatars/ironman.png",
        },
      },
    ];

    const user = {
      "uid": "user1"
    };

    this.setState({ messages: messages, user: user });
  }

  render() {
    return (
      <ChakraProvider>
      <div>
        <Box bgGradient="linear(to-r, #22577A, #57CC99)" w="100vw" h="100vh" p={4}>
          <Center>
          <Navbar/>
          </Center>
        <div className='container' style={{maxWidth: '1000px', paddingTop: '60px'}}>
          <div className='chat-header'>
            <h5>Talk With Joy Bot</h5>
          </div>
            <ChatBox messages={this.state.messages} />
        </div>
        </Box>
      </div>
      
      </ChakraProvider>
    )
  }
}

export default App;
