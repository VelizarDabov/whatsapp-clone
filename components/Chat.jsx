"use client";
import { auth, db } from "@/firebase";
import getRecipientEmail from "@/lib/getRecipientEmail";
import { Avatar } from "@mui/material";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import styled from "styled-components";

const ChatComponent = ({ id, users }) => {
  const [user] = useAuthState(auth);
  const recipientEmail = getRecipientEmail(users, user);
  const router = useRouter();
  const [recipientSnapshot] = useCollection(
    db.collection("users").where("email", "==", getRecipientEmail(users, user))
  );
  //   const recipient = recipientSnapshot?.docs?.[0];
  const enterChat = () => {
    router.push(`/chat/${id}`);
  };

  return (
    <Container onClick={enterChat}>
      <UserAvatar>{recipientEmail[0]}</UserAvatar>

      <p>{recipientEmail}</p>
    </Container>
  );
};

export default ChatComponent;
const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 15px;
  word-break: break-word;

  :hover {
    background-color: #e9eaeb;
  }
`;
const UserAvatar = styled(Avatar)`
  margin: 5px;
  margin-right: 15px;
`;
