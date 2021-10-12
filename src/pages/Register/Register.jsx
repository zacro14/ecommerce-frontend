
import { Apple, Facebook, Google, VisibilityOffOutlined, VisibilityOutlined } from "@mui/icons-material"
import { useState } from "react"
import Footer from "../../components/footer/Footer"
import HeaderLogin from "../../components/headerlogin/HeaderLogin"
import { Container, Desc, DivLeft,
    FormContainer, Icon, IconLabel, Input, InputContainer, 
    LabelNew, LabelSignup, LeftContainer, LoginButton, 
    LoginDescContainer, Or, RightContainer, Separator, SeparatorContainer, 
    SignupContainer, SocialButton, SocialContainer, TermsPrivacy, TermsPrivacyContainer, Title, 
    TitleCreateAccount,TitleLogin, Visibility, WelcomeContainer, WelcomeImg, WithInputIcon, Wrapper,} 
    from "./styled.register"



const Register = (title) => {

    const [values, setValues] = useState({
        password: "",
        showPassword: false,
        showConfirmPassword: false,
    });

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
      };

      const handleClickShowConfirmPassword = () => {
        setValues({ ...values, showConfirmPassword: !values.showConfirmPassword });
      };

    const handlePasswordChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };

    const handleSubmit = (event) => {
        event.preventDefault()
    }
    return (         
        <Container>
            <HeaderLogin /> 
            <TitleCreateAccount >{title.title}</TitleCreateAccount>
           <Wrapper>
               <RightContainer>
                    <DivLeft>
                        <Title>Zacro</Title>         
                    </DivLeft>                
                   <LoginDescContainer>                      
                        <Desc> #1 Shopping Platform in the Philippines</Desc>
                    </LoginDescContainer>                 
               </RightContainer>
               <LeftContainer>
                    <WelcomeContainer>                      
                            <WelcomeImg   
                            src="/images/login/welcome.svg" 
                            alt="" 
                            />
                    </WelcomeContainer>
                   <form onSubmit={handleSubmit} noValidate>                
                       <FormContainer>
                           <TitleLogin>sign up</TitleLogin>           
                           <InputContainer>                                
                                <Input 
                                placeholder="Email Address" 
                                type="email"
                                name="email"
                                autoFocus
                                />
                           </InputContainer> 
                           <WithInputIcon>
                                <Input 
                                placeholder="Password" 
                                type={values.showPassword ? "text" : "password"}
                                onChange={handlePasswordChange}
                                name="password"
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
                           <WithInputIcon>
                                 <Input 
                                 placeholder="Confirm Password" 
                                 type= {values.showConfirmPassword ? "text" : "password"}
                                 onChange={handlePasswordChange}
                                 name="confirmPassword"
                                 />
                                  <Visibility onClick={handleClickShowConfirmPassword}>             
                                    {values.showConfirmPassword ? 
                                    <VisibilityOutlined 
                                    fontSize="small"
                                    />
                                     : 
                                    <VisibilityOffOutlined 
                                    fontSize="small" 
                                    /> }
                                </Visibility>
                           </WithInputIcon>                                                       
                           <LoginButton type ="submit">sign up</LoginButton>                                                
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
                            <TermsPrivacyContainer>
                                By signing up, you agree to Zacro's
                               
                               <TermsPrivacy href="#">
                                   Terms of Service
                               </TermsPrivacy>
                                 &
                               <TermsPrivacy href="#">
                                   Privacy
                               </TermsPrivacy>
                           </TermsPrivacyContainer>                                                                                                                                                         
                       </FormContainer>
                   </form>

                   <SignupContainer>
                        <LabelNew>
                            Have an account?
                                <LabelSignup to="/login">
                                    log in 
                                </LabelSignup>
                        </LabelNew>
                    </SignupContainer>  
               </LeftContainer>
           </Wrapper>
        <Footer/>
    </Container>      
    )
}

export default Register
