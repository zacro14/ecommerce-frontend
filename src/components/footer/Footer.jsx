import { FacebookOutlined, GitHub, MailOutline, PhoneAndroidOutlined, RoomOutlined, Twitter } from "@mui/icons-material"
import {Center, ContactItem, Container,Desc,Left, List, ListItem, Logo, Right, SocialContainer, SocialIcon, Title} from "./styled.footer"


const Footer = () => {
    return (
       <Container>
           <Left>
               <Logo>ZACRO</Logo>
               <Desc>
               As Asia’s Online Fashion Destination, 
               we create endless style possibilities 
               through an ever-expanding range of products form the most coveted international and local brands, 
               putting you at the centre of it all. With ZACRO, You Own Now.
               </Desc>

               <SocialContainer>
                   <SocialIcon color ="3b5999">
                       <FacebookOutlined/>
                   </SocialIcon>
                   <SocialIcon color="24292F">
                        <GitHub/>
                   </SocialIcon>
                   <SocialIcon color="55caee">
                        <Twitter/>
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
       </Container>
    )
}

export default Footer
