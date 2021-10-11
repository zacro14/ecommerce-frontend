import styled from "styled-components"

const Container = styled.div`
    flex:1;
    margin: 3px;
    height: 100vh;
    position:relative;
    cursor: pointer;
    &:hover{
        opacity: 90%;
    }
`;
const Image = styled.img`
   width: 100%;
   height:80%;
   object-fit:cover;
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
`;
const Title = styled.h1`
    color: #FFFFFF;
`;

const CategoriesItem = ({item}) => {
    return (
        <Container>
                <Image src={item.img}/>
                <Info>
                    <Title>
                        {item.title}
                    </Title>
                </Info>
        </Container>
    )
}

export default CategoriesItem
