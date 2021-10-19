import {  useState } from 'react';
import { Badge , Tooltip }  from '@mui/material';
import { Menu, ShoppingBagOutlined, FavoriteBorder } from '@mui/icons-material';
import {
        Container, Wrapper,Left,
        Center,Logo, Right,MenuItem, 
        MenuitemText, MenuItemHamburger, MenuitemWishList, 
        Links, NavLinks, Span, MenuItemCenter, 
        MobileContainer, MobileBLurWrapper, 
        CloseIcon, MobileMenuLogo, MobilemenuItem, 
        MenuLoginButton, ButtonContainer, 
        MenuItemContainer, MenuItems,
} from "./styled/styled_navbar";

const Navbar = ({active}) => {

 const [isOpen, setMobileMenu ]=  useState(false);

    return (
<>
        <Container>
            <Wrapper>
                 <Left>
                     {/* <Language>ENG</Language>
                     <SearchContainer>
                             <Input placeholder="Search Products"/>
                             <SearchOutlinedIcon style={{ fontSize:16, color: 'gray' }}/>
                     </SearchContainer> */}
                <Links to="/">
                        <Logo>
                                mens|<Span>Corner</Span>   
                        </Logo>         
                </Links>
                </Left>
                <Center>              
                        <MenuItemCenter>
                                <NavLinks to="/">                       
                                        home    
                                </NavLinks>                            
                        </MenuItemCenter>                      
                        <MenuItemCenter> 
                                <NavLinks to={"/products/luxury"}>                      
                                        luxury  
                                </NavLinks>                  
                        </MenuItemCenter> 
                        <MenuItemCenter> 
                                <NavLinks to={"/products/sport"}>                              
                                        sport   
                                </NavLinks>                   
                        </MenuItemCenter>            
                        <MenuItemCenter>
                                <NavLinks to ={"/products/office"}>
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
                         <MenuitemWishList>
                            <Tooltip title={"Wishlist"}>
                                    <Badge 
                                    badgeContent= {0} 
                                    color= "primary"
                                    >
                                        <FavoriteBorder/>
                                    </Badge>
                            </Tooltip>      
                         </MenuitemWishList>
                                <MenuItem active={active}>
                                <Tooltip title={"My Bag"}>
                                        <Badge badgeContent= {0} color= "primary">
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
                                <NavLinks activeClassName="active" to= "/">
                                        Home
                                </NavLinks>
                        </MobilemenuItem>
                        <MobilemenuItem>
                                <NavLinks activeClassName="active" to= {"/products/luxury"}>
                                        luxury
                                </NavLinks>
                        </MobilemenuItem>
                        <MobilemenuItem>
                                <NavLinks activeClassName="active" to={"/products/sport"}>
                                         sport
                                </NavLinks>
                        </MobilemenuItem>
                        <MobilemenuItem>
                                <NavLinks activeClassName="active" to= {"/products/office"}>
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
