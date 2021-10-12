
import styled from "styled-components/macro"
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { mobile } from "../responsive";
import { useState } from "react";

const Container = styled.div`
    height: 40px;
    background-color:  #EEC015;
    color: #000000;
    display: ${props=> props.close ? "flex" : "none"};
    align-items: center;
    justify-content:space-between;
    font-size:14px;
    font-weight:500;
    padding: 0 10px;
    
    ${mobile({fontSize: "12px"})}
`
const AnouncDesc= styled.span`
    flex:1;
    display: flex;
    align-items:center;
    justify-content: center;
`;
const Close =styled.span`
    justify-content: flex-end;
    align-items:center;
    cursor: pointer;
    color: #303F42;

    ${mobile({justifyContent: "center"})}
`

const Announcement = () => {
    const [close, setClose] = useState(true)
    const handleClose = () => {
        setClose(false);
    }
    return (
        <Container close = {close}>
            <AnouncDesc>
                Super Deal! 
                Free Shipping 
                on Orders with Minimum 
                Spend of  &#8369;199
                </AnouncDesc>
                <Close onClick={handleClose}>
                    <CloseOutlinedIcon />
                </Close>
        </Container>
    )
}

export default Announcement
