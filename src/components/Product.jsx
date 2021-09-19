import FavoriteBorderOutlined from "@mui/icons-material/FavoriteBorderOutlined";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import ShoppingBagOutlined from "@mui/icons-material/ShoppingBagOutlined";
import styled from "styled-components";


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
    }    
`;
const Image= styled.img`
height:80%;
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


const Product = ({item}) => {
    return (
       <Container>
            <Image src={item.img}/>
            <Info>
                <Icon>
                    <ShoppingBagOutlined/>
                </Icon>
                <Icon>
                    <SearchOutlined/>
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined/>
                </Icon>
            </Info>

       </Container>
    )
}

export default Product
