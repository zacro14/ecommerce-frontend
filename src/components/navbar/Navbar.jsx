import {  useState,useEffect, useRef } from 'react';
import { Badge , Tooltip }  from '@mui/material';
import { useSelector } from "react-redux"
import { Menu, ShoppingBagOutlined } from '@mui/icons-material';
import {
        Container, Wrapper,Left,
        Center,Logo, Right,MenuItem, 
        MenuitemText, MenuItemHamburger, 
        Links, NavLinks, Span, MenuItemCenter, 
        MobileContainer, MobileBLurWrapper, 
        CloseIcon, MobileMenuLogo, MobilemenuItem, 
        MenuLoginButton, ButtonContainer, 
        MenuItemContainer, MenuItems,
} from "./styled/styled_navbar";

const Navbar = () => {
        const navbar = useRef(null);
        const [isOpen, setMobileMenu ]=  useState(false);
        const cart = useSelector(state => state.cart.product)
        const [Quantity, setItemQuantity] = useState(null)

        useEffect(() => {
              let  data = cart.map((item) => item.quantity)
              if(data.length === 0) {
                        setItemQuantity(0)
              } else {
                        let quantity = data.reduce((itemquantity, a) => itemquantity + a , 0 ); 
                        setItemQuantity(quantity)
              }
                
        }, [cart])
        const scrollHandler = () => {
                if (navbar.current && window.screen.width > 0 ) {
                        if (window.pageYOffset >= 70) {
                        navbar.current.classList.add('is-scroll');
                        } else {
                        navbar.current.classList.remove('is-scroll');
                        }
                }
        };

        useEffect(() => {
                window.addEventListener('scroll', scrollHandler);
                return () => window.removeEventListener('scroll', scrollHandler);
        }, []);
    return (
        <>
        <Container ref={navbar}>
            <Wrapper>
                 <Left>
                <Links to="/">
                        <Logo>
                                mens|<Span>Corner</Span>   
                        </Logo>         
                </Links>
                </Left>
                <Center>              
                        <MenuItemCenter>
                                <NavLinks 
                                        activeClassName = "active" 
                                        exact to ="/">                       
                                        home    
                                </NavLinks>                            
                        </MenuItemCenter>
                        <MenuItemCenter>
                                <NavLinks 
                                        activeClassName = "active"
                                        exact to ={"/shop/"} >                       
                                        shop    
                                </NavLinks>                            
                        </MenuItemCenter>                       
                        <MenuItemCenter> 
                                <NavLinks 
                                        activeClassName = "active" 
                                        to ={"/shop/products/luxury/"}>                      
                                        luxury  
                                </NavLinks>                  
                        </MenuItemCenter> 
                        <MenuItemCenter> 
                                <NavLinks 
                                        activeClassName = "active" 
                                        to ={"/shop/products/sport/"}>                              
                                        sport   
                                </NavLinks>                   
                        </MenuItemCenter>            
                        <MenuItemCenter>
                                <NavLinks 
                                to ={"/shop/products/office/"}>
                                        office
                                </NavLinks>
                        </MenuItemCenter>    
                </Center>
                
                <Right>  
                       
                        <MenuitemText> 
                                <NavLinks to="/register">                   
                                        Register  
                                </NavLinks>            
                        </MenuitemText>
                        
                        <MenuitemText>
                                <NavLinks to="/login">
                                        Log in
                                </NavLinks>
                        </MenuitemText>                  
                                <MenuItem>
                                        
                                <Tooltip title={"My Bag"}>
                                        <Badge badgeContent= { Quantity } color= "error">
                                        <Links to="/cart">
                                                <ShoppingBagOutlined/>
                                        </Links>
                                        </Badge>      
                                </Tooltip>      
                                
                                </MenuItem>
                         <MenuItemHamburger 
                         onClick={()=>setMobileMenu(true)}
                         >
                                <Tooltip title={"Menu"} >
                                        <Menu/>
                                </Tooltip>
                         </MenuItemHamburger>                                        
                 </Right>
            </Wrapper>           
        </Container>
        <MobileContainer isOpen ={isOpen}>
                <MobileMenuLogo>
                        <Logo>
                                mens|<Span>corner</Span>
                        </Logo> 
                        <CloseIcon 
                        onClick ={()=> setMobileMenu(false)} 
                        />
                </MobileMenuLogo>
                <MenuItemContainer>
                     <MenuItems onClick={() => setMobileMenu(false)}>
                        <MobilemenuItem>
                                <NavLinks 
                                        activeClassName="active" 
                                        exact to= "/">
                                        Home
                                </NavLinks>
                        </MobilemenuItem>
                        <MobilemenuItem>
                                <NavLinks 
                                        activeClassName="active" 
                                        exact  
                                        to= {"/shop/products/"}>
                                        shop
                                </NavLinks>
                        </MobilemenuItem>
                        <MobilemenuItem>
                                <NavLinks 
                                        activeClassName="active" 
                                        to= {"/shop/products/luxury"}>
                                        luxury
                                </NavLinks>
                        </MobilemenuItem>
                        <MobilemenuItem>
                                <NavLinks 
                                        activeClassName="active" 
                                        to={"/shop/products/sport"}>
                                         sport
                                </NavLinks>
                        </MobilemenuItem>
                        <MobilemenuItem>
                                <NavLinks 
                                        activeClassName="active" 
                                        to= {"/shop/products/office"}>
                                        office
                                </NavLinks>
                        </MobilemenuItem>
                     </MenuItems>   
                <ButtonContainer>
                        <MenuLoginButton color="true" >
                                <Links to="/login">
                                        Login
                                </Links>
                        </MenuLoginButton>
                        <MenuLoginButton >
                                <Links to="/register">
                                        Register
                                </Links>
                        </MenuLoginButton>
                </ButtonContainer>
                </MenuItemContainer>
               
        </MobileContainer>  
        <MobileBLurWrapper 
                isOpen ={isOpen} 
                onClick={()=> setMobileMenu(false)}
        >        
        </MobileBLurWrapper>   
        </>
    )
}

export default Navbar
