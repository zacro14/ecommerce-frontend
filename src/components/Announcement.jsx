
import styled from "styled-components/macro"
import { mobile } from "../responsive";

const Container = styled.div`
    height: 40px;
    background-color:  #222;
    color: #fff;
    display: flex;
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

const Announcement = () => {

    return (
        <Container >
            <AnouncDesc>
                Super Deal! 
                Free Shipping 
                on Orders with Minimum 
                Spend of  &#8369;199
                </AnouncDesc>
        </Container>
    )
}

export default Announcement
