import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100VW;
  height: 100vh;
  background: linear-gradient(
      rgba(255,255,255,0.5),
      rgba(255,255,255,0.5)
    ), 
    url('../../Public/Images/20.jpg') 
    center;
    background-size: cover;
    background-repeat-x: no-repeat;
    background-repeat-y: no-repeat;
    object-fit: cover;

    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #d52887; 
`

const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
`

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`

const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`

const Button = styled.button`
    width:40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`

const Register = () => {
  return (
    <Container>
        <Wrapper>
          <Title>CRIE UMA CONTA</Title>
          <Form>
            <Input placeholder='nome'></Input>
            <Input placeholder='sobrenome'></Input>
            <Input placeholder='usuário'></Input>
            <Input placeholder='e-mail'></Input>
            <Input placeholder='password'></Input>
            <Input placeholder='confime a senha'></Input>
            <Agreement>
              Ao criar uma conta, eu compactuo com o processo de data pessoal conforme descrito na <b>POLÍTICA DE PRIVACIDADE</b>
            </Agreement>
            <Button>CRIAR</Button>
          </Form>
        </Wrapper>
    </Container>
  )
}

export default Register