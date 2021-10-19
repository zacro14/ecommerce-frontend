import styled from "styled-components/macro"
import {mobile} from "../responsive"

const Container = styled.div`
    flex:1;
    margin: 3px;
    min-height: 300px;
    position:relative;
    cursor: pointer;


    &:hover{
       
        color: #EEC015;  
    }
`;

const Image = styled.img`
   width: 100%;
   height:100%;
   object-fit:cover;
   opacity: .8;

   ${mobile({height: "100%"})}
`;
const Info = styled.div`
    position: absolute;
    height:100%;
    width:100%;
    top:0;
    left:0;
    bottom:0;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin-left: 20px;

    ${mobile({margin: 0})}
`;

const Title = styled.h1`
    color: #fff;
    text-transform:uppercase;
    text-align: center;
    padding: .625rem;
    background-color: #000;
    border: 1px solid #000;
    z-index: 1;
`;

const CategoriesItem = ({item}) => {
    return (
        <Container>      
                <Image src={item.img} alt={item.title}/>
                <Info>
                        <Title>
                            {item.title}
                        </Title>
                </Info>     
        </Container>
    )
}

export default CategoriesItem
