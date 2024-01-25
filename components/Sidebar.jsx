"use client";
import { Chat, MoreVert, SearchOutlined } from "@mui/icons-material";
import { Avatar, Button, IconButton } from "@mui/material";
import React from "react";
import styled from "styled-components";
import * as EmailValidator from 'email-validator'
const Sidebar = () => {
    const createChat = () => {
        const input = prompt('Please enter an email address for the user you wish to chat with')

        if(!input) return null;
if(EmailValidator.validate(input)){
    
}

    }
  return (
    <Container>
      <Header>
        <UserAvatar />

        <IconsContainer>
          <IconButton>
            <Chat />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </IconsContainer>
      </Header>

      <Search>
        <SearchOutlined />
        <SearchInput placeholder="Search in chats" />
      </Search>
      <SidebarButton onClick={createChat}>Start a new chat</SidebarButton>

      {/* chats */}

    </Container>
  );
};

export default Sidebar;

const SidebarButton = styled(Button)`
  width: 100%;
  border: none;
  color: black;
  font-weight: 700;
  &&& {
    border-top: 1px solid whitesmoke;
    border-bottom: 1px solid whitesmoke;
  }
`;
const Container = styled.div``;
const SearchInput = styled.input`
  outline-width: 0;
  border: none;
  flex: 1;
`;
const Search = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 2px;
`;
const Header = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  height: 80px;
  border-bottom: 1px solid whitesmoke;
`;
const UserAvatar = styled(Avatar)`
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;
const IconsContainer = styled.div``;