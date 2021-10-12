
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { useState } from "react";
import { sliderItems } from "../../data";
import {Container, Arrow,Wrapper,Slide,ImgContainer,Img,InfoContainer,Button,Desc,Title} from "./styled.slides"


 const Slider = () => {
   const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) =>{
            if(direction==="left"){
                setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2)
            } else {
                setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0)
            }      
    }
    return (
      <Container>
          <Arrow direction={"left"} onClick={()=> handleClick("left")}>
            <ArrowBackIosOutlinedIcon/>
          </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item)=>(
                <Slide bg={item.bg} key={item.id}>                   
                    <ImgContainer>
                        <Img src={item.img}/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Desc>{item.desc}</Desc>
                        <Button>SHOP NOW</Button>
                    </InfoContainer> 
                </Slide>                
                ))}
            </Wrapper>
          <Arrow  direction={"right"} onClick={()=> handleClick("right")}>
            <ArrowForwardIosOutlinedIcon/>
          </Arrow>        
      </Container>
    )
}
export default Slider;
