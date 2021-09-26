import  Badge  from '@mui/material/Badge';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Tooltip from '@mui/material/Tooltip';
import React from 'react';
import { Container, Wrapper,Left,Language,SearchContainer, Input,Center
,Logo,Right,MenuItem} from "./styled/styled.navbar";


const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                 <Left>
                     <Language>ENG</Language>
                     <SearchContainer>
                             <Input placeholder="Search Products"/>
                             <SearchOutlinedIcon style={{ fontSize:16, color: 'gray' }}/>
                     </SearchContainer>
                 </Left>
                 <Center>
                         <Logo>
                                ZACRO
                         </Logo>
                </Center>
                 <Right>
                    
                         <MenuItem>Sign up</MenuItem>
                         <MenuItem>Log in</MenuItem>                     
                         <MenuItem>
                            <Tooltip title={"Wishlist"}>
                                    <Badge badgeContent= {2} color= "primary">
                                          <FavoriteBorderOutlinedIcon/>
                                    </Badge>
                            </Tooltip>      
                         </MenuItem>
                         <MenuItem>
                            <Tooltip title={"My Bag"}>
                                    <Badge badgeContent= {1} color= "primary">
                                            <ShoppingBagOutlinedIcon/>
                                    </Badge>
                            </Tooltip>      
                         </MenuItem>                                                   
                 </Right>
            </Wrapper>           
        </Container>
    )
}

export default Navbar
