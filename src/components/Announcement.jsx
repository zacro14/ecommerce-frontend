
import styled from "styled-components"
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
const Container = styled.div`
    height: 40px;
    background-color:  #EEC015;
    color: #000000;
    display: flex;
    align-items: center;
    justify-content:space-between;
    font-size:14px;
    font-weight:500;
`
const AnouncDesc= styled.span`
    flex:1;
    display: flex;
    align-items:center;
    justify-content: center;
`;
const Close =styled.span`

    justify-content: flex-end;
    cursor: pointer;
    color: #303F42;
`

const Announcement = () => {

    return (
        <Container>
            <AnouncDesc>
                Super Deal! 
                Free Shipping 
                on Orders with Minimum 
                Spend of  &#8369;199
                </AnouncDesc>
                <Close >
                    <CloseOutlinedIcon />
                </Close>
        </Container>
    )
}

export default Announcement
