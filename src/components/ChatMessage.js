import React from 'react';
//import modules
import styled from "styled-components";
//import icons

const ChatMessage = ({text, name, image, timestamp, messagesEndRef}) => {
  return (
    <Container>
      <UserAvatar>
        <img src={image} alt="user avatar"/>
      </UserAvatar>
      <MessageContent>
        <Name>
          {name}
          <span>
            {new Date(timestamp.toDate()).toLocaleString()}
          </span>
        </Name>
        <Text>
          {text}
        </Text>
      </MessageContent>
    </Container>
  );
};

export default ChatMessage;

const Container = styled.div`
  padding: 8px 20px;
  display: flex;
  align-items: center;
  :hover {
    background: #141414;
  }
`
const UserAvatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 2px;
  overflow: hidden;
  margin-right: 8px;

  img {
    width: 100%;
  }
`

const MessageContent = styled.div`
  display: flex;
  flex-direction: column;
`

const Name = styled.span`
  font-weight: 900;
  color: white;
  font-size: 15px;
  line-height: 1.4;
  
  span {
    margin-left: 8px;
    font-weight: 400;
    font-size: 13px;
    color: #dadada;
  }
`

const Text = styled.span`
  color: white;
`