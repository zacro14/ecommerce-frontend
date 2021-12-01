
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';
import { sliderItems } from "../../data";
import {
  Container, Arrow,Wrapper,
  Slide,InfoContainer,Button,Desc,Title, 
  ArrrowRight, ArrowLeft, ExploreButtonText, 
  ExploreArrow
} from "./styled.slides"


 const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const timeoutRef = useRef(null)

  const handleClick = ( direction ) =>{
            if( direction === "left" ){
                setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
            } else {
                setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
            }      
    }

  const resetTimeout = () =>{
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

    useEffect(() => {
     
     timeoutRef.current = setTimeout(() => {
        setSlideIndex((prevIndex)=>
         prevIndex === sliderItems.length - 1 ? 0 : prevIndex + 1
        )

      }, 5000);
      return () => {
        resetTimeout()
      }
    }, [slideIndex])
    
    return (
      
      <Container>
          <Arrow direction={"left"} onClick={()=> handleClick("left")}>
            <ArrowLeft/>
          </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item)=>(
                <Slide key={item.id} img ={item.img}>                   
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Desc>{item.desc}</Desc>
                        <Link style={{textDecoration: "none"}} to={`/shop/products/${item.category}`}>
                          <Button>
                            <ExploreButtonText > explore now </ExploreButtonText>
                            <ExploreArrow />
                          </Button>
                        </Link>
                    </InfoContainer> 
                </Slide>                
                ))}
            </Wrapper>
          <Arrow  direction={"right"} onClick={()=> handleClick("right")}>
            <ArrrowRight/>
          </Arrow>        
      </Container>
    )
}
export default Slider;
