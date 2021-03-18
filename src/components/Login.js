import React from "react";
//import modules
import styled from "styled-components";
//import authorisation
import {auth, provider} from "../firebase";

const Login = ({setUser}) => {

  const signIn = () => {
    auth.signInWithPopup(provider)
      .then((res)=> {
        const newUser= {
          name: res.user.displayName,
          photo: res.user.photoURL,
        }
        localStorage.setItem('user', JSON.stringify(newUser));
        setUser(newUser)
      })
      .catch((err) =>{
        console.log(err.message)
      })
  }

  return (
    <Container>
      <Content>
        <SlackImg src='http://assets.stickpng.com/images/5cb480cd5f1b6d3fbadece79.png'/>
        <h1>Sign in in Slack</h1>
        <SignInButton onClick={() =>signIn()}>
          Sign in with google
        </SignInButton>
      </Content>
    </Container>
  )
}

export default Login;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #f8f8f8;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Content = styled.div`
  background: white;
  padding: 100px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 1px 3px rgba(0 0 0 / 12%), 0 1px 2px rgba(0 0 0 / 24%);
`

const SlackImg = styled.img`
  height: 100px;
`

const SignInButton = styled.button`
  margin-top: 50px;
  background: #0a8d48;
  color: white;
  border: none;
  height: 40px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 15px;
`