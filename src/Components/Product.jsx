import React from 'react'
import styled from 'styled-components'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;
`

const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`

const Image = styled.img`
    height: 75%;
    z-index: 2;
`

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.5s;
    &:hover{
        opacity: 1;
        background-color: rgba(0,0,0,0.1); 
    }
`

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: 0.3s;
    cursor: pointer;
    &:hover{
        background-color: #e9f5f5;
        transform: scale(1.2);
    }
`

const Product = ({item}) => {
  return (
    <Container>
        <Circle></Circle>
        <Image src={item.img}></Image>
        <Info>
            <Icon>
                <ShoppingCartOutlinedIcon/>
            </Icon>
            <Icon>
                <SearchIcon/>
            </Icon>
            <Icon>
                <FavoriteBorderIcon/>
            </Icon>
        </Info>
    </Container>
  )
}

export default Product