import React from 'react'
import styled from 'styled-components'

const Messages = ({user, message}) => {
  return (
    <Container><p>{message.message}</p></Container>
  )
}

export default Messages
const Container = styled.div``;