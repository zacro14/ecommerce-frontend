import styled from "styled-components"
const Container = styled.div`
    height: 40px;
    background-color: #EEC015;
    color: #000000;
    display:  flex;
    align-items: center;
    justify-content:center;
    cursor: pointer;
    font-size:14px;
    font-weight:500;
`

const Announcement = () => {
    return (
        <Container>
                Super Deal! Free Shipping on Orders with Minimum Spend of  &#8369;199
        </Container>
    )
}

export default Announcement
