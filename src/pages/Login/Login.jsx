
import { Apple, Facebook, Google, VisibilityOffOutlined, VisibilityOutlined } from "@mui/icons-material"
import { useState } from "react"
import Footer from "../../components/footer/Footer"
import HeaderLogin from "../../components/headerlogin/HeaderLogin"
import { DivLeft, TitleCreateAccount, Visibility, 
    WelcomeContainer, WelcomeImg } 
    from "../Register/styled.register"
import { Container, Desc, ForgotPass, ForgotPasswordContainer, 
    FormContainer, Icon, IconLabel, Input, InputContainer, 
    LabelNew, LabelSignup, LeftContainer, LoginButton, 
    Or, RightContainer, Separator, SeparatorContainer, 
    SignupContainer, SocialButton, SocialContainer, Title, 
    TitleLogin, WithInputIcon, Wrapper,} 
    from "./styled.login"


    

    

const Login = (title) => {

     const [values, setValues] = useState({
         password: "",
         showPassword: false,
     });

     const handleClickShowPassword = () => {
         setValues({ ...values, showPassword: !values.showPassword });
       };

     const handlePasswordChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };

     const handleSubmit = (event) => {
         event.preventDefault()
     }

    return (         
        <Container>
            <HeaderLogin/>
            <TitleCreateAccount>{title.title}</TitleCreateAccount>
           <Wrapper>     
               <RightContainer>
                   <DivLeft>
                        <Title>Zacro</Title>     
                   </DivLeft>                              
                        <Desc> #1 Shopping Platform in the Philippines</Desc>                  
               </RightContainer>
               <LeftContainer>
                    <WelcomeContainer>                      
                            <WelcomeImg   
                            src="/images/login/welcome.svg" 
                            alt="" 
                            />
                    </WelcomeContainer>             
                   <form onSubmit ={handleSubmit}>                
                       <FormContainer>
                           <TitleLogin>Log in</TitleLogin>           
                           <InputContainer>                                
                                <Input 
                                placeholder="Email Address" 
                                type="email"
                                autoFocus
                                name="logintoken"                                              
                                />
                           </InputContainer> 
                           <WithInputIcon >
                                <Input
                                placeholder="Password" 
                                type={values.showPassword ? "text" : "password"}
                                onChange={handlePasswordChange}                      
                                />
                                <Visibility onClick={handleClickShowPassword}>             
                                    {values.showPassword ? 
                                    <VisibilityOutlined 
                                    fontSize="small"
                                    />
                                     : 
                                    <VisibilityOffOutlined
                                    fontSize="small" 
                                    /> }
                                </Visibility>
                           </WithInputIcon>                                                  
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
