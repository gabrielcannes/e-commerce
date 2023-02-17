import React from 'react'
import styled from 'styled-components'
import SendIcon from '@mui/icons-material/Send';

const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`
const Desc = styled.div`
    font-size: 24px:
    font-weight: 300;
    margin-bottom: 20px;
`

const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray
`

const Input = styled.input`
    border: none;
    flex: 9;
    padding-left: 20px;
`

const Buttom = styled.button`
    flex: 1;
    background-color: teal;
    color: white;
    cursor: pointer;
    border: none;
`

const Newsletter = () => {
  return (
    <Container>
        <Title>Looks do Momento</Title>
        <Desc>Receba atualizações dos seus produtos favoritos.</Desc>
        <InputContainer>
            <Input placeholder='E-mail'></Input>
            <Buttom>
                <SendIcon/>
            </Buttom>
        </InputContainer>
    </Container>
  )
}

export default Newsletter