import { Add, Remove } from "@mui/icons-material";
import { Link } from "react-router-dom";
import styled from "styled-components/macro"
import { mobile } from "../../responsive";

export const ImageContainer = styled.div`
    flex: 2;
    width: 100%;
    height: 100vh;
    padding: 20px;

    ${mobile({
        padding: "10px",
        width: "auto",
    })}

`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 2px;

    ${mobile({
    minHeight: "100%"
    })}
`;

export const ImageGallery = styled(Image)`
    height: 150px;
    width:150px;
`;

export const InfoContainer = styled.div`
    padding: 20px;
    flex: 1;
    align-items: center;
    background-color: #fff;
    box-shadow:  0.0625rem 0.0625rem rgb(0 0 0 / 5%);
    border: 1px solid #e9ecef;


    ${mobile({padding: "10px"})}
`;

export const Title = styled.h1`
    font-weight: 600;
    text-transform: capitalize;
`;

export const Desc = styled.p`
    margin-bottom: 20px;
    padding: 10px 0;
`;

export const Category = styled.h3`
    font-size: 16px;
    font-weight: 500;
    color: grey;
    text-transform: capitalize;
    margin-bottom: 20px;
`;

export const Price = styled.span`
    font-size: 20px;
`;

export const Divider = styled.div`
    border: 1px solid #F5F5F5;
    margin: 10px 0;
`;

export const SelectContainer = styled.div`
    align-items: center;
    margin-bottom: 10px;

`;

export const FilterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: center;
`;

export const FilterSize =styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const FilterTitle = styled.label`
    align-content: center;
    font-weight: 600;
    margin-right: 15px;
    width: 110px;

    ${mobile({
        width: "30px",
        display: "flex",
        alignItems: "flex-start"
    })}
`;

export const FilterColor = styled.span`
    display: flex;
    background-color: ${props => props.color};
    border-radius:100%;
    margin: 5px;
    width: 36px;
    height: 36px;
    position: relative;
    justify-content: space-between;
    border: 3px solid transparent;

    &:hover{
        cursor: pointer;
        border: 3px solid #ccc;
    }
    &.active{
        border: 3px solid #ccc;
        ::after{
            content: "✓";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            margin: auto;
            color: #fff;
        }
    }
`;

export const FilterColorContainer = styled.div`
    display: flex;
    align-items:center;
    justify-content: space-between;

    ${mobile({justifyContent: "space-between"})}
`;

export const SelectSize = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    padding: 10px;
`;

export const FilterSizeOption = styled.button`
    background: transparent;
    padding: 5px;
    font-size: 14px;
    border: 1px solid  #ccc;
    color: #000000;
    cursor: pointer;
    width: 70px;
    margin: 5px;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;

    &:hover { 
        border: 1px solid #222;
    }
    &.active{
        border: 1px solid #222;
    }
`;

export const AddContainer = styled.div`
    display: flex;
    margin: 30px 0;

    ${mobile({
        flexDirection: "column", 
        marginTop: "auto",

    })}
`;

export const AmountContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Amount = styled.input`
    text-align: center;
    width: 40px;
    border: 1px solid #ccc;
    border-radius: 3px;
    margin: 0 3px;

    &:focus{
        outline: none;
        border: 1px solid #000;

    }
`;

export const RemoveItem = styled(Remove)`
    cursor: pointer;
    border: 1px solid #ccc;
    border-radius: 3px;

    &:hover{
        border:1px solid #000;
    }
`;

export const AddItem = styled(Add)`
    cursor: pointer;
    border:1px solid #ccc;
    border-radius:3px;

    &:hover{
        border:1px solid #000;
    }
`;

export const AddtoCart = styled.button`
    background: transparent;
    color:black;
    font-size:16px;
    text-transform: capitalize;
    border-radius:2px;
    border: 1px solid #000;
    min-width: 11.25rem;
    height:48px;
    margin:0 15px 0 0;
    cursor: pointer;

    &:hover{
        border: 2px solid #000;
    }

    ${mobile({
        margin: "0 0 10px 0",
    })}
`;

export const BuyNowLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;
export const BuyNow = styled.button`
    background:black;
    color:white;
    border:none;
    border-radius:2px;
    font-size:16px;
    width: 11.25rem;
    height:48px;
    cursor: pointer;

    &:hover{
        opacity:80%;
    }

    ${mobile({
        width: "100%",
    })}
`;