import React from "react"
//import modules
import styled from "styled-components";
import {useHistory} from 'react-router-dom'
//import icons
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import AddIcon from '@material-ui/icons/Add';
//import firebase DB
import db from "../firebase";
//import data
import {sidebarItems} from '../Data/SidebarData'

const Sidebar = ({rooms}) => {

  const history = useHistory()

  const addChannel = () => {
    const promptName = prompt('Enter channel name')
    if (promptName) {
      db.collection('rooms').add({
        name: promptName
      })
    }
  }

  const goToChannel = (id) => {
    if (id) {
      history.push(`/room/${id}`)
    }
  }

  return (
    <Container>
      <WorkSpaceContainer>
        <Name>
          Programmer
        </Name>
        <NewMessage>
          <AddCircleOutlineIcon/>
        </NewMessage>
      </WorkSpaceContainer>
      <MainChannels>
        {
          sidebarItems.map(item => (
            <MainChannelItem key={item.text}>
              {item.icon}
              {item.text}
            </MainChannelItem>
          ))
        }
      </MainChannels>
      <ChannelsContainer>
        <NewChannelContainer>
          <div>
            Channels
          </div>
          <AddIcon onClick={addChannel}/>
        </NewChannelContainer>
        <ChannelsList>
          {
            rooms.map(item => (
              <Channel key={item.id} onClick={() =>goToChannel(item.id)}>
                # {item.name}
              </Channel>
            ))
          }
        </ChannelsList>
      </ChannelsContainer>
    </Container>
  )
}

export default Sidebar

const Container = styled.div`
  background-color: #121212;
`

const WorkSpaceContainer = styled.div`
  color: white;
  height: 64px;
  display: flex;
  align-items: center;
  padding-left: 19px;
  justify-content: space-between;
  border-bottom: 1px solid rgb(255 255 255 / 10%);
`

const Name = styled.div`

`

const NewMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: white;
  fill: #121212;
  color: #121212;
  border-radius: 50%;
  margin-right: 20px;
  cursor: pointer;
`

const MainChannels = styled.div`
  padding-top: 20px;
`

const MainChannelItem = styled.div`
  color: #dadada;
  display: grid;
  grid-template-columns: 15% auto;
  height: 28px;
  align-items: center;
  padding-left: 19px;
  cursor: pointer;

  :hover {
    background: #1b1b1b;
  }
`

const ChannelsContainer = styled.div`
  color: #dadada;
  margin-top: 10px;
`

const NewChannelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 28px;
  padding-left: 19px;
  padding-right: 12px;

  svg {
    cursor: pointer;
  }
`

const ChannelsList = styled.div`

`

const Channel = styled.div`
  height: 28px;
  display: flex;
  align-items: center;
  padding-left: 19px;
  cursor: pointer;

  :hover {
    background: #1b1b1b;
  }
`