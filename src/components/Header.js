import React from "react";
//import modules
import styled from 'styled-components'
//import icons
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

const Header = ({user, signOut}) => {
  return (
    <Container>
      <Main>
        <AccessTimeIcon/>
        <SearchContainer>
          <Search>
            <input type='text' placeholder='Search...'/>
          </Search>
        </SearchContainer>
        <HelpOutlineIcon/>
      </Main>
      <UserContainer>
        <Name>
          {user.name}
        </Name>
        <UserImage onClick={signOut}>
          <img src={user.photo ? user.photo : 'https://i.imgur.com/6VBx3io.png'} alt=''/>
        </UserImage>
      </UserContainer>
    </Container>
  )
}

export default Header;


const Container = styled.div`
  background: #121212;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-shadow: 0 1px 0 0 rgb(255 255 255 / 10%);
`

const Main = styled.div`
  display: flex;
  margin: 0 16px;
`

const SearchContainer = styled.div`
  min-width: 400px;
  margin: 0 16px;
`

const Search = styled.div`
  border: 1px solid #3c3c3c;
  border-radius: 6px;
  display: flex;
  align-items: center;

  input {
    background-color: #1b1b1b;
    border: none;
    border-radius: 6px;
    padding: 4px 8px;
    color: #FFFFFF;
    width: 100%;
  }

  input:focus {
    outline: none;
  }
`

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  padding-right: 16px;
  position: absolute;
  right: 0;
`

const Name = styled.div`
  padding-right: 16px;
`

const UserImage = styled.div`
  width: 28px;
  height: 28px;
  border: 2px solid #FFFFFF;
  border-radius: 3px;
  cursor: pointer;

  img {
    width: 100%;
  }
`