import { FacebookOutlined, Favorite, GitHub, MailOutline, PhoneAndroidOutlined, RoomOutlined, Twitter } from "@mui/icons-material"
import {AssetAttrib, AttribContainer, Center, ContactItem, Container,Copyright,CopyrightContainer,Desc,DescContainer,Left, List, ListItem, Logo, Right, SocialContainer, SocialIcon, Title} from "./styled.footer"


const Footer = () => {
    return (
       <Container>
           <DescContainer>
           <Left>
               <Logo>ZACRO</Logo>
               <Desc>
               As Asia’s Online Fashion Destination, 
               we create endless style possibilities 
               through an ever-expanding range of products form the most coveted international and local brands, 
               putting you at the centre of it all. With <b>ZACRO</b>, You Own Now.
               </Desc>

               <SocialContainer>
                   <SocialIcon color ="3b5999">
                       <FacebookOutlined style={{color: "#fff"}}/>
                   </SocialIcon>
                   <SocialIcon color="24292F">
                        <GitHub style={{color: "#fff"}}/>
                   </SocialIcon>
                   <SocialIcon color="55caee">
                        <Twitter style={{color: "#fff"}}/>
                   </SocialIcon>
               </SocialContainer>
           </Left>

           <Center>
                <Title>CUSTOMER SERVICE</Title>
                <List >
                    <ListItem>
                        FAQ     
                    </ListItem>
                    <ListItem>
                    Size Guide   
                    </ListItem>
                    <ListItem>
                    Exchanges & Returns    
                    </ListItem>
                    <ListItem>
                    Contact Us     
                    </ListItem>
                    <ListItem>
                    Buy Gift Cards    
                    </ListItem>
                    <ListItem>
                    Product Index   
                    </ListItem>                  
                </List>
           </Center> 
           <Right>
               <Title>CONTACT US</Title>                   
                    <ContactItem>
                        <RoomOutlined style={{marginRight:'10px'}}/>
                            Libmanan Camarines Sur
                    </ContactItem>                   
                   <ContactItem>
                        <PhoneAndroidOutlined style={{marginRight:'10px'}}/>
                            09xxxxxxxxx
                    </ContactItem>                   
                   <ContactItem>
                        <MailOutline style={{marginRight:'10px'}}/>
                             youremail@email.com
                   </ContactItem>                                                  
           </Right>
           </DescContainer>

           <CopyrightContainer>
                <Copyright>
                    &#169; 2021  Made with
                    <Favorite 
                    style={{color: "red", fontSize: "20px", margin: "0 5px 0 5px"}}
                    />
                    by junel sacro
                </Copyright>
                <AttribContainer>
                    <AssetAttrib>
                        all images are from unsplash.com
                    </AssetAttrib>
                    <AssetAttrib>
                        all SVG are from  undraw.com
                    </AssetAttrib>
                </AttribContainer>            
           </CopyrightContainer>
       </Container>
    )
}

export default Footer
