import React from 'react';
import MessageList from './MessageList';
import PropTypes from 'prop-types';
import '../../../test/App.js';

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      apiResponse: '',
      count: 0,
    };
  }

  callAPI() {
    let data = {'message': this.state.message};
    fetch("http://localhost:9000/bot", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      }).then(res => res.text())
        .then(res => {
          res = JSON.parse(res);
          this.setState({ apiResponse: res.response, apiIntent: res.intent}, () => {this.setBotMsg()}); 
          console.log(`This is the response: ${res.response}, ${res.intent}`); 
          ;
        });

  }

  setBotMsg(){
    const botmsg = 
    {
      "text": this.state.apiResponse,
      "id": this.count,
      "sender": {
        "name": "Joy",
        "uid": "user2",
        "avatar": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/144/facebook/65/smiling-face-with-smiling-eyes_1f60a.png",
      }
    }
    let { messages } = this.props;
    messages.push(botmsg);
    this.setState(prevState => {
      return {count: prevState.count + 1}
   })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.message !== this.state.message && this.props.typingListener) {
      this.props.typingListener();
    }
    this.scrollToBottom();
  }

  handleSendMessage = event => {
    let { messages } = this.props;
    event.preventDefault();
    const {message} = this.state;
    this.props.onSubmit(message);
    const newmsg = 
      {
        "text": this.state.message,
        "id": this.count,
        "sender": {
          "name": "You",
          "uid": "user1",
          "avatar": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/144/facebook/65/hibiscus_1f33a.png",
        }
      }

    messages.push(newmsg);
    this.callAPI()
    this.setState({message: ''});
    this.setState(prevState => {
      return {count: prevState.count + 1}
   })
  };

  scrollToBottom = () => {
    const chat = document.getElementById('end-of-chat');
    chat.scrollIntoView();
  };

  render() {
    let {messages, isLoading, user, renderMessage} = this.props;
    let {message} = this.state;

    return (
            <div className='chat-box'>
              <div className='msg-page'>
                <MessageList
                  isLoading={isLoading}
                  messages={messages} 
                  user={user}
                  renderMessage={renderMessage}
                />
                <div className='chat-box-bottom'>
                  { this.props.typingIndicator?this.props.typingIndicator:'' }
                  <div id='end-of-chat'></div>
                </div>
              </div>
              <div className='msg-footer'>
                <form
                  className='message-form'
                  onSubmit={this.handleSendMessage}>
                  <div className='input-group'>
                    <input
                      type='text'
                      className='form-control message-input'
                      placeholder='Type something'
                      value={message}
                      onChange={event => this.setState({ message: event.target.value})}
                      required
                    />
                  </div>
                </form>
              </div>
            </div>
    );
  }
}

Chat.propTypes = {
  messages: PropTypes.array,
  onSubmit: PropTypes.func,
  isLoading: PropTypes.bool,
  user: PropTypes.object,
  renderMessage: PropTypes.func,
  typingListener: PropTypes.func,
  typingIndicator: PropTypes.element,
};

Chat.defaultProps = {
  messages: [],
  user: {
    "uid": "user1"
  },
  isLoading: false,
  onSubmit: (message) => {
    console.log(message);
  }
};

export default Chat;

