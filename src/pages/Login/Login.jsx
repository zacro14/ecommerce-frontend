
import { Apple, Facebook, Google } from "@mui/icons-material"
import Footer from "../../components/footer/Footer"
import { Container, Desc, ForgotPass, ForgotPasswordContainer, 
    FormContainer, Icon, IconLabel, Input, InputContainer, 
    LabelNew, LabelSignup, LeftContainer, LoginButton, 
    Or, RightContainer, Separator, SeparatorContainer, 
    SignupContainer, SocialButton, SocialContainer, Title, 
    TitleLogin, Wrapper,} 
    from "./styled.login"


const Login = () => {
    return (         
        <Container>
           <Wrapper>
               <RightContainer>
                   <Title>Zacro</Title>                  
                        <Desc> #1 Shopping Platform in the Philippines</Desc>                  
               </RightContainer>
               <LeftContainer>
               
                   <form>
                 
                       <FormContainer>
                           <TitleLogin>Log in</TitleLogin>           
                           <InputContainer>                                
                                <Input placeholder="Email Address" type="email" />
                           </InputContainer> 
                           <InputContainer>
                                 <Input placeholder="Password" type="password" name="" />
                           </InputContainer> 
                                                  
                           <LoginButton>log in</LoginButton>
                           <ForgotPasswordContainer>
                               <ForgotPass href="#">
                                   Forgot Password
                               </ForgotPass>
                           </ForgotPasswordContainer>                           
                               <SeparatorContainer>
                                   <Separator/>
                                   <Or>Or</Or>
                                   <Separator/>
                               </SeparatorContainer>
                            <SocialContainer>
                                <SocialButton color="1877f2">
                                    <Icon><Facebook/></Icon>
                                    <IconLabel>facebook</IconLabel>
                                </SocialButton>
                                <SocialButton color="4285f4" >
                                    <Icon><Google/></Icon>
                                    <IconLabel>google</IconLabel>
                                </SocialButton>
                                <SocialButton color="000" >
                                <Icon><Apple/></Icon>
                                    <IconLabel>apple</IconLabel>
                                </SocialButton>
                            </SocialContainer>                                                                                                                                                     
                       </FormContainer>
                   </form>

                   <SignupContainer>
                                <LabelNew>
                                    New to Zacro?
                                    <LabelSignup>
                                        Sign up
                                    </LabelSignup>
                                </LabelNew>
                    </SignupContainer>  
               </LeftContainer>
           </Wrapper>
        <Footer/>
    </Container>      
    )
}

export default Login
