import { ShoppingBagOutlined, SearchOutlined, FavoriteBorderOutlined} from "@mui/icons-material";
import styled from "styled-components/macro";
import {Link} from "react-router-dom"

const Info = styled.div`
    opacity:0;
    display:flex;
    height:100%;
    width:100%;
    position:absolute;
    top:0;
    left:0;
    align-items:center;
    justify-content:center; 
    background-color: rgba(0,0,0, 0.1);
    transition: all 0.5s ease;
`;
const Container  = styled.div`
    flex: 1;
    margin:5px;
    min-width: 280px;
    height:300px;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:#F0F2F5;
    position:relative;

    &:hover ${Info}{
        opacity:1;
        color: #EEC015;      
    }    
`;
const Image= styled.img`
    height:100%;
`;

const Icon = styled.div`
    display:flex;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color:#000000;
    align-items: center;
    justify-content:center;
    margin: 5px;
    opacity:80%;
    color:  #FFFFFF;
    cursor: pointer;
    transition: all 0.5s ease;
    &:hover{
        transform: scale(1.1);
        color:#EEC015;
    }
    
`;
const Links = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

const Product = ({item}) => {
    return (
       <Container>  
            <Image src={item.img}/>
            <Info>
                <Icon>
                        <ShoppingBagOutlined/>
                </Icon>
                <Icon>
                    <Links to ={`product/${item.cat}/${item.id}`}>
                        <SearchOutlined/>
                    </Links>
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined/>
                </Icon>
            </Info>
       </Container>
    )
}

export default Product
