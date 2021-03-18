import React, {useState} from 'react';
//import modules
import styled from "styled-components";
//import icons
import SendIcon from '@material-ui/icons/Send';

const ChatInput = ({sendMessage}) => {

  const [input, setInput] = useState('')

  const send = (e) => {
    e.preventDefault();
    if(!input) return
    sendMessage(input)
    setInput('')
  }

  return (
    <Container>
        <InputContainer>
          <form >
            <input
              type="text"
              value={input}
              placeholder='Message here...'
              onChange={e => setInput(e.target.value)}
            />
            <SendButton
              type='submit'
              onClick={send}
            >
              <Send />
            </SendButton>
          </form>
        </InputContainer>
    </Container>
  );
};

export default ChatInput;

const Container = styled.div`
  padding: 0 20px 24px 20px;
`
const InputContainer = styled.div`
  border: 1px solid #dadada;
  border-radius: 4px;
  
  form {
    display: flex;
    align-items: center;
    height: 42px;
    padding-left: 10px;
    input {
      flex: 1;
      border: none;
      background: transparent;
      color: white;
      font-size: 13px;
      :focus {
        outline: none;
      }
    }
  }
`

const SendButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  width: 42px;
  height: 42px;
  margin-right: 5px;
  cursor: pointer;
  border: none;
  background: transparent;
  svg {
    width: 18px;
  }
`
const Send = styled(SendIcon)`
  color: #dadada;
`