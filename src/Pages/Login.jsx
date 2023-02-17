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
    width: 25%;
    padding: 20px;
    background-color: white;
`

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`
const Link = styled.a`
    margin: 10px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`

const Button = styled.button`
    width:40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`

const Login = () => {
  return (
    <Container>
        <Wrapper>
          <Title>ACESSE A SUA CONTA</Title>
          <Form>
            <Input placeholder='usuário'></Input>
            <Input placeholder='senha'></Input>
            <Button>ENTRAR</Button>
            <Link>ESQUECEU A SENHA?</Link>
            <Link>CRIAR UMA NOVA CONTA</Link>
          </Form>
        </Wrapper>
    </Container>
  )
}

export default Login