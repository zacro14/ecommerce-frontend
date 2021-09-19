import styled from "styled-components"
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
const Container = styled.div`
    height: 40px;
    background-color:  #EEC015;
    color: #000000;
    display:  flex;
    align-items: center;
    justify-content:center;
    font-size:14px;
    font-weight:500;
`
const Close =styled.span`
    justify-content: flex-end;
    cursor: pointer;
    color: #303F42;
`

const Announcement = () => {
    return (
        <Container>
                Super Deal! Free Shipping on Orders with Minimum Spend of  &#8369;199
                <Close>
                    <CloseOutlinedIcon />
                </Close>
        </Container>
    )
}

export default Announcement
