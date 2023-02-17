import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

const Container = styled.div`
    display: flex;
`

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1`
    margin-bottom: -5px;
`
const Desc = styled.p`
    margin: 20px 0px;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 30%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
`
const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
`

const ContactItem = styled.div`
    margin-bottom: 20px;
    diplay: flex;
    align-items: center;
`

const Payment = styled.img`
    width: 300px;
    margin-top: -100px;
    margin-left: -40px;
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>MODA FLORA</Logo>
            <Desc>
                Esse ut deserunt fugiat officia ex. Excepteur sunt enim non culpa laboris aliquip reprehenderit
                ut occaecat duis quis exercitation mollit ipsum. Occaecat nostrud id excepteur ipsum. Reprehenderit 
                anim occaecat officia eiusmod dolor consequat culpa dolor officia. Magna sint ad ea veniam irure officia.
            </Desc>
            <SocialContainer>
                <SocialIcon color='3B5999'>
                    <FacebookIcon/>
                </SocialIcon>
                <SocialIcon color='E4405F'>
                    <InstagramIcon/>
                </SocialIcon>
                <SocialIcon color='55ACEE'>
                    <TwitterIcon/>
                </SocialIcon>
                <SocialIcon color='000000'>
                    <GitHubIcon/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Links Uteis</Title>
            <List>
                <ListItem>Página Inicial</ListItem>
                <ListItem>Carrinho</ListItem>
                <ListItem>Roupas Masculinas</ListItem>
                <ListItem>Roupas Femininas</ListItem>
                <ListItem>Acessórios</ListItem>
                <ListItem>Minha Conta</ListItem>
                <ListItem>Rastreamento</ListItem>
                <ListItem>Lista de Desejos</ListItem>
                <ListItem>Termos</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contato</Title>
            <ContactItem>
                <FmdGoodIcon/> Padre João Batista Réus, 3476
            </ContactItem>
            <ContactItem>
                <LocalPhoneIcon/> 51 99849-1213
            </ContactItem>
            <ContactItem>
                <EmailIcon/> gabrielcannes.gc@gmail.com
            </ContactItem>
            <Payment src='../../Public/Images/19.png'></Payment>
        </Right>
    </Container>
  )
}

export default Footer