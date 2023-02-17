import styled from "styled-components"
import Announcement from "../Components/Announcement"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import Newsletter from "../Components/Newsletter"
import Products from "../Components/Products"

const Container = styled.div``
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
const Title = styled.h1`
  margin: 20px;
`

const Filter = styled.div`
  margin: 20px;
`

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`
const Option = styled.option`
`

const ProductList = () => {
  return (
    <Container>
        <Navbar></Navbar>
        <Announcement></Announcement>
        <Title>Vestidos </Title>
        <FilterContainer>
          <Filter>
            <FilterText>Filtrar Produtos:</FilterText>
            <Select>
              <Option disabled selected>Cor</Option>
              <Option>Branco</Option>
              <Option>Preto</Option>
              <Option>Vermelho</Option>
              <Option>Azul</Option>
              <Option>Amarelo</Option>
              <Option>Verde</Option>
            </Select>
            <Select>
              <Option disabled selected>Tamanho</Option>
              <Option>PP</Option>
              <Option>P</Option>
              <Option>M</Option>
              <Option>G</Option>
              <Option>XG</Option>
              <Option>XGG</Option>
            </Select>
          </Filter>
          <Filter>
            <FilterText>Ordenar Produtos:</FilterText>
            <Select>
              <Option selected>Lançamentos</Option>
              <Option>Preço (asc)</Option>
              <Option>Preço (desc)</Option>
            </Select>
          </Filter>
        </FilterContainer>
        <Products></Products>
        <Newsletter></Newsletter>
        <Footer></Footer>
    </Container>
  )
}

export default ProductList