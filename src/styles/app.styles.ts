import styled from '@emotion/styled';


const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #000;
  padding: 1rem;


  min-height: 360px;
  max-height: 600px;
  overflow: auto;


  background: #b2c7d9;
`;


const MessageBox = styled.div`
  display: flex;
  flex-direction: column;


  &.my_message {
    align-self: flex-end;


    .message {
      background: yellow;
      align-self: flex-end;
    }
  }


  &.alarm {
    align-self: center;
  }
`;


const Message = styled.span`
  margin-bottom: 0.5rem;
  background: #fff;
  width: fit-content;
  padding: 12px;
  border-radius: 0.5rem;
`;


const MessageForm = styled.form`
  display: flex;
  margin-top: 24px;


  input {
    flex-grow: 1;
    margin-right: 1rem;
  }
`;


export { ChatContainer, MessageBox, Message, MessageForm };