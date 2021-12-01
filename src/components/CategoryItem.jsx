import styled from "styled-components/macro"
import {mobile} from "../responsive"

const Container = styled.figure`
    position: relative;
    flex:1;
    height: 100%;
    cursor: pointer;
    overflow: hidden;

    :hover{ 
        transform: scale(1.03);
        transition: all .8s ease;
    }
`;

 const Image = styled.img`
   width: 100%;
   height: 100% ;
   object-fit: cover;
   background-color: #000;
   opacity: 1;
   overflow: hidden;

`;

const Info = styled.figcaption`
    height:100%;
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    ${mobile({margin: 0})}
`;

const Category = styled.h1`
    position: absolute;
    top: 50%;
    font-size: 30px;
    color: #fff;
    text-transform: uppercase;
    padding: 0 .625rem;
    letter-spacing: .125rem;
    font-weight: 500;
    text-shadow: 0 0 50px #000;
`;

const CategoriesItem = ({item}) => {
    return (
        <Container>      
                <Image src={item.img} alt={item.title}/>
                <Info> 
                    <Category>
                        {item.category}
                    </Category>
                </Info>     
        </Container>
    )
}

export default CategoriesItem
