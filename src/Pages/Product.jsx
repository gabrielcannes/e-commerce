import React from 'react'
import styled from 'styled-components'
import Announcement from "../Components/Announcement"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import Newsletter from "../Components/Newsletter"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Container = styled.div``

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`

const ImageContainer = styled.div`
    flex: 1;
`
const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
`
const FilterColorContainer = styled.div`
    display: flex;
    margin: 0px 20px;
`

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    cursor: pointer;
    margin: 0px 5px;
`

const Filter = styled.div`
  display: flex;
  align-items: center;
`

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 200;
`

const Select = styled.select`
  padding: 10px;
  margin: 0px 20px;
`
const Option = styled.option`
`

const Image = styled.img`
    width: 50%;
    height: 40vh;
    object-fit: cover;
    margin-left: 10rem;
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`

const Title = styled.h1`
    font-weight: 200;
`

const Desc = styled.p`
    margin: 20px 0px;
`

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
    cursor: pointer;
`
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`
const Button = styled.button`
    padding: 15px;
    border: 1px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        background-color: #f8f4f4;
    }
`


const Product = () => {
  return (
    <Container>
        <Announcement></Announcement>
        <Navbar></Navbar>
        <Wrapper>
            <ImageContainer>
                <Image src='../../Public/Images/17.png'/>
            </ImageContainer>
            <InfoContainer>
                <Title>lorem Ipsum</Title>
                <Desc>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Ipsa ducimus hic officiis, mollitia tempora voluptate voluptates 
                    numquam eaque quo reprehenderit placeat, eos voluptatem quaerat 
                    aperiam repudiandae nisi, nobis architecto quia.
                </Desc>
                <Price>R$ 19,99</Price>
                <FilterContainer>
                    <Filter>
                        <FilterText>Cor:</FilterText>
                        <FilterColorContainer>
                            <FilterColor color='black'></FilterColor>
                            <FilterColor color='darkblue'></FilterColor>
                            <FilterColor color='gray'></FilterColor>
                        </FilterColorContainer>
                        
                        <FilterText>Tamanho:</FilterText>
                        <Select>
                            <Option>PP</Option>
                            <Option>P</Option>
                            <Option>M</Option>
                            <Option>G</Option>
                            <Option>XG</Option>
                            <Option>XGG</Option>
                        </Select>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <RemoveIcon></RemoveIcon>
                        <Amount>1</Amount>
                        <AddIcon></AddIcon>
                    </AmountContainer>
                    <Button>ADICIONAR AO CARRINHO</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter></Newsletter>
        <Footer></Footer>
    </Container>
  )
}

export default Product