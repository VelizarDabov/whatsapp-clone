import Head from "next/head";
import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { Button } from "@mui/material";
import Image from "next/image";
import { auth, provider } from "@/firebase";
const Login = () => {
  const signIn = () => {
    auth.signInWithPopup(provider).catch(alert)
  }
  return (
    <Container>
      <Head>
        <title>Login</title>
      </Head>
      <LoginContainer>
        <Logo src={logo} alt="" />
        <ButtonStyle onClick={signIn} variant="outlined">Sign in with Google</ButtonStyle>
      </LoginContainer>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: whitesmoke;

`;
const LoginContainer = styled.div`
padding: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  color: black;
  border-radius: 5px; 
  box-shadow: 0px 4px 14px -3px rgba(0,0,0,0.7);
`;
const Logo = styled(Image)`
  height: 200px;
  width: 200px;
  margin-bottom: 50px;
`;

const ButtonStyle = styled(Button)`color:black;
border-color: black;

`