import { auth, db } from "@/firebase";
import { AttachFile, InsertEmoticon, Mic, More, MoreVert } from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import styled from "styled-components";
import Messages from "./Messages";
import firebase from "../firebase";
import { serverTimestamp } from "firebase/firestore";
const ChatScreen = () => {
  const [user] = useAuthState(auth);
  const [messagesSnapshot] = useCollection(
    db.collection('chats').doc('kY4qHWVSrTPMlOmfjZwk8e3Urch2').collection('messages').orderBy('timestamp', 'asc')
  );
  const router = useRouter();
const [input, setInput] = useState('')
const sendMessage = (e) => {
  e.preventDefault();
  db.collection("users")
    .doc(user.uid)
    .set({ lastSeen:serverTimestamp() }, { merge: true });
    db.collection('chats').doc(user.uid).collection('messages').add({
      lastSeen: serverTimestamp(),
      message:input,
      user:user.email,
      photo:user.photoURL,
    })
    setInput('')
};
// const [messagesSnapshot] = useCollection(
//   db
//     .collection("chats")
//     .doc(user.uid)
//     .collection("messages")
//     .orderBy("timestamp", "asc")
// );
const showMessages = () => {
  if (messagesSnapshot) {
    return messagesSnapshot.docs.map((message) => (
      <Messages
        key={message.id}
        user={message.data().user}
        message={{
          ...message.data(),
          timestamp: message.data().timestamp?.toDate().getTime(),
        }}
      />
    ));
      }
  // }else{
  //   return JSON.parse(messages).map(message => (
  //         <Messages key={message.id} user={user.uid} message={message}/>
  //       ))
  // }
};
  return (
    <Container>
      <Header>
        <Avatar />
        <HeaderInformation>
          <h3>Rec Email</h3>
          <p>Last seen...</p>
        </HeaderInformation>
        <HeaderIcons>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </HeaderIcons>
      </Header>

      <MessageContainer>
      {messagesSnapshot && messagesSnapshot.docs.map((doc) => (
        <div key={doc.id}>
          {/* Render your message data, for example: */}
          <p>{doc.data().text}</p>
        </div>
      ))}
        <EndOfMessage />
      </MessageContainer>
      <InputContainer>
<InsertEmoticon />
<Input value={input} onChange={e=> setInput(e.target.value)}/>
<button hidden disabled={!input} type="submit" onClick={sendMessage}>Send Message</button>
<Mic/>
      </InputContainer>
    </Container>
  );
};

export default ChatScreen;
const Container = styled.div``;
const Header = styled.div`
  position: sticky;
  background-color: white;
  z-index: 100;
  top: 0;
  display: flex;
  padding: 11px;
  align-items: center;
  border-bottom: 1px solid whitesmoke;
`;
const HeaderInformation = styled.div`
  margin-left: 15px;
  flex: 1;

  > h3 {
    margin-bottom: 3px;
  }
  > p {
    font-size: 14px;
    color: gray;
  }
`;
const HeaderIcons = styled.div``;
const MessageContainer = styled.div`
padding: 20px;
background-color: #e5ded8;
min-height: 90vh;
`;
const EndOfMessage = styled.div``;
const InputContainer = styled.form` 
display:flex;
align-items: center;
padding: 10px;
position: sticky;
bottom: 0;
background-color: white;
z-index:100;
`;
const Input = styled.input`
flex:1;
outline: 0;
padding:10px;
border:none;
border-radius: 10px;
background-color: whitesmoke;
margin-left: 15px;
margin-right: 15px;
`;