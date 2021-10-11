import { useState } from 'react';
import {Badge , Tooltip}  from '@mui/material';
import { Menu, ShoppingBagOutlined, FavoriteBorder
        } from '@mui/icons-material';
import { Container, Wrapper,Left,
        Center,Logo, Right,MenuItem, MenuitemText,MenuItemSearch, 
        MenuItemHamburger, MenuitemWishList, Links, NavLinks, Span, MenuItemCenter, MobileContainer, MobileBLurWrapper,
        } from "./styled/styled_navbar";

const Navbar = ({active}) => {
 const [isOpen, setMobileMenu ]=  useState(false);
    return (
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
                     <MenuItemCenter>luxury</MenuItemCenter>
                     <MenuItemCenter>sport</MenuItemCenter>
                     <MenuItemCenter>office</MenuItemCenter>
                </Center>
                
                <Right>  
                        <MenuitemText>
                                <NavLinks to="/register">        
                                        Sign up
                                </NavLinks>
                        </MenuitemText>
                        <MenuitemText>
                                <NavLinks to="/login">
                                        Log in
                                </NavLinks>
                        </MenuitemText>
                <MenuItemSearch>
                        {/* <ShoppingBagOutlined/> */}
                </MenuItemSearch>                    
                         <MenuitemWishList>
                            <Tooltip title={"Wishlist"}>
                                    <Badge badgeContent= {0} color= "primary">
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
                         <MenuItemHamburger onClick={()=>setMobileMenu(true)}>
                                <Tooltip title={"Menu"} >
                                        <Menu/>
                                </Tooltip>
                         </MenuItemHamburger>                                        
                 </Right>
                 
                <MobileBLurWrapper isOpen ={isOpen} onClick={()=>setMobileMenu(false)}> 
                        <MobileContainer isOpen ={isOpen}>
                                                        ok
                                                        ok
                        </MobileContainer>       
                </MobileBLurWrapper>   
            </Wrapper>           
        </Container>
    )
}

export default Navbar
