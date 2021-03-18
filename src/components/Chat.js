import React, {useEffect, useState, useRef} from "react";
//import modules
import styled from "styled-components";
import firebase from "firebase";
import {useParams} from "react-router-dom";
//import components
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
//import icons
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
//import DB
import db from "../firebase";

const Chat = ({user}) => {

  let {channelId} = useParams();
  const [channel, setChannel] = useState()
  const [messages, setMessages] = useState([])

  const getChannel = () => {
    db.collection('rooms')
      .doc(channelId)
      .onSnapshot((snapshot) => {
        setChannel(snapshot.data())
      })
  }

  const getMessages = () => {
    db.collection('rooms')
      .doc(channelId)
      .collection('messages')
      .orderBy('timestamp', 'asc')
      .onSnapshot((snapshot) => {
        let messages = snapshot.docs.map((doc) => doc.data())
        setMessages(messages)
      })
  }

  const sendMessage = (text) => {
    if (channelId) {
      let payload = {
        text : text,
        user: user.name,
        photo: user.photo,
        timestamp: firebase.firestore.Timestamp.now()
      }
      db.collection('rooms').doc(channelId).collection('messages').add(payload)
    }
  }

  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    console.log(messagesEndRef.current)
    messagesEndRef.current.scrollIntoView({ behavior: "smooth"})
  }

  useEffect(() => {
    getChannel()
    getMessages()
  }, [channelId])  // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    scrollToBottom()
  }, [messages])


  return (
    <Container>
      <Header>
        <ChannelContainer>
          <Name>
            # {channel && channel.name}
            <StarOutlineIcon/>
          </Name>
          <Pinned>
            Company-wide announcements and work-based matters
          </Pinned>
        </ChannelContainer>
        <DetailsContainer>
          <div>Details</div>
          <ErrorOutlineIcon/>
        </DetailsContainer>
      </Header>
      <MessageContainer>
        {
          messages.length > 0 &&
          messages.map((data, index) => (
              <ChatMessage
                key={index}
                text={data.text}
                name={data.user}
                image={data.photo}
                timestamp={data.timestamp}
              />
            )
          )
        }
        <div ref={messagesEndRef}>

        </div>
      </MessageContainer>

      <ChatInput sendMessage={sendMessage}/>
    </Container>
  )
}

export default Chat

const Container = styled.div`
  display: grid;
  grid-template-rows: 65px auto min-content;
  min-height: 0;
  background: #1b1b1b;
`

const Header = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgb(255 255 255 / 10%);
`
const ChannelContainer = styled.div`
  padding-left: 20px;
`

const Name = styled.div`
  display: flex;
  align-items: flex-end;
  font-weight: 500;

  svg {
    padding-left: 4px;
    font-size: 18px;
  }
`

const Pinned = styled.div`
  font-size: 0.75rem;
  color: #dadada;
`
const DetailsContainer = styled.div`
  display: flex;
  align-items: flex-end;
  padding-right: 20px;
  font-size: 16px;
  color: #dadada;

  svg {
    padding-left: 10px;
    font-size: 20px;
  }
`

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`

