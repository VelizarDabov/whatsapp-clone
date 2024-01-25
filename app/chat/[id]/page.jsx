"use client";
import ChatScreen from "@/components/ChatScreen";
import Sidebar from "@/components/Sidebar";
import { auth, db } from "@/firebase";
import getRecipientEmail from "@/lib/getRecipientEmail";
// import { getServerSideProps } from "next/dist/build/templates/pages";
import Head from "next/head";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";

const Chat = ({chat, messages}) => {
  const [user] = useAuthState(auth)
  return (
    <Container>
      <Head>
        <title>Chat with </title>
      </Head>
      <Sidebar />

      <ChatContainer>
        <ChatScreen chat={chat} messages={messages}/>
      </ChatContainer>
    </Container>
  );
};

export default Chat;



const Container = styled.div`
  display: flex;
`;
const ChatContainer = styled.div`
flex:1;
overflow: scroll;
height: 100vh;


::webkit-scrollbar{
  display: none;
}
-ms-overflow-style: none;
scrollbar-width: none;
`;
