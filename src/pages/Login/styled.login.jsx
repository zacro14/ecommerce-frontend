import styled from "styled-components"

export const Container = styled.div`
background-color:#F5F5F5;
width:100vw;
height:100vh;
box-sizing:content-box;
overflow-x:hidden;
`;
export const Wrapper = styled.div`
    height:90%;
    display: flex;  
    margin: .625rem 3.125rem 3.125rem 3.125rem;
    background:#fff;
    border-radius: .1875rem;
    box-shadow: 0 .0625rem .0625rem 0 rgb(0 0 0 / 5%);
`;

export const RightContainer= styled.div`
flex:1;
display: flex;
flex-direction:column;
background: linear-gradient(
    rgba(255, 255, 255, 0.3 ),
    rgba(255, 255, 255, 0.3 )),
    url("/images/login/fashion.jpg") center;
background-size:cover;
width:100%;
height:100%;
object-fit:cover;
justify-content:center;
align-content:center;
`;

export const Title = styled.h1`
font-size:6.25rem;
font-weight:500;
color:black;
display: flex;
justify-content: center;
align-items:center;

`;

export const Desc = styled.h3`
display: flex;
color:#E4E6E9;
width:100%;
background-color:black;
font-weight:500;
align-items:center;
justify-content: center;
`;


export const LeftContainer= styled.div`
display: flex;
flex-direction:column;
justify-content: center;
align-content: center;
-moz-box-sizing: border-box;
box-sizing: border-box;
box-shadow: 0 .1875rem .625rem 0 rgb(0 0 0 / 14%);
border-radius: .25rem;
overflow: hidden;


`;

export const FormContainer = styled.div`
display: flex;
flex-direction:column;
text-align:center;
padding:3.125rem;
width: 24.8125rem;
height:100%;
background-color:#ffff;
justify-content: flex-start;

`;

export const TitleLogin = styled.h2`
display: flex;
justify-content: flex-start;
color:black;
margin-bottom:.625rem;
text-transform:capitalize;
`;


export const Input = styled.input`
font-weight:700;
height:100%;
padding-left:.625rem;
outline: none;
border: 0;
border-radius:.125rem;

&::placeholder{
    font-weight:500;
}
`;


export const InputContainer = styled.div`
display: flex;
flex-direction:column;
box-sizing: border-box;
margin-bottom: 0.875rem;
width: 100%;
height: 2.5rem;
border: .0625rem solid rgba(0,0,0,.14);
border-radius: .125rem;


${Input}:focus{
    border: .0625rem solid #000;
    }
`;
export const Label = styled.label`
font-size:1rem;

`;

export const LoginButton = styled.button`
font-size:1rem;
text-transform:uppercase;
border:0;
border-radius: .125rem;
color: #fff;
background-color: #000;
box-shadow: 0 .0625rem .0625rem rgb(0 0 0 / 9%);
height: 2.5rem;
min-width: 8.75rem;
cursor: pointer;
margin-top: 1.25rem;

&:hover{
    opacity: 80%;
}
`;

export const ForgotPasswordContainer =styled.div`
margin: 0.625rem 0rem;
display: flex;
justify-content: flex-start;

`;

export const ForgotPass =styled.a`
color: #05a;
font-size: .75rem;
text-decoration:none;
`;

export const SeparatorContainer = styled.div`
display: flex;
padding-bottom: .875rem;
align-items: center;
`;

export const Separator =styled.div`
    height: 1px;
    width: 100%;
    background-color: #dbdbdb;
flex:1;
`;

export const Or =styled.span`
color: #ccc;
padding: 0 1rem;
text-transform: uppercase;
font-size: .75rem;
`;


export const SocialContainer = styled.div`
display: flex;
justify-content:space-between;
flex-wrap: wrap;
margin: 0 -.3125rem;

`;

export const SocialButton = styled.button`
display: flex;
flex:1;
align-items:center;
margin: .3125rem;
background-color: #${props => props.color};
box-sizing: border-box;
outline: none;
border: 0;
padding: 0 2px;
border-radius: 2px;
width: 100%;
height: 2.5rem;
font-size: .875rem;
box-shadow: 0 1px 1px rgb(0 0 0 / 9%);
cursor: pointer;

&:hover{
    opacity: .91;
}

`;

export const Icon = styled.div`
display: flex;
justify-content:center;
align-items:center;
width: 2.25rem;
height: 2.25rem;
color: #fff;
cursor: pointer;
`;

export const IconLabel =styled.label`
color: #fff;
text-transform:capitalize;
cursor: pointer;
`;

export const SignupContainer = styled.div`
 margin-bottom: 1.875rem;
`;

export const LabelNew = styled.div`
white-space:pre;
display: flex;
justify-content: center;
align-items: center;
font-size: .875rem;
padding-right: .25rem;
color: rgba(0,0,0,.26);
`;

export const  LabelSignup = styled.a`
text-transform:capitalize;
color:#000;
font-weight: bold;
cursor: pointer;
white-space:pre;
`;